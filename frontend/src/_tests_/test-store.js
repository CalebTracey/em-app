import { createStore } from "redux";

import rootReducer from "../redux/rootReducer";

const testStore = createStore(rootReducer);

export default testStore;
