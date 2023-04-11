import projectData from '../projectData.json';
import PortfolioCard from './portfolioCard';

function Portfolio() {
  return (
    <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
      {projectData.map((v, i) => {
        return (
          <PortfolioCard
            index={i}
            title={v.title}
            desc={v.desc}
            image={v.image}
          />
        );
      })}
    </ul>
  );
}

export default Portfolio;
