import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav'


const Product = () => {
    return(
        <div>
            <Nav />
            <form>
                <div className="row mt-5 w-50 product-form">
                    <div className="col">
                        <select name="category" id="category">
                            <option value="category">--select category--</option>
                            <option value="Desktops">Desktops</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Camera">Camera</option>
                            <option value="Video Camera">Video Camera</option>
                        </select>   
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Title"/>
                    </div>
                </div>
                <div className="row mt-4 w-50 product-form">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="SKU"/>
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Price"/>
                    </div>
                </div>
                <div className="row mt-4 w-50 product-form">
                    <div class="col">
                        <textarea className="form-control" placeholder="content"></textarea>
                    </div>
                </div>
                <div className="row mt-4 w-50 product-form">
                    <div class="col">
                        <button className="btn btn-primary">Submit Product Information</button>
                    </div>
                    <div className="mt-3"><Link to="/">Back to home</Link></div>
                </div>
            </form>
        </div>
    );
}

export default Product
