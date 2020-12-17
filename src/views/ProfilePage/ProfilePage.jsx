import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  PhotoCameraOutlined,
  PinDropRounded,
  Restaurant,
} from '@material-ui/icons';
import profile from 'assets/img/faces/garrettprofile.jpg';
import beer from 'assets/img/free/beer.jpg';
import casks from 'assets/img/free/casks.jpg';
import crispybuns from 'assets/img/free/crispybuns.jpg';
import profilebg from 'assets/img/profile-bg.jpg';
import styles from 'assets/jss/material-kit-react/views/profilePage.js';
import classNames from 'classnames';
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Parallax from 'components/Parallax/Parallax.js';
import { UserContext } from 'context/UserContext';
import React, { useEffect, useContext, useState } from 'react';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user.loading) {
      setLoading(user.loading);
    }
  }, [user.loading]);

  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    !loading && (
      <div>
        <Parallax small filter image={profilebg} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>
                        {user.data.firstName}
                        {user.data.nickname}
                        {user.data.lastName}
                      </h3>
                      <h6>user.data.city</h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className="fab fa-instagram" />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>{user.data.bio}</p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  {/* <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: 'Goods',
                        tabIcon: Restaurant,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: 'Location',
                        tabIcon: PinDropRounded,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={6} sm={6} md={4}>
                              <Typography
                                component="h3"
                                variant="h3"
                                className={classes.description}
                              >
                                {user.data.city}
                              </Typography>
                              <Typography className={classes.description}>
                                {user.data.address}
                              </Typography>
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: 'Photos',
                        tabIcon: PhotoCameraOutlined,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={crispybuns}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={beer}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={casks}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                    ]}
                  /> */}
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
