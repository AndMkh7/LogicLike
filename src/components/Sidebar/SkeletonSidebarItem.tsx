import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonSidebarItem = () => (
  <div style={{ padding: "3px" }}>
    <Skeleton height={35} />
  </div>
);

export default SkeletonSidebarItem;
