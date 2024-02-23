import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    const [showErr, setShowErr] = useState(false)
    const [result, setResult] = useState(false)
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        geolocation: '',
    })
    let navigate = useNavigate()
    const handleSubmit = async (e) => {
        //console.log('handle form submit')
        e.preventDefault();
        const response = await fetch('http://localhost:5003/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.geolocation,
            })

        })

        const result = await response.json()
        console.log(result)

        if (!result.success) {
            //alert("Enter Valid Credentials")
            setShowErr(true)
        }
        else {
            setResult(true)
            navigate('/login')
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
                        <label htmlFor="username" className="form-label">Name</label>
                        <input
                            type="text"
                            placeholder='Enter Your Name'
                            className="form-control"
                            name='name'
                            value={credentials.name}
                            onChange={onChange}
                        />
                    </div>
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
                    <div className="mb-3">
                        <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                        <input
                            type="text"
                            placeholder='Enter Your Address'
                            className="form-control"
                            name='geolocation'
                            value={credentials.geolocation}
                            id="exampleInputAddress"
                            onChange={onChange}
                        />
                    </div>
                    {
                        showErr && <div style={{ color: 'red' }}>*Please Enter Valid Credentials</div>
                    }
                    {
                        result && <div style={{ color: 'palegreen' }}>Welcome! You are a new user created.</div>
                    }
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to='/login' className='m-3 btn btn-danger'>Already an user</Link>
                </form>
            </div>
        </>
    )
}

export default SignUp
