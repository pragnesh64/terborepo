import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import {
  Bell,
  HelpOutline,
  MoreVert,
  ArrowDropDown,
} from "@mui/icons-material";
import SidebarIcon from "@shared/components/icons/sidebaricon";
import { SidebarReturnIcon } from "@shared/components/icons/sidebarReturnIcon";

interface Props {
  collapsed: boolean;
  onToggle: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
}

const Header = ({
  collapsed,
  onToggle,
  isMobile = false,
  isTablet = false,
}: Props) => {
  const [anchorEl, setAnchorEl] =
    (React.useState < null) | (HTMLElement > null);
  const [menuAnchorEl, setMenuAnchorEl] =
    (React.useState < null) | (HTMLElement > null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setMenuAnchorEl(null);
  };

  const renderMobile = () => (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: 0,
        padding: "0 16px",
        height: "64px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton onClick={onToggle} aria-label="Open menu">
          {collapsed ? <SidebarReturnIcon /> : <SidebarIcon />}
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={handleMenuClick}>
            <MoreVert />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <Badge badgeContent={3} color="primary">
                <Bell />
              </Badge>
              Notifications
            </MenuItem>
            <MenuItem>
              <HelpOutline /> Support
            </MenuItem>
            <MenuItem>Available Credits</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>

          <IconButton onClick={handleDropdownClick}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: "gray" }}>JP</Avatar>
          </IconButton>

          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleDropdownClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );

  const renderTablet = () => (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: 0,
        padding: "0 16px",
        height: "64px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton onClick={onToggle} aria-label="Open menu">
          {collapsed ? <SidebarReturnIcon /> : <SidebarIcon />}
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <IconButton>
            <HelpOutline sx={{ fontSize: 18, color: "gray" }} />
          </IconButton>

          <Badge badgeContent={3} color="primary">
            <IconButton>
              <Bell sx={{ fontSize: 18, color: "gray" }} />
            </IconButton>
          </Badge>

          <Button
            variant="outlined"
            sx={{
              borderColor: "amber",
              backgroundColor: "amber",
              color: "gray",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: 13,
            }}
            endIcon={<ArrowDropDown sx={{ fontSize: 10 }} />}
          >
            Available Credits
          </Button>

          <IconButton onClick={handleDropdownClick}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: "gray" }}>JP</Avatar>
          </IconButton>

          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleDropdownClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );

  const renderDesktop = () => (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: 0,
        padding: "0 16px",
        height: "64px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton onClick={onToggle} aria-label="Open menu">
          {collapsed ? <SidebarReturnIcon /> : <SidebarIcon />}
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
          <IconButton>
            <HelpOutline sx={{ fontSize: 18, color: "gray" }} />
          </IconButton>

          <Badge badgeContent={3} color="primary">
            <IconButton>
              <Bell sx={{ fontSize: 18, color: "gray" }} />
            </IconButton>
          </Badge>

          <Button
            variant="outlined"
            sx={{
              borderColor: "amber",
              backgroundColor: "amber",
              color: "gray",
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: 14,
              padding: "8px 16px",
            }}
            endIcon={<ArrowDropDown sx={{ fontSize: 12 }} />}
          >
            Available Credits
          </Button>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Avatar sx={{ width: 36, height: 36, bgcolor: "gray" }}>JP</Avatar>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <Box sx={{ fontWeight: "medium", fontSize: 14, color: "gray" }}>
                John Partner
              </Box>
              <Box sx={{ fontSize: 12, color: "gray" }}>
                partner@example.com
              </Box>
            </Box>

            <IconButton onClick={handleDropdownClick}>
              <ArrowDropDown sx={{ fontSize: 12, color: "gray" }} />
            </IconButton>
          </Box>

          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleDropdownClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );

  if (isMobile) {
    return renderMobile();
  }

  if (isTablet) {
    return renderTablet();
  }

  return renderDesktop();
};

export default Header;
