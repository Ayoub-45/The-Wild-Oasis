import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";
export function useGetSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryFn: ["settings"],
    queryFn: getSettings,
  });
  return { isLoading, error, settings };
}
