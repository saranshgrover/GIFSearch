import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	text: {
		marginLeft: '1vw'
	}
}))

export default function QueryView({ query, total }) {
	const classes = useStyles()
	return (
		<Grid item>
			<Typography
				className={classes.text}
				variant='h2'
			>{`${query}`}</Typography>
			<Typography
				className={classes.text}
				color='secondary'
				variant='subtitle1'
			>{`${total} gifs`}</Typography>
		</Grid>
	)
}
