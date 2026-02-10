import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "./order.api";

export const useOrderQuery = (id) => {
  return useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrderById(id),
    enabled: Boolean(id),
    staleTime: 1000,
    refetchInterval: (query) => {
      const status = query.state.data?.status;
      const hasError = query.state.status === "error";

      if (status === "OUT_FOR_DELIVERY" || hasError) {
        return false;
      }

      return 3000;
    },
  });
};