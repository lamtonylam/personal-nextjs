import styles from "./page.module.css";
import { IBM_Plex_Mono } from "next/font/google";

const IBMFont = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const Project = ({ name, desc, link, links }) => {
    return (
      <div className={styles.projectitem}>
        <b>
          <p>{name}</p>
        </b>
        <p dangerouslySetInnerHTML={{ __html: desc }}></p>
        {links.map((link, index) => (
          <div key={index} style={{ paddingBottom: "8px" }}>
            <a href={link}>{link}</a>
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
        <Project
          name="Osakuntabaari calendar"
          desc="Hämis canteen menu into ICS file to import into your calendar"
          links={["https://hamis.ynot.fi/"]}
        />
        <Project
          name="TKT-hakutilastoja"
          desc="Interactive website that visualizes historical admission point requirements for Computer Science programs across Finnish universities.
        "
          links={["https://yliopistoon.vercel.app"]}
        />
        <Project
          name="Unicafevoting"
          desc="Voting on Unicafe restaurants for lunchgroups with actionable insights"
          links={["https://github.com/lamtonylam/unicafevoting"]}
        />
        <Project
          name="Alkoscraper"
          desc="Scraping alko.fi prices API <br> <small> not publicly hosted </small>"
          links={["https://github.com/lamtonylam/alkoscraper"]}
        />
        <Project
          name="Mekuma tracker & telegram bot"
          desc="Website & Telegram bot that tracks mexican oven sausage availability across Unicafe's restaurants"
          links={[
            "https://makkara.fly.dev",
            "https://makkara.fly.dev/api",
            "https://t.me/mekumabot",
          ]}
        />
        <Project
          name="HaalarimerkkiDEX"
          desc="Databases and web programming coursework"
          links={["https://haalarimerkkidex.fly.dev"]}
        />
      </div>
    </div>
  );
}
