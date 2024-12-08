import Allproductpage from "./components/allproductpage";
import Bestofall from "./components/bestofall";
import Dontmiss from "./components/dontmiss";
import Essentials from "./components/essentials";
import Featured from "./components/featured";
import Footer from "./components/Footer";
import Footerhead from "./components/footerhead";
import Gearup from "./components/gearup";
import Header from "./components/header";
import Hero from "./components/hero";
import Productdetail from "./components/productdetail";
import Signinpage from "./components/signinpage";
import Signuppage from "./components/signuppage";
import TopHeader from "./components/Topheader";

export default function home(){
  return(
    <>
    {/* <Header/>
    <Hero/>
    <Bestofall/>
    <Featured/>
    <Gearup/>
    <Dontmiss/>
    <Essentials/>
    <Footerhead/> */}
    <Allproductpage/>
    </>
  )
}