import React from 'react'

export default function SingleProductpage(props) {
  console.log(props.item);

  return (
    <>
    <div className="singleProductPage">
      <div className="productTitleheader">
        <h4>
          Name
        </h4>
      </div>
      <div className="productBox">
        <div className="imagearea"></div>
        <div className="productDescription">
          
        </div>
      </div>
    </div>
    </>
  )
}
