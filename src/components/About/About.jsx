import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png'
import './About.css'
import aboutAnime from './../../assets/about.jpg'

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading="About Me."
                details="Women In TECH | Content Creator | Software Developer | Sharing my journey in tech"
            />

            <div className="about-main">
                <div className="about-main-left">
                    {/* Sub section 1*/}
                    <h3 className="about-sub-head">Women In TECH</h3>
                    <p className="about-details">Hello World, I am a Computer Science Engineer graduated with a bronze medal. I am a passionate developer and work as Mercedes Benz Research & Development India.{' '}
                        {/* <a href="https://" className="about-link-element">linkhere</a> */}
                    </p>

                    {/* Sub section 2*/}
                    <h3 className="about-sub-head">Content Creator</h3>
                    <p className="about-details">I am a Content Creator with followers of 6k+ on Instagram where I share my journey as a Developer{' '}
                        <a href="https://instagram.com/smk.codes/" className="about-link-element" target="_blank" rel="noreferrer">smk.codes</a>
                    </p>

                    {/* Sub section 3*/}
                    <h3 className="about-sub-head">Apart from Tech</h3>
                    <p className="about-details">In my leisure time you can find me doing sports, creating content, reading or developing fun (kinda useless) software programs.{' '}
                        {/* <a href="https://" className="about-link-element">linkhere</a> */}
                    </p>


                </div>

                <div className="about-main-right">
                    <img src={aboutAnime} alt="about-image" className="about-image" />
                </div>
            </div>

            <FooterLink
                phrase="Check out my "
                link="projects!"
                toAddress="/projects" />
            {/* Vector Frame! */}
            <div className="vector-frame">
                <img src={aboutVector} className="about-vector" alt="about" />
            </div>
        </div >
    );
}

export default About;