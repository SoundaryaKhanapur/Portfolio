import React from 'react';
import './Contact.css'
import Header from '../Header/Header'
import FooterLink from '../FooterLink/FooterLink'
import contactVector from './../../assets/contact_anime.png'
import github from './../../assets/gh.png'
import linkedin from './../../assets/li.png'
import instagram from './../../assets/in.png'
import medium from './../../assets/me.png'
import twitter from './../../assets/twitter.jpg'

const Contact = () => {
    return (
        <div className='section-container'>
            <Header heading="Get in touch."
                details="Wanna collaborate? Feel free to drop me an email!" />

            {/* Form section */}
            <div className="contact-form-container">
                <form action="" className="contact-form"
                    action="https://formspree.io/f/xnqlzlzw"
                    method="POST"
                >
                    {/* Email ID input */}
                    <input
                        type="email"
                        placeholder="Your Email ID"
                        name="_replyto"
                        className="input-box email-input" />

                    {/* Email Body */}
                    <textarea
                        type="text"
                        placeholder="Your Message"
                        name="message"
                        className="input-box body-input" />

                    {/* Submit button */}
                    <button type="Submit" className="contact-btn">
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className="social-icon-container">
                <a href="https://github.com/SoundaryaKhanapur" className="social-icon">
                    <img src={github} alt="social" />
                </a>

                <a href="https://linkedin.com/in/SoundaryaKhanapur" className="social-icon">
                    <img src={linkedin} alt="social" />
                </a>

                <a href="https://instagram.com/smk.codes" className="social-icon">
                    <img src={instagram} alt="social" />
                </a>

                {/* <a href="https://github.com/SoundaryaKhanapur" className="social-icon">
                    <img src={medium} alt="social" />
                </a> */}

                {/* <a href="https://twitter.com/smk_codes" className="social-icon">
                    <img src={twitter} alt="social" />
                </a> */}
            </div>

            <FooterLink phrase="Read more " link="about me." toAddress="/about" />

            <div className="vector-frame">
                <img src={contactVector} alt="vector" className='about-vector' />
            </div>
        </div>
    );
}

export default Contact;