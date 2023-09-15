import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import './styles/results.scss';

export const ResultsInfo: React.FC = () => {
  const { cardList } = useSelector((state: RootState) => state.cards);

  return (
    <span className="results-info-container">
      Showing {cardList.length} results
    </span>
  );
};
