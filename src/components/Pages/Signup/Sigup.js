import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Sigup = () => {
    const { createNewUser, providerSignin, updateUserProfile, setLoading } = useContext(AuthContext)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        if (confirmPassword !== password) {
            return toast.error("Password didn't matched")
        }
        const name = form.firstName.value + form.lastName.value
        console.log(name)
        const photoURL = form.photoURL.value
        const profile = { displayName: name, photoURL: photoURL }
        createNewUser(email, password)
            .then(result => {
                const user = result.user
                console.log("log in successfull", user)
                form.reset()
                updateUserProfile(profile)
                    .then(() => { })
                    .catch(() => { })
                navigate('/')
                setError("")
                setLoading(false)
                toast.success('Successfully Signed in!');
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
                toast.error('Sign in failed!');
            })
    }

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const handleproviderSignin = () => {
        providerSignin(googleProvider)
            .then(result => {
                const user = result.user
                console.log("Sign in Successfull", user)
                toast.success('Successfully Signed in!');
                navigate("/courses")
            }).catch(error => {
                setError(error.message)
                toast.error('Sign in failed!');
            })
    }
    return (
        <div>
            <form className="hero " onSubmit={handleSubmit}>
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h4 className='text-black font-bold ms-2'>Create an account</h4>
                        <div className="form-control border-0">

                            <input type="text" name='firstName' placeholder="First Name" className="input w-full p-0" />
                            <hr className='text-black my-0' />
                        </div>
                        <div className="form-control border-0">

                            <input type="text" name='lastName' placeholder="Last Name" className="input w-full p-0" />
                            <hr className='text-black my-0' />
                        </div>
                        <div className="form-control border-0">

                            <input type="text" name='photoURL' placeholder="photoURL" className="input w-full p-0" />
                            <hr className='text-black my-0' />
                        </div>
                        <div className="form-control border-0">

                            <input type="email" name="email" placeholder="Email" className="input w-full p-0" required />
                            <hr className='text-black my-0' />
                        </div>
                        <div className="form-control border-0">

                            <input type="password" name='password' placeholder="Password" className="input w-full p-0" required />
                            <hr className='text-black my-0' />

                        </div>
                        <div className="form-control border-0">

                            <input type="password" name='confirmPassword' placeholder="Confirm password" className="input w-full p-0" required />
                            <hr className='text-black my-0' />

                        </div>
                        <p className='text-center text-red-600'>{error}</p>

                        <div className="form-control border-0">
                            <button className="btn btn-outline-warning font-bold w-full">Sign up</button>
                        </div>
                        <p className='text-black text-center'>Already have an account? <Link to="/login" className='ml-1 underline text-yellow-400 font-semibold hover:text-yellow-500'>Log in</Link> </p>
                    </div>
                </div>
            </form>

            <div className='flex justify-center items-center mt-4'>
                <hr className='border border-white w-1/12' />
                <p className='mx-2 text-white'>OR</p>
                <hr className='border border-white w-1/12' />
            </div>

            <div className='flex flex-col items-center mx-10'>
                <button className='btn btn-primary w-full sm:w-1/2 lg:w-1/4 my-2 font-semibold rounded-pill'>Sign in with Facebook</button>
                <button className='btn btn-warning w-full sm:w-1/2 lg:w-1/4 my-2 font-semibold rounded-pill ' onClick={handleproviderSignin}>Sign in with Google</button>
            </div>
        </div >
    );
};

export default Sigup;