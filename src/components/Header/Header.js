import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from "../../images/logo.png"
import { destRouteContext } from '../Pages/layout/Main/Main';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { destinationId } = useContext(destRouteContext)

    const { user, logUserOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logUserOut()
    }

    return (
        <div >
            <div className="navbar lg:px-10 text-white">
                <div className="navbar-start  w-full ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-transparent">
                            <li><Link to={`/destination/${destinationId}`}>Destination</Link></li>
                            <li ><Link to={`/destination/hotels/${destinationId}`}>Hotels</Link></li>
                            <li><Link to="/about">About</Link></li>

                            {user ?
                                <>
                                    <button className='btn btn-outline btn-error btn-sm w-1/2 my-2' onClick={handleLogOut}>Log out</button>
                                    <Link to="/profile" className="tooltip tooltip-right  w-1/4 " data-tip={user?.displayName || user?.email}>
                                        {user?.photoURL ? <img src={user?.photoURL} alt="" className='h-12 rounded-full' /> : <FaUserCircle className='rounded-full text-4xl mt-1'></FaUserCircle>}
                                    </Link>
                                </>
                                :
                                <Link to="/login" className='w-1/2'><button className='btn btn-outline btn-warning btn-sm  my-2'>Log in</button></Link>
                            }
                        </ul>
                    </div>
                    <div className='flex items-center '>
                        <Link to="/"> <img src={logo} alt="" className='bg-white w-1/6 rounded-xl px-4 py-3' /></Link>

                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='px-1'><NavLink to={`/destination/${destinationId}`}
                            className={({ isActive }) => isActive ? 'text-yellow-500 ms-lg-5  bg-inherit' : ' ms-lg-5 '}>Destination
                        </NavLink>
                        </li>

                        <li className='px-1' ><NavLink to={`/destination/hotels/${destinationId}`} className={({ isActive }) => isActive ? 'text-yellow-500 ms-lg-5  bg-inherit' : ' ms-lg-5 '}> Hotels </NavLink></li>
                        <li className='px-1'><NavLink to="/about" className={({ isActive }) => isActive ? 'text-yellow-500 ms-lg-5  bg-inherit' : ' ms-lg-5 '}>About</NavLink></li>

                        {user ?
                            <>
                                <button className='btn btn-outline btn-error mx-2' onClick={handleLogOut}>Log out</button>
                                <Link to="/profile" className="tooltip tooltip-left" data-tip={user?.displayName || user?.email}>
                                    {user?.photoURL ? <img src={user?.photoURL} alt="" className='h-12 rounded-full' /> : <FaUserCircle className='rounded-full text-4xl mt-1'></FaUserCircle>}
                                </Link>
                            </>
                            :
                            <>
                                <Link to="/login"><button className='btn btn-outline btn-warning mx-2'>Log in</button></Link>

                            </>
                        }
                    </ul>
                </div>

            </div>
        </div >
    );
};

export default Header;
