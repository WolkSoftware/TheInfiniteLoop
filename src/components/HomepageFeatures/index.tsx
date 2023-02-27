import React from "react";
import Link from "@docusaurus/Link";
import { BsDiscord } from "react-icons/bs";

export function Learn(): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <h1 className="sectionTitle">Resources</h1>
            <h2>
              Our guide is the best place to start if you're looking to learn
              about The Infinite Loop. It covers the principles, benefits, and
              practical steps to implement it. If you're looking for even more
              in-depth information, check out The Infinite Loop book (coming
              soon). We hope you find our resources helpful and look forward to
              supporting you on your journey!
            </h2>
            <div className="buttons">
              <Link
                className="button button--primary button--lg"
                to="/guide/fundamentals/about"
              >
                Read our guide
              </Link>
              <Link className="button button--primary button--lg" to="/book">
                Get our book
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <img src="/img/learn.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Community(): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <h1 className="sectionTitle">Community</h1>
            <h2>
              We believe that one of the best ways to learn is by engaging with
              others. That's why we invite you to join our friendly Discord
              community, where you can connect with other members and learn from
              their experiences. There are so many ways to get involved, from
              sharing your thoughts and feedback, to organising meetups, and
              even contributing to our projects on GitHub. We can't wait to see
              what you bring to the table and look forward to growing together!
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
                to="/community"
              >
                Community guidelines
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <img src="/img/services.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function What(): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1 className="sectionTitle">What is The Infinite Loop?</h1>
            <h2>
              The Infinite Loop is an Agile software development methodology
              designed to help technology businesses create a culture of trust,
              ownership, and data-driven continuous experimentation that fosters
              sustainable product-led growth and high-performance digital
              product teams that can thrive in the age of disruption.
            </h2>
            <div className="buttons">
              <Link
                className="button button--primary button--lg"
                to="/guide/fundamentals/about"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <img src="/img/loop-b.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
