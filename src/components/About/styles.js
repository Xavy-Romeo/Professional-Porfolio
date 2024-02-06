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
    aboutTextContainer_About: {
        marginBottom: '120px',
        display: 'flex',
        justifyContent: 'center',
        '@media (max-width:959px)': {
            marginBottom: '50px',
        }
    },
    aboutText_About: {
        marginBottom: '10px',
        width: '65%',
        textAlign: 'center',
        '@media (max-width:599px)': {
            width: '100%',
            textAlign: 'start'
        },
        '@media (max-width:330px)': {
            fontSize: '14px',
        }
    },
    aboutTextSpan_About: {
        fontWeight: '600',
        '@media (max-width:330px)': {
            fontSize: '14px',
        }
    },
    profileImgContainer_About: {
        height: '400px',
        '@media (max-width:1279px)': {
            display: 'flex',
            justifyContent: 'center'
        },
        '@media (max-width:500px)': {
            height: '300px'
        },
        '@media (max-width:330px)': {
            height: '240px'
        }
    },
    profileImg_About: {
        borderRadius: '50%',
        boxShadow: theme.shadows[10]
    },
    linkContainer_About: {
        width: '400px', 
        margin: '25px 0',
        '@media (max-width:1279px)': {
            width: '100%'
        },
    },
    emailContainer_About: {
        display: 'flex', 
        alignItems: 'flex-end',
        marginBottom: '10px',
        cursor: 'pointer',
        textDecoration: 'none',
        color: theme.palette.text.primary,
        '&:hover': {
            color: 'rgb(246,79,89)'
        },
        '@media (max-width:330px)': {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    emailTitle_About: {
        display: 'flex', 
        alignItems: 'center', 
        marginRight: '10px', 
        letterSpacing: '1.25px', 
        textTransform: 'uppercase',
        '@media (max-width:330px)': {
            marginRight: '0',
        },
    },
    emailIcon_About: {
        marginRight: '5px'
    },
    email_About: {
        fontWeight: '500'
    },
    socialIcon_About: {
        height: '35px',
        width: '35px',
        marginRight: '20px',
        textDecoration: 'none',
        color: theme.palette.text.primary,
        '&:hover': {
            color: 'rgb(246,79,89)'
        }
    },
    mySkillsTitle_About: {
        fontWeight: '600', 
        // textShadow: `1px 1px ${theme.palette.text.primary}`,
        marginBottom: '30px'
    },
    skillContainer_About: {
        padding: '25px 0'
    },
    skillName_About: {
        textTransform: 'uppercase'
    },
    downloadContainer_About: {
        display: 'flex', 
        justifyContent: 'center'
    },
    downloadResumeLink_About: {
        display: 'flex', 
        alignItems: 'center', 
        margin: '5px 0', 
        padding: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'rgb(246,79,89)'
    },
    downloadResume_About: {
        textTransform: 'uppercase',
        fontWeight: '600'
    },
    downloadIcon_About: {
        marginLeft: '7px'
    },
    experienceContainer_About: {
        margin: '40px 0 50px 0',
        '@media (max-width:1279px)': {
            display: 'flex',
            justifyContent: 'center'
        },
        '@media (max-width:959px)': {
            marginBottom: '10px',
        }
    },
    experienceColumn_About: {
        '@media (max-width:799px)': {
            paddingRight: '20px'
        },
        '@media (max-width:599px)': {
            textAlign: 'center',
            marginTop: '30px'
        }
    },
    experienceItem_About: {
        margin: '10px 0'
    },
    aboutTitles_About: {
        fontWeight: '500',
        letterSpacing: '1.25px',
        '@media (max-width:670px)': {
            fontSize: '1.09rem'
        },
        '@media (max-width:599px)': {
            fontSize: '1.25rem'
        }
    },
    aboutTitlesBorder_About: {
        borderImage: 'linear-gradient(to left, rgb(18,194,233), rgb(196,113,237), rgb(246,79,89)) 1',
        borderBottom: '2px solid transparent',
        width: '20%',
        marginBottom: '15px',
        '@media (max-width:599px)': {
            width: '100%',
        }
    },
    positionTitle_About: {
        fontWeight: '500'
    }
}));

export default useStyles;