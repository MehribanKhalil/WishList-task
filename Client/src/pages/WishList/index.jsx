import React from 'react'
import PagesHeader from '../../components/PagesHeader'
import FavItemsCard from '../../components/FavItemsCard'
import { useWishListContext } from '../../Context/WishlistContext'
import './index.scss'
import { NavLink } from 'react-router-dom'
const WishListPage = () => {
  const { favItems } = useWishListContext()
  return (
    <div>
      <PagesHeader pageTitle="Wishlist" />

      <div className='wishlist_content container my-3'>
        <div className='row'>
          <h5 className='col-lg-7'>Product</h5>
          <h5 className='col-lg-2'>	Price	</h5>
          <h5 className='col-lg-2'>Stock Status</h5>
          <h5 className='col-lg-1'>Remove</h5>
        </div>

        {
          favItems.map((favItem) => (
            <FavItemsCard
              key={favItem.id}
              img={favItem.img}
              name={favItem.name}
              price={favItem.price}
              isInStock={favItem.isInStock}
              item={favItem}
            />
          ))
        }

        <div className=" d-flex justify-content-end py-2">
          <p><NavLink to={'/shop'}>continue to shopping</NavLink></p>
        </div>

      </div>



    </div>
  )
}

export default WishListPage