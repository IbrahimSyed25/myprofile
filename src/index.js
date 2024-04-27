import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
const skills = [
  {
    skill: "HTML+CSS",
    Level: "Intermediate",
    color: "blue",
  },
  {
    skill: "Javascript",
    Level: "Advanced",
    color: "red",
  },
  {
    skill: "React",
    Level: "Beginner",
    color: "orange",
  },
  {
    skill: "A360 (RPA)",
    Level: "Advanced",
    color: "red",
  },
  {
    skill: "SQL",
    Level: "Intermediate",
    color: "blue",
  },
  {
    skill: "My SQL",
    Level: "Intermediate",
    color: "blue",
  },
  {
    skill: "Python",
    Level: "Intermediate",
    color: "blue",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="Rahim.jpg" alt="Rahim"></img>;
}
function Intro() {
  return (
    <div>
      <h1>Syed Ibrahim</h1>
      <p>
        An enthusiastic, passionate, and energetic RPA developer with 3 years of
        experience prominently working with highly interactive bots to modify
        their behavior according to business needs. have more passion towards
        react development and currently pursuing the React Course in Udemy
      </p>
    </div>
  );
}
function SkillList() {
  let Emoji = "";
  return (
    <div className="skill-list">
      {skills.map((skill) => {
        if (skill.Level === "Beginner") Emoji = "🙂";
        else if (skill.Level === "Intermediate") {
          Emoji = "😊";
        } else {
          Emoji = "💪";
        }

        return (
          <Skill
            skill={skill.skill}
            Emoji={Emoji}
            color={skill.color}
            key={skill.skill}
          />
        );
      })}
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.Emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
// {
//   /* Should contain one Skill component
//         for each web dev skill that you have,
//         customized with props */
// }
