import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";

const Form = ({item,idx}) => {

    const dispatch = useDispatch()

    const [history, setHistory] = useState({
        date: "",
        products: "",
        spent: "",
    })

    console.log(history)

    const handleChange = (e) =>{
        console.log(e.target.name, e.target.value)
        setHistory({...history, [e.target.name]: e.target.value})
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({type: "ADD_EXPENSES_ITEM", payload: history})
           
        }


    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center">
                <input
                    type="date"
                    name="date"
                    onChange={handleChange}
                    className="
      form-control
        w-full
        px-3
        py-1.5
        font-normal
        text-gray-400
        rounded
        transition
        ease-in-out
        m-4
        outline-none
        task
      "
                    placeholder="text input"
                />

                <input
                    type="text"
                    name="products"
                    onChange={handleChange}
                    className="
     form-control
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        rounded
        transition
        ease-in-out
        m-4
        outline-none
        task
      "
                    placeholder="text input"
                />

                <input
                    type="text"
                    name="spent"
                    onChange={handleChange}
                    className="
        form-control
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        rounded
        transition
        ease-in-out
        m-4
        outline-none
        task
      "
                    placeholder="text input"
                />
                <button className="text-white p-2 rounded font-bold  pay ">Pay</button>
            </div>
        </form>
    );
};

export default Form;