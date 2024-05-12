import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

function OrgHospitalForm({ type }) {
  // Destructure the 'type' prop
  return (
    <>
      <Form.Item
        label={type === 'hospital' ? 'Hospital Name' : 'Organization Name'}
        name={type === 'hospital' ? 'Hospital Name' : 'Organization Name'}
      >
        <Input />
      </Form.Item>

      <Form.Item name="owner" label="Owner">
        <Input />
      </Form.Item>

      <Form.Item name="email" label="Email">
        <Input />
      </Form.Item>

      <Form.Item name="phone" label="Phone">
        <Input />
      </Form.Item>

      <Form.Item name="website" label="Website">
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Password">
        <Input type="password" />
      </Form.Item>

      <Form.Item name="address" label="Address " className="col-span-2">
        <TextArea />
      </Form.Item>
    </>
  );
}

export default OrgHospitalForm;
