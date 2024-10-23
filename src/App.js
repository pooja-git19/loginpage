//import logo from './logo.svg';
import './App.css';
import logo from './logoo.png';
import bg from './login-img.jpg';
import cm from './communication.png';

function App() {
  return (
    <div>
    <div className="container">
        <div className="left-section">
            <h2>Manage your inventory easily</h2>
            <br />
            <div className="login-img">
            <img src={bg} alt="Inventory Illustration" />
        </div>
        </div>
        <div className="right-section">
            <div className="form-container">
                
                <img src={logo} alt="logo" className="logo-img" />
           
                <h2>Welcome !</h2>
                <form className="form">
                    <div className="login-email">
                    <label for="email">Email<span className="required">*</span></label>
                    <input type="email" id="email" name="email" required />
                    </div>
                    <div className="login-password">
                    <label for="password">Password<span className="required">*</span></label>
                    <input type="password" id="password" name="password" required />
                    <div className="forget-pass">
                        <a className="link" href ="url">Forgot Password?</a>
                    </div>
                </div>
                    
                </form>
                <button className="login" type="submit">Login Now</button>
                <div className="or-container">
                    <span>or login with</span>
                </div>

                <button className="google-login">
                    <img src={cm} alt="Google Logo" /> google
                </button>

                <p className="signup">Don't have an account? <a href="#">Signup</a></p>
            </div>
        </div>
    </div>

   
</div>
  );
};


export default App;
