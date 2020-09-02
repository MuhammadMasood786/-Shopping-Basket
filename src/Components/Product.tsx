import React from 'react';
import './Style.css';
import { productType } from '../Redux-ToolKit/Shoes'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { add } from '../Redux-ToolKit/CounterSlice';


function Product() {

  const products = useSelector((state: productType[]) => state)
  const dispatch = useDispatch()

  const product = products.map((prod, ind) => {
    console.log(ind)
    return (
      <div className="card col-lg-4  my-3  col-sm-12 col-md-6"   key={ind}>
        <img className="card-img-top" width="100%"  height="400px" src={prod.img} alt={ind.toString()} />
        <div className="card-body">
          <h5 className="card-title">{prod.name}</h5>
          <div className="beside">
            <p className="card-text"><strong>${prod.price}</strong></p>
            <p></p>
            <p>
              <Link to={`product/${prod.name}`}>
                <i className="fa fa-paper-plane justify-content-center" aria-hidden="true"></i>
              </Link>
              <i className="fa fa-plus-circle" aria-hidden="true" onClick={()=>dispatch(add(prod))}></i>
            </p>
          </div>

        </div>
      </div>
    )
  })
  console.log(Object.keys(products))
  return (
    <div className="container">
      <div className="row mt-5  justify-content-center">
        {product}
      </div>
    </div>
  );
}

export default Product;



