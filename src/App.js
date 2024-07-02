import React from 'react'; // Import React library
import './App.css'; // Import CSS file for styling
import { PriceCard } from './PriceCard';  // Import PriceCard component

function App() {
  // js starts, 
  //price-list items and features of each item (eg:free, plus, pro, platinum)
   const price_list = [
    {
      plan: "FREE", //Plan name
      price: 0, //Price for the plan
      features: [  //Features of the plan
        { feature: "Single User", isEnabled: true },
        { feature: "50 GB Storage", isEnabled: true },
        { feature: "Unlimited Public Projects", isEnabled: true },
        { feature: "Community Access", isEnabled: true },
        { feature: "Unlimited Private Projects", isEnabled: false },
        { feature: "Dedicated Phone Support", isEnabled: false },
        { feature: "Free Subdomain", isEnabled: false },
        { feature: "Monthly Status Reports", isEnabled: false },
      ]
    },
    {
      plan: "PLUS", //Plan name
      price: 9,  //Price for the plan
      features: [ //Features of the plan
        { feature: "5 Users", isEnabled: true },
        { feature: "50 GB Storage", isEnabled: true },
        { feature: "Unlimited Public Projects", isEnabled: true },
        { feature: "Community Access", isEnabled: true },
        { feature: "Unlimited Private Projects", isEnabled: true },
        { feature: "Dedicated Phone Support", isEnabled: true },
        { feature: "Free Subdomain", isEnabled: true },
        { feature: "Monthly Status Reports", isEnabled: false },
      ]
    },
    {
      plan: "PRO",
      price: 49,
      features: [
        { feature: "Unlimited Users", isEnabled: true },
        { feature: "150 GB Storage", isEnabled: true },
        { feature: "Unlimited Public Projects", isEnabled: true },
        { feature: "Community Access", isEnabled: true },
        { feature: "Unlimited Private Projects", isEnabled: true },
        { feature: "Dedicated Phone Support", isEnabled: true },
        { feature: "Free Subdomains", isEnabled: true },
        { feature: "Monthly Status Reports", isEnabled: true },
      ]
    }
  ];

  return (
    // <div className="App">
    <>

       <section className="price p-5">
       <div className='title text-center'><h1>React Price Card</h1></div>
        <div className="container">
          <div className="row">
            {
              
              price_list.map((item,index) => (
                <PriceCard  
                key={index} // Unique key for each PriceCard
                plan={item.plan} // Plan name
                price={item.price} // Plan price
                features={item.features}/> // Plan features
              ))}
         </div>
        </div>
      </section>
    </>
  );
}

export default App; // Export the App component as the default export
