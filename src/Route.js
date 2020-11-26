import { Provider } from 'react-redux'
import React, {Fragment} from "react";
import App from "./containers/App";
import store from "./redux/store"
import color from "./constante/color";

function Route() {
  return (
      <Provider store={store}>
          <Fragment>
              <App />
          </Fragment>

      </Provider>
  );
}

export default Route;
