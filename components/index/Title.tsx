import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react';
const descriptions = [' building things to make lives better.', ' cryptography and security.', ' cloud technologies.']

export default function Title() {
  const [description, setDescription] = useState('')
  // Can go through 3 types of status, typing, deleting, and waiting.
  const currentDescription = 0
  const currentDescriptionStatus = 'typing'
  const type = () => {
    setDescription((x)=>{
      if (x.length+1 !== descriptions[currentDescription].length) {
        setTimeout(type, 100)
      } else {

      }
      return (x + descriptions[currentDescription].charAt(x.length + 1));
    })
  }
  useEffect(()=>{
    type()
  }, [])
  return (
    <>
      <h1 className={styles.title}>
        My name is <span className={styles.name}>Gabriel</span>
      </h1>
      <p className={styles.description}>
        <code className={styles.code}>
          A Software Engineer that loves {description}
        </code>
      </p>
    </>
  );
}
