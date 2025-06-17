import { useState } from "react"
import { ExternalLink, Github, ArrowDown } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Movies Recommended System",
    description: "A web app offering movie suggestions using Flask and Pandas.",
    image: "./projects/05_projectMRS.png",
    tags: ["Flask", "Pandas"],
    demoUrl: "#",
    githubUrl: "https://github.com/kaynatmozammil/Book-Recommendation-System",
  },
  {
    id: 2,
    title: "Book Recommended System",
    description: "A web app offering book suggestions using Flask and Pandas.",
    image: "./projects/04_projectBRS.jpg",
    tags: ["Flask", "Pandas"],
    demoUrl: "#",
    githubUrl: "https://github.com/kaynatmozammil/Book-Recommendation-System",
  },
  {
    id: 3,
    title: "Online Examination System",
    description: "A web development project that provides online examination.",
    image: "./projects/02_projectOES.png",
    tags: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    demoUrl: "https://kaynatmozammil.github.io/Online-Examination-System/",
    githubUrl: "https://github.com/kaynatmozammil/Online-Examination-System",
  },
  {
    id: 4,
    title: "Weather App",
    description: "A Weather App that gives the weather information worldwide.",
    image: "./projects/03_projectWheaterApp.png",
    tags: ["HTML", "CSS", "JS", "API"],
    demoUrl: "https://kaynatmozammil.github.io/weatherApp/",
    githubUrl: "https://github.com/kaynatmozammil/weatherApp",
  },
  {
    id: 5,
    title: "Find Movies",
    description: "A sleek and responsive movie discovery web app.",
    image: "./projects/01_projectMovie.png",
    tags: ["React", "TailwindCSS", "(TMDB) API"],
    demoUrl: "https://moviesapp-ruby.vercel.app/",
    githubUrl: "https://github.com/kaynatmozammil/movieApp",
  },
  {
    id: 6,
    title: "Personal Portfolio",
    description: "A modern and responsive developer portfolio showcasing projects, skills, and resume.",
    image: "./projects/06_projectPortfolio.png",
    tags: ["React", "TailwindCSS", "Lucide-React", "Vite"],
    demoUrl: "https://kaynatmozammil.vercel.app/",
    githubUrl: "https://github.com/kaynatmozammil/kaynat-portfolio",
  }

]

export const ProjectsSection = () => {
  const [visibleCount, setVisibleCount] = useState(3)
  const loadStep = 3

  const handleShowMore = () => {
    if (visibleCount < projects.length) {
      setVisibleCount((prev) => Math.min(prev + loadStep, projects.length))
    } else {
      window.open("https://github.com/kaynatmozammil", "_blank")
    }
  }

  return (
    <section id="projects" className="py-24 px-6 md:px-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...projects]
            .sort((a, b) => b.id - a.id)
            .slice(0, visibleCount)
            .map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleShowMore}
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-sm sm:text-base px-5 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all"
          >
            {visibleCount < projects.length ? "Show More Projects" : "Check My GitHub"}
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
