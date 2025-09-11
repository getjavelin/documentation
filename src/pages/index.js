import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode(); // Get current mode ('light' or 'dark')

  const textColor = colorMode === 'dark' ? 'white' : 'black';

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{ color: 'white' }}>
          <span className="highlight-text">Javelin AI Security Platform</span>
        </h1>
        <p className="hero__subtitle" style={{ color: 'orange' }}>
          <span className="highlight-text">Enterprise AI Platform</span> for rapid, responsible LLM use.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/javelin-core/integration-new">
            Get started 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Javelin | Enterprise AI Platform`}
      description="Javelin is an Enterprise AI Platform for rapid, responsible LLM use. Dive in to learn more."
    >
      <CustomPostHogProvider>
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </CustomPostHogProvider>
    </Layout>
  );
}
