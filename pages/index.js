import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is John Enrick Dizon. I like reading some books, playing some games and singing in my free time.
          I also like travelling some places and enjoy the beauty of its scenery.
        </p>
        <p>My Expectation for this Subject:</p>
        <u>
          <li>I'm expecting more project that requires on pushing files in Github.</li>
          <li>More coding in terms of Back-Ends.</li>
          <li>And more things about computer security and topics that are similar to it.</li>
        </u>
        <p>10 Things That Requires Zero Talent:</p>
        <ol>
          <li>Being on time.</li>
          <li>Work ethic.</li>
          <li>Effort.</li>
          <li>Body language.</li>
          <li>Energy.</li>
          <li>Attitude.</li>
          <li>Passion.</li>
          <li>Being coachable.</li>
          <li>Doing extra.</li>
          <li>Being prepared.</li>
        </ol>
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
    </Layout>
  );
}