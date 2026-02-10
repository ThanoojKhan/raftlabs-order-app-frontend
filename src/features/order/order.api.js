import api from "../../api/client";

export const placeOrder = async (payload) => {
    const { data } = await api.post("/orders", payload);
    return data;
};

export const getOrderById = async (id) => {
    const { data } = await api.get(`/orders/${id}`);
    return data.order;
};