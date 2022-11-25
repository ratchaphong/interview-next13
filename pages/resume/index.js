import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";

const Resume = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Frontend Developer (Junior Level)</div>
        <div className={styles.uname}>Muhammad Bb Parattakorn</div>
        <div className={styles.social}>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {/* <i class="fa-brands fa-instagram"></i> */}
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {/* <i class="fa-brands fa-facebook"></i> */}
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {/* <i class="fa-brands fa-tiktok"></i> */}
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {/* <i class="fa-brands fa-youtube"></i> */}
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {/* <i class="fa-regular fa-envelope"></i> */}
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
