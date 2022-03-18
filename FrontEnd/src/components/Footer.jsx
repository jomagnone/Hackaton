import "../styles/Footer.css";
import footerImg from "../media/logoFooter.jpg";

function Footer() {
    return (
      <div >
        <div className="footerContainer">
          <div className="footerImg"><img src={footerImg} /></div>
        </div>
      </div>
    );
  }
  
  export default Footer;