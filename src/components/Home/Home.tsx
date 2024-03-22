import Sidebar from "../Sidebar/Sidebar";
import styles from "./Home.module.scss";
import ThemesList from "../Themes/ThemesList";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Sidebar />
      <ThemesList />
    </div>
  );
};
export default Home;
