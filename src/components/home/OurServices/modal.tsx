import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

type ModalProps = {
  active: boolean;
  currentBox: number;
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

export default function Modal({ active, currentBox }: ModalProps) {
  // const { active, index } = modal;
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

  const setCursors = (box: number) => {
    switch (box) {
      case 1:
        return "/cursor/design.svg";
        break;
      case 2:
        return "/cursor/tech.svg";
        break;
      case 3:
        return "/cursor/marketing.svg";
        break;
      case 4:
        return "/cursor/other.svg";
        break;

      default:
        return "";
        break;
    }
  };

  return (
    <>
      {currentBox != 0 ? (
        <motion.div
          ref={cursor}
          className={`pointer-events-none absolute z-[1000rem] flex  items-center justify-center`}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          {currentBox != 0 && (
            <Image
              className="h-[300px] w-[300px]"
              src={setCursors(currentBox)}
              width={500}
              height={500}
              alt=""
            />
          )}
        </motion.div>
      ) : (
        <motion.div
          ref={cursor}
          className={`pointer-events-none absolute z-[1000rem] flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-white/10 text-[14px] font-light text-white backdrop-blur-md`}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
      )}
    </>
  );
}
