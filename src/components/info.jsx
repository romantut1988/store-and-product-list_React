import React from "react";
import { useContext } from "react";
import AppContext from "../context";

const Info = ({title, image, description}) => {
  const { setCartOpened } = useContext(AppContext);
  
  return (
    <div className="cartEmpty">
      <img className="cartEmptyImg" src={image} alt="Empty" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick = { () => setCartOpened(false)} className="greenButtonTop">
        <img src="/img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;