import { Form, Input, Button } from 'antd';
import { useEffect } from 'react';
import { HomeApi, HomeEditApi } from 'utils/api';

const Home = () => {
  const [from] = Form.useForm();

  useEffect(() => {
    HomeApi().then((res) => {
      from.setFieldsValue(res.data);
    });
  });
  const onFinish = (values) => {
    HomeEditApi(values).then((res) => {
      from.setFieldsValue(res.data.data);
    });
  };
  return (
    <div>
      <Form
        name="land"
        form={from}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item name="_id" style={{ display: 'none' }}>
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: 'email', message: '电子邮件格式不正确' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Whatsapp" name="whatsapp">
          <Input />
        </Form.Item>
        <Form.Item label="跳转链接" name="url">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Home;
