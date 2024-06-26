import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox.jsx'
import useSignup from '../../hooks/useSignup.js'

const SignUp = () => {

  const[inputs,setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:'',
  }) 

  const { loading, signup } = useSignup();

  const handleCheckboxChange=(gender)=>{
    setInputs({...inputs,gender});

  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await signup(inputs);
    
   
  }



  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full-p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    <h1 className='text-7xl font-bold text-center text-purple-700 mt-6 mb-6 '>
                SignUp
                <span className='text-indigo-600'> SupP</span>
            </h1>
    <form onSubmit={handleSubmit}>
      <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input value={inputs.fullName} 
            onChange={(e) => setInputs({...inputs,fullName:e.target.value})}
            type="text" placeholder='Samarthya Chabukswar' className='w-full input input-bordered h-10' />
      </div>

      <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input  value={inputs.username}
            onChange={(e) => setInputs({...inputs, username: e.target.value})}
            type="text" placeholder='sam10' className='w-full input input-bordered h-10' />
      </div>

      <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input value={inputs.password}
             onChange={(e) => setInputs({...inputs, password: e.target.value})}
            type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
      </div>

      <div>
            <label className='label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input 
            value={inputs.confirmPassword}
             onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            type="password" placeholder='Confirm Password ' className='w-full input input-bordered h-10' />
      </div>

       <GenderCheckbox  onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
      
      <div>
          <button className='btn btn-block btn-sm mt-2 border border-slate-700'
          disabled={loading}>
          {loading ? <span className='loading loading-spinner'> </span> : "Sign Up"}
          </button>
      </div>

      <Link  to={"/login"} href="" className='text-sm hover:underline hover:text-indigo-600 mt-1 mb-4 ml-1 inline-block'>
              {"Already"} have an account?
      </Link>

      


    </form>

    </div>


  </div>
}

export default SignUp




/*

STARTER CODE FOR SIGNUP COMPONENT

import React from 'react'
import GenderCheckbox from './GenderCheckbox.jsx'

const SignUp = () => {
  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full-p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    <h1 className='text-7xl font-bold text-center text-purple-900 mt-6 mb-6 '>
                SignUp
                <span className='text-indigo-800'> SupP</span>
            </h1>
    <form >
      <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type="text" placeholder='Samarthya Chabukswar' className='w-full input input-bordered h-10' />
      </div>

      <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='sam10' className='w-full input input-bordered h-10' />
      </div>

      <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
      </div>

      <div>
            <label className='label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password ' className='w-full input input-bordered h-10' />
      </div>

       <GenderCheckbox/>
      
      <div>
          <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
      </div>

      <a href="#" className='text-sm hover:underline hover:text-indigo-600 mt-1 mb-4 ml-1 inline-block'>
              {"Already"} have an account?
      </a>

      


    </form>

    </div>


  </div>
}

export default SignUp
*/