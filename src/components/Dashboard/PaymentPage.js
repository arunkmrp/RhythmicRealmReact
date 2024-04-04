// import React from "react";
// import axios from "axios";

// const PaymentPage = () => {
//   const createOrder = async () => {
//     try {
//       const response = await axios.post("http://localhost:8080/createOrder");
//       const order = response.data;
//       const options = {
//         key: "rzp_test_iO7AgTpjgQSek5",
//         amount: order.amount_due.toString(),
//         currency: "INR",
//         name: "Tune Hub",
//         description: "Test Transaction",
//         order_id: order.id,
//         handler: function (response) {
//           verifyPayment(
//             response.razorpay_order_id,
//             response.razorpay_payment_id,
//             response.razorpay_signature
//           );
//         },
//         prefill: {
//           name: "Your Name",
//           email: "test@example.com",
//           contact: "9999999999",
//         },
//         notes: {
//           address: "Your Address",
//         },
//         theme: {
//           color: "#F37254",
//         },
//       };
//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const verifyPayment = async (orderId, paymentId, signature) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/verify",
//         {
//           orderId: orderId,
//           paymentId: paymentId,
//           signature: signature,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const isValid = response.data;
//       if (isValid) {
//         // If payment is successful, update premium status
//         alert("Payment successful");
//         window.location.href = "customerhome";
//       } else {
//         alert("Payment failed");
//         window.location.href = "payment-failure";
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Unlock Premium Benefits</h1>
//       <p>
//         Upgrade to premium membership to enjoy exclusive features and benefits:
//       </p>
//       <p>Start your premium journey today and elevate your music experience!</p>
//       <form>
//         <button type="button" onClick={createOrder} className="buy-button">
//           Upgrade Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PaymentPage;
import React from "react";
import axios from "axios";

const PaymentPage = ({ userId }) => {
  console.log(userId);
  const createOrder = async () => {
    try {
      const response = await axios.post("http://localhost:8080/createOrder");
      const order = response.data;
      const options = {
        key: "rzp_test_iO7AgTpjgQSek5",
        amount: order.amount_due.toString(),
        currency: "INR",
        name: "Tune Hub",
        description: "Test Transaction",
        order_id: order.id,
        handler: function (response) {
          verifyPayment(
            response.razorpay_order_id,
            response.razorpay_payment_id,
            response.razorpay_signature
          );
        },
        prefill: {
          name: "Your Name",
          email: "test@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Your Address",
        },
        theme: {
          color: "#F37254",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const verifyPayment = async (orderId, paymentId, signature) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/verify",
        {
          orderId: orderId,
          paymentId: paymentId,
          signature: signature,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const isValid = response.data;
      if (isValid) {
        // If payment is successful, update premium status
        updatePremiumStatus();
        alert("Payment successful");
        window.location.href = "customerhome";
      } else {
        alert("Payment failed");
        window.location.href = "payment-failure";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updatePremiumStatus = async () => {
    try {
      await axios.post("http://localhost:8080/updatePremiumStatus", {
        userId: userId,
      });
    } catch (error) {
      console.error("Error updating premium status:", error);
    }
  };

  return (
    <div>
      <h1>Unlock Premium Benefits</h1>
      <p>
        Upgrade to premium membership to enjoy exclusive features and benefits:
      </p>
      <p>Start your premium journey today and elevate your music experience!</p>
      <form>
        <button type="button" onClick={createOrder} className="buy-button">
          Upgrade Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
