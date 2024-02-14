import { Breadcrumb, Button, Layout, theme } from 'antd';
import React, { useState } from 'react';
import ConsultantDetails from './components/ConsultantDetails';
import HeaderComponent from './components/Header';
import TabsComponent from './components/Tabs';
const { Content, Footer } = Layout;

const App = () => {
  const [editable, setEditable] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <HeaderComponent />
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
          <h3>Profile Settings</h3>

          {!editable ? <Button type='primary' onClick={() => setEditable(!editable)}>Edit</Button> : (
            <>
              <div>
                <Button onClick={() => setEditable(!editable)}>Cancel</Button>
                <Button type='primary' style={{ marginLeft: '10px' }} onClick={() => setEditable(!editable)}>Save</Button>
              </div>
            </>
          )}
        </div>
        <Layout
          style={{
            padding: ' 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >

          <Content
            style={{
              padding: '0 24px',
              minHeight: 480,
            }}
          >
            <ConsultantDetails editable={editable} />
            <h5>Expected Salary</h5>

            <TabsComponent editable={editable} />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Find Pro ©{new Date().getFullYear()} Created by Find Pro
      </Footer>
    </Layout>
  );
};
export default App;
