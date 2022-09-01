import React from 'react';
import { FiSearch } from "react-icons/fi";
import { TbSquarePlus } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { BsCursor, BsSuitHeart } from "react-icons/bs";
import './TopBar.scss';
import { GrHomeRounded } from 'react-icons/gr';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';
const TopBar = () => {

    // get auth context
    const { user} = useContext(AuthContext);


    return (
        <div className='top-bar-container'>
         <div className="top-bar-wraper">
        <div className="logo">
        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
        </div>
        <div className="search-box">
         <button><FiSearch/></button> 
         <input type="text" placeholder='Search' />  
        </div>
        <div className="top-bar-menu">
            <ul>
                <li><a href="#"><GrHomeRounded/></a></li>
                <li><a href="#"><BsCursor/></a></li>
                <li><a href="#"><TbSquarePlus/></a></li>
                <li><a href="#"><FaRegCompass/></a></li>
                <li><a href="#"><BsSuitHeart/></a></li>
                <li><a href=""><img src={`${ user.photo ? user.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfREov7nKwuNflZKZ_VMleNycIykx9tVRw2w&usqp=CAU'}`} alt="" /></a></li>
            </ul>
        </div>
        </div>  
        </div>
    );
};

export default TopBar;