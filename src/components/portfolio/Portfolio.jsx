"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import "./portfolio.css"

const categories = ["All", "React", "Full Stack", "UI/UX", "Admin"]

const projects = [
  {
    id: 1,
    img: "/1.png",
    title: "React Vite Portfolio",
    desc: "Built with React.js and Vite, highlights my projects, skills, and experience through a fast, responsive, and modern design.",
    link: "https://venujaranasinghe.github.io/portfolio-react/",
    category: "React",
  },
  {
    id: 2,
    img: "/7.png",
    title: "3D Animated Portfolio",
    desc: "A visually engaging portfolio with smooth 3D animations, built using React.js and Framer Motion for an immersive experience.",
    link: "https://github.com/venujaranasinghe/3d-animated-portfolio",
    category: "React",
  },
  {
    id: 3,
    img: "/3.png",
    title: "Floral Shop Admin Dashboard",
    desc: "A comprehensive admin dashboard for a floral shop, built with Spring Boot, enabling order management, inventory tracking, and customer interactions.",
    link: "https://github.com/venujaranasinghe/OOAD-Group-Assignment",
    category: "Admin",
  },
  {
    id: 4,
    img: "/4.png",
    title: "MERN Blog App Admin Dashboard",
    desc: "An intuitive admin dashboard for the blog app, providing efficient post management, user controls, and analytics for streamlined content moderation.",
    link: "https://github.com/venujaranasinghe/FullStack-Blog/tree/main/backend",
    category: "Admin",
  },
  {
    id: 5,
    img: "/5.png",
    title: "Full-Stack Blogging Platform",
    desc: "A feature-rich blog app built with Next.js and MongoDB, offering seamless content management, dynamic posts, and a smooth user experience.",
    link: "https://github.com/venujaranasinghe/FullStack-Blog",
    category: "Full Stack",
  },
  {
    id: 6,
    img: "/2.png",
    title: "Wallpaper App",
    desc: "A beautifully designed wallpaper app offering a vast collection of high-quality backgrounds, built for a seamless browsing experience.",
    link: "/",
    category: "UI/UX",
  },
  {
    id: 7,
    img: "/6.png",
    title: "Dark-Themed Blog App UI",
    desc: "A stylish dark-themed blog UI, designed for a smooth reading experience with elegant typography and a minimalistic layout.",
    link: "https://github.com/venujaranasinghe/FullStack-Blog/tree/main/frontend",
    category: "UI/UX",
  },
]

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
    >
      <div className="project-image-container">
        <img src={project.img || "/placeholder.svg"} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View Project
          </a>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-category">{project.category}</p>
        <p className="project-description">{project.desc}</p>
      </div>
    </motion.div>
  )
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button 
        className="pagination-button" 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo; Prev
      </button>
      
      <div className="pagination-numbers">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            className={`pagination-number ${currentPage === page ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      
      <button 
        className="pagination-button" 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &raquo;
      </button>
    </div>
  )
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 3
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false })

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  
  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === selectedCategory))
    }
    // Reset to first page when category changes
    setCurrentPage(1)
  }, [selectedCategory])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    // Scroll to top of projects section
    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="portfolio-section" ref={sectionRef}>
      <motion.div
        className="portfolio-header"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="portfolio-title">My Projects</h2>
        <p className="portfolio-subtitle">Explore my recent work and projects</p>
      </motion.div>

      <motion.div
        className="filter-container"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className={`filter-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
            {selectedCategory === category && (
              <motion.div
                className="active-indicator"
                layoutId="activeCategory"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="projects-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${currentPage}`}
            className="projects-grid-inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </motion.div>
      )}
    </section>
  )
}

export default Portfolio
