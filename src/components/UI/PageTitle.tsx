import { motion } from 'framer-motion';
import styles from '../../styles/components/UI/PageTitle.module.scss';

interface PageTitleProps {
  title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <motion.h1
      className={styles.title}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {title}
    </motion.h1>
  );
};