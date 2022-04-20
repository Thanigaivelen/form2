import React, { useState } from 'react';


const Login = () => {
    const [data, setData] = useState('')

    const handleChange = ({ target }) => {
        const { name, value } = target
        const newData = Object.assign({}, data, { [name]: value })
        setData(newData)
    }

   const handleSubmit = (e) => {
        e.preventDefault()
        document.cookie = `email=${data.email}`; 
        document.cookie = `username=${data.username}`; 
        document.cookie = `password=${data.password}`; 
        document.cookie = `phonenumber=${data.phonenumber}`; 
    }
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <div className='main'>
                        <form onSubmit={sample}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" name='email' id="email" onChange={props.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name='username' id="username" onChange={props.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name='password' id="password" onChange={props.handleChange}></input>
                            </div>
                            <div className="form-group">
                               <label htmlFor="phonenumber">phonenumber</label>
                               <input type="utf-8" className="form-control" name='number' id="phonenumber" onChange={props.handleChange} max="9999999999"></input>
                             </div>   
                              <div className="form-group">
                                <label htmlFor="file">upload your file here</label>
                                <input type="file" className="form-control" name='file' id="file" onChange={props.handleChange}></input>
                            </div>
                             <div className="form-group">
                               <label htmlFor="comment">comment</label>
                               <label type="text" className="form-control" name='number' id="phonenumber" onChange={props.handleChange} ></label>
                               <textarea
                               input = "text"
                               maxLength={600}
                               placeholder="type here "
                               ></textarea>
                             </div> 
           

                         <div class="form-group">
                           <input type="checkbox" className="form-check-input" name='check box' id="exampleCheck1" onChange={props.handleChange}></input>
                           <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> 

                            <div className="btn-container">
                            <button type="submit" className="btn btn-primary" onclick={validate}>Submit</button>

                            </div>
                                  {emailErr && <p> your email is invalid</p>}
                                {pwdError && <p>your password is invalid</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
