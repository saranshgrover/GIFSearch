import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	paper: {
		// 99 since padding takes 1vw
		width: '90vw'
	}
}))

export default function QueryView({ query, total }) {
	const classes = useStyles()
	return (
		<Grid item>
			<Paper className={classes.paper} variant='outlined'>
				<Typography variant='h4'>{`Found ${total} results for: ${query}`}</Typography>
			</Paper>
		</Grid>
	)
}
