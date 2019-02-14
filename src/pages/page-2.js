import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";

const SecondPage = () => (
  <Layout>
    <SEO title="Me, Myself and... I" />
    <Link to="/"><img alt="french flag" src="../images/french-flag.png" /></Link>
    <h1>Ladies & Gentlemen...</h1>
    <p>Welcome to Me Myself & I, my personnal promotionnal site for being (I hope) recruited</p>
    <div style={{ maxWidth: `1000px` }}>
      <Image />
    </div>
    <br/>
    <h2>Who am I, Where do I come from?</h2>
      <p>15 years as a Non Commissioned Officer in the Army and 8 years as a temporary worker in several missions gave me the opportunity 
        to develop skills as client relationship, search for excellence and good work ethics.
  Fond of informatics, culture and communication, coding couldn't avoid me from loving it over and over again.
  Any computer language as a contemporary language is in constant evolution, simplification, adaptation.
  Proactive, curious and with a team spirit,  i'm involved to invest myself at the maximum in every challenge i take. 
  I'm looking for an Agile work environment, based on open communication values and search for performance. I'm looking for a job ASAP only near Bordeaux.</p>
    <h2>My projects</h2>
      <h3>Past</h3>
        <h4>Dijon Maintenance</h4>
          <p>For this professionnal project, our team had to create an app in order to link condominium syndicates with Dijon Maintenance,
            a building maintenance company specialized in locksmith, electricity & plumbery. In order to facilitate interventions, our 
            application had to trigger maintenance interventions in a simple and intuitive way through a dashboard gathering all essential 
            informations & functionnalities (scheduled interventions, intervention history, ongoing, condominium history, infrastructure details, 
            intervention triggering) through adapted forms.<br/>
            Technologies & tools: Symfony 3.4, OneUI LessCSS pre-processor, Bootstrap, Github.</p>
        <h4>Hackathons</h4>
          <p>2nd formation project: 24h Hackaton, 3 students.<br/> 
            We had to develop a RPG game using an MVC and propose features (special tricks, re-generation) using an API provided by the Wild Code School.<br/> 
            Technologies & tools : HTML5, CSS3, Symfony 3.4, SCRUM, GitHub, Bootstrap.</p>
      <h3>Present</h3>
    
  </Layout>
)

export default SecondPage
