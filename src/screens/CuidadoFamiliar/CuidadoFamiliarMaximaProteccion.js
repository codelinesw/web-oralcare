import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/CuidadoFamiliar/MaximaProteccion/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/CuidadoFamiliar/MaximaProteccion/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoFamiliarMaximaProteccion extends React.Component {


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
              <img src={titulo} alt="error" width="700" style={{ position: 'relative' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="Máxima Protección" style={{ position: 'relative', top:'100px', right:'50px' }} />
              </div>
              <div className="column pt-4 mt-0" style={{ position: 'relative', right:'-150px' }}>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>Consigue la sonrisa perfecta que tanto deseas con la fórmula</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>inigualable con la que está elaborada la Crema Dental Máxima</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>Protección Anticaries de Colgate y disfruta de unos dientes relucientes,</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>sanos y libres de caries. Utilizando esta pasta comenzarás a notar una</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>sensación de limpieza total desde la primera vez de su uso.</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-130px', top:'70px' }}>Además de que contiene flúor para mantener tus dientes y muelas</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-130px', top:'70px'}}>fuertes, debido a que se penetra hasta en los rincones más profundos</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-130px', top:'70px' }}>para combatir de manera efectiva la caries que se genera incluso entre</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-130px', top:'70px' }}>los dientes.</p>
                <div className="mt-5" style={{ position: 'relative', top: '50px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '20px', left: '-100px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}>Ayuda a combatir las caries, incluso entre los dientes</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}>Fortalece y limpia lo dientes</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}>Delicioso sabor refrescante</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadofamiliarmentaoriginal" screenPrev="cuidadofamiliarmenu" currentScreen="CuidadoFamiliar" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}