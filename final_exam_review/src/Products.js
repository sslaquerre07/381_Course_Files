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
        </div>
    );
}
export default Products;