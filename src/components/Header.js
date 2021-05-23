import Image from 'next/image';
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { selectItems } from '../slices/basketSlice';
import { useSelector } from 'react-redux';
// import { MaterialCommunityIcons } from 'react-web-vector-icons';

function header() {
  const [showSignOut, setShowSignOut] = useState(false);
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  useEffect(() => {
    setTimeout(() => {
      setShowSignOut(false);
    }, [5000]);
  }, []);

  return (
    <header>
      {/* Top navigation */}
      <div className='flex items-center bg-amazon_blue p-1 flex-row py-2'>
        {/* Amazon Logo */}
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            onClick={() => router.push('/')}
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        {/* Search */}
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
            type='text'
          />
          <SearchIcon className='h-12 p-4' />
        </div>
        {/* Right */}
        <div className=' text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div
            onMouseOver={() => setShowSignOut(true)}
            onClick={!session && signIn}
            className='link'
          >
            <p>
              Hello,{' '}
              {session ? (
                <span className='text-yellow-400 font-bold'>
                  {session.user.name.split(' ')[0]}
                </span>
              ) : (
                'Sign In'
              )}
            </p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div
            onClick={() => router.push('/checkout')}
            className='relative link flex items-center'
          >
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black'>
              {items.length}
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden font-extrabold md:text-sm md:inline mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom navigation */}
      <div className='bg-white flex text-amazon_blue space-x-3 p-2 pl-6 whitespace-nowrap items-center text-xs'>
        <p className='link flex items-center '>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='hover_animation shadow-xl p-2 rounded-xl'>Prime Video</p>
        <p className='hover_animation shadow-xl p-2 rounded-xl'>
          Amazon Business
        </p>
        <p className='hover_animation shadow-xl p-2 rounded-xl'>
          Today's Deals
        </p>
        <p className='hidden hover_animation shadow-xl p-2 rounded-xl lg:inline-flex'>
          Electronis
        </p>
        <p className='hidden hover_animation shadow-xl p-2 rounded-xl lg:inline-flex'>
          Food & Grocery
        </p>
        <p className='hidden hover_animation shadow-xl p-2 rounded-xl lg:inline-flex'>
          Prime
        </p>
        <p className='hidden hover_animation shadow-xl p-2 rounded-xl lg:inline-flex'>
          Buy Again
        </p>
        <p className='hidden hover_animation shadow-xl p-2 rounded-xl lg:inline-flex'>
          Shopper Toolkit
        </p>
        <p className='hidden hover_animation shadow-xl p-2 rounded-xl lg:inline-flex'>
          Health & Personal Care
        </p>
        {session
          ? showSignOut && (
              <div
                onClick={signOut}
                className='absolute hover:cursor-pointer right-10 bg-white rounded-sm shadow-lg p-2 text-amazon_blue font-bold'
              >
                <p>Sign Out</p>
              </div>
            )
          : null}
      </div>

      {/* sidebar */}
      <div>
        <div>{/* sidebar header */}</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </header>
  );
}

export default header;
