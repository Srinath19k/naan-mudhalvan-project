import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './FooterC'
const SignUp = () => {
   const [title, setTitle] = useState("Select User")
   const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      phone: "",
      userType: ""
   })
   const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
   }

   const handleTitle = (select) => {
      setTitle(select)
      setUser({ ...user, userType: select });
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      const updatedUser = { ...user, userType: title };
      axios.post("http://localhost:8000/SignUp", updatedUser)
         .then((res) => {
            alert("record submitted")
            JSON.stringify(res.data.user)
         })
         .catch((err) => {
            console.log(err)
         })
      setUser({
         name: "",
         email: "",
         password: "",
         phone: "",
         userType: ""
      })
   }
   return (
      <>
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand>ComplaintCare </Navbar.Brand>
               <ul className="navbar-nav">
                  <li className="nav-item mb-2">
                     <Link to={'/'}
                        className={`nav-link text-light `}
                     >
                        Home
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link
                     to={'/signup'}
                        className={`nav-link text-light `}
                     >
                        SignUp
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link
                     to={'/login'}
                        className={`nav-link text-light `}
                     >
                        Login
                     </Link>
                  </li>
               </ul>
            </Container>
         </Navbar>
         <section className="gradient-custom">
            <div className="container">
               <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                     <div className="card bg-dark text-white">
                        <div className="card-body p-5 text-center">
                           <div className="mb-md-5 mt-md-4 pb-5">
                              <h2 className="fw-bold mb-4 ">SignUp For Registering the Complaint</h2>
                              <p className="text-white-50 mb-4"> <i>Please enter your Details</i></p>

                              <form onSubmit={handleSubmit}>
                                 <div className="form-outline form-white mb-4">
                                 <label className="form-label" htmlFor="name"> Full Name </label>
                                    <input type="name" placeholder='Enter your Full Name' name="name" value={user.name} onChange={handleChange} className="form-control form-control-lg" required />
                                    
                                 </div>
                                 <div className="form-outline form-white mb-4">
                                 <label className="form-label" htmlFor="email">Email</label>
                                    <input type="email" placeholder='Enter your Email ID' name="email" value={user.email} onChange={handleChange} className="form-control form-control-lg" required />
                                    
                                 </div>
                                 <div className="form-outline form-white mb-4">
                                 <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" placeholder='Enter your Password' name="password" value={user.password} onChange={handleChange} className="form-control form-control-lg" required />
                                    
                                 </div>
                                 <div className="form-outline form-white mb-4">
                                 <label className="form-label" htmlFor="mobile">Mobile Number</label>
                                    <input type="phone" placeholder='Enter your Mobile Number' name="phone" value={user.phone} onChange={handleChange} className="form-control form-control-lg" required />
                                    
                                 </div>
                                 <div className="form-outline form-white mb-4">
                                 <label className="form-label" htmlFor="mobile">Select User Type</label>
                                    <Dropdown>
                                       <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                          {title}
                                       </Dropdown.Toggle>

                                       <Dropdown.Menu>
                                          <Dropdown.Item onClick={() => handleTitle("Ordinary")}>Ordinary</Dropdown.Item>
                                          <Dropdown.Item onClick={() => handleTitle("Admin")}>Admin</Dropdown.Item>
                                          <Dropdown.Item onClick={() => handleTitle("Agent")}>Agent</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                    
                                 </div>
                                 <button className="btn btn-outline-light btn-lg px-5 mt-3" type="submit">Register</button>
                              </form>
                           </div>
                           <div>
                              <p className="mb-0" id='log'>Had an account?<Link to={"/Login"}>Login</Link></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Footer/>
      </>
   )
}

export default SignUp
