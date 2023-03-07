import React from 'react'
import "./github.css"

const GithubStats = () => {
  return (
    <div>
        <div className="streak">
        <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=uttamkrshaw" alt="" srcset="" />
        <img   id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs?username=uttamkrshaw&show_icons=true&locale=en&layout=compact" alt="" />
        </div>
        <div className="streak">
        <img  id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=uttamkrshaw&show_icons=true&locale=en" alt="" srcset="" />
        </div>
    </div>
  )
}

export default GithubStats