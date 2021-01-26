import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { ContentPanel } from './StyledComponents'

import { Menu, Dropdown, Button, message, Space, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';


export const SearchAndFilterControls = () => {

  const { Search } = Input;

  function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  const onSearch = (value) => {
    // TODO - search logic here
    console.log(value);
  }

  const menu = (
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
  );

  return (
    <ContentPanel>
      <div className='search'>
        <div className=' filterBar'>
          <Space wrap>
            <Dropdown overlay={menu}>
              <Button>
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


