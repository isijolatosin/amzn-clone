import { getSession, useSession, signIn } from 'next-auth/client';
import Header from '../components/Header';
import moment from 'moment';
import db from '../../firebase';
import Order from '../components/Order';
import Footer2 from '../components/Footer2';

function Orders({ orders }) {
  const [session] = useSession();

  // console.log(orders);

  return (
    <div>
      <Header />
      <main className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b mb-2 pb-1 border-gray-300'>
          Your Orders
        </h1>
        {session ? (
          <h2 className='mb-2'>
            {orders.length} {orders.length <= 1 ? 'Order' : 'Orders'}
          </h2>
        ) : (
          <h2>
            Please{' '}
            <span
              className='hover:cursor-pointer text-blue-500'
              onClick={signIn}
            >
              sign in
            </span>{' '}
            to see your orders
          </h2>
        )}
        <div className='mt-5 space-y-4'>
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      </main>
      <div>
        <Footer2 />
      </div>
    </div>
  );
}

export default Orders;

// NODE JS STUFF
export async function getServerSideProps(context) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  // Get the user logged in credentials...
  // On the front-end, we use useSession() while on the back-end, we use getSession()...
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  // Firebase DB
  const stripeOrders = await db
    .collection('users')
    .doc(session.user.email)
    .collection('orders')
    .orderBy('timestamp', 'desc')
    .get();

  // Stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );
  return {
    props: {
      orders,
      session,
    },
  };
}
