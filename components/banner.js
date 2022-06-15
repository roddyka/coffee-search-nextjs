import Image from 'next/image';
import styles from '../styles/Banner.module.css'

const Banner = (props) => {
    return (
    <div className={styles.container}>
       <div className={styles.heroimg}><Image src="/../public/Static/ILcoffee.png" width={400} height={400} /></div>
        <div>
          <h1 className={styles.title}>
            Coffee <span className={styles.titleSpan}>Search</span>
          </h1>
          <p className={styles.subTitle}>Discover your local coffee shop</p>
          <div className={styles.buttonWrapper}></div>
          <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
        </div>
    </div>);
}

export default Banner;