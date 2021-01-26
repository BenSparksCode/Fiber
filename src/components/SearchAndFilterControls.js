import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { FlashLoanListItem } from './FlashLoanListItem'
import { ContentPanel } from './StyledComponents'

import { Menu, Dropdown, Button, message, Space, Input} from 'antd';
import { DownOutlined,AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);



function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" >
      Block Number
    </Menu.Item>
    <Menu.Item key="2" >
      From Address
    </Menu.Item>
    <Menu.Item key="3" >
      Tx Hash
    </Menu.Item>
  </Menu>
);



export const SearchAndFilterControls = () => {

  return (
    <div>
      <ContentPanel>

        <h1 className='FLTableTitle'>Search and Filter Controls</h1>

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
              <Search placeholder="search by Block Number / Address / Txn Hash" onSearch={onSearch} enterButton />
            </Space>
          </div>
        </div>


      </ContentPanel>
    </div>
  )
}


