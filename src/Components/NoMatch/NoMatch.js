import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import "./NoMatch.css";
import { useHistory } from 'react-router-dom';

const NoMatch = () => {
    const history = useHistory();
    
    return (
        <div className="no-match">
            <div className="no-match-wrapper">
                <SentimentVeryDissatisfiedIcon />
                <h1>404</h1>
                <h6>Page not found</h6>
                <p>This requested url was not found on this server.</p>
                <button onClick={() => history.push("/")} className="btn btn-primary">Go to home page</button>
            </div>
        </div>
    );
};

export default NoMatch;