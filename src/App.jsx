// import { motion } from "framer-motion";

import StaggeredChildren from "./components/StaggeredChildren";
import Fadeupdown from "./components/fade-up-down";

// const gridContainerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.25 },
//   },
// };

// const gridSquareVariants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.25 } },
// };

function App() {
  return (
    <>
      <StaggeredChildren />

      <Fadeupdown />
    </>
  );
}

export default App;
