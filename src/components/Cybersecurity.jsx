import React from 'react'
import Bottom from './ContentNavbar';
import Card from './Card';
const Cybersecurity = ({data}) => {
    return (

    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-12">
          <img 
            style={{width:'100%'}}
            className="responsive-image d-sm-none d-md-block "
            src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-2048x453.webp"
            alt=""
          />
        </div>
      <Bottom/>
      </div>
      <div className="container">
      <div className="row">
                {
                    data.map((item, index) => {
                      if (item.id === 'Cyber security') 
                          return <Card key={index} data={item} />;
                      
                      return null;
                    })
                    
                }
            </div>
    </div>
    </div>


    )
}

export default Cybersecurity