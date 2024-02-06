import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    mainModalContainer_ProjectModal: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    },
    modalContainer_ProjectModal: {
        position: 'relative',
        borderRadius: '10px',
        padding: '50px 80px',
        // background: 'linear-gradient(145deg,rgb(225,235,235),rgb(245,255,255))', 
        background: 'linear-gradient(145deg, #e2e8ec, #ffffff)',
        boxShadow: theme.shadows[10],
        maxWidth: '1200px',
        width: '95%',
        '@media (max-width:959px)': {
            padding: '30px',
        },
        '@media (max-width:340px)': {
            padding: '15px',
        }
    },
    closeModalButton_ProjectModal: {
        position: 'absolute',
        right: '4%',
        top: '2%',
        zIndex: '999999999999999999',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid transparent',
        transition: 'all .15s ease-in-out',
        '&:hover': {
            boxShadow: '1px 1px rgba(0,0,0,.1)',
            border: '1px solid rgba(0,0,0,.1)'
        },
        '@media (max-width:300px)': {
            top: '1%',
        }
    },
    closeIcon_ProjectModal: {
        fontSize: '30px',
        transition: 'all .15s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
            color: 'rgba(246,79,89,.9)'
        },
        '@media (max-width:340px)': {
            fontSize: '20px',
        }
    },
    projectTitle_ProjectModal: {
        fontWeight: '600',
        // textShadow: `1px 1px ${theme.palette.text.primary}`
    },
    mainImgContainer_ProjectModal: {
        display: 'flex',
        justifyContent: 'center',
        margin: '30px 0',
        '@media (max-width:340px)': {
            marginTop: '15px',
        }
    },
    imgContainer_ProjectModal: {
        position: 'relative',
        width: '85%', 
        border: '1px solid rgba(0,0,0,.4)',
        borderRadius: '5px',
        boxShadow: theme.shadows[10],
        '@media (max-width:599px)': {
            width: '100%',
        }
    },
    imgHoverContainer_ProjectModal: {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,.2)',
        height: '100%',
        width: '100%',
        opacity: 0,
        transition: '.2s ease-in-out',
        '&:hover': {
            opacity: 1
        }
    },
    hoverText_ProjectModal: {
        background: 'rgba(0,0,0,.7)', 
        color: 'rgba(255,255,255,.9)',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5px',
        textTransform: 'uppercase',
        fontWeight: '600',
        letterSpacing: '1.5px',
        padding: '10px',
        '&:hover': {
            color: 'rgb(246,79,89)'
        },
        '@media (max-width:500px)': {
            fontSize: '22px'
        },
        '@media (max-width:400px)': {
            fontSize: '20px'
        },
        '@media (max-width:369px)': {
            fontSize: '16px'
        },
        '@media (max-width:300px)': {
            fontSize: '14px'
        },
    },
    rocketMarginRight_ProjectModal: {
        marginRight: '10px'
    },
    rocketMarginLeft_ProjectModal: {
        marginLeft: '10px'
    },
    infoContainer_ProjectModal: {
        height: '100%'
    },
    descriptionTitle_ProjectModal: {
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '1.25px'
    },
    techUsedTitle_ProjectModal: {
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '1.25px',
        marginTop: '15px'
    },
    infoText_ProjectModal: {
        color: 'rgba(40,40,40,.8)'
    },
    linksContainer_ProjectModal: {
        marginTop: '20px'
    },
    launchLink_ProjectModal: {
        textDecoration: 'none',
        color: 'rgb(246,79,89)'
    },
    githubLink_ProjectModal: {
        textDecoration: 'none',
        marginLeft: '40px',
        color: 'rgb(246,79,89)',
        '@media (max-width:959px)': {
            marginLeft: '30px',
        },
        '@media (max-width:594px)': {
            marginLeft: '0',
            width: '100%'
        },
    },
    linkTypography_ProjectModal: {
        textTransform: 'uppercase',
        fontWeight: '600',
        letterSpacing: '2px',
        display: 'flex', 
        alignItems:'center',
        '@media (max-width:300px)': {
            fontSize: '16px'
        },
    },
    linkIcon_ProjectModal: {
        marginRight: '5px'
    }
}));

export default useStyles;