import React from 'react'
import Bottom from './ContentNavbar';
import Card from './Card';
import Guvi from './blog-header-2048x315.webp'
const All = ({data}) => {

    return (

    <div className="container-fluid">
        
      <div className="row">
        <img
            style={{width:'100%',boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.5)"}}
             className="responsive-image d-sm-none d-md-block"
             
              src={Guvi}
              alt=""
            />
        
      <Bottom/>
      
      </div>
      <div className="container ">
      <div className="row">
      {
                    data.map((item,index)=>{
                       
                            return <Card key={index} data={item} />
 
                    })
                }
      </div>
    </div>
    </div>


    )
}

export default All