import React from 'react';
import { useDispatch } from 'react-redux';
import { filterChange } from '../reducers/filter';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    // input-field value is in variable event.target.value
    const inputStr = e.target.value;
    dispatch(filterChange(inputStr));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
