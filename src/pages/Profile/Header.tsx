import { AppLogo } from "@/components";
import { Notifications } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 pt-3 sticky top-0 bg-white z-[200]">
      <AppLogo />

      <div className="center-flex gap-4">
        <div className="bg-zinc-400 rounded-full p-2">
          <Notifications />
        </div>

        <div className="center-flex gap-1">
          <div className="flex flex-col text-end">
            <span className="leading-tight font-Montserrat font-bold">Username</span>
            <span className="leading-tight font-Quicksand text-zinc-400">email@gmail.com</span>
          </div>
          <Avatar />
        </div>
      </div>
    </header>
  )
}

export default Header;