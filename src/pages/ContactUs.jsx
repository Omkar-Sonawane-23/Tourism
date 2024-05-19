// import React, { useState } from 'react';

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });
//     const [submitted, setSubmitted] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Basic validation
//         if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
//             alert('Please fill in all fields.');
//             return;
//         }
//         // For simplicity, let's assume the form is valid
//         setSubmitted(true);
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.card}>
//                 <h1 style={styles.title}>Contact Us</h1>
//                 <p style={styles.subtitle}>If you have any questions or feedback, feel free to reach out to us!</p>
//                 {submitted ? (
//                     <div style={styles.successMessage}>
//                         Thank you for your message! We'll get back to you as soon as possible.
//                     </div>
//                 ) : (
//                     <form onSubmit={handleSubmit}>
//                         <div style={styles.formGroup}>
//                             <label htmlFor="name" style={styles.label}>Name</label>
//                             <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={styles.input} />
//                         </div>
//                         <div style={styles.formGroup}>
//                             <label htmlFor="email" style={styles.label}>Email</label>
//                             <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />
//                         </div>
//                         <div style={styles.formGroup}>
//                             <label htmlFor="message" style={styles.label}>Message</label>
//                             <textarea id="message" name="message" value={formData.message} onChange={handleChange} style={styles.textarea}></textarea>
//                         </div>
//                         <button type="submit" style={styles.button}>Submit</button>
//                     </form>
//                 )}
//             </div>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '80vh',
//         padding: '20px',
//         backgroundColor: '#f0f2f5',
//     },
//     card: {
//         maxWidth: '500px',
//         width: '100%',
//         backgroundColor: '#fff',
//         padding: '30px',
//         borderRadius: '10px',
//         boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//         transition: 'transform 0.3s, box-shadow 0.3s',
//         margin: '60px 40px',  // Adds margin at the top and bottom
//     },
//     title: {
//         textAlign: 'center',
//         marginBottom: '10px',
//         fontSize: '2rem',
//         color: '#333',
//     },
//     subtitle: {
//         textAlign: 'center',
//         marginBottom: '20px',
//         fontSize: '1rem',
//         color: '#666',
//     },
//     successMessage: {
//         backgroundColor: '#dff0d8',
//         color: '#3c763d',
//         border: '1px solid #d6e9c6',
//         padding: '15px',
//         borderRadius: '4px',
//         textAlign: 'center',
//         marginBottom: '20px',
//     },
//     formGroup: {
//         marginBottom: '20px',
//     },
//     label: {
//         display: 'block',
//         marginBottom: '10px',
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     input: {
//         width: '100%',
//         padding: '10px',
//         border: '1px solid #ccc',
//         borderRadius: '4px',
//         boxSizing: 'border-box',
//         fontSize: '1rem',
//     },
//     textarea: {
//         width: '100%',
//         padding: '10px',
//         border: '1px solid #ccc',
//         borderRadius: '4px',
//         boxSizing: 'border-box',
//         fontSize: '1rem',
//         height: '150px',
//     },
//     button: {
//         display: 'block',
//         width: '100%',
//         backgroundColor: '#007bff',
//         color: '#fff',
//         border: 'none',
//         padding: '10px 20px',
//         fontSize: '16px',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         transition: 'background-color 0.3s',
//     },
//     buttonHover: {
//         backgroundColor: '#0056b3',
//     },
// };

// export default ContactUs;

import React, { useRef } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Twitter } from "@mui/icons-material";
import { Accordion } from "../components/Accordion";

export const ContactUs = () => {
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const subject = useRef("");
  const message = useRef("");

  const formData = new FormData();

  const onSubmitHandler = (ev) => {
    ev.preventDefault();
    formData.set("name", name.current.value);
    formData.set("email", email.current.value);
    formData.set("phone", phone.current.value);
    formData.set("subject", subject.current.value);
    formData.set("message", message.current.value);
    console.log(formData);
  };

  return (
    <>
      <div className="mb-10 mt-24 shadow-lg px-5 py-5 w-3/4 max-md:w-full ml-40">
        <h1 className="text-4xl font-bold text-center mt-5 mb-5 text-[#f9a826] drop-shadow-xl">Contact Us</h1>

        <p className="text-sm text-center max-md:text-xs text-gray-600">
          If you have any questions or need further information, please feel
          free to contact us using the details below or by filling out the
          contact form.
        </p>
        <div className="m-5 flex flex-col items-center justify-center max-md:w-full">
            <form
              className="flex flex-col items-center justify-center w-full m-5"
              onSubmit={onSubmitHandler}
            >
              <label htmlFor="name" className="text-left w-full pb-1 mb-3 mt-3">
                Name:
              </label>
              <input
                type="text"
                ref={name}
                id="name"
                name="name" placeholder="Name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light focus:outline-none"
                required
              />

              <label htmlFor="email" className="text-left w-full pb-1 mb-3 mt-3">
                Email:
              </label>
              <input
                type="email"
                id="email"
                ref={email} placeholder="example123@gmail.com"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light focus:outline-none"
                name="email"
                required
              />

              <label htmlFor="phone" className="text-left w-full pb-1 mb-3 mt-3">
                Phone:
              </label>
              <input
                type="tel"
                ref={phone} placeholder="Phone Number"
                className="focus:outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                id="phone"
                name="phone"
                required
              />

              <label htmlFor="subject" className="text-left w-full pb-1 mb-3 mt-3">
                Subject:
              </label>
              <input
                type="text"
                ref={subject} placeholder="Subject"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light focus:outline-none mb-3"
                id="subject"
                name="subject"
                required
              />

              <label className="text-left w-full pb-1 mb-3 mt-3" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                ref={message}
                name="message"
                className="block p-2 h-28 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-3 focus:outline-none" placeholder="Leave a comment..."
                required
              ></textarea>

              <button
                type="submit"
                className="py-3 px-5 mt-4 text-lg font-medium text-center text-white rounded-lg bg-green-600 sm:w-fit hover:bg-green-700 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Submit
              </button>
            </form>
          </div>
          </div>
            <div className="m-5 flex-col px-5 py-5 items-center justify-center max-md:w-full max-md:mt-10">
            <h2 className="text-4xl font-bold mt-5 mb-5 text-[#f9a826] drop-shadow-xl">FAQ</h2>
            <div className="flex flex-col items-start justify-center p-5">
              <Accordion
                title={"How can I book a tour with Bharat Yatra?"}
                content={
                  "Booking a tour is simple. Browse our tour packages, select your preferred tour, and contact us via the form or call +91-123-456-7890. Complete your booking and payment online."
                }
              />
              <Accordion
                title={"What are the payment options available?"}
                content={
                  "We accept major credit/debit cards, net banking, UPI, and digital wallets like Paytm and Google Pay. For more details, please contact our customer service."
                }
              />
            </div>

            {/* Add more FAQs as needed */}
          </div>

          <div className="flex w-full flex-row items-center justify-center mb-6">
              <div className="w-full p-5">
                <h2 className=" pb-5 text-4xl font-bold ml-5 mt-5 mb-5 text-[#f9a826] drop-shadow-xl">Location</h2>
                <div className="container shadow-lg px-5 py-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83912947867!2d77.06889727035242!3d28.5272803235126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d0c3c0b7f9%3A0x3c8b2e181de4b59!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1629808414142!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-80 rounded-xl"
                ></iframe></div>
              </div>
            </div>

      
<footer
  class="bg-[#f9a826] text-center text-white text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
  <div
    class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
    <div class="me-12 hidden lg:block font-bold">
      <span>Tourist Helpline For any emergencies, call: +91-112-123-4567</span>
    
    </div>
   
<footer
  class="flex flex-col items-center bg-[#f9a826] text-center text-surface dark:bg-neutral-700 dark:text-white">
  
  
    <div class=" flex justify-center space-x-2">
      <a
        href="https://www.facebook.com"
        target="_blank"
        type="button"
        class="rounded-full bg-[#3b5998] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        <span class="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 320 512">
            
            <path
              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </span>
      </a>

      <a
         href="https://www.twitter.com"
         target="_blank"
        type="button"
        class="rounded-full bg-black p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512">
            
            <path
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </span>
      </a>

      <a
         href="https://www.google.com"
         target="_blank"
        type="button"
        class="rounded-full bg-[#dd4b39] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 488 512">
            
            <path
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </span>
      </a>

      <a
         href="https://www.instagram.com"
         target="_blank"
        type="button"
        class="rounded-full bg-[#ac2bac] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
           
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </span>
      </a>

      <a
         href="https://www.linkedin.com"
         target="_blank"
        type="button"
        class="rounded-full bg-[#0082ca] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
           
            <path
              d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </span>
      </a>

      <a
         href="https://www.github.com"
         target="_blank"
        type="button"
        class="rounded-full bg-[#333333] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 496 512">
            
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </span>
      </a>
    </div>
  


</footer>
  </div>

 
  <div class="mx-6 py-10 text-center md:text-left">
    <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      
      <div class="">
        <h6
          class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
          
          <h1 className="text-[40px] text-center font-[Agbalumo]">
                Bharat <span id="samarkand">Yatra</span>
              </h1>
        </h6>
        <p>
          Here you can use rows and columns to organize your footer
          content. you can add pictures or logo here....
        </p>
      </div>
      
      <div>
        <h6
          class="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
          Products
        </h6>
        <p class="mb-4">
          <a href="#">Home</a>
        </p>
        <p class="mb-4">
          <a href="#!">Places</a>
        </p>
        <p class="mb-4">
          <a href="#!">About us</a>
        </p>
        <p>
          <a href="#!">Contact us</a>
        </p>
      </div>
    
      <div>
        <h6
          class="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
          Opening Hours
        </h6>
        <p class="mb-4">
          <a href="#!">Monday - Friday:</a>
        </p>
        <p class="mb-4">
          <a href="#!">9:00 AM - 6:00 PM</a>
        </p>
        <p class="mb-4">
          <a href="#!">Saturday:</a>
        </p>
        <p class="mb-4">
          <a href="#!">10:00 AM - 4:00 PM</a>
        </p>
          <p >Sunday: Closed</p>
      </div>
    
      <div>
        <h6
          class="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
          Contact
        </h6>
        <p class="mb-4 flex items-center justify-center md:justify-start">
          <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path
                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </span>
          123 Tourism Street, Jahanpanah , New Delhi, India
        </p>
        <p class="mb-4 flex items-center justify-center md:justify-start">
          <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path
                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </span>
          info@citytourism.com
        </p>
        <p class="mb-4 flex items-center justify-center md:justify-start">
          <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd" />
            </svg>
          </span>
          +91-123-456-7890
        </p>
        <p class="flex items-center justify-center md:justify-start">
          <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd" />
            </svg>
          </span>
          +91-112-123-4567
        </p>
      </div>
    </div>
  </div>

  <div class=" p-6 text-center">
    <p>© 2023 Copyright:
    <h1 className="text-[40px] text-center font-[Agbalumo]">
                Bharat <span id="samarkand">Yatra</span>
              </h1></p>
  </div>
</footer>
    </>
  );
};
