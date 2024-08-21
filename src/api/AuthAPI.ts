import { User } from "../types/User";
import useCreateAxios from "../hooks/InstanceFactory";

async function getUser() {
    const { data } = await useCreateAxios().get<User>(`api/user`);
    return data;
}

async function login({ email, password }: { email: string, password: string }) {
    await useCreateAxios().get('sanctum/csrf-cookie');
    const { data } = await useCreateAxios().post<User>(`api/login`, { email, password });
    return data;
}

async function logout() {
    const { data } = await useCreateAxios().post<User>(`api/logout`);
    return data;
}

export {
    getUser,
    login,
    logout
}
