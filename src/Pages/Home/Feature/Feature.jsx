import React from 'react';
import feature1 from '../../../assets/Images/feature_icon1.png'
import feature2 from '../../../assets/Images/feature_icon2.png'
import feature3 from '../../../assets/Images/feature_icon3.png'
import feature4 from '../../../assets/Images/feature_icon4.png'
import './Feature.css'

const Feature = () => {
    return (
        <div className='w-10/12 mx-auto my-32'>
            <div className='grid md:grid-cols-4 gap-12'>
                <div className='bg-[#004fe1] hover:cursor-pointer hover:bg-[#f41d1e] p-12 feature delay-100'>
                    <img src={feature1} alt="" />
                    <h4>Online/Offline Classrooms</h4>
                    <p>Real skills for real-world application. Experience interactive</p>
                </div>
                <div className='bg-[#f5b016ff] hover:cursor-pointer hover:bg-[#0acc86] p-12 feature delay-100'>
                    <img src={feature2} alt="" />
                    <h4>Personal Mentor Support</h4>
                    <p>The most impressive is collection of shared me online college</p>
                </div>
                <div className='bg-[#f41d1e] hover:cursor-pointer hover:bg-[#004fe1] p-12 feature delay-100'>
                    <img src={feature3} alt="" />
                    <h4>Lifetime Slack Chat Support</h4>
                    <p>North America right at your fingertips. All 24 of Turitor.</p>
                </div>
                <div className='bg-[#0acc86] hover:cursor-pointer hover:bg-[#f5b016ff] p-12 feature delay-100'>
                    <img src={feature4} alt="" />
                    <h4>Job Placement Support</h4>
                    <p>We are provied support by Expert menter for special Expert Students For Job placement </p>
                </div>
            </div>
            
        </div>
    );
};

export default Feature;