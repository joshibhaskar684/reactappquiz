// src/components/Footer.js
import React from 'react';
import './Footer.css';  // Import CSS for Footer component

function Footer() {
  return (
    <footer className="footer flecx anim" data-aos="fade-up">
      <div className="footer1 flecx">
        {/* Contact Info Section */}
        <div data-aos="zoom-in">
          <p>Contact: +91 6395653472</p>
          <p>Email: joshibhaskar684@gmail.com</p>
          <p>Designed and built by Bhaskar Joshi</p>
          <p>
            Tools: <br />
            <a href="https://icons8.com/icon/62856/github">GitHub</a> icon by{' '}
            <a href="https://icons8.com">Icons8</a>
          </p>
        </div>

        {/* Quick Links Section */}
        <div data-aos="zoom-in">
          <h1>Quick Links</h1>
          <p><a href="">Resume</a></p>
          <p><a href="https://joshicatroranddecorator.netlify.app">Live Project</a></p>
          <p><a href="https://codeforces.com/">CodeForces</a></p>
          <p><a href="https://www.hackerrank.com/">HackerRank</a></p>
          <p><a href="https://www.geeksforgeeks.org/">GeeksforGeeks</a></p>
          <p><a href="https://leetcode.com/">LeetCode</a></p>
        </div>
      </div>

      {/* Footer Bottom */}
      <p>&copy; 2024 All rights reserved</p>
    </footer>
  );
}

export default Footer;
