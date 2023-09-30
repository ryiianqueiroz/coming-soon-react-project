import './App.css';
import Logo from './images/logo.svg'
import BackgroundImage from './images/hero-desktop.jpg'
import BackgroundImageMobile from './images/hero-mobile.jpg'
import IconArrow from './images/icon-arrow.svg'

function App() {
  return (
    <div className="App">
      <div className="main-text">
        <div className="content">
          <div className="logo-image">
            <img src={Logo} alt="#" />
          </div>
          <h1><span className='were'>We're</span> coming soon</h1>
          <p>Hello fellow shoppers! We're currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.</p>
          <div className="email-content">
            <input type="email" className='email-input' placeholder='Email Address'/>
            <button><img src={IconArrow} alt="#" /></button>
          </div>  
        </div>  
      </div>

      <div className="bg-image">
        <img src={BackgroundImage} alt="#" className='bg-desktop'/>
        <img src={BackgroundImageMobile} alt="#" className='bg-mobile'/>
      </div>
    </div>
  );
}

export default App;
