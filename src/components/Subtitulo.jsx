import React from 'react';

const Subtitulo = (props) => {
    return (
        <div>
            <h3 className="text-light text-center">Lista de tareaas de la comisión {props.comision} - Año {props.anio}</h3>
        </div>
    );
};

export default Subtitulo;