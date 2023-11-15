import React from 'react';
import './Navbar.css'
import DropDownCard from './DropDownCard';
const  Navbar = ({ grouping, setGrouping, ordering, setOrdering }) => {
    return (
        <header>
            <DropDownCard grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} />
        </header>
    );
}
export default Navbar;




