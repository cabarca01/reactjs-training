import "./Checkout.css";

import { useContext } from "react";

import { isEmail, isNotEmpty } from "../util/validations";

import Modal from "./UI/Modal";
import { CartContext } from "../contexts/shopping-cart";
import { ShoppingJourneyContext } from "../contexts/shopping-journey";
import { formatter, getTotal } from "../util/utils";
import useInput from "../hooks/useInput";
import Input from "./UI/Input";
import Button from "./UI/Button";

export default function Checkout() {
  const { items, resetCart } = useContext(CartContext);
  const { step, closeCheckout, closeCart } = useContext(ShoppingJourneyContext);

  const cartTotal = getTotal(items);

  const {
    inputValue: nameValue,
    isInputValid: isNameValid,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    resetHandler: nameResetHandler,
  } = useInput("", (value) => {
    return isNotEmpty(value);
  });

  const {
    inputValue: emailValue,
    isInputValid: isEmailValid,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    resetHandler: emailResetHandler,
  } = useInput("", (value) => {
    return isNotEmpty(value) && isEmail(value);
  });

  const {
    inputValue: addressValue,
    isInputValid: isAddressValid,
    onChangeHandler: addressChangeHandler,
    onBlurHandler: addressBlurHandler,
    resetHandler: addressResetHandler,
  } = useInput("", (value) => {
    return isNotEmpty(value);
  });

  const {
    inputValue: plzValue,
    isInputValid: isPlzValid,
    onChangeHandler: plzChangeHandler,
    onBlurHandler: plzBlurHandler,
    resetHandler: plzResetHandler,
  } = useInput("", (value) => {
    return isNotEmpty(value);
  });

  const {
    inputValue: cityValue,
    isInputValid: isCityValid,
    onChangeHandler: cityChangeHandler,
    onBlurHandler: cityBlurHandler,
    resetHandler: cityResetHandler,
  } = useInput("", (value) => {
    return isNotEmpty(value);
  });

  function formSumbitHandler(event) {
    event.preventDefault();
    resetCart();
    closeCart();
  }

  function formResetHandler() {
    nameResetHandler();
    emailResetHandler();
    addressResetHandler();
    plzResetHandler();
    cityResetHandler();
  }

  return (
    <Modal keyId="checkoutModal" open={step === "checkout"}>
      <h2>Checkout</h2>
      <p>Total amount: {formatter.format(cartTotal)}</p>
      <form onSubmit={formSumbitHandler}>
        
          <Input
            label="Full Name"
            id="fullName"
            type="text"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            error={!isNameValid && "Please enter your full name"}
            required
          />
          <Input
            label="E-Mail Address"
            id="email"
            type="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            error={!isEmailValid && "Please enter a valid E-Mail address"}
            required
          />
          <Input
            label="Street"
            id="address"
            type="text"
            value={addressValue}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
            error={!isAddressValid && "Please enter your street address"}
            required
          />
        <p className="control-row">
          <Input
            label="Postal Code"
            id="plz"
            type="text"
            value={plzValue}
            onChange={plzChangeHandler}
            onBlur={plzBlurHandler}
            error={!isPlzValid && "Please enter your Postal Code"}
            required
          />
          <Input
            label="City"
            id="city"
            type="text"
            value={cityValue}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            error={!isCityValid && "Please enter your city"}
            required
          />
        </p>
        <p className="modal-actions">
          <Button isTextOnly={true} type="button" onClick={closeCheckout}>
            Close
          </Button>
          <Button type="submit">Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
