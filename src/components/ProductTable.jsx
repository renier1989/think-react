/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

export const ProductTable = ({products, filterText , onlyStock}) =>{
    const rows = [];
    let lastCategory =null;
    const [total, setTotal] = useState(0);

    products.forEach(product=>{

        // if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
        //     return;
        // }

        // if(onlyStock && !product.stocked){
        //     return;
        // }

        if(product.category !== lastCategory){
            rows.push(
                <ProductCategoryRow category={product.category} key={product.category}/>
            );
        }

        rows.push(
            <ProductRow product={product} key={product.name}  />
        );

        lastCategory = product.category;
        
    })

    useEffect(() => {
        // let filtered_products = products;
        // if(filterText){
        //     filtered_products = products.filter(product=>{
        //         return product.name.toLowerCase().includes(filterText.toLowerCase()); 
        //     })
        // }
        // if (onlyStock) {
        //     filtered_products = products.filter(product=> product.stocked === onlyStock)
        // }
        
         
        const total_value = products.reduce((cal, product) => {
            const val = product.price.split('$');
            return cal + parseInt(val[1])
        }, 0)
        setTotal(total_value);
        console.log(total_value);
    }, [filterText, onlyStock]);

    return (
        <div className="flex flex-col w-[40%] text-center">
            <table className=" rounded-lg bg-gray-200 shadow-xl">
                <thead>
                    <tr>
                        <td className="border-r border-b border-indigo-500 font-semibold">NAME</td>
                        <td className="border-b border-indigo-500 font-semibold">PRICE</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                    <tr>
                        <td className="border-r-2 text-xl font-bold border-indigo-950">Total</td>
                        <td className="font-bold text-xl">${total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}