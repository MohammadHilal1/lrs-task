import React from "react";

const Home = () => {
  return (
    <section>
      <h1>HomePage</h1>
      <section id="about-us">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet justo non quam vehicula volutpat. Sed tristique feugiat augue,
          vel dignissim nisl laoreet eget.
        </p>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, feel free to{" "}
          <a href="contact.html">contact us</a>.
        </p>
      </section>
    </section>
  );
};

export default Home;
