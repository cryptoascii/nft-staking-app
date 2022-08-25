import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>🏝️HashTribe</h1>
      <h2 className={styles.selectBoxTitle}>Weapons Staking Contract Pool</h2>
      <div className={styles.nftBoxGrid}>
       

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <img src={`/icons/token.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
          The 1st stage weapon bouns pool to stake your NFTs, and earn tokens from the <b>Staking</b> contract.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
