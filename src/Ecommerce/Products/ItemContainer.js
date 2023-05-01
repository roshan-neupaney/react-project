import React from "react";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";
import SingleProductpage from "./SingleProductpage";

export default function ItemContainer(props) {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick=(itemID)=>{
    const item = data.find(item =>item.id ===itemID);
    setSelectedItem(item);
    console.log("hello")
    let title = item.title;
    console.log(title)
    return <SingleProductpage item={title} />
  }




  
  
  useEffect(() => {
    axios
    .get(props.url)
    .then((response) => {
      setData(response.data)

    })
    .catch((error) => {
      console.log(error);
    });
  },[props.url]);



  
  props.setarrayLength(data.length)
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((element) => {
            return (
              <div className="col-md-4 " key={element.id} onClick={()=>handleItemClick(element.id)}>
                <ItemCard
                  title={element.title}
                  price={element.price}
                  image={element.image}
                />
              </div>
            );
          })}
        </div>
      {/* {selectedItem && <SingleProductpage selectedItem={selectedItem} />} */}
      </div>
    </>
  );
}
