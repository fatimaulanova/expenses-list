import React, {useState} from 'react';
import {useSelector} from "react-redux";

const Blocks = () => {
    const {Balance, Expenses} = useSelector((state) => state)
    return (
        <div className="flex justify-center">
            <div className=" w-72 p-12 rounded text-center m-2 balance">
                <h1 className="text-white text-3xl py-2">Balance</h1>
                <h1 className="text-white text-2xl py-6">{Balance} som</h1>
            </div>
            <div className=" w-72 p-12 rounded text-center m-2 balance">
                <h1 className="text-white text-3xl py-2">Expenses</h1>
                <h1 className="text-white text-2xl py-6">{Expenses} som</h1>
            </div>
        </div>
    );
};

export default Blocks;