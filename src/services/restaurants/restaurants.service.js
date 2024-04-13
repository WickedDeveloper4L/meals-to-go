import { mockImages, mocks } from "./mock";
import camelize from "camelize";
const restaurantsRequest = (location) => {
  const mock = mocks[location];
  if (!mock) {
    return;
  }
  return mock;
};

export const asyncRestaurantRequest = async (location) => {
  try {
    const result = await restaurantsRequest(location);
    const data = result.results;
    const mappedResults = data.map((restaurant) => {
      restaurant.photos = restaurant.photos.map((p) => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      });
      return {
        ...restaurant,
        address: restaurant.vicinity,
        isOpenNow:
          restaurant.opening_hours && restaurant.opening_hours.open_now,
        isClosedTemporarily:
          restaurant.besiness_status === "CLOSED_TEMPORARILY",
      };
    });
    return camelize(mappedResults);
  } catch (error) {
    console.log(error);
  }
};
