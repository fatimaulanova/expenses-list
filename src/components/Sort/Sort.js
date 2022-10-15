import React from 'react';
import {useDispatch} from "react-redux";

const Sort = () => {

    const dispatch = useDispatch();

    const sortItem = (e) => {
        dispatch({type: "SORT_EXPENSES", payload: e.target.value})}

    return (
        <div>
            <select
                onChange={sortItem}
                className=" border font-bold text-sm
                rounded-lg block w-22 p-2.5 text-white task">
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="highest">highest</option>
                <option value="lowest">lowest</option>
            </select>
        </div>
    );
};

export default Sort;