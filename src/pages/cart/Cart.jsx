/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 12/04/2023 - 01:15:29
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BookStoreContext from "../../context/bookStorContext";
import "./cart.css";

const Cart = () => {
  const { cartInfo, removeFromCart, addToCart } = useContext(BookStoreContext);
  const navigate = useNavigate(); // renommé history en navigate

  const handlePayment = () => {
    navigate("/commande"); // utilise a pour la redirection
  };

  return (
    <div className="cart">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartInfo.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={`/books/${item.image}`}
                alt={item.title}
                className="cart-item-img"
              />
              <div className="cart-item-info">
                <div>
                  <div className="cart-item-book-title">
                    <b>Title: </b>
                    {item.title}
                  </div>
                  <div className="cart-item-author">
                    <b>Author: </b>
                    {item.author}
                  </div>
                </div>
                <div>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => addToCart(item, parseInt(item.quantity) + 1)}
                      className="bi bi-plus-lg"
                    ></button>
                    <b>{item.quantity}</b>
                    <button
                      disabled={item.quantity <= 1}
                      onClick={() => addToCart(item, parseInt(item.quantity) - 1)}
                      className="bi bi-dash-lg"
                    ></button>
                  </div>
                  <div className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <i
                    onClick={() => removeFromCart(item.id)}
                    className="bi bi-trash-fill"
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-order-summary">
          <h5 className="order-summary-title">ORDER SUMMARY</h5>
          <div className="order-summary-item">
            <span>Subtotal</span>
            <span>
              $
              {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
          </div>
          <div className="order-summary-item">
            <span>Shipping Cost</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <span>Discount</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <strong>Total</strong>
            <span>
              $
              {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
          </div>

          <button type="button" onClick={handlePayment} className="cart-payment-button btn-danger m-5 p-5 text-center">
            payer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
