import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
export function useCreateCabin() {
  const QueryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("Cabin created successfully");
      QueryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: () => toast.onError("Cabin cannot be created"),
  });
  return { isCreating, createCabin };
}
