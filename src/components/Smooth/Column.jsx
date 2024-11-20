import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/${src}`} alt="image" fill loading="lazy" />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Column;
