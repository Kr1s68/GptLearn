import { PaymentElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import Axios from "axios";
import { useAuth } from "../../Contexts/AuthContext";

export default function CheckoutForm({ userData }) {
  const stripe = useStripe();
  const elements = useElements();
  const { currentUser } = useAuth();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [messageClass, setMessageClass] = useState("");
  function addDaysToTimestamp(timestamp, daysToAdd) {
    const date = new Date(timestamp);
    date.setDate(date.getDate() + daysToAdd);
    return date.getTime();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `https://gptlearn-api.onrender.com/completion`,
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
      setMessageClass("redMessage");
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("Payment status: " + paymentIntent.status + "🎉");
      setMessageClass("greenMessage");
      const timestamp = addDaysToTimestamp(Date.now(), 31);
      await Axios.post(
        `https://gptlearn-api.onrender.com/users/subscribe/${currentUser.email}`,
        { timestamp }
      ).then((response) => console.log(response));
    } else {
      setMessage("Payment status: " + paymentIntent.status);
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {message && (
        <div id="payment-message" className={messageClass}>
          {message}
        </div>
      )}
      <PaymentElement id="payment-element" />
      <button
        disabled={
          isProcessing ||
          !stripe ||
          !elements ||
          (userData && userData.subscription > 1)
        }
        id="submit"
        className="paymentButton"
      >
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
    </form>
  );
}
