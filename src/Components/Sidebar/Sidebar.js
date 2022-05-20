import React from 'react';
import { Layout, Menu } from 'antd';
import './Sidebar.css';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import TableData from '../TableData/TableData';
import Dashboard from '../Dashboard/Dashboard';
import { ReactComponent as DashboardIcon } from '../../assests/dashboard.svg';
import { ReactComponent as CategoriesIcon } from '../../assests/categories.svg';

const { Header, Sider, Footer } = Layout;
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: false
    }
  }
  render() {
    return (
      // eslint-disable-next-line
        <>
          <Layout className="h-100 ">
            <Sider width={250}>
               
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['dashboard']}
                style={{ height: '100%' }}
              >
                <h6 className='mt-5 text-center' style={{color:'white'}}>Assessment Task</h6>
                <NavLink to="/dashboard" className="ant-menu-item ant-menu-item-only-child mt-3" >
                  <DashboardIcon />
                  <Menu.Item key="dashboard">
                    <span className="qwe ">Dashboard</span>
                  </Menu.Item>
                </NavLink>

                <NavLink to="/data" className="ant-menu-item ant-menu-item-only-child " >
                  <CategoriesIcon />
                  <Menu.Item key="data">
                    <span className="qwe">Detailed Data</span>
                  </Menu.Item>
                </NavLink>
              </Menu>
            </Sider>
            <Layout className="site-layout ">
              <Header className="site-layout-background" >
                <h6 className='mt-4' style={{ color: 'white' }}>Wancloud's Assessment Task</h6>
              </Header>
              <Switch>
                <Route exact path="/data" component={TableData} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Redirect to="/dashboard" />
              </Switch>
            <Footer style={{backgroundColor:'#F2F8FF'}} >
             <h6 className='text-center font-weight-bold'>Designed and Developed by Abdul Hai</h6> 
            </Footer>
            </Layout>
          </Layout>
        </> 
    );
  }
}

export default Sidebar;