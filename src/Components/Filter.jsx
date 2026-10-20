import React, { useContext,useRef } from 'react'
import './Filter.css'
import mainhouse from "../Images/mainhouse.png.jpg";
import { DataContext } from './Usercontex';
import nice from "../Images/nice.png.png"
import { Link } from 'react-router-dom';
import { Heart, BadgeCheck, ShieldCheck, Handshake, ShieldLock, MapPin } from 'lucide-react';
import UseHorizontalScroll from '../UseHorizontalScroll';
import Footer from './Footer';



const Filter = () => {
  const { Properties1, addtocart,Properties2 ,availavleCategory,selectedCategory, setselectedCategory,
    filteredProducts,search,setsearch
  } = useContext(DataContext);
  const prop1 = Properties1;
  const prop2 = Properties2;
  const sliderRef1 = UseHorizontalScroll();
  const sliderRef2 = UseHorizontalScroll();



  return (
    <>
   
    

      <div className='hero' style={{ backgroundImage: `url(${nice})` }} >

        <div className="head">
          <h1 className='Isth1'>Find Your</h1>
          <h1 className='IIndh1'>Dream Propirty</h1>
          <p className='headp'>Discover the best Propirty in Prime Location</p>
          <p className='headp'>Buy, Rent or invest- Your perfect home is Here</p>
          <div>{availavleCategory.map( (category) => (
            <button className='category-btn' onClick={() => setselectedCategory(category)}>{category}</button>
          ))}
          </div>
          <input type="text" placeholder='Search the Property Here' value={search} onChange={(e) => setsearch(e.target.value)} className='search'/>


          
        </div>
        

      </div>

      <div className="trust">
        <div className="t1"><BadgeCheck size={30} color='orange' strokeWidth={1.4} />
          <div className="t1b1">
            <p className='t1p1'>Verified Properties</p>
            <p className='t1p2'>100% verified</p>
          </div>
        </div>

        <div className="t1"> < ShieldCheck size={30} color='orange' strokeWidth={1.4} />
          <div className="t1b1">
            <p className='t1p1'> Best price Gurante</p>
            <p className='t1p2'> Get the Best des</p>
          </div>
        </div>

        <div className="t1"> <Handshake size={30} color='orange' strokeWidth={1.4} />
          <div className="t1b1">
            <p className='t1p1'>Expert Suport</p>
            <p className='t1p2'> 24/7 Customer Support</p>
          </div>
        </div>

        <div className="t1"><ShieldLock size={30} color='orange' strokeWidth={1.4} />
          <div className="t1b1">
            <p className='t1p1'>Secure Transaction</p>
            <p className='t1p2'>your safety our pirorty </p>
          </div>
        </div>
      </div>
      
<div className="info">
<h1 className='f1'>Featured Properties </h1>
<p className='f2'> view all properties</p>
</div>
      
      <div className="property-slider"  ref={sliderRef1} >
        {filteredProducts.map((i) => (
          <div >
            <div className='property-card'>
              <Link to={`/property/${i.id}`}> <img className='pcimg' src={i.image} alt="" key={i.id} draggable="false" /> </Link>

              <h3 className='pch3'>{i.name}</h3>
              <div className='pc-location'>
                <MapPin size={15} />
              <p className='pcp1'>{i.location}</p>
              </div>
              <div className='pc-price'>
              <p className='pcp2'>{i.price}</p>
              <Heart className='pch' onClick={() => addtocart(i)} />
                </div>
            </div>
          </div>
        ))}

      </div>
<div className="lox">
        <h1 className='info2h'>Popular Locations</h1>
        <p className='info2p'>Explore properties in top locations</p>
      </div>

      <div className="property-slider2" ref={sliderRef2} >
        {prop2.map((i) => (
          <div className='product-card2'>
            <img className='pcimg2' src={i.image} alt=""/>
            <p className='pc2p'>{i.location}</p>
          </div>
        ))}
      </div>

    


    </>
  )
}

export default Filter




