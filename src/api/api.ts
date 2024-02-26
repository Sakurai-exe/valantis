import md5 from 'md5'

const generateXAuth = () => {
	const password = 'Valantis'
	const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '')
	const xAuth = String(md5(`${password}_${timestamp}`))
	return xAuth
}

export enum Api {
	GetIds = 'get_ids',
	GetItems = 'get_items',
	GetFields = 'get_fields',
	Filter = 'filter',
}

export async function fetchData(
	action: string,
	params?:{}
): Promise<number[]> {
	const response = await fetch('http://api.valantis.store:40000/', {
		method: 'POST',
		headers: {
			'X-Auth': generateXAuth(),
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			action: action,
			params: params,
		}),
		mode: 'cors',
	})
	if (!response.ok) {
		throw new Error('Failed to fetch product ids')
	}
	const data = await response.json()
	return data.result
}
