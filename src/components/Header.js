import { BellOutlined, BookOutlined, RiseOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Image, Input, Layout } from 'antd';
import React from 'react';
const { Header } = Layout;
const { Search } = Input;

const HeaderComponent = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <Header
      style={{
        backgroundColor: 'white'
      }}
    >
      <div className="demo-logo" style={{ display: "flex", justifyContent: 'space-between' }}>
        <Image src="findpro.png" alt="findpro" width={100} height={40} />
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
            marginTop: '20px'
          }}
        />
        <div>
          <Button icon={<RiseOutlined />} style={{ marginTop: '20px', marginLeft: '20px' }} >
           Give us Feedback
          </Button>
          <Button icon={<BookOutlined />} style={{ marginTop: '20px', marginLeft: '20px' }} >
            My Jobs
          </Button>
          <BellOutlined style={{ marginTop: '20px', marginLeft: '20px' }} />
          <UserAddOutlined style={{ marginTop: '20px', marginLeft: '20px' }} />
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
