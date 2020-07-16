import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/SaludNatural/DefensaReforzada/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/SaludNatural/DefensaReforzada/Imagen.png';
import Footer from '../../components/Footer'


export default class SaludNaturalDefensaReforzada extends React.Component {


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
              <img src={titulo} alt="error" width="700" style={{ position: 'relative' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" className="image-left expand lessexpand" style={{ position: 'relative', height: '670px', top:'-30px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>Los científicos de Colgate, después de años de investigación, inspirados</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>en la riqueza de la naturaleza, han combinado extractos de limón, lima,</p>
                <p className="small text-muted text-normal top-25" style={{ position: 'relative', left: '0px' }}>naranja y eucalipto con un toque de hierbabuena y especias, en una</p>
                <p className="small text-muted text-normal top-25" style={{ position: 'relative', left: '0px' }}>exclusiva fórmula que ayuda a fortalecer tus dientes y refrescar tu boca.</p>
                <p className="small text-muted text-normal top-25" style={{ position: 'relative', left: '0px', top:'70px' }}>Colgate Natural Extracts combina lo mejor de nuestra ciencia y la naturaleza.</p>
                <p className="small text-muted text-normal top-25" style={{ position: 'relative', left: '0px', top:'70px' }}>Pruébala y dale un toque de naturaleza al cuidado de tu sonrisa.</p>
                <div className="mt-5" style={{ position: 'relative', top: '70px', right: '0px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '20px', left: '0px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '0px', }}><strong className="text-danger mr-2">+</strong>Explosión de sabores para el cuidado de tu sonrisa</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '0px', }}><strong className="text-danger mr-2">+</strong>Contiene extractos de limón, lima, naranja y eucalipto</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '0px', }}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>con un toque de hierbabuena que ayudan a fortalecer</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '0px', }}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>los dientes y refrescar tu boca</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '0px', }}><strong className="text-danger mr-2">+</strong>Ayuda a fortalecer los dientes y proporciona una</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '0px', }}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>sensación natural refrescante</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="saludnaturaldetox" screenPrev="saludnaturalmenu" currentScreen="SaludNatural" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}