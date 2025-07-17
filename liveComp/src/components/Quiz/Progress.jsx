import styles from "../../styles/Progress.module.css";

const ProgressBar = ({ current, total }) => {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progress} style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBar;
