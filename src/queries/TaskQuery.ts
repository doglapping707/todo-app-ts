import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../api/TaskAPI";
import { toast } from "react-toastify";

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
            toast.error("Update failed")
        }
    });
}

export {
    useTasks,
    useUpdateDoneTask
}
