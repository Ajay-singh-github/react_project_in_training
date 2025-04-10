import '../css/Footer.css'
export default function Footer(){
    return <div className='footer-main-container'>
        <div className='footer-main-1'>
            <div><h3>For better experience,download the Swiggy app now</h3></div>
            <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"/></div>
            <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"/></div>
        </div>

        <div className='footer-main-2'>

           <div className='footer1'>
                <div className='footer1-small'>
                   <div><img src="https://media.ipoji.com/ipo/images/swiggy-logo.png"/></div>
                     <div><p>Swiggys</p></div>
                </div>
                <div><h3>© 2025 Swiggy Limited</h3></div>
            </div> 

           <div className='footer2'>
            <h4>Company</h4>
            <p>About us</p>
            <p>Swiggy Corporate</p>
            <p>Careers</p>
            <p>Team</p>
            <p>Swiggy one</p>
            <p>Swiggy Instamart</p>
            <p>Swiggy Dineout</p>
            <p> Swiggy Genui</p>
            </div> 

           <div className='footer3'>
            <div>
           <h4>Contact Us</h4>
            <p>Help and Support </p>
            <p>Partner with us</p>
            <p>Ride with us</p>
            </div>
            <div className='footer3-second'>
           <h4>Contact Us</h4>
            <p>Help and Support </p>
            <p>Partner with us</p>
            <p>Ride with us</p>
            </div>
            </div>

           <div className='footer4'>
           <h4>Available In</h4>
            <p>Punjab</p>
            <p>Delhi</p>
            <p>Hyderabad</p>
            <p>Mumbai</p>
            <p>Pune</p>
            <p>Ahemdabad</p>
            <select>
                <option>679 cities</option>
            </select>
            </div> 
           <div className='footer5'>
           <h4>Life at Swiggys</h4>
            <p>Explore with swiggys</p>
            <p>Swiggys news</p>
            <p>Snackable</p></div>  
           </div>            
    </div>
}