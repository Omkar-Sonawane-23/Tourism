

import React, { useRef } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
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
      <div className="mb-10 mt-24">
        <h1 className="text-2xl font-bold text-center mt-5 mb-5">Contact Us</h1>

        <p className="text-sm text-center max-md:text-xs">
          If you have any questions or need further information, please feel
          free to contact us using the details below or by filling out the
          contact form.
        </p>

        <div className="flex flex-row w-full mt-10 max-md:flex-col">
          <div className="flex flex-col w-2/4 m-5  max-md:w-full">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center p-3 shadow-lg rounded-lg">
                <h2 className="text-lg font-medium">Contact Information</h2>
                <div className="pt-5 pb-5 pl-5 pr-5 mt-3 mb-5 shadow-lg rounded-lg">
                  <p>
                    <strong>Address:</strong> 123 Tourism Street, Jahanpanah ,
                    New Delhi, India
                  </p>
                  <p>
                    <strong>Phone:</strong> +91-123-456-7890
                  </p>
                  <p>
                    <strong>Email:</strong> info@citytourism.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-row items-center justify-center">
              <div className="w-full p-5">
                <h2 className="text-lg font-medium pb-5">Location</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83912947867!2d77.06889727035242!3d28.5272803235126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d0c3c0b7f9%3A0x3c8b2e181de4b59!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1629808414142!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-80 rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="w-2/4 m-5 flex flex-col items-center justify-center max-md:w-full">
            <h2 className="text-lg font-medium w-full text-left">
              Contact Form
            </h2>
            <form
              className="flex flex-col items-center justify-center w-full m-5 max-md:w-11/12"
              onSubmit={onSubmitHandler}
            >
              <label htmlFor="name" className="text-left w-full pb-1">
                Name:
              </label>
              <input
                type="text"
                ref={name}
                id="name"
                name="name"
                className="w-full border-gray-300 border-2 mb-3 focus:outline-none p-2 rounded-lg"
                required
              />

              <label htmlFor="email" className="text-left w-full pb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                ref={email}
                className="w-full border-gray-300 border-2 mb-3 focus:outline-none p-2 rounded-lg"
                name="email"
                required
              />

              <label htmlFor="phone" className="text-left w-full pb-1">
                Phone:
              </label>
              <input
                type="tel"
                ref={phone}
                className="w-full border-gray-300 border-2 mb-3 focus:outline-none p-2 rounded-lg"
                id="phone"
                name="phone"
                required
              />

              <label htmlFor="subject" className="text-left w-full pb-1">
                Subject:
              </label>
              <input
                type="text"
                ref={subject}
                className="w-full border-gray-300 border-2 mb-3 focus:outline-none p-2 rounded-lg"
                id="subject"
                name="subject"
                required
              />

              <label className="text-left w-full pb-1" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                ref={message}
                name="message"
                className="w-full border-gray-300 border-2 mb-3 focus:outline-none p-2 rounded-lg h-28"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-green-600 text-white pt-2 pb-2 pl-3.5 pr-3.5 border-none rounded-md cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-row max-md:flex-col items-center justify-center w-full mt-10 mb-10">
          <div className="flex flex-col w-2/4 items-center justify-center max-md:w-full">
            <h2 className="font-medium text-lg">Operating Hours</h2>
            <div className="flex flex-col items-center justify-center p-5 mt-5 shadow-lg rounded-md">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="flex flex-col w-2/4 items-center justify-center max-md:w-full max-md:mt-10">
            <h2 className="font-medium text-lg">FAQ</h2>
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
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-10 mb-10">
          <h2 className="pb-2 text-lg font-medium">Follow Us</h2>
          <div className="w-full flex flex-col items-center justify-center">
            <p>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-5 pr-5"
              >
                <FacebookIcon />
              </a>{" "}
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-5 pr-5"
              >
                <Twitter />
              </a>{" "}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-5 pr-5"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.Gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-5 pr-5"
              >
                <EmailIcon />
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <p className="text-center">
            {" "}
            <span className="font-medium pr-3">Tourist Helpline</span>For any
            emergencies, please call: +91-112-123-4567
          </p>
        </div>
      </div>
    </>
  );
};
