import Image from 'next/image';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { StarIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import db from '../../firebase';
import { useSession } from 'next-auth/client';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Products({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  const [showTitle, setShowTitle] = useState(false);
  const [session] = useSession();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
    };

    // Sending the product through dispatch action to REDUX store... the basket slice
    dispatch(addToBasket(product));

    // Adding to firebase DB...
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

  return (
    <div
      onMouseOver={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
      className='relative flex flex-col m-5 bg-white z-30 p-10 pt-16 hover_animation_nocursor'
    >
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        {category}
      </p>
      <div className='absolute top-6 right-2 flex self-end mb-3'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className='h-5 text-yellow-500' />
          ))}
      </div>
      <Image src={image} height={200} width={200} objectFit='contain' />
      <p className='text-xs mb-2 mt-5 line-clamp-2'>{description}</p>
      <div className='mb-5'>
        <p className='font-bold'>
          CA
          <Currency quantity={price} currency='CAD' />
        </p>
      </div>
      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img className='w-12' src='https://links.papareact.com/fdw' alt='' />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}

      {showTitle && (
        <div className='absolute flex justify-center pt-20 h-2/4 px-8 items-start bg-gray-700 bg-opacity-50 top-0 left-0 w-full rounded-b-3xl mt-11 mb-3'>
          <h4 className='text-white text-center font-extrabold'>{title}</h4>
        </div>
      )}
      <button
        onClick={addItemToBasket}
        className='flex mt-auto justify-center self-end button1'
      >
        <AddShoppingCartIcon className='text-white' />
      </button>
    </div>
  );
}

export default Products;
