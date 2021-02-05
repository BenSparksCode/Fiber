import { Card } from 'antd';
import styled from 'styled-components'


export const ContentPanel = styled(Card)`

    -webkit-animation: BorderColors 7s ease infinite;
    animation: BorderColors 7s ease infinite;

    width: 100%;
    border-radius: 8px;
    align-self: center;
    box-shadow: 0 4px 16px 0 rgb(9, 109, 217, 0.3);
    margin-bottom: 24px;

    @-webkit-keyframes BorderColors {
      0% {
        border: rgba(219, 44, 178, 0.5) 1px solid;
      }
      50% {
        border: rgba(15, 128, 248, 0.5) 1px solid;
      }
      100% {
        border: rgba(219, 44, 178, 0.5) 1px solid;
      }
    }
    @keyframes BorderColors {
      0% {
        border: rgba(219, 44, 178, 0.5) 1px solid;
      }
      50% {
        border: rgba(15, 128, 248, 0.5) 1px solid;
      }
      100% {
        border: rgba(219, 44, 178, 0.5) 1px solid;
      }
    }
  `

export const PaginationPanel = styled(Card)`
  -webkit-animation: BorderColors 7s ease infinite;
  animation: BorderColors 7s ease infinite;

  width: 100%;
  border-radius: 8px;
  align-self: center;
  box-shadow: 0 4px 16px 0 rgb(9, 109, 217, 0.3);
  margin-bottom: 2px;
`