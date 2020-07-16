import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Multibeneficios/EnciasSaludables/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Multibeneficios/EnciasSaludables/Imagen.png';
import Footer from '../../components/Footer'


export default class EnciasSaludables extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    //document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" width="500" style={{ position: 'relative', left: '30px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                 <img src={img} alt="error" style={{ position: 'relative', width:'900px', left: '-110px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="small text-muted text-normal top-30" style={{ position: 'relative' }}>Luce una sonrisa saludable y radiante utilizando diariamente la Crema Dental Colgate Total 12</p>
                <p className="small text-muted text-normal top-25" style={{ position: 'relative' }}>Encías Saludables, la cuál te brinda una salud bucal completa, reduciendo bacterias en dientes,</p>
                <p className="small text-muted text-normal top-20" style={{ position: 'relative' }}>lengua, mejillas y encías; ayudando a reducir la placa que causa problemas en las encías,</p>
                <p className="small text-muted text-normal top-20" style={{ position: 'relative' }}>fortaleciendo el esmalte y ayudando a aliviar la sensibilidad con el uso continuo.</p>
                <div className="mt-5" style={{ position: 'relative', top: '30px'}}>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', right: '-1px', }}>Con su cómoda presentación de 75 mililitros, transpórtala fácilmente y llévala al trabajo, escuela o</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', right: '-1px', }}>gimnasio y podrás realizar los tres cepillados al día que son necesarios para mantener tu salud</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-10px', right: '-1px', }}>dental, crea un régimen de limpieza con productos Colgate para obtener mejores resultados,</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-15px', right: '-20px', }}>incluyendo un cepillo, hilo y enjuague bucal que se acople a tus necesidades.</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="alientosaludable" screenPrev="multibeneficiosmenu" currentScreen="Multibeneficios" showsubmenu={true} history={this.props.history} top="105px" />
        </div>
      </div>
    );
  }
}