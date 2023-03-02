import camelize from "camelize";
import { host } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geoCode?city=${searchTerm}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const locationTransform = ({ results }) => {
  const formattedResponse = camelize(results);
  const { geometry = {} } = formattedResponse[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
