import styles from "./page.module.css";
import { IBM_Plex_Mono } from "next/font/google";

const IBMFont = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const CustomLink = ({ text, link }) => {
    return (
      <div>
        <h4 className={styles.headline}>
          <a href={link} target="_blank" rel="noopener noreferrer" role="link">
            {text}
          </a>
        </h4>
      </div>
    );
  };

  const InlineLink = ({ text, link }) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" role="link">
        {text}
      </a>
    );
  };

  const baseurl = process.env.BASE_PATH || "";

  return (
    <div className={styles.container}>
      <div className={`${IBMFont.className} ${styles.leftitem}`}>
        <u>Home</u>
        <a href={`${baseurl}/projects`}>Projects</a>
      </div>
      <div className={`${IBMFont.className} ${styles.rightitem}`}>
        <h1 className={styles.headline}>Tony Lam</h1>
        <h3 className={styles.headline}>
          Computer Science Student at
          <br />
          <a
            href="https://www.helsinki.fi/en/faculty-science/faculty/computer-science"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
          >
            University of Helsinki
          </a>
        </h3>
        <h3 className={styles.headline}>
          Software Developer at
          <br />
          <a
            href="https://toska.dev"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
          >
            Toska
          </a>
        </h3>

        <h4 className={styles.headline}>
          I'm passionate about making an impact with tech. <br />
          {/* Previously worked at{" "}
          <InlineLink text={"Nosto"} link={"https://www.nosto.com/"} />,{" "}
          <InlineLink
            text={"Circles Consulting"}
            link={"https://circles.fi/"}
          />
          , <InlineLink text={"Analyse2"} link={"https://analyse2.com"} />,{" "}
          <InlineLink text={"Inrego"} link={"https://inrego.fi"} />. */}
        </h4>

        <div className={styles.links}>
          <CustomLink
            text={"LinkedIn"}
            link={"https://www.linkedin.com/in/lamtonylam"}
          />
          <CustomLink text={"GitHub"} link={"https://github.com/lamtonylam"} />
          <CustomLink text={"Email"} link={"mailto:tony@testausserveri.fi"} />
          <CustomLink text={"Telegram"} link={"https://t.me/tonymaatti"} />
        </div>
      </div>
    </div>
  );
}
