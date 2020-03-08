import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import FilledInput from '@material-ui/core/FilledInput'
import { FormControl, IconButton } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	main: {
		overflow: 'hidden'
	},
	button: {
		width: '10vw'
	},
	input: {
		width: '90vw',
		marginLeft: '0.5vw'
	}
}))

export default function Search({ setQuery }) {
	const classes = useStyles()
	const [search, setSearch] = React.useState('')
	const handleSubmit = e => {
		e.preventDefault()
		search === '' ? setQuery(null) : setQuery(search)
	}
	return (
		<Grid item>
			<Grid className={classes.main} container alignItems='flex-end'>
				<Grid item>
					<form onSubmit={handleSubmit}>
						<FormControl className={classes.input}>
							<InputLabel>{`Search`}</InputLabel>
							<FilledInput
								value={search}
								onChange={e => setSearch(e.target.value)}
								fullWidth
								label='Search for a GIF'
							/>
						</FormControl>
					</form>
				</Grid>
				<Grid item>
					<IconButton color='primary' onClick={handleSubmit}>
						<SearchIcon />
					</IconButton>
				</Grid>
			</Grid>
		</Grid>
	)
}
