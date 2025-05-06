"use client";

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AccueilSection() {
  return (
    <section id="accueil" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1 
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Romain Auroux <br />
                Entrepreneur & passionné d'IA
              </motion.h1>
              <motion.p 
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Diplômé en gestion mondiale de l'Université d'Ottawa, je suis passionné par l'Intelligence Artificielle et l'entrepreneuriat. Actuellement à la recherche d'une position de directeur du développement stratégique IA des PME. Découvrez mon parcours et mes projets innovants.
              </motion.p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button asChild size="lg">
                  <a href="#processus">Mon parcours</a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button asChild size="lg" variant="outline">
                  <a href="#contact">Me contacter</a>
                </Button>
              </motion.div>
            </div>
          </div>
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/romain.jpg"
              alt="Photo professionnelle de Romain Auroux"
              width={338}
              height={338}
              className="rounded-full object-cover object-top"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 