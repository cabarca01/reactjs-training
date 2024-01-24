import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  function openCartHandler() {
    dispatch(cartActions.showCart());
  }

  return (
    <button className={classes.button} onClick={openCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
