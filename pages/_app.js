import React from 'react'
import '../styles/global.css'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: '#255957',
        },
        secondary: {
            main: '#BCA371',
        },
    },
})

const App = ({ Component, pageProps }) => (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
)

export default App
