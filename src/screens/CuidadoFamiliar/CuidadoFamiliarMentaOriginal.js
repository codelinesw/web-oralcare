import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/CuidadoFamiliar/MentaOriginal/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/CuidadoFamiliar/MentaOriginal/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoFamiliarMentaOriginal extends React.Component {


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
              <img src={titulo} alt="error" width="700" style={{ position: 'relative', top: '50px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" style={{ position: 'relative', top: '130px', right: '50px' }} />
              </div>
              <div className="column pt-4 mt-0" style={{position:"relative",right:'-150px', top:'50px'}}>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>Con la Crema Dental Colgate Triple Acción protege tu salud bucal y la de</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>toda tu familia, brindándoles la confianza que necesitan, manteniendo</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>un aliento súper fresco por mucho más tiempo.</p>

                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-130px', top: '70px' }}>Su poderosa fórmula anticaries ayuda a eliminar las pequeñas bacterias</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-130px', top: '70px' }}>que se encuentran entre las mejillas, dientes y lengua dejando una</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-130px', top: '70px' }}>sensación totalmente refrescante en tu boca por varias horas.</p>

                <div className="mt-5" style={{ position: 'relative', top: '70px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '20px', left: '-100px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}>Protección anticaries</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}>Extra blancura</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}>Aliento Fresco</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadofamiliarxtrablancura" screenPrev="cuidadofamiliarmenu" currentScreen="CuidadoFamiliar" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}