import React from "react";
import "./Caard.css"
import PropTypes from "prop-types";

const Card = ({ lang, url, fcolor, scolor }) => {
    console.log(PropTypes );
  return (
    <div className='card' style={{
        background: `linear-gradient(to right, ${fcolor}, ${scolor})`
    }}>
      <img src= {url} alt="lang.svg" />
      <h3>{lang}</h3>
    </div>
  )
}
Card.propTypes = {
    lang: PropTypes.string,
    url: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string,

}

export default Card;
