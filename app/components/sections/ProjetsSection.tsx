"use client";

import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { Footprints, Facebook, Cpu, Building } from "lucide-react";

const projetsMod = [
  {
    id: 1,
    titre: "Achat / Revente de sneakers et vêtements hype",
    description: "2021 – Bordeaux & e-commerce",
    image: "/images/achat-revente.jpeg",
    details: [
      "Premier projet entrepreneurial lancé en parallèle de mes études, j'ai développé une activité de revente de produits à forte demande (sneakers en édition limitée, streetwear) via des marketplaces et un réseau local.",
      "Cela m'a initié aux dynamiques du marché secondaire, à la logistique e-commerce, au marketing produit et à la gestion de stock multicanal.",
    ],
    competences: [
      "Négociation et relation client",
      "Développement d'un branding minimaliste sur Instagram",
      "Arbitrage entre prix d'achat, rareté, et valeur perçue",
      "Premiers pas en automatisation simple (suivi de stock, alertes drops)",
    ],
    icone: <Footprints className="w-6 h-6" />,
  },
  {
    id: 2,
    titre: "Agence Meta Ads pour agents immobiliers (Québec)",
    description: "2024 – Montréal (à distance)",
    image: "/images/agency-meta-ads.png",
    details: [
      "Co-fondateur d'une micro-agence publicitaire spécialisée en acquisition immobilière, j'ai conçu et géré des campagnes Meta Ads ciblant les marchés locaux au Québec en parallèle de mon stage en immobilier.",
      "L'objectif : générer des leads qualifiés pour des mandats de vente immobilière dans un marché compétitif.",
      "J'ai travaillé en lien direct avec les agents pour construire des tunnels d'acquisition performants et automatiser le suivi des prospects.",
    ],
    competences: [
      "Création de funnels d'acquisition (formulaires, landing pages)",
      "Copywriting orienté conversion",
      "Gestion de budget pub, A/B testing, reporting",
      "Relation B2B + adaptation à un secteur très réglementé",
    ],
    icone: <Facebook className="w-6 h-6" />,
  },
  {
    id: 3,
    titre: "Velvet IA (agents vocaux IA et automatisations)",
    description: "2024 – 2025",
    image: "/images/page d'acceuil site velvet IA.png",
    details: [
      "Velvet IA est le projet qui synthétise ma vision long terme : rendre l'IA accessible, utile et rentable pour les PME.",
      "J'ai fondé cette initiative pour développer des agents vocaux IA spécialisés dans l'appels sortants ou le service client, en utilisant des outils comme Vapi ou Retell AI, connectés à des CRM et plateformes Ads.",
      "J'ai aussi automatisé des process complets : génération de devis, relance clients, qualification de leads, etc.",
    ],
    competences: [
      "Prompt engineering avancé & conception d'agents conversationnels",
      "Intégration d'API no-code/low-code (Make, Firebase, Vapi)",
      "Structuration d'une offre SaaS (tarification, onboarding client)",
      "Positionnement produit & prospection B2B",
    ],
    icone: <Cpu className="w-6 h-6" />,
  },
  {
    id: 4,
    titre: "Développement d'un SaaS pour la conformité réglementaire (CNCGP)",
    description: "2025 – En cours de développement",
    image: "/images/page d'accueil saas.png",
    details: [
      "Ce projet vise à faciliter la mise en conformité réglementaire des gestionnaires de patrimoine affiliés à la CNCGP, grâce à un SaaS personnalisé.",
      "J'ai conçu l'architecture de la solution : onboarding automatisé, génération de documents réglementaires, espace client sécurisé, avec des outils comme Firebase, Stripe, et de l'IA pour assister les utilisateurs.",
    ],
    competences: [
      "Conception produit dans un environnement réglementé",
      "Architecture SaaS (authentification, workflow documentaires)",
      "Automatisation d'onboarding client & support IA",
      "Collaboration avec des acteurs du secteur financier",
    ],
    icone: <Building className="w-6 h-6" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function ProjetsSection() {
  return (
    <section id="projets" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mon Parcours Entrepreneurial</h2>
          <p className="mt-4 max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            De 2021 à aujourd'hui, découvrez mes projets clés mêlant entrepreneuriat et Intelligence Artificielle.
          </p>
        </div>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projetsMod.map((projet) => (
            <motion.div key={projet.id} variants={itemVariants}>
              <ProjectCard projet={projet} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 