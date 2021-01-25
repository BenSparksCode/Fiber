import React, {useContext} from 'react'
import { AppContext } from '../contexts/AppContext'
import { FlashLoanListItem } from './FlashLoanListItem'
import { ContentPanel } from './StyledComponents'

import { Menu, Dropdown, Button, message, Space } from 'antd';
import { DownOutlined} from '@ant-design/icons';

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

    const { FLs } = useContext(AppContext)
    
    return (
        <div>
        <ContentPanel>

            <h1 className='FLTableTitle'>Search and Filter Controls</h1>
             <div>
            <Space wrap>                    
                <Dropdown overlay={menu}>
                <Button>
                    All Filters <DownOutlined />
                </Button>
                </Dropdown>
            </Space>

            <input type="text" placeholder = "Search..."/>
                
            </div>

        </ContentPanel>
        </div>
    )
}

