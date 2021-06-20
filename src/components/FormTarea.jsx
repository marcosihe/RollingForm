import React, {useEffect, useState} from "react";
import Lista from "./Lista";

const FormTarea = () => {
  // Código JS
let tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas'));
  // Estados
const [tarea, setTarea] = useState('');
const [listaTareas, setListaTareas] = useState(tareasLocalStorage);

// 
useEffect( () => {
  if (tareasLocalStorage) {
    console.log("Acá quiero actualizar el localStorage");
    localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
  }else{
    console.log("En el localStorage no existe la key 'listaTareas'");
    localStorage.setItem('listaTareas', JSON.stringify([]));
  }
}, [listaTareas]);

// Hooks
const handleSubmit = (e) => {
  e.preventDefault();
  setListaTareas([...listaTareas,tarea]);
  setTarea(''); // Para borrar el valor del state y por ende limpiar el input
}
const borrarTarea = (nombre) => {
  let arraytFiltrado = listaTareas.filter( (elemento) => elemento !== nombre );
  setListaTareas(arraytFiltrado);
}

// JSX
  return (
    <div className='container my-5 d-flex flex-column align-items-center'>
      <form className='w-75' onSubmit={handleSubmit}>
        <div className='d-flex mt-2 mb-2'>
          <input
            type='text'
            placeholder='Ingrese una tarea'
            className='form-control'
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <button className='btn btn-outline-light ms-2' type='submit'>Agregar</button>
        </div>
      </form>
      <article className="my-5 w-75">
        <Lista listaTareas={listaTareas} borrarTarea={borrarTarea}></Lista>
      </article>
    </div>
  );
};

export default FormTarea;
