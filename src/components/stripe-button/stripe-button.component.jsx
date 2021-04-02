import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IT8SfEVAkSm6luk7CTyDqrPCYPYIc80x0cHm7mjG016WUMWZBoR0rvis4CHiV9FMioOvoZ179VKD6MDF591cPaQ00Jgj7yzFL";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      allowRememberMe={true}
    />
  );
};

export default StripeCheckoutButton;
