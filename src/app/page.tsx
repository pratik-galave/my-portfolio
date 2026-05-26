import Hero from "../components/home/Hero";
import About from "../components/home/About";
import ProjectsExperience from "../components/home/ProjectsExperience";
import Skills from "../components/home/Skills";
import AchievementsContact from "../components/home/AchievementsContact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsExperience />
      <Skills />
      <AchievementsContact />
    </main>
  );
}
