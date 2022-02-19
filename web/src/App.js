import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

export default function App() {
  const [menuKey, setMenuKey] = useState('');
  const location = useLocation();
  useEffect(() => {
    setMenuKey(location.pathname);
  }, [location.pathname]);
  const Logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  return (
    <Layout className="content" style={{ height: '100vh' }}>
      <Header style={{ width: '100%' }}>
        <Menu theme="dark" mode="horizontal" selectedKeys={[menuKey]}>
          <Menu.Item
            key="logout"
            style={{ marginLeft: 'auto', color: '#ffffff' }}
          >
            <p onClick={Logout}>退出登录</p>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '10px 30px', background: '#fff' }}>
        <Outlet />
      </Content>
    </Layout>
  );
}
