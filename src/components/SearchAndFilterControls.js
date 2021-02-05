import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import { ContentPanel } from './StyledComponents'
import { Menu, Dropdown, Button, Space, Input, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const FILTER_OPTIONS = ["Contract Address"]

export const SearchAndFilterControls = () => {
  const { runSearchRequest } = useContext(AppContext)

  const [chosenFilter, setChosenFilter] = useState("Contract Address")
  const [searchText, setSearchText] = useState("")
  const [resultCnt, setResultCnt] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const { Search } = Input;
  const onSearch = () => {
    if (!searchText) {
      message.error("Please enter a valid smart contract address.");
      return null
    }
    // checks if input is Ethereum address
    if (/^(0x)?[0-9a-f]{40}$/i.test(searchText)) {

      setShowResults(true)
      // TODO - input validation
      runSearchRequest(searchText)

    } else {
      message.error("Please enter a valid smart contract address.");
    }
  }

  const onChange = (e) => {
    if (e.type === 'click') {
      console.log("clear icon clicked");
      setSearchText("")
      setResultCnt(0)
      setShowResults(false)
      return false
    } else {
      setSearchText(e.target.value)
    }
  }


  const handleMenuClick = (e) => {
    if (!e.key) return
    setChosenFilter(FILTER_OPTIONS[e.key - 1])
  }

  const resetSearchClicked = () => {
    setSearchText("")
    setResultCnt(0)
    setShowResults(false)
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
          />
        </div>
      </div>
      {showResults
        ?
        <div className='SearchResultsContainer'>
          <div style={{ width: "65px" }}></div>
          <h3 className='SearchResultsText'>{resultCnt} flash loan{resultCnt == 1 ? "" : "s"} found</h3>
          <Button onClick={resetSearchClicked}>Reset</Button>
        </div>
        :
        <div></div>
      }
    </ContentPanel>
  )
}



// onChange={(e) => {allowClear} =true }