import type { FC, JSX } from "react";
import { useCluesStore } from "../hooks/useCluesStore";
import { Navigate } from "react-router-dom";

interface Props {
    children: JSX.Element;
}

export const ProtectedRoute: FC<Props> = ( { children } ) => {
    const loginResult = useCluesStore( ( state ) => state.loginResult );
    return loginResult === "failed" ? children : <Navigate to="/" replace />;
};;