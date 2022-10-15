import { createStore } from "redux";
import Reducer from "./Reducer";
import {composeWithDevTools} from "redux-devtools-extension";

 export const Store = createStore(Reducer,composeWithDevTools());