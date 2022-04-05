import { ImageContainer, StyledShop } from "../styles.js/Shop.styled";
import { StyledButtonSmall, StyledButtonBig } from "../styles.js/Button.styled";
import { StyledHeader } from "../styles.js/Cart.styled";

const Cart = ({ cart, setCart }) => {
  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  const removeFromCart = (productToRemove) => {
    console.log("removeFromCart: removing product from cart");
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <StyledShop>
      <StyledHeader>
        <h1>Cart</h1>
      </StyledHeader>
      <StyledHeader>Total Cost: ${getTotalSum()}</StyledHeader>
      <StyledHeader>
        <>
          {cart.length !== 0 && (
            <StyledButtonBig onClick={() => clearCart()}>
              Remove All Items
            </StyledButtonBig>
          )}
        </>
      </StyledHeader>

      {cart.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <h4>${product.cost}</h4>
          <h4>Quantity: {product.quantity}</h4>
          <ImageContainer src={product.image} alt={product.name} />
          <br />
          <StyledButtonSmall onClick={() => removeFromCart(product)}>
            Remove
          </StyledButtonSmall>
        </div>
      ))}
    </StyledShop>
  );
};

export default Cart;
