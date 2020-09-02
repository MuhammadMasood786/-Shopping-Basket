import React from 'react';
import './Style.css';
import slider from '../Images/Shoe.gif'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-6 col-lg-6 col-sm-12">
          <div className="center">
            <p className="text-secondary homeProduct">
              Forget The Price <br />  If You Love It. <br /> Buy it :)
           </p>
            <button type="button" className="btn btn-outline-dark"  onClick={()=>navigate('/product')} >Shop Now</button>
          </div>
        </div>
        <div className="col-md-6 col-6 col-sm-12 col-lg-6 imageCenter">
          <img src={slider} alt="shoe" className="mr-5" />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
