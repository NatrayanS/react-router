import React from 'react'

const Card = ({data}) => {
    const currentDate = new Date();

    return (
        <div className="col-lg-6 col-xl-4 col-md-6  mt-5 justfy-content-center">
        <div className="card h-100 m-2" >
            <img src={data.img} className="card-img-top" alt="..." />
            <div className="card-body ">
                <h4 className=''>
                    {
                        data.name
                    }
                </h4>
                <p className="card-text">
                    {
                        data.description
                    }

                </p>
            <a href="..." className='nav-link'>READ MORE</a>
            </div>
            <div className='card-footer py-3 px-4'>
                {
                    `${currentDate.getDate()} ${currentDate.toLocaleString('en-us', { month: 'long' })} ${currentDate.getFullYear()}`
                }
                <span>  No Comments</span>
            </div>
        </div></div>
    )
}

export default Card