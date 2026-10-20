import { HousePlus, MailBadge, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom';
import React from 'react'
import './Footer.css';
import { FaFacebookF,FaInstagram,FaLinkedin,FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>

    <div className="footer1container">

        <div className="footer1">
          <div className='footer1me1'>  <HousePlus color='white' size={35} className='footer1i' strokeWidth={1.4} /> <h1 className='footer1h1'>LUXORA</h1></div>
          <p className='footer1p'>better desecion better futuer</p>
        </div>

        <div className="footer2">
          <p className='footer2p1'>Quick Links</p>
          <Link to={'/'} className='link'> <p className='footer2p2'>Home</p> </Link>
          <Link to={'/about'} className='link'> <p className='footer2p2'>About</p></Link>
          <Link to={'/contact'} className='link'> <p className='footer2p2'>Contact</p></Link>
        </div>
        <div className="footer3">

          <p className='footer3p1'>Contact Us</p>

          <div className="footer3b1">
            <Phone className='footer3b1i' color='white' size={15} />
           <p className='footer3b1p'>+917878469215</p>
             </div>

             <div className="footer3b2">
              <MailBadge className='footer3b2i' color='white' size={15}/>
              <p className='footer3b2p'>helpdesk.luxora.com</p>
             </div>

             <div className="footer3b3">
              <MapPin color='white' size={15} />
              <p className='f3b3p'>Jaipur, Rajasthan, India</p>
             </div>

             <div className="footer3b4">
          <a href="https://www.facebook.com/">   <FaFacebookF color='white' size={16} /> </a> 
           <a href="https://www.instagram.com/?hl=en"> <FaInstagram  color='white' size={16} /></a>  
              <FaLinkedin  color='white' size={16} />
              <FaGithub  color='white' size={16} />
             </div>
        </div>
      
      </div>

      <div className="footer2cont">
<div className="f2c2">
  <p className='f2c2p'>All rights reserved</p>
  <p className='f2c2p'>Privecy Policy | Terms & Condition</p>
</div>
      </div>
    </>
  )
}

export default Footer
