import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import Layout from "./Layout/Layout";
import { store } from "./redux/store";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <Layout />
      <ToastContainer className={"Toaster"} />
    </Provider>
  );
}

export default App;
