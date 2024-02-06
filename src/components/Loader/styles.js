import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    loadingPage_Loader: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 9999,
        background: 'rgb(230,230,230)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    loaded_Loader: {
        height: 0,
        width: 0,
        opacity: 0
    },
    loaderContainer_Loader: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    loadingTitle_Loader: {
        fontSize: '4rem',
        fontFamily: 'Kaushan Script, sans-sefif',
        color: 'rgb(255, 35, 35)',
        fontWeight: 'bold',
        textShadow: '4px 3px rgb(200,200,200)',
        marginBottom: '10px',
        '@media (max-width:500px)': {
            fontSize: '3rem',
        },
    },
    loadingLogo_Loader: {
        height: '200px',
        '@media (max-width:500px)': {
            height: '150px',
        },
    },
    rightEffects_Loader: {
        position: 'fixed',
        top: '50px',
        right: '0',
        bottom: 'auto',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: '#f64f59',
        filter: 'blur(100px)',
        opacity: '0.25',
        pointerEvents: 'none',
        zIndex: '-1', 
        '@media (max-width:767px)': {
            width: '200px',
            height: '200px'
        } 
    },
    leftEffects_Loader: {
        position: 'fixed',
        bottom: '50px',
        left: '0',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: '#c471ed',
        filter: 'blur(100px)',
        opacity: '0.25',
        pointerEvents: 'none',
        zIndex: '-1', 
        '@media (max-width:767px)': {
            width: '200px',
            height: '200px'
        }  
    }
}));

export default useStyles;