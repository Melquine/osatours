import React from 'react'
import './Cart.css'

function Cart() {
  return (
    <form>
      <div className='cartcontainer'>
        <label className='cartcontainer__label'>Adult:</label>
        <input className='cartcontainer__input' type='text' placeholder='0' />
        <p className='cartcontainer__p cartcontainer__p--adult'>$35 per Adult</p>
        <label className='cartcontainer__label'>Children:</label>
        <input className='cartcontainer__input' type='text' placeholder='0' />
        <p className='cartcontainer__p cartcontainer__p--children'>$35 per Child</p>
      </div>

    </form>
  )
}

export default Cart