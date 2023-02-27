import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { What, Community, Learn } from "@site/src/components/HomepageFeatures";
import { BsDiscord } from "react-icons/bs";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <img src="/img/the-infinite-loop.png" />
          </div>
          <div className="col col--8">
            <h1 className="hero__title">
              Stop failed agile implementations from making your digital product
              teams miserable and setting your organisation up for failure
            </h1>
            <h2>
              Create a culture of trust, ownership, and data-driven continuous
              experimentation that fosters sustainable product-led growth and
              high-performance digital product teams that can thrive in the age
              of disruption
            </h2>
            <div className="buttons">
              <Link
                className="button button--primary button--lg"
                to="https://discord.gg/QJX6kWvxWP"
              >
                <BsDiscord />
                <span className="button-label">Join us on Discord</span>
              </Link>
              <Link
                className="button button--primary button--lg"
                to="/guidefundamentals/about"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Stop failed agile implementations from making your digital product teams miserable and setting your organisation up for failure"
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <What />
        <Learn />
        <Community />
      </main>
    </Layout>
  );
}
