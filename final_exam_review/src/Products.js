import React, { useState } from 'react';

function Products(){
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const loadingComp = () => {
        return(
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    async function fetchData(){
        setData([])
        setIsLoading(true);
        let newData = [];
        fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(results => {
            results["products"].map((element) => newData.push(element["title"]));
            setData(newData);
            formatData();
        })
        .catch(error => console.log(error))
        .finally(setIsLoading(false));
    }

    const addProduct = () => {
        const text = document.getElementById('newComp').value;
        const object = JSON.parse(text);
        console.log('Checkpoint');
        addData(object);
    }

    async function addData(newProduct){
        fetch("http://localhost:3000/Products", {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(newProduct),
        })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log('POST Data: ', data)
            console.log(data.message);
        })
        .catch(error => console.error(error));
    }

    function formatData(){
        return(
            <div>
                {data.map((title, index) => (
                    <p key={index}>{title}</p>
                ))}
            </div>
        );
    }

    return(
        <div>
            <h1>Welcome to the products page</h1>
            <button onClick={fetchData}>Load Products</button>
            {isLoading && loadingComp}
            {formatData()}
            <div className='input-area'>
                <label htmlFor='newComp'>Add new person</label>
                <input type='textarea' id='newComp'/>
                <br/>
                <button type='submit' onClick={addProduct}>Submit</button>
            </div>
        </div>
    );
}
export default Products;