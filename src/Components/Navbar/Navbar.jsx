import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}>
          <Link style={{textDecoration:"none"}} to='/'>Shop {menu==="shop"?<hr/>:<></>}</Link>
        </li>
        <li onClick={()=>{setMenu("men")}}>
          <Link style={{textDecoration:"none"}} to='/men'>Men {menu==="men"?<hr/>:<></>}</Link>
        </li>
        <li onClick={()=>{setMenu("women")}}>
          <Link style={{textDecoration:"none"}} to='/women'>Women {menu==="women"?<hr/>:<></>}</Link>
        </li>
        <li onClick={()=>{setMenu("kids")}}>
          <Link style={{textDecoration:"none"}} to='/kids'>Kids {menu==="kids"?<hr/>:<></>}</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar