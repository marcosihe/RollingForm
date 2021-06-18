import React from "react";
import ItemTarea from "./ItemTarea";

const Lista = (props) => {
  return (
    <ul className="list-group">
      {props.listaTareas.map((dato, indice) => (
        <ItemTarea
          tarea={dato}
          key={indice}
          borrarTarea={props.borrarTarea}
        ></ItemTarea>
      ))}
    </ul>
  );
};

export default Lista;
