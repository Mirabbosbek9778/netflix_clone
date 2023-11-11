"use client";

import React, { useEffect, useState } from "react";
import { MovieDataProps, MovieProps } from "@/types";
import { useGlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import Login from "@/components/shared/login";
import ManageAccount from "@/components/shared/manage-account";
import Loader from "@/components/shared/loader";
import { getMovieByGenre } from "@/lib/api";
import Common from "@/components/shared/common";

const Page = () => {
  const [moviesData, setMoviesData] = useState<MovieDataProps[]>([]);

  const { account, pageLoader, setPageLoader } = useGlobalContext();
  const { data: session } = useSession();

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const [
          action,
          animation,
          comedy,
          crime,
          documentary,
          drama,
          family,
          war,
        ] = await Promise.all([
          getMovieByGenre("tv", 10759),
          getMovieByGenre("tv", 16),
          getMovieByGenre("tv", 35),
          getMovieByGenre("tv", 80),
          getMovieByGenre("tv", 99),
          getMovieByGenre("tv", 18),
          getMovieByGenre("tv", 10751),
          getMovieByGenre("tv", 10768),
        ]);

        const allResult: MovieDataProps[] = [
          { title: "Action", data: action },
          { title: "Animation", data: animation },
          { title: "Comedy", data: comedy },
          { title: "Crime", data: crime },
          { title: "Documentary", data: documentary },
          { title: "Drama", data: drama },
          { title: "Family", data: family },
          { title: "War", data: war },
        ].map((item) => ({
          ...item,
          data: item.data.map((movie: MovieProps) => ({
            ...movie,
            type: "tv",
            addedToFavorites: false,
          })),
        }));

        setMoviesData(allResult);
      } catch (e) {
        console.log(e);
      } finally {
        setPageLoader(false);
      }
    };

    getAllMovies();
  }, []);

  if (session === null) return <Login />;
  if (account === null) return <ManageAccount />;
  if (pageLoader) return <Loader />;

  return <Common moviesData={moviesData} />;
};

export default Page;
