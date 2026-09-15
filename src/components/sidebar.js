import { IBM_Plex_Mono } from "next/font/google";
import styles from "../app/page.module.css";

const IBMFont = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export default function Sidebar({ baseurl = "", active = "home" }) {
  return (
    <div className={`${IBMFont.className} ${styles.leftitem}`}>
      {active === "home" ? <u>Home</u> : <a href={`${baseurl}/`}>Home</a>}
      {active === "projects" ? <u>Projects</u> : <a href={`${baseurl}/projects`}>Projects</a>}
      <a href="https://blog.ynot.fi" target="_blank" rel="noopener noreferrer" role="link">
        Blog
      </a>
    </div>
  );
}
