import { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ILatestTransaction } from './LatestTransaction';
import { transactionTexts } from './utils/texts';
import menuLeft from '../assets/menu-left.svg';
import moment from 'moment';

const TransactionDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [transaction, setTransaction] = useState<ILatestTransaction | null>(
    null
  );
  const navigation = useNavigate();

  useEffect(() => {
    if (id) {
      fetch('/data.json')
        .then((res) => res.json())
        .then((data) => {
          const transaction = data.find(
            (transaction: ILatestTransaction) => transaction.id === parseInt(id)
          );
          setTransaction(transaction);
        });
    }
  }, [id]);

  const goBack = useCallback(() => {
    navigation(-1);
  }, [navigation]);

  const displayDate = moment(transaction?.date).format('M/D/YY');

  return (
    <div className='p-4 block md:hidden'>
      <img
        src={menuLeft as string}
        alt='menu-left'
        className='w-[16px] cursor-pointer'
        onClick={goBack}
      />
      <div className='flex justify-center items-center text-center mb-7'>
        <div className='flex flex-col gap-2'>
          <p className='text-black font-bold text-6xl leading-none'>
            ${transaction?.amount.toFixed(2)}
          </p>
          <div>
            <p className='text-slate-500 font-normal text-base leading-none mb-1'>
              {transaction?.name}
            </p>
            <p className='text-slate-500 font-normal text-base leading-none'>
              {displayDate}, {transaction?.time}
            </p>
          </div>
        </div>
      </div>

      <div className='bg-white rounded-lg p-4'>
        <p className='text-black font-bold text-base'>
          {transactionTexts.status}
        </p>
        <p className='text-slate-500 font-normal text-base'>
          {transaction?.description}
        </p>
        <hr className='my-3' />
        <div className='flex justify-between items-center'>
          <p className='text-black font-bold text-base leading-none'>
            {transactionTexts.total}
          </p>
          <p className='text-black font-bold text-base leading-none'>
            ${transaction?.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
