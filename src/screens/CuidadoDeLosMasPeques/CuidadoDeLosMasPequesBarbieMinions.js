import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Cuidadodelosmaspeques/BarbieMinions/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Cuidadodelosmaspeques/BarbieMinions/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoDeLosMasPequesBarbieMinions extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" width="600" className="lx30" style={{ position: 'relative', left: '300px', top: '50px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                <img src={img} alt="error" style={{ position: 'relative', top: '-100px', height: '670px', right: '50px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', lineHeight:'1.2' }}>Con su fórmula clínicamente comprobada para dar protección contra las<br/>caries, sus personajes favoritos los acompañarán en su misión hacia el<br/>villano de las bacterias. Cuenta con una práctica tapa que facilita su uso,<br/>permitiendo que los niños completen la tarea sin necesitar de un adulto,<br/>además su delicioso sabor Bubble Fruit les encantará y es apto para<br/>niños de 1 año en adelante.<br/><br/>Gracias a su flúor para niños es delicado con sus dientes, mejillas y<br/>lengua por lo que el momento del cepillado se convertirá en su momento<br/>favorito del día. Recuerda que el cepillado correcto lleva al menos dos<br/>minutos y se recomienda visitar al odontólogo para una limpieza<br/>profesional.</p>
                <div className="mt-5" style={{ position: 'relative', top: '0px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '70px', left: '0px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', left: '0px', }}>Protección contra las caries, clínicamente probado</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '0px', }}>Protección del esmalte que fortalece y protege los dientes</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '0px', }}>Gel con delicioso sabor a tutti-frutti</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '0px', }}>Con flúor para niños</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '0px', }}>Viene en un cómodo tubo que es fácil de usar</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadodelosmaspequesligadelajusticia" screenPrev="cuidadodelosmaspequesmenu" currentScreen="Cuidadochicos" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30'/>
        </div>
      </div>
    );
  }
}