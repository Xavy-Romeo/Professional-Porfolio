import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    footer_Footer: {
        paddingTop: '5px',
        borderTop: '1px solid rgba(40,40,40,.1)'
    },
    linksContainer_Footer:{
        marginRight: '50px',
        paddingTop: '5px',
        '@media (max-width:350px)': {
            marginRight: '0'
        },
    },
    icon_Footer: {
        fontSize: '50px',
        marginRight: '7px',
        color: theme.palette.text.primary,
        cursor: 'pointer',
        transition: '.2s ease-in-out',
        '&:hover': {
            color: 'rgb(246,79,89)'
        }
    },
    copyText_Footer:{
        fontWeight: '800',
        letterSpacing: '1.25px' 
    }
}));

export default useStyles;