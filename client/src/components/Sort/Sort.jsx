import React from 'react'
import './Sort.css'

const Sort = (props) => {

    const handleChange = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <form className="sort-container" onSubmit={props.handleSubmit}>
            <label htmlFor="sort">SORT BY:</label>
            <select className="sort" onChange={handleChange}>
                <option className="option" value="title-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
                <option value="title-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
                <option value="user-ascending">&nbsp; Price, low to high &nbsp;</option>
                <option value="user-descending">&nbsp; Price, high to low &nbsp;</option>
            </select>
        </form>
    )
}

export default Sort