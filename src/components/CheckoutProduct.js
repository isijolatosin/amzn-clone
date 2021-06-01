import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';
import db from '../../firebase';
import { useSession } from 'next-auth/client';

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  category,
  image,
  hasPrime,
  description,
}) {
  const dispatch = useDispatch();
  const [session] = useSession();

  const addItemToBasket = () => {
    // const product = {
    //   id,
    //   title,
    //   price,
    //   rating,
    //   category,
    //   image,
    //   hasPrime,
    //   description,
    // };
    // // Push item into REDUX
    // dispatch(addToBasket(product));

    // Adding to DB
    db.collection('checkout')
      .doc(`${session.user.email}/`)
      .collection('shopping-items')
      .add(
        {
          id: id,
          title: title,
          price: price,
          description: description,
          category: category,
          image: image,
          hasPrime: hasPrime,
        },
        { merge: true }
      )
      .then(() => {
        console.log(`SUCCESS: item ${session.id} had been added to the DB`);
      })
      .catch((error) => console.log('Error' + error.message));
  };

  const removeItemFromBasket = () => {
    // Adding to DB
    db.collection('checkout')
      .doc(`${session.user.email}/`)
      .collection('shopping-items')
      .doc(`${id}`)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });

    // .onSnapshot((snapshot) =>
    //   snapshot.docs.map((doc) => {
    //     if (doc.id === id) {
    //       doc.delete();
    //       // console.log(doc.id);
    //     }
    //   })
    // );

    // remove item from REDUX
    // dispatch(removeFromBasket({ id }));
  };

  return (
    <div className='grid grid-cols-5'>
      <div className='hover_animation'>
        <Image src={image} height={200} width={200} objectFit='contain' />
      </div>

      {/* middle */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <p className='font-bold'>
          CAD
          <Currency quantity={price} currency='CAD' />
        </p>
        {hasPrime && (
          <div className='flex items-center space-x-2 '>
            <img
              loading='lazy'
              className='w-12'
              src='https://links.papareact.com/fdw'
              alt=''
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Right and remove button */}
      <div className='flex space-x-3 my-auto justify-self-end'>
        <button
          onClick={addItemToBasket}
          className='flex mt-auto justify-center self-end button1'
        >
          <AddShoppingCartIcon className='text-white' />
        </button>
        <button
          key={id}
          onClick={removeItemFromBasket}
          className='flex mt-auto justify-center self-end button1'
        >
          <RemoveShoppingCartIcon className='text-white' />
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
