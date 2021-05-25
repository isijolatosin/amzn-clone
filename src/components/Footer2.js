import Image from 'next/image';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import { useRouter } from 'next/router';

function Footer2() {
  const router = useRouter();

  return (
    <footer className='bg-amazon_blue-mlight w-full'>
      <div className='sm:flex text-white sm:justify-between text-sm  sm:m-auto md:w-10/12 lg:w-9/12 xl:w-7/12 sm:p-0 p-10'>
        <div className='pt-10 pb-10'>
          <h1 className='text-lg font-bold'>Get to know Us</h1>
          <p className='link mt-2'>Careers</p>
          <p className='link mt-2'>Amazon and Our Planet</p>
          <p className='link mt-2'>Investor Relations</p>
          <p className='link mt-2'>Press Releases</p>
        </div>
        <div className='pt-10 pb-10'>
          <h1 className='text-lg font-bold'>Make Money with Us</h1>
          <p className='link mt-2'>Sell on Amazon</p>
          <p className='link mt-2'>Sell Under Amazon Accelerator</p>
          <p className='link mt-2'>Amazon Associates</p>
          <p className='link mt-2'>Sell on Amazon Handmade</p>
          <p className='link mt-2'>Advertise Your Products</p>
          <p className='link mt-2'>Independently Publish with Us</p>
          <p className='link mt-2'>Host an Amazon Hub</p>
        </div>
        <div className='pt-10 pb-10'>
          <h1 className='text-lg font-bold'>Amazon Payment Products</h1>
          <p className='link mt-2'>Amazon.ca Rewards Mastercard</p>
          <p className='link mt-2'>Shop with Points</p>
          <p className='link mt-2'>Reload Your Balance</p>
          <p className='link mt-2'>Amazon Currency Converter </p>
          <p className='link mt-2'>Gift Cards </p>
          <p className='link mt-2'>Amazon Cash</p>
        </div>
        <div className='pt-10 pb-10'>
          <h1 className='text-lg font-bold'>Let Is Help You</h1>
          <p className='link mt-2'>COVID-19 and Amazon</p>
          <p className='link mt-2'>Shipping Rates & Policies</p>
          <p className='link mt-2'>Amazon Prime</p>
          <p className='link mt-2'>Returns Are Easy</p>
          <p className='link mt-2'>Manage your Content and Devices </p>
          <p className='link mt-2'></p>
        </div>
      </div>
      <div className='border-t border-amazon_blue-xlight pt-5 pb-7 flex justify-center '>
        <div className='mt-5'>
          <Image
            onClick={() => router.push('/')}
            src='https://links.papareact.com/f90'
            width={120}
            height={30}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        <div className='flex ml-10'>
          <div className='flex text-white text-xs border p-2 rounded-md h-11'>
            <LanguageOutlinedIcon className='mr-2' />
            <select
              className='bg-transparent outline-none'
              name='language'
              id='language'
            >
              <option value='English'>English</option>
              <option value='French'>French</option>
            </select>
          </div>
          <div className='flex text-white text-xs border p-2 ml-2 sm:rounded-md rounded-full sm:mt-0 mt-2 h-7 w-7 sm:h-11 sm:w-28'>
            <img
              src='https://www.transparentpng.com/thumb/canada-flag/leaf-flag-of-canada-png-4.png'
              alt=''
              width={25}
            />
            <h1 className='hidden sm:flex pr-7 mt-1.5 ml-2'>Canada</h1>
          </div>
        </div>
      </div>
      <div className='w-full text-white bg-amazon_blue-light sm:flex pb-10 pt-2 '>
        <div className='sm:flex sm:justify-between text-xs  sm:m-auto md:w-10/12 lg:w-9/12 xl:w-7/12 sm:p-0 p-10'>
          <div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Amazon Music</h1>
              <p className='link mt-0.2'>
                Stream millions
                <br /> of songs
              </p>
            </div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Book Depository</h1>
              <p className='link mt-0.2'>
                Books With Free
                <br />
                Delivery Worldwide
              </p>
            </div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Warehouse Deals</h1>
              <p className='link mt-0.2'>
                Open-Box
                <br />
                Discounts{' '}
              </p>
            </div>
          </div>
          <div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Amazon Advertising</h1>
              <p className='link mt-0.2'>
                Find, attract, and
                <br /> engage customers
              </p>
            </div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Goodreads</h1>
              <p className='link mt-0.2'>
                Book reviews
                <br /> & recommendations
              </p>
            </div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Whole Foods Market</h1>
              <p className='link mt-0.2'>
                We Believe in
                <br />
                Real Food{' '}
              </p>
            </div>
          </div>
          <div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Amazon Business</h1>
              <p className='link mt-0.2'>
                Everything for
                <br />
                your business
              </p>
            </div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>IMDb</h1>
              <p className='link mt-0.2'>
                Movies, Tv
                <br />& Celebrities
              </p>
            </div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Amazon Renewed</h1>
              <p className='link mt-0.2'>
                Like-new products
                <br />
                you can trust
              </p>
            </div>
          </div>
          <div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Amazon Drive</h1>
              <p className='link mt-0.2'>
                Cloud Storage
                <br />
                from Amazon
              </p>
            </div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Amazon Photos</h1>
              <p className='link mt-0.2'>
                Unlimited Photo Storage
                <br />
                Free With Prime
              </p>
            </div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Blink</h1>
              <p className='link mt-0.2'>
                Smart Security
                <br />
                for Every Home
              </p>
            </div>
          </div>
          <div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Amazon Web Services</h1>
              <p className='link mt-0.2'>
                Scalable Cloud
                <br />
                Computing Serivces
              </p>
            </div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Shopbop</h1>
              <p className='link mt-0.2'>
                Designer
                <br />
                Fashion Brands
              </p>
            </div>
            <div className='pt-5'>
              <h1 className='text-sm font-bold'>Amazon Second Chance</h1>
              <p className='link mt-0.2'>
                Pass it on, trade it in
                <br />
                give it a second life
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-gray-500 sm:flex pl-10 sm:pl-0 bg-amazon_blue-light sm:space-x-10 justify-center'>
        <div className='flex text-xs pb-1 space-x-5 '>
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Interest-Based Ads</p>
        </div>
        <div className='text-xs pb-12'>
          <p>
            {`\u00A9${new Date().getFullYear()}`}, Amazon-clone by -{' '}
            <a
              className='text-blue-500'
              href='https://olu-isijola.herokuapp.com/#home'
              target='blank'
            >
              oluwatosin isijola.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
