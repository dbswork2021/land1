import { Form, Input, Button, message } from 'antd';
import { UserEditApi } from 'utils/api';

const formItemLayout = {
  wrapperCol: {
    xs: { span: 8 },
    sm: { span: 6 },
  },
};
const User = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    UserEditApi(values).then((res) => {
      form.resetFields();
      message.success(res.data.message);
    });
  };
  return (
    <Form {...formItemLayout} form={form} name="user" onFinish={onFinish}>
      <Form.Item
        name="username"
        label="用户名"
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: '再次输入密码',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次密码不一致'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          确认
        </Button>
      </Form.Item>
    </Form>
  );
};

export default User;
