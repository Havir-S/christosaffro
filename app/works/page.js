"use client";

import Item from "./item";
import { CATEGORIES } from "./categories";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  return (
    <motion.div
      layout
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ y: 20, opacity: 0 }}
      className="max-w-screen-lg mt-4  w-[90%] mx-auto"
    >
      <h3 className="font-bold text-2xl border-b-[2px] border-gray-400 pb-[1px] w-fit">
        Works
      </h3>
      <div className=" mt-3 flex gap-3">
        {CATEGORIES.map((category) => (
          <div
            onClick={() => {
              setSelectedCategory(category);
            }}
            data-category={category}
            className={`${
              selectedCategory === category ? "bg-[#c0c0c027]" : ""
            } px-3 py-2 text-sm cursor-pointer border border-[#c0c0c027] rounded-md`}
            key={category}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="pb-12 border-b border-gray-700 max-w-[400px] md:max-w-full mx-auto">
        <h2 className="text-center text-xl pb-2 text-gray-300 my-6 font-bold">
          TOP PROJECTS
        </h2>
        <div className="grid grid-cols-1 lg:flex flex-wrap justify-center gap-6 gap-y-12 md:grid-cols-2 ">
          <Item name={"AirBnB"} src={"/images/airbnb2.jpg"}>
            Copy of AirBnb where I have recreated the functionality of the
            original as well as added something from me - 3D Rendering of rooms
            with Three.js + payment with STRIPE and PayPal
          </Item>
          <Item name={"Amazon"} src={"/images/amazon2.jpg"}>
            Using Next.js, Firebase, google-auth and dummy API and STRIPE to
            recreate the Amazon's web service
          </Item>
          <Item name={"3D Portfolio"} src={"/images/3dportfolio2.jpg"}>
            Three.js utilized for rendering 3D Scenes created entirely in
            Blender
          </Item>
          <Item name={"Instagram"} src={"/images/insta3.jpg"}>
            Social Media Website which makes use of REST API and collects and
            saves data to Firebase.
          </Item>
          <Item name={"Szafran Projekt"} src={"/images/projektszafran.jpg"}>
            Landing Page + Logo Design for a Civil Engineering company I've
            worked for.
          </Item>
        </div>
      </div>

      <div className="py-12 border-b border-gray-700 max-w-[400px] md:max-w-full mx-auto">
        <h2 className="text-center text-xl text-gray-400 my-6 font-bold">
          Other Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          <Item name={"Blog"} src={"/images/blog2.jpg"}>
            Check out what I'm currently working on. For database we're using
            Sanity.IO
          </Item>
          <Item name={"Memento Mori"} src={"/images/memento2.jpg"}>
            Check out how long You've lived in a form of dots. Would You like to
            know how many dots of your life are left to be filled?
          </Item>
          <Item name={"Facebook"} src={"/images/facebook2.png"}>
            Facebook feed page recreated with Firebase, Tailwind and
            Google-Auth.
          </Item>
          <Item name={"Hulu"} src={"/images/hulu2.png"}>
            Dynamically rendering content thanks to TMDB's API.
          </Item>
          <Item
            name={"File storage local server"}
            src={"/images/simpleserver2.jpg"}
          >
            Server used for storing and browsing files. It's currently used in
            my home vicinity, between our local PCs.
          </Item>
          <Item name={"Old Portfolio website"} src={"/images/portfolio2d2.jpg"}>
            Uses JS Particles, as well as blender made backgrounds and images to
            "move around".
          </Item>
        </div>
      </div>

      <div className="py-12 border-b border-gray-700 max-w-[400px] md:max-w-full mx-auto">
        <h2 className="text-center text-xl text-gray-400 my-6 font-bold">
          Old Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          <Item name={"Pizzeria"} src={"/images/restaurant2.jpg"}>
            Fully Vanilla JS and CSS website for a Pizza place. It's also the
            first time I used Blender for website props.
          </Item>
          <Item name={"Battleships Game"} src={"/images/battleships2.jpg"}>
            Vanilla Javascript to operate a classic board game.
          </Item>
          <Item name={"Pomodoro"} src={"/images/pomodoro.jpg"}>
            Little project to work on time management skill.
          </Item>
          <Item name={"Tic Tac Toe"} src={"/images/tictactoe2.jpg"}>
            A classic Tic Tac Toe game turned into a fake "Twitch.tv" game with
            chat for fake viewers.
          </Item>
        </div>
      </div>
    </motion.div>
  );
}
