import React, { useState } from 'react';
import './App.css';

function App() {
    const [page, setPage] = useState('home');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // Determines if user is on login or sign up form

    const renderPage = () => {
        switch (page) {
            case 'meal':
                return <div className="page">Meal Page</div>;
            case 'about':
                return <div className="page">About Page</div>;
            case 'program':
                return <div className="page">Program Page</div>;
            case 'blog':
                return <div className="page">Blog Page</div>;
            case 'login':
                return (
                    <div className="page">
                        <section className="login-section">
                            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                            <div className="auth-tabs">
                                <button onClick={() => setIsLogin(true)}>Login</button>
                                <button onClick={() => setIsLogin(false)}>Sign Up</button>
                            </div>

                            <form onSubmit={handleFormSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        required 
                                    />
                                </div>
                                {!isLogin && (
                                    <div>
                                        <label htmlFor="confirm-password">Confirm Password</label>
                                        <input 
                                            type="password" 
                                            id="confirm-password" 
                                            required 
                                        />
                                    </div>
                                )}
                                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                            </form>
                        </section>
                    </div>
                );
            default:
                return (
                    <div>
                        <section className="hero">
                        <div className="hero" style={{ backgroundImage: "url('\hero.jpeg')" }}
                        >  
        
      </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Challenge Yourself, Change Your Lifestyle</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700">
        At ToneUP, we believe in empowering you to achieve your best self. Whether you’re looking to tone, build strength, or enhance your overall health, our diverse range of fitness programs has something for everyone. From high-intensity workouts to relaxing yoga sessions, our expert trainers guide you every step of the way.
Join our vibrant fitness commnity and experience personalized training that fits your goals, lifestyle, and pace. It's time to break limits, transform your body, and most importantly, feel confident and strong in your own skin.
ToneUP – Where Strength Meets Balance. </p>
      </section>    
                        <b></b>
                        <div className="stats">
                            <div className="stat-item">
                                <h2>56,733+</h2>
                                <p>ХҮН НЭГДСЭН БАЙНА</p>
                            </div>
                            <div className="stat-item">
                                <h2>1,411+</h2>
                                <p>ТӨРЛИЙН ФИТНЕС, СПОРТЫН ҮЙЛЧИЛГЭЭ</p>
                            </div>
                            <div className="stat-item">
                                <h2>100+</h2>
                                <p>ФИТНЕС ТӨВ БОЛОН КЛУБ</p>
                            </div>
                        </div>
                        <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">OUR LOCATION</h2>
        
      </section> 
                        <section className="map">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23813.24851324259!2d106.8832405!3d47.9170219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96923b1b1b1b!2sUlaanbaatar!5e0!3m2!1sen!2smn!4v1711234567890" 
                                width="100%" 
                                height="300" 
                                style={{ border: 10 }} 
                                allowFullScreen="" 
                                loading="lazy"
                            ></iframe>
                        </section>
                    </div>
                );
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Handle login logic here
            if (email === 'user@example.com' && password === 'password123') {
                alert('Login successful!');
                setPage('home');
            } else {
                alert('Invalid email or password');
            }
        } else {
            // Handle sign-up logic here
            alert('Sign-up successful!');
            setPage('home');
        }
    };

    return (
        <div>
            <header className="header">
                <div className="logo"><strong>ToneUP</strong></div>
                <nav className="nav">
                    <button onClick={() => setPage('home')}>Home</button>
                    <button onClick={() => setPage('meal')}>Meal</button>
                    <button onClick={() => setPage('about')}>About</button>
                    <button onClick={() => setPage('program')}>Program</button>
                    <button onClick={() => setPage('blog')}>Blog</button>
                </nav>
                <div className="login"><button onClick={() => setPage('login')}>LOGIN</button></div>
            </header>
            {renderPage()}
            <footer className="footer">
            <a href="/phone.jpeg" target="_blank">
    <img src="/phone.jpeg" alt="Phone Logo" />
  </a>

  <a href="/facebook.jpeg" target="_blank">
    <img src="/facebook.jpeg" alt="Facebook Logo" />
  </a>
  <a href="/instagram.jpeg" target="_blank">
    <img src="/instagram.jpeg" alt="Instagram Logo" />
  </a>
<p>Contact us:
Email Address: toneup@gmail.com
Phone Number: +976 99229922</p>
            </footer>
        </div>
    );
}

export default App;
