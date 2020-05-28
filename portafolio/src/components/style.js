import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from "../assets/fondo3.jpg";

export const useStyles = makeStyles(theme => ({
    firm: {
        color: 'white',
        textAlign: "center",
        height: "80vh",
        marginBottom: 150,
        zIndex: 2,
        [theme.breakpoints.down('sm')]: {
            height: "50vh",
            marginBottom: 80
        }
    },
    principal: {
        backgroundImage: `url(${image})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
       
    },
    shadowPrincipal: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(28,28,28,0.8)',
        zIndex: 1
    },

    about: {
        minHeight: "100vh",
        color:"rgba(28,28,28)",
        [theme.breakpoints.down("xs")]:{
         paddingTop:50,
         height:"auto"
        }
    },
    aboutPhoto: {
        background: '#f7484e',
        minHeight: "100vh",
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    },
    navContainer: {
        background: 'rgba(28,28,28)',
        position: "sticky",
        top: 0,
        zIndex: 3,
        paddingTop: 20,
        height: 60,
        color: '#f7484e'

    },
    link: {
        color: "#f7484e",
        textDecoration: "none",
        fontSize: 18
    },

    '@keyframes write1': {
        '5%': {
            strokeDashoffset: 915,
        },
        '60%': {
            strokeDashoffset: 0
        }
    },

    strokeName: {
        strokeDasharray: 915,
        animationName: '$write1',
        animationDuration: '6s',
        animationTimingFunction: 'linear',

    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 330,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 200,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.7,
            },
            '& $imageMarked': {
                opacity: 5,
            },
            '& $imageTitle': {
                border: '2px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    card: {
        height: "100%",
        boxSizing: "border-box"
    },
    contact: {
        background: "#1c1c1c",
        height: '100vh',
        color: "white",
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }

    },
    paper: {
        padding: theme.spacing(3),
        boxShadow: '2px 5px 5px 4px rgba(247,72,78, 0.9)',
        borderRadius: '0px 0px 40px 0px'
    },
    foto:{
        borderRadius: '0px 0px 50px 0px',
        width:250
      },
      project:{
          [theme.breakpoints.down("xs")]:{
              paddingTop:20
          }
      },
      contactCard:{
          [theme.breakpoints.down("xs")]:{
              height:"20vh",
              paddingBottom:50
          }
      }
}));
