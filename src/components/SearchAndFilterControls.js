import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import { ContentPanel } from './StyledComponents'

import { Menu, Dropdown, Button, message, Space, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';



export const SearchAndFilterControls = () => {

  const { Search } = Input;

  const onSearch = (value) => {
    // TODO - search logic here
    console.log(value);
  }


  function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

  // const [menuItems,setMenuItems] = useState([
  //   {Menu: 'BlockNumber', id : 1},
  //   {Menu: 'Address', id : 2},
  //   {Menu: 'Hash', id : 3}

  // ])

  // {menuItems.map(item => {
  //   return( <li key = {item.id}> {item.Menu}</li>)
  // })}

  const handleMenuClick = (e) => {   
    
    message.info('Click on menu item.');
    console.log('click', e);
  }




  const menu = (
    <div className = 'allFilter'>
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" >
          Block Number
      </Menu.Item>
        <Menu.Item key="2" >
          Sender Address
      </Menu.Item>
        <Menu.Item key="3" >
          Tx Hash
      </Menu.Item>
      </Menu>
    </div>
  );





     return (
    <ContentPanel>
      <div className='search'>
        <div className=' filterBar'>
          <Space wrap>
            <Dropdown placeholder="Search" overlay={menu} trigger={['click']} size= {'large'}  >
              <Button  onClick={handleMenuClick}> 

              All Filters

                <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </div>

        <div className='searchBar'>
          <Space direction="vertical">
            <Search placeholder="Search by Block Number / Address / Txn Hash" onSearch={onSearch} enterButton />
          </Space>
        </div>
      </div>
    </ContentPanel>
  )
}


