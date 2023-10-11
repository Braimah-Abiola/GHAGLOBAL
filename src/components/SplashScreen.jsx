import { useEffect, useState } from 'react';
import { logoWhite } from '../assets';
import { useLocation } from 'react-router-dom';


const SplashScreen = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true
    )
    // Simulate a delay to showcase the splash screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return (
      <div className="splash_screen">
        <img className='logo' src={logoWhite} alt="Logo" />
      </div>
    );
  }
  return null;
};

export default SplashScreen;