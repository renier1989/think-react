/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export const SearchBar = ({filterText, onFilterText, onlyStock, onOnlyStock}) => {
    return (
        <div className="bg-slate-300 mb-[2rem] flex flex-col gap-4 p-4 rounded-md shadow-xl w-[40%]">
            <input className="border-2 border-gray-300 rounded-md p-2 outline-none" type="text" placeholder="Search..."
            onChange={e=>{onFilterText(e.target.value)}}
            />
            <div>
                <input type="checkbox"
                name="check"
                id="check"
                onChange={e=>{onOnlyStock(e.target.checked)}}
                />
                <label htmlFor="check"> Only show products in Stock</label>
            </div>
        </div>
    )
}