import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Cuidadodelosmaspeques/LigadelaJusticia/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Cuidadodelosmaspeques/LigadelaJusticia/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoDeLosMasPequesLigaDeLaJusticia extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" width="600" className="lx30" style={{ position: 'relative', left: '200px', top: '50px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100" style={{position:"relative", top:'30px'}}>
              <div className="column mt-5">
                <img src={img} alt="error" style={{ position: 'relative', top: '-100px', height: '670px', right: '50px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', lineHeight: '1.2' }}>Cuida sus piezas dentales mientras disfrutan su delicioso sabor bubble<br/>fruit, permite que realicen su cepillado de manera fácil y divertida con<br/>sus súper héroes favoritos (Batman y La Mujer Maravilla). Protege de<br/>manera cuidadosa cada uno de sus dientes y muelas para evitar la<br/>formación de sarro o caries a temprana edad y aprovecha su fórmula<br/>espectacular que es baja en abrasión y cuenta con flúor que mantiene<br/>brillante su esmalte.<br/><br/>Ayúdalo a fortalecer sus caninos y molares para que puedan<br/>desarrollarse de manera ideal, recuerda que es muy importante llevarlo<br/>al odontólogo mínimo dos veces al año. Este producto es apto para niños<br/>de 1 año en adelante.</p>
                <div className="mt-5" style={{ position: 'relative', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '70px', left: '0px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', left: '0px', }}><strong className="text-danger mr-2">+</strong>Protección contra las caries, clínicamente probado</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '0px', }}><strong className="text-danger mr-2">+</strong>Protección del esmalte que fortalece y protege los dientes</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '0px', }}><strong className="text-danger mr-2">+</strong>Con los personajes de Batman y la Mujer Maravilla que alientan a los niños a cepillarse</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '0px', }}><strong className="text-danger mr-2">+</strong>Viene en un cómodo tubo que es fácil de usar</p>
                </div>
              </div>
            </div>
          </div>
          {/*<Footer screenNext="cuidadodelosmaspequescepillos" screenPrev="cuidadodelosmaspequesbarbieminions" currentScreen="Cuidadochicos" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />*/}
        </div>
      </div>
    );
  }
}