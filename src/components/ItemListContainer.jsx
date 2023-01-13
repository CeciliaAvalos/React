import React, {useState, useEffect} from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {useParams} from "react-router-dom";
import ItemList from "./ItemList";
import arrayProduct from "./arrayProduct.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams ();

    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve( id ? arrayProductos.filter (p =>p.categoria === id) : arrayProductos);
            }, 2000)
        });
        promesa.then((data) => {
            setItems(data);
        });

    }, [id]); */

    //INSERTO LOS PRODUCTOS DEL JSON A FIRESTORE
    useEffect(() => {
        const fs = getFirestore();
        const itemsCollection = collection(fs, "items");
        console.log(arrayProduct);

        arrayProduct.forEach((item)=> {
            addDoc(itemsCollection,)
        })

    }, []);

    return(
        <div className="container py-5">
             <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;