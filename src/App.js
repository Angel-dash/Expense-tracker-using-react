import React from "react";
import "./App.css";
import {Header} from "./components/Header";
import {Balance} from "./components/Balance.js";
import {IncomeExpense} from "./components/IncomeExpense";
import {TransactionList} from "./components/TransactionList";
import {AddTransaction} from "./components/AddTransaction";
import {GLobalProvider} from "./Context/GlobalState";
function App() {
	return (
		<GLobalProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpense />
				<TransactionList />
				<AddTransaction />
			</div>
		</GLobalProvider>
	);
}

export default App;
