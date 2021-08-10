import React, { useState, useEffect, useCallback } from "react";
import Loader from "../../assets/svg/Loader";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Replay } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatPhotoUrl } from "../../store/slices/cats-actions";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(3),
    "& > *": {
      marginBottom: theme.spacing(1),
    },
  },
  card: {
    marginLeft: theme.spacing(1),
    minWidth: 275,
    maxWidth: 400,
    paddingBottom: 10,
  },
}));

const Cats = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const photoUrl = useSelector((state) => state.cats.photoUrl);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    await dispatch(fetchCatPhotoUrl());
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Grid
      className={classes.wrapper}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" color="primary">
        Cute cats
      </Typography>
      <Button
        onClick={fetchData}
        startIcon={<Replay />}
        variant="contained"
        color="secondary"
      >
        Regenerate image
      </Button>
      {isLoading ? (
        <Loader />
      ) : (
        <img src={photoUrl} alt="Cute cat" width="400" />
      )}
    </Grid>
  );
};

export default Cats;
