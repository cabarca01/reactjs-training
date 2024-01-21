import "./Checkout.css";

import { useContext } from "react";
import useHttp from "../hooks/useHttp";

import { isEmail, isNotEmpty } from "../util/validations";

import Modal from "./UI/Modal";
import { CartContext } from "../contexts/shopping-cart";
import { ShoppingJourneyContext } from "../contexts/shopping-journey";
import { formatter, getTotal } from "../util/utils";
import useInput from "../hooks/useInput";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Error from "./UI/Error";

const httpConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const { items, resetCart } = useContext(CartContext);
  const { step, closeCheckout } = useContext(ShoppingJourneyContext);
  const { response, error, isFetching, sendRequest } = useHttp(
    "http://localhost:3000/orders",
    httpConfig
  );

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

  async function formSubmitHandler(event) {
    event.preventDefault();
    const reqBody = {
      order: {
        customer: {
          name: nameValue,
          email: emailValue,
          street: addressValue,
          "postal-code": plzValue,
          city: cityValue,
        },
        items,
      },
    };
    sendRequest(JSON.stringify(reqBody));
  }

  function formResetHandler() {
    nameResetHandler();
    emailResetHandler();
    addressResetHandler();
    plzResetHandler();
    cityResetHandler();
    closeCheckout();
  }

  function finishCheckout() {
    resetCart();
    formResetHandler();
  }

  const formActions = isFetching ? (
    <span>Placing order...</span>
  ) : (
    <>
      <Button isTextOnly={true} type="reset">
        Close
      </Button>
      <Button type="submit">Submit Order</Button>
    </>
  );

  if (response && !error ) {
    return (
      <Modal
        keyId="resultModal"
        open={step === "checkout"}
        onClose={finishCheckout}
      >
        <h2>Order received successfuly!</h2>
        <p>
          Your order has been placed and will arrive at the specified address
          soon.
        </p>
        <p>Please check your email for more details</p>
        <p className="modal-actions">
          <Button type="button" onClick={finishCheckout}>
            Close
          </Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal keyId="checkoutModal" open={step === "checkout"}>
      <h2>Checkout</h2>
      <p>Total amount: {formatter.format(cartTotal)}</p>

      <form onSubmit={formSubmitHandler} onReset={formResetHandler}>
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
        <div className="control-row">
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
        </div>
        {error && <Error title="Error posting order" message={error} />}
        {!error && <p className="modal-actions">{formActions}</p>}
      </form>
    </Modal>
  );
}
