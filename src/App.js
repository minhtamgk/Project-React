import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { addToCart, changeItemQuantity, removeItem } from "./actions/carts";
import "./App.css";
import HomePage from "./containers/HomePages";
import Category from "./containers/Category";
import Single from "./containers/Single";
import Contacts from "./containers/Contacts";
import Benefit from "./components/Common/Benefit";
import Footer from "./components/Common/Footers";
import Header from "./components/Common/Header";
import CartPage from "./containers/Card";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Shop" component={Category} />
          <Route path="/products/:productId" component={Single} />
          <Route path="/Cart" component={CartPage} />
          <Route path="/Contact" component={Contacts} />
        </Switch>
        <Benefit />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

App.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  changeItemQuantity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addToCart,
      removeItem,
      changeItemQuantity,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
