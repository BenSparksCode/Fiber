import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import { ContentPanel } from './StyledComponents'
import { Menu, Dropdown, Button, Space, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const FILTER_OPTIONS = ["Contract Address"]

export const SearchAndFilterControls = () => {
  const { runSearchRequest } = useContext(AppContext)

  const [chosenFilter, setChosenFilter] = useState("Contract Address")

  const { Search } = Input;
  const onSearch = (value) => {
    console.log(value);

    // TODO - input validation

    runSearchRequest(value)
  }


  const handleMenuClick = (e) => {
    if (!e.key) return
    setChosenFilter(FILTER_OPTIONS[e.key - 1])
  }


  const menu = (
    <div className='allFilter'>
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" >
          Contract Address
        </Menu.Item>
      </Menu>
    </div>
  );


  return (
    <ContentPanel>
      <div className='Search'>
        <div className='SearchDropdownContainer filterBar'>
          <Space wrap>
            <Dropdown placeholder="Search" overlay={menu} trigger={['click']} size={'large'}  >
              <Button onClick={handleMenuClick} size="medium" style={{ width: "180px" }}>
                {chosenFilter}
                <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </div>

        <div className='SearchBarContainer'>
          <Search placeholder='Search by contract address' style={{ width: "100%" }} allowClear onSearch={onSearch} enterButton />
        </div>
      </div>
    </ContentPanel>
  )
}



// onChange={(e) => {allowClear} =true }