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
    testimonialsContainer_Testimonials: {
        marginBottom: '50px',
        '@media (max-width:959px)': {
            marginBottom: '10px',
        }
    },
    testimonialContainer_Testimonials: {
        borderRadius: '10px', 
        height: '100%', 
        width: '100%',
        // background: 'linear-gradient(145deg,rgb(225,235,235),rgb(245,255,255))', 
        // boxShadow: '5px 5px 15px rgb(209,217,230),-5px -5px 15px rgb(245,255,255)',
        background: 'linear-gradient(145deg, #e2e8ec, #ffffff)',
        boxShadow: '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
        padding: '40px',
        '@media (max-width:599px)': {
            padding: '20px',
        },
        '@media (max-width:400px)': {
            padding: '10px',
        }
    },
    quoteIcon_Testimonials: {
        fontSize: '40px', 
        color: 'rgb(246,79,89)'
    },
    quoteText_Testimonials: {
        color: 'rgba(40,40,40,.7)',
        height: '220px',
        margin: '20px 0',
        '@media (max-width:1279px)': {
            height: '120px'
        },
        '@media (max-width:959px)': {
            fontSize: '14px',
            height: '180px'
        },
        '@media (max-width:650px)': {
            fontSize: '12px',
        },
        '@media (max-width:450px)': {
            height: '220px'
        },
        '@media (max-width:375px)': {
            height: '270px'
        },
        '@media (max-width:315px)': {
            height: '360px'
        },
    },
    imgBox_Testimonials: {
        height: '60px'
    },
    img_Testimonials: {
        borderRadius: '50%',
        border: '2px solid rgb(246,79,89)'
    },
    nameContainer_Testimonials: {
        marginLeft: '10px'
    },
    name_Testimonials: {
        fontWeight: '500'
    }
}));

export default useStyles;