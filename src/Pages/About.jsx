import React from 'react'
import './About.css';
import { Home, MapPin, MapPinCheck, Minus, Shield, ShieldCheck, Sun, UserRoundGroup, Users } from 'lucide-react';
import nice from "../Images/nice.png.png"
import agent1 from "../Images/agent1.png.png";
import agent2 from "../Images/agent2.png";
import agent3 from "../Images/agent3.png";
import linterior from "../Images/linterior.png";
import { FcCustomerSupport } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <>

      <div className="containera">
        <div className="containera1">

          <p className='section-lable'><span className="gold-line"></span>
            OUR STORE</p>
          <h2 className='C-A-H1'>From a Vision to Reality</h2>
          <p>Luxora was founded with a simple vision - to redefine the real estate experience. What started as a small team
            with big dreams has growm into a trusted platform, helping thousands of people find their perfect
            property in jaipur and beyond.
          </p>
          <p>we combine technology, market expertise and a customer-first approach to make
            real estate easier, faster and more transparent for everyone.
          </p>

        </div>

        <div className="containera2" style={{ backgroundImage: `url(${linterior})` }}>

        </div>
        <div className="containera3">
          <div className="c-a3-d1">
            <Home strokeWidth={1.6} size={33} />
            <div>
              <h2 className='c-a3-h'>1,200+</h2>
              <p className='c-a3-p'>Properties Listed</p>
            </div>
          </div>

          <div className="c-a3-d1">
            <Users strokeWidth={1.6} size={33} />
            <div>
              <h2 className='c-a3-h'>800+</h2>
              <p className='c-a3-p'>Happy Clients</p>
            </div>
          </div>

          <div className="c-a3-d1">
            <ShieldCheck strokeWidth={1.6} size={33} />
            <div>
              <h2 className='c-a3-h'>4.8/5</h2>
              <p className='c-a3-p'>Clients Trusted</p>
            </div>
          </div>

          <div className="c-a3-d1">
            <MapPin strokeWidth={1.6} size={33} />
            <div>
              <h2 className='c-a3-h'>10+</h2>
              <p className='c-a3-p'>Clients Covered</p>
            </div>
          </div>

        </div>
      </div>

      <div className="value">

        <div className="V1">
          <p className='section-lable'><span className="gold-line"></span>
            OUR STORE</p>
          <h1 className='V1-H'>What Drives Us</h1>
          <p className='V1-P'>Our values shape every decision we make and every  home we help you find</p>

        </div>

        <div className="V2">
          <Shield color='ORANGE' size={30} strokeWidth={1.7} />
          <div><h3 className='V2-H'>Trust & Transparency</h3>
            <p className='V2-P'>Honest advice, clear process, no hidden charges</p>
          </div>
        </div>

        <div className="V2">
          <Sun color='ORANGE' size={30} strokeWidth={1.7} />
          <div><h3 className='V2-H'>innovation</h3>
            <p className='V2-P'>Using technology to create better experience</p>
          </div>
        </div>

        <div className="V2">
          <UserRoundGroup color='ORANGE' size={30} strokeWidth={1.7} />
          <div><h3 className='V2-H'>Customer First</h3>
            <p className='V2-P'>Your goals are our priority</p>
          </div>
        </div>
      </div>

      <div className="team">

        <div className="T1">
          <p className='section-lable'><span className="gold-line"></span>
            OUR STORE</p>
          <h2 className='T1-H'>Meet the People Behind Luxora</h2>
          <p className='T1-P1'>we are team of passionate real estate professionals,
            technology expert and customer support specialists
            who are dedicated to helping you find the right property
          </p>
        </div>

        <div className="T2">
          <img src={agent1} alt="" className='T2-I' />
          <p className='T2-P1'>Neha Verma</p>
          <p className='T2-P2'> Founder & CEO</p>
          <FaLinkedin className='T2-IC' />
        </div>

        <div className="T2">
          <img src={agent2} alt="" className='T2-I' />
          <p className='T2-P1'>Rohit Mehta</p>
          <p className='T2-P2'> Head of sales</p>
          <FaLinkedin className='T2-IC' />
        </div>


        <div className="T2">
          <img src={agent3} alt="" className='T2-I' />
          <p className='T2-P1'>Aarav Sharma</p>
          <p className='T2-P2'>Property Consultant</p>
          <FaLinkedin className='T2-IC' />
        </div>







      </div>



    </>
  )
}

export default About
