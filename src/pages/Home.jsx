import React, { useState } from "react";
import user from "../assets/js/data/user";
import moment from "moment";
const Home = () => {
  const [dateToFormat, setdateToFormat] = useState(
    moment().format("MMMM Do YYYY, h:mm:ss a")
  );
  const updateTime = () => {
    let clock = moment().format("MMMM Do YYYY, h:mm:ss a");
    setdateToFormat(clock);
  };
  setInterval(updateTime, 1000);

  return (
    <div className="home">
      <h1 className="app-heading6">{dateToFormat}</h1>
      <h1 className="user-name app-heading1">{user.about.name}</h1>
      {/* <p className='breakpoint'>___________________</p> */}
      {/* <h6 className='user-profession'>{user.about.profession}</h6> */}
      {/* <span className='user-description'>{user.about.description}</span> */}
      <span
        className="user-description"
        dangerouslySetInnerHTML={{ __html: user.about.description }}
      ></span>
    </div>
  );
};

export default Home;
