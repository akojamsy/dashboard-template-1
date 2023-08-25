// import React from 'react'
import React, { useState } from 'react';
import logo from '../../assets/images/Logo.png'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
           ...prevData,
           [name]: value, 
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <div className='flex flex-col h-screen w-full justify-center items-center bg-[#FAF8F8]'>
        
        <div className='pb-6'>
            <img src={logo} alt='mouvebeta logo'/>
       </div>

       <div className='bg-[#FFF] p-8 w-2/5'>
            <h1 className='font-bold text-lg'>Login</h1>
            <p className='text-[#4E4D4D] mt-0'>Join us and mouve today!</p>
            <form onSubmit={handleSubmit} className='flex flex-col font-[500]'>
                <label className='mt-2 mb-1'>Email</label>
                <input 
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="enter email"
                    className='border-[1px] border-[#D2D0D0] focus:outline-0 rounded-md text-[#4E4D4D] pl-2 py-2 w-full'
                />
                <label className='mt-4 mb-1'>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder=""
                    className='border-[1px] border-[#D2D0D0] focus:outline-0 rounded-md pl-2 py-2'
                />
                <a href="#" className='text-[#9A0536] mt-2'>Forgot Password</a>
                <button type="submit" className='bg-[#9A0536] text-[#FFF] rounded-md py-2 mt-12 mb-8'>Proceed</button>
                <p className='text-center text-[#645D57]'>Don't have an account, <span><a href="#" className='text-[#9A0536]'>Create Account</a></span></p>
            </form>
        </div>
    </div>
  )
}

export default Login