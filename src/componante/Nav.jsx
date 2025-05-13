import '../componante/nav.css';
import image from '../assets/favicon.ico';

function Nav() {
  return (
    <div className="navbar">
  <div className="icon">
    <h2 className="logo" style={{backgroundImage:{image}}}>Green Land</h2>
  </div>
  <div className="menu">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Testimonials</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
  <div className="searchbar">
    <input type="search" className="srch" placeholder="Type to Search" />
    <a href="">
      <button className="btn">Search</button>
    </a>
  </div>
</div>

  );
}   
export default Nav;