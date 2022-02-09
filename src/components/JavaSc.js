import React from 'react';

import imgA from './img/delete.png';
import imgB from './img/Edite.png';


const JavaSc = ({ filme, removeFilme,index }) => {

    const excluir = () => {
        removeFilme(index)
    }
    const editar = () => {
        alert('Deseja Editar')
    }

    

    return (  
        <>
            <tr>
                <td className='center'>{filme.id}</td>
                <td>{filme.Prod}</td>
                <td>{filme.nf}</td>
                <td>{filme.dataemi}</td>
                <td>{filme.consultor}</td>
                <td>{filme.perprof}</td>
                <td>{filme.gestor}</td>
                <td>{filme.iniativ}</td>
                <td>{filme.perfech}</td>
                <td>{filme.qthoras}</td>
                <td>{filme.vlhoras}</td>
                <td>{filme.tot}</td>
                <td >{filme.imposto}</td>
                <td className='center'>
                    <img src={imgB} onClick={() => editar(true)}></img>
                    <img src={imgA} onClick={excluir}></img>
                </td>
            </tr>

        </>
    );
}
export default JavaSc;
