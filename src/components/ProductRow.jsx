/* eslint-disable react/prop-types */
export const ProductRow = ({product}) =>{
    return(
        <tr>
            <td className={`${!product.stocked ? 'text-red-600' : ''} font-semibold border-r border-b border-indigo-500`}>{product.name}</td>
            <td className="border-b border-indigo-500">{product.price}</td>
        </tr>
    );

}