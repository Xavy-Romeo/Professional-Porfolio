import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    menuIcon_Nav: {
        fontSize: '60px', 
        color: 'black',
        '@media (max-width:959px)': {
            fontSize: '30px', 
        }
    },
    listItem_Nav: {
        listStyleType: 'none',
    },
    navLink_Nav: {
        margin: '0 15px',
        padding: '5px',
        textDecoration: 'none'
    },
    navLinkSpan_Nav: {
        color: theme.palette.text.primary,
    }
}));

export default useStyles;