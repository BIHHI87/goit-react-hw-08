import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeNameFilter,
  changeNumberFilter,
} from '../../redux/filters/slice';
import {
  selectNameFilter,
  selectNumberFilter,
} from '../../redux/filters/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterNameValue = useSelector(selectNameFilter);
  const filterNumberValue = useSelector(selectNumberFilter);

  const handleFilterChange = (event, typeEvent) => {
    typeEvent === 'name'
      ? dispatch(changeNameFilter(event.target.value))
      : dispatch(changeNumberFilter(event.target.value));
  };

  const nameSearchID = useId();
  const phoneSearchID = useId();
  return (
    <div className={css.searchBox}>
      <div className={css.searchLine}>
        <label htmlFor={nameSearchID}>Find contacts by name</label>
        <input
          id={nameSearchID}
          className={css.searchInput}
          type="text"
          value={filterNameValue}
          onChange={(event) => handleFilterChange(event, 'name')}
        />
      </div>
      <div className={css.searchLine}>
        <label htmlFor={phoneSearchID}>Find contacts by phone number</label>
        <input
          id={phoneSearchID}
          className={css.searchInput}
          type="text"
          value={filterNumberValue}
          onChange={(event) => handleFilterChange(event, 'number')}
        />
      </div>
    </div>
  );
};

export default SearchBox;