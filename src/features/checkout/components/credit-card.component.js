import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input-plus";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCardInput = ({ name }) => {
  const onChange = async (formData) => {
    const { values, valid } = formData;
    console.log(formData);
    const expiry = values.expiry.split("/");
    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: name,
    };
    const token = await cardTokenRequest(card);
    console.log(token);
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
