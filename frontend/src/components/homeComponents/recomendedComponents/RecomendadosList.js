import React from 'react';
import { Recomendado } from './RecomendedComponent';

export function RecomendadosList({ recomendados }) {
    if (recomendados) {
        console.log(recomendados);
        return (
            <ul>
                {
                    recomendados.map((recomendado) => {
                        return (<li><Recomendado recomendado={recomendado}></Recomendado></li>);
                    })
                }
            </ul>
        );
    } else {
        return (
            <div><p>No hay recomendados disponibles.</p></div>
        );
    }

}