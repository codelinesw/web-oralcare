import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Cuidadodelosmaspeques/MyFirst/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Cuidadodelosmaspeques/MyFirst/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoDeLosMasPequesMyFirst extends React.Component {


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
              <img src={titulo} alt="error" width="500" className="lx30" style={{ position: 'relative', left: '100px', top: '30px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100" style={{position:"relative", top:'30px'}}>
              <div className="column mt-5">
                <img src={img} alt="error" style={{ position: 'relative', top: '-150px', height: '670px', right: '0px' }} />
              </div>
              <div className="column pt-4 mt-0" style={{position:'relative', left:'200px'}}>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', lineHeight: '1.2' }}>Es necesario brindar una protección dental a los más pequeños del hogar<br/>para evitar el desarrollo de enfermedades; con la Pasta Dental Colgate<br/>sin flúor podrás cepillar sus primeros y pequeños dientes desde los 6<br/>hasta los 24 meses de edad.<br/><br/>Su fórmula es libre de flúor por lo que podrás utilizarla con confianza y<br/>sin preocuparte por ocasionarle algún problema si llega a comerla por<br/>accidente.<br/><br/>Además, tiene un suave y delicioso sabor a fruta para que tu hijo la<br/>disfrute, está libre de conservadores y colorantes artificiales. Has de esta<br/>actividad una tarea fácil de realizar, su presentación de 50 gr (40 ml) es<br/>ideal para que la lleves siempre en tu pañalera.<br/><br/>Recomendado para niños de 0 a 2 años.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadodelosmaspequescepillos" screenPrev="cuidadodelosmaspequesmenu" currentScreen="Cuidadochicos" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}