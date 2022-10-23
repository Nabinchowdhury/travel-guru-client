import React from 'react';
import { Link } from 'react-router-dom';

const Sigup = () => {
    return (
        <div>
            <div className="hero ">
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h4 className='text-black fw-bold ms-2'>Create an account</h4>
                        <div className="form-control border-0">

                            <input type="text" name='firstName' placeholder="First Name" className="input w-full p-0" />
                            <hr className='text-black my-0' />
                        </div>
                        <div className="form-control border-0">

                            <input type="text" name='lastName' placeholder="Last Name" className="input w-full p-0" />
                            <hr className='text-black my-0' />
                        </div>
                        <div className="form-control border-0">

                            <input type="email" name="email" placeholder="Email" className="input w-full p-0" />
                            <hr className='text-black my-0' />
                        </div>
                        <div className="form-control border-0">

                            <input type="password" name='password' placeholder="Password" className="input w-full p-0" />
                            <hr className='text-black my-0' />

                        </div>
                        <div className="form-control border-0">

                            <input type="password" name='confirmPassword' placeholder="Confirm password" className="input w-full p-0" />
                            <hr className='text-black my-0' />

                        </div>
                        <div className="form-control border-0">
                            <button className="btn btn-outline-warning fw-bold w-full">Sign up</button>
                        </div>
                        <p className='text-black text-center'>Already have an account? <Link to="/signup" className='ml-1 underline text-yellow-400 fw-semibold hover:text-yellow-500'>Log in</Link> </p>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Sigup;