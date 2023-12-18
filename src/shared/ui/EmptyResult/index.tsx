import React from 'react';
import './empty.scss';

export const EmptyResult: React.FC = () => {
  return (
    <div className="empty-result">
      <h3>No results found</h3>
    </div>
  );
};
