import React from 'react';
import imgnext from '../images/next-button.png';
import imgprev from '../images/prev-button.png';
import imgBotonIndex from '../images/Preguntas/Boton-inicio.png';
import imgBotonNext from '../images/Preguntas/boton-continuar.png';
import imgBoton from '../images/Boton.png';
import Submenu from './Submenu';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  changeScreen(screen, data) {
    screen = `/${screen}/`;
    console.log(screen);
    this.props.history.push({
      pathname: screen,
      state: data
    });
  }

  render() {
    const { screenNext, screenPrev, top, currentScreen, showsubmenu, otherOption, countResponses, showIndex, classForStyle, showButton } = this.props;
    let style = (otherOption == true) ? 'justify-content-center' : 'justify-content-between';
    return (
      <footer style={{position:'fixed',bottom:'0px',display:'flex',justifyContent:'center',width:'100%',left:'0px'}}>
        {!otherOption && <button type="button" className="bg-transparent border-0 btn-prev-top mr-5" onClick={() => this.changeScreen(screenPrev)}>
          <img src={imgprev} width="125" height="117" alt="Error" />
        </button>
        }
        {otherOption && <button type="button" className="bg-transparent border-0 position-relative" style={{left:'560px',top:'-50px'}} onClick={() => this.changeScreen(screenNext, countResponses)}>
          <img src={showIndex ? imgBotonIndex : imgBotonNext} width="115" height="115" alt="Error" />
        </button>}
        {showButton && <img src={imgBoton} alt="atrás" width="800" height="110" style={{ position: 'relative' }} />}
        {!showsubmenu && <div style={{width:'1200px',height:'50px'}}></div>}
        {showsubmenu && <Submenu currentScreen={currentScreen} />}
        {!otherOption && <button type="button" className="bg-transparent border-0 btn-next-top ml-5 position-relative" onClick={() => this.changeScreen(screenNext)}>
          <img src={imgnext} width="125" height="117" alt="siguiente" />
        </button>}
      </footer>
    );
  }
}