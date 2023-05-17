import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";

function Github() {
  return (
    <div className="github">
      <div className="github_text">
        <h2>
          Github <span>Calendar</span>
        </h2>
      </div>
      <div className="cal">
        <GitHubCalendar
        fontSize={18}
        blockSize={20}
        username="uttamkrshaw" />
      </div>
    </div>
  );
}

export default Github;
