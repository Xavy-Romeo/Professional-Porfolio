import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    header_Header: {
        background: 'rgba(255,255,255,0)',
        height: '80px',
        boxShadow: 'none',
        justifyContent: 'center',
        '@media (max-width:959px)': {
            height: '40px',
        }
    },
    headerScroll_Header: {
        background: 'rgba(240, 255, 255,0.7)',
        height: '80px',
        justifyContent: 'center',
        '@media (max-width:959px)': {
            height: '40px',
        }
    },
    titleLink_Header:{
        textDecoration: 'none',
    },
    headerTitle_Header: {
        paddingBottom: '5px',
        // fontFamily: 'Kaushan Script, sans-sefif',
        fontWeight: '600',
        letterSpacing: '-2px',
        // textShadow: `2px 2px black`,
        transition: '.3s',
        color: theme.palette.text.primary,
        fontSize: '30px',
        '&:hover': {
            textShadow: '2px 2px 2px rgba(246,79,89,.5)'
        },
        '@media (max-width:599px)': {
            fontSize: '20px',
        },
        // '@media (max-width:350px)': {
        //     fontSize: '34px',
        // },
        // '@media (max-width:305px)': {
        //     fontSize: '30px',
        // }
    },
    navContainer_Header: {
        display: 'flex', 
        justifyContent: 'flex-end',
        paddingRight: '5px'
    },
    hireMeBtnContainer_Header:{
        display: 'flex', 
        justifyContent: 'flex-end'
    },
    hireMeBtnLink_Header: {
        textDecoration: 'none'
    },
    hireMeBtn_Header: {
        color: 'rgb(220,235,235)',
        fontSize: '20px',
        fontWeight: 'medium', 
        borderRadius: '50px 0 50px 50px',
        width: '130px',
        height: '50px',
        background: 'rgb(246,79,89)',
        textAlign: 'center',
        textTransform: 'capitalize',
        '&:hover': {
            boxShadow: '0px 15px 20px 0px rgba(77, 65, 225, 0.15)',
            background: 'rgb(231,64,74)'
        }
    }
}));

export default useStyles;