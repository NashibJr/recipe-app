import React from "react";
import email from "../images/email.jpg";
import twitter from "../images/twitter.jpg";
import whatsapp from "../images/whatsapp.png";

const Developer = () => {
  return (
    <div className="developer">
      <div className="center-developer-content">
        <h1>Developer contact</h1>
        <p>Contact the developer from one of the following.</p>
        <p>
          <img src={email} width="25px" height="25px" />
          <span>nashibjr@gmail.com</span>
        </p>
        <p>
          <img src={twitter} width="25px" height="25px" />
          <span>@rashfordheadmat</span>
        </p>
        <p>
          <img src={whatsapp} width="25px" height="25px" />
          <span>+256 703681010</span>
        </p>
        <div>
          <span>
            <h1>About</h1>
          </span>
          <p>
            Kigoonya Nashib is a web developer who got inspired to become a
            computer programmer by the way programmers give commands to a
            computer and it does what they want it to does He graduated from
            Makerere University for the Barchelor's degree in Statistics but he
            wanted to do either Computer Science or Software Engineering which
            was unfortunately not the case.
          </p>
          <p style={{ marginTop: "6.2vh" }}>
            He started his programming journey by following the road map given
            to him by his uncle starting with HTML, CSS and JavaScript where he
            started learning a JavaScript Framework Reactjs which he became an
            expert.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Developer;
