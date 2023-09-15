import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchValue } from '../../../redux/filters/slice';
import SearchIcon from '../../../assets/searchIcon.svg';
import './searchBar.scss';

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setInputValue] = useState<string>('');
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    dispatch(changeSearchValue(event.target.value));
  };

  return (
    <div className="input-container">
      <p className="input-container__title">Search by keyword</p>
      <div className="input-wrapper">
        <div className="input-search">
          <input
            placeholder="Type to search..."
            value={value}
            onChange={handleChangeInput}
          />
          <span className="input-search__icon">
            <SearchIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
