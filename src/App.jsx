import { Provider } from "react-redux";
import Weather from "./Weather";
import { Store } from "../redux/store";


const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <Weather />
      </div>
    </Provider>
  );
};

export default App;