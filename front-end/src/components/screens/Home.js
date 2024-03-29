import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import CardComp from '../CardComp'

function Home() {

  const [search, setSearch] = useState('');
  const [foodItem, setFoodItem] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5003/api/foodData", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    response = await response.json()
    //return response
    //console.log(response[0], response[1]);
    setFoodItem(response[0])
    setFoodCategory(response[1])
  }

  useEffect(() => {
    loadData()
    //const response = loadData()
    //setFoodItem[response[0]]
    //setFoodCategory[response[1]]
  },[])

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id='carousel'>

          <div className='carousel-caption' style={{ zIndex: 10 }}>
            <div className="d-flex justify-content-center">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
              {/*<button className="btn btn-outline-success text-white bg-success" type="submit" >Search</button>*/}
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900x700/?burger"
              style={{ filter: 'brightness(30%)' }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?pastry"
              style={{ filter: 'brightness(30%)' }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?samosa"
              style={{ filter: 'brightness(30%)' }}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>

      <div className='container m-3'>
        {
          foodCategory != []
          ? foodCategory.map((data, index) => {
            return(
              <div className='row mb-3'>
              <div 
                className='fs-3 m-3'
                key={index}>
                {data.CategoryName}
              </div>
              <hr />
              {
                foodItem != []
                ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                .map((filterItems,index) => {
                  return (
                    <div key={filterItems._id} className='col-12 col-md-4 col-lg-3'>
                      <CardComp foodItem = {filterItems}
                      //foodName = {filterItems.name}
                      options = {filterItems.options[0]}
                      //imgSrc = {filterItems.img}
                      />
                    </div>
                  )
                })
              
                : <div>No Such Data Found</div>
              }
              </div>
            )
          }) 
          : ""
        }
    
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home