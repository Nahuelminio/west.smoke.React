import React from "react";
import '../style/buttons.css'

export const ButtonList = ({ marcas, filterMarca }) => {
  return (
    <div className="marcas botones-marcas">
      {marcas.map((marca) => (
        <button
          type="button"
          className=" boton-marca btn"
          key={marca}
          onClick={() => filterMarca(marca)}
        >
          {marca}
          
        </button>
      ))}
    </div>
  );
};
