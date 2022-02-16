import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const alertMyInput = () => {
    return alert(`My name is ${props.fullName}`);
  };
  return (
    <>
      <div className="info-container">
        <img src={props.children} alt="" />
      </div>
      <div className="interest">
        <div>
          <h3>{props.fullName}</h3>
        </div>
      </div>
      <div className="about">
        <h3>{props.profession}</h3>
        <p>{props.bio}</p>
      </div>
      <button onClick={alertMyInput} className="button">
        Click Me!
      </button>
    </>
  );
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default Profile;
