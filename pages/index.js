import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Skills from "../components/Skills/Skills";
import Testimonial from "../components/Testimonial/Testimonial";
import Work from "../components/Work/Work";

const Home = () => {
  return (
    	<div className="bg-primary-color ">   
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			{/* <Testimonial /> */}
			<Footer />
    	</div> 
  );
}

export default Home;