/**
 * GitHub API Service
 * Fetch GitHub user statistics and contribution data
 */

const GITHUB_USERNAME =
  import.meta.env.VITE_GITHUB_USERNAME || "theankitkumar27";
const GITHUB_API_URL = "https://api.github.com";

/**
 * Fetch GitHub user profile
 */
export const getGitHubUserProfile = async () => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error("Failed to fetch GitHub profile");
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    return null;
  }
};

/**
 * Fetch GitHub repositories
 */
export const getGitHubRepositories = async () => {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=stars&order=desc&per_page=6`,
    );
    if (!response.ok) throw new Error("Failed to fetch repositories");
    return await response.json();
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};

/**
 * Fetch GitHub user statistics
 */
export const getGitHubStats = async () => {
  try {
    const profile = await getGitHubUserProfile();
    if (!profile) return null;

    return {
      followers: profile.followers,
      following: profile.following,
      publicRepos: profile.public_repos,
      publicGists: profile.public_gists,
      bio: profile.bio,
      location: profile.location,
      email: profile.email,
      blog: profile.blog,
      twitterUsername: profile.twitter_username,
      company: profile.company,
      avatar: profile.avatar_url,
      profileUrl: profile.html_url,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
};

/**
 * Calculate contribution statistics
 */
export const calculateContributionStats = (repositories) => {
  if (!repositories || repositories.length === 0) {
    return {
      totalStars: 0,
      totalForks: 0,
      totalWatchers: 0,
      totalLanguages: new Set(),
    };
  }

  const stats = {
    totalStars: 0,
    totalForks: 0,
    totalWatchers: 0,
    totalLanguages: new Set(),
    topLanguages: {},
  };

  repositories.forEach((repo) => {
    stats.totalStars += repo.stargazers_count || 0;
    stats.totalForks += repo.forks_count || 0;
    stats.totalWatchers += repo.watchers_count || 0;

    if (repo.language) {
      stats.totalLanguages.add(repo.language);
      stats.topLanguages[repo.language] =
        (stats.topLanguages[repo.language] || 0) + 1;
    }
  });

  stats.totalLanguages = Array.from(stats.totalLanguages);

  return stats;
};

/**
 * Get GitHub contribution graph data
 * Note: This requires scraping or GraphQL API with authentication
 */
export const getGitHubContributionData = async () => {
  try {
    // This is a placeholder. For production, use GitHub GraphQL API
    const profile = await getGitHubUserProfile();
    if (!profile) return null;

    return {
      username: profile.login,
      totalContributions: profile.public_repos + profile.public_gists,
      longestStreak: 0, // Requires additional API call
      currentStreak: 0, // Requires additional API call
    };
  } catch (error) {
    console.error("Error fetching contribution data:", error);
    return null;
  }
};

/**
 * Get GitHub streak data
 * Note: Uses GitHub Streak API (external service)
 */
export const getGitHubStreak = async () => {
  try {
    const response = await fetch(
      `https://streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=dark`,
    );
    if (!response.ok) throw new Error("Failed to fetch streak");
    return response.url; // Returns image URL
  } catch (error) {
    console.error("Error fetching GitHub streak:", error);
    return null;
  }
};

/**
 * Get GitHub stats card
 */
export const getGitHubStatsCard = async () => {
  try {
    return `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&theme=dark&show_icons=true&hide_border=true`;
  } catch (error) {
    console.error("Error generating stats card:", error);
    return null;
  }
};

/**
 * Get top languages card
 */
export const getTopLanguagesCard = async () => {
  try {
    return `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&theme=dark&hide_border=true&layout=compact`;
  } catch (error) {
    console.error("Error generating languages card:", error);
    return null;
  }
};
