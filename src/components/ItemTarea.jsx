import React from "react";

const ItemTarea = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      {props.tarea}
      <button className="btn btn-danger" onClick={() => props.borrarTarea(props.tarea)}>
        Borrar
      </button>
    </li>
  );
};

export default ItemTarea;
