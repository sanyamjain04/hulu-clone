import Image from "next/image";
import Headeritem from "./Headeritem";
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";
const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center m-5 h-auto ">
      <div className="flex flex-grow justify-evenly max-w-2xl " >
        <Headeritem title="HOME" Icon={HomeIcon} />
        <Headeritem title="TRENDING" Icon={LightningBoltIcon} />
        <Headeritem title="VERIFIED" Icon={BadgeCheckIcon} />
        <Headeritem title="COLLECTION" Icon={CollectionIcon} />
        <Headeritem title="SEARCH" Icon={SearchIcon} />
        <Headeritem title="ACCOUNT" Icon={UserIcon} />
      </div>

      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={100}
        height={50}
      />
    </header>
  );
};

export default Header;
