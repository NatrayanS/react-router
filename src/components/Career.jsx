import React from 'react'
import Card from './Card';
import Bottom from './ContentNavbar';

const Career = ({data}) => {
  return (
    <>
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-12">
          <img 
            style={{width:'100%'}}
            className="responsive-image d-sm-none d-md-block"
            src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-2048x453.webp"
            alt=""
          />
        </div>
      <Bottom/>
      </div></div>

      <div className="container">
      <div className="row">
                {
                    data.map((item,index)=>{
                        if(item.id === 'Career') 
                            return <Card key={index} data={item} /> 

                        return null
                    })
                }
            </div>
    </div>
    
    
  </>
  )
}

export default Career