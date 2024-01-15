import React from "react";
import "./Form.css";
import img5 from "../images/img5.jpeg";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div>
        
    
    <div className="formmaindiv">
      <div className="formimage">
        <img className="formimg" src={img5} alt="abc" />
      </div>
      <div className="formtext ">
        <div className="formtext1 ">contact us</div>
        <div className="formtext2">
          Have Questions?
          <br /> Get in Touch!
        </div>

        <form className="forminputs">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="forminput"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="forminput"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="forminput"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="forminput"
          />
          <input
            type="text"
            name="message"
            placeholder="Message"
            className="messageforminput"
          />
        </form>
        <Link className="formlink">Get In Touch</Link>
        
      </div>
      
    </div>
    <div className="formcopyright">
      Copyright ©2023 Prish Textile India Private Limited, Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Form;
