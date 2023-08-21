import { Link } from "react-router-dom";
import { useState } from "react";

const MenuPage = () => {
  const [menu] = useState([
  {
    id: 1,
    image:"https://i.postimg.cc/GmFpNjK5/cake.jpg",
    title: "Cake",
    price: 7.99
  },
  {
    id: 2,
    image:"https://i.postimg.cc/G3TJY6vZ/Cheesecake.jpg",
    title: "Cheesecake",
    price: 9.50
  },
  {
    id: 3,
    image:"https://i.postimg.cc/hPpjGtfg/milk-tart.webp",
    title: "Milk-tart",
    price: 9.99
  },
  {
    id: 5,
    image:"https://i.postimg.cc/c1k24q02/choc-chip-cookies.webp",
    title: "Cookies",
    price: 3.99
  },
  {
    id: 6,
    image:"https://i.postimg.cc/0NrZ4jJN/muffin.jpg",
    title: "Muffins",
    price: 5.99
  },
]);

  return (
    <div className="Menu-page">


      <h1 className="page-heading">Menu</h1>


      <Link to="/"> 
        
        <img className="Link" src="https://i.postimg.cc/fLFt3T8V/icon.png"></img>
         
      </Link>
      

      {menu.map(item => 
        (<div key={item.id} className="menu-card">

        <img className="menu-images" src={item.image} /> 


        <h2 className="menu-title">{item.title}</h2>

        
        <p>${item.price}</p>


        </div>
      
      ))};


    </div>
  );
}

export default MenuPage;