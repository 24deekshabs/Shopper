import React from 'react'
import './Popular.css'
import {Item} from '../Item/Item'
import data_product from '../Assets/data'

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item)=>{
                return <Item key={item} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

//Parent Component (Popular): The Popular component maps over the data_product array. For each product, it creates an Item component, passing the product's properties as props.
//map Function: The map function iterates over each product in the data_product array. It calls the callback function for each product, passing the product object as the argument item.
//Item Component: For each product (item), an Item component is created with props corresponding to the product's properties (id, name, image, new_price, old_price).
//Child Component (Item): The Item component receives these props and uses them to render the product's details.