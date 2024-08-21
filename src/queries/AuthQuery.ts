// import { useContext } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import * as api from "../api/AuthAPI";
import { toast } from "react-toastify";
// import { AuthContext } from "../hooks/AuthContext";

function useUser() {
    return useQuery({
        queryKey: ['users'],
        queryFn: api.getUser
    });
}

function useLogin() {
    // const useAuth = useContext(AuthContext);
    return useMutation({
        mutationFn: api.login,
        onSuccess: async (user) => {
            if (user) {
                // useAuth.setIsAuth(true);
                console.log(user);
            }
        },
        onError: async () => {
            toast.error("ログインに失敗しました。");
        }
    });
}

function useLogout() {
    // const useAuth = useContext(AuthContext);
    return useMutation({
        mutationFn: api.logout,
        onSuccess: async (user) => {
            // if (user) {
            //     useAuth.setIsAuth(false);
            // }
            console.log(user);
        },
        onError: async () => {
            toast.error("ログアウトに失敗しました。");
        }
    });
}

export {
    useUser,
    useLogin,
    useLogout
}
