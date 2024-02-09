import { AppLogo, AppUses } from '@/components';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, X } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="dark bg-black mt-5">
      <div className="py-5 w-full flex px-5 justify-between items-center">
        <AppLogo />

        <div>
          <p className="dark:text-white font-Montserrat text-xl font-semibold text-center">
            Follow us on
          </p>
          <div className="dark:text-white flex-all-center gap-3">
            <Link to="#">
              <LinkedIn />
            </Link>
            <Link to="#">
              <Facebook />
            </Link>
            <Link to="#">
              <Instagram />
            </Link>
            <Link to="#">
              <X />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-5">
        <AppUses />
      </div>
    </footer>
  );
};

export default Footer;
