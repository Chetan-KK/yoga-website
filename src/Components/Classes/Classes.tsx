import classes from '../../assets/classes.js'

import './Classes.css'

type singleClass  = {
  title:string,
  desc:string
}

function Classes() {
  return (
    <div className="Classes">
      <div className="top-section flex">
        <div className="main_heading">The class you get here</div>
        <div className="sub_heading">Were consistently improving our offerings and services, and pride ourselves creating connections with our members and delivering the most porsonalized fitness experience possible.</div>
      </div>
      <div className="all-classes flex">
        {classes.map((singleClass :singleClass,i:number)=>(
        <div className="class flex" key={i}>
        <div className="design"></div>
        <div className="title">{singleClass.title}</div>
        <div className="desc">{singleClass.desc}</div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Classes
