import Header from "../mastercomponents/Header";
import Slider from "./Slider";
import Welcome from "./Welcome";
import Training from "./Training"
import Clients from "./Clients"
import Professionals from "./Professionals"
import Appointment from "./Appointment"
import Footer from "../mastercomponents/Footer"

const Index = () =>
{
	return(
		    <>
            <Header />
     		<Slider/>
      		<Welcome />
     		<Training />
     		<Clients />
     		<Professionals />
     		<Appointment />
     		<Footer />
     		</>
 		)
	
}


export default Index