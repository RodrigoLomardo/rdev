import Link from "next/link";
import React, { useEffect, useState } from "react";


function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/koolkishan/chat-app-react-nodejs")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer>
      <Link
        href="#"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Created By Rdev</span>
        <div className="footer-info">Using Next.js, Sass and TypeScript</div>
        
    
      </Link>
    </footer>
  );
}

export default Footer;