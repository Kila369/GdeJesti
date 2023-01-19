import { mocks } from "./mock";
import camelize from "camelize";
export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isClosedTemporarily:
        restaurant.bussiness_status === "CLOSED_TEMPORERARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });
  //   const camelizedResult = camelize(results.length);
  return camelize(mappedResults);
};

// restaurantRequest()
//   .then(restaurantTransform)
//   .then((transformedResult) => {
//     console.log(transformedResult);
//   })
//   .catch((err) => {
//     console.log(err);
//   });