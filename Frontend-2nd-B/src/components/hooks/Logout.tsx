// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
        window.localStorage.clear();
        navigate("/signin");
   

    return null;
};

export default Logout;