import { useQuery } from "@tanstack/react-query";
import { fetchMenu } from "./menu.api";

export const useMenuQuery = () => {
    return useQuery({
        queryKey: ["menu"],
        queryFn: fetchMenu,
    });
};