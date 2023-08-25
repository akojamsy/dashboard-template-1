import {
  dashboardIcon,
  analyticIcon,
  settingIcon,
  walletIcon,
  marketplaceIcon,
} from "../../assets";
import {
  DashboardIcon,
  AnalyticIcon,
  MarketplaceIcon,
  SettingIcon,
  WalletIcon,
} from "../../assets/icons/components";

export const overviewLinks = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    title: "Wallet",
    path: "/dashboard/wallet",
    icon: <WalletIcon />,
  },
  {
    id: 3,
    title: "Marketplace",
    path: "/dashboard/marketplace",
    icon: <MarketplaceIcon />,
  },
  {
    id: 4,
    title: "Analytics",
    path: "/dashboard/analytics",
    icon: <AnalyticIcon />,
  },
  {
    id: 5,
    title: "Settings",
    path: "/dashboard/settings",
    icon: <SettingIcon />,
  },
];
