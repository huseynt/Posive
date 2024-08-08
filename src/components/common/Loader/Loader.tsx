// import styles from "./loader.module.scss";
// import {useState,useEffect} from "react";

// export const Loader = () => {
//     const [dots, setDots] = useState("")


//     useEffect(() => {
//         const interval = setInterval(() => {
//             setDots(prev => {
//                 if (prev.length >= 3) return "";
//                 return prev + ".";
//             });
//         }, 500);

//         return () => clearInterval(interval);
//     }, []);


//     return (
//         <div className={styles.loaderWrapper}>
//             <div className={styles.loaderContent}>
//                 {/* <img src="/images/food.gif" alt="Loader"/> */}
//                 <p>Loading{dots}</p>
//             </div>
//         </div>
//     )
// }