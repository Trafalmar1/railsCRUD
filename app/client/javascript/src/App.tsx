// import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import Layout from "./Layout/Layout";
import { store } from "./redux/store";
import "./styles/index.scss";

function App() {
  return (
    <Provider store={store}>
      <Layout />
      {/* <ToastContainer /> */}
    </Provider>
  );
}

export default App;
