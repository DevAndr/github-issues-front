import { Link } from "@nextui-org/link";
import './styles.scss'

function Footer() {
  return <footer className="footer">
    <Link
      isExternal
      href="https://hh.ru/resume/6aa445e2ff0dfbf0110039ed1f47616a394f56"
      title="nextui.org homepage"
      target='_blank'
    >
      <span className="text-default-600">Моя ссылка на рюзюме</span>
    </Link>
  </footer>;
}

export default Footer;