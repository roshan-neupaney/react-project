import React from "react";
import InfoBox from "./Home/InfoBox";
import FeatureCards from "./Home/FeatureCards";
import Services from "./Home/Services";
import tech from "./images/tech.jfif"
export default function Home() {

  let storeDescription1 ="Welcome to our online store, where you can find a wide range of products to fit your every need. From clothing to electronics, home goods to beauty products, we have it all. Our online store is designed to provide you with a convenient shopping experience, with easy-to-use search and filter functions, secure payment options, and fast, reliable shipping. Whether you're looking for the latest fashion trends or the best deals on home appliances, we've got you covered."

  // let storeImage={tech}
  return (
    <>
      <div>
        <InfoBox greetingText={"Welcome to"} storeName={"Let's Shop"} buttonText={"Shop"} storeDescription={storeDescription1} storeImage={tech} />
        <FeatureCards />
        <Services />
        {/* <CompanyRefer/> */}
        </div>
    </>
  );
}
