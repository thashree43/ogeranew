export const Carosole = () => {
    return (
      <div>
        <div className="container text-center my-3">
          <div className="row mx-auto my-auto justify-content-center">
            <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="col-md-3">
                    <div className="card">
                      <div className="card-img">
                        
                    </div>
                      <div className="card-img-overlay">Slide 1</div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-3">
                    <div className="card">
                      <div className="card-img">
                      </div>
                      <div className="card-img-overlay">Slide 2</div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-3">
                    <div className="card">
                      <div className="card-img">
                      </div>
                      <div className="card-img-overlay">Slide 3</div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-3">
                    <div className="card">
                      <div className="card-img">
                      </div>
                      <div className="card-img-overlay">Slide 4</div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-3">
                    <div className="card">
                      <div className="card-img">
                        {/* Add Image if needed */}
                      </div>
                      <div className="card-img-overlay">Slide 5</div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-3">
                    <div className="card">
                      <div className="card-img">
                        {/* Add Image if needed */}
                      </div>
                      <div className="card-img-overlay">Slide 6</div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </div>      
        </div>
      </div>
    )
  }
  