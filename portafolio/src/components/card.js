import React from 'react'
import {
    Grid, Typography, Button, Card, CardActionArea,
    CardMedia, CardContent, CardActions
} from '@material-ui/core'
import { useStyles } from './style'



const CardProject = ({ isPhoto, projectImages, handleClick }) => {

    const classes = useStyles()
    return (
        projectImages.map(image => (
            <Grid item xs={12} md={6} key={image.title} >
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
                            <span className={classes.imageBackdrop}> holla</span>

                            <Grid container justify="center" alignItems="center">

                                <Grid item xs={6} >
                                    <a href={image.github}>
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
                                    <a href={image.page}>
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

                            </Grid>

                        </Grid>
                        <CardContent>
                          
                            <Typography variant="body1" >
                               {image.description}
                               {image.figma}
                           </Typography>
                        </CardContent>
                    

                </Card >

            </Grid>
        ))


    )
}

export default CardProject
