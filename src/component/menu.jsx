import React, { useEffect, useState } from 'react';
import './menu.css';
import menuData from './data';

const Menu = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
let q=menuData;
  useEffect(() => {
    setData(menuData);
 
  }, []);

const Fbreackfast=()=>{
 
  
  
const breakfast=q.filter(item=>item.category==='breakfast')
setData(breakfast)
setSelectedCategory('breakfast')
}
const FLunch=()=>{ 
const lunch=q.filter(item=>item.category==='lunch')
setData(lunch)
setSelectedCategory('lunch')
}
const Fshakes=()=>{
const shakes=q.filter(item=>item.category==='shakes')
setData(shakes)
setSelectedCategory('shake')
}

const Fall=()=>{
const all=q
setData(all)
setSelectedCategory('all')
}




  return (
    <>
      <div className='main'>
        <div className="title">Our Menu</div>
        <div className="nav-bar">
 <div onClick={Fall} className={`nav-component ${selectedCategory === 'all' ? 'selected' : ''}`}>All</div>
            <div onClick={Fbreackfast} className={`nav-component ${selectedCategory === 'breakfast' ? 'selected' : ''}`}>Breakfast</div>
         <div onClick={FLunch} className={`nav-component ${selectedCategory === 'lunch' ? 'selected' : ''}`}>Lunch</div>
        <div onClick={Fshakes} className={`nav-component ${selectedCategory === 'shakes' ? 'selected' : ''}`}>Shakes </div>
        </div>
        <div className="menu">
         
            <div className="boxs">
               {data.map((menuItem) => (
              <div className='box' key={menuItem.id}>
                <div className="image"><img src={menuItem.img} alt={menuItem.title} /></div>
                <div className='text'>
                  <div className="title-price">
                    <div className="title-box">{menuItem.title}</div>
                    <div className="price">${menuItem.price}</div>
                  </div>
                  <div className="txt">{menuItem.desc}</div>
                </div>
              </div>
               ))}
            </div>
         
        </div>
      </div>
    </>
  );
}

export default Menu;
