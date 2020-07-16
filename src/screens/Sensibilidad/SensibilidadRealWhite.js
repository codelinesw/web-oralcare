import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Sensibilidad/RealWhite/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Sensibilidad/RealWhite/Imagen.png';
import Footer from '../../components/Footer'


export default class SensibilidadRealWhite extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -20px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true}/>
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" width="700" style={{ position: 'relative', top:'50px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" style={{ position: 'relative', width: '870px', top:'130px', right:'200px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="text-danger title-red" style={{ position: 'relative', left: '-130px',marginTop:'92px' }}>Brinda la máxima protección a tus dientes sensibles con la Crema Dental Sensitive Pro Alivio</p>
                <p className="text-danger title-red" style={{ position: 'relative', left: '-130px', top:'-120px' }}>Blanqueadora que Colgate tiene para ti. Gracias a su tecnología Pro-Argin con arginina brinda un</p>
                <p className="text-danger title-red" style={{ position: 'relative', left: '-130px', top:'-115px' }}>alivio comprobado contra la hipersensibilidad causada por estímulos de frío o calor extremo en los</p>
                <p className="text-danger title-red" style={{ position: 'relative', left: '-130px', top:'-110px' }}>alimentos.</p>
              </div>
              <div className="column pt-4 mt-2">
                <p className="text-danger title-red" style={{ position: 'relative', left: '-130px',marginTop:'92px' }}>Su fórmula blanqueadora es menos abrasiva y más efectiva, por lo que remover las manchas en</p>
                <p className="text-danger title-red" style={{ position: 'relative', left: '-130px', top:'-120px' }}>los dientes y restaurar el blanco natural de tu dentadura será una tarea fácil y su alivio instantáneo</p>
                <p className="text-danger title-red" style={{ position: 'relative', left: '-130px', top:'-115px' }}>dura varias horas por lo que podrás disfrutar de tu comida favorita sin sentir molestias.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="sensibilidadreparacioncompleta" screenPrev="sensibilidadmenu" currentScreen="Sensibilidad" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}