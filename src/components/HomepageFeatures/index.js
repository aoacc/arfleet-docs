import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Use',
    emoji: '🚀',
    description: 'Get started with ArFleet',
    link: '/docs/category/use',
  },
  {
    title: 'Learn',
    emoji: '📚',
    description: 'Learn how ArFleet works',
    link: '/docs/category/learn',
  },
  {
    title: 'Maintain',
    emoji: '🛠️',
    description: 'Help us maintain ArFleet',
    link: '/docs/category/maintain',
  },
];

function Feature({emoji, title, description, link}) {
  return (
    <a href={link} className={styles.featureButton}>
      <span className={styles.featureEmoji}>{emoji}</span>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.featureGrid}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}