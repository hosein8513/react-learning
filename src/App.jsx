import { Provider } from "react-redux";
import { Store } from "../redux/store";
import Usercomp from "./usercomp";

const App = () => {
 
  return (
    <Provider store={Store}>
    <div>
   <Usercomp/>
    </div>
  </Provider>
  );
};

export default App;