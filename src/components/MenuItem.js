import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.

const MenuItem = ({ title, description, price, imageName, setItemCount, track, index, itemCounts }) => {


    const add_one = () => {
        setItemCount(prevItemCounts => {
            const newCounts = [...prevItemCounts];
            newCounts[index]++;
            console.log("the counts", newCounts);
            return newCounts;

        });
        track(price, 'add');
    };

    const sub_one = () => {
        setItemCount(prevItemCounts => {
            const newCounts = [...prevItemCounts];
            if (newCounts[index] > 0) {
                newCounts[index]--;
                track(price, 'sub');
            }
            return newCounts;
        });

    };



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src={imageName} className="b" alt={title} />

                    </div>

                    <div className="col-6">
                        <div className="row">
                            <div className="col-8">
                                <b>{title}</b>
                                <p>{description}</p>
                            </div>
                            <div className="col-3">
                                <p>${price}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                            </div>
                            <div className="col-3">
                                <button className="i" onClick={sub_one}><span className="minus">-</span></button>
                                <p className="counts">{itemCounts}</p>
                                <button className="i" onClick={add_one}>+</button>
                            </div>
                           
                            
                        </div>


                    </div>
                </div>
            </div>

        </div>


    );

};




export default MenuItem;
