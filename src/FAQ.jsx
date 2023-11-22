import React from "react";
import { useNavigate } from "react-router-dom";

export default function FAQ() {
  const nav = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        paddingInline: "12%",
      }}
    >
      <h1>FAQs:</h1>
      <div
        style={{
          background: "rgba(0,0,0,0.4)",
          paddingInline: "6%",
          paddingBlock: "3%",
          borderRadius: "20px",
        }}
      >
        <ol>
          <li>
            <strong>How many courses are available on the platform?</strong>
            <ul>
              <li>
                We offer a diverse selection of 10 courses covering various
                programming languages and topics to cater to different skill
                levels and interests.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              What is the cost of a subscription, and what does it include?
            </strong>
            <ul>
              <li>
                The subscription to our platform is priced at $49.99 per month.
                With this, you gain access to all 10 courses, including any
                updates or additions during your subscription period.
              </li>
            </ul>
          </li>
          <li>
            <strong>Is the subscription automatically renewed?</strong>
            <ul>
              <li>
                No, we do not automatically renew subscriptions. Our company
                believes in giving users full control over their memberships.
                You will receive a notification when your subscription is about
                to expire, and it's up to you to decide whether to renew.
              </li>
            </ul>
          </li>
          <li>
            <strong>How can I cancel my subscription?</strong>
            <ul>
              <li>
                You can easily cancel your subscription by logging into your
                account and navigating to the settings. There, you'll find an
                option to manage your subscription, including cancellation.
              </li>
            </ul>
          </li>
          <li>
            <strong>What happens if I cancel my subscription?</strong>
            <ul>
              <li>
                If you choose to cancel your subscription, you will continue to
                have access to the platform until the end of your current
                billing cycle. After that, your access to courses and the AI
                assistant will be discontinued.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Tell me more about the AI assistant. How does it work?
            </strong>
            <ul>
              <li>
                Our AI assistant is designed to help you with examinations and
                general coding questions. It uses natural language processing to
                understand your queries and provides detailed responses to
                assist you in your programming journey.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Can I get help with specific coding problems from the AI
              assistant?
            </strong>
            <ul>
              <li>
                Absolutely! The AI assistant is here to assist with any coding
                or programming-related questions you may have. Simply describe
                the problem, and it will offer guidance and solutions to help
                you better understand and overcome challenges.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Are there any limitations on the number of questions I can ask the
              AI assistant?
            </strong>
            <ul>
              <li>
                No, there are no limitations on the number of questions you can
                ask. Feel free to use the AI assistant as much as you need to
                enhance your learning experience.
              </li>
            </ul>
          </li>
          <li>
            <strong> Do you offer any discounts or promotions?</strong>
            <ul>
              <li>
                We occasionally run promotions and discounts. Keep an eye on our
                website and newsletter for any ongoing special offers.
              </li>
            </ul>
          </li>
          <li>
            <strong>Is there a free trial available?</strong>
            <ul>
              <li>
                Yes! We have the opportunity for individuals to enroll in two
                complimentary courses offered by our platform.
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <button
        style={{
          fontSize: "1.4rem",
          marginBlock: "50px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "white",
        }}
        onClick={() => nav("/")}
      >
        Go Back
      </button>
    </div>
  );
}
