import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [showErr, setShowErr] = useState(false)
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        //console.log('handel form submit')
        e.preventDefault();
        const response = await fetch('http://localhost:5003/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                email: credentials.email,
                password: credentials.password,

            })

        })

        const result = await response.json()
        console.log(result)

        if (result.success) {
            localStorage.setItem("userEmail", credentials.email)
            localStorage.setItem("authToken", result.authToken)
            console.log(localStorage.getItem("authToken"))
            navigate('/Home')
        }
        else {
            //alert("Enter Valid Credentials")
            setShowErr(true)
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: `${e.target.value}` })
        console.log("credentials", credentials.email)
        setShowErr(false)
    }

    return (
        <>
            <div className='container mt-3'>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            placeholder='Enter Your Email'
                            className="form-control"
                            name='email'
                            value={credentials.email}
                            id="exampleInputEmail1"
                            onChange={onChange}
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder='Enter Your Password'
                            className="form-control"
                            id="exampleInputPassword1"
                            value={credentials.password}
                            onChange={onChange}
                        />
                    </div>
                    {
                        showErr && <div style={{ color: 'red' }}>*Please Enter Valid Credentials</div>
                    }
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to='/signup' className='m-3 btn btn-danger'>New user</Link>
                </form>
            </div>
        </>
    )
}

export default Login
