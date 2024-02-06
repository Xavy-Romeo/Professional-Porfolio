import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    topSection_Top: {
        minHeight: '95vh',
        position: 'relative'
    },
    mainGrid_Top: {
        padding: '180px 0 100px 0',
        '@media (max-width:650px)': {
            paddingTop: '70px',
        },
    },
    infoGrid_Top: {
        paddingRight: '20px',
    },
    welcome_Top: {
        textTransform: 'uppercase', 
        fontWeight: 'bold', 
        paddingBottom: '10px',
        color: 'rgb(246,79,89)'
    },
    hiTitle_Top: {
        fontSize: '60px',
        fontWeight: '700',
        paddingBottom: '10px',
        '@media (max-width:1120px)': {
            fontSize: '50px',
        },
        '@media (max-width:959px)': {
            fontSize: '60px',
        },
        '@media (max-width:650px)': {
            fontSize: '50px',
        },
        '@media (max-width:550px)': {
            fontSize: '40px',
        },
        '@media (max-width:450px)': {
            fontSize: '30px',
        },
        '@media (max-width:360px)': {
            fontSize: '24px',
        }
    },
    webDevTitle_Top: {
        fontSize: '60px',
        fontWeight: '700',
        paddingBottom: '10px',
        '@media (max-width:1120px)': {
            fontSize: '50px',
        },
        '@media (max-width:959px)': {
            fontSize: '60px',
        },
        '@media (max-width:650px)': {
            fontSize: '50px',
        },
        '@media (max-width:550px)': {
            fontSize: '40px',
        },
        '@media (max-width:450px)': {
            fontSize: '30px',
        },
        '@media (max-width:360px)': {
            fontSize: '24px',
        }
    },
    info_Top: {
        maxWidth: '90%',
        color: 'rgba(40,40,40,.7)',
        paddingBottom: '10px',
        '@media (max-width:1120px)': {
            fontSize: '16px',
        },
        '@media (max-width:959px)': {
            fontSize: '20px',
            maxWidth: '100%',
        },
        '@media (max-width:650px)': {
            fontSize: '16px',
        }
    },
    sayHiLink_Top: {
        textDecoration: 'none'
    },
    sayHiLinkSpan_Top: {
        color: theme.palette.text.primary, 
        letterSpacing: '2px', 
        textTransform: 'uppercase'
    },
    handWave_Top: {
        marginLeft: '5px',
        paddingTop: '6px'
    },
    // signature_Top: {
    //     fontFamily: 'Kaushan Script, sans-sefif', 
    //     fontWeight: 'bold', 
    //     transform: 'skewY(-5deg)', 
    //     paddingBottom: '5px', 
    //     display: 'flex', 
    //     justifyContent: 'center', 
    //     paddingRight: '100px', 
    //     textShadow: '4px 4px 8px rgb(50,50,50,.2)',
    //     '@media (max-width:959px)': {
    //         paddingRight: '0',
    //     }
    // },
    imageContainer_Top: {
        position: 'relative',
        '@media (max-width:959px)': {
            justifyContent: 'center',
            marginTop: '40px'
        }
    },
    imageDiv_Top: {
        height: '700px',
        width: '467px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        boxShadow: theme.shadows[10],
        transform: 'rotate(7deg)', 
        '@media (max-width:1499px)': {
            height: '600px',
            width: '400px',
            marginRight: '40px'
        },
        '@media (max-width:1200px)': {
            height: '550px',
            width: '367px'
        },
        '@media (max-width:959px)': {
            height: '100%',
            transform: 'rotate(0deg)',
            marginRight: '0'
        }
    },
    image_Top: {
        height: '700px',
        maxHeight: '900px',
        objectFit: 'cover',
        objectPosition: 'top',
        borderRadius: '10px',
        '@media (max-width:1499px)': {
            height: '100%'
        }
    },
    imageBack_Top: {
        position: 'absolute',
        top: 30,
        left: -20,
        background: 'rgba(18,194,233,.2)',
        transform: 'rotate(-7deg)',
        height: '700px',
        width: '467px',
        borderRadius: '10px',
        zIndex: '-1',
        '@media (max-width:1499px)': {
            height: '600px',
            width: '400px'
        },
        '@media (max-width:1200px)': {
            height: '550px',
            width: '367px'
        },
        '@media (max-width:959px)': {
            display: 'none'
        }
    },
    square_Top: {
        position: 'absolute',
        height: '450px',
        width: '350px',
        borderTop: '20px solid transparent',
        borderBottom: '20px solid rgba(0,0,0,.8)',
        borderRight: '20px solid rgba(0,0,0,.8)',
        top: '300px',
        left: 0,
        zIndex: '-1',
        '@media (max-width:1499px)': {
            top: '250px',
        },
        '@media (max-width:1200px)': {
            height: '400px',
        },
        '@media (max-width:1120px)': {
            width: '300px',
        },
        '@media (max-width:959px)': {
            display: 'none'
        }
    },
    scrollDownBox_Top: {
        width: '100%',
        '@media (max-width:959px)': {
            display: 'none'
        }
    },
    scrollDown_Top: {
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center', 
        fontSize: '14px',
        width: '116px',
        border: `1px solid ${theme.palette.text.primary}`,
        borderRadius: '20px',
        padding: '2px 8px'
    },
    scrollIcon_Top: {
        marginRight: '5px',
    }
}));

export default useStyles;