import { createContext, useReducer } from "react";
import Reducer, { initialState } from "./reducer";

export const StoreContext = createContext();

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const value = {state, dispatch};

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}


export default StateProvider;