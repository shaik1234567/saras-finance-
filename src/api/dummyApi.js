const dummyData = [
  {
    id: 1,
    title: 'Shaik Shivaji',
    snippet: 'Computer Science student & backend-focused developer.',
    details: 'Shaik Shivaji is a Computer Science student with hands-on experience in backend development, API design, and system-level problem solving. He focuses on building practical, scalable solutions rather than purely academic projects.',
  },
  {
    id: 2,
    title: 'Backend Development',
    snippet: 'APIs, databases, and application logic.',
    details: 'Experience in building RESTful APIs, handling authentication, designing database schemas, and implementing clean backend workflows using JavaScript, Node.js, and SQL-based databases.',
  },
  {
    id: 3,
    title: 'Driver Drowsiness Detection System',
    snippet: 'AI-based safety system using computer vision.',
    details: 'An AI-powered driver drowsiness detection system designed to detect fatigue using facial landmark analysis and intelligent scoring, with a focus on reducing false positives and user dependency.',
  },
  {
    id: 4,
    title: 'Unitrade',
    snippet: 'Student-centric second-hand marketplace.',
    details: 'Unitrade is a platform built to enable students to buy and sell second-hand items within a campus community, featuring authentication, product listings, categorization, and basic chat workflows.',
  },
  {
    id: 5,
    title: 'AOI Map Application',
    snippet: 'Interactive map-based web solution.',
    details: 'A web application that allows users to draw, edit, and persist areas of interest on an interactive map, demonstrating front-end logic, state management, and geospatial concepts.',
  },
  {
    id: 6,
    title: 'Automation & Workflow Scripts',
    snippet: 'Reducing repetitive manual tasks.',
    details: 'Created automation scripts to streamline repetitive workflows such as data handling and form submissions, focusing on efficiency, reliability, and maintainability.',
  },
  {
    id: 7,
    title: 'Concept-First Engineering',
    snippet: 'Understanding systems end-to-end.',
    details: 'A development approach centered on understanding how systems work internally — including request lifecycles, routing, validation, authentication, and error handling.',
  },
  {
    id: 8,
    title: 'Internship & Interview Preparation',
    snippet: 'Backend-oriented problem solving.',
    details: 'Preparation focused on backend internships with emphasis on practical problem solving, system design basics, API behavior, debugging, and real-world development scenarios.',
  },
  {
    id: 9,
    title: 'Saraas Finance',
    snippet: 'Assignment-focused evaluation project.',
    details: 'This project was developed as part of an assignment for :contentReference[oaicite:0]{index=0}, demonstrating frontend search logic, asynchronous handling, clean data modeling, and production-ready thinking.',
  },
  {
    id: 10,
    title: 'Practical Developer Mindset',
    snippet: 'Building solutions that actually work.',
    details: 'A mindset focused on solving real problems with simple, reliable, and maintainable solutions while keeping user experience and business constraints in mind.',
  },
];
export const search = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query) {
        resolve([]);
        return;
      }
      const trimmedQuery = query.trim().toLowerCase();
      const results = dummyData.filter((item) =>
        item.title.trim().toLowerCase().includes(trimmedQuery)
      );
      resolve(results);
    }, 1000);
  });
};