import { Tabs } from 'antd';
import React from 'react';
import { salaryType } from './salaryType';
const TabsComponent = ({ editable }) => {


  return (
    <>
      <h5> Select Salary type</h5>
      <Tabs
        defaultActiveKey="hourly"
        items={salaryType}
      />
    </>
  );
};
export default TabsComponent;
