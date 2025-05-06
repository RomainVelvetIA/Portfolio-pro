"use client";

import { motion } from "framer-motion";

interface SkillPoint {
  title: string;
  points: string[];
}

export default function CompetencesSection() {
  const skills: SkillPoint[] = [
    {
      title: "🧠 Intelligence Artificielle appliquée",
      points: [
        "Prompt engineering avancé (GPT-4, Claude, etc.)",
        "Conception d'agents vocaux IA (Vapi, Retell AI)",
        "Intégration d'agents IA dans des workflows métier",
        "Automatisation IA low-code/no-code (Zapier, Make)",
        "Utilisation de LLM pour tâches métiers : résumé, tri, réponse client",
        "Création d'agents multicanaux (voix, web, email)",
        "Sélection & orchestration d'outils IA selon cas d'usage",
        "Évaluation de la performance des agents (taux de succès, fallback, etc.)",
      ],
    },
    {
      title: "📈 Stratégie Produit & Business IA",
      points: [
        "Positionnement produit IA & identification de niches",
        "Go-to-market IA & adoption PME",
        "Création de MVP IA rapide & opérationnel",
        "Structuration d'offres SaaS autour de la valeur IA",
        "Monétisation (usage-based, freemium, offres d'entrée)",
        "Étude de marché et veille concurrentielle IA",
        "Détection de pain points à automatiser",
      ],
    },
    {
      title: "🔁 Process & Automatisation",
      points: [
        "Mapping & modélisation de workflows (vente, support, back-office)",
        "Design de process hybrides humain + IA",
        "Automatisation avec Make, Zapier, Notion, Airtable",
        "Documentation & scalabilité des automations",
        "Suivi de performance & amélioration continue",
      ],
    },
    {
      title: "🎯 Gestion de projet & Product Management",
      points: [
        "Définition de roadmap IA",
        "Rédaction de specs fonctionnelles IA",
        "Tests utilisateurs & itération continue",
        "Coordination tech/produit/clients",
        "Pilotage d'objectifs orientés ROI et adoption",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="competences" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mes Compétences Clés</h2>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Découvrez mes expertises en Intelligence Artificielle, Stratégie Produit, Automatisation et Gestion de Projet.
          </p>
        </div>
        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border dark:border-gray-700"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {skill.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 