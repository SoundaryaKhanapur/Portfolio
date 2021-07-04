import React from 'react';
import './Skills.css'
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import skillsVector from './../../assets/skills_vector.png'
import { skillList } from './../../assets/skillsData'
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <div className='section-container'>
            <Header
                heading="My Skills."
                details="I am a continuous learner and passionate about data driven technologies. Here's the tech stack I've worked with!"
            />

            <div className="skill-card-container">
                {skillList.map(({ skillName, skillUrl }) => {
                    return <SkillCard skillName={skillName}
                        skillUrl={skillUrl} />
                })
                }
            </div>

            <FooterLink phrase="Get in " link="touch." toAddress="/contact"
            />

            <div className="skills-vector-frame">
                <img src={skillsVector} alt="skills" className="skills-vector" />
            </div>
        </div>
    );
}

export default Skills;