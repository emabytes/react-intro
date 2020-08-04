import React from 'react';
import "./OneColumnReverse.css"
import Button from './Button';

const OneColumnReverse = () => {
    return ( 
        <article className="reverse">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum consequatur blanditiis dicta dolorum aperiam ipsum aliquam repellendus. Enim, at unde!</p>
            <Button />
            <img src="https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="photo" />
        </article>
     );
}
 
export default OneColumnReverse;