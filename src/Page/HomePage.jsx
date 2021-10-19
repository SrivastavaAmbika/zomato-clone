import React,{useState} from 'react'
import Footer from '../component/samecontent/Footer';
import Header from '../component/samecontent/Header';
import Section from '../component/samecontent/Section';
import '..//../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Delivery from '../component/Delivery';
import DiningOut from '../component/DiningOut';
import NightLife from '../component/NightLife';

const HomePage = () => {
    const [activeTab,setActiveTab] = useState("Delivery");
    return (
        <>
           <Header />
           <Section activeTab={activeTab} setActiveTab={setActiveTab}/>
{/* tab switch  function*/}
{getTabScreen(activeTab)}

           <Footer />
        </>
    )
}
const getTabScreen=(section)=>{
switch(section){
    case"Delivery":
    return<><Delivery /> </>;

    case"Dining Out":
return <DiningOut /> ;
case"NightLife":
return <NightLife  />;
default:
    return<Delivery />
}

}
export default HomePage
