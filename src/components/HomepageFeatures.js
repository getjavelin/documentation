import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Secure',
    Svg: require('../../static/img/secure.png').default,
    description: (
      <>
      Built with the latest security standards in mind, our platform ensures that your data remains protected, minimizing vulnerabilities and shielding against potential threats.      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/easy.png').default,
    description: (
      <>
      With an intuitive interface and user-friendly features, our platform is designed to be accessible to both novices and experts, allowing users to get started quickly and effortlessly.      </>
    ),
  },
  {
    title: 'Scalable',
    Svg: require('../../static/img/scalable.png').default,
    description: (
      <>
        Designed to grow with your needs, our platform effortlessly accommodates increasing demands, ensuring consistent performance and adaptability, regardless of the size or complexity of tasks.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <img src={Svg} className={styles.featureSvg} alt={title} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
