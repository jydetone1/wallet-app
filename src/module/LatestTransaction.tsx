import { FC } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Icons } from './utils/helper';
import menuRight from '../assets/menu-right.svg';

export interface ILatestTransaction {
  id: number;
  type: string;
  amount: number;
  name: string;
  description: string;
  date: string;
  pending: boolean;
  authorizedUser?: string;
  time?: string;
}
const LatestTransaction: FC<ILatestTransaction> = ({
  id,
  type,
  amount,
  name,
  description,
  date,
  pending,
  authorizedUser,
}) => {
  const displayDate = moment(date).isSame(moment(), 'day')
    ? moment(date).format('M/D/YY')
    : moment(date).format('dddd');

  const displayIcon = Icons.find((icon) => icon.name === name);

  return (
    <div>
      <Link to={`/transaction-details/${id}`}>
        <div className='flex gap-4 p-3'>
          <div className='h-11 w-11 rounded-md flex justify-center items-center bg-black p-3'>
            {displayIcon?.icon ? (
              <img
                src={displayIcon?.icon as string}
                alt={displayIcon.name}
                className='w-[17px]'
              />
            ) : (
              <p className='text-white font-bold text-sm'>
                {displayIcon?.name}
              </p>
            )}
          </div>
          <div className='flex justify-between items-start w-full'>
            <div className='flex flex-col gap-1'>
              <h2 className='text-black text-lg font-semibold leading-none'>
                {type === 'Payment' ? 'Payment' : name}
              </h2>
              <p className='text-slate-500 text-base font-normal'>
                {pending ? 'Pending -' : ''} {description}
              </p>
              <p className='text-slate-500 text-base font-normal leading-none'>
                {authorizedUser ? `${authorizedUser} - ` : ''}
                {displayDate}
              </p>
            </div>

            <div className='flex flex-col gap-1 justify-start items-center text-center'>
              <div className='flex items-start justify-start gap-2'>
                <h2 className='text-black text-lg font-semibold leading-none'>
                  {type === 'Payment'
                    ? `+$${amount.toFixed(2)}`
                    : `$${amount.toFixed(2)}`}
                </h2>
                <img
                  src={menuRight as string}
                  alt='menu-right'
                  className='w-[16px] h-[16px] min-w-4'
                />
              </div>
              <div
                className={`flex items-center justify-center rounded-sm p-[2px] ${
                  type === 'Payment' ? '' : 'bg-slate-100'
                }`}
              >
                <p className='text-slate-500 text-sm font-normal leading-none'>
                  {type === 'Payment' ? '' : '3%'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <hr />
    </div>
  );
};

export default LatestTransaction;
