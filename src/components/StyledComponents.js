import { Card } from 'antd';
import styled from 'styled-components'


export const ContentPanel = styled(Card)`
    width: 100%;
    border-radius: 8px;
    align-self: center;
    box-shadow: 0 2px 8px 0 rgb(9, 109, 217, 0.3);
    // border: 1px solid #1890ff;
    margin-bottom: 40px;
  `

export const BlueContentPanel = styled(Card)`
  width: 100%;
  border-radius: 8px;
  align-self: center;
  box-shadow: 0 8px 16px 0 linear-gradient(90deg, rgba(46,186,198,1) 15%, rgba(25,75,255,1) 50%, rgba(182,80,158,1) 85%);
  margin-bottom: 40px;
  background: linear-gradient(45deg, #ffaf00,#bb02ff);
`