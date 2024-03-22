import styles from "./Themes.module.scss";
import Skeleton from "react-loading-skeleton";

const SkeletonThemeItem = () => (
  <div className={styles.themeItemContainer}>
    <div className={styles.themeItemContent}>
      <Skeleton width={144} height={144} />
    </div>
    <div className={styles.themeItemFooter}>
      <div className={styles.themeItemNameContainer}>
        <Skeleton width={100} />
      </div>
    </div>
  </div>
);

export default SkeletonThemeItem;
