function Login(){
    return(
        <div className="form">
  <h2>Login Here</h2>
  <input type="email" name="email" placeholder="Enter Your Email" />
  <input
    type="password"
    name="password"
    placeholder="Enter Your Password"
  />{" "}
  <br />
  <button className="lgn-btn">
    <a href="index.html">Login</a>
  </button>
  <p className="link">
    Don't have an Account <br />
    <a href="#">Sign Up </a>Here
  </p>
  <p className="liw">Login With</p>
  <div className="icons">
    <a href="#">
      <ion-icon name="logo-facebook" />
    </a>
    <a href="#">
      <ion-icon name="logo-instagram" />
    </a>
    <a href="#">
      <ion-icon name="logo-twitter" />
    </a>
    <a href="#">
      <ion-icon name="logo-linkedin" />
    </a>
  </div>
</div>

    )
}
export default Login