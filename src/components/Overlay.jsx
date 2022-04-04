import React from 'react';
import WordList from '../wordlist';
import './styles/Overlay.css';
import generateTest from './generateTest';


function Overlay(props) {
    const testset = generateTest(props.category)
    return(
            <>
            <h1>Welcome to TypeFaster</h1>
            <h2>Begin typing anywhere</h2>
            <textarea id="typedin" name="typedin" rows="4" cols="50">
                {testset}
            </textarea>
            </>
    );
}

export default Overlay;