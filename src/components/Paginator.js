import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		textAlign: 'center'
	},
	center: {
		marginBottom: '20px'
	}
})

export default function Paginator({ page, setPage, total }) {
	const classes = useStyles()

	const handleNext = () => {
		setPage(Math.min(total, page + 1))
	}

	const handleBack = () => {
		setPage(Math.max(0, page - 1))
	}

	return (
		<>
			<MobileStepper
				variant='progress'
				position='static'
				steps={Math.round(total / 25)}
				activeStep={page}
				className={classes.root}
				nextButton={
					<Button
						size='small'
						onClick={handleNext}
						disabled={25 * (page + 1) >= total}
					>
						Next
						<KeyboardArrowRight />
					</Button>
				}
				backButton={
					<Button
						size='small'
						onClick={handleBack}
						disabled={25 * page <= 0}
					>
						<KeyboardArrowLeft />
						Back
					</Button>
				}
			/>
			<Typography
				gutterBottom
				className={classes.center}
				variant='body1'
				color='primary'
				align='center'
			>{`Page ${page + 1}/${Math.max(
				1,
				Math.round(total / 25)
			)}`}</Typography>
		</>
	)
}
