import React from 'react'
import { Table } from 'react-bootstrap'
import '../../css/formStyle.css'
type Props = {
    totalspend: number;
    rahulSpend: number;
    rameshSpend: number;
}

const ShowListTotal = ({ totalspend, rahulSpend, rameshSpend }: Props) => {
    return (
        
        <Table striped bordered hover className='position-sticky boxShadow' >
            <tbody>
                <tr className='table-info'>
                    <td>Total Paid</td>
                    <td>{totalspend}</td>
                </tr>
                <tr className='table-warning'>
                    <td> Paid by Rahul</td>
                    <td>{rahulSpend}</td>
                </tr>
                <tr className='table-warning'>
                    <td> Paid by Ramesh</td>
                    <td>{rameshSpend}</td>
                </tr>
                <tr className='table-danger'> 
                    <td>{rahulSpend > rameshSpend ? "Pending with Ramesh " : "Pending with  Rahul"}</td>
                    <td>{Math.abs((rahulSpend-rameshSpend))}</td>
                </tr>

            </tbody>
        </Table>
    )
}

export default ShowListTotal