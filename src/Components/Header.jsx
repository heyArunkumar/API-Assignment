import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
let array=['GROOVIN']
function HeaderCom() {
  return (
    <div>
     <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={array.map((item, index) => ({
          key: String(index + 1),
          label: `${item}`,
        }))}
      />
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
     
      
    </Content>
    
  </Layout>
    </div>
  )
}

export default HeaderCom