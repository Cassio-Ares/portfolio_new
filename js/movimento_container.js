window.addEventListener('load', ()=>{
    const elements = document.querySelectorAll('.hide')
   

   const myObserverAbout = new IntersectionObserver((showUp)=>{
    showUp.forEach((show)=>{
        if(show.isIntersecting){
            show.target.classList.add('show_up')
        }else{
            show.target.classList.remove('show_up')
        }
    })
   })

   elements.forEach((element)=> myObserverAbout.observe(element))
   
   const skills = document.querySelectorAll('.hideSkill')
   const skillsRev = document.querySelectorAll('.hideSkillRev')

   const myObserverSkill = new IntersectionObserver((showUp)=>{
      showUp.forEach((show)=>{
        if(show.isIntersecting){
            show.target.classList.add('show_upSkill')
            
        }else{
            show.target.classList.remove('show_upSkill')
        }
      })
   })

   skills.forEach((skill)=> myObserverSkill.observe(skill))
   skillsRev.forEach((skill)=> myObserverSkill.observe(skill))



   const projects = document.querySelectorAll('.project_hide')
   const projectsRev = document.querySelectorAll('.project_hideRev')

   const myObserverProjects = new IntersectionObserver((showUp)=>{
      showUp.forEach((show)=>{
        if(show.isIntersecting){
            show.target.classList.add('show_upProject')
        }else{
            show.target.classList.remove('show_upProject')
        }
      })
   })


   projects.forEach((project)=> myObserverProjects.observe(project))
   projectsRev.forEach((project)=> myObserverProjects.observe(project))
})