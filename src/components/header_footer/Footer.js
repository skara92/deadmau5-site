import React from 'react';
import {Fade} from 'react-awesome-reveal';

const Footer = () => {
    return (
       <footer className="bck_red">
           <Fade triggerOnce delay={500}>
               <div>
                     <div className="font_righteous footer_logo_venue">The Mau5</div>
                     <div className="footer_copyright">The venue 2021</div>
               </div>
           </Fade>
       </footer>
    )
}
export default Footer;