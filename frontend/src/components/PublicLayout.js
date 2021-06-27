import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import publicCss from "../public.module.css";
// import { signout } from "../actions/userActions";
import CartScreen from "../screens/CartScreen";
// import { Route } from "react-router-dom/cjs/react-router-dom.min";
import HomeScreen from "../screens/HomeScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import OrderScreen from "../screens/OrderScreen";
import PaymentMethodScreen from "../screens/PaymentMethodScreen";
import PlaceOrderScreen from "../screens/PlaceOrderScreen";
import ProductScreen from "../screens/ProductScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ShippingAddressScreen from "../screens/ShippingAddressScreen";
import SigninScreen from "../screens/SigninScreen";

import NavBar from "./NavBar";
import PrivateRoute from "./PrivateRoute";

// import { StoreConstants } from "../storeData";
import CategoryScreen from "../screens/CategoryScreen";
import Header from "./Header";
import Footer from "./Footer";

export default function PublicLayout() {
  // const cart = useSelector((state) => state.cart);
  // const cartItems = cart.cartItems;

  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  // const dispatch = useDispatch();
  // const signoutHandler = () => {
  //   dispatch(signout());
  // };

  return (
    <BrowserRouter>
      <div className={publicCss.gridContainer}>
        <Header />
        {/* Adding Navigation Bar */}
        <NavBar />
        <main>
          {/* "?" is added so that id can be empty and user can be redirected to cart component */}
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route
            path="/products/:catId/:subCatId?"
            component={CategoryScreen}
          ></Route>
          <Route path="/products" exact={true}>
            <Redirect to="/"></Redirect>
          </Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <Route path="/" component={HomeScreen} exact={true}></Route>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
