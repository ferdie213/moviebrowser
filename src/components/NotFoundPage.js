import Hero from "./Hero";

const NotFoundPage = () => {
    return(
      <div>
      <Hero text="Go back to Home" />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="Lead">
                <h1> 404 Not found; <a href="/" class="btn-primary">Go back to Home</a></h1>
            </p>
          </div>
        </div>
      </div>
    </div>
    )
 }


export default NotFoundPage;