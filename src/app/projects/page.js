import styles from "./page.module.css";
import { IBM_Plex_Mono } from "next/font/google";

const IBMFont = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const Project = ({ name, desc, link }) => {
    return (
      <div className={styles.projectitem}>
        <b>
          <p>{name}</p>
        </b>
        <p>{desc}</p>
        <a href={link}>{link}</a>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={`${IBMFont.className} ${styles.leftitem}`}>
        <a href={`${process.env.BASE_PATH}/`}>Home</a>
        <u>Projects</u>
      </div>
      <div className={`${IBMFont.className} ${styles.rightitem}`}>
        <h1 className={styles.headline}>Projects</h1>
        <Project
          name="Mekuma tracker"
          desc="Website that tracks mexican oven sausage availability across Unicafe's restaurants"
          link="https://makkara.fly.dev"
        />
        <Project
          name="Mekumabot"
          desc="Telegram bot that tracks mexican oven sausage availability across Unicafe's restaurants "
          link="https://t.me/mekumabot"
        />
        <Project
          name="HaalarimerkkiDEX"
          desc="Databases and web programming coursework"
          link="https://haalarimerkkidex.fly.dev/"
        />
        <Project
          name="Kumpulabikes"
          desc="Kumpula citybike availability tracker"
          link="https://kumpulabikes.fly.dev/"
        />
      </div>
    </div>
  );
}
