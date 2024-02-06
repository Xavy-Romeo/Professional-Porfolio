import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    // rightEffects_Home: {
    //     position: 'fixed',
    //     top: '50px',
    //     right: '0',
    //     bottom: 'auto',
    //     width: '500px',
    //     height: '500px',
    //     borderRadius: '50%',
    //     background: '#f64f59',
    //     filter: 'blur(100px)',
    //     opacity: '0.25',
    //     pointerEvents: 'none',
    //     zIndex: '-1', 
    //     '@media (max-width:767px)': {
    //         width: '200px',
    //         height: '200px'
    //     } 
    // },
    // leftEffects_Home: {
    //     position: 'fixed',
    //     bottom: '50px',
    //     left: '0',
    //     width: '500px',
    //     height: '500px',
    //     borderRadius: '50%',
    //     background: '#c471ed',
    //     filter: 'blur(100px)',
    //     opacity: '0.25',
    //     pointerEvents: 'none',
    //     zIndex: '-1', 
    //     '@media (max-width:767px)': {
    //         width: '200px',
    //         height: '200px'
    //     }  
    // },
    leftLoader_Home: {
        width: '50%',
        height: '100vh',
        background: 'linear-gradient(to right, rgb(18,194,233), rgb(196,113,237))',
        position: 'fixed',
        zIndex: '100000',
        left: '-50%'
    },
    rightLoader_Home: {
        width: '50%',
        height: '100vh',
        background: 'linear-gradient(to right, rgb(196,113,237), rgb(246,79,89))',
        position: 'fixed',
        zIndex: '100000',
        right: '-50%'
    }

}));

export default useStyles;