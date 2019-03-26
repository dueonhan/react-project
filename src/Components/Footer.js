import React, { Component } from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div className="left-menu">
                    <p>© 포트폴리오</p> 
                    <p>00000 서울시 마포구 아현동 ahyeon, Mapo-gu , Seoul , Republic of Korea</p>
                    <p>Tel/ 02-123-4567 / Mail hdejh79@gmail.com</p>    
                </div>
                <div className="right-menu">
                    <ul>
                        <li><Link to="/">홈</Link> </li>
                        <li> <Link to="/concatus">지도</Link> </li>
                        <li> <a href="https://www.instagram.com/dueonhan/?hl=ko" target="_blank">인스타그램</a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100003656289296" target="_blank" >페이스북 </a> </li>
                        
                    </ul>    
                </div>
            </footer>
        );
    }
}

export default Footer;