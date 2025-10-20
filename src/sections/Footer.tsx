import Facebook from "../components/icons/Facebook";
import Github from "../components/icons/Github";
import Linkedin from "../components/icons/Linkedin";

export default function Footer() {
  return (
    <>
      <div className="space-section"></div>
      <footer className="text-gray">
        <div className="footer_container">
          <div className="media_link">
            <a href="https://github.com/blaisebouda" target="_blank">
              <Github />
            </a>
            <a href="https://linkedin.com/in/blaisebouda/" target="_blank">
              <Linkedin />
            </a>
            <a href="#" target="_blank">
              <Facebook />
            </a>
          </div>
          <div>
            © 2025 - Designer par{" "}
            <a className="btn-link" href="#" target="_blank">
              @blaiseuiux
            </a>{" "}
            - Intégration et développement{" "}
            <a className="btn-link" href="#">
              @blaisebouda
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
