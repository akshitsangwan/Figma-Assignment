import React, { useState } from 'react'
import GoogleIcon from '../images/google-icon.png'
import AppleIcon from '../images/apple-icon.png'
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    function changeHandler(event) {
        const { name, value } = event.target;

        setFormData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        navigate("/dashboard");
    }

  return (
    <div className='flex w-full h-full'>
        {/* left part */}
        <div className='flex justify-center items-center bg-black w-[588px] h-[100vh]'>
            <p className='text-white text-[72px] font-bold font-Montserrat leading-[88px]'>
                Board.
            </p>
        </div>

        {/* right part */}
        <div className='flex flex-grow justify-center items-center bg-[#F5F5F5]'>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-[5px]'>
                    <h1 className='text-black text-[36px] font-bold font-Montserrat leading-[44px]'>Sign In</h1>
                    <p className='text-black text-[16px] font-normal font-Lato leading-[19px]'>Sign in to your account</p>
                </div>

                <div className='flex justify-between font-Montserrat font-normal text-[12px] leading-[15px] text-[#858585]'>
                    <span className='flex bg-white rounded-[10px] w-[180px] h-[30px] justify-center items-center gap-3'>
                        <img src={GoogleIcon} alt='goggle-icon' className='h-[14px] w-[14px]' loading='lazy' />
                        <button>
                            Sign in with Google
                        </button>
                    </span>

                    <span className='flex bg-white rounded-[10px] w-[180px] h-[30px] justify-center items-center gap-3'>
                        <img src={AppleIcon} alt='apple-icon' className='h-[14px] w-[14px]' loading='lazy' />
                        <button>
                            Sign in with Apple
                        </button>
                    </span>
                </div>

                <form onSubmit={submitHandler}
                className='flex flex-col bg-white rounded-[20px] p-[30px] gap-5'
                >
                    <label htmlFor="email" className='flex flex-col gap-[10px]'>
                        <p className='text-black text-[16px] font-normal font-Lato leading-[19px]'>   
                            Email address
                        </p>
                        <input 
                            required
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Enter your email'
                            value={formData.email}
                            onChange={changeHandler}
                            className='bg-[#F5F5F5] w-[325px] h-[40px] rounded-[10px] focus:bg-[#EAEAEA] outline-none px-4 py-3'
                        />
                    </label>

                    <label htmlFor="password" className='flex flex-col gap-[10px]'>
                        <p className='text-black text-[16px] font-normal font-Lato leading-[19px]'>
                            Password
                        </p>
                        <input 
                            required
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Enter your password'
                            value={formData.password}
                            onChange={changeHandler}
                            className='bg-[#F5F5F5] w-[325px] h-[40px] rounded-[10px] focus:bg-[#EAEAEA] outline-none px-4 py-3'
                        />
                    </label>

                    <div>
                        <span className='text-[#346BD5] text-[16px] font-normal font-Lato leading-[19px] hover:cursor-pointer inline'>
                            Forgot password?
                        </span>
                    </div>

                    <button type='submit' className='bg-black text-[16px] font-Montserrat font-bold leading-[20px] text-white py-[9px] rounded-[10px]'>
                        Sign In
                    </button>
                </form>

                <div className='mx-auto'>
                    <p className='text-[#858585] text-[16px] font-normal font-Lato leading-[19px]'>
                        Don’t have an account? <span className='text-[#346BD5] hover:cursor-pointer'>Register here</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin