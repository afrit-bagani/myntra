import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

function HomeItem({ item }) {
  const bag = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  function handleAddtoBagButton() {
    dispatch(bagAction.addToBag(item.id));
    toast.success("Add to cart");
  }
  function handleRemoveFromBagButton() {
    dispatch(bagAction.removeFromBag(item.id));
  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} 🌟 | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">₹ {item.current_price}</span>
        <span className="original-price">₹ {item.original_price}</span>
        <span className="discount">{item.discount_percentage} % OFF</span>
      </div>
      {bag.includes(item.id) ? (
        <button
          className="btn btn-outline-danger btn-remove-from-bag"
          onClick={handleRemoveFromBagButton}
        >
          <MdOutlineRemoveShoppingCart /> Remove
        </button>
      ) : (
        <button
          className="btn btn-success btn-add-to-bag"
          onClick={handleAddtoBagButton}
        >
          <BiSolidPurchaseTag /> Add to Bag
        </button>
      )}
    </div>
  );
}

export default HomeItem;
