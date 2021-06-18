import React from 'react';

const Subtitulo = (props) => {
    return (
        <div>
            <h3 className="text-light text-center">Bienvenido a la comisión {props.comsion} del año {props.anio}</h3>
        </div>
    );
};

export default Subtitulo;