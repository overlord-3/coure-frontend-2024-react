import { useQuery } from "@tanstack/react-query"
import { characters } from "../api/api"

export const useAllCharacters = (params) => {
	return useQuery({
		queryFn: () => characters.getAllCharacters(params),
		queryKey: ['characters', params],
		select: data => data.data
	})
}