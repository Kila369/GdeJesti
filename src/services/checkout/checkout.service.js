import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51MhF2ZBYfTyGo0XGovWSfd04uhGyoEW0mmnSOZ2tUtEj37XNecIy5qKT3SMgXjcvkVRwepAUzWGsURlafm4yeH0c003p02mroy"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
