import { useState, useEffect, useReducer } from 'react'
import favoriteReducer, { initialState } from '../reducers/characterReducer'
import types from '../types'

export const Characters = () => {

    const [ characters, setChacarters ] = useState([])
    const [favorities, dispatch] = useReducer(favoriteReducer, initialState)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setChacarters(data.results))
    }, [])

    return (
        <>
            <div className="favorities">
                {favorities.favorities.map(i => (
                    <li className="element" key={i.id}>
                        <div className="avatar">
                            <img src={i.image} alt=""/>
                        </div>
                        <div className="quantityCircle">{i.quantity}</div>
                        <button type="button" className="button remove" onClick={() => dispatch({
                            type: types.removeToFavorite,
                            payload: i.id
                        })}>Eliminar</button>
                    </li>
                ))}
            </div>
            <div className="characters">
            
            
                {characters.map((i, index) => (
                        <div className="card" key={i.id}>
                            <div className="avatar">
                                <img src={i.image} alt=""/>
                            </div>
                            <div className="datos">
                                <h2>{i.name}</h2>
                                <h3>Species: <span>{i.species}</span></h3>
                                <h3>Status: <span>{i.status}</span> </h3>
                                <button type="button" className="button add" onClick={() => dispatch({
                                    type: types.addToFavorite,
                                    payload: i
                                })}>Agregar a favoritos</button>
                            </div>
                        </div>
                ))}
            </div>
        </>
    )
}
