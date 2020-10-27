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
                <option className="option" value="title-ascending" >&nbsp; Title, A-Z &nbsp;</option>
                <option value="title-descending">&nbsp; Title, Z-A &nbsp;</option>
                <option value="user-ascending">&nbsp; User, A-Z &nbsp;</option>
                <option value="user-descending">&nbsp; User, Z-A &nbsp;</option>
            </select>
        </form>
    )
}

export default Sort