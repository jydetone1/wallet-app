import apple from '../../assets/apple.svg';
import target from '../../assets/target.svg';
import electronics from '../../assets/electronics.svg';
import walmart from '../../assets/walmart.svg';
import fastFood from '../../assets/fast-food.svg';
import food from '../../assets/food.svg';
import pharmacy from '../../assets/pharmacy.svg';
import shopping from '../../assets/shopping.svg';
import material from '../../assets/material.svg';
import moment from 'moment';

const memo: { [key: number]: string } = {};

export const calculateDailyPoints = (dayOfSeason: number): string => {
  if (dayOfSeason <= 2) return dayOfSeason === 1 ? '2' : '3';

  if (memo[dayOfSeason]) {
    return memo[dayOfSeason].toString();
  }

  const prevDayPoints = parseFloat(calculateDailyPoints(dayOfSeason - 1));
  const prevPrevDayPoints = parseFloat(calculateDailyPoints(dayOfSeason - 2));

  const points = prevPrevDayPoints + prevDayPoints * 0.6;

  const pointsString =
    points >= 1000
      ? `${Math.round(points / 1000)}K`
      : Math.round(points).toString();

  memo[dayOfSeason] = pointsString;

  return pointsString;
};

export const getDayOfSeason = (date: Date): number => {
  const month = date.getMonth();
  const year = date.getFullYear();

  let seasonStart: moment.Moment;
  if (month >= 2 && month <= 4) {
    seasonStart = moment(`${year}-03-01`).startOf('day');
  } else if (month >= 5 && month <= 7) {
    seasonStart = moment(`${year}-06-01`).startOf('day');
  } else if (month >= 8 && month <= 10) {
    seasonStart = moment(`${year}-09-01`).startOf('day');
  } else {
    seasonStart =
      month === 0
        ? moment(`${year - 1}-12-01`).startOf('day')
        : moment(`${year}-12-01`).startOf('day');
  }

  const currentDate = moment(date).startOf('day');
  return currentDate.diff(seasonStart, 'days') + 1;
};

export const Icons = [
  {
    name: 'Apple',
    icon: apple,
  },
  {
    name: 'Target',
    icon: target,
  },
  {
    name: 'Walmart',
    icon: walmart,
  },
  {
    name: 'IKEA',
  },

  {
    name: 'Best Buy',
    icon: electronics,
  },
  {
    name: 'Costco',
    icon: shopping,
  },
  {
    name: "McDonald's",
    icon: fastFood,
  },
  {
    name: 'CVS',
    icon: pharmacy,
  },

  {
    name: 'Home Depot',
    icon: material,
  },

  {
    name: 'Whole Foods',
    icon: food,
  },
];
