import React from 'react';
import './filters.scss';
import RadioGroup from './radioGroup/radioGroup';
import Select from './select/select';
import CheckBox from './checkBox/checkBox';

function Filters() {
  return (
    <div className="filters">
      <p>ФИЛЬТРЫ</p>
      <RadioGroup />
      <Select />
      <CheckBox />

    </div>
  );
}

export default Filters;
