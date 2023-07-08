import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './components/Features';
import Pricing from './Pricing';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <Box>
    <Navbar/>
    <Hero/>

    <Features/>
    <Pricing/>
    <Footer/>
   
    </Box>
  );
}

export default App;
