import styles from './Card.module.css';

export function Card() {
  return (
    <main className={styles.card}>
      <article>
        <header className={styles.card_image_wrapper}>
          <img className={styles.card_image} src="/assets/image-equilibrium.jpg" alt="Equilibrium #3429" />
          <div className={styles.card_overlay}>
            <img src="/assets/icon-view.svg" alt="view icon" />
          </div>
        </header>

        <section className={styles.card_content}>
          <h1 className={styles.card_title}>Equilibrium #3429</h1>
          <p className={styles.card_description}>Nossa coleção Equilibrium promove equilíbrio e calma.</p>

          <div className={styles.card_info}>
            <div className={`${styles.card_info_item} ${styles.info_ETH}`}>
              <img src="/assets/icon-ethereum.svg" alt="ethereum" />
              <p>0.041 ETH</p>
            </div>
            <div className={`${styles.card_info_item} ${styles.info_DATE}`}>
              <img src="/assets/icon-clock.svg" alt="clock" />
              <p>Faltam 3 dias</p>
            </div>
          </div>
        </section>

        <footer className={styles.card_author}>
          <img src="/assets/image-avatar.jfif" alt="author avatar" />
          <p>Criação de <span>Vinicius-2a</span></p>
        </footer>
      </article>
    </main>
  );
}