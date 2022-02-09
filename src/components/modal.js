import React, { useState } from 'react'


import Img3 from './img/Exet.png';

const Modal = ({ Children }) => {

    const [isModalVisible, setIsModalVisible] = useState(false); 

    return (
        <div className="modal">
            <div className="container">
                <h1 className="dadosModal">[ Entre com os dados de correção ]</h1>
                <button className='salvar' onClick={ () => setIsModalVisible(true)}>Salvar</button>
                {isModalVisible ? (<Modal onClose={ () => setIsModalVisible(false)}></Modal>) : null}

                <div className="content">{Children}</div>
                <img className="img3" src={Img3} ></img>

                <div className='lineinputModal'>

                    <label className='lb_ps-a'  >Proj.Susten.</label>
                    <input type='text' id='valor' value={''} placeholder="código do projeto" autocomplete='off' autofocus="autofocus" pattern='(\[a-zA-Z09]ou{3}\)'
                    ></input>
                </div>


                <div className='lineinputModal'>
                    <label className='nf-b'>Nota Fiscal</label>
                    <input type='text' id='valor1' value={''} placeholder="valor / Prod." autocomplete='off'
                    ></input>

                </div>


                <div className='lineinputModal'>
                    <label className='lb_cons-c' >Consultor</label>
                    <input type='text' id='valor3' placeholder="nome" value={''} autocomplete='off'
                    ></input>

                </div>



                <div className='lineinputModal'>
                    <label className='lb_perf-d' >Perfil Prof.</label>
                    <input type='text' id='valor4' value={''} placeholder="consultor" autocomplete='off'
                    ></input>

                </div>



                <div className='lineinputModal'>
                    <label className='lb_Gestor-e' >Gestor de TI</label>
                    <input type='text' id='valor5' value={''} placeholder="nome" autocomplete='off'
                    ></input>

                </div>



                <div className='lineinputModal'>
                    <label className='lb_inicAtiv-f' >Dt Iníc./ Ativ.</label>
                    <input type='date' id='valor6' value={''} autocomplete='off'
                    ></input>

                </div>



                <div className='lineinputModal'>
                    <label className='lb_periodo-g' >Período</label>
                    <input type='text' id='valor7' value={''} placeholder="fechamento" autocomplete='off'
                    ></input>

                </div>



                <div className='lineinputModal'>
                    <label className='lb_qhoras-h' >Qt /horas</label>
                    <input type='number' id='valor8' value={''} placeholder="00:00" autocomplete='off'
                    ></input>

                </div>



                <div className='lineinputModal'>
                    <label className="lb_vlHoras-i" >Val /horas</label>
                    <input type='text' id='valor9' value={''} placeholder="R$ 000,00" autocomplete='off'
                    ></input>

                </div>


                <div className='lineinputModal'>
                    <label className='lb_valTot-j' >Vl /Total</label>
                    <input className='vls' type='text' id='valor10' value={''} placeholder="R$ 000,00" autocomplete='off'
                    ></input>

                </div>



                <div className='lineinputModal'>
                    <label className='lb_imposto-l' >Tot /s.Imposto</label>
                    <input type='text' id='valor11' value={''} placeholder="R$ 000,00" autocomplete='off'
                    ></input>
                </div>
            </div>
        </div >
    )
}
export default Modal;