import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../../assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const CartItems = () => {
  const {all_product, cartItems, removeFromCart, getTotlaCartAmount} = useContext(ShopContext)
  return (
    <div className='cart-items'>
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_product.map((e, i)=>{
          if(cartItems[e.id] > 0){
            return <>
              <div key={i} className="cartitems-format cart-items-format-main">
                <img src={e.image} alt="" className='cart-icon-product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cart-items-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className='cart-items-remove-icon' src={remove_icon} onClick={() => removeFromCart(e.id)} alt="" />
              </div>
              <hr />
            </>
          }
          return null;
        })}
        <div className="cart-items-down">
          <div className="cart-items-total">
            <h1>cart Totals</h1>
            <div>
              <div className="cart-items-total-item">
                <p>Subtotal</p>
                <p>${getTotlaCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-items-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cart-items-total-item">
                <h3>Total</h3>
                <h3>${getTotlaCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-items-promocode">
            <p>If you have a promo code, enter it here</p>
            <div className="cart-items-promobox">
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems