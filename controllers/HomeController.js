'use strict';
// IMPORTS:

// DOES NOT WORK BY INVOKE THE CONSTRUCTOR OF THE CORRESPONDING CLASS
// IT CAN'T BE INSTANTIATED
// const pelicula = import("../models/Movie.js"); // ON requestManager.js

// Request Manager
// const requestManager = import("../js/requestManager.js");

// ONLY WORKS IN <script type="module" ...><script>
// import * as Movie from '../models/Movie.js';
// import Movie from '../models/Movie.js';

class HomeController {
    constructor() {
        this.index();
    }

    async index() {
        let anioActual = new Date();

        // MOVIES REQUEST
        let filters = {
            requestTo: 'movies',
            filters: {
                primary_release_year: anioActual.getFullYear(),
                sort_by: 'release_date.desc',
            }
        }

        let latestMovies = await getData('Movies', filters);
        let movieContainer = document.getElementById('movieContainer');
        movieContainer.innerHTML = components.buildMovieSection(latestMovies);

        // SERIES REQUEST
        filters = {
            requestTo: 'series',
            filters: {
                first_air_date_year: anioActual.getFullYear(),
                sort_by: 'first_air_date.desc',
            }
        }

        let latestSeries = await getData('Series', filters);
        let serieContainer = document.getElementById('serieContainer');
        serieContainer.innerHTML = components.buildSerieSection(latestSeries);

        // FOR SPRINT 3
        // // POPULAR SERIES REQUEST FOR SEASONS REQUEST
        // filters = {
        //     requestTo: 'popularSeries',
        //     // filters: {
        //     //     sort_by: 'popularity.desc',
        //     // }
        // }
        // let popularSeries = await getData('popularSeries', filters);

        // // SEASONS REQUEST
        // filters = {
        //     requestTo: 'seasons',
        //     filters: {
        //         serie_ids: popularSeries.map(serie => serie.id),
        //         sort_by: 'popularity.desc',
        //     }
        // }

        // let popularSeason = await getData('Seasons', filters);
        // let seasonContainer = document.getElementById('seasonContainer');
        // seasonContainer.innerHTML = components.buildSeasonSection(popularSeason);

    }

    // getPremiere(pY) {
    //     let filters = {
    //         requestTo: 'movies',
    //         filters: {
    //             primary_release_year: 2020,
    //             sort_by: 'release_date.desc',
    //         }
    //     }

    //     console.log(pY);

    //     requestManager
    //         .then(data => {
    //             return new data.default(filters)
    //         })
    //         .catch(error => console.log(error));
    // }

}

const homeController = new HomeController();
const components = new Components();

