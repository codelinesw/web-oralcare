import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Blanqueamiento/MaxWhite/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Blanqueamiento/MaxWhite/Imagen.png';
import Footer from '../../components/Footer'


export default class MaxWhite extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 ">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" style={{ position: 'relative', left: '30px', width:'700px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" style={{ position: 'relative', top: '0px', left: '-50px' }} />
              </div>
              <div className="column pl-5" style={{ position: 'relative', right: '0px', top:'0px' }}>
                <p className="small text-muted text-normal">Disfruta el refrescante sabor que la Crema Dental Max White Crystal</p>
                <p className="small text-muted text-normal">Mint de Colgate tiene para ti y sorpréndete con sus increíbles láminas</p>
                <p className="small text-muted text-normal">de blancura que se disuelven en tu boca consiguiendo una sonrisa más</p>
                <p className="small text-muted text-normal">blanca desde el primer uso.</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '30px' }}>Gracias a su fórmula con flúor y delicioso sabor a menta podrás</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '30px' }}>eliminar las bacterias que se encuentran en dientes, mejillas, encías y</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '30px' }}>lengua causantes de infecciones, mal aliento y la molesta placa que</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '30px' }}>llega a manchar tu dentadura. Mientras sus láminas de blancura se</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '30px' }}>hacen visibles desde que la colocas en tu cepillo, asegurando una</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '30px' }}>increíble sensación que durará gran parte del día, para devolverte la</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '30px' }}>confianza de hablar y sonreír en público.</p>

                <h6 className="text-danger title-red" style={{ marginTop: '75px' }}>BENEFICIOS:</h6>
                <p className="small text-muted text-normal">Combate gérmenes por 12 horas</p>
                <p className="small text-muted text-normal">Aliento fresco</p>
                <p className="small text-muted text-normal">Máxima protección anticaries</p>
                <p className="small text-muted text-normal">Fortalece y blanquea tus dientes</p>
              </div>
            </div>
          </div>
          <Footer screenNext="advancedluminouswhite" screenPrev="blanqueamientomenu" currentScreen="Blanqueamiento" showsubmenu={true} history={this.props.history} top="155px" />
        </div>
      </div>
    );
  }
}