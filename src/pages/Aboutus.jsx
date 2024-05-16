import React from "react";
import "./Aboutus.css";
import Bg from "/gssoc2024/Tourism/src/assets/AboutUsBg.jpg";
const Aboutus = () => {
  // handle the request
  var recipientEmail = "recipient@example.com"; // Replace with the desired email address
  var subject = "Subject of the email"; // Replace with the desired subject
  var body = "Body of the email"; // Replace with the desired email body

  const handleClick = () => {
    var gmailLink =
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      encodeURIComponent(recipientEmail) +
      "&su=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.open(gmailLink, "_blank");
  };

  // Adding quote
  const quote = "Life is either a daring adventure or nothing at all."; //Replace with desired Quote
  const author = "Helen Killer"; //replace with the corresponding author
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');
      </style>
      <div className="container">
        <h1 className="head">About Us</h1>
        <div className="img-holder">
          <img className="bgimg" src={Bg} alt="error" />
        </div>
        <p className="context">
          Welcome to Bharat Yatra, your gateway to exploring the captivating
          diversity and rich heritage that India has to offer. Our mission is to
          curate unforgettable journeys that unveil the true essence of
          Incredible India, guiding you through its mesmerizing landscapes,
          vibrant cultures, and age-old traditions.
        </p>
        <p className="context imp">
          At Bharat Yatra, we are a team of passionate travel enthusiasts and
          seasoned explorers who have traversed the length and breadth of this
          vast nation. Our extensive knowledge and firsthand experiences allow
          us to craft tailor-made itineraries that cater to every wanderlust,
          whether you seek adventure, spirituality, culinary delights, or simply
          a chance to immerse yourself in the kaleidoscope of Indian cultures.
          From the snow-capped peaks of the Himalayas to the sun-kissed beaches
          of the Andaman and Nicobar Islands, from the majestic forts and
          palaces of Rajasthan to the serene backwaters of Kerala, we leave no
          stone unturned in our quest to uncover the best that India has to
          offer.
        </p>
        <p className="context">
          Our comprehensive destination guides provide detailed insights into
          popular attractions, off-the-beaten-path gems, and insider tips for
          navigating like a local.
        </p>
        <div class="grid-holder">
          <div className="div1">
            <img
              src="https://media.istockphoto.com/id/157579910/photo/the-beach.jpg?s=612x612&w=0&k=20&c=aMk67AmzIVD_S1Nibww8ytUdyub2ck3HNQ3uTvuPWPI="
              alt=""
            />
          </div>
          <div className="div2">
            <img
              src="https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U="
              alt=""
            />
          </div>
          <div className="div3">
            <img
              src="https://cdn.pixabay.com/photo/2018/12/06/06/08/leh-3859196_1280.jpg"
              alt=""
            />
          </div>
          <div className="div4">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/15/22/02/udaipur-3229676_1280.jpg"
              alt=""
            />
          </div>
        </div>
        <p className="context">
          At Bharat Yatra, we believe that travel is not just about ticking
          boxes off a list but about creating cherished memories that will last
          a lifetime. Our expert writers and local guides share their firsthand
          experiences, helping you plan your itinerary with ease and ensuring
          you don't miss out on the must-see sights, authentic experiences, and
          hidden gems that make each destination truly unique. Whether you're
          seeking the thrill of trekking through the Himalayas, the serenity of
          a spiritual retreat, or the vibrant energy of bustling cities, Bharat
          Yatra is your trusted companion. We pride ourselves on providing
          personalized recommendations, practical tips, and invaluable advice to
          ensure your journey through India is nothing short of extraordinary.
          Join us on this incredible adventure through the heart of Bharat,
          where every step promises to be an adventure, and every moment is an
          opportunity to connect with the rich tapestry of traditions that make
          this country truly remarkable.
        </p>
        <div className="quote-container">
          <div className="quote-text">
            <span className="quote-start">"</span>
            {quote}
            <span className="quote-end">"</span>
          </div>
          <div className="author">- {author}</div>
        </div>
        <div className="btn-container">
          <button className="Emailbtn" onClick={handleClick}>
            Send Email
          </button>
        </div>
      </div>
    </>
    
  );
};

export default Aboutus;
