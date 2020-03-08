import teal from '@material-ui/core/colors/teal'
import blueGrey from '@material-ui/core/colors/blueGrey'

export const typography = {
	fontFamily: [
		'Playfair Display',
		'Open Sans',
		'"Helvetica Neue"',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"'
	].join(',')
}

export const theme = {
	palette: {
		primary: teal,
		secondary: blueGrey,
		type: 'dark'
	},
	typography: typography
}

// This should npot be stored here but rather as an environmental variable but is ok for testing purposes
export const GIPHY_KEY = '6ZEIC4MKQ7OqhfHtQcozKadSUqKXuExS'

export const GIPHY_URL = 'https://api.giphy.com/v1/gifs'
