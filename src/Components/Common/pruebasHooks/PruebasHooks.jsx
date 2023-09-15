import React, { useState, useEffect } from "react";
import "./PruebasHooks.css"; // Importa tu archivo CSS

const PruebasHooks = ({ contador, setContador }) => {
  const arr = [
    "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7129052/pexels-photo-7129052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18111088/pexels-photo-18111088/free-photo-of-playa-vacaciones-gente-arena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/18171438/pexels-photo-18171438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const [img, setImg] = useState("");

  useEffect(() => {
    setImg(arr[contador]);
  }, [contador]);

  const handleNext = () => {
    if (contador < arr.length - 1) {
      setContador(contador + 1);
    }
  };

  const handlePrev = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="image-container">
      <button className="arrow-button left" onClick={handlePrev}>
        {"<"}
      </button>
      <img src={img} alt="" className="center-image" />
      <button className="arrow-button right" onClick={handleNext}>
        {">"}
      </button>
      <div className="counter">{contador}</div>
    </div>
  );
};

export default PruebasHooks;
