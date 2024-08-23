import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../api/AuthAPI";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/AuthContext";

function useUser() {
    return useQuery({
        queryKey: ['users'],
        queryFn: api.getUser
    });
}

function useLogin() {
    const { setIsAuth } = useAuth();
    return useMutation({
        mutationFn: api.login,
        onSuccess: async (user) => {
            if (user) {
                setIsAuth(true);
            }
        },
        onError: async () => {
            toast.error("ログインに失敗しました。");
        }
    });
}

function useLogout() {
    const { setIsAuth } = useAuth();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: api.logout,
        onSuccess: async (user) => {
            if (user) {
                queryClient.removeQueries({queryKey: ['tasks']});
                setIsAuth(false);
            }
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
