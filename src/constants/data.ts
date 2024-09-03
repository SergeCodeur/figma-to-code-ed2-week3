import {
  Bell,
  Chart,
  CreditCard,
  HeadPhone,
  Home,
  Invoice,
  News,
  Reports,
  Settings,
  Wallet,
} from "@/assets/icons";
import icon from "@/assets/images/icons-new.svg";
import { BalanceCardProps, NewsCardProps, SidebarLinkProps } from "@/types";

export const SidebarLink: SidebarLinkProps[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "News",
    href: "/dashboard/news",
    icon: News,
  },
  {
    label: "Activities",
    href: "#",
    icon: Chart,
  },
  {
    label: "Card",
    href: "#",
    icon: CreditCard,
  },
  {
    label: "Reports",
    href: "#",
    icon: Reports,
    subLinks: [
      {
        label: "Report 1",
        href: "#",
        icon: Reports,
      },
    ],
  },
  {
    label: "Notifications",
    href: "#",
    icon: Bell,
  },
  {
    label: "Billing",
    href: "#",
    icon: Wallet,
  },
  {
    label: "Invoice",
    href: "#",
    icon: Invoice,
  },
  {
    label: "Help center",
    href: "#",
    icon: HeadPhone,
  },
  {
    label: "Settings",
    href: "#",
    icon: Settings,
  },
];

export const BalanceData: BalanceCardProps[] = [
  {
    title: "Balance",
    amount: "$63,755,200",
  },
];

export const CryptoNewsData: NewsCardProps[] = [
  {
    icon: icon,
    source: "CoinDesk",
    timeAgo: "3 hours ago",
    title: "Bitcoin Price Surges Above $30,000",
    description:
      "Bitcoin price surged above $30,000 on Monday, marking its highest level since mid-May.",
    likes: 15,
    comments: 5,
  },
  {
    icon: icon,
    source: "CoinTelegraph",
    timeAgo: "5 hours ago",
    title: "Ethereum 2.0 Deposit Contract Reaches 16M ETH",
    description:
      "The Ethereum 2.0 deposit contract has reached 16 million ETH, with just over a week to go before the merge.",
    likes: 12,
    comments: 3,
  },
  {
    icon: icon,
    source: "Decrypt",
    timeAgo: "2 days ago",
    title: "Elon Musk Says Tesla Will Accept Dogecoin for Car Payments",
    description:
      "Tesla CEO Elon Musk announced on Twitter that the electric vehicle manufacturer will accept Dogecoin for vehicle purchases.",
    likes: 20,
    comments: 10,
  },
  {
    icon: icon,
    source: "The Block",
    timeAgo: "1 day ago",
    title: "Crypto Exchange Binance to Launch NFT Marketplace",
    description:
      "Crypto exchange Binance announced plans to launch its own NFT marketplace, joining the growing number of platforms offering digital collectibles.",
    likes: 8,
    comments: 2,
  },
  {
    icon: icon,
    source: "CoinMarketCap",
    timeAgo: "6 hours ago",
    title: "Solana Price Surges 20% After FTX Acquisition Announcement",
    description:
      "Solana price surged 20% on Tuesday after FTX announced it was acquiring the blockchain project for $385 million.",
    likes: 18,
    comments: 6,
  },
  {
    icon: icon,
    source: "CryptoSlate",
    timeAgo: "4 hours ago",
    title: "Cardano Developer Input Output Hires Former Microsoft Executive",
    description:
      "Cardano developer Input Output has hired a former Microsoft executive to lead its new business unit focused on enterprise solutions.",
    likes: 10,
    comments: 4,
  },
  {
    icon: icon,
    source: "CryptoPotato",
    timeAgo: "3 hours ago",
    title: "Bitcoin Mining Difficulty Hits New All-Time High",
    description:
      "Bitcoin mining difficulty hit a new all-time high on Tuesday, making it more difficult for miners to add new blocks to the blockchain.",
    likes: 14,
    comments: 7,
  },
  {
    icon: icon,
    source: "CryptoNews.com",
    timeAgo: "2 hours ago",
    title: "Crypto Lender Celsius Files for Bankruptcy Protection",
    description:
      "Crypto lender Celsius has filed for bankruptcy protection, becoming the largest crypto company to do so to date.",
    likes: 22,
    comments: 12,
  },
  {
    icon: icon,
    source: "CoinDesk",
    timeAgo: "1 hour ago",
    title: "Ethereum Classic Price Surges 15% After Hard Fork Announcement",
    description:
      "Ethereum Classic price surged 15% on Wednesday after the project announced a planned hard fork to improve scalability and security.",
    likes: 9,
    comments: 3,
  },
  {
    icon: icon,
    source: "CoinTelegraph",
    timeAgo: "30 minutes ago",
    title: "Binance Coin Price Surges 10% After FTX Acquisition Announcement",
    description:
      "Binance Coin price surged 10% on Wednesday after FTX announced it was acquiring the cryptocurrency project for $550 million.",
    likes: 11,
    comments: 5,
  },
  {
    icon: icon,
    source: "Decrypt",
    timeAgo: "20 minutes ago",
    title: "NFT Marketplace OpenSea Acquires Rarible for $4.5 Million",
    description:
      "NFT marketplace OpenSea has acquired rival platform Rarible for $4.5 million, marking its first acquisition since raising $1.5 billion in funding.",
    likes: 13,
    comments: 8,
  },
  {
    icon: icon,
    source: "The Block",
    timeAgo: "10 minutes ago",
    title: "Crypto Exchange Kraken Adds Support for USDC Stablecoin",
    description:
      "Crypto exchange Kraken has added support for the USDC stablecoin, allowing users to deposit, withdraw, and trade the digital asset.",
    likes: 7,
    comments: 2,
  },
  {
    icon: icon,
    source: "CoinMarketCap",
    timeAgo: "5 minutes ago",
    title: "Terra Luna Classic Price Surges 50% After Launch",
    description:
      "Terra Luna Classic price surged 50% on Wednesday after the project launched its mainnet following a successful airdrop.",
    likes: 25,
    comments: 15,
  },
  {
    icon: icon,
    source: "CryptoSlate",
    timeAgo: "3 minutes ago",
    title: "Crypto Exchange Gemini Launches New ETF for Bitcoin and Ether",
    description:
      "Crypto exchange Gemini has launched a new exchange-traded fund (ETF) that provides exposure to Bitcoin and Ether.",
    likes: 16,
    comments: 9,
  },
  {
    icon: icon,
    source: "CryptoPotato",
    timeAgo: "2 minutes ago",
    title: "Bitcoin Mining Difficulty Hits New All-Time High",
    description:
      "Bitcoin mining difficulty hit a new all-time high on Wednesday, making it more difficult for miners to add new blocks to the blockchain.",
    likes: 12,
    comments: 6,
  },
  {
    icon: icon,
    source: "CryptoNews.com",
    timeAgo: "1 minute ago",
    title: "Crypto Lender Celsius Files for Bankruptcy Protection",
    description:
      "Crypto lender Celsius has filed for bankruptcy protection, becoming the largest crypto company to do so to date.",
    likes: 20,
    comments: 10,
  },
];
