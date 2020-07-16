import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/CuidadoFamiliar/SoftMint/Titulo.png';
import Header from '../../components/Header';
import img1 from '../../images/Productos/CuidadoFamiliar/SoftMint/01.png';
import img2 from '../../images/Productos/CuidadoFamiliar/SoftMint/02.png';
import img3 from '../../images/Productos/CuidadoFamiliar/SoftMint/03.png';
import img4 from '../../images/Productos/CuidadoFamiliar/SoftMint/04.png';
import img5 from '../../images/Productos/CuidadoFamiliar/SoftMint/05.png';
import T1 from '../../images/Productos/CuidadoFamiliar/SoftMint/T01.png';
import T2 from '../../images/Productos/CuidadoFamiliar/SoftMint/T02.png';
import T3 from '../../images/Productos/CuidadoFamiliar/SoftMint/T03.png';
import T4 from '../../images/Productos/CuidadoFamiliar/SoftMint/T04.png';
import T5 from '../../images/Productos/CuidadoFamiliar/SoftMint/T05.png';
import Footer from '../../components/Footer'


export default class CuidadoDeLosMasPequesCepillos extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '60%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="Título" width="500" className="lx30" style={{ position: 'relative', top: '0px', left: '0px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100" style={{ position: 'relative', top: '-20px' }}>
              <div className="col-md-4" style={{ textAlign: 'center' }}>
                <div style={{ position: "relative", width: '100%' }}>
                  <img src={img1} alt="error" style={{ position: 'relative', width: '150px', margin: '0 auto' }} />
                </div>
                <div>
                  <img src={T1} alt="error" style={{ position: 'relative', width: '200px', margin: '0 auto' }} />
                </div>
                <div style={{ textAlign: 'justify' }}>
                  <p className="small text-muted text-normal" style={{ lineHeight: '1.5', marginTop: '30px' }}>
                    ¿Cansado del ardor del alcohol?<br /><br />
                  Colgate Plax Soft Mint no contiene alcohol, su efectiva fórmula ayuda a matar los gérmenes causantes de la gingivitis, la placa bacteriana y el mal aliento hasta por 12 horas.
                  </p>
                </div>
              </div>
              <div className="col-md-8" style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-block', marginRight: '150px' }}>
                  <div>
                    <img src={img2} alt="error" style={{ position: 'relative', width: '160px' }} />
                  </div>
                  <div>
                    <img src={T2} alt="error" style={{ position: 'relative', width: '200px' }} />
                  </div>
                </div>
                <div style={{ display: 'inline-block' }}>
                  <div>
                    <img src={img3} alt="error" style={{ position: 'relative', width: '150px' }} />
                  </div>
                  <div>
                    <img src={T3} alt="error" style={{ position: 'relative', width: '200px' }} />
                  </div>
                </div>
                <div style={{ textAlign: 'justify' }}>
                  <p className="small text-muted text-normal" style={{ lineHeight: '1.5', marginTop: '30px' }}>
                    ¡Prepárate para un aliento mega refrescante hasta por 12 horas!<br /><br />
                    Adicional a una mega frescura ayuda a matar los gérmenes que causan la gingivitis, la placa bacteriana y el mal aliento.
                  </p>
                </div>
              </div>
              <div className="col-md-4" style={{ textAlign: 'center' }}>
                <div>
                  <img src={img4} alt="error" style={{ position: 'relative', width: '155px' }} />
                </div>
                <div>
                  <img src={T4} alt="error" style={{ position: 'relative', width: '200px' }} />
                </div>
                <div style={{ textAlign: 'justify' }}>
                  <p className="small text-muted text-normal" style={{ lineHeight: '1.5', marginTop: '20px' }}>
                    El enjuague bucal Colgate Plax Ice Fusión Cold Mint ofrece frescura intensa que dura 10 veces más**, sin ardor en tu boca.
                  </p>
                </div>
              </div>
              <div className="col-md-4" style={{ textAlign: 'center' }}>

                <div>
                  <img src={img5} alt="error" style={{ position: 'relative', width: '160px', left: '0px' }} />
                </div>
                <div>
                  <img src={T5} alt="error" style={{ position: 'relative', width: '300px', left: '0px' }} />
                </div>
                <div style={{ position: 'relative', width: '100%', textAlign: 'left' }}>
                  <p className="small text-muted text-normal" style={{ lineHeight: '1.5', marginTop: '25px' }}>
                    El enjuague bucal Colgate Plax Ice Fusión Cold Mint ofrece frescura intensa que dura 10 veces más**, sin ardor en tu boca.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadofamiliarmenu" screenPrev="cuidadofamiliarmenu" currentScreen="CuidadoFamiliar" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}