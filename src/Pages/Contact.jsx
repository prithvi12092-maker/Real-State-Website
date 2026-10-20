import React from 'react'
import './Contact.css';
import nice from "../Images/nice.png.png"
import { Mail, MapPin, Phone } from 'lucide-react';


const Contact = () => {
  return (
    <>
       <div className='hero2' style={{ backgroundImage: `url(${nice})` }} >
      
              <div className="head2">
                <span className='h-sp'></span>
                <h1 className='Isth1'>Contact Us</h1>
                <p className='head2p'>we'd love to hear from you. Get in touch with our team for</p>
                <p className='head2p'>any question,inquiries, or assistance</p>
              </div>

            </div>

            <div className="contact">


              <div className="C1">
                <p className='C1-P'>Get in Touch</p>

                <div className="C1-B1">
                  <div className='phone'><Phone size={20} color='orange' strokeWidth={1.3}/></div>

                  <div className="C1-iteam">
                    <p className='c1-i-p1'>Phone</p>
                    <p className='c1-i-p2'>+917878469215</p>
                    <p className='c1-i-p3'>Mon-Sat,9:00 AM-6:00 PM</p>
                  </div>
                </div>

                 <div className="C1-B1">
                  <div className='phone'><Mail size={20} color='orange' strokeWidth={1.3}/></div>

                  <div className="C1-iteam">
                    <p className='c1-i-p1'>Mail</p>
                    <p className='c1-i-p2'>hello@luxora.com</p>
                    <p className='c1-i-p3'>Well reply within 24 hours</p>
                  </div>
                </div>

                 <div className="C1-B1">
                  <div className='phone'><MapPin size={20} color='orange' strokeWidth={1.3}/></div>

                  <div className="C1-iteam">
                    <p className='c1-i-p1'>Office Address</p>
                    <p className='c1-i-p2'>Vaishali Nagar, jaipur</p>
                    <p className='c1-i-p3'>Rajasthan, India-302021</p>
                  </div>
                </div>
                <div style={{backgroundImage: `url(${nice})`}} className='c1-img'>
                
                <i className='c1-img-p'>your Dream Home <br />
                 is just a Message Away</i>
                </div>
              </div>

<div className='C2-MAIN'>
              <div className="C2">
                <h2 className='c2-h'>Send Us a Message</h2>
                <p className='c2-p'>fill out the form below and well get back to you as soon as possible.</p>

                <div>
                  <input type="text" placeholder='Full name' className='c2-inp1'/>
                 <input type="text" placeholder='Email Address' className='c2-inp2' />
                 </div>
                 <input type="text" placeholder='Phone' className='c2-inp3' />
                 <input type="text" placeholder='Interested In' className='c2-inp4' />
                 <input type="text" placeholder='Your message' className='c2-inp5' />
              </div>
              </div>
            </div>
      
    </>
  )
}

export default Contact
