import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Expenses = () => {
    const dispatch = useDispatch()
    const {ExpList} = useSelector((state) => state)
    const deleteItem = (idx) =>{
        console.log(idx)
        dispatch({type: "DELETE_EXPENSES_ITEM", payload: idx})
    }

    return (
        <div>
            {
                ExpList.length === 0 ? (<h1 className=" text-white font-bold text-center py-2 text-4xl ">Expenses list empty</h1>) : (
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-6">
                    <table className="w-full text-sm text-left text-white">
                        <thead className="text-xs  uppercase text-white task">
                        <tr>
                            <th scope="col" className="py-3 px-6">Date</th>
                            <th scope="col" className="py-3 px-6">Products name</th>
                            <th scope="col" className="py-3 px-6">Spent</th>
                            <th scope="col" className="py-3 px-6 m-4">X</th>

                        </tr>
                        </thead>
                        <tbody>
                        {ExpList.map((el,idx)=>(
                            <tr key={idx} className="bg-white border-b task">
                                <td className="py-4 px-6" >{el.date}</td>
                                <td className="py-4 px-6">{el.products}</td>
                                <td className="py-4 px-6">{el.spent}</td>
                                <td className="py-4 px-6">
                                    <button className="bg-pink-700 text-white p-2 rounded font-bold clear"
                                            onClick={() => deleteItem(idx)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                )
            }
        </div>

    );
};

export default Expenses;