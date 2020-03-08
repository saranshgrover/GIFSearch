import React from 'react'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper
	},
	gridList: {
		width: 500,
		height: 450
	},
	gridTile: {
		overflow: 'hidden'
	}
}))

export default function GifView({ gifs }) {
	const classes = useStyles()
	return (
		<Grid item>
			<div className={classes.root}>
				<GridList cellHeight={300} cols={3}>
					{gifs.map(gif => (
						<GridListTile
							className={classes.gridTile}
							// style={{
							// 	height: gif.images.downsized.height + 'px',
							// 	width: gif.images.downsized.width + 'px'
							// }}
						>
							<img
								src={gif.images.downsized.url}
								alt={gif.title}
								width={300}
								height={300}
							/>
						</GridListTile>
					))}
				</GridList>
			</div>
		</Grid>
	)
}
