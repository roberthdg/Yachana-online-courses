import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const cursos = [
    {
        titulo:'Arquitectura',
        descripcion:'Dibujo, Diseño y Visualización de Modelos Arquitectónicos'
    },
    {
        titulo:'Ingeniería y construcción',
        descripcion:'Dibujo, Diseño y Cálculo de Obras Civiles'
    },
    {
        titulo:'Modelado y animación 3d',
        descripcion:'Dibujo, Texturización, Render y Animación de Objetos y Personajes'
    },
    {
        titulo:'Post-producción',
        descripcion:'Edición de Videos, Compisición, Animación de Efectos'
    },
    {
        titulo:'Web',
        descripcion:'Diseño, Creación y Gestión de Aplicaciones y Herramientas Informáticas'
    },
    {
        titulo:'Diseño gráfico e impresos',
        descripcion:'Diseño y Composición de Arte'
    },
]

export default function Content(props) {
    const [active, setActive] = useState()
    return (
        <div className={props.classes.root} id="about">
            <Grid container align="center" style={{maxWidth:'1500px', margin:'auto'}}>
                {cursos.map((curso, i) => (
                    <Grid item sm={11} md={11} lg={4} align="center" key={i} style={{paddingTop:'50px'}}>
                        <div onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(false)}>
                            <div className='cursoBorder'>
                                {/* filter effect */}
                                <div className={active===i? 'cursoFiltro' : null} />

                                <img src={`/curso${i+1}.jpg`} className={active===i? 'cursoImg activo' : 'cursoImg'}/>
                                <Typography className={active===i? 'cursoTexto hover' : 'cursoTexto'}>
                                    <span className='titulo'>{curso.titulo}</span> <br />
                                    <span className='descripcion'><br />{curso.descripcion}</span>
                                </Typography>
                            </div>
                        </div>
                    </Grid>)
                )}
            </Grid>
        </div>
    );
}