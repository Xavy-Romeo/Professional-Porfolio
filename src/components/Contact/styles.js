import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    // sectionTitleContainer: {
    //     position: 'relative'
    // },
    // sectionTitleShadow: {
    //     fontFamily: 'Londrina Outline, cursive',
    //     textAlign: 'center',
    //     width: '100%',
    //     color: 'black',
    //     fontSize: '120px',
    //     textShadow: '10px 10px 5px rgb(220,220,220)',
    //     opacity: '5%',
    //     fontWeight: 'bold',
    //     textTransform: 'uppercase',
    //     letterSpacing: '2px',
    //     '@media (max-width:750px)': {
    //         fontSize: '80px',
    //     },
    //     '@media (max-width:500px)': {
    //         fontSize: '60px',
    //     },
    //     '@media (max-width:400px)': {
    //         fontSize: '50px',
    //     },
    //     '@media (max-width:335px)': {
    //         fontSize: '44px',
    //     },
    //     '@media (max-width:300px)': {
    //         fontSize: '36px',
    //     }
    // },
    // sectionTitle: {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -30%)',
    //     fontWeight: '600',
    //     textShadow: `1px 1px ${theme.palette.text.primary}`,
    //     '@media (max-width:550px)': {
    //         fontSize: '30px',
    //     },
    //     '@media (max-width:475px)': {
    //         fontSize: '24px',
    //     },
    //     '@media (max-width:400px)': {
    //         fontSize: '20px',
    //     },
    //     '@media (max-width:330px)': {
    //         fontSize: '16px',
    //     }
    // },
    sectionTitleContainer: {
        width: '100%',
        marginTop: '60px',
        '@media (max-width:959px)': {
            marginTop: '10px',
        }
    },
    sectionTitle: {
        textAlign: 'center',
        fontWeight: '600',
        textTransform: 'uppercase',
        width: '100%',
        lineHeight: '1',
        margin: '15px 0 50px 0',
    },
    sectionSubtitle: {
        textAlign: 'center',
        width: '100%',
        lineHeight: '1',
        fontWeight: '400',
        color: 'rgb(18,194,233)'
    },
    contactContainer_Contact: {
        position: 'relative',
        marginBottom: '60px',
        '@media (max-width:959px)': {
            marginBottom: '10px',
        }
    },
    contactImg_Contact: {
        objectFit: 'cover',
        minHeight: '550px',
        height: '80vh',
        borderRadius: '10px'
    },
    contactFormGrid_Contact: {
        position: 'absolute', 
        top: '10%', 
        left: '50%', 
        height: '80%', 
        width: '45%', 
        background: 'rgba(255,255,255,.15)', 
        borderRadius: '10px',
        minHeight: '500px',
        overflow: 'hidden',
        '@media (max-width:1150px)': {
            height: '90%',
            top: '5%',
        },
        '@media (max-width:850px)': {
            background: 'rgba(255,255,255,.8)', 
            left: '5%',
            width: '90%', 
        }
    },
    contactForm_Contact: {
        width: '90%',
        marginTop: '1em'
    },
    contactFormLabel_Contact: {
        marginBottom: '5px',
        textShadow: '1px 1px 3px black',
        color: 'rgba(18,194,233,.8)',
        textTransform: 'uppercase',
        letterSpacing: '1.25px',
        '@media (max-width:850px)': {
            textShadow: 'none',
            color: 'rgba(0,0,0,.9)',
            fontWeight: '600' 
        },
        '@media (max-width:380px)': {
            marginBottom: '0',
        },
    },
    contactFormInputs_Contact: {
        minHeight: '20px',
        borderRadius: '10px',
        border: '2px solid rgb(150,150,150,.4)',
        fontFamily: 'Rubik, sans-serif',
        fontSize: '20px',
        marginBottom: '20px',
        background: 'rgba(255,255,255,.6)',
        color: 'rgba(0,0,0,.87)',
        padding: '5px 15px',
        '&:hover': {
            border: '2px solid rgba(18,194,233,.8)'
        },
        '&:focus': {
            border: '2px solid rgba(255,255,255,.87)',
            backgroundColor: 'rgba(255,255,255,.8)',
            outline: 'none',
        },
        '@media (max-width:380px)': {
            width: '100%', 
        },
    },
    textArea_Contact: {
        '@media (max-width:850px)': {
            height: '300px' 
        },
        '@media (max-width:599px)': {
            height: '175px' 
        },
    },
    sendMessageBtn_Contact: {
        background: 'transparent', 
        border: 'none'
    },
    sendMessage_Contact: {
        display: 'flex',
        alignItems: 'center',
        textShadow: '1px 1px 3px black',
        color: 'rgba(255,255,255,.9)',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: '300',
        '&:hover': {
            color: 'rgba(18,194,233,.8)',
            cursor: 'pointer'
        },
        '@media (max-width:850px)': {
            textShadow: 'none',
            color: 'rgba(0,0,0,.9)',
            fontWeight: '600' 
        },
    },
    sendIcon_Contact: {
        marginLeft: '7px',
        fontSize: 'small'
    }
}));

export default useStyles;