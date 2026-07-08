import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import {
  getGitHubStats,
  getGitHubRepositories,
} from "../services/githubService";
import { containerVariants, itemVariants } from "../utils/animations";

/**
 * GitHub Statistics Section
 */
const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, reposData] = await Promise.all([
          getGitHubStats(),
          getGitHubRepositories(),
        ]);
        setStats(statsData);
        setRepos(reposData || []);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg-secondary to-background">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-primary/20 rounded-lg mb-4 max-w-xs mx-auto" />
            <div className="h-6 bg-primary/20 rounded-lg max-w-lg mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg-secondary to-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          subtitle="Open Source"
          title="GitHub Statistics"
          description="My GitHub activity and contributions."
        />

        {/* Stats Overview */}
        {stats && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { label: "Followers", value: stats.followers },
              { label: "Following", value: stats.following },
              { label: "Public Repos", value: stats.publicRepos },
              { label: "Gists", value: stats.publicGists },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 bg-bg-secondary/50 border border-primary/10 rounded-xl text-center hover:border-primary/30 transition-all"
              >
                <div className="text-2xl md:text-3xl font-poppins font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {item.value}
                </div>
                <p className="text-text-secondary text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Top Repositories */}
        {repos.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-poppins font-bold text-text-primary mb-8">
              Top Repositories
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.slice(0, 6).map((repo, idx) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="p-6 bg-bg-secondary/50 border border-primary/10 rounded-xl hover:border-primary/30 transition-all group"
                >
                  <h4 className="text-lg font-poppins font-bold text-accent mb-2 group-hover:text-primary transition-colors">
                    {repo.name}
                  </h4>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {repo.description || "No description provided"}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    {repo.language && (
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                        {repo.language}
                      </span>
                    )}
                    <div className="flex gap-4 text-text-secondary">
                      <span>⭐ {repo.stargazers_count}</span>
                      <span>🍴 {repo.forks_count}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* GitHub Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 bg-bg-secondary/50 border border-primary/10 rounded-xl">
              <p className="text-text-secondary text-sm mb-4">GitHub Stats</p>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=theankitkumar27&theme=dark&show_icons=true&hide_border=true&bg_color=0a0e27&text_color=ffffff&icon_color=2563eb`}
                alt="GitHub Stats"
                className="w-full rounded-lg"
              />
            </div>

            <div className="p-6 bg-bg-secondary/50 border border-primary/10 rounded-xl">
              <p className="text-text-secondary text-sm mb-4">Top Languages</p>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=theankitkumar27&theme=dark&hide_border=true&bg_color=0a0e27&text_color=ffffff&layout=compact`}
                alt="Top Languages"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
