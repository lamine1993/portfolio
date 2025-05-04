import Image from "next/image";
import BlogPost from "./components/BlogPost";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Projet Acsa",
      description: "Le projet ACSA met en place une plateforme numérique visant à connecter les producteurs aux marchés. Cette plateforme permet d'accéder en temps réel aux informations essentielles, telles que les cours des marchandises et les niveaux de stocks.",
      image: "/acsa.jpg",
      technologies: ["Ionic", "Cordova", "TypeScript", "HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Projet Wallu",
      description: "Le projet Wallu permet aux usagers, principalement les agriculteurs, d'accéder en temps réel aux informations climatiques. L'application se connecte directement aux services de l'ANACIM (Agence Nationale de l'Aviation Civile et de la Météorologie).",
      image: "/wallu.png",
      technologies: ["Ionic", "Cordova", "TypeScript", "HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "Projet Arsatol",
      description: "Arsatol est un projet développé pour accompagner les cultivateurs de la vallée du fleuve Sénégal dans l'identification des attaques qui affectent leurs cultures maraîchères, et pour leur proposer des solutions adaptées afin d'y faire face.",
      image: "/arsatol.jpg",
      technologies: ["React-Native", "Expo", "TypeScript", "HTML", "CSS", "JavaScript"],
    }
    // Ajoutez d'autres projets ici
  ];

  const experiences = [
    {
      id: 1,
      title: "Développeur Full Stack",
      company: "Entreprise Tech",
      period: "2022 - Présent",
      description: "Développement d'applications web et mobiles avec React, Node.js et MongoDB. Gestion de projets et collaboration avec les équipes de design.",
      technologies: ["React", "Node.js", "MongoDB", "TypeScript"]
    },
    {
      id: 2,
      title: "Développeur Front-end",
      company: "Startup Innovante",
      period: "2020 - 2022",
      description: "Création d'interfaces utilisateur modernes et responsives. Optimisation des performances et amélioration de l'expérience utilisateur.",
      technologies: ["React", "JavaScript", "CSS", "HTML"]
    }
  ];

  const competences = [
    {
      category: "Front-end",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      category: "Back-end",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 70 }
      ]
    },
    {
      category: "Outils & Méthodologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Agile/Scrum", level: 85 },
        { name: "CI/CD", level: 80 }
      ]
    }
  ];

  const clients = [
    {
      id: 1,
      name: "ACSA",
      logo: "/ugb.jpg",
      description: "Agence de Conseil et de Services Agricoles"
    },
    {
      id: 3,
      name: "Wallu",
      logo: "/ugb.jpg",
      description: "Plateforme de services agricoles"
    },
    {
      id: 4,
      name: "Arsatol",
      logo: "/ugb.jpg",
      description: "Solution d'identification des attaques agricoles"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Les meilleures pratiques en développement React",
      excerpt: "Découvrez les meilleures pratiques pour développer des applications React performantes et maintenables.",
      date: "15 Mars 2024",
      image: "/blog/react.png",
      category: "Développement"
    },
    {
      id: 2,
      title: "Optimisation des performances web",
      excerpt: "Guide complet pour améliorer les performances de votre site web et offrir une meilleure expérience utilisateur.",
      date: "10 Mars 2024",
      image: "/blog/performance.png",
      category: "Performance"
    },
    {
      id: 3,
      title: "Introduction à TypeScript",
      excerpt: "Apprenez les bases de TypeScript et comment l'utiliser pour améliorer la qualité de votre code JavaScript.",
      date: "5 Mars 2024",
      image: "/blog/typescript.png",
      category: "Tutoriel"
    }
  ];

  return (
    <main>
      {/* Section Hero - Carousel */}
      <section className="hero-section">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            {/* Slide 1 - Bienvenue */}
            <div className="carousel-item active">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-12 col-md-10 col-lg-8 animate-fadeInUp">
                    <h1 className="hero-title display-4">Bienvenue sur mon Portfolio</h1>
                    <p className="hero-subtitle lead text-white mb-4 px-2 px-md-0">
                      Je suis un développeur passionné par la création d'applications web modernes et performantes.
                      Mon expertise couvre les technologies front-end et back-end, avec une attention particulière
                      à l'expérience utilisateur et à la qualité du code.
                    </p>
                    <a href="#projets" className="btn btn-light btn-lg animate-fadeInUp delay-200">
                      Voir mes projets
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 - Profil */}
            <div className="carousel-item">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 col-md-6 animate-fadeInRight">
                    <div className="profile-image-container text-center mb-4 mb-md-0">
                      <Image
                        src="/profile.png"
                        alt="Photo de profil"
                        width={300}
                        height={300}
                        className="img-fluid rounded-circle"
                        priority
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 animate-fadeInLeft">
                    <div className="profile-summary text-center text-md-start">
                      <h2 className="hero-title mb-4">Mon Profil</h2>
                      <div className="competence-summary">
                        <div className="mb-3">
                          <h3 className="h5">Développement Front-end</h3>
                          <p>React, Next.js, TypeScript, HTML/CSS</p>
                        </div>
                        <div className="mb-3">
                          <h3 className="h5">Développement Back-end</h3>
                          <p>Node.js, Express, MongoDB, SQL</p>
                        </div>
                        <div className="mb-3">
                          <h3 className="h5">Outils & Méthodologies</h3>
                          <p>Git, Docker, Agile/Scrum, CI/CD</p>
                        </div>
                      </div>
                      <a href="#competences" className="btn btn-light btn-lg mt-4">
                        En savoir plus
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Précédent</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Suivant</span>
          </button>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="section">
        <div className="container">
          <h2 className="section-title animate-fadeInUp text-center mb-5">Mes Projets</h2>
          {/* Version Desktop - Grille */}
          <div className="d-none d-md-block">
            <div className="row g-4">
              {projects.map((project) => (
                <div key={project.id} className="col-md-4">
                  <div className="card h-100 border-0 shadow-lg">
                    <div className="position-relative" style={{ height: '250px' }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 992px) 50vw, 33vw"
                        className="card-img-top object-fit-cover"
                        priority={project.id === 1}
                      />
                    </div>
                    <div className="card-body p-4">
                      <h3 className="card-title h4 mb-3">{project.title}</h3>
                      <p className="card-text text-muted mb-4">{project.description}</p>
                      <div className="d-flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="badge bg-primary text-white">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Version Mobile - Carousel */}
          <div className="d-md-none">
            <div id="projectsCarousel" className="carousel slide touch-carousel" data-bs-ride="carousel" data-bs-touch="true">
              <div className="carousel-indicators">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#projectsCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {projects.map((project, index) => (
                  <div key={project.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <div className="card h-100 border-0 shadow-lg">
                      <div className="position-relative" style={{ height: '250px' }}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="100vw"
                          className="card-img-top object-fit-cover"
                          priority={index === 0}
                        />
                      </div>
                      <div className="card-body p-4">
                        <h3 className="card-title h4 mb-3">{project.title}</h3>
                        <p className="card-text text-muted mb-4">{project.description}</p>
                        <div className="d-flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="badge bg-primary text-white">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Précédent</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Suivant</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="section bg-light">
        <div className="container">
          <h2 className="section-title animate-fadeInUp text-center mb-5">Mes Services</h2>
          {/* Version Desktop - Grille */}
          <div className="d-none d-md-block">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-lg">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-code-slash display-1 text-primary mb-4"></i>
                    <h3 className="card-title h3 mb-4">Développement Web</h3>
                    <p className="card-text lead">
                      Création de sites web modernes et responsifs avec les dernières technologies front-end et back-end.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-lg">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-phone display-1 text-primary mb-4"></i>
                    <h3 className="card-title h3 mb-4">Développement Mobile</h3>
                    <p className="card-text lead">
                      Développement d'applications mobiles cross-platform avec React Native et Ionic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-lg">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-gear display-1 text-primary mb-4"></i>
                    <h3 className="card-title h3 mb-4">Maintenance & Support</h3>
                    <p className="card-text lead">
                      Maintenance continue, optimisation et support technique pour vos applications existantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Version Mobile - Carousel */}
          <div className="d-md-none">
            <div id="servicesCarousel" className="carousel slide touch-carousel" data-bs-ride="carousel" data-bs-touch="true">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card h-100 border-0 shadow-lg">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-code-slash display-1 text-primary mb-4"></i>
                      <h3 className="card-title h3 mb-4">Développement Web</h3>
                      <p className="card-text lead">
                        Création de sites web modernes et responsifs avec les dernières technologies front-end et back-end.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card h-100 border-0 shadow-lg">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-phone display-1 text-primary mb-4"></i>
                      <h3 className="card-title h3 mb-4">Développement Mobile</h3>
                      <p className="card-text lead">
                        Développement d'applications mobiles cross-platform avec React Native et Ionic.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card h-100 border-0 shadow-lg">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-gear display-1 text-primary mb-4"></i>
                      <h3 className="card-title h3 mb-4">Maintenance & Support</h3>
                      <p className="card-text lead">
                        Maintenance continue, optimisation et support technique pour vos applications existantes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#servicesCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Précédent</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#servicesCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Suivant</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expérience */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title animate-fadeInUp">Expérience Professionnelle</h2>
          {/* Version Desktop - Grille */}
          <div className="d-none d-md-block">
            <div className="row">
              {experiences.map((exp, index) => (
                <div key={exp.id} className={`col-lg-6 mb-4 animate-fadeInUp delay-${(index + 1) * 100}`}>
                  <div className="card h-100 experience-card">
                    <div className="card-body">
                      <h3 className="card-title h5">{exp.title}</h3>
                      <h4 className="h6 text-primary">{exp.company}</h4>
                      <p className="text-muted mb-2">{exp.period}</p>
                      <p className="card-text">{exp.description}</p>
                      <div className="d-flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="badge bg-light text-dark">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Version Mobile - Carousel */}
          <div className="d-md-none">
            <div id="experienceCarousel" className="carousel slide touch-carousel" data-bs-ride="carousel" data-bs-touch="true">
              <div className="carousel-indicators">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#experienceCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <div className="card h-100 experience-card">
                      <div className="card-body">
                        <h3 className="card-title h5">{exp.title}</h3>
                        <h4 className="h6 text-primary">{exp.company}</h4>
                        <p className="text-muted mb-2">{exp.period}</p>
                        <p className="card-text">{exp.description}</p>
                        <div className="d-flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="badge bg-light text-dark">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#experienceCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Précédent</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#experienceCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Suivant</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="competences" className="section bg-light">
        <div className="container">
          <h2 className="section-title animate-fadeInUp">Compétences</h2>
          {/* Version Desktop - Grille */}
          <div className="d-none d-md-block">
            <div className="row">
              {competences.map((category, index) => (
                <div key={index} className={`col-md-4 mb-4 animate-fadeInUp delay-${(index + 1) * 100}`}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h3 className="card-title h5 mb-4">{category.category}</h3>
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className={`mb-3 animate-fadeInRight delay-${skillIndex * 50}`}>
                          <div className="d-flex justify-content-between mb-1">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">{skill.level}%</span>
                          </div>
                          <div className="progress">
                            <div 
                              className="progress-bar" 
                              role="progressbar" 
                              style={{ width: `${skill.level}%` }}
                              aria-valuenow={skill.level}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Version Mobile - Carousel */}
          <div className="d-md-none">
            <div id="competencesCarousel" className="carousel slide touch-carousel" data-bs-ride="carousel" data-bs-touch="true">
              <div className="carousel-indicators">
                {competences.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#competencesCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {competences.map((category, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <div className="card h-100">
                      <div className="card-body">
                        <h3 className="card-title h5 mb-4">{category.category}</h3>
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className={`mb-3 animate-fadeInRight delay-${skillIndex * 50}`}>
                            <div className="d-flex justify-content-between mb-1">
                              <span className="skill-name">{skill.name}</span>
                              <span className="skill-level">{skill.level}%</span>
                            </div>
                            <div className="progress">
                              <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{ width: `${skill.level}%` }}
                                aria-valuenow={skill.level}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#competencesCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Précédent</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#competencesCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Suivant</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Clients */}
      {/*<section id="clients" className="section">
        <div className="container">
          <h2 className="section-title animate-fadeInUp">Ils m'ont fait confiance</h2>
          <div className="row justify-content-center align-items-center g-4">
            {clients.map((client, index) => (
              <div key={client.id} className={`col-6 col-md-3 text-center animate-fadeInUp delay-${(index + 1) * 100}`}>
                <div className="client-card p-4">
                  <div className="client-logo mb-3" style={{ height: '80px', position: 'relative' }}>
          <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="h6 mb-2">{client.name}</h3>
                  <p className="small text-muted">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Blog */}
      <section id="blog" className="section blog-section">
        <div className="container">
          <h2 className="section-title animate-fadeInUp">Blog</h2>
          <p className="text-center text-muted mb-5 animate-fadeInUp delay-100">
            Découvrez mes articles sur le développement web, les bonnes pratiques et les dernières technologies.
          </p>
          {/* Version Desktop - Grille */}
          <div className="d-none d-md-block">
            <div className="row">
              {blogPosts.map((post, index) => (
                <BlogPost
                  key={post.id}
                  {...post}
                />
              ))}
            </div>
          </div>

          {/* Version Mobile - Carousel */}
          <div className="d-md-none">
            <div id="blogCarousel" className="carousel slide touch-carousel" data-bs-ride="carousel" data-bs-touch="true">
              <div className="carousel-indicators">
                {blogPosts.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#blogCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {blogPosts.map((post, index) => (
                  <div key={post.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <BlogPost {...post} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#blogCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Précédent</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#blogCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Suivant</span>
              </button>
            </div>
          </div>
          <div className="text-center mt-5 animate-fadeInUp delay-200">
            <a href="/blog" className="btn btn-primary">
              Voir tous les articles
            </a>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="section contact-section bg-dark">
        <div className="container">
          <h2 className="section-title animate-fadeInUp text-white">Contact</h2>
          <div className="row justify-content-center">
            <div className="col-lg-6 animate-fadeInUp">
              <div className="contact-info p-4 bg-white rounded shadow-sm h-100">
                <h3 className="h4 mb-4 text-dark">Informations Personnelles</h3>
                <div className="mb-3 d-flex">
                  <i className="bi bi-envelope me-2 text-primary"></i>
                  <div className="d-flex align-items-center">
                    <span className="text-dark fw-bold me-2">Email :</span>
                    <span className="text-primary">sarrlmn@gmail.com</span>
                  </div>
                </div>
                <div className="mb-3 d-flex">
                  <i className="bi bi-telephone me-2 text-primary"></i>
                  <div className="d-flex align-items-center">
                    <span className="text-dark fw-bold me-2">Téléphone :</span>
                    <span className="text-primary">+221 77 133 24 92</span>
                  </div>
                </div>
                <div className="mb-3 d-flex">
                  <i className="bi bi-geo-alt me-2 text-primary"></i>
                  <div className="d-flex align-items-center">
                    <span className="text-dark fw-bold me-2">Adresse :</span>
                    <span className="text-primary">Dakar, Sénégal</span>
                  </div>
                </div>
                <div className="mb-3 d-flex">
                  <i className="bi bi-linkedin me-2 text-primary"></i>
                  <div className="d-flex align-items-center">
                    <span className="text-dark fw-bold me-2">LinkedIn :</span>
                    <a href="https://www.linkedin.com/in/mohamadou-lamine-sarr/" target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-none">Mon Profile LinkedIn</a>
                  </div>
                </div>
                <div className="mb-3 d-flex">
                  <i className="bi bi-github me-2 text-primary"></i>
                  <div className="d-flex align-items-center">
                    <span className="text-dark fw-bold me-2">GitHub :</span>
                    <a href="https://github.com/lamine1993" target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-none">Mon Github</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 animate-fadeInUp">
              <div className="contact-form p-4 bg-dark rounded shadow-sm h-100">
                <h3 className="h4 mb-4 text-white">Envoyez-moi un message</h3>
                <form className="needs-validation" noValidate>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white fw-bold">Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ backgroundColor: 'white', color: 'black' }}
                      id="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white fw-bold">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      style={{ backgroundColor: 'white', color: 'black' }}
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-white fw-bold">Message</label>
                    <textarea
                      className="form-control"
                      style={{ backgroundColor: 'white', color: 'black' }}
                      id="message"
                      rows={4}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
    </div>
      </section>
    </main>
  );
}
