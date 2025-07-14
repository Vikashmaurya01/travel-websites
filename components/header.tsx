import Image from "next/image";
import Link from "next/link";
import { MainNavigationMenu } from "./navigation-menu";
import LogoIcon from "@/public/img/logos/logo.png";
import { Heart, ShoppingBag, User } from "lucide-react";

export const MainHeader = () => {
  return (
    <header className="fixed z-10 w-full border h-20 bg-white p-4 flex items-center justify-between px-40">
      <div >
        <Image
          src={LogoIcon}
          alt="Logo"
          width={150}
          height={150}
        />
    <header className="fixed z-10 w-full border h-20 bg-white p-4 flex items-center justify-between px-40">
      <div>
        <Image src={LogoIcon} alt="Logo" width={150} height={150} />
      </div>
      <MainNavigationMenu />
      <div className="flex items-center gap-4">
        <Link href="/cart">
          <div className="bg-accent rounded-full p-3">
            <ShoppingBag className="h-5 w-5" />
          </div>
        </Link>
        <Link href="/wishlist">
          <div className="bg-accent rounded-full p-3">
            <Heart className="h-5 w-5" />
          </div>
        </Link>
        <Link href="/profile">
          <div className="bg-accent rounded-full p-3">
            <User className="h-5 w-5" />
          </div>
        </Link>
      </div>
    </header>
  );
};
