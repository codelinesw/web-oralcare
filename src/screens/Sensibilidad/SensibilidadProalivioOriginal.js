import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Sensibilidad/ProAlivio/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Sensibilidad/ProAlivio/Imagen.png';
import Footer from '../../components/Footer'


export default class SensibilidadProalivioOriginal extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true}/>
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex">
              <img src={titulo} alt="error" width="500" style={{ position: 'relative', right:'-460px', top:'50px'}} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="Pro Alivio" className="" style={{ position: 'relative', height: '670px', top:'-30px',right:'50px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="small text-muted text-normal top-30" style={{ position: 'relative',lineHeight:1.5 }}>Cuidar tu salud bucal nunca fue tan fácil, con la Crema Dental Sensitive Pro Alivio que Colgate tiene para ti lo podrás lograr. Gracias a su tecnología Pro-Argin con arginina brinda un alivio comprobado contra la hipersensibilidad causada por estímulos de frío o calor extremo en los alimentos.<br/><br/>Su agente anticaries reduce  efectivamente las caries y formación de placa dejando un aliento fresco con un toque de menta que te encantará. Cuenta con fórmula sin alcohol actuando en conjunto con el agente desensibilizante para brindar mayor protección a los dientes, mejillas y encías sin provocar dolor, lesiones en la mucosa y la molesta sequedad bucal.</p>
                <div className="mt-5" style={{ position: 'relative', top: '80px', right: '35px' }}>
                <p className="small text-muted .text-inferior" style={{ position: 'relative', top: '0px'}}>Se recomienda utilizar hilo dental y visitar a tu dentista mínimo dos veces al año para un examen oral y limpieza profesional.</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="sensibilidadblanqueamiento" screenPrev="sensibilidadmenu" currentScreen="Sensibilidad" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}