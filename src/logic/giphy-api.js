import axios from 'axios'
import { GIPHY_KEY, GIPHY_URL } from '../consts'

export const search = (keyword, offset = 0) => {
	return axios.get(
		`${GIPHY_URL}/search?api_key=${GIPHY_KEY}&q=${keyword}&offset=${offset}`
	)
}

export const getTrendingGifs = (offset = 0) => {
	return axios.get(
		`${GIPHY_URL}/trending?api_key=${GIPHY_KEY}&offset=${offset}`
	)
}
