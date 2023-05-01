import React from 'react'
import InfoBox from './Home/InfoBox'
import p1 from './images/p1.avif'


export default function About() {
  let storeDescription="At our online store, we believe that shopping should be a fun and easy experience for everyone. Our team is made up of passionate individuals who are dedicated to providing the best possible shopping experience for our customers. From our customer service representatives to our product buyers, we all share a common goal: to ensure that our customers are satisfied with every purchase they make from us. We are committed to providing our customers with the highest level of customer service, and our friendly, knowledgeable staff is always available to answer any questions you may have. We strive to make your shopping experience as enjoyable and hassle-free as possible, and we are constantly updating our product offerings to ensure that you always have access to the latest and greatest products on the market."

  // let storeImage= './images/p1.avif'

  return (
    <>
      <InfoBox greetingText={"About"} storeName={"Let's Shop"} buttonText={"Learn More"} storeDescription={storeDescription} storeImage={p1} />
    </>
  )
}
