import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Components/Usercontex'
import { useParams } from 'react-router-dom';
import './Propertydetailed.css';
import { Bath, Bed, BedDouble, CookingPot, LandPlot, MapPin, RotateCcwSquare, Shield } from 'lucide-react';

const Propertydetailed = () => {
  const { Properties1,addtocart } = useContext(DataContext);
  const p1 = Properties1;
  const { id } = useParams();
  const [product, setproduct] = useState();
  useEffect(() => {
    setproduct(p1.find((data) => data.id == id))
  }, [id])


  return (
    <>
      <div className="detailed-container">

        <div className="D1">
          <img src={product?.image} alt="" className='D1-I' />
          <p className='D1-P1'>Overview</p>
          <h2 className='D1-H'>About this property</h2>
          <p className='D1-P2'>Experience luxora living at its finest with this beautiful 4 BHK villa located
            in the prime area of Vaishali Nagar jaipur. this modern home offers spacious rooms,
            premium interious, and world-class amenities, making it the perfect choice for
            families looking for comfort and elegance.
          </p>

          <div className="nav">

            <div className="nav1">

              <div className="nav-i">
                <CookingPot color='orange' strokeWidth={1.6} />
              </div>

              <div className="nav1h">
                <p className='nav1-p1'>Modern Kitchen</p>
                <p className='nav1-p2'>Modular Kitchen with premium filling</p>
              </div>

            </div>

            <div className="nav1">

              <div className="nav-i">
                <BedDouble color='orange' strokeWidth={1.6} />
              </div>

              <div className="nav1h">
                <p className='nav1-p1'>Spacious living</p>
                <p className='nav1-p2'>large living area with natural light</p>
              </div>

            </div>

            <div className="nav1">

              <div className="nav-i">
                <Shield color='orange' strokeWidth={1.6} />
              </div>

              <div className="nav1h">
                <p className='nav1-p1'>24/7 Security</p>
                <p className='nav1-p2'>CCTV & gated community</p>
              </div>

            </div>




          </div>


        </div>

        <div className="D2">

          <div className="D2-price">
            <h1 className='price'>{product?.price}</h1>
            <button className='price-btn'>Negotiable</button>
          </div>
          <div className="location">
            <MapPin color='white' size={16} />
            <p className='location-p'>{product?.location}</p>
          </div>
          
          <div className="size">

            <div className="size1">
              <BedDouble  color='white' strokeWidth={1.2} size={27}/>
              <div className="size1-item">
                <p className='size1-p1'>4</p>
                <p className='size1-p2'>Bedrooms</p>
              </div>
            </div>

            <div className="size1">
              <Bath  color='white' strokeWidth={1.2} size={27}/>
              <div className="size1-item">
                <p className='size1-p1'>4</p>
                <p className='size1-p2'>Bathrooms</p>
              </div>
            </div>

            <div className="size1">
              < RotateCcwSquare color='white' strokeWidth={1.2} size={27}/>
              <div className="size1-item">
                <p className='size1-p1'>3,200</p>
                <p className='size1-p2'>Sq Ft</p>
              </div>
            </div>

                        
          </div>
          <button className='detailed-btn' onClick={() => addtocart(product)}>Add to cart</button>

       </div>
      </div>


    </>
  )
}

export default Propertydetailed
