import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import {
  Logout,
  ChevronRight,
  ChevronLeft,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import { SidebarIcon } from "@shared/components/icons/sidebaricon"; // Replace with appropriate icon import
import { Logout as LogoutIcon } from "@mui/icons-material"; // Adjust import if necessary
import { IntoAiPartnerLogo } from "@shared/components/icons/intoaiPartnerlogo"; // Replace with your actual logo import
import { ProfileImg } from "@shared/assets"; // Your profile image import

interface SidebarItemType {
  key: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: SidebarItemType[];
}

interface SidebarProps {
  collapsed: boolean;
  onMenuClick?: () => void;
  sidebarItems: SidebarItemType[];
  showHeader?: boolean;
}

const Sidebar = ({
  collapsed,
  onMenuClick,
  sidebarItems,
  showHeader = true,
}: SidebarProps) => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState<string>("home");
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  // Memoizing sidebar items
  const items = useMemo(() => {
    return sidebarItems.map((item) => {
      if (item.children && item.children.length > 0) {
        return {
          ...item,
          children: item.children.map((child) => ({
            ...child,
          })),
        };
      }
      return item;
    });
  }, [sidebarItems]);

  const isParentMenu = (key: string): boolean => {
    const menu = items.find((item) => item.key === key);
    return menu?.children && menu.children.length > 0;
  };

  const handleMenuClick = (key: string) => {
    if (isParentMenu(key)) {
      setOpenKeys((prevKeys) =>
        prevKeys.includes(key)
          ? prevKeys.filter((k) => k !== key)
          : [...prevKeys, key]
      );
    } else {
      setSelectedKey(key);
      const clickedItem = items.find((item) => item.key === key);
      if (clickedItem?.path) {
        navigate(clickedItem.path);
      }
    }
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const handleToggleCollapse = (key: string) => {
    setOpenKeys((prevKeys) =>
      prevKeys.includes(key)
        ? prevKeys.filter((k) => k !== key)
        : [...prevKeys, key]
    );
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? 56 : 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? 56 : 250,
          transition: "width 0.2s ease-in-out",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {showHeader && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              padding: collapsed ? "10px 0" : "10px 16px",
              backgroundColor: "white",
            }}
          >
            <Box
              sx={{
                width: 35,
                height: 35,
                borderRadius: "50%",
                background:
                  "linear-gradient(to right, #35A1DA, #D4549F, #F15A22)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                QB
              </Typography>
            </Box>
            {!collapsed && (
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Sales bot
              </Typography>
            )}
          </Box>
        )}

        <List sx={{ flexGrow: 1, overflowY: "auto" }}>
          {items.map((item) => (
            <Box key={item.key}>
              <ListItem
                button
                onClick={() => handleMenuClick(item.key)}
                selected={item.key === selectedKey}
                sx={{ paddingLeft: collapsed ? 1 : 3 }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                {!collapsed && <ListItemText primary={item.label} />}
                {isParentMenu(item.key) && (
                  <IconButton onClick={() => handleToggleCollapse(item.key)}>
                    {openKeys.includes(item.key) ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </IconButton>
                )}
              </ListItem>
              {item.children && (
                <Collapse
                  in={openKeys.includes(item.key)}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <ListItem
                        key={child.key}
                        button
                        sx={{ paddingLeft: collapsed ? 4 : 6 }}
                        onClick={() => handleMenuClick(child.key)}
                        selected={child.key === selectedKey}
                      >
                        <ListItemIcon>{child.icon}</ListItemIcon>
                        {!collapsed && <ListItemText primary={child.label} />}
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          ))}
        </List>

        <Box
          sx={{
            padding: collapsed ? "8px" : "16px",
            backgroundColor: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "space-between",
            borderTop: "1px solid #ddd",
          }}
          onClick={() => handleMenuClick("logout")}
        >
          {!collapsed && (
            <Typography
              variant="body2"
              sx={{ color: "red", fontWeight: "bold" }}
            >
              Log Out
            </Typography>
          )}
          <LogoutIcon sx={{ color: "red" }} />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
