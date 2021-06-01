import { getSession } from 'next-auth/client';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CancelIcon from '@material-ui/icons/Cancel';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
  const [modal, setModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, [10000]);
  }, []);

  return (
    <div className='bg-gray-100 relative'>
      <Head>
        <title>Clone by oluwatosin</title>
      </Head>

      <div className='sticky top-0 z-40'>
        <Header />
      </div>

      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
        <ProductFeed products={products} />
      </main>

      <Footer />
      {modal && (
        <div>
          <div className='flex flex-col h-screen justify-center items-center text-white absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70 z-50 fixed'>
            <div className='relative bg-white p-10   bg-opacity-50 rounded-xl justify-center text-center '>
              <h1 className='text-3xl text-gray-500'>
                Site developed by oluwatosin
              </h1>

              <div className='flex space-x-5 justify-center mt-2'>
                <div className='space-x-2 hover:cursor-pointer flex items-center '>
                  <BusinessCenterIcon
                    fontSize='large'
                    className='text-gray-500'
                  />
                  <a
                    className='text-black'
                    href='https://olu-isijola.herokuapp.com/'
                    target='blank'
                  >
                    Portfolio.
                  </a>
                </div>
                <div className='space-x-2 hover:cursor-pointer flex items-center '>
                  <YouTubeIcon fontSize='large' className='text-gray-500' />
                  <a
                    className='text-black'
                    href='https://www.youtube.com/channel/UCGg2VrjT2wLcWbf6S5DMt7A/videos'
                    target='blank'
                  >
                    Youtube.
                  </a>
                </div>
              </div>
              <div className='text-xs text-gray-600 mt-2'>
                {`\u00A9${new Date().getFullYear()}`}, Amazon-clone
              </div>
              <div
                onClick={() => setModal(false)}
                className='text-white absolute z-60 top-0 right-0 hover:cursor-pointer '
              >
                <CancelIcon fontSize='large' />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: {
      products: products,
      session: session,
    },
  };
}

// https://amazon-starter-template-nextjs-4fvlr3yj2-isijolatosin.vercel.app/api/webhook
