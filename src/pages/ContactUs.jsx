import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }
        // You can add further validation here
        // For simplicity, let's assume the form is valid
        setSubmitted(true);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '115vh', boxShadow: '1 4px 8px rgba(1, 0, 0, 0.5)', borderRadius: '8px' }}>
            <div style={{ maxWidth: '400px', padding: '20px', width: '100%' }}>
                <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
                <p style={{ textAlign: 'center' }}>If you have any questions or feedback, feel free to reach out to us!</p>
                {submitted ? (
                    <div style={{ background: '#dff0d8', color: '#3c763d', border: '1px solid #d6e9c6', padding: '15px', borderRadius: '4px', marginBottom: '20px' }}>
                        Thank you for your message! We'll get back to you as soon as possible.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="message" style={{ fontWeight: 'bold' }}>Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', height: '150px' }}></textarea>
                        </div>
                        <button type="submit" style={{ display: 'block', width: '100%', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', fontSize: '16px', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s' }}>Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default ContactUs;
