import React from 'react'
import { Grid, Typography, Box, Paper} from '@material-ui/core'
import { useStyles } from './style'
import Navbar from './navbar'
import photo from '../assets/foto-caro.jpg'
import { projectImages } from '../information/information'
import Card from './card'
import logo from '../assets/logo_caro-01.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';

export const Landing = () => {
    const classes = useStyles()
     return (
        <Box>
            <Grid item xs={12} className={classes.navContainer}>
                <Navbar />
            </Grid>
            <Grid container className={classes.shadowPrincipal}></Grid>
            <Grid container justify="center" alignItems="center" className={classes.principal}>
                <Grid item xs={12} md={12} className={classes.firm}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-150.924 370.353 548.489 159.86">
                        <path className={classes.strokeName} fill="none" stroke="white" stroke-width="4.5" stroke-align="center" stroke-linecap="round"
                            stroke-linejoin="round" d="M51.494,375.859c-0.361,6.059-0.928,154.471,0.112,139.244" />
                        <path className={classes.strokeName} fill="none" stroke="white" stroke-width="4.5" stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M78.591,407.725c1.312,22.307-22.823,30.685-40.917,38.995v0.438c28.433,6.559,63.44,14.872,83.997,37.178" />
                        <path className={classes.strokeName} fill="none" stroke="white" stroke-width="4.5" stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M107.581,428.161c-10.663-3.553-25.783,30.933-12.163,31.759c9.906,0.412,10.873-18.834,13.134-26.911 c-5.65,11.058,3.828,48.292,20.075,6.995,c0.747,3.256,1.494,6.104,2.989,8.952 c3.738-2.848,5.608-10.173,10.841-9.766c4.485,0,3.991,5.186,8.477,5.594c4.111,0.408,8.078-11.094,22.939-10.447 c-8.399-1.615-24.232,8.725-13.569,12.278c11.309,2.907,13.178-9.46,14.674-14.343c1.494-5.29,1.200-89.200," />
                    </svg>
                    <Typography variant="h5">Front-End Developer</Typography>
                </Grid>


            </Grid>

            {/* About */}
            <Grid container justify="center" alignItems="center" className={classes.about} id="about">
                <Grid item xs={12} md={6}>
                    <Grid container justify="center" spacing={2}>
                      
                    <Grid item xs={10}>
                    <Typography variant="body1">
                    ¡Hola! Mi nombre es Carolina,
              
                   Front-End Developer
                   egresada de Laboratoria.
             
                   Estoy en constante aprendizaje, en busca de desarrollo
                   profesional y socioemocional; dentro de un entorno de trabajo con nuevos retos.
            
                   Creo firmemente que el trabajo en equipo es la mejor forma de avanzar
                    y crear grandes cosas.
                    </Typography>
                   
                    </Grid>
                    <Grid item xs={10}>
                    <Typography variant="body1">He trabajado con tecnologías como: </Typography>
                    <br/>
                    <Typography variant="body1" style={{color:"#f7484e", letterSpacing:1}}>
                      <strong>Javascript, HTML, Node.js, React, Firebase, CSS3, Git.</strong>
                    </Typography>
                    </Grid>
                    <Grid item xs={10}>
                    <Typography variant="body1">Asi como habilidades blandas en las cuales trabajo día con día</Typography>
                    <br/>
                    <Typography variant="body1" style={{color:"#f7484e", letterSpacing:1}}>
                      <strong>Trabajo en equipo, Metodología Agile, SCRUM, Growth Mindset, Autoaprendizaje, Feedback.</strong>
                    </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container justify="center" alignItems="center" className={classes.aboutPhoto}>
                        <Grid item xs={12} >
                            <img className={classes.foto} src={photo} alt="imagen proyecto"/>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
          
            {/* Projects */}
            <Grid container justify="center" alignItems="center" className={classes.project} id="projects">
                <Box p={3}>
                    <Grid container spacing={2}>
                        <Card
        
                            projectImages={projectImages}
                        />
                    </Grid>
                </Box>
              </Grid>

            
            {/* Contact */}
            < Grid container justify="center" alignItems="center" className={classes.contactCard} id="contact">

                <Grid item xs={12} md={6}>
                    <Grid container justify="center" alignItems="center" className={classes.contact}>
                        <Grid item xs={12} >
                            <Typography variant="h4">Contacto</Typography>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container justify="center" >
                        <Grid item xs={12} md={10} lg={8}>
                            <Paper className={classes.paper} elevation={8}>
                                <Grid container justify="center" alignItems="center" spacing={1}>
                                    <Grid item xs={12} sm={4} style={{borderRight:"2px solid #f7484e"}}>
                                        <img width="100px" src={logo}></img>

                                    </Grid>

                                    <Grid item xs={12} sm={8}>
                                        <Typography  align="left"variant="body1"><GitHubIcon />&nbsp;Carolinaab</Typography>
                                        <Typography align="left" variant="body1"><LinkedInIcon />&nbsp;Carolina Méndez</Typography>
                                        <Typography align="left" variant="body1"><PhoneAndroidIcon/>&nbsp;5580867630</Typography>
                                        <Typography  align="left" variant="body1"><EmailIcon/>&nbsp;tau_karo@hotmail.com</Typography>
                                        <Typography align="left"className={classes.cv}> <a target="_blank" href="https://drive.google.com/file/d/1DyHjFZZPOYNOc5HGXP_2LmG_am_2bYib/view?usp=sharing">Ver CV</a></Typography>
                                 </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                       
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    )
}
