import { 
  DiHtml5, 
  DiCss3, 
  DiJsBadge, 
  DiNodejsSmall, 
  DiMysql, 
  DiReact,
  DiSass,
  DiMongodb
  } from 'react-icons/di'

import '../styles/components/tecnologiescontainer.sass'

const tecnologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Desenvolvendo desde: 2016" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Desenvolvendo desde: 2016" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Desenvolvendo desde: 2016" },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Desenvolvendo desde: 2017" },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "Desenvolvendo desde: 2016" },
  { id: "react", name: "React", icon: <DiReact />, description: "Desenvolvendo desde: 2019" },
  { id: "sass", name: "Sass", icon: <DiSass />, description: "Desenvolvendo desde: 2020" },
  { id: "mongodb", name: "MongoDB", icon: <DiMongodb />, description: "Desenvolvendo desde: 2020" }

]

const TecnologiesContainer = () => {
  return (
    <section className='tecnologies-container'>
      <h2>Tecnologias</h2>
      <div className='tecnologies-grid'>
        {tecnologies.map((tech) =>(
          <div className="tecnologies-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
              <h3>{tech.name}</h3>
              <p>
               {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TecnologiesContainer