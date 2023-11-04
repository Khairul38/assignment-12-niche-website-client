import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth/useAuth";
import MyOrderItem from "../../Item/MyOrderItem";
import "./MyOrders.css";
// import { useBkash } from "react-bkash";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { allContext } = useAuth();
  const { user } = allContext;
  const [loadingg, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/orders`)
      .then((res) => res.json())
      .then((data) => {
        const myOrder = data.filter((order) => order.email === user.email);
        setOrders(myOrder);
      })
      .finally(() => setLoading(false));
  }, [user.email]);

  // Delete a Product
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are You Sure, You Want To Cancel");
    if (proceed) {
      const url = `${process.env.REACT_APP_API_BASE_URL}/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Product Cancel Successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  // const { error, loading, triggerBkash } = useBkash({
  //   onSuccess: (data) => {
  //     console.log(data); // this contains data from api response from onExecutePayment
  //   },
  //   onClose: () => {
  //     console.log("Bkash iFrame closed");
  //   },
  //   bkashScriptURL:
  //     "https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js",
  //   amount: 1,
  //   onCreatePayment: async (paymentRequest) => {
  //     // call your API with the payment request here
  //     return await fetch("https://pixacam-serverside.vercel.app/orders", {
  //       method: "POST",
  //       body: JSON.stringify(paymentRequest),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("on created payment", data);
  //         return { ...data };
  //       });
  //   },
  //   onExecutePayment: async (paymentID) => {
  //     // call your executePayment API here
  //     return await fetch(
  //       `https://pixacam-serverside.vercel.app/execute/${paymentID}`,
  //       {
  //         method: "POST",
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("on execute", data);
  //         return { ...data };
  //       });
  //   },
  // });
  // if (loading) {
  //   return <h1>loading</h1>;
  // }

  // if (error) {
  //   return <h1>{error.message}</h1>;
  // }
  return (
    <div>
      <div className="banner-myOrder banner-bs mb-5 text-center">
        <h1>
          MY <span className="text-color fw-bold">ORDERS</span>
        </h1>
        <h5>YOU CAN SEE DETAILS INFORMATION</h5>
      </div>
      {loadingg ? (
        <Box sx={{ display: "flex", justifyContent: "center", my: 8 }}>
          <CircularProgress sx={{ color: "#EC9C31" }} />
        </Box>
      ) : (
        <div className="container">
          <div className="container my-5">
            <Row xs={1} md={3} className="g-5 p-4">
              {orders.map((order) => (
                <MyOrderItem
                  key={order._id}
                  order={order}
                  handleDeleteProduct={handleDeleteProduct}
                  // triggerBkash={triggerBkash}
                ></MyOrderItem>
              ))}
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
