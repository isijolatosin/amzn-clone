import { useSession, signOut } from 'next-auth/client';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import ClearIcon from '@material-ui/icons/Clear';

function Sidebar({ setShowSideBar }) {
  const [session] = useSession();

  return (
    <div className='sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12'>
      {/* sidebar header */}
      <header className='relative flex top-0 z-40  text-white text-xl font-extrabold pb-3  items-center bg-amazon_blue-light pl-10 pt-3 pr-5 '>
        <AccountCircleIcon fontSize='large' className='text-white mr-2' />
        <p>
          Hello,{' '}
          {session ? (
            <span className='text-yellow-400 font-bold'>
              {' '}
              {session.user.name.split(' ')[0]}
            </span>
          ) : (
            'Sign In'
          )}
        </p>
        <div
          onClick={() => setShowSideBar(false)}
          className='absolute -right-12 '
        >
          <ClearIcon fontSize='large' className='text-white' />
        </div>
      </header>
      <div className='  '>
        <div className='overflow-y-scroll h-screen'>
          <div className='bg-white pt-5 pb-5 pl-10 flex flex-col border-b border-gray-300 '>
            <h1 className='mb-7 font-bold text-xl'>Trending</h1>
            <p className='mb-7'>Best Sellers</p>
            <p className='mb-7'>New Releases</p>
            <p className='mb-7'>Movers & Shakers</p>
          </div>
          <div className='bg-white pr-5 pt-5 pb-5 pl-10 flex flex-col border-b border-gray-300 '>
            <h1 className='mb-7 font-bold text-xl'>
              Digital Content And Devices
            </h1>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Best Sellers</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Fire Tablets & Fire TV</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Kindle</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Audible Audiobooks</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Amazon Prime Vidoe</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Amazon Music</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Appstore for Android</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
          </div>
          <div className='bg-white pr-5 pt-5 pb-5 pl-10 flex flex-col border-b border-gray-300 '>
            <h1 className='mb-7 font-bold text-xl'>Shop By Department</h1>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Books</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Video Games & Prime Gaming</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Music, Movies & TV Shows</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Electronis, Computers & Office</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex'>
              <p className='mb-7'>See All</p>
              <KeyboardArrowDownIcon
                fontSize='medium'
                className='text-gray-500 ml-3 '
              />
            </div>
          </div>
          <div className='bg-white pr-5 pt-5 pb-5 pl-10 flex flex-col border-b border-gray-300 '>
            <h1 className='mb-7 font-bold text-xl'>Programs & Features</h1>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Amazon Prime</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Savings Programs</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Gifts Cards</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Boutiques Francophones</p>
              <KeyboardArrowRightIcon
                fontSize='medium'
                className='text-gray-500'
              />
            </div>
            <div className='flex'>
              <p className='mb-7'>See All</p>
              <KeyboardArrowDownIcon
                fontSize='medium'
                className='text-gray-500 ml-3 '
              />
            </div>
          </div>
          <div className='bg-white pr-5 pt-5 pb-5 pl-10 flex flex-col border-b mb-10 border-gray-300 '>
            <h1 className='mb-7 font-bold text-xl'>Helps & Settings</h1>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Your Account</p>
            </div>
            <div className='flex align-center'>
              <LanguageOutlinedIcon
                fontSize='medium'
                className='text-gray-500 '
              />
              <p className='mb-7 ml-3'>English</p>
            </div>
            <div className='flex align-center '>
              <div className='text-xs'>
                <img
                  src='https://www.transparentpng.com/thumb/canada-flag/leaf-flag-of-canada-png-4.png'
                  alt=''
                  width={20}
                />
              </div>

              <p className='mb-7 ml-3'>Canada</p>
            </div>
            <div className='flex justify-between align-center'>
              <p className='mb-7'>Help</p>
            </div>
            {session && (
              <button onClick={signOut} className='flex focus:outline-none'>
                <p className='mb-7'>Sign Out</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
