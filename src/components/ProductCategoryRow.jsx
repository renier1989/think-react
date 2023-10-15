/* eslint-disable react/prop-types */
export const ProductCategoryRow = ({category})=>{
    return (
        <tr className="border-b border-red-500 ">
            <th colSpan="2">{category}</th>
        </tr>
    );
}