/**
 * Everything the site says about you lives in this one file.
 * Edit the text here; the layout and interactions pick it up automatically.
 */

export const profile = {
  name: 'Ben Tsui',
  role: 'Full-stack software engineer',
  location: 'Boise, Idaho',
  // Shown as map coordinates in the hero.
  coords: { lat: 43.615, lon: -116.2023, elevationM: 824 },
  intro:
    'Full-stack engineer in Boise, Idaho. For nine years I have built web, mobile and cloud software with .NET, React and Azure, most recently at GoFormz. Before that I was a process safety engineer on refineries and gas plants.',
  links: {
    github: 'https://github.com/btsui3',
    linkedin: 'https://www.linkedin.com/in/benjamin-tsui-2b878436/',
  },
};

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

/** Most recent first. */
export const experience: Role[] = [
  {
    company: 'GoFormz',
    title: 'Software Engineer',
    start: 'Jan 2022',
    end: 'Present',
    location: 'Remote',
    summary:
      'Full-stack engineer across the mobile app, the web app and the cloud services behind them.',
    highlights: [
      'Build and maintain features in the .NET MAUI mobile application.',
      'Developed and deployed scalable backend services on a distributed architecture.',
      'Designed and built the notification systems for web and mobile, including push notifications in the mobile app.',
      'Implemented machine learning features using Azure AI services.',
      'Ship new features in the React web application and manage releases through Azure DevOps.',
    ],
    stack: ['C#', '.NET MAUI', 'React', 'Azure', 'Azure AI', 'Azure DevOps'],
  },
  {
    company: 'MWI Animal Health',
    title: 'Application Developer',
    start: 'Oct 2018',
    end: 'Jan 2022',
    location: 'Boise, ID',
    summary: 'Built custom applications and services for the MWI ecommerce platform.',
    highlights: [
      'Created web APIs in ASP.NET Core, working directly with subject matter experts.',
      'Built customer-facing applications with Vue.js, ASP.NET Core MVC, SQL Server, Sitecore and Elasticsearch.',
      'Tuned applications for performance and scale using asynchronous operations and clean architecture.',
      'Wrote unit and integration tests in xUnit and maintained Selenium end-to-end tests.',
      'Supported production systems and shipped fixes through CI/CD in Azure DevOps.',
    ],
    stack: ['C#', 'ASP.NET Core', 'Vue.js', 'SQL Server', 'Elasticsearch', 'Sitecore', 'xUnit', 'Selenium'],
  },
  {
    company: 'Phenomenex',
    title: 'Software Developer',
    start: 'May 2017',
    end: 'Oct 2018',
    summary: 'First full-time software role, working across the ecommerce site, internal tools and Azure.',
    highlights: [
      'Built a data-visualization app in TypeScript, Kendo UI and C# that shows customers their lab-testing accuracy. It was used to renew a million-dollar client contract.',
      'Cut cart-to-checkout time from 7 seconds to 2 by making the checkout page multi-threaded.',
      'Built a product-recommendation tool in .NET Core and Dapper that calls an Azure ML model hosted on Azure Functions for purchase predictions.',
      'Managed credentials and permissions for more than 500 Microsoft CRM accounts.',
    ],
    stack: ['C#', '.NET Core', 'TypeScript', 'Kendo UI', 'Dapper', 'Azure Functions', 'Azure ML'],
  },
  {
    company: 'hackathons',
    title: 'Changing careers',
    start: 'Mar 2017',
    end: 'May 2017',
    location: 'Los Angeles, CA',
    summary: 'The switch from process engineering to software, by way of two hackathons.',
    highlights: [
      'Expedition Hacks: a forecasting model for food security and regional stability in Morocco, built on geospatial data from Descartes Labs and the UN FAO with Python and R, with a C#, AngularJS and Chart.js front end.',
      'ZipRecruiter Hackathon: a Chrome extension that parses job boards into a job-tracking table, backed by ASP.NET MVC 5 and AngularJS.',
    ],
    stack: ['Python', 'R', 'C#', 'AngularJS', 'ASP.NET MVC'],
  },
  {
    company: 'Técnicas Reunidas',
    title: 'Process Safety Engineer',
    start: 'Sep 2013',
    end: 'Sep 2016',
    location: 'Madrid, Spain',
    summary:
      'Three years of process safety on large engineering, procurement and construction projects for oil and gas clients.',
    highlights: [
      'Fadhili Gas Plant for Saudi Aramco.',
      'Hail Field Development for Abu Dhabi Oil Company.',
      'North West Redwater Sturgeon Refinery in Canada.',
      'Touat Gaz project for Groupement Touat Gaz.',
    ],
    stack: ['Process safety', 'EPC projects', 'Spanish'],
  },
  {
    company: 'Georgia Tech',
    title: 'Chemical Engineering',
    start: '2008',
    end: '2012',
    location: 'Atlanta, GA',
    summary: 'Chemical engineering degree, with a research lab and a plant design project along the way.',
    highlights: [
      'Senior design, sponsored by DuPont Danisco: designed an industrial plant producing bio-isoprene by fermentation, with process simulation in Aspen Plus and HYSYS and a full economic evaluation.',
      'Undergraduate research assistant at the Center for Advanced Brain Imaging, studying the effect of music on memory in aging using fMRI and EEG.',
    ],
    stack: ['Aspen Plus', 'HYSYS', 'Simulink'],
  },
];

export type Project = {
  name: string;
  blurb: string;
  detail: string;
  tags: string[];
  /** Used by the filter chips. */
  area: ('backend' | 'frontend' | 'data' | 'systems')[];
  repo?: string;
  year: string;
};

export const projects: Project[] = [
  {
    name: 'PinPoint',
    blurb: 'Drop a pin on the map, leave a note.',
    detail:
      'A map-first notes app: a Next.js and Mapbox interface for placing pins and attaching notes, designed around a Go service that stores and serves pins over GraphQL with PostgreSQL.',
    tags: ['Next.js', 'TypeScript', 'Mapbox', 'Go', 'GraphQL', 'PostgreSQL'],
    area: ['frontend', 'backend', 'data'],
    repo: 'https://github.com/btsui3/PinPoint',
    year: '2025',
  },
  {
    name: 'Image Search',
    blurb: 'Search photos by what is in them, not by filename.',
    detail:
      'Images are embedded into vectors and stored in Weaviate, so a query image returns its nearest visual neighbours. A compact Node service with the database running in Docker Compose.',
    tags: ['Node.js', 'Weaviate', 'Vector search', 'Docker'],
    area: ['backend', 'data'],
    repo: 'https://github.com/btsui3/Weaviate-Image-Search',
    year: '2023',
  },
  {
    name: 'Advent of Code',
    blurb: 'Yearly puzzle practice, mostly in Rust.',
    detail:
      'Solutions across several years of Advent of Code, used as a proving ground for Rust: parsing, graph search, and squeezing brute force into something that finishes.',
    tags: ['Rust', 'C#', 'Algorithms'],
    area: ['systems'],
    repo: 'https://github.com/btsui3/AOC',
    year: '2020 – 2026',
  },
  {
    name: 'ClimbCrud',
    blurb: 'A training log for climbers.',
    detail:
      'A cross-platform mobile app in C# and XAML for recording climbing exercises and sessions, built for my own training.',
    tags: ['C#', 'Xamarin', 'Mobile'],
    area: ['frontend'],
    repo: 'https://github.com/btsui3/ClimbCrud',
    year: '2025',
  },
  {
    name: 'Simple Blockchain',
    blurb: 'A blockchain you can read in one sitting.',
    detail:
      'A command-line blockchain in Rust: hashing, block linking and chain validation with nothing hidden behind a framework. Written to understand the idea by building the smallest honest version of it.',
    tags: ['Rust', 'CLI', 'Cryptography'],
    area: ['systems'],
    repo: 'https://github.com/btsui3/Simple-Blockchain',
    year: '2021',
  },
];

/** Skills, grouped. */
export const rack: { group: string; note: string; items: string[] }[] = [
  {
    group: 'Languages',
    note: 'What I reach for',
    items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'Go', 'Rust', 'Python'],
  },
  {
    group: 'Backend',
    note: 'APIs, data, services',
    items: ['.NET', 'ASP.NET Core', 'EF Core', 'Dapper', 'Azure Functions', 'SQL Server', 'PostgreSQL', 'Elasticsearch'],
  },
  {
    group: 'Web & mobile',
    note: 'Interfaces people use',
    items: ['React', 'Vue.js', '.NET MAUI', 'Next.js', 'HTML & CSS', 'Push notifications'],
  },
  {
    group: 'Cloud & practice',
    note: 'How it ships',
    items: ['Microsoft Azure', 'Azure DevOps', 'Azure AI services', 'CI/CD', 'xUnit', 'Selenium', 'Docker'],
  },
];

export const offClock = {
  heading: 'Off the clock',
  body: 'When I am not at a keyboard I am usually climbing: boulders in the Southeast, limestone in Spain, granite in Squamish.',
};
