import "./Instructor.css";

function Instructor() {
  return (
    <div className="Instructor" id="instructor">
      <div className="main_heading center">Meet your Instructor</div>
      <div className="images flex">
        <div className="img-wrapper">
          <img src="/instructor/1.jpg" alt="" />
        </div>

        <div className="img-wrapper">
          <img src="/instructor/2.webp" alt="" />
        </div>

        <div className="img-wrapper">
          <img src="/instructor/3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Instructor;
