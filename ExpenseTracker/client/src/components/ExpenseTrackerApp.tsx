
import { useEffect, useState } from "react"
import { getAllExpenseItems } from "../services/expense";
import { ExpenseItems } from "./ExpenseItems";
import { Container } from "react-bootstrap";
import IExpenseItem from "../models/IExpense";
import { ExpenseByPayee } from "./ExpenseByPayee";
import { ExpenseCreator } from "./ExpenseCreator";

const ExpenseTrackerApp = () => {

  const [expenseItems, setExpenseItems] = useState<IExpenseItem[]>([]);

  useEffect(() => {

    const getAllExpenseItemsInvoker = async () => {

      const response = await getAllExpenseItems();

      console.log(`Response is ` + JSON.stringify(response));

      setExpenseItems(response);
    }

    getAllExpenseItemsInvoker();

  }, [])

  return (
    <Container>
      <h2 className='bg-info text-black py-2 text-center mt-2'> Expense Tracker App </h2>
      
      <ExpenseCreator expenseItems={expenseItems}></ExpenseCreator>
      <br></br> 
      <ExpenseItems expenseItems={expenseItems}></ExpenseItems>
      
      <ExpenseByPayee expenseItems={expenseItems}></ExpenseByPayee>

      <h6 className='bg-info text-black py-2 text-center mt-5'>Created By SnehYog Kulkarni</h6>
    </Container>


  )
}

export { ExpenseTrackerApp }