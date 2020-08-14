// import Head from 'next/head'
import styles from '../styles/container.module.css'
import timeline from '../styles/timeline.module.css'
import Card from '../components/timeline/components/Card'
import Timeline from '../components/timeline/Timeline'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>

        <header>Hello, I'm John Norman Agustin</header>
        <div className={styles.flexContainer}>
          <div className={styles.leftCenterContainer}>
            <img className={styles.circImg} src="/img/me.jpg"></img>
            <p>HELLO</p>
          </div>
          <Timeline/>
        </div>
        <footer>Contact me</footer>
      </div>
    </div>
 )
}
