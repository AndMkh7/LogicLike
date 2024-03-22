import SidebarList from "./SidebarList";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarBox}>
        <SidebarList />
      </div>
    </div>
  );
};

export default Sidebar;
