import React, { useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import IExpenseItem from '../../models/IExpense'
import { GetExpenseData } from '../../services/expense'
import AddExpenceForm from '../AddExpence/AddExpenceForm'
import Loader from '../loader/Loader'
import ShowListMain from './ShowListMain'
import '../../css/formStyle.css'

const ShowList = () => {

  const [DataList, setDataList] = useState<IExpenseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>();
  const [totalSpend, setTotalSpend] = useState<number>();
  const [rahulSpend, setRahulSpend] = useState<number>(0);
  const [rameshSpend, setRameshSpend] = useState<number>(0);
  const [showform, setShowForm] = useState<boolean>(false)

  var rahulspendset: number = 0;
  var rameshspendset: number = 0;

  useEffect(
    () => {
      const helper = async () => {
        setLoading(true);
        setError(null);
        try {
          const ExpenseData = await GetExpenseData();
          setDataList(ExpenseData);
          setTotalSpend(ExpenseData.reduce((result: any, v: { price: any }) => result = result + v.price, 0))
          spend(ExpenseData);
        } catch (error) {
          setError(error as Error);
        } finally {
          setLoading(false);
        }
      }

      helper();
    }, [showform] // Run useEffect when change happens 
  );

  const spend = (data: IExpenseItem[]) => {
    data.map(dataPay => (
      dataPay.payeeName === "Rahul" ? (
        rahulspendset = rahulspendset + dataPay.price
      ) :
        (
          rameshspendset = rameshspendset + dataPay.price
        )
    ))
    setRahulSpend(rahulspendset);
    setRameshSpend(rameshspendset);
    console.log(rameshSpend);
  }

  const success = () => {
    setShowForm(false)
  }
  const cancel = () => {
    setShowForm(false)
  }

  return (
    <>
      {
        loading &&
        <Loader message='Please Wait, Loading'></Loader>
      }
      {
        !loading && error &&
        <div>{error.message}</div>
      }
      {!loading && !error &&
        <>
          <Row>
            <div>
              <hr />
              <Button className='float-left ' onClick={() => setShowForm(true)}>Add Expense</Button>
              <br /> <br />
            </div>

            <h5 className="fw-bold fst-italic"> List of Expenses </h5>
            <ShowListMain data={DataList} totalSpend={totalSpend as number} rahulsSpend={rahulSpend as number} rameshsSpend={rameshSpend as number}></ShowListMain>
          </Row>
          {
            showform && (
              <div className="form">
                <AddExpenceForm onTrue={success} onClose={cancel} />
              </div>
            )
          }
        </>
      }
    </>
  )
}

export default ShowList