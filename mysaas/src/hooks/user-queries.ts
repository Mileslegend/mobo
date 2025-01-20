import { getAllAutomations } from "@/actions/automations"
import { useQuery } from "@tanstack/react-query"

export const useQueryAutomations = async () => {
    return useQuery(
        {
            queryKey: ['user-automations'],
            queryFn: getAllAutomations
        }
    )
}