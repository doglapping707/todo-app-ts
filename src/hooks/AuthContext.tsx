import { createContext, useState, useContext, ReactNode } from "react";

type AuthContextProps = {
    isAuth: boolean,
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

type childrenProps = {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({
    isAuth: false,
    setIsAuth: () => { }
});

function AuthProvider({ children }: childrenProps) {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }} >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext);
}

export {
    AuthProvider,
    useAuth
}
