import Image from 'next/image';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer2 from '../components/Footer2';
import { selectItems, selectTotal } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import CheckoutProduct2 from '../components/CheckoutProduct2';
import Currency from 'react-currency-formatter';
import { getSession, useSession } from 'next-auth/client';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import db from '../../firebase';

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const [itemsList, setItemsList] = useState([]);
  // const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  // console.log(itemsList);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // call the backend to create a checkout session...

    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: itemsList,
      email: session.user.email,
    });

    // After the checkout session has been created and there is a response from the stripe(payment transaction completed...), we redirect user/customer to stripe checkout session...
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  // Getting items from DB
  useEffect(() => {
    db.collection('checkout')
      .doc(`${session.user.email}/`)
      .collection('shopping-items')
      .onSnapshot((snapshot) =>
        setItemsList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [itemsList]);

  // Calculating Subtotal
  const subTotal = itemsList.reduce(
    (total, item) => total + item.data.price,
    0
  );

  // console.log(subTotal);

  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* left */}
        <div>
          <div className='flex-grow m-5 shadow-xl'>
            <Image
              src='https://links.papareact.com/ikj'
              width={1020}
              height={250}
              objectFit='contain'
            />
          </div>
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {itemsList.length === 0
                ? 'Your Amazon Basket is empty'
                : 'Shopping Basket'}
            </h1>
            {itemsList.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.data.title}
                price={item.data.price}
                rating={item.data.rating}
                category={item.data.category}
                image={item.data.image}
                hasPrime={item.data.hasPrime}
                description={item.data.description}
              />
            ))}
            {/* THIS IS FOR GETTING ITEMS FROM REDUX */}
            {/* {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
                description={item.description}
              />
            ))} */}
          </div>
        </div>

        {/* Right */}
        {itemsList.length > 0 && (
          <div className='flex flex-col bg-white p-10 shadow-md'>
            {itemsList.length > 0 && (
              <>
                <h2 className='whitespace-nowrap'>
                  Subtotal ({itemsList.length} items):{' '}
                  <span className='font-bold'>
                    CAD
                    <Currency quantity={subTotal} currency='CAD' />
                  </span>
                </h2>
                <button
                  role='link'
                  onClick={createCheckoutSession}
                  disabled={!session}
                  className={`button mt-2 self-center ${
                    !session &&
                    'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                </button>
              </>
            )}
          </div>
        )}
      </main>
      <div className='mt-10'>
        <Footer2 />
      </div>
    </div>
  );
}

export default Checkout;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session: session,
    },
  };
}
