import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import filmReducer from "./filmSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    film: filmReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
