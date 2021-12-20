import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

//inital state
const initialState = {
	transaction: [
		{id: 1, text: "flower", amount: -20},
		{id: 2, text: "Salary", amount: 300},
		{id: 3, text: "Book", amount: -10},
		{id: 4, text: "Camera", amount: 150},
	],
};
//Create Contenxt
export const GlobalContext = createContext(initialState);

// Provider Component
export const GLobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transaction,
			}}
		>
			{children})
		</GlobalContext.Provider>
	);
};
