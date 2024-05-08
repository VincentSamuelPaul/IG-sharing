import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { getAllData, writeData, getCertainData, updateData, deleteData } from '../firebase/functions';

const HomePage = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>{user}</h1>
            {/* <button onClick={() => deleteData()}>getdata</button> */}
        </div>
    )
}

export default HomePage