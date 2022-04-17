import styles from '../../styles/Home.module.css'
export default function Title() {
  return (
    <>
      <h1 className={styles.title}>
        My name is <span className={styles.name}>Gabriel</span>
      </h1>
      <p className={styles.description}>
        <code className={styles.code}>
          A Software Engineer that loves building things to make lives better.
        </code>
      </p>
    </>
  );
}