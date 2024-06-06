import React, { useState } from 'react';
import { questions } from './Faq-ques';
import './Faq.css';
import { Design } from './Design';

export const Faq = () => {
    const [value, setValue] = useState(questions);

    return (
        <div className="faq-card shadow-xl">
            <h1 className="text-4xl text-[#f9a826]">FAQ's about tourism in India</h1>
            {value.map((cur, index) => (
                <Design key={index} {...cur} />
            ))}
        </div>
    );
};

