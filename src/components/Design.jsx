import React, { useState } from 'react';

export const Design = ({ question, answer }) => {
    const [show, setShow] = useState(false);

    const toggleAnswer = () => {
        setShow(!show);
    };

    return (
        <div className="faq-item">
            <div
                className="faq-question flex justify-between items-center cursor-pointer"
                onClick={toggleAnswer}
            >
                <h2 className="text-xl">{question}</h2>
                <p className="text-black px-4">{show ? '-' : '+'}</p>
            </div>
            <div className={`faq-answer ${show ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-4">
                    {answer}
                </div>
            </div>
        </div>
    );
};
