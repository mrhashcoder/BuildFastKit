import Image from "next/image";
import {
  BsMoonStars,
  BsSun,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
  BsChevronDown,
  BsFire,
  BsCheck2,
} from "react-icons/bs";
import {
  AiOutlineEllipsis,
  AiOutlineWarning,
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineFileSearch,
} from "react-icons/ai";
import { MdDeleteForever, MdOutlineLogout } from "react-icons/md";
import { BiHistory, BiCalendar, BiBarChartAlt } from "react-icons/bi";
import { FaUserAlt, FaSort } from "react-icons/fa";
import { ImSpinner8, ImStatsBars } from "react-icons/im";
import { RxMixerHorizontal } from "react-icons/rx";
import { LuSettings } from "react-icons/lu";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export type IconKeys = keyof typeof icons;

type IconsType = {
  [key in IconKeys]: React.ElementType;
};

// ** Custom svg or images can be used as icons by returning a JSX **
const icons = {
  // Custom icons
  blank: () => {
    return <></>;
  },
  nextjs: () => {
    return (
      <Image
        src="next.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    );
  },
  shadcnUi: () => {
    return (
      <Image
        src="shadcn-ui.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    );
  },
  vercel: () => {
    return (
      <Image
        src="vercel.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    );
  },

  menuIcon: () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    );
  },
  mountainIcon: () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    );
  },
  // Features
  fileSearch: AiOutlineFileSearch,
  barChart: BiBarChartAlt,
  settings: LuSettings,

  // Mode Toggle
  moon: BsMoonStars,
  sun: BsSun,

  // Navigation
  back: BsChevronLeft,
  next: BsChevronRight,
  up: BsChevronUp,
  down: BsChevronDown,
  close: AiOutlineClose,

  // Common
  trash: MdDeleteForever,
  spinner: ImSpinner8,
  userAlt: FaUserAlt,
  ellipsis: AiOutlineEllipsis,
  warning: AiOutlineWarning,
  add: AiOutlinePlus,
  history: BiHistory,
  signout: MdOutlineLogout,
  calendar: BiCalendar,
  sort: FaSort,
  fire: BsFire,
  statsBar: ImStatsBars,
  mixer: RxMixerHorizontal,
  check: BsCheck2,
  twitter: TwitterLogoIcon,
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
};

export const Icons: IconsType = icons;
