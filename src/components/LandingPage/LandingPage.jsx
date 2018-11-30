// react libraries
import React, { Fragment } from 'react';

/**
 * @desc renders Landing
* @returns {object} Landing
 */
const Landing = () => (
  <Fragment>
     <div className="menu-links">
          <div id="menu-links-left">
            <span><a href="index.html">MY-DIARY</a></span>
          </div>
    
          <div className="menu-icon">
            <label htmlFor="menu-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
    
          <input type="checkbox" id="menu-check" />
          <div className="menu-links-right">
            <a href="sign-up.html">Sign Up</a>
            <a href="login.html">Login</a>
          </div>      
    </div>
    
      <header id="header">
        <div className="container">
          <div id="topic">
          </div>
          <h5>Pen down your thoughts and feelings</h5>
          <button className="btn-signup" >Get Started</button>
        </div>
      </header>

      <section className="grid">
        <div className="container">
          <div className="box">
            <img src="https://d3c2plo0qyv3hc.cloudfront.net/images/landing/feature-icon__reminder.png" alt="" />
            <h3>Never Forget To Write</h3>
            <p>Custom email reminders help you make sure you never forget to write</p>
          </div>
          <div className="box">
            <img src="https://d3c2plo0qyv3hc.cloudfront.net/images/landing/feature-icon__mobile.png" alt="" />
            <h3>Write From Anywhere</h3>
            <p>You can access your diary from anywhere in the world</p>
          </div>
          <div className="box">
            <img src="https://d3c2plo0qyv3hc.cloudfront.net/images/landing/feature-icon__security2.png" alt="" />
            <h3>Security</h3>
            <p>You can be rest assured that your entries are totaly safe and secured </p>
          </div>
        </div>
      </section>

      <footer>
        <p>My-Diary, Copyright &copy; 2018</p>
      </footer>
  </Fragment>
);

export default Landing;
