export type PortfolioItemType = {
    title: string;
    link: string;
    imageSrc: string;
    imageAlt: string;
    description?: string;
}

export const featuredItems: PortfolioItemType[] = [
    {
        title: 'Dashboard using Next.js / Vercel',
        link: 'https://nextjs-dashboard-five-zeta-64.vercel.app',
        imageSrc: 'images/nextjsverceldashboard.png',
        imageAlt: 'Dashboard screenshot',
        description: 'The product of a tutorial from the Next.js documentation. To check it out, you can use test login user@nextmail.com / 123456'
    },
    {
        title: 'Tic Tac Toe',
        link: 'https://lehman.github.io/tic-tac-toe/',
        imageSrc: 'work/tictactoelogo.png',
        imageAlt: 'Tic Tac Toe',
        description: 'The product of a tutorial from the React documentation'
    },
    {
        title: 'Turkey Punch',
        link: 'work/TurkeyPunch/index.html',
        imageSrc: 'work/games/TurkeyPunch.png',
        imageAlt: 'Turkey Punch',
        description: `A festive gem from my first ever game jam`
    }
];

export const portfolioItems: PortfolioItemType[] = [
    {
        title: 'Animation using OpenGL',
        link: '/work/174Aproj1.mpg',
        imageSrc: 'work/174Aproj1image.JPG',
        imageAlt: 'CS 174A Project 1',
    },
    // {
    //     title: 'Second Animation using OpenGL',
    //     link: '/work/174Aproj2.mpg',
    //     imageSrc: 'work/174Aproj2image.JPG',
    //     imageAlt: 'CS 174A Project 2',
    // },
    // {
    //     title: 'Motion Picture Deconstruction',
    //     link: 'http://classes.dma.ucla.edu/Summer13/160-1/projects/louise/p2/',
    //     imageSrc: 'work/desma160_proj2image.jpg',
    //     imageAlt: 'DESMA 160 Proj 2',
    // },
    {
        title: 'Raytracer Code',
        link: '/work/raytracer/template-rt.cpp',
        imageSrc: 'work/174Aproj3image.png',
        imageAlt: 'CS 174A Project 3',
    },
    // {
    //     title: 'Data-Driven Visualization',
    //     link: 'http://classes.dma.ucla.edu/Summer13/160-1/projects/louise/p3/',
    //     imageSrc: 'work/desma160_proj3image.jpg',
    //     imageAlt: 'DESMA 160 Proj 3',
    // },
    {
        title: 'Web Design Group Project',
        link: 'http://classes.dma.ucla.edu/Winter13/161/projects/group-projects/project-5/group-4/html/',
        imageSrc: 'work/dma161proj5image.png',
        imageAlt: 'DESMA 161 Project 5',
    },
    // {
    //     title: 'Web Mockup Project',
    //     link: 'work/llehman_1 Architecture.pdf',
    //     imageSrc: 'work/dma161proj1image.jpg',
    //     imageAlt: 'DESMA 161 Project 1',
    // },
    // {
    //     title: 'Cut & Paste Art and Analysis',
    //     link: 'work/dma_midterm.pdf',
    //     imageSrc: 'work/desma101_midtermimage.JPG',
    //     imageAlt: 'DESMA 101 Midterm',
    // },
    {
        title: 'UV Guardian Website',
        link: 'uv_guardian/index.html',
        imageSrc: 'work/uvguardian.png',
        imageAlt: 'UV Guardian Site',
    },
    // {
    //     title: 'DESMA 161 Project, Previous Personal Website',
    //     link: 'first/index.html',
    //     imageSrc: 'work/site_first.png',
    //     imageAlt: 'My Website Ver. 1',
    // },
];