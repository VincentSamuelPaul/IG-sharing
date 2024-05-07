import { db } from "./firebaseConfig";
import { addDoc, collection, getDocs, where, query, updateDoc, doc, deleteDoc } from "firebase/firestore";

export const writeData = async(table, dataToWrite) => {
    await addDoc(collection(db, table), dataToWrite)
};

export const getAllData = async(table) => {
    const data = await getDocs(collection(db, table));
    data.forEach((dat) => {
        console.log(dat.data());
    })
    return data;
};

export const getCertainData = async(table, param, operator, value) => {
    const data = await getDocs(query(collection(db, table), where(param, operator, value)));
    console.log(data);
    return data;
};

export const updateData = async(table) => {
    await updateDoc(doc(db, table, "0"), {
        age: 30
    });
};

export const deleteData = async(table, id) => {
    await deleteDoc(doc(db, "igusername", "0"));
};