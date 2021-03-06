import React from 'react'
import Header from './Header'

function NewBeer(props) {
    return (
        <div className="container">
        <Header/>
        <form onSubmit={props.onAdd} className="form">
            <label className="form-copy">Name:</label>
            <input className="form-field" name="name" type="text" placeholder="Enter name"></input>

            <label className="form-copy">Tagline:</label>
            <input className="form-field" name="tagline" type="text" placeholder="Enter tagline" ></input>

            <label className="form-copy">First brew date:</label>
            <input className="form-field" name="first_brewed" type="text" placeholder="Enter first brewed date" ></input>

            <label className="form-copy">Brew tips:</label>
            <input className="form-field" name="brewers_tips" type="text" placeholder="Enter brewer tips" ></input>

            <label className="form-copy">Attenuation level:</label>
            <input className="form-field" name="attenuation_level" type="number" min="0" placeholder="Enter attenuation level" ></input>

            <label className="form-copy">Contributed by:</label>
            <input className="form-field" name="contributed_by"  type="text" placeholder="Enter description"></input>

            <label className="form-copy">Description:</label>
            <input className="form-field-description" name="description"  type="text" placeholder="Enter description" ></input>

            <button className="form-button" type="submit">Submit</button>
        </form>
        </div>
    )
}


export default NewBeer;