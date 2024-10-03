import React from 'react';

function AboutUs() {
  return (
    
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to Find your Room, your one-stop shop for finding the perfect online house rental. Our mission is to provide a seamless and hassle-free experience for renters and landlords alike.
      </p>
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <img src="/aboutUs-image/img1.jpg" alt="Building Exterior" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Story</h2>
          <p className="text-lg mb-4">
            Founded in 2024, our team of passionate individuals came together to revolutionize the way people rent houses online. With years of experience in the real estate industry, we knew there had to be a better way to connect renters with landlords.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <img src="/aboutUs-image/img2.jpg" alt="Modern Living Room" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Values</h2>
          <ul className="list-disc pl-4 mb-4">
            <li>Transparency: We believe in providing accurate and up-to-date information to our users.</li>
            <li>Reliability: Our platform is built to provide a seamless and reliable experience for all users.</li>
            <li>Customer-centric: We put our users first and strive to provide exceptional customer service.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <img src="/aboutUs-image/img3.jpg" alt="Cityscape" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Team</h2>
          <ul className="list-none pl-0 mb-4">
            <li>
              {/* <img  alt="Team Member 1" className="w-12 h-12 rounded-full mr-2" /> */}
              <span className="text-lg">Pawan Patidar , Founder of the Company</span>
            </li>
          
          </ul>
        </div>
      </div>
      <p className="text-lg mb-4">
        We're committed to making online house rentals easier, faster, and more convenient for everyone involved. Join us on this journey and experience the future of house rentals today!
      </p>
   
    </div>
  );
}

export default AboutUs;