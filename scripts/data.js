class Project {
    constructor({
        title,
        description,
        imageSrc,
        projectSrc
    }) {
        this._title = title;
        this._description = description;
        this._imageSrc = imageSrc;
        this._projectSrc = projectSrc;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get imageSrc() {
        return this._imageSrc;
    }

    get projectSrc() {
        return this._projectSrc;
    }
}

export const projects = [
    new Project({
        title: 'Rick and Morty DataBase',
        description: 'A website built to explore different endpoints of an API with vanilla JS',
        imageSrc:'./assets/images/image4.jpg',
        projectSrc: 'https://ricandres98.github.io/rick-and-morty/src/html/'
    }),
    new Project({
        title: 'Passed days',
        description: 'An app that calculates the difference in dayss between two given dates',
        imageSrc:'./assets/images/passed-days.jpg',
        projectSrc: 'https://ricandres98.github.io/Passed-days-claymorphism/'
    }),
    new Project({
        title: 'Leads data analysis',
        description: 'Analysis of a data set of leads, presented in a nice and readable way',
        imageSrc:'./assets/images/data-analysis.jpg',
        projectSrc: 'https://ricandres98.github.io/analisis-de-datos/'
    }),
    new Project({
        title: 'The Music Discoverer',
        description: 'This is a Single Page Application that uses a Spotify-like API to browse through its data and play track previews.',
        imageSrc:'./assets/images/music-discoverer.jpg',
        projectSrc: 'https://animated-squirrel-5f3b15.netlify.app/'
    }),
    new Project({
        title: 'Platzi Movies',
        description: 'SPA that connects to an API and provides information about movies. It has support for english and spanish',
        imageSrc:'./assets/images/platzi-movies.jpg',
        projectSrc: 'https://soft-figolla-672dcd.netlify.app/'
    }),
    new Project({
        title: 'Calculator',
        description: 'Calculator made with pure JS vanilla',
        imageSrc:'./assets/images/calculator.jpg',
        projectSrc: 'https://ricandres98.github.io/Calculadora/'
    }),
]