import React from 'react'
import { useWishListContext } from '../../Context/WishlistContext'
import './index.scss'
const FavItemsCard = ({img,name,price,isInStock,item}) => {
    const {removeFromWishList}=useWishListContext()
    return (
        <div className='favItems_card'>
            <div className='row align-items-center py-3'>
                <div className='col-12 col-lg-7  d-lg-flex align-items-center'>
                    <div>
                        <img src={img} alt="" width="100px" className='pe-3'/>
                    </div>
                    <div>
                        <p>{name}</p>
                    </div>
                </div>
                <div className='col-12  col-lg-2'>
                    <p>	${price}</p>
                </div>
                <div className=' col-12 col-lg-2'>
                    {isInStock ?
                    <p className="text-success">In stock</p>
                    :
                    <p className='text-danger'>	Out of stock</p>
                    }

                </div>
                <div className='remove_from_wish col-12  col-lg-1 '>
                        <button onClick={()=>removeFromWishList(item)}>X</button>
                    </div>
            </div>

           
        </div>
    )
}

export default FavItemsCard