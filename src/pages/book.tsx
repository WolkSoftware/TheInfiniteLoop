import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const SubscribeModal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "60%",
      zIndex: 9999,
      background: "var(--ifm-card-background-color)",
      color: "var(--ifm-font-color-base)",
      border: "1px solid var(--ifm-color-emphasis-200)",
    },
  };
  const [value, setValue] = useState("");
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className="modal-content">
        <div className="row">
          <div className="col col--4">
            <img src="/img/book.png" />
          </div>
          <div className="col col--8">
            <h1>Get notified when The Infinite Loop becomes available!</h1>
            <h2>
              Thank you for your interest! We're sorry, but The Infinite Loop is
              not available yet. Rest assured, we're working hard to bring you
              the best possible book.
            </h2>
            <div id="mc_embed_signup">
              <form
                action="https://wolksoftware.us10.list-manage.com/subscribe/post?u=0ce8d0ae852b92a8957a8d9a7&amp;id=d32657cc0b&amp;f_id=00cacbe5f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_self"
              >
                <div id="mc_embed_signup_scroll">
                  <h3>Subscribe to be notified as soon as the book is ready</h3>
                  <div className="mc-field-group">
                    <label>
                      Email Address <span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      value={value}
                      onChange={handleInputChange}
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      required
                    />
                    <span
                      id="mce-EMAIL-HELPERTEXT"
                      className="helper_text"
                    ></span>
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_0ce8d0ae852b92a8957a8d9a7_d32657cc0b"
                      value=""
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button button--primary button--lg"
                    />
                  </div>
                </div>
              </form>
            </div>
            <p>
              ⓘ By submitting your email, you agree to receive occasional
              updates and marketing messages from The Infinite Loop and/or Wolk
              Software. We will never share your email address with anyone else.
              You can unsubscribe at any time by clicking the link in the footer
              of our emails. For information about our privacy practices, please
              visit our website. We use Mailchimp as our marketing platform. By
              clicking below to subscribe, you acknowledge that your information
              will be transferred to Mailchimp for processing.{" "}
              <a href="https://mailchimp.com/legal/terms" target="_blank">
                Learn more about Mailchimp's privacy practices here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export function AboutTheAuthor(): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <h1 className="sectionTitle">About the author</h1>
            <h2>
              Remo Jansen is the Founder and CEO of{" "}
              <Link to="https://www.wolksoftware.com/">Wolk Software</Link> and
              EP at <Link to="https://www.jsday.ie">JSDayIE</Link>, a former{" "}
              <Link to="https://mvp.microsoft.com/en-us/PublicProfile/5002223">
                Microsoft MVP
              </Link>{" "}
              and the author of{" "}
              <Link to="https://www.amazon.com/stores/Remo-H.-Jansen/author/B015LX8AZM">
                several books on TypeScript
              </Link>
              , and <Link to="https://inversify.io/">InversifyJS</Link>, an
              open-source project with over 100 million downloads on npm. Remo
              has a strong interest in high-performance software teams and is on
              a mission to empower digital product teams to thrive. Besides
              technology, he also enjoys endurance sports and spending time
              outdoors.
            </h2>
            <h2>
              <Link to="https://www.remojansen.com">www.remojansen.com</Link>
            </h2>
          </div>
          <div className="col col--4">
            <img src="/img/remo-h-jansen-wolk-software.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface AboutTheBookProps {
  onRequestOpen: () => void;
}

export function AboutTheBook(props: AboutTheBookProps): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <img src="/img/book.png" />
          </div>
          <div className="col col--8">
            <h1 className="sectionTitle">About the book</h1>
            <h2>
              The Infinite Loop book provides extensive background information
              and context to understand the The Infinite Loop in-depth.
            </h2>
            <h3>
              The Infinite Loop is an Agile software development methodology
              designed to help technology businesses create a culture of trust,
              ownership, and data-driven continuous experimentation that fosters
              sustainable product-led growth and high-performance digital
              product teams that can thrive in the age of disruption.
            </h3>
            <h3>
              The Infinite Loop book examines the mainstream presence of failure
              and the widespread state of despair among professionals in the
              software industry. You will learn about the evolution of software
              development methodologies over the last few decades and other
              relevant software development principles. You will learn about
              their strengths and flaws and how these play a role in the
              prevalence of failed Agile implementation.
            </h3>
            <h3>
              You will also learn about the most common cultural issues (such as
              lack of trust and lack of pragmatism) that contribute to creating
              failed Agile implementations.
            </h3>
            <h3>
              Furthermore, you will learn how failed Agile implementation
              negatively impacts the overall software industry and the general
              well-being of individual professionals.
            </h3>
            <h3>
              Finally, the Infinite Loop book provides extensive background
              information and context to understand the methodology in-depth,
              including its principles, rituals, artefacts, metrics, roles and
              scalability strategies.
            </h3>
            <div className="buttons">
              <button
                className="button button--primary button--lg"
                onClick={props.onRequestOpen}
              >
                Free digital edition
              </button>
              <button
                className="button button--primary button--lg"
                onClick={props.onRequestOpen}
              >
                Buy the print edition
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BookHeaderProps {
  onRequestOpen: () => void;
}

function BookHeader(props: BookHeaderProps) {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <img src="/img/books.png" />
          </div>
          <div className="col col--8">
            <h1 className="hero__title">
              The only book you need to learn everything about The Infinite Loop
              and empower your digital product teams to thrive
            </h1>
            <h1>— By Remo H. Jansen</h1>
            <h2>
              Discover how to create a culture of trust, ownership, and
              data-driven continuous experimentation that fosters sustainable
              product-led growth and high-performance digital product teams that
              can thrive in the age of disruption.
            </h2>
            <div className="buttons">
              <button
                className="button button--primary button--lg"
                onClick={props.onRequestOpen}
              >
                Free digital edition
              </button>
              <button
                className="button button--primary button--lg"
                onClick={props.onRequestOpen}
              >
                Buy the print edition
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Book(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <Layout
      title="The only book you need to learn everything about The Infinite Loop and empower your digital product teams to thrive"
      description={siteConfig.tagline}
    >
      <BookHeader onRequestOpen={openModal} />
      <main>
        <AboutTheBook onRequestOpen={openModal} />
        <AboutTheAuthor />
        <SubscribeModal isOpen={isModalOpen} onRequestClose={closeModal} />
      </main>
    </Layout>
  );
}
