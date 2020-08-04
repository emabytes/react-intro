import React from 'react';
import "./OneColumn.css"
import Button from './Button';

const OneColumn = () => {
    return ( 
        <article className="column">
            <img src="https://images.unsplash.com/photo-1535063406830-27dfae54262a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="photo" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum consequatur blanditiis dicta dolorum aperiam ipsum aliquam repellendus. Enim, at unde!</p>
            <Button />
        </article>
     );
}
 
export default OneColumn;

