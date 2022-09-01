import React from 'react';
import './AuthFooter.scss';

const AuthFooter = () => {
    return (
        <div className="auth-footer">
            <ul>
                <li><a href="#">Meta</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Api</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Top Account</a></li>
                <li><a href="#">Top Account</a></li>
                <li><a href="#">Hashtags</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Instagram Lite</a></li>
                <li><a href="#">Contact Uploading & Non-User</a></li>
            </ul>
            <div className="copy-right-area">
            <select>
                <option value="cs">English</option>
                <option value="af">Afrikaans</option>
                <option value="da">Dansk</option>
                <option value="de">Deutsch</option>
                <option value="el">Bangla</option>
                <option value="el">Hindi</option>
                 </select>

                <span className='copy-right-area'>© 2022 Instagram from Meta</span>
                
            </div>
          </div>
    );
};

export default AuthFooter;