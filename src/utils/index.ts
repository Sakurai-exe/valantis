import { Product } from '../store/productSlice'

export const removeDuplicatesById = (data: Product[]): Product[] => {
	const uniqueIds = new Set()
	const filteredArray = data.filter((item) => {
		if (!uniqueIds.has(item.id)) {
			uniqueIds.add(item.id)
			return true
		}
		return false
	})

    return filteredArray;
}
