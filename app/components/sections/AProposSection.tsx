"use client";

import { motion } from "framer-motion";

export default function AProposSection(): JSX.Element {
  return (
    <section id="apropos" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full transform translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 text-gray-800 dark:text-gray-200 relative">
        <div className="mb-12 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            À propos de moi
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-primary mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
        <div className="space-y-8 max-w-3xl mx-auto">
          <motion.p
            className="leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bonjour, je suis Romain Auroux, un jeune entrepreneur passionné par la stratégie et les technologies de rupture, récemment diplômé en gestion mondiale. Depuis 2021, je construis, teste et itère des projets en parallèle de mes études — pas par obligation, mais par conviction. C'est dans ce parcours entrepreneurial, au contact des réalités du terrain, que j'ai compris une chose essentielle : l'intelligence artificielle n'est pas un gadget futuriste, mais une opportunité immédiate et puissante, surtout pour les PME.
          </motion.p>

          <motion.p
            className="leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            C'est cette prise de conscience qui a bouleversé mon chemin. J'ai plongé tête la première dans l'univers de l'IA appliquée, en particulier dans l'automatisation intelligente, les assistants vocaux IA et la création d'outils low-code/no-code adaptés aux besoins concrets des entreprises. Résultat : j'ai fondé Velvet IA, un studio qui conçoit des agents IA pour accompagner les PME dans leur transition vers des modèles plus performants, plus agiles, plus scalables.
          </motion.p>

          <motion.p
            className="font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Mais je ne suis pas simplement un créateur d'agents IA.
          </motion.p>

          <motion.p
            className="leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Je suis aussi un stratège, passionné par les funnels d'acquisition, les go-to-market efficaces, les offres irrésistibles, et la recherche constante d'avantage concurrentiel. Je crois qu'en mixant la puissance de l'IA et une pensée produit centrée utilisateur, on peut transformer durablement la manière dont les PME fonctionnent, recrutent, vendent, servent et se développent.
          </motion.p>

          <motion.p
            className="leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Aujourd'hui, je cherche à rejoindre une structure ambitieuse avec qui je partage les mêmes valeurs : impact, innovation, autonomie et croissance durable. Je veux m'investir dans une entreprise qui me confiera des responsabilités concrètes, dans laquelle je pourrai accélérer le développement de projets IA stratégiques, tout en continuant à nourrir ma vision entrepreneuriale.
          </motion.p>

          <motion.div
            className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <p className="font-semibold mb-2">👉 Mon objectif :</p>
            <p>Vous faire gagner du temps, des clients, et de la performance, en mettant à votre service mes compétences hybrides : business, IA, produit.</p>
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <p className="font-semibold mb-2">Ce portfolio regroupe tout ce que vous devez savoir pour prendre la bonne décision :</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Mes projets IA développés de A à Z</li>
              <li>Mes compétences stratégiques et techniques</li>
              <li>Mon parcours académique et entrepreneurial</li>
              <li>Et surtout, ma capacité à passer à l'action rapidement</li>
            </ul>
          </motion.div>

          <motion.p
            className="mt-8 text-lg font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            Et si vous faisiez de moi la meilleure décision liée à l'IA de votre entreprise ?
          </motion.p>
        </div>
      </div>
    </section>
  );
} 