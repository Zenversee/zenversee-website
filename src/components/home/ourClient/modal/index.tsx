import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

type ModalProps = {
  modal: { active: boolean; index: number };
  projects: IProject[];
};

type IProject = {
  title: string;
  src: string;
  color: string;
  link: string;
};

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, projects }: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={`pointer-events-none absolute flex h-[350px] w-[400px] items-center justify-center overflow-hidden bg-white`}
      >
        <div
          style={{
            top: index * -100 + "%",
            transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
          className={`absolute h-full w-full`}
        >
          {projects.map((project: IProject, index: any) => {
            const { src, color } = project;

            return (
              <div
                className={`flex h-full w-full items-center justify-center`}
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <Image
                  src={`/images/${src}`}
                  width={300}
                  height={0}
                  alt={`project_${index}`}
                  className="h-auto shadow-lg"
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        className={`pointer-events-none absolute z-[2] flex h-[80px] w-[80px] items-center justify-center rounded-[50%] bg-[#455CE9] text-[14px] font-light text-white`}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        Visit
      </motion.div>

      {/* <motion.div
                ref={cursorLabel}
                className={`bg-transparent text-black`}
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "enter" : "closed"}
            >
                View
            </motion.div> */}
    </>
  );
}
