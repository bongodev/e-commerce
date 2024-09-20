import { IconButton, ListItemText } from '../../common/components';
import { DeleteIcon } from '../../common/icons';

export const CartItem = ({ cartItem, removeProductFromCart }) => {
  const handleRemoveProductFromCart = () => {
    removeProductFromCart(cartItem.id);
  };

  return (
    <>
      <ListItemText
        primary={`${cartItem.name} x ${cartItem.quantity}`}
        secondary={`$${cartItem.price * cartItem.quantity}`}
      />
      <IconButton
        onClick={handleRemoveProductFromCart}
        variant="outlined"
        color="error"
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
};
