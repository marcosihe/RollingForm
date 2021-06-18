import React from "react";

const FormTarea = () => {
  return (
    <div className='container my-5 d-flex justify-content-center'>
      <form className='w-75'>
        <div className='d-flex mt-2 mb-2'>
          <input
            type='text'
            placeholder='Ingrese una tarea'
            className='form-control'
          />
          <button className='btn btn-outline-light'>Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
