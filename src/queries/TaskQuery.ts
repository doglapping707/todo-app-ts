import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../api/TaskAPI";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

function useTasks() {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: api.getTasks
    });
}

function useUpdateDoneTask() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: api.updateDoneTask,
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        },
        onError: async () => {
            toast.error("ステータス更新に失敗しました。");
        }
    });
}

function useCreateTask() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: api.createTask,
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            });
            toast.success("タスク登録に成功しました。");
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
                toast.error("タスク登録に失敗しました。");
            }
        }
    });
}

function useUpdateTask() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: api.updateTask,
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
            toast.success("タスク更新に成功しました。")
        },
        onError: async (error: AxiosError) => {
            const data: any = error.response?.data
            if (data.errors) {
                Object.values(data.errors).map(
                    (messages: any) => {
                        messages.map((message: string) => {
                            toast.error(message)
                        })
                    }
                )
            } else {
                toast.error("タスク更新に失敗しました。")
            }
        }
    });
}

function useDeleteTask() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: api.deleteTask,
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
            toast.success("タスク削除に成功しました。")
        },
        onError: async () => {
            toast.error("タスク削除に失敗しました。")
        }
    });
}

export {
    useTasks,
    useUpdateDoneTask,
    useCreateTask,
    useUpdateTask,
    useDeleteTask
}
