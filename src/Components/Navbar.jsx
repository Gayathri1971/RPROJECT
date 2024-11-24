
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img src="https://lms.achieversit.com/assets/images/logo.png" alt="logo" />
          <div class="navbar justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home"><Link className='nav-link active' to='/productData'>Home</Link></a>
              </li>
              <li class="nav-item" aria-current="page">
                <a class="nav-link active" href="/shop"><Link className='nav-link active' to='shop'>Shop</Link></a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="/cart"><Link className='nav-link active' to='cart'>Cart</Link></a>
              </li>
              <li class="nav-item mt-2 me-2 ms-2">
                <Link className='nav-link active' to='/'><i class="fa-solid fa-user fa-lg "></i></Link>
              </li>
            </ul>
            < form class="d-flex me-3 me-5 ms-2" >

            <Link className="nav-link" to="/cart">
  <i className="fa-solid fa-cart-shopping fa-lg position-relative">
    <span className="badge-cart">0</span> {/* Replace 3 with dynamic item count */}
  </i>
</Link>
     
               </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
