'use client';
import styles from './page.module.css'
import { useState } from 'react';
import Modal from './modal';
import Project from './projects';
import { trapBold } from '@zenversee/fonts';

const projects = [
  {
    title: "Pubarun's Portfolio",
    src: "pubarun.png",
    link: "https://www.pubarunbasu.com/",
    color: "#706D63"
  },
  {
    title: "Edubeacon",
    src: "edubecon.png",
    link: "https://edubeacon.io/",
    color: "#ADD8E6"
  },
  {
    title: "Heva",
    src: "heva.png",
    link: "https://heva.ai/",
    color: "#EFE8D3"
  },
  // {
  //   title: "Silencio",
  //   src: "silencio.png",
  //   link: "https://silencio.com/",
  //   color: "#706D63"
  // }
]

export default function OurClient() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <section className={`flex flex-col h-screen items-center justify-center mt-[20rem]`}>

    <h2 className={`${trapBold.className} mb-[10rem] text-[9rem]`}>
      Our Clients
    </h2>

    <div className={`flex w-[1000px] flex-col items-center justify-center`}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} link={project.link} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </section>
  )
}
