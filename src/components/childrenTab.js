import { InputNumber, Switch } from 'antd';
import React, { useState } from 'react';

const ChildrenTab = ({ fixedRate, min, max }) => {
  const [isFixed, setIsFixed] = useState(true);
  const [minNumber, setMinNumber] = useState();
  const [maxNumber, setMaxNumber] = useState();
  return (
    <>
      <h5>Salary value</h5>
      <span>Fixed</span>
      <Switch onChange={() => setIsFixed(!isFixed)} checked={!isFixed} /><span>Set Range</span>
      {isFixed && <div style={{ marginTop: '20px' }}> <InputNumber prefix="$" defaultValue={fixedRate} /></div>}

      {!isFixed && (<>
        <div style={{ marginTop: '20px', }}>
          <InputNumber min={min} defaultValue={min} value={minNumber} prefix="$" suffix="min" onChange={(e) => setMinNumber(e)} width={100} style={{ marginRight: '40px' }} />
          <InputNumber value={maxNumber} defaultValue={min} prefix="$" suffix="max" onChange={(e) => setMaxNumber(e)} max={max} width={100} />
        </div></>)}
    </>
  );
};

export default ChildrenTab;
