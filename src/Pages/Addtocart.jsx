import React, { useContext } from 'react'
import { DataContext } from '../Components/Usercontex'
import './Addtocart.css';
import { MapPin, BedDouble, Bath, RotateCcwSquare } from 'lucide-react';

const Addtocart = () => {
  const { cart, setCart } = useContext(DataContext);

  return (
    <>
    <div className="large">
      {cart.map((p) => (
          <div className='addtocart-main' key={p.id}>

            <img src={p.image} alt={p.name} className='addtci' />
            <div>
              <button className='addtocart-btn'>Villa</button>
              <h3 className='addtocart-name'>{p.name}</h3>
              <div className='location-div'> <MapPin size={15} color='orange' strokeWidth={1} /> <p className='addtocart-location'>{p.location}</p> </div>
              <p className='addtocart-price'>{p.price}</p>

              <div className="size-addtocart">

                <div className="size1-addtocart">
                  <BedDouble color='white' strokeWidth={1.2} size={27} />
                  <div className="size1-adtc-item">
                    <p className='size1-adct-p1'>4</p>
                    <p className='size1-adct-p2'>Bedrooms</p>
                  </div>
                </div>

                <div className="size1-addtocart">
                  <Bath color='white' strokeWidth={1.2} size={27} />
                  <div className="size1-adct-item">
                    <p className='size1-adct-p1'>4</p>
                    <p className='size1-adct-p2'>Bathrooms</p>
                  </div>
                </div>

                <div className="size1-addtocart">
                  < RotateCcwSquare color='white' strokeWidth={1.2} size={27} />
                  <div className="size1-adct-item">
                    <p className='size1-adct-p1'>3,200</p>
                    <p className='size1-adct-p2'>Sq Ft</p>
                  </div>
                </div>



              </div>

            </div>
          </div>
        

      ))}
      </div>
    </>
  )
}

export default Addtocart
