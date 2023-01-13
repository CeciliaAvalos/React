import React, {useState, useEffect} from "react";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
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
/*     useEffect(() => {
        const fs = getFirestore();
        const itemsCollection = collection(fs, "items");
        console.log(arrayProduct);

        arrayProduct.forEach((item)=> {
            addDoc(itemsCollection, item)
        })

    }, []); */

    useEffect(() => {
        const fs =  getFirestore();
        const itemsCollection = collection(fs, "items");
/*         const q = query(itemsCollection, where ("precio", "<", 3000), where("categoria", "==", "tortas")); */
        const q = id ? query(itemsCollection, where ("categoria", "==", id)) : itemsCollection;
        getDocs(q).then((snapShot)=> {
            setItems(snapShot.docs.map((doc) =>
                ({id:doc.id, ...doc.data()})
            ));
        });
    }, [id]);

    return(
        <div className="container py-5">
             <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;