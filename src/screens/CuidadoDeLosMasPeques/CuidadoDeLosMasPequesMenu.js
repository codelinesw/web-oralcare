import React from 'react';
import {
  Link,
} from 'react-router-dom';
import background_ from '../../images/Productos/Multibeneficios/Menu/Fondo.png';
import imgOne from '../../images/Productos/Cuidadodelosmaspeques/Menu/01.png';
import imgTwo from '../../images/Productos/Cuidadodelosmaspeques/Menu/02.png';
import imgThree from '../../images/Productos/Cuidadodelosmaspeques/Menu/03.png';
import imgFour from '../../images/Productos/Cuidadodelosmaspeques/Menu/04.png';
import imgFive from '../../images/Productos/Cuidadodelosmaspeques/Menu/05.png';
import imgSix from '../../images/Productos/Cuidadodelosmaspeques/Menu/06.png';
import ImgTouch from '../../images/toca-para-elegir.png'
import Header from '../../components/Header';
import Footer from '../../components/Footer'

export default class CuidadoDeLosMasPequesMenu extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
  }



  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="row w-100 m-auto mb-0 container-box" style={{ position: 'relative', top: '70px' }}>
            <div className="w-75 d-flex justify-content-between m-auto">
              <div className="column">
                <Link to="/cuidadodelosmaspequesligadelajusticia/"><img src={imgTwo} className="boxImage boxTopTwo" style={{ position: 'relative', top: '170px' }} /></Link>
              </div>
              <div className="column">
                <Link to="/cuidadodelosmaspequesbarbieminions/"><img src={imgOne} className="boxImage" style={{ position: 'relative', top: '40px',right:'0px' }} /></Link>
              </div>
              <div className="column">
                <Link to="/cuidadodelosmaspequesenjuague/"><img src={imgSix} className="boxImage" style={{ position: 'relative', top: '170px',right:'0px' }} /></Link>
              </div>
            </div>
            <div className="w-75 d-flex justify-content-center m-auto">
              <div className="column">
                <img src={ImgTouch} className="imgTouch_" style={{ position: 'relative', marginTop: '50px', top: '55px' }} />
              </div>
            </div>
            <div className="w-50 d-flex justify-content-between m-auto">
              <div className="column col-sm-7 mr-5 boxBottomTwo" style={{ position: 'relative' }}>
                <Link to="/cuidadodelosmaspequesmyfirst/"><img src={imgThree} className="boxImage" style={{ position: 'relative', top: '0px', right:'-50px' }} /></Link>
              </div>
              <div className="column col-sm-12 ml-5 boxBottomThree">
                <Link to="/cuidadodelosmaspequesmykids/"><img src={imgFour} className="boxImage" style={{ position: 'relative', top: '70px', right:'70px' }} /></Link>
              </div>
              <div className="column col-sm-12 ml-5 boxBottomThree">
                <Link to="/cuidadodelosmaspequescepillos/"><img src={imgFive} className="boxImage" style={{ position: 'relative', top: '0px', right:'480px' }} /></Link>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadodelosmaspequesbarbieminions" screenPrev="imagecarousel" history={this.props.history} top="147px" />
        </div>
      </div>
    );
  }
}