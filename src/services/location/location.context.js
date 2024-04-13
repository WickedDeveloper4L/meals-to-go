import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");

  const onSearch = async (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword.trim());
  };
  useEffect(() => {
    const firstSearch = async (keyword) => {
      try {
        if (!keyword.length) {
          return;
        }
        const locationMock = await locationRequest(keyword.toLowerCase());
        if (!locationMock) {
          return;
        }
        const transformedLocation = await locationTransform(locationMock);

        setIsLoading(false);
        setLocation(transformedLocation);
      } catch (err) {
        setIsLoading(false);
        setError(err);
        console.log(err);
      }
    };
    firstSearch(keyword);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
