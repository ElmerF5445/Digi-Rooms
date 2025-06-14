import {Navigate} from 'react-router-dom';

export default function ProtectedRoute({children}){
    const Token = localStorage.getItem("Token");
    if (!Token) {
        return <Navigate to="/" replace/>
    } else {
        return children;
    }
}