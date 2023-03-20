import React from 'react'
import NavCard from './NavCard.js'
import '../styles/NavOptions.css'
const NavOptions = ({miPhones, redmiPhones,tv,laptop,home,lifeStyle,audio,accessories}) => {
  return (
    <div className="navOptions">
      {
        miPhones && miPhones.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        
        )
      )}

      {
        redmiPhones && redmiPhones.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        
        )
      )}

      {
        tv && tv.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        
        )
      )}

      {
        laptop && laptop.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        
        )
      )}

      {
        home && home.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        
        )
      )}

      {
        lifeStyle && lifeStyle.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        
        )
      )}

      {
        audio && audio.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        
        )
      )}

      {
        accessories && accessories.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        
        )
      )}
    </div>
  )
}

export default NavOptions