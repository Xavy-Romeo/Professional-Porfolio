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
        margin: '15px 0 50px 0'
    },
    sectionSubtitle: {
        textAlign: 'center',
        width: '100%',
        lineHeight: '1',
        fontWeight: '400',
        color: 'rgb(18,194,233)'
    },
    modal_Project: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:'rgba(255, 255, 255, .8)'
    },
    sampleWorkTitleContainer_Portfolio: {
        marginBottom: '30px'
    },
    sampleWorkTitle_Portfolio: {
        fontWeight: '600',
        '@media (max-width:430px)': {
            fontSize: '20px'
        },
        '@media (max-width:325px)': {
            fontSize: '16px'
        },
    },
    sampleWorkText_Portfolio: {
        textAlign: 'center', 
        width: '64%', 
        marginTop: '15px',
        '@media (max-width:959px)': {
            width: '100%',
        },
        '@media (max-width:599px)': {
            textAlign: 'start',
        },
    },
    projectGrid_Portfolio: {
        borderRadius: '10px', 
        height: '100%', 
        width: '100%', 
        padding: '5% 0', 
        // background: 'linear-gradient(145deg,rgb(225,235,235),rgb(245,255,255))', 
        // boxShadow: '5px 5px 15px rgb(209,217,230),-5px -5px 15px rgb(245,255,255)',
        background: 'linear-gradient(145deg, #e2e8ec, #ffffff)',
        boxShadow: '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
        '&:hover': {
            // background: 'linear-gradient(145deg, rgba(150,150,150,.5), rgba(255,255,255,1))'
            background: 'linear-gradient(145deg, #ffffff, #e2e8ec)'
        }
    },
    imgProjectContainer_Portfolio: {
        position: 'relative', 
        heigth: '100%', 
        width: '90%', 
        marginBottom: '15px',
        border: `1px solid rgba(40,40,40,.3)`,
        borderRadius: '3px'
    },
    imgProject_Portfolio: {
        borderRadius: '3px'
    },
    imgHoverContainer_Portfolio: {
        background: 'rgba(0,0,0,.7)',
        position: 'absolute', 
        top: 0, 
        left: 0,                                              
        height: '100%', 
        width: '100%',
        transition: '.2s ease-in-out',
        opacity: '0',
        '&:hover': {
            opacity: '1'
        }
    },
    infoProjectHoverContainer_Portfolio: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
    },
    infoProjectHover_Portfolio: {
        height: '100%',
        width: '100%',
        color: 'rgba(255,255,255,.9)',
        cursor:'pointer'
    },
    viewProjectHover_Portfolio: {
        letterSpacing: '2px', 
        textTransform: 'uppercase', 
        color: 'rgba(18,194,233,1)',
        '&:hover': {
            color: 'rgba(18,194,233,.5)'
        }
    },
    projectInfoContainer_Portfolio: {
        width: '90%'
    },
    projectAppTitle_Project: {
        fontWeight: '600'
    },
    projectTitle_Project: {
        fontWeight: '700'
    },
    techUsed_Project: {
        fontWeight: '600', 
        letterSpacing: '1.5px', 
        textTransform: 'uppercase'
    },
    techUsedInfo_Project: {
        color: 'rgba(40,40,40,.7)', 
        height: '60px',
        '@media (max-width:959px)': {
            fontSize: '12px',
        },
    },
    viewProjectContainer_Project: {
        display: 'flex', 
        marginTop: '20px'
    },
    viewProjectLink_Project: {
        textDecoration: 'none',
        cursor: 'pointer'         
    },
    viewProjectLinkTypography_Project: {
        color: theme.palette.text.primary, 
        fontWeight: '600', 
        display: 'flex', 
        alignItems: 'center', 
        padding:'5px 0',
        textTransform: 'uppercase', 
        letterSpacing: '2px'
    },
    viewProjectArrow_Portfolio: {
        margin: '0 2px 0 7px'
    },
    seeMoreContainer_Portfolio: {
        marginTop: '20px',
        marginBottom: '50px',
        '@media (max-width:959px)': {
            marginBottom: '10px',
        },
    },
    seeMoreHereLink_Portfolio: {
        textDecoration: 'none', 
        marginLeft: '4px', 
        color: 'rgb(246,79,89)',
        '&:hover': {
            opacity: '.7'
        }
    }
}));

export default useStyles;