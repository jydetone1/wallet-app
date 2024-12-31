import { FC, useEffect, useState } from 'react';
import check from '../assets/check.svg';
import { ILatestTransaction } from './LatestTransaction';
import { calculateDailyPoints } from './utils/helper';
import { transactionTexts } from './utils/texts';
import LatestTransaction from './LatestTransaction';

const limit = 5000;
const TransactionCard: FC = () => {
  const [transactions, setTransactions] = useState<ILatestTransaction[]>([]);
  const [cardBalance, setCardBalance] = useState(0);
  const available = limit - cardBalance;
  const dailyPoints = calculateDailyPoints(3);

  useEffect(() => {
    fetch('/public/data.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load data');
        return res.json();
      })
      .then((data) => setTransactions(data));

    setCardBalance(Math.floor(Math.random() * 1500));
  }, []);

  return (
    <section className='p-3 block md:hidden'>
      <section className='grid grid-cols-3 gap-3 mb-7'>
        <div className='col-span-2 row-start-1 bg-white rounded-lg p-4 flex flex-col gap-2 h-fit '>
          <h2 className='text-black font-normal text-base leading-none'>
            {transactionTexts.cardBalance}
          </h2>
          <p className='text-black font-bold text-4xl'>${cardBalance}</p>
          <p className='text-slate-500 font-normal text-sm leading-none'>
            ${available} {transactionTexts.available}
          </p>
        </div>
        <div className='col-span-2 row-start-2 bg-white rounded-lg px-4 flex flex-col justify-center items-start  h-[110px] '>
          <h2 className='text-black font-normal text-base'>
            {transactionTexts.dailyPoints}
          </h2>
          <p className='text-slate-500 font-normal text-sm'>{dailyPoints}</p>
        </div>
        <div className='col-start-3 row-span-2 bg-white rounded-lg p-4 flex flex-col justify-between  h-[240px]'>
          <h2 className='flex-auto text-black font-normal text-base truncate'>
            {transactionTexts.noPaymentDue} <br />
            <span className='text-slate-500 font-normal text-sm'>
              {transactionTexts.youPaid}
            </span>
          </h2>
          <div className='flex justify-end'>
            <div className='bg-slate-100 h-16 w-16 rounded-full flex justify-center items-center'>
              <img src={check as string} alt='check' className='w-[35px]' />
            </div>
          </div>
        </div>
      </section>
      <h1 className='text-black text-2xl font-bold mb-2 leading-none'>
        {transactionTexts.latestTransaction}
      </h1>
      <section className='bg-white rounded-lg '>
        {transactions.slice(0, 10).map((transaction) => (
          <LatestTransaction key={transaction.id} {...transaction} />
        ))}
      </section>
    </section>
  );
};

export default TransactionCard;
