import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../api/AuthAPI";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/AuthContext";
import { AxiosError } from "axios";

function useUser() {
    return useQuery({
        queryKey: ['users'],
        queryFn: api.getUser
    });
}

function useRegister() {
    return useMutation({
        mutationFn: api.register,
        onSuccess: async () => {
            toast.success("アカウント登録に成功しました。");
        },
        onError: async (error: AxiosError) => {
            const data: any = error.response?.data;
            if (data.errors) {
                Object.values(data.errors).map(
                    (messages: any) => {
                        messages.map((message: string) => {
                            toast.error(message);
                        });
                    }
                );
            } else {
                toast.error("アカウント登録に失敗しました。");
            }
        }
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
        onError: async (error: AxiosError) => {
            const data: any = error.response?.data;
            if (data.errors) {
                Object.values(data.errors).map(
                    (messages: any) => {
                        messages.map((message: string) => {
                            toast.error(message);
                        });
                    }
                );
            } else {
                console.log(error);
                toast.error("ユーザー名またはパスワードに誤りがあります。");
            }
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
                queryClient.removeQueries({ queryKey: ['tasks'] });
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
    useRegister,
    useLogin,
    useLogout
}
