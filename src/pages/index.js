import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Moi, Moi-même &... Moi" keywords={[`Frédéric DUPOUY`, `site personnel`, `gatsby`]} />
    <Link to="/page-2/"><img alt="union jack" src="../images/union-jack.png" /></Link>
    <h1>Mesdames & Messieurs...</h1>
    <p>Bienvenue sur "Moi, Moi-même & Je, mon site personnel pour (je l'espère) être recruté.</p>
    <div style={{ maxWidth: `1000px` }}>
      <Image />
    </div>
    <br/>
    <h2>Qui je suis, d'où je viens?</h2>
      <p>Quinze ans au service du Ministère de la Défense &  huit années d’intérim dans diverses missions m’ont permis de développer 
        des compétences comme le sens de la relation client, la recherche de l’excellence et le goût du travail bien fait. Passionné 
        entre autres de technologie, de culture et de communication, le code ne pouvait que me pousser à y prendre goût. N’importe 
        quel langage informatique comme un langage contemporain est en constante évolution, simplification, adaptation. Proactif, 
        curieux et faisant preuve d’esprit d’équipe, j’ai à cœur de m’investir au maximum dans ce que j’entreprends. Je recherche un 
        environnement de travail agile, basé sur des valeurs de communication ouverte et de recherche de performance. En recherche 
        d'un premier emploi (disponibilité immédiate) uniquement en région bordelaise.</p>
    <h2>Mes projets</h2>
      <h3>Passé</h3>
        <h4>Dijon Maintenance</h4>
          <p>Pour ce projet à portée professionnelle, nous devions créer une application permettant la mise en relation de syndicats 
            de copropriété avec un prestataire de services de maintenance du bâtiment, Dijon Multi Services, spécialisée dans les 
            interventions en plomberie, électricité et serrurerie. Nous travaillions directement pour l'entreprise du numérique AKYOS, 
            basée à Dijon. Nous avons mis en place une application permettant de déclencher des interventions de maintenance de manière 
            simple et intuitive via un tableau de bord regroupant les différentes fonctionnalités nécessaires (consultation des 
            interventions planifiées, de l'historique des interventions, des interventions en cours, des copropriétés appartenant aux 
            syndicats, détail des installations, déclenchement d'une demande d'intervention) via des formulaires adaptés aux différents besoins.<br/>
            Logiciels & outils utilisés: Symfony 3.4, pré-processeur Less One U.I , Bootstrap, Github</p>
        <h4>Hackathons</h4>
          <p>mars 2018 (24h), en équipe de 3 élèves.<br/>
          Nous devions réaliser un jeu de combat en tour à tour via un MVC à l’aide de Symfony et proposer des fonctionnalités originales 
          (coups spéciaux, re-génération des points de vie) en nous appuyant également sur une base de données fournie. Les critères de 
          validation étaient un choix de personnages parmi la base de données, un combat jusqu’au K.O., un mode 1 Vs 1 ainsi qu’un résumé du combat.<br/>
          Langages & framework : HTML5, CSS3, Symfony 3.4. <br/>Méthodologie : SCRUM.<br/>Outils : GitHub, Bootstrap.</p>
      <h3>Présent</h3>
          
    
  </Layout>
)

export default IndexPage
