import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from './style'

const Navbar = () => {
  const classes = useStyles()
    return (
        <Fragment>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                    <a className={classes.link} href="#about">Acerca de mi</a>
                    &nbsp;
                    /
                    &nbsp;
                    <a className={classes.link}href="#projects">Proyectos</a>
                    &nbsp;
                    /
                    &nbsp;
                    <a className={classes.link}href="#contact">Contacto</a>
                </Grid>
                
            </Grid>
        </Fragment>
    )
}

export default Navbar