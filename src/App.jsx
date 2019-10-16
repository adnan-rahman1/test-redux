import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
    const isLoggedin = useSelector(state => state.userReducer);
    return (
    <div>
        { isLoggedin && <h1>Is logged in</h1> }
    </div>
    );
}

export default App;