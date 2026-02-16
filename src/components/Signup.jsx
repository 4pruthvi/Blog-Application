import React,{useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { Button, Input, Logo } from './index'
import { useForm } from 'react-hook-form'
import {login} from '../store/authSlice'

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register,handleSubmit} = useForm()
    const [errors,setError] = useState("")

    const create = async(data) => {
        setError('')
        try {
            const userData = await authService.createAccount(data)
            if(userData) {
                const userData = await authService.getCurrentUser()
                if(userData) {
                    dispatch(login(userData))
                }
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className="inline-block w-full max-w-100px">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Sign Up to create account</h2>
                {errors && <p className='text-red-600 text-center mt-8'>{errors}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label="Full Name"
                            placeholder="Enter your full name"
                            {...register("name", { required: true })}
                        />
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                        />
                        <Button type="submit" className="w-full">Create Account</Button>
                    </div>
                </form>
                //extra added code by copoilete to show the login link if the user already has an account, this is a common practice to improve the user experience and to make it easier for the user to navigate between the login and signup pages.
                <p className='text-center mt-4'>
                    Already have an account?{' '}
                    <Link to="/login" className='text-blue-500 hover:underline'>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup
