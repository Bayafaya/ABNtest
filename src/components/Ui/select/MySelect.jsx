import React from 'react'

function MySelect({value, onChange }) {
    
    return (
        <select
            name="product"
            className='product'
            value={value}
            onChange={e => onChange(e.target.value)}
        >

         <option value="939">TEZАКЧА-MOBILE</option>
         <option value="95">TEZАКЧА</option>
        </select>
    )
}

export default MySelect
