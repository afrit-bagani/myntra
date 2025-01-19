import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemsSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    async function fetchData() {
      try {
        dispatch(fetchStatusAction.markFetchingStart());
        const response = await fetch("http://localhost:8080/items");
        const data = await response.json();

        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(itemsAction.addInitialItems(data.items));
      } catch (error) {
        console.log("Error while fetching data from server: ", error);
      }
    }

    fetchData();

    // return controller.abort;
  }, [fetchStatus]);
  return <></>;
}

export default FetchItems;
