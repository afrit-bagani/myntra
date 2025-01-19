import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BagSummery({ purchaseItems }) {
  let totalItems = purchaseItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  const CONVENIENCE_FEES = 99;
  let currentPrice = 0;

  purchaseItems.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
    currentPrice += item.current_price;
  });

  let finalAmount = currentPrice + CONVENIENCE_FEES;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS {totalItems} Items</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹ {totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            - ₹ {totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">After Discount</span>
          <span className="price-item-value">₹{currentPrice}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹ {CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Final Amount</span>
          <span className="price-item-value">₹ {finalAmount}</span>
        </div>
      </div>
      <button
        className="btn btn-danger btn-place-order"
        onClick={() => toast.success("Order has been placed successfully")}
      >
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
      <ToastContainer />
    </div>
  );
}

export default BagSummery;
