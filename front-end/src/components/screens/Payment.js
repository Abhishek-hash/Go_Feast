import React, { useRef, useState } from 'react'
import axios from "axios";


function Payment() {
    const [stateUPI, setStateUPI] = useState(false)
    const [stateOnPay, setStateOnPay] = useState(false)
    const [verified, setVerified] = useState(false)
    const ref = useRef()

    const handleClickUPI = () => {
        setStateUPI(true)
        setStateOnPay(false)
    }

    const handleClickOnDelivery = () => {
        setStateOnPay(true)
        setStateUPI(false)
    }

    const handleVerify = async () => {
        const upiID = inputValue.trim()
        const options = {
            method: 'POST',
            url: 'https://upi-verification.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_vpa',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '530a7189eemsh4ebdcd25100aa72p13844djsne93ce3ecabea',
              'X-RapidAPI-Host': 'upi-verification.p.rapidapi.com'
            },
            data: {
              task_id: 'UUID',
              group_id: 'UUID',
              data: {vpa: upiID}
            }
          };
          
          try {
              const response = await axios.request(options);
              if(response.data.status === 'completed') {
                setVerified(true)
              }
              console.log(response.data.status);
          } catch (error) {
              console.error(error);
          }

    }

    let inputValue;
    const onChange = (e) => {
        inputValue =  e.target.value
    }

    return (
        <div>
            <h3 className='ms-5 mt-4 mb-3'>Select a payment method</h3>
            <ul className='ms-4'>

                <input
                    name="option"
                    onClick={handleClickUPI}
                    type="radio" /> <span className='ms-2'>UPI Payment</span>
                <br />
                <div>

                    {
                        stateUPI && <div>
                            <p className='mb-2 ms-4 mt-3'>Please enter your UPI ID</p>
                            <input
                                ref={ref}
                                onChange={onChange}
                                className='ms-4 rounded-3'
                                placeholder='Enter UPI ID'
                                style={{textDecoration: 'none'}}
                            />
                            <button
                                onClick={handleVerify}
                                className='ms-2 rounded-3 p-0.5 bg-warning text-dark'>Verify</button>
                        </div>

                       
                    }

                    {
                        verified && <p className='text-success ms-4'>UPI is Verified Successfully.</p>
                    }

                </div>
                <br />
                <input
                    name="option"
                    onClick={handleClickOnDelivery}
                    type="radio"
                /> <span className='ms-2'>Pay on Delivery</span>
                {
                    stateOnPay &&
                    <p className='ms-4' style={{ fontSize: '14px' }}>Cash, UPI and Cards accepted.</p>
                }

            </ul>
        </div>
    )
}

export default Payment