import React, {useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
/* import arrayProduct from  "./arrayProduct.json"; */
import {doc, getDoc, getFirestore } from "firebase/firestore";
const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();

    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProduct.find(item => item.id === parseInt(id)));
            }, 2000);
        })

        promesa.then((data) => {
            setItem(data)
        })
        }, [id]); */

        useEffect(() => {
            const fs = getFirestore ();
            const documento = doc(fs, "items", "3RwRG843FkOgeLoOAehe")
            getDoc(documento).then((snapShot) => {
                if (snapShot.exists()){
                    setItem({id:snapShot.id, ...snapShot.data()});
                }else{
                    console.log("Error! no se encontro el documento!");
                }
            })
        }, []);

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;