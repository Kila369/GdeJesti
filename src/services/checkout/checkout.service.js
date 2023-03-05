import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51MhF2ZBYfTyGo0XGovWSfd04uhGyoEW0mmnSOZ2tUtEj37XNecIy5qKT3SMgXjcvkVRwepAUzWGsURlafm4yeH0c003p02mroy"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = async (token, amount, name) => {
  return fetch(`${host}/pay`, {
    method: "POST",
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
  }).then((res) => {
    console.log(res);
    if (res.status > 300) {
      return Promise.reject("Something went wrong processing your payment!");
    }
    return res.json();
  });
};
