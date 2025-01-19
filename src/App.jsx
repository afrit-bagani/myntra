import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FetchItems from "./components/FetchItems";
import LoadingSpine from "./components/LoadingSpine";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpine /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
