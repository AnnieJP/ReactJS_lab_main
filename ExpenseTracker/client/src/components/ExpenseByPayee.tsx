
// access to expense-items [add the type]
// Get the list of unique payee names [Rahul, Ramesh]
// Get the contributing amount for a given payee (payee name)
// Get the total expense
// Table to show the data

// Include this component in the ExpenseTrackerApp

import { Table } from "react-bootstrap";
import IExpenseItem from "../models/IExpense";
import { getAllPayeeNames } from "../services/expense";

type ExpenseByPayeeModel = {

  expenseItems: IExpenseItem[];
}

const ExpenseByPayee = ({ expenseItems }: ExpenseByPayeeModel) => {

  const getTotalExpenseByPayee = (payeeName: string) => {

    let totalExpense = 0;
    expenseItems.forEach((localExpenseItem) => {

      let localPayeeName = localExpenseItem.payeeName;
      if (localPayeeName === payeeName) {

        totalExpense = totalExpense +
          localExpenseItem.price;
      }
    })

    return totalExpense;
  }

  const getGrandTotal = () => {

    let totalExpense = 0;
    expenseItems.forEach((localExpenseItem) => {


      totalExpense = totalExpense +
        localExpenseItem.price;
    })

    return totalExpense;
  }

  const getPendingAmount = (payeeName: string) => {

    const totalExpense = getGrandTotal();
    const totalExpenseByPayee = getTotalExpenseByPayee(payeeName);

    const halfAmount = totalExpense / 2;

    if (totalExpenseByPayee >= halfAmount) {
      return 0;
    } else {

      return (halfAmount - totalExpenseByPayee);
    }
  }

  return (
    <div>

      <h5 className="fw-bold fst-italic"> Amount Paid by Payee</h5>
      <Table striped bordered hover>

        <thead className='position-sticky bg-white table-info'>
          <tr>
            <th></th>
            <th>Payee Name</th>
            <th>Contributed Amount</th>
            <th>Pending Amount</th>
          </tr>
        </thead>

        <tbody>

          {

            getAllPayeeNames(expenseItems).map((payeeName, index) => {

              return (

                <tr>
                  <td>{index + 1}</td>
                  <td>{payeeName}</td>
                  <td>{getTotalExpenseByPayee(payeeName)}</td>
                  <td>{getPendingAmount(payeeName)}</td>
                </tr>

              )
            })
          }

          <tr>
            <td></td>
            <td className="fw-bold">Grand Total</td>
            <td colSpan={2}>{getGrandTotal()}</td>

          </tr>

        </tbody>
      </Table>

    </div>
  )
}

export { ExpenseByPayee }