import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';


import JavaSc from './JavaSc.js';
import vlzm from './img/vlzm.png';
import lupa from './img/lupa.png';



const Html = (props) => {


    const [filmes, setFilmes] = useState([]);
    const [filme, setFilme] = useState({
        id: '',
        Prod: '',
        nf: '',
        dataemi: '',
        consultor: '',
        perprof: '',
        gestor: '',
        iniativ: '',
        perfech: '',
        qthoras: '',
        vlhoras: '',
        tot: '',
        imposto: '',
    });

    const salvar = () => {


        setFilmes([filme, ...filmes])
        setFilme({
            id: '',
            Prod: '',
            nf: '',
            dataemi: '',
            consultor: '',
            perprof: '',
            gestor: '',
            iniativ: '',
            perfech: '',
            qthoras: '',
            vlhoras: '',
            tot: '',
            imposto: ''
        });

    }
    const removeFilme = (index) => {

        setFilmes(filmes.filter((item, i) => index != i))
    }

    const calculatotal = () => {
        const horas = Number(filme.qthoras) > 0 ? Number(filme.qthoras) : 0
        const valor = Number(filme.vlhoras) > 0 ? Number(filme.vlhoras) : 0

        const valortotal = horas * valor
        console.log(valortotal)
        const novofilme = filme
        novofilme.tot=`${valortotal}` 
        setFilme(novofilme)

    }

const changeHoras = (value) => {
    setFilme({
        ...filme, vlhoras: Number(value.target.value), tot: filme.qthoras
         * Number(value.target.value), imposto: (filme.qthoras 
        * Number(value.target.value)) / 100 * 88
    })   

}

    const changeValor = (value) => {
        setFilme({
            ...filme, qthoras: Number(value.target.value), tot: filme.vlhoras
             * Number(value.target.value), imposto: (filme.vlhoras 
            * Number(value.target.value)) / 100 * 88
        })
    }

    return (
        <body>
            <header>
                <h1>VLZM 1.0</h1>
            </header>
            <main>
                <div className='title'>
                    <h2>Controle de Faturamento.</h2>
                    <span>Prestador de Serviço TI.</span>
                    <img className='vlzm' src={vlzm}></img>

                </div>

                <div>
                    <input className='buscar' type='search' placeholder='Buscar'></input>
                    <img className='lupa' src={lupa} ></img>
                </div>

                <div className='card'>
                    <div className='containner'>



                        <div className='lineinput1'>

                            <label className='lb_ps'  >Proj.Susten.</label>
                            <input type='text' id='valor' value={filme.Prod}
                             placeholder="código do projeto" autocomplete='off' autofocus="autofocus"
                                onChange={(e) => {
                                    setFilme({
                                        ...filme, Prod: e.target.value
                                    })
                                }}></input>
                        </div>


                        <div className='lineinput1'>
                            <label className='nf'>Nota Fiscal</label>
                            <input type='text' id='valor1' value={filme.nf}
                             placeholder="valor / Prod." autocomplete='off'
                                onChange={(e) => {
                                    setFilme({
                                        ...filme, nf: e.target.value
                                    })
                                }}></input>

                        </div>

                        <div className='lineinput1'>
                            <label className='lb_d-e'>Dt. Emissão</label>
                            <input className='center' type='date' id='valor2' value={filme.dataemi}
                             autocomplete='off'
                                onChange={(e) => {
                                    setFilme({
                                        ...filme, dataemi: e.target.value
                                    })
                                }}></input>

                        </div>
                        <div className='lineinput1'>
                            <label className='lb_cons' >Consultor</label>
                            <input type='text' id='valor3' 
                            placeholder="nome" value={filme.consultor}
                             autocomplete='off'
                                onChange={(e) => {
                                    setFilme({
                                        ...filme, consultor: e.target.value
                                    })
                                }}></input>

                        </div>


                        <div className='lineinput1'>
                            <label className='lb_perf' >Perfil Prof.</label>
                            <input type='text' id='valor4' value={filme.perprof} 
                            placeholder="consultor" autocomplete='off'
                                onChange={(e) => {
                                    setFilme({
                                        ...filme, perprof: e.target.value
                                    })
                                }}></input>

                        </div>
                        <div className='lineinput1'>
                            <label className='lb_Gestor' >Gestor de TI</label>
                            <input type='text' id='valor5' value={filme.gestor}
                             placeholder="nome" autocomplete='off'
                                onChange={(e) => {
                                    setFilme({
                                        ...filme, gestor: e.target.value
                                    })
                                }}></input>

                        </div>

                        <div className='lineinput1'>
                            <label className='lb_inicAtiv' >Dt Iníc./ Ativ.</label>
                            <input type='date' id='valor6' value={filme.iniativ} autocomplete='off'
                                onChange={(e) => {
                                    setFilme({
                                        ...filme, iniativ: e.target.value
                                    })
                                }}></input>

                        </div>

                        <div className='lineinput1'>
                            <label className='lb_periodo' >Período</label>
                            <input type='text' id='valor7' value={filme.perfech} 
                            placeholder="fechamento" autocomplete='off'
                                onChange={(e) => {
                                    setFilme({
                                        ...filme, perfech: e.target.value
                                    })
                                }}></input>

                        </div>

                        <div className='lineinput1'>
                            <label className='lb_qhoras' >Qt /horas</label>
                            <input type='number' id='valor8' value={filme.qthoras} 
                            placeholder="00:00" autocomplete='off'
                                onChange={(e) => {
                                    changeValor(e)

                                }}></input>

                        </div>


                        <div className='lineinput1'>
                            <label className="lb_vlHoras" >Val /horas</label>
                            <input type='text' id='valor9' value={filme.vlhoras} 
                            placeholder="R$ 000,00" autocomplete='off'
                                onChange={(e) => {
                                    changeHoras(e)
                                 
                                }}></input>

                        </div>

                        <div className='lineinput1'>
                            <label className='lb_valTot' >Vl /Total</label>
                            <input className='vls' type='text' id='valor10' value={filme.tot} 
                            placeholder="R$ 000,00" autocomplete='off' readOnly
                               
                            ></input>

                        </div>
                        <div className='lineinput1'>
                            <label className='lb_imposto' >Tot /s.Imposto</label>
                            <input type='text' id='valor11' value={filme.imposto} 
                            placeholder="R$ 000,00" autocomplete='off' readOnly
                            ></input>
                        </div>
                    </div>

                    <div className="btns">
                        <button className='botaoS' onClick={salvar}>Salvar</button>
                        <button className='botaoC' onClick={''}>Cancelar</button>
                    </div>

                </div>

                <div className='content'>
                    <table border='1'>
                        <thead>
                            <th className='center'>ID</th>
                            <th>Proj./Sust.</th>
                            <th>NF</th>
                            <th>Dt.Emissão</th>
                            <th>Consultor</th>
                            <th>Perf./Prof.</th>
                            <th>Gestor</th>
                            <th>Inic.Ativ.</th>
                            <th>Periodo fech.</th>
                            <th>Qt.horas</th>
                            <th>Val.Hora</th>
                            <th>Tot.hora</th>
                            <th>Tot./S Imp</th>
                            <th className='center'>Ações</th>
                        </thead>


                        <tbody className='tbody'>
                            {filmes.map((filme, index) => (<JavaSc filme={filme} removeFilme={removeFilme} index={index} />))}
                        </tbody>
                    </table>
                </div>
            </main>
        </body>
    );
}
export default Html;

