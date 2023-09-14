import axios from "axios";

import "./ClassForm.css";
import { useState } from "react";

function ClassForm() {
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);
  const [err, setErr] = useState(false);

  const formSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();

    formData.append("fname", e.target[0].value);
    formData.append("lname", e.target[1].value);
    formData.append("age", e.target[2].value);
    //gender
    if (e.target[3].checked) {
      formData.append("gender", "male");
    }
    if (e.target[5].checked) {
      formData.append("gender", "female");
    }

    formData.append("start_date", e.target[7].value);

    //type
    if (e.target[8].checked) {
      formData.append("type", "online");
    }
    if (e.target[10].checked) {
      formData.append("type", "offline");
    }

    //time
    if (e.target[12].checked) {
      formData.append("time", "5AM - 6AM");
    }
    if (e.target[14].checked) {
      formData.append("time", "6AM - 7AM");
    }
    if (e.target[16].checked) {
      formData.append("time", "7AM - 8AM");
    }
    if (e.target[18].checked) {
      formData.append("time", "8AM - 9AM");
    }

    formData.append("phone", e.target[20].value);
    formData.append("email", e.target[21].value);

    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append("_autoresponse", "thank you for reaching out to YOGA.");
    formData.append("_subject", "New client joined!");

    axios
      .post(import.meta.env.VITE_FORM_SUBMIT_LINK, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success == "true") {
          setSend(true);
        }
      })
      .catch(() => {
        setErr(true);
      });
  };

  return (
    <div className="ClassForm" id="join">
      <div className="main_heading center">Start your classes now</div>

      <form action="" onSubmit={formSubmit} className="form">
        <div className="field fname">
          <label className="input_label" htmlFor="fname">
            First Name
          </label>
          <input
            type="text"
            className="input_box"
            name="fname"
            id="fname"
            placeholder="Enter first name"
            required
          />
        </div>
        <div className="field lname">
          <label className="input_label" htmlFor="lname">
            Last Name
          </label>
          <input
            type="text"
            className="input_box"
            name="lname"
            id="lname"
            placeholder="Enter last name"
            required
          />
        </div>
        <div className="field age">
          <label className="input_label" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            className="input_box"
            name="age"
            min={1}
            max={100}
            id="age"
            placeholder="Enter age"
            required
          />
        </div>
        <div className="field radio-buttons gender">
          <label htmlFor="gender" className="input_label">
            Gender
          </label>
          <div className="gender-grid">
            <label htmlFor="male">
              <input
                required
                type="radio"
                id="male"
                value="male"
                name="gender"
              />
              <button className="button">Male</button>
            </label>
            <label htmlFor="female">
              <input
                required
                type="radio"
                id="female"
                value="Female"
                name="gender"
              />
              <button className="button">Female</button>
            </label>
          </div>
        </div>

        <div className="field start">
          <label className="input_label" htmlFor="startDate">
            Select starting date
          </label>
          <input
            type="date"
            className="input_box"
            name="start_date"
            id="startDate"
            required
          />
        </div>
        <div className="field radio-buttons type">
          <label htmlFor="type" className="input_label">
            Select class type
          </label>
          <div className="gender-grid">
            <label htmlFor="online">
              <input
                required
                type="radio"
                id="online"
                value="online"
                name="type"
              />
              <button className="button">Online</button>
            </label>
            <label htmlFor="offline">
              <input
                required
                type="radio"
                id="offline"
                value="offline"
                name="type"
              />
              <button className="button">Offline</button>
            </label>
          </div>
        </div>

        <div className="field radio-buttons time">
          <label htmlFor="time" className="input_label">
            time
          </label>
          <div className="time-grid">
            <label htmlFor="5AM - 6AM">
              <input
                required
                type="radio"
                id="5AM - 6AM"
                value="5AM - 6AM"
                name="time"
              />
              <button className="button">5AM - 6AM</button>
            </label>
            <label htmlFor="6AM - 7AM">
              <input
                required
                type="radio"
                id="6AM - 7AM"
                value="6AM - 7AM"
                name="time"
              />
              <button className="button">6AM - 7AM</button>
            </label>
            <label htmlFor="7AM - 8AM">
              <input
                required
                type="radio"
                id="7AM - 8AM"
                value="7AM - 8AM"
                name="time"
              />
              <button className="button">7AM - 8AM</button>
            </label>
            <label htmlFor="8AM - 9AM">
              <input
                required
                type="radio"
                id="8AM - 9AM"
                value="8AM - 9AM"
                name="time"
              />
              <button className="button">8AM - 9AM</button>
            </label>
          </div>
        </div>
        <div className="field phone">
          <label className="input_label" htmlFor="phone">
            Phone no.
          </label>
          <input
            type="number"
            className="input_box"
            name="phone"
            id="phone"
            maxLength={10}
            placeholder="Enter valid phone no."
            required
          />
        </div>
        <div className="field email">
          <label className="input_label" htmlFor="email">
            Email ID
          </label>
          <input
            type="email"
            className="input_box"
            name="email"
            id="email"
            placeholder="Enter valid email ID"
            required
          />
        </div>
        {err ? (
          <div className="field submit">
            <input
              type="submit"
              disabled
              style={{ pointerEvents: "none" }}
              value="Something went wrong, please try again later!!!"
              className="input_box button submitButton"
            />
          </div>
        ) : send ? (
          <div className="field submit">
            <input
              type="submit"
              disabled
              style={{ pointerEvents: "none" }}
              value="Class is booked, we will contact you!!!"
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
              value="Join Class"
              className="input_box button submitButton"
            />
          </div>
        )}
      </form>
    </div>
  );
}

export default ClassForm;
