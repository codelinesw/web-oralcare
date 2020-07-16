import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/SaludNatural/CocoJengibre/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/SaludNatural/CocoJengibre/Imagen.png';
import Footer from '../../components/Footer'


export default class SaludNaturalDetox extends React.Component {


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
              <img src={titulo} alt="detox" width="700" style={{ position: 'relative' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" className="" style={{ position: 'relative', height: '770px', top: '-50px', left:'-100px' }} />
              </div>
              <div className="column pt-4 mt-0"  style={{ position: 'relative',top:'0px', right:'-100px'}}>
                <p className="text-danger title-red" style={{ position: 'relative', marginTop: '20px', left: '-20px', }}>Protege tu sonrisa & llénala de vida.</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>Los científicos de Colgate, después de años de investigación, inspirados</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>en la riqueza de la naturaleza, han combinado jengibre y aceite de coco</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>para una sensación de frescura, en una exclusiva fórmula que ayuda a</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>remover bacterias que pueden causar mal aliento, caries o problemas de encías.</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px', top:'20px' }}>Colgate Natural Extracts combina lo mejor de nuestra ciencia y la</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px', top:'20px' }}>naturaleza. Pruébala y dale un toque de naturaleza al cuidado de tu</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px', top:'20px' }}>sonrisa.</p>
                <div className="" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '0px', left: '-80px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><strong className="text-danger mr-2">+</strong>Explosión de sabores para el cuidado de tu sonrisa</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><strong className="text-danger mr-2">+</strong>Contiene extractos naturales de aceite de coco</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> y jengibre que ayudan a eliminar bacterias que</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>causan el mal aliento, la caries y problemas de encías.</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><strong className="text-danger mr-2">+</strong>Ayuda a fortalecer los dientes y proporciona una</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>sensación natural refrescante</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><strong className="text-danger mr-2">+</strong>El sabor del jengibre proporciona una sensación refrescante</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><strong className="text-danger mr-2">+</strong>El aceite de coco proporciona una sensación suave y dulce</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="saludnaturalpurificante" screenPrev="saludnaturalmenu" currentScreen="SaludNatural" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}