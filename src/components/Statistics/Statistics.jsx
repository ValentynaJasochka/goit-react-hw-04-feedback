import {
  StatisticsItem,
  CountedStatistics,
  StatisticsList,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bed: {bad}</StatisticsItem>
      </StatisticsList>
      <CountedStatistics>Total feedbacks: {total}</CountedStatistics>
      <CountedStatistics>
        PositiveFeedbacks: {positivePercentage} %
      </CountedStatistics>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
