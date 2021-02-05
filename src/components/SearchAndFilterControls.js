import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../contexts/AppContext'
import { ContentPanel } from './StyledComponents'
import { Menu, Dropdown, Button, Space, Input, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Search } = Input;

const FILTER_OPTIONS = ["Contract Address"]

export const SearchAndFilterControls = () => {
  const { runSearchRequest, filteredFLs, expandSearch, clearSearchFilterResults } = useContext(AppContext)

  const [chosenFilter, setChosenFilter] = useState("Contract Address")
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchText, setSearchText] = useState("")
  const [resultCnt, setResultCnt] = useState(0)

  useEffect(() => {
    if(filteredFLs && filteredFLs.length > 0){
      setSearchLoading(false)
      setResultCnt(filteredFLs.length)
    }
  }, [filteredFLs])

  const onSearch = () => {
    if (!searchText) {
      message.error("Please enter a valid smart contract address.");
      return null
    }
    // checks if input is Ethereum address
    if (/^(0x)?[0-9a-f]{40}$/i.test(searchText)) {
      setSearchLoading(true)
      runSearchRequest(searchText)
    } else {
      message.error('Please enter a valid smart contract address.')
    }
  }

  const onChange = (e) => {
      setSearchText(e.target.value)
  }


  const handleMenuClick = (e) => {
    if (!e.key) return
    setChosenFilter(FILTER_OPTIONS[e.key - 1])
  }

  const resetSearchClicked = () => {
    clearSearchFilterResults()
    setSearchText("")
    setResultCnt(0)
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
          <Search placeholder='Search by contract address'
            style={{ width: "100%" }}
            value={searchText}
            onChange={(e) => onChange(e)}
            onSearch={onSearch}
            enterButton
            loading={searchLoading}
          />
        </div>
      </div>
      {expandSearch
        ?
        <div className='SearchResultsContainer'>
          <div style={{ width: "65px" }}></div>
          <h3 className='SearchResultsText'>{resultCnt} flash loan{resultCnt === 1 ? "" : "s"} found</h3>
          <Button onClick={resetSearchClicked}>Reset</Button>
        </div>
        :
        <div></div>
      }
    </ContentPanel>
  )
}
