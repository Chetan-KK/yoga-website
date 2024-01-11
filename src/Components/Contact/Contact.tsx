import axios from "axios";

import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);
  const [err, setErr] = useState(false);

  const formSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();

    formData.append("fname", e.target[0].value);
    formData.append("lname", e.target[1].value);
    formData.append("phone", e.target[2].value);
    formData.append("email", e.target[3].value);
    formData.append("message", e.target[4].value);
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append(
      "_autoresponse",
      "thank you for reaching out to chetan through website."
    );
    formData.append("_subject", "New message on Yoga website!!");

    axios
      .post(import.meta.env.VITE_FORM_SUBMIT_LINK, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success == "true") {
          setSend(true);
          setLoading(false);
        }
      })
      .catch(() => {
        setErr(true);
        setLoading(false);
      });
  };

  return (
    <div className="Contact" id="contact">
      <div className="main_heading center">Contact us</div>
      <form action="" onSubmit={formSubmit} className="form">
        <div className="field fname">
          <label className="input_label" htmlFor="ContactFname">
            First Name
          </label>
          <input
            type="text"
            className="input_box"
            name="fname"
            id="ContactFname"
            placeholder="Enter first name"
            required
          />
        </div>
        <div className="field lname">
          <label className="input_label" htmlFor="ContactLname">
            Last Name
          </label>
          <input
            type="text"
            className="input_box"
            name="lname"
            id="ContactLname"
            placeholder="Enter last name"
            required
          />
        </div>
        <div className="field phone">
          <label className="input_label" htmlFor="ContactPhone">
            Phone no.
          </label>
          <input
            type="number"
            className="input_box"
            name="phone"
            id="ContactPhone"
            maxLength={10}
            placeholder="Enter valid phone no."
            required
          />
        </div>
        <div className="field email">
          <label className="input_label" htmlFor="ContactEmail">
            Email ID
          </label>
          <input
            type="email"
            className="input_box"
            name="email"
            id="ContactEmail"
            placeholder="Enter valid email ID"
            required
          />
        </div>

        <div className="field message">
          <label className="input_label" htmlFor="ContactMessage">
            Your message
          </label>
          <textarea
            name="message"
            id="ContactMessage"
            placeholder="Say hi!!!"
            className="input_box"
            required
            style={{ height: "10rem" }}
          ></textarea>
        </div>

        {err ? (
          <div className="field submit">
            <input
              type="submit"
              style={{ pointerEvents: "none" }}
              disabled
              value="Something went wrong!!!"
              className="input_box button submitButton"
            />
          </div>
        ) : send ? (
          <div className="field submit">
            <input
              type="submit"
              style={{ pointerEvents: "none" }}
              disabled
              value="Sent Successful!!!"
              className="input_box button submitButton"
            />
          </div>
        ) : loading ? (
          <div className="field submit">
            <div className="small-loader"></div>
          </div>
        ) : (
          <div className="field submit">
            <input
              type="submit"
              value="Send"
              className="input_box button submitButton"
            />
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;
