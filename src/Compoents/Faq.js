import React, { useState } from 'react';
import './Faq.css';
import {AiOutlinePlus} from 'react-icons/ai'

const faqs = [
    {
        id: 1,
        Question: 'What services does Startify360 offer?',
        Answer: 'We offer a wide range of services, including web development, mobile app development, custom software development, UI/UX design, and digital consulting. We can help you build a strong online presence and innovative digital solutions.'
    },
    {
        id: 2,
        Question: 'What technologies and platforms do you specialize in?',
        Answer: 'Our team specializes in a variety of technologies and platforms, such as JavaScript (React), Node.js, Python,nd cross-platform development (React Native). We choose the best tools for your project based on your specific needs.'
    },
    {
        id: 3,
        Question: 'Can you provide examples of projects you ve completed?',
        Answer: 'Certainly! You can check out our portfolio on our website to see a variety of projects we ve successfully delivered. Our portfolio showcases our expertise in web and app development, UI/UX design, and more.'
    },
    {
        id: 4,
        Question: 'What is your development process like?',
        Answer: 'Our development process follows industry best practices, including project planning, design, development, testing, and deployment. We work closely with you to ensure your project aligns with your vision and goals, with regular communication and feedback throughout the process.'
    },
    {
        id: 5,
        Question: 'How do you ensure the security of my project?',
        Answer: 'Security is a top priority. We implement robust security measures, including data encryption, authentication, and regular security audits. We follow security best practices to protect your project and user data.'
    },
    {
        id: 6,
        Question: 'Do you offer post-launch support and maintenance?',
        Answer: 'Yes, we provide post-launch support and maintenance services to keep your project running smoothly. Our support packages can include bug fixes, updates, performance optimization, and additional feature development.'
    },
    {
        id: 7,
        Question: 'What is the estimated timeline for my project?',
        Answer: 'Project timelines vary based on complexity and requirements. During the initial consultation, we ll provide you with an estimated timeline based on your project s specific scope and goals.'
    },
    {
        id: 8,
        Question: 'How can I request a quote for my project?',
        Answer: 'You can request a quote by reaching out to our team through our website or contacting our sales department. We ll discuss your project details and provide you with a customized quote.'
    },
    {
        id: 9,
        Question: 'What sets your development company apart from others?',
        Answer: 'Our company is known for its commitment to quality, innovative solutions, and a client-focused approach. We have a dedicated team of experts with a passion for technology and a track record of delivering successful projects.'
    },
];

const Faq = () => {
    const [expanded, setExpanded] = useState({});

    const toggleQuestion = (id) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id],
        }));
    };

    return (
        <div>
            <div className='Faq_Section'>
                <div className='Faq_Heading'>
                    <h1>FAQ</h1>
                   <p>Still Have Query To Resolve Feel Free to Contact Us</p>
                <button><a href='#Contact'>Contact Us</a></button>
                </div>
                <div className='Question_container'>
                    <div>
                        {faqs.map((data) => (
                            <div className='question' key={data.id}>
                                <h2 onClick={() => toggleQuestion(data.id)}>{data.Question}         <AiOutlinePlus/></h2>
                                {expanded[data.id] && <p>{data.Answer}</p>}

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
