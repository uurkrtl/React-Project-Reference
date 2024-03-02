import rootReducer from "./rootReducer.tsx";
import {legacy_createStore as createStore} from "redux";

export function configureStore() {
    return createStore(rootReducer);
}