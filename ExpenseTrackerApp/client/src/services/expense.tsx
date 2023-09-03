import axios from 'axios'
import IDataList from '../models/IExpense';

const DataUrl = 'http://localhost:4000/expenses?_sort=id'; 

//const DataUrl = process.env.REACT_APP_API_BASE_URL;

const GetExpenseData= () => {
   return axios.get(`${DataUrl}`).then(response => response.data)
}

const postExpenseData = ( newpurchase : Omit<IDataList, 'id'> ) => {
   return axios.post<IDataList>(
       `${DataUrl}`,
       newpurchase,
       {
           headers: {
               'Content-Type': 'application/json'
           }
       }
   )
   .then( response => response.data )
};

export { GetExpenseData, postExpenseData }