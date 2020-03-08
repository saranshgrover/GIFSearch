import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import GifView from './GifView'
import QueryView from './QueryView'
import Search from './Search'
import Header from './Header'
import { theme } from '../consts'
import { LinearProgress } from '@material-ui/core'
import { getTrendingGifs, search } from '../logic/giphy-api'
import Grid from '@material-ui/core/Grid'

function App() {
	const [gifs, setGifs] = React.useState(null)
	React.useEffect(() => {
		console.log(gifs)
	}, [gifs])
	const [query, setQuery] = React.useState(null)
	const [page, setPage] = React.useState(0)
	React.useEffect(() => {
		if (query === null) {
			getTrendingGifs(page * 25).then(resp => setGifs(resp.data))
		} else {
			search(query, page * 25).then(resp => setGifs(resp.data))
		}
	}, [query, page])
	return (
		<ThemeProvider theme={createMuiTheme(theme)}>
			<CssBaseline />
			<Header />
			<Grid
				container
				direction='column'
				alignItems='flex-start'
				spacing={2}
				xs={12}
				style={{ overflow_x: 'hidden' }}
			>
				<Search setPage={setPage} setQuery={setQuery} />
				{gifs && gifs.pagination.total_count > 0 && (
					<QueryView
						query={query ? query : 'Trending'}
						total={gifs.pagination.total_count}
					/>
				)}
				{gifs ? (
					<GifView page={page} setPage={setPage} gifs={gifs} />
				) : (
					<LinearProgress />
				)}
			</Grid>
		</ThemeProvider>
	)
}

export default App
