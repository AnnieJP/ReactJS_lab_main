import React from 'react'
import { Col, Table } from 'react-bootstrap'
import IExpenseItem from '../../models/IExpense';
import ShowListTotal from './ShowListTotal';

type Props = {
  data: IExpenseItem[],
  totalSpend: number,
  rahulsSpend: number,
  rameshsSpend: number,
}

const ShowListMain = ({ data, totalSpend, rahulsSpend, rameshsSpend }: Props) => {
  return (
    <>
      <Col md={8}>
        <Table striped bordered hover className='boxShadow'>
          <thead className='position-sticky bg-white table-info'>
            <tr >
              <th></th>
              <th>Date</th>
              <th>Product</th>
              <th>Price</th>
              <th>Payee</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(data => (

                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.setDate}</td>
                  <td>{data.product}</td>
                  <td>{data.price}</td>
                  <td>{data.payeeName}</td>
                </tr>
              ))
            }

          </tbody>
        </Table>
      </Col>
     
      <Col>
        <h5 className="fw-bold fst-italic"> Amount Paid by Payee</h5>
        <ShowListTotal totalspend={totalSpend} rahulSpend={rahulsSpend} rameshSpend={rameshsSpend}></ShowListTotal>
      </Col>
    </>
  )
}

export default ShowListMain