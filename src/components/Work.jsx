import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/QuizApp.PNG',
      title: 'Quiz app',
      tags: ['API', 'JS', 'Development'],
      projectLink: 'https://saad-quizzapp.netlify.app/'
    },
    {
      imgSrc: '/images/Shopon.PNG',
      title: 'Shopon',
      tags: ['Bootstap React', 'React', 'API'],
      projectLink: 'https://shoponassignment.netlify.app/'
    },
    {
      imgSrc: '/images/weather.PNG',
      title: 'Weather app',
      tags: ['Development', 'API'],
      projectLink: 'https://saad-weatherapp.netlify.app/'
    },
    {
      imgSrc: '/images/socialMemoryShare.PNG',
      title: 'Memory Share website',
      tags: ['Web-design', 'Development', 'Full Stack', 'Supabase'],
      projectLink: 'https://social-memory-share-reminex-alphateam.netlify.app/'
    },
    {
      imgSrc: '/images/hackathon.PNG',
      title: 'Hackathone website',
      tags: ['Hackathone', 'Development'],
      projectLink: 'https://saad-smithackathon.netlify.app/'
    },
    {
      imgSrc: '/images/ecommerce.PNG',
      title: 'E-commerce design',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://saad-ecommerce-design.netlify.app/'
    },
  ];

const Work = () => {
  return (
    <section className="section" id="work">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio Highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink}, key) => (
                    <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} className="reveal-up"/>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Work
