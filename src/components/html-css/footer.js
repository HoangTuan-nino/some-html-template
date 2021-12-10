import React, { Component } from 'react';
import '../../styles/footer.css';
import { LogoFacebook, LogoTwitter, LogoLinkedin, LogoInstagram } from 'react-ionicons';

export class Footer extends Component {
    render() {
        return (
            <body className="footer-body">
                <footer className="footer">
                    <div className="waves">
                        <div className="wave" id="wave1"></div>
                        <div className="wave" id="wave2"></div>
                        <div className="wave" id="wave3"></div>
                        <div className="wave" id="wave4"></div>
                    </div>
                    <ul className="social_icon">
                        <li className="li-footer">
                            <a href="" className="a-footer">
                                <LogoFacebook color={'#fff'} title={'logo'} height="32px" width="32px" />
                            </a>
                        </li>
                        <li className="li-footer">
                            <a href="" className="a-footer">
                                <LogoTwitter color={'#fff'} title={'logo'} height="32px" width="32px" />
                            </a>
                        </li>
                        <li className="li-footer">
                            <a href="" className="a-footer">
                                <LogoLinkedin color={'#fff'} title={'logo'} height="32px" width="32px" />
                            </a>
                        </li>
                        <li className="li-footer">
                            <a href="" className="a-footer">
                                <LogoInstagram color={'#fff'} title={'logo'} height="32px" width="32px" />
                            </a>
                        </li>
                    </ul>
                    <ul className="menu">
                        <li className="li-footer">
                            <a href="#" className="a-footer">
                                Home
                            </a>
                        </li>
                        <li className="li-footer">
                            <a href="#" className="a-footer">
                                About
                            </a>
                        </li>
                        <li className="li-footer">
                            <a href="#" className="a-footer">
                                Services
                            </a>
                        </li>
                        <li className="li-footer">
                            <a href="#" className="a-footer">
                                Team
                            </a>
                        </li>
                        <li className="li-footer">
                            <a href="#" className="a-footer">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <p className="p-footer">Stars can’t shine without darkness</p>
                </footer>
            </body>
        );
    }
}

export default Footer;
