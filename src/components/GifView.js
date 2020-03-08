import React from 'react'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import { makeStyles } from '@material-ui/styles'
import Paginator from './Paginator'
import { Typography } from '@material-ui/core'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import LinkIcon from '@material-ui/icons/Link'
import ToolTip from '@material-ui/core/Tooltip'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import CopySnackbar from './CopySnackbar'

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
	}
}))

export default function GifView({ page, setPage, gifs }) {
	const classes = useStyles()
	const [hover, setHover] = React.useState(null)
	const [copy, setCopy] = React.useState(null)
	const handleCopy = url => {
		const textArea = document.createElement('textarea')
		textArea.value = url
		textArea.style.position = 'fixed'
		textArea.style.top = 0
		textArea.style.padding = 0
		textArea.style.left = 0
		textArea.style.width = '2em'
		textArea.style.height = '2em'
		document.body.appendChild(textArea)
		textArea.focus()
		textArea.select()
		document.execCommand('copy')
		document.body.removeChild(textArea)
		if (copy === null) {
			setTimeout(() => setCopy(null), 5000)
		}
		setCopy(url)
	}
	return (
		<Grid item>
			{copy && <CopySnackbar text={copy} />}
			{gifs.pagination.total_count > 0 ? (
				<>
					<Paginator
						page={page}
						setPage={setPage}
						total={gifs.pagination.total_count}
					/>
					<div className={classes.root}>
						<GridList cellHeight={300} cols={3}>
							{gifs.data.map(gif => (
								<GridListTile
									onMouseOver={() => setHover(gif.id)}
									key={gif.id}
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
									{hover === gif.id && (
										<GridListTileBar
											title={gif.title}
											actionIcon={
												<>
													<ToolTip title='Go to URL'>
														<IconButton
															onClick={() =>
																window.open(
																	gif.url,
																	'_blank'
																)
															}
														>
															<LinkIcon />
														</IconButton>
													</ToolTip>
													<ToolTip title='Copy to Clipboard'>
														<IconButton
															onClick={() =>
																handleCopy(
																	gif.url
																)
															}
														>
															<FileCopyIcon />
														</IconButton>
													</ToolTip>
												</>
											}
										/>
									)}
								</GridListTile>
							))}
						</GridList>
					</div>
					<Paginator
						page={page}
						setPage={setPage}
						total={gifs.pagination.total_count}
					/>
				</>
			) : (
				<>
					<Typography variant='h4'>{`Sorry :( Couldn't find any gifs`}</Typography>
					<img
						src={
							'https://media.giphy.com/media/dZRI96NcCiAvjWEKBR/giphy.gif'
						}
						alt={`Oh no!`}
					/>
				</>
			)}
		</Grid>
	)
}
