import "./Importance.css";
import logo from "/logo.png";

function Importance() {
  const data = [
    {
      img: "/imgs/Importance1.png",
      info: "Yoga is a great way to take care of your body and strengthen it.",
    },
    {
      img: "/imgs/Importance2.png",
      info: "Yoga is a great way to take care of your body and strengthen it.",
    },
    {
      img: "/imgs/Importance3.png",
      info: "Yoga is a great way to take care of your body and strengthen it.",
    },
  ];

  return (
    <div className="Importance flex" id="whyyoga">
      <img src={logo} alt="" className="logo" />
      <div className="main_heading ">Why Yoga Is Important</div>
      <div className="sub_heading center">
        Starting a yoga routine can be intimidating, but it helps to have an
        idea of what to expect before joining any class.
      </div>
      <div className="all-importance flex">
        {data.map((imp, _) => (
          <div className="single-importance flex" key={_}>
            <img src={imp.img} alt="" />
            <div className="info sub_heading center">{imp.info}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Importance;
