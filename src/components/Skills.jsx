import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const Skills = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: '60px',
      duration: 2500,
      delay: 400,
    })
    sr.reveal('.skill-box', { interval: 200 })
  }, [])

  const skills = [
    { name: 'HTML 5', img: 'src/assets/img/html-5.png' },
    { name: 'CSS 3', img: 'src/assets/img/css-3.png' },
    { name: 'Javascript', img: 'src/assets/img/js.png' },
    { name: 'Angular', img: 'src/assets/img/angular.png' },
    {name: 'React', img: 'src/assets/img/react.png' },
    { name: 'Typescript', img: 'src/assets/img/typescript.png' },
    { name: 'Python', img: 'src/assets/img/ppython.jpg' },
    
    { name: 'Git', img: 'src/assets/img/git.png' },
    { name: 'Node Js', img: 'src/assets/img/node.png' },
    { name: 'MongoDB', img: 'src/assets/img/mongo.png' },
    { name: 'Bootstrap', img: 'src/assets/img/bootstap.png' },
    { name: 'MYSQL', img: 'src/assets/img/mysql.png' },

  ]

  return (
    <section id="skills" className="pt-16 pb-20 bg-black">
      <div className="container mx-auto px-4">
        <span className="block text-center text-white text-sm mb-4">What I have done so far...</span>
        <h3 className="text-4xl md:text-[2rem] font-semibold text-white mb-10 ml-3 text-center">Skills</h3>
        <div className="skill-cont grid grid-cols-2 md:grid-cols-4 gap-4 px-20 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box p-4 cursor-pointer group">
              <div className="skill-title flex flex-col items-center relative pb-6
                after:content-[''] after:absolute after:bottom-0 after:right-1/2 after:w-0 after:h-1 after:rounded-l 
                after:bg-[#ebeff0] after:transition-all after:duration-500 group-hover:after:w-9
                before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-1 before:rounded-r 
                before:bg-[#dce0e2] before:transition-all before:duration-500 group-hover:before:w-9">
                <img 
                  src={skill.img} 
                  alt={skill.name}
                  className={`w-16 ${skill.name === 'Next.JS' ? 'w-20' : ''} group-hover:-translate-y-2 transition-transform duration-500`}
                />
                <h3 className="text-white mt-2">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills