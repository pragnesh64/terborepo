import { HomeIcon } from "@shared/components/icons/home";
import { Contact } from "@shared/components/icons/contact";
import { KnowledgeBase } from "@shared/components/icons/knowledgeBase";
import { ProductIcon } from "@shared/components/icons/product";
import { Integration } from "@shared/components/icons/integration";
import { AgentIcon } from "@shared/components/icons/agent";
import { PlaygroundIcon } from "@shared/components/icons/playground";
import { ConversationIcon } from "@shared/components/icons/conversation";
import { TemplateIcon } from "@shared/components/icons/template";
import { Campaign } from "@shared/components/icons/campaign";
import { Lead } from "@shared/components/icons/lead";
import { UserManage } from "@shared/components/icons/userManage";

export const sidebarItems = [
  { key: "home", icon: HomeIcon, label: "Home", path: "/home" },
  {
    key: "contact",
    icon: Contact,
    label: "Contact",
    path: "/contact",
    children: [
      {
        key: "contact-whatsapp",
        icon: Contact,
        label: "Whatsapp Contact",
        path: "/contact/whatsapp",
      },
      {
        key: "contact-linkedin",
        icon: Contact,
        label: "Linkedin Contact",
        path: "/contact/linkedin",
      },
    ],
  },
  {
    key: "knowledge",
    icon: KnowledgeBase,
    label: "Knowledge Base",
    path: "/knowledge",
  },
  { key: "product", icon: ProductIcon, label: "Product", path: "/product" },
  {
    key: "integration",
    icon: Integration,
    label: "Integration",
    path: "/integration",
  },
  {
    key: "agent",
    icon: AgentIcon,
    label: "Agent Configuration",
    path: "/agent",
  },
  {
    key: "playground",
    icon: PlaygroundIcon,
    label: "Playground",
    path: "/playground",
  },
  {
    key: "conversations",
    icon: ConversationIcon,
    label: "Conversations",
    path: "/conversations",
  },
  {
    key: "templates",
    icon: TemplateIcon,
    label: "Templates",
    path: "/templates",
  },
  { key: "campaign", icon: Campaign, label: "Campaign", path: "/campaign" },
  { key: "lead", icon: Lead, label: "Lead Management", path: "/lead" },
  { key: "user", icon: UserManage, label: "User Management", path: "/user" },
];
