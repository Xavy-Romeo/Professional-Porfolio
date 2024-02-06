import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        text: {
            primary: 'rgb(40,40,40)'
        },
        background: {
            default: 'rgb(255, 255, 255)'
        },
    },
    typography: {
        fontFamily: 'Rubik, sans-serif',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1:{
            fontSize:'2.5rem',
            '@media (min-width:960px)': {
                fontSize: '3.125rem'
            }
        },
        h2:{
            fontSize:'2.25rem',
            '@media (min-width:960px)': {
                fontSize: '2.875rem'
            }
        },
        h3:{
            fontSize:'2rem',
            '@media (min-width:960px)': {
                fontSize: '2.5rem'
            }
        },
        h4:{
            fontSize:'1.75rem',
            '@media (min-width:960px)': {
                fontSize: '2.25rem'
            }
        },
        h5:{
            fontSize:'1.5rem',
            '@media (min-width:960px)': {
                fontSize: '1.875rem'
            }
        },
        subtitle1:{
            fontSize:'1.25rem',
            '@media (min-width:960px)': {
                fontSize: '1.5rem'
            }
        },
        subtitle2:{
            fontSize:'1.125rem',
            '@media (min-width:960px)': {
                fontSize: '1.375rem'
            }
        },
        body1:{
            fontSize:'1rem',
            '@media (min-width:960px)': {
                fontSize: '1.25rem'
            }
        },
        body2:{
            fontSize:'0.875rem',
            '@media (min-width:960px)': {
                fontSize: '1.125rem'
            }
        },
        caption:{
            fontSize:'0.625rem',
            '@media (min-width:960px)': {
                fontSize: '0.875rem'
            }
        },
        overline:{
            fontSize:'0.5rem',
            '@media (min-width:600px)': {
                fontSize: '0.75rem'
            },
            '@media (min-width:1280px)': {
                fontSize: '0.875rem'
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1400,
            wide: 1920
        }
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
                padding: '1em',
                borderRadius: '30px',
            }
        }
    },
    props: {
        MuiButton: {
            variant: 'contained',
        }
    }
});

export default theme;