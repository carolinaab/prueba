import React, { Fragment } from 'react'
import { Grid, Typography, Card, CardContent } from '@material-ui/core'
import { useStyles } from './style'



const CardProject = ({ projectImages }) => {

    const classes = useStyles()
    return (
        projectImages.map(image => (
            <Grid item xs={12} md={6} key={image.id} >
                <Card className={classes.card}>
                    <Grid container
                        // focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: image.width,
                        }} >
                        <span
                            className={classes.imageSrc}
                            style={{
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <span className={classes.imageBackdrop}></span>

                        <Grid container justify="center" alignItems="center">
                            {
                                image.link ?
                                    <Fragment>
                                        <Grid item xs={6} >
                                            <a target="_blank" href={image.github} className={classes.link}>
                                                <span className={classes.imageButton}>
                                                    <Typography
                                                        component="span"
                                                        variant="subtitle1"
                                                        color="inherit"
                                                        className={classes.imageTitle} >
                                                        {image.title}
                                                        <span className={classes.imageMarked} />
                                                    </Typography>
                                                </span>
                                            </a>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <a target="_blank" href={image.page} className={classes.link}>
                                                <span className={classes.imageButton}>
                                                    <Typography
                                                        component="span"
                                                        variant="subtitle1"
                                                        color="inherit"
                                                        className={classes.imageTitle}  >
                                                        {image.link}
                                                        <span className={classes.imageMarked} />
                                                    </Typography>
                                                </span>
                                            </a>
                                        </Grid>
                                    </Fragment>
                                    :
                                    <Grid item xs={12}>
                                        <a target="_blank" href={image.github} className={classes.link}>
                                            <span className={classes.imageButton}>
                                                <Typography
                                                    component="span"
                                                    variant="subtitle1"
                                                    color="inherit"
                                                    className={classes.imageTitle}  >
                                                    {image.title}
                                                    <span className={classes.imageMarked} />
                                                </Typography>
                                            </span>
                                        </a>
                                </Grid>
                            }
                        </Grid>

                    </Grid>
                    <CardContent>

                        <Typography variant="body1" >
                            {image.description}
                        </Typography>
                    </CardContent>


                </Card >

            </Grid>
        ))
    )
}

export default CardProject
