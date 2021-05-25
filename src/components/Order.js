import moment from 'moment';
import Currency from 'react-currency-formatter';

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  return (
    <div className='relative hover_animation_nocursor border rounded-xl mb-2'>
      <div className='rounded-t-xl flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-00'>
        <div>
          <p className='font-bold text-xs'>ORDER PLACED</p>
          <p className='text-gray-600'>
            {moment.unix(timestamp).format('DD MM YYYY')}
          </p>
        </div>
        <div>
          <p className='font-bold text-xs'>TOTAL</p>
          <p className='text-gray-600'>
            CA
            <Currency quantity={amount} currency='CAD' /> - Next Day Delievery{' '}
            CA
            <Currency quantity={amountShipping} currency='CAD' />
          </p>
        </div>
        <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>
          {items.length} {items.length <= 1 ? 'item' : 'items'}
        </p>
        <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-gray-600 text-xs whitespace-nowrap'>
          ORDER # {id}
        </p>
      </div>
      <div className='p-5 sm:p-10'>
        <div className='flex space-x-6 overflow-x-autoP'>
          {images.map((image) => (
            <img src={image} alt='' className='h-20 object-contain sm:h-32' />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
