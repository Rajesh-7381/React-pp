import React from 'react'

function register() {
  return (
   <div>
  <section className="single-page-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Register</h2>
          <ol className="breadcrumb header-bradcrumb justify-content-center">
            <li className="breadcrumb-item"><a href className="text-white">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Registration Form</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <div className="container">
    <div className="form-container">
      <h2 style={{textAlign: 'center'}}>Student Registration Form</h2>
      <form action method="POST" onsubmit="return validateFORM()" id="registrationForm">
        
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name"><i className="fas fa-user" /> Student Name <span style={{color: 'red'}}>*</span></label>
              <input type="text" className="form-control " id="name" name="fullname" placeholder="Enter your name" onkeydown="return alphaOnly(event);" tabIndex={1} />
              <small className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="fatherName"><i className="fas fa-user" /> Father's Name<span style={{color: 'red'}}>*</span></label>
              <input type="text" className="form-control " id="fatherName" name="fatherName" placeholder="Enter your father's name" onkeydown="return alphaOnly(event);" tabIndex={3} />
              <small className="text-danger" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phone"><i className="fas fa-phone" /> Student Phone Number <span style={{color: 'red'}}>*</span></label>
              <input type="text" className="form-control " id="phone" name="phone" placeholder="Enter your phone number" onkeypress="return event.charCode >= 48 && event.charCode <= 57 && this.value.length < 10" tabIndex={2} />
              <small className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="fatherPhone"><i className="fas fa-phone" /> Father's Phone Number <span style={{color: 'red'}}>*</span></label>
              <input type="text" className="form-control " id="fatherPhone" name="fathernumber" placeholder="Enter father phone number" onkeypress="return event.charCode >= 48 && event.charCode <= 57 && this.value.length < 10" tabIndex={4} />
              <small className="text-danger" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="gender"> Gender <span style={{color: 'red'}}>*</span></label>
              <select className="form-control " id="gender" name="gender" tabIndex={5}>
                <option value>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <small className="text-danger" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email"><i className="fas fa-envelope" /> Email <span style={{color: 'red'}}>*</span></label>
              <input type="text" className="form-control " id="email" name="email" placeholder="example@gmail.com" tabIndex={6} />
              <small className="text-danger" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="school"><i className="fas fa-school" /> School Name <span style={{color: 'red'}}>*</span></label>
              <input type="text" className="form-control " id="school" name="school" placeholder="Enter your school name" onkeydown="return alphaOnly(event);" tabIndex={7} />
              <small className="text-danger" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="address"><i className="fas fa-map-marker-alt" /> Address <span style={{color: 'red'}}>*</span></label>
              <textarea className="form-control " id="address" name="address" rows={1} placeholder="Enter your address" tabIndex={8} defaultValue={""} />
              <small className="text-danger" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="board"><i className="fas fa-clipboard-list" /> Board <span style={{color: 'red'}}>*</span></label>
              <select className="form-control " id="board" name="board" tabIndex={9}>
                <option value>--Select--</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
              </select>
              <small className="text-danger" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="grade"><i className="fas fa-graduation-cap" /> Grade <span style={{color: 'red'}}>*</span></label>
              <select className="form-control " id="grade" name="grade" tabIndex={10}>
                <option value>--Select--</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
              <small className="text-danger" />
            </div>
          </div>
        </div>
        <button type="submit" name="submit" className="btn btn-primary btn-block swalDefaultSuccess" tabIndex={11}>Submit</button>
      </form>
    </div>
  </div>  
  <section className="about-shot-info section-sm">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mt-20">
          <h2 className="mb-3">Our Tutorial</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus
            dolor harum voluptatibus modi dicta ducimus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat
            cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, fugit itaque ratione incidunt voluptas.
            Quaerat quidem dolor, quisquam amet inventore quas adipisci ea sint qui placeat beatae molestias aut, aperiam!
          </p>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <img loading="lazy" className="img-fluid" src="./theme/images/company/company-image.jpg " alt />
        </div>
      </div>
    </div>
  </section>
  <section className="company-mission section-sm bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere in suscipit voluptatum totam dolores
            assumenda vel, quia earum voluptatem blanditiis vero accusantium saepe aliquid nulla nemo accusamus, culpa
            inventore! Culpa nemo aspernatur tenetur, at quam aliquid reprehenderit obcaecati dicta illum mollitia,
            perferendis hic, beatae voluptates? Ex labore, obcaecati harum nam.</p>
          <img loading="lazy" src="./theme/images/company/company-image-2.jpg" alt className="img-fluid mt-30" />
        </div>
        <div className="col-md-6 mt-5 mt-md-0">
          <h3>Our Vision</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere in suscipit voluptatum totam dolores
            assumenda vel, quia earum voluptatem blanditiis vero accusantium saepe aliquid nulla nemo accusamus, culpa
            inventore! Culpa nemo aspernatur tenetur, at quam aliquid reprehenderit obcaecati dicta illum mollitia,
            perferendis hic, beatae voluptates? Ex labore, obcaecati harum nam.</p>
          <img loading="lazy" src="theme/images/pexels-max-fischer-5212703.jpg" alt className="img-fluid mt-30" />
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default register
