import React from "react";
import { imgBaseUrl } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="restaurant-card" style={styleCard}>
      <div className="res-card-img-div">
        <img
          alt="res-img"
          id="res-img"
          className="res-img"
          src={imgBaseUrl + cloudinaryImageId}
        />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};
export default RestaurantCard;
