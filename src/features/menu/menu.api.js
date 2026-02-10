import api from "../../api/client";

export const fetchMenu = async () => {
    const { data } = await api.get("/menu");
    return data.menu;
};