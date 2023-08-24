import React from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { orderCards, filterCards } from '../../Redux/actions';

export default function Favorites() {
    let myFavoriteCopy = [...useSelector(state => state.myFavorite, shallowEqual)];
    let dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
    };

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    };

    return (
        <div>
            <div>
                <select name="order" onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="B">Descendente</option>
                </select>

                <select name="gender" onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            {myFavoriteCopy.map(fav => (
                <Card
                    name={fav.name}
                    id={fav.id}
                    key={fav.id}
                    gender={fav.gender}
                    image={fav.image}
                />
            ))}
        </div>
    );
}
