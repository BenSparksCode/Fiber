import React, { useState, useContext, useRef } from 'react'
import { AppContext } from '../contexts/AppContext'
import firebaseDB from '../firebase/FirebaseDB'
import web3 from '../data/Web3Connection'

export const FlashLoanStream = () => {

    const { setTempFLs, tempFLs, setTempFLIndex, tempLogs } = useContext(AppContext)



    const handle1 = async () => {
        const res = await firebaseDB.getFlashLoans()
        setTempFLs(res)
        console.log("Handle 1 done", res);
    }

    const handle2 = async () => {

        let logFLs = []

        for (let i = 0; i < tempFLs.length; i++) {
            let fl = { ...tempFLs[i] };
            delete fl.events
            web3.getTxLogs(fl.txHash, (lgs) => {
                // const out = JSON.stringify(lgs)

                fl.logs = JSON.stringify(lgs)

                setTempFLIndex(fl, i)

                // setTempLogs([...tempLogs, ...[out]])
                console.log(i, fl);
            })
            // setTimeout(() => {
            //     console.log("tick", i);
            //     fl.logs = JSON.stringify(logs)
            //     logFLs.push(fl)

            // }, 1000);

        }


        console.log("Handle 2 done");

    }

    const handle3 = () => {
        firebaseDB.uploadFlashLoans(tempFLs)
        console.log('Handle 3 done.');
    }

    return (
        <div>
            <button onClick={handle1}>Get FLs</button>
            <button onClick={handle2}>Update FLs to LOG</button>
            <button onClick={handle3}>Upload FLs</button>
            <button onClick={() => {
                console.log(tempFLs,tempLogs)
            }}>Check Data</button>
        </div>
    )
}
