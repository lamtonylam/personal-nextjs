import styles from "./page.module.css";
import { IBM_Plex_Mono } from "next/font/google";

const IBMFont = IBM_Plex_Mono({ weight: "200", subsets: ["latin"] });

export default function Home() {
    const CustomLink = ({ text, link }) => {
        return (
            <div>
                <h4>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        role="link"
                    >
                        {text}
                    </a>
                </h4>
            </div>
        );
    };

    return (
        <div className={IBMFont.className}>
            <h1>Tony Lam</h1>
            <h3>
                Computer Science Student at{" "}
                <a
                    href="https://www.helsinki.fi/en/faculty-science/faculty/computer-science"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="link"
                >
                    University of Helsinki
                </a>
            </h3>
            <div className={styles.links}>
                <CustomLink
                    text={"LinkedIn"}
                    link={"https://www.linkedin.com/in/lamtonylam"}
                />
                <CustomLink
                    text={"GitHub"}
                    link={"https://github.com/lamtonylam"}
                />
                <CustomLink
                    text={"Email"}
                    link={"mailto:tony@testausserveri.fi"}
                />
            </div>
        </div>
    );
}
