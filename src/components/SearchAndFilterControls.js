import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import { ContentPanel } from './StyledComponents'
import { Menu, Dropdown, Button, message, Space, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const FILTER_OPTIONS = ["Sender Address","TX Hash"]

export const SearchAndFilterControls = () => {

  const [chosenFilter, setChosenFilter] = useState("Sender Address")
  
  const [defaultSearch, setdefaultSearch] = useState("Sender Address / Txn Hash")

  
  const { Search } = Input;
  const onSearch = (value) => {
    // TODO - search logic here
    console.log(defaultSearch)
    console.log(value);
  }

  // const handleMenuSearch= (e) => {  
  //   if (!e.key) return
  //   console.log(e);
  //   setdefaultSearch("")
  // }


  const handleMenuClick = (e) => {  
    if (!e.key) return
    setChosenFilter(FILTER_OPTIONS[e.key-1])
  }


  const menu = (
    <div className = 'allFilter'>
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" >
          Sender Address
      </Menu.Item>
        <Menu.Item key="2" >
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
              <Button  onClick={handleMenuClick} size="medium" style={{ width: 140 }}> 

                {chosenFilter}

                <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </div>

        <div className='searchBar'>
          <Space direction="vertical">
            <Search placeholder= {defaultSearch} style={{ width: 1000 }} allowClear onSearch={onSearch}  enterButton />
          </Space>
        </div>
      </div>
    </ContentPanel>
  )
}



// onChange={(e) => {allowClear} =true }