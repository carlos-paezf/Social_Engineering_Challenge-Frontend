import type { FC, JSX } from "react";
import { useCluesStore } from "../store/useCluesStore";
import { Navigate } from "react-router-dom";

interface Props {
    condition: "pending" | "success" | "failed";
    children: JSX.Element;
}

export const ProtectedRoute: FC<Props> = ( { condition, children } ) => {
    const loginResult = useCluesStore( ( state ) => state.loginResult );
    return loginResult === condition ? children : <Navigate to="/" replace />;
};;