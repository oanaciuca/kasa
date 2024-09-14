import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import bannerImage from '../assets/Banner.png';
import aboutData from '../data/about.json';

const About = () => {
    return (
        <div className="about">
            <Banner title="" img={bannerImage} />
            <div className="about-collapse">
                {aboutData.map((item, index) => (
                    <Collapse  key={index} title={item.title}>
                        <p>{item.content}</p>
                    </Collapse>
            ))}
            </div>
        </div>
    );
};

export default About;