/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar'

function FiterTableProduct({ products }) {
    const [filterText, setFilterText] = useState('');
    const [onlyStock, setOnlyStock] = useState(false);

    // products = products.filter(product => {
    //     return onlyStock ? product.stocked === onlyStock : 
    //         ( filterText ? product.name.toLowerCase().includes(filterText.toLowerCase()) : product)
    // }) 

    products = products.filter(product => {
        return (onlyStock ? product.stocked === onlyStock : true) &&
               (filterText ? product.name.toLowerCase().includes(filterText.toLowerCase()) : true);
    });


    return (
        <div className='w-[70%] flex flex-col items-center justify-center h-screen'>


            <SearchBar
                filterText={filterText}
                onFilterText={setFilterText}
                onlyStock={onlyStock}
                onOnlyStock={setOnlyStock}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                onlyStock={onlyStock}
                // total={total}
            />
        </div>
    )
}

export { FiterTableProduct }