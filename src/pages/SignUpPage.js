import React, { useState } from 'react'
import { Input, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';

import firebaseDB from '../firebase/FirebaseDB'

import { ContentPanel } from '../components/StyledComponents'

const { Search } = Input;


export const SignUpPage = () => {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const onSubmitEmail = () => {

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            message.success("Thanks! We've added you to our list! 🎉");

            firebaseDB.storeEmail(email)

            setSubmitted(true)
        } else {
            message.error("Please enter a valid email address.");
        }
    }


    return (
        <ContentPanel className='FLFeedContainer'>
            <div className='FLFeedLoadingContainer'>
                <h2>Where should we contact you?</h2>
                <p style={{ textAlign: "center" }}>Give us your email address and we'll make sure you're the first to know when Fiber is ready for prime time! 😎</p>

                <div style={{ width: "100%", maxWidth: "500px" }}>
                    {
                        submitted ?
                            <p style={{ textAlign: "center", alignItems: "center" }}>Email recieved! 🎉</p> :
                            <Search placeholder="ape@aave.com"
                                onChange={(e) => setEmail(e.target.value)}
                                onSearch={onSubmitEmail}
                                enterButton={<SendOutlined />}
                            />
                    }
                </div>
            </div>
        </ContentPanel>
    )
}