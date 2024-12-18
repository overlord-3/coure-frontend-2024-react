import { useQuery } from "@tanstack/react-query"
import { characters } from "../api/api"

export const useAllCharacters = (id) => {
	return useQuery({
		queryFn: () => characters.getAllCharacters(id),
		queryKey: ['characters', id],
		select: data => data.data
	})
}