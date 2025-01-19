import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummery from "../components/BagSummery";

function Bag() {
  const bagIndex = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const purchaseItems = items.filter((item) => bagIndex.includes(item.id));
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {purchaseItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        {purchaseItems.length > 0 && (
          <BagSummery purchaseItems={purchaseItems} />
        )}
      </div>
    </main>
  );
}

export default Bag;
