import React from 'react';
import "./Welcome.css"
import "./Button"
import Button from './Button';

const Welcome = () => {
    return ( 
        <section className="welcome">
            <h1>Welcome To Italy</h1>
            <Button />
        </section>
     );
}
 
export default Welcome;