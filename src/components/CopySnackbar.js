import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

export default function CopySnackbar({ text }) {
	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left'
			}}
			autoHideDuration={5000}
			message={`Copied ${text}`}
			open={true}
		/>
	)
}
