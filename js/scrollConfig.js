const lenis=new Lenis({duration:5.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t))});function raf(t){lenis.raf(t),ScrollTrigger.update(),requestAnimationFrame(raf)}requestAnimationFrame(raf);const _______=[{sectionId:"_",headerId:"__header",contentId:"__content",start:"top top",end:"bottom center",scrub:!0,animation:gsap.timeline().fromTo("#__header",{y:"0vh",x:"0vh"},{y:"0vh",x:"-20",opacity:0, display:"none"},0).fromTo("#__content",{y:"0vh",x:"0vh"},{y:"0vh",x:"30",opacity:0, display:"none"},0)},{sectionId:"__",start:"center center",end:"bottom top",scrub:!0,animation:gsap.timeline().fromTo("#__",{y:"0vh",x:"0vh"},{y:"-10vh",x:"0",opacity:0},0)},{sectionId:"___",start:"top top",end:"bottom center",scrub:!0,pin:"#____zoom",animation:gsap.timeline().fromTo("#____circle",{scale:1},{scale:5},0).fromTo("#____text",{y:"0vh",x:"0vh"},{y:"-10vh",x:"0",opacity:0},0).fromTo("#_____",{y:"0vh",x:"0vh"},{y:"-20vh",x:"0"},0).fromTo("#______",{y:"0vh",x:"0vh"},{y:"-20vh",x:"0"},0)},{sectionId:"____",start:"top top",end:"bottom top",scrub:!0,animation:gsap.timeline().fromTo("#_____header",{y:"0vh",x:"0vh",opacity:1},{y:"-30vh",x:"0vh",opacity:0},0).fromTo("#_____content",{y:"0vh",x:"0vh"},{y:"-15vh",x:"0vh",opacity:0},0)}];_______.forEach((t=>{ScrollTrigger.create({animation:t.animation,trigger:`#${t.sectionId}`,start:t.start,end:t.end,scrub:t.scrub,pin:t.pin})})),new Typed("#typed",{strings:["Design.","Develop.","Pentest."],typeSpeed:150,loop:!0});