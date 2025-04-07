
import '../css/Header.css'
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoy } from "react-icons/io5";
import { CiUser } from "react-icons/ci";  
import { CiShoppingCart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { FaTv } from "react-icons/fa6";

export default function HeaderComponent() {
    return <div className='nav'>
     <div className='logo-img'><img src="https://media.ipoji.com/ipo/images/swiggy-logo.png"></img></div>
      <div className='list'>
       <ul>
        <li><a href="#">Other  &nbsp;&nbsp;&nbsp;<span>Sasaram,Jamuhar...</span></a><FaChevronDown /></li>
        
        <li>
          <div className='icon'>
          <div><FaTv /></div> &nbsp;
          <div><a href="#">Swiggy corporate</a></div>
          </div>
          </li>

          <li>
          <div className='icon'>
          <div><IoSearch /></div>&nbsp;
          <div><a href="#">Search</a></div>
          </div>
          </li>

          <li>
          <div className='icon'>
          <div><BiSolidOffer /></div>&nbsp;
          <div><a href="#">Offers</a></div>
          </div>
          </li>

        

          <li>
          <div className='icon'>
          <div><IoHelpBuoy /></div>&nbsp;
          <div><a href="#">Help</a></div>
          </div>
          </li>

          <li>
          <div className='icon'>
          <div><CiUser /></div>&nbsp;
          <div><a href="#">Profile</a></div>
          </div>
          </li>

          <li>
          <div className='icon'>
          <div><CiShoppingCart /></div>&nbsp;
          <div><a href="#">Cart</a></div>
          </div>
          </li>
   
        
       
       </ul>
       </div>
    </div>;
  }