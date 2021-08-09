import React, { useState, useEffect, useCallback } from "react";
import Loader from "../../assets/svg/Loader";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Replay } from "@material-ui/icons";

const Cats = () => {
  const [photoUrl, setPhotoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewData = useCallback(async () => {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );
    const data = await response.data;
    setPhotoUrl(data[0].url);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchNewData().then(() => setIsLoading(false));
  }, [fetchNewData]);

  const regeneratePhotoHandler = () => {
    setIsLoading(true);
    fetchNewData().then(() => setIsLoading(false));
  };

  return (
    <>
      <Button
        onClick={regeneratePhotoHandler}
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
    </>
  );
};

export default Cats;
