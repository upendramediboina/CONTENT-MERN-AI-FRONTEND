import axios from "axios";

//======= Free Subscription =====

export const handleFreeSubscriptionAPI = async () => {
  const response = await axios.post(
    "https://content-mern-ai-backend.onrender.com/api/v1/stripe/free-plan",
    {},
    {
      withCredentials: true,
    }
  );

  return response?.data;
};

//======= Stripe Payment Intent =====

export const createStripePaymentIntentAPI = async (payment) => {
  console.log(payment);

  const response = await axios.post(
    "https://content-mern-ai-backend.onrender.com/api/v1/stripe/checkout",
    {
      amount: Number(payment?.amount),
      subscriptionPlan: payment?.plan,
    },
    {
      withCredentials: true,
    }
  );

  return response?.data;
};

//======= Verify Payment =====

export const verifyPaymentAPI = async (paymentId) => {
  const response = await axios.post(
    `https://content-mern-ai-backend.onrender.com/api/v1/stripe/verify-payment/${paymentId}`,
    {},
    {
      withCredentials: true,
    }
  );

  return response?.data;
};