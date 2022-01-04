import React from "react";
import { CompactRestaurantInfo } from "../../restaurants/components/restaurantCompactView.component";


export const MapCallout = ({ restaurant }) => (
    <CompactRestaurantInfo isMap restaurant={restaurant} />
);
