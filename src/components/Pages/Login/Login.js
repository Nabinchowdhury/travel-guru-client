import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { logUserIn, providerSignin, forgotPassword } = useContext(AuthContext)
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        logUserIn(email, password)
            .then(result => {
                const user = result.user
                console.log("log in successfull", user)
                form.reset()
                navigate(from, { replace: true })
                setError("")

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
                toast.error('Sign in failed!');
            })
    }

    const handleGoogleSignin = () => {
        providerSignin(googleProvider)
            .then(result => {
                const user = result.user
                console.log("Sign in Successfull", user)
                navigate(from, { replace: true })
                toast.success('Successfully Signed in!');
            }).catch(error => {
                setError(error.message)
                console.log(error)
                toast.error('Sign in failed!');
            })
    }

    const handleFacebookSignin = () => {
        providerSignin(facebookProvider)
            .then(result => {
                const user = result.user
                console.log("Sign in Successfull", user)
                navigate(from, { replace: true })
                toast.success('Successfully Signed in!');
            }).catch(error => {
                setError(error.message)
                console.log(error)
                toast.error('Sign in failed!');
            })
    }
    const handleGetEmail = (e) => {
        setEmail(e.target.value)

    }
    const handleForgotPassword = () => {

        if (!email) {
            return toast.error("Please enter your email")
        }
        forgotPassword(email)
            .then(() => {
                toast.success("A reset email has sent to your email id. If not Foud in inbox, please check your spam folder")
            }).catch(() => {
                toast.error("Wrong email!")
            })
    }


    return (

        <div>
            <form className="hero mt-10 md:mt-20" onSubmit={handleSubmit}>
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h4 className='text-black font-bold ms-2'>Log In</h4>
                        <div className="form-control border-0">

                            <input type="email" name="email" placeholder="Email" className="input w-full p-0" onBlur={handleGetEmail} />
                            <hr className='text-black my-0' />
                        </div>
                        <div className="form-control border-0">

                            <input type="password" name="password" placeholder="Password" className="input w-full p-0" />
                            <hr className='text-black my-0' />
                            <p className="text-right">
                                <Link className='underline  text-yellow-400 font-semibold hover:text-yellow-500' onClick={handleForgotPassword}> Forgot Password?</Link>
                            </p>
                            <p className='text-center text-red-600'>{error}</p>
                        </div>
                        <div className="form-control border-0">
                            <button className="btn btn-outline-warning font-bold w-full">Log in</button>
                        </div>
                        <p className='text-black text-center'>Don't have an account?    <Link to="/signup" className='ml-1 underline text-yellow-400 font-semibold hover:text-yellow-500'>Create an account</Link> </p>
                    </div>
                </div>
            </form>

            <div className='flex justify-center items-center mt-4'>
                <hr className='border border-white w-1/12' />
                <p className='mx-2 text-white'>OR</p>
                <hr className='border border-white w-1/12' />
            </div>

            <div className='flex flex-col items-center mx-10'>
                <button className='btn btn-primary w-full sm:w-1/2 lg:w-1/4 my-2 font-semibold rounded-pill' onClick={handleFacebookSignin}>Sign in with Facebook</button>
                <button className='btn btn-warning w-full sm:w-1/2 lg:w-1/4 my-2 font-semibold rounded-pill ' onClick={handleGoogleSignin}>Sign in with Google</button>
            </div>
        </div >


    );
};

export default Login;