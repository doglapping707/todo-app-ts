import { useQuery } from "@tanstack/react-query"
import * as api from "../api/TaskAPI"

function useTasks() {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: api.getTasks
    });
}

export {
    useTasks
}
