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
        // For simplicity, let's assume the form is valid
        setSubmitted(true);
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Contact Us</h1>
                <p style={styles.subtitle}>If you have any questions or feedback, feel free to reach out to us!</p>
                {submitted ? (
                    <div style={styles.successMessage}>
                        Thank you for your message! We'll get back to you as soon as possible.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div style={styles.formGroup}>
                            <label htmlFor="name" style={styles.label}>Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={styles.input} />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="email" style={styles.label}>Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="message" style={styles.label}>Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} style={styles.textarea}></textarea>
                        </div>
                        <button type="submit" style={styles.button}>Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        padding: '20px',
        backgroundColor: '#f0f2f5',
    },
    card: {
        maxWidth: '500px',
        width: '100%',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        margin: '60px 40px',  // Adds margin at the top and bottom
    },
    title: {
        textAlign: 'center',
        marginBottom: '10px',
        fontSize: '2rem',
        color: '#333',
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '1rem',
        color: '#666',
    },
    successMessage: {
        backgroundColor: '#dff0d8',
        color: '#3c763d',
        border: '1px solid #d6e9c6',
        padding: '15px',
        borderRadius: '4px',
        textAlign: 'center',
        marginBottom: '20px',
    },
    formGroup: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '10px',
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        fontSize: '1rem',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        fontSize: '1rem',
        height: '150px',
    },
    button: {
        display: 'block',
        width: '100%',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
};

export default ContactUs;
