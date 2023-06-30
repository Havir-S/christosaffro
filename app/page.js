"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
export default function Home() {
  return (
    <motion.main
      layout
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ y: 20, opacity: 0 }}
      className="py-24 dark:bg-red-300 px-10 w-full"
    >
      <div className=" bg-[#9797971c] rounded-md py-2 px-5 text-center shadow-xl w-full font-prozaLibre">
        Web Developer and Traffic Management Designer living in Poland
      </div>
      <div className="mt-6 text-center">
        <div className="mx-auto relative w-32 h-32 border-2 border-gray-200 shadow-md rounded-full">
          <Image
            src="/images/11.jpg"
            alt="Profile Img"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-3xl font-bold font-prozaLibre">
            Christopher Saffron
          </h3>
          <p className="text-md text-gray-400 mt-2 italic">
            Full-stack Developer / BricsCAD Designer
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="font-bold text-xl text-gray-300 border-b-[2px] pb-1 border-gray-600 w-fit">
          Professional summary
        </h4>
        <p className="mt-2 text-gray-400">
          Passion for{" "}
          <span className="text-gray-300 italic">
            work, learning and freedom
          </span>{" "}
          to create what's on my mind. Working in Civil Engineering has enhanced
          my communication skills and problem solving abilities. 3D Modeling,
          video and image editing expertise have been my window to express
          myself to the world. But it's code that has peaked my interest.
          Creating web applications and scripts for automation have filled my
          mind with thousands of ideas that are yet to be created.
        </p>
      </div>

      <Link
        href="/works"
        className="mx-auto mt-6 w-fit cursor-pointer bg-[#6baf8f] text-color2 font-bold flex items-center gap-5 rounded-md px-6 py-3"
      >
        <span>See my work</span>
        <div>
          <Image src="/icons/arr1.svg" alt="" width={10} height={10} />
        </div>
      </Link>
      <div className="mt-6">
        <h4 className="font-bold text-xl text-gray-300 border-b-[2px] pb-1 border-gray-600 w-fit">
          History
        </h4>
        <div className="flex flex-col gap-1 mt-3">
          <div className="flex gap-5">
            <div className="font-bold text-gray-300">1999</div>
            <div className=" text-gray-400">I was born in Cracow, Poland</div>
          </div>
          <div className="flex gap-5">
            <div className="font-bold text-gray-300">2018</div>
            <div className=" text-gray-400">
              Officially began working as a Temporary Traffic Management
              Designer, as well as started and paused studying Metallurgical
              Engineering at AGH University of Science and Technology in Cracow.
            </div>
          </div>
          <div className="flex gap-5">
            <div className="font-bold text-gray-300">2021</div>
            <div className=" text-gray-400">
              Worked temporarily as a Traffic Sign Technician and a Warehouse
              Coordinator for a Road Construction Company in Cracow.
            </div>
          </div>
          <div className="flex gap-5">
            <div className="font-bold text-gray-300 whitespace-nowrap">
              2022 to present
            </div>
            <div className=" text-gray-400">
              Fully focusing on Traffic Management Designing in SZAFRAN PROJEKT
              and learning and utilizing Programming on the side.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-xl text-gray-300 border-b-[2px] pb-1 border-gray-600 w-fit">
          What can I offer?
        </h4>
        <div className="flex flex-col gap-1 mt-3">
          <div className="flex gap-5">
            <div className="font-bold text-gray-300 whitespace-nowrap">
              Front-end
            </div>
            <div className=" text-gray-400">
              I have a reasonably big enough knowledge of Javascript, React,
              React-Redux, Typescript as well as frameworks such as Tailwind.
            </div>
          </div>
          <div className="flex gap-5">
            <div className="font-bold text-gray-300 whitespace-nowrap">
              Back-end
            </div>
            <div className=" text-gray-400">
              Using Node.js with Express.js, development of REST-API and Web
              servers is not a problem.
            </div>
          </div>

          <div className="flex gap-5">
            <div className="font-bold text-gray-300 whitespace-nowrap">
              Databases
            </div>
            <div className=" text-gray-400">
              MongoDB being my main choice, I also have a decent understanding
              of Firebase and MySQL.
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
