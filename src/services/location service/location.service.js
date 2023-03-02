import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://127.0.0.1:5001/hranazaponeti/us-central1/geoCode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = ({ results }) => {
  const formattedResponse = camelize(results);
  const { geometry = {} } = formattedResponse[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
