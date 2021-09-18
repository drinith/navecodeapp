import React, {useContext} from 'react';
import { useApp } from '../../Context';

const HomePage = () => {
    const userObject = useApp();
    console.log(userObject);
    return (
        <div>
            Home Page
        </div>
    )
}

export default HomePage;