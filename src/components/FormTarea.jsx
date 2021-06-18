import React, {useState} from "react";

const FormTarea = () => {

const [tarea, setTarea] = useState('');
const [listaTareas, setListaTareas] = useState([]);

//const guardarTarea = (e) => {
//    setTarea(e.target.value);
//    console.log(tarea);
//}

const handleSubmit = (e) => {
  e.preventDefault();
  setListaTareas([...listaTareas,tarea]);
  setTarea(''); // Para borrar el valor del state y por ende limpiar el input
}

  return (
    <div className='container my-5 d-flex justify-content-center'>
      <form className='w-75' onSubmit={handleSubmit}>
        <div className='d-flex mt-2 mb-2'>
          <input
            type='text'
            placeholder='Ingrese una tarea'
            className='form-control'
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <button className='btn btn-outline-light' type='submit'>Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
