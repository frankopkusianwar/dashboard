import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'

const Home = () => {
    return (
        <div>
            <Nav />
            <div className="input-group search-form">
                <div className="form-outline">
                    <input type="search" placeholder="search product name, SKU" id="form1" className="form-control" />
                </div>
                <button type="button" className="btn btn-primary">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="add-product mt-3"><p>If product does not exist <Link to="/product">Add product</Link></p></div>
        </div>
    );
}

export default Home
