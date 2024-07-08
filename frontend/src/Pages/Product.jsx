import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
    
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();//we have used useparams to get the product id in URL
    const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
       <Breadcrum product={product}/> 
       <ProductDisplay product ={product} />
       <DescriptionBox />
       <RelatedProducts/>
    </div>
  )
}
/*Click on Product:

You click on a product link that includes the product ID in the URL, e.g., /product/123.
Route Matching:

The route configuration matches this URL to the Product component.
Extracting Product ID:

The useParams hook extracts the productId from the URL.
Finding the Product:

The Product component uses the extracted productId to find the corresponding product in the all_product array.*/