import "../styles/Footer.css";
import footerImg from "../media/logoFooter.png";

function Footer() {
    return (
      <div >
        <div className="footerContainer">
          <div className="footerImg"><img src={footerImg} /></div>
          <div className="footerText">
            Potenciando tu mundo...
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;