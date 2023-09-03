
import { Table } from "react-bootstrap"
import IExpenseItem from "../models/IExpense";

type ExpenseItemsModel = {

  expenseItems: IExpenseItem[];
}

const ExpenseItems = ({ expenseItems }: ExpenseItemsModel) => {

  const defaultExpenseItems = [

    {
      "expenseDescription": "Internet Expenses",
      "payeeName": "Ramesh",
      "price": 1100,
      "date": "2023-03-26T00:00:00.000Z",
      "id": 1
    },
    {
      "expenseDescription": "Bike Maintainence Expenses",
      "payeeName": "Rahul",
      "price": 3500,
      "date": "2023-03-26T00:00:00.000Z",
      "id": 2
    },
    {
      "expenseDescription": "Electricity Bill - Nov Month",
      "payeeName": "Ramesh",
      "price": 2200,
      "date": "2023-03-26T00:00:00.000Z",
      "id": 3
    }
  ];

  const convertDateToString = (dateAsString: Date) => {

    const dateObj = new Date(dateAsString);

    return dateObj.getDate() + " - " + (dateObj.getMonth() + 1)
      + " - "
      + (dateObj.getFullYear());

  }

  return (
    <div>
      <h5 className="fw-bold fst-italic"> List of Expenses</h5>
      <Table striped bordered hover className='boxShadow'>
        <thead className='position-sticky bg-white table-info'>
          <tr>
            <th></th>
            <th>Expense Description</th>
            <th>Payee Name</th>
            <th>Expense Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>

          {

            expenseItems.map((expenseItem, index) => {

              return (

                <tr>
                  <td>{index + 1}</td>
                  <td>{expenseItem.expenseDescription}</td>
                  <td>{expenseItem.payeeName}</td>
                  <td>{convertDateToString(expenseItem.date)}</td>
                  <td>{expenseItem.price}</td>

                </tr>

              )

            })

          }

        </tbody>
      </Table>

    </div>
  )
}

export { ExpenseItems }