import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    sectionTitleContainer: {
        position: 'relative'
    },
    sectionTitleShadow: {
        fontFamily: 'Londrina Outline, cursive',
        textAlign: 'center',
        width: '100%',
        color: 'black',
        fontSize: '120px',
        textShadow: '10px 10px 5px rgb(220,220,220)',
        opacity: '5%',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
    },
    sectionTitle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -30%)',
        fontWeight: '600',
        textShadow: `1px 1px ${theme.palette.text.primary}`
    },
    downloadResumeLink_Resume: {
        display: 'flex', 
        alignItems: 'center', 
        marginTop: '20px', 
        padding: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        color: theme.palette.text.primary
    },
    downloadResume_Resume: {
        textTransform: 'uppercase',
        fontWeight: '600'
    },
    downloadIcon_Resume: {
        marginLeft: '5px'
    }
}));

export default useStyles;