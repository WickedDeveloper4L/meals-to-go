import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = async (searchTerm) => {
  try {
    const locationMock = await locations[searchTerm];

    if (!locationMock) {
      return "Not found!";
    }

    return locationMock;
  } catch (error) {
    console.log("Error");
  }
};

export const locationTransform = async (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];

  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
