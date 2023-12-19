import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

let title = "Al-hasan Sarkar - Professional SEO Expert | Boosting Online Visibility and Rankings";
let keywords =
  "SEO Expert, Search Engine Optimization, Digital Marketing Specialist, Online Visibility, Website Ranking, SEO Strategies, Organic Traffic, SEO Consultant";
let description =
  "Welcome to the portfolio of Al-hasan Sarkar, a seasoned SEO expert dedicated to enhancing your online presence. With proven strategies and a passion for digital marketing, I specialize in optimizing websites for search engines. Let's collaborate to elevate your brand's visibility and achieve higher rankings in the digital landscape";

export const metadata = {
  title: title,
  keywords: keywords,
  description: description,
  openGraph: {
    title: title,
    description: description,
    images: ["../../public/images/profile.jpg"],
  },
  twitter: {
    title: title,
    description: description,
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />

      <Footer />
    </main>
  );
}
