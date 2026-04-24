import styles from "./page.module.css";
import { IBM_Plex_Mono } from "next/font/google";
import projects from "@/data/projects.json";

const IBMFont = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const Project = ({ name, desc, links }) => {
    return (
      <div className={styles.projectitem}>
        <b>
          <p>{name}</p>
        </b>
        <p dangerouslySetInnerHTML={{ __html: desc }}></p>
        {links.map((link, index) => (
          <div key={index} style={{ paddingBottom: "8px" }}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </div>
        ))}
      </div>
    );
  };
  const baseurl = process.env.BASE_PATH || "";

  return (
    <div className={styles.container}>
      <div className={`${IBMFont.className} ${styles.leftitem}`}>
        <a href={`${baseurl}/`}>Home</a>
        <u>Projects</u>
      </div>
      <div className={`${IBMFont.className} ${styles.rightitem}`}>
        <h1 className={styles.headline}>Projects</h1>{" "}
        {projects.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            desc={project.desc}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}
