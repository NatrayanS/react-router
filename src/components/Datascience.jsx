import React from "react";
import Bottom from "./ContentNavbar";
import Card from './Card';


const Datascience = ({data}) => {
  return (
    <div className="container-fluid">
      <div className="row mx-lg-5 ">
        <div className="col-xl-12 heading mx-lg-5 ">
          <h1 className='my-4'>Data Science</h1>
          <p className='text-justified'>
            One of the most propelling careers on the planet today, Data Science
            is a vast arena of diverse technologies and techniques. Are you
            ready to step into the world of Data? Then you probably should not
            miss this corner of articles that is an assorted curation out of
            tedious research & exploration.
          </p>

          <p className='text-justified mt-4 mb-5'>
            The GUVI Blog’s Data Science category is here to help you steer
            through a lot of opinions that float on the internet. High-Quality
            content curated by experts!
          </p>
        </div>
      </div>
      <div className="row">
        <Bottom />

      </div>
      <div className="container">
      <div className="row">
                {
                    data.map((item,index)=>{
                        if(item.id === 'Data Science') 
                            return <Card key={index} data={item} /> 
                            return null; 
                          })
                }
            </div>
    </div></div>
  );
};

export default Datascience;