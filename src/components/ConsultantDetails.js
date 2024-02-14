import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import React from 'react';

const ConsultantDetails = ({ editable }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <h4>ConsultantDetails</h4>
      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        layout="vertical"
        disabled={!editable}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      ><Row>
          <Col xs={{
            span: 5,
            offset: 1,
          }}
            lg={{
              span: 6,
              offset: 2,
            }} >
            <Form.Item
              label="LAST NAME"
              name="lastname"
              rules={[
                {
                  required: true,
                  message: 'Please input your lastname!',
                },
              ]}
            >
              <Input />

            </Form.Item>
          </Col>
          <Col xs={{
            span: 5,
            offset: 1,
          }}
            lg={{
              span: 6,
              offset: 2,
            }} >
            <Form.Item
              label="FIRST NAME"
              name="firstname"
              rules={[
                {
                  required: true,
                  message: 'Please input your firstname!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={{
            span: 5,
            offset: 1,
          }}
            lg={{
              span: 6,
              offset: 2,
            }} >
            <Form.Item
              label="JOB TITLE"
              name="jobtitle"
              rules={[
                {
                  required: true,
                  message: 'Please input your jobtitle!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>


        </Row>

      </Form >
    </>
  );
};

export default ConsultantDetails;
