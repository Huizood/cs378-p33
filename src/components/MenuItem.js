import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price, imageName}) => {
    return (
        <div>
            <div className ="container">
                <div className="row">
                    <div className="col-4">
                        <img src={'images/' + imageName} className = "b" alt={title} />
                    </div>
                    <div className="col-6">
                        <b>{title}</b>
                        <p>{description}</p>
                        <div className="row">
                            <div className="col">
                                <p>${price}</p>
                            </div>
                            <div className="col">
                            </div>
                            <div className="col">
                                <button className="button">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default MenuItem;
