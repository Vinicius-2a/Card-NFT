import styles from './Card.module.css';
import image_equilibrium from '../assets/image-equilibrium.jpg'
import image_overlay from '../assets/icon-view.svg'
import image_ETH from '../assets/icon-ethereum.svg'
import image_DATE from '../assets/icon-ethereum.svg'
import image_Author from '../assets/image-avatar.jfif'


export function Card() {
  return (
    <main className={styles.card}>
      <article>
        <header className={styles.card_image_wrapper}>
        <img className={styles.card_image} src={image_equilibrium} />
          <div className={styles.card_overlay}>
            <img src={image_overlay} alt="view icon" />
          </div>
        </header>

        <section className={styles.card_content}>
          <h1 className={styles.card_title}>Equilibrium #3429</h1>
          <p className={styles.card_description}>Nossa coleção Equilibrium promove equilíbrio e calma.</p>

          <div className={styles.card_info}>
            <div className={`${styles.card_info_item} ${styles.info_ETH}`}>
              <img src={image_ETH} alt="ethereum" />
              <p>0.041 ETH</p>
            </div>
            <div className={`${styles.card_info_item} ${styles.info_DATE}`}>
              <img src={image_DATE} alt="clock" />
              <p>Faltam 3 dias</p>
            </div>
          </div>
        </section>

        <footer className={styles.card_author}>
          <img src={image_Author} alt="author avatar" />
          <p>Criação de <span>Vinicius-2a</span></p>
        </footer>
      </article>
    </main>
  );
}