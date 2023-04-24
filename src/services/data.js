import React from 'react';
import passedDaysImg from '../assets/images/passed-days.jpg';
import rickAndMortyImg from '../assets/images/image4.jpg';
import dataAnalysisImg from '../assets/images/data-analysis.jpg';
import musicDiscovererImg from  '../assets/images/music-discoverer.jpg';
import platziMoviesImg from '../assets/images/platzi-movies.jpg';
import calculatorImg from '../assets/images/calculator.jpg';
import musicDiscovererNextImg from '../assets/images/music-next.jpg';
import pandaCssImg from '../assets/images/panda-css.jpg';
import { TwitterLogo } from '../assets/icons/TwitterLogo';
import { PlatziLogo } from '../assets/icons/PlatziLogo';
import { GithubLogo } from '../assets/icons/GithubLogo';
import { GmailLogo } from '../assets/icons/GmailLogo';

const projects = [
    {
        title: 'The Music Discoverer Next.js',
        description: `This is a Next.js application that uses a Spotify-like API to browse through its data and play track previews.
        This project is a migration from a SPA built in with simple JS`,
        imageSrc: musicDiscovererNextImg,
        projectSrc: 'https://animated-squirrel-5f3b15.netlify.app/'
    },
    {
        title: 'Rick and Morty DataBase',
        description: 'A website built to explore different endpoints of an API with vanilla JS',
        imageSrc: rickAndMortyImg,
        projectSrc: 'https://ricandres98.github.io/rick-and-morty/src/html/'
    },
    {
        title: 'Passed days',
        description: 'An app that calculates the difference in dayss between two given dates',
        imageSrc: passedDaysImg,
        projectSrc: 'https://ricandres98.github.io/Passed-days-claymorphism/'
    },
    {
        title: 'Leads data analysis',
        description: 'Analysis of a data set of leads, presented in a nice and readable way',
        imageSrc: dataAnalysisImg,
        projectSrc: 'https://ricandres98.github.io/analisis-de-datos/'
    },
    {
        title: 'The Music Discoverer',
        description: 'This is a Single Page Application that uses a Spotify-like API to browse through its data and play track previews.',
        imageSrc: musicDiscovererImg,
        projectSrc: 'https://animated-squirrel-5f3b15.netlify.app/'
    },
    {
        title: 'Platzi Movies',
        description: 'SPA that connects to an API and provides information about movies. It has support for english and spanish',
        imageSrc:platziMoviesImg,
        projectSrc: 'https://soft-figolla-672dcd.netlify.app/'
    },
    {
        title: 'Calculator',
        description: 'Calculator made with pure JS vanilla',
        imageSrc: calculatorImg,
        projectSrc: 'https://ricandres98.github.io/Calculadora/'
    },
    {
        title: 'Toggle Panda',
        description: 'A toggle function implemented along with a picture made 100% on CSS',
        imageSrc: pandaCssImg,
        projectSrc: 'https://codepen.io/ricandres98/full/VwrepRO'
    },
];

const contacts = [
    {
        username: '@ricandres_98',
        url: 'https://twitter.com/ricandres_98',
        socialMedia: 'Twitter',
        img: () => <TwitterLogo />,
    },
    {
        username: 'ricardo270298@gmail.com',
        url: 'mailto:ricardo270298@gmail.com',
        socialMedia: 'Gmail',
        img: () => <GmailLogo />,
    },
    {
        username: 'ricandres98',
        url: 'https://github.com/ricandres98',
        socialMedia: 'Github',
        img: () => <GithubLogo/>,
    },
    {
        username: 'Platzi profile',
        url: 'https://platzi.com/p/Ricandres98/',
        socialMedia: 'Platzi',
        img: () => <PlatziLogo />,
    }
];

export { projects, contacts };