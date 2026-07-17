import "./Hero.css";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-bg"></div>

      <div className="hero-grid"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <motion.div
          className="hero-badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
        >

          <Sparkles size={18} />

          <span>

            NEXT GENERATION AI COMPANY

          </span>

        </motion.div>

        <motion.h1

          className="hero-title"

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: .8 }}

        >

          BUILD THE

          <br />

          FUTURE

          <br />

          WITH

          <span>

            ERNURVYNX

          </span>

        </motion.h1>

        <motion.p

          className="hero-text"

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 1.2 }}

        >

          Websites.

          AI Systems.

          Mobile Apps.

          Branding.

          3D Experiences.

          Everything in one futuristic platform.

        </motion.p>

        <motion.div

          className="hero-buttons"

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 1.5 }}

        >

          <button className="primary-btn">

            Start Project

            <ArrowRight size={18} />

          </button>

          <button className="secondary-btn">

            View Portfolio

          </button>

        </motion.div>

      </motion.div>
