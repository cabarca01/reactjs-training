import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  function toggleCartVisibilityHandler() {
    dispatch(uiActions.toggleCartVisibility());
  }

  return (
    <button className={classes.button} onClick={toggleCartVisibilityHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
