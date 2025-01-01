import apple from '../../assets/apple.svg';
import target from '../../assets/target.svg';
import electronics from '../../assets/electronics.svg';
import walmart from '../../assets/walmart.svg';
import fastFood from '../../assets/fast-food.svg';
import food from '../../assets/food.svg';
import pharmacy from '../../assets/pharmacy.svg';
import shopping from '../../assets/shopping.svg';
import material from '../../assets/material.svg';

const memo: { [key: number]: number } = {};

export const calculateDailyPoints = (dayOfSeason: number): string => {
  if (dayOfSeason <= 2) return '2';

  if (memo[dayOfSeason]) return memo[dayOfSeason].toString();

  const prevDayPoints = parseFloat(calculateDailyPoints(dayOfSeason - 1));
  const prevPrevDayPoints = parseFloat(calculateDailyPoints(dayOfSeason - 2));

  const points = prevPrevDayPoints + prevDayPoints * 0.6;
  memo[dayOfSeason] = points;

  return points > 1000
    ? `${Math.round(points / 1000)}K`
    : Math.round(points).toString();
};

export const getCurrentDayOfMonth = (): number => {
  return new Date().getDate();
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
