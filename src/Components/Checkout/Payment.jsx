import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import Axios from "axios";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [userData, setUserData] = useState(undefined);
  const { currentUser } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    currentUser &&
      Axios.get(
        `https://gptlearn-api.onrender.com/users/email/${currentUser.email}`
      )
        .then((response) => {
          setUserData(response.data[0]);
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
  }, [currentUser]);

  useEffect(() => {
    fetch("https://gptlearn-api.onrender.com/stripe/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(
      `https://gptlearn-api.onrender.com/stripe/create-payment-intent/${currentUser.email}`,
      {
        method: "POST",
        body: JSON.stringify({}),
      }
    ).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "white" }}>
        {userData &&
          userData.subscription > 1 &&
          "You are already subscribed 🎉"}
      </h1>
      {clientSecret && stripePromise && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret, theme: "night" }}
        >
          <CheckoutForm userData={userData} />
        </Elements>
      )}
      <span className="paymentFromReturn" onClick={() => nav("/courses")}>
        <a className="paymentFormArrow">←</a> Go Back
      </span>
    </div>
  );
}

export default Payment;
