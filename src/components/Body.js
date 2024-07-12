import React from "react";
import { restaurants } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {restaurants.map((item) => {
          console.log("item", item);
          return <RestaurantCard key={item?.info?.id} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
