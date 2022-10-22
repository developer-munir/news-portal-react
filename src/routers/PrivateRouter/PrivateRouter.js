import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import LoadinSpinner from '../../pages/Shared/Spinner/LoadinSpinner';

const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <LoadinSpinner></LoadinSpinner>;
    }
    if (!user) {
        return (
          <Navigate to="/login" state={{ from: location }} replace></Navigate>
        );
    }
    return children;
};

export default PrivateRouter;