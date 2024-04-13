import { useEffect, useState, createContext, useMemo, useContext } from "react";
import { asyncRestaurantRequest } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const restaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retireveRestaurants = async (loc) => {
    try {
      setIsLoading(true);
      setRestaurants([]);
      const response = await asyncRestaurantRequest(loc);
      setTimeout(() => {
        setRestaurants(response);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retireveRestaurants(locationString);
    }
  }, [location]);
  return (
    <restaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </restaurantsContext.Provider>
  );
};
