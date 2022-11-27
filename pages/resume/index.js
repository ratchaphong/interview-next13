import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";

const Resume = () => {
  const { locales, locale, asPath } = useRouter();
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <ul className={styles.languages}>
          {[...locales].sort().map((lc) => (
            <li className={locale === lc ? styles.activeLocale : {}}>
              <Link
                key={lc}
                href={asPath}
                locale={lc}
                activeClassName={locale === lc}
              >
                {lc}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.title}>
          <FormattedMessage id="page.resume.occupation" />
        </div>
        <div className={styles.uname}>
          <FormattedMessage id="page.resume.name" />
        </div>
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
