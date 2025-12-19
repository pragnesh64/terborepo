import { Sidebar, Header } from "@shared/components/Layout";
import { AlertBanner } from "@shared/components/overlay";
import { useEffect, useState } from "react";
import { sidebarItems } from "./constant";
import * as ReactRouterDom from "react-router-dom";
import { Drawer } from "antd";
import { useBreakpoint } from "@shared/hooks";

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const { isDesktop, isTablet, isMobile } = useBreakpoint();

  const DrawerAny = Drawer as any;
  const OutletAny = (ReactRouterDom as any).Outlet as any;

  const closeSidebar = () => setDrawerOpen(false);

  const handleToggle = () => {
    if (isDesktop) {
      setCollapsed((v) => !v);
      closeSidebar();
      return;
    }

    setDrawerOpen((v) => !v);
  };

  useEffect(() => {
    if (isDesktop) {
      closeSidebar();
      return;
    }

    setCollapsed(false);
  }, [isDesktop]);

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      {showNavbar && (
        <div className="h-12 shrink-0">
          <AlertBanner onClose={() => setShowNavbar(false)} />
        </div>
      )}

      <div className="flex overflow-hidden flex-1 min-h-0 relative">
        {isDesktop && (
          <Sidebar collapsed={collapsed} sidebarItems={sidebarItems} />
        )}

        {(isTablet || isMobile) && (
          <DrawerAny
            open={drawerOpen}
            onClose={closeSidebar}
            placement="left"
            width={250}
            closable={false}
            title={
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--bg-logo-gradient)" }}
                  >
                    <span className="text-[var(--text-sidebar-active)] font-bold text-lg">
                      QB
                    </span>
                  </div>
                  <h1 className="text-lg font-semibold text-gray-900 m-0 leading-none">
                    Sales bot
                  </h1>
                </div>

                <button
                  type="button"
                  onClick={closeSidebar}
                  aria-label="Close sidebar"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-[20px] leading-none">×</span>
                </button>
              </div>
            }
            styles={{
              header: { padding: "12px 12px" },
              body: { padding: 0 },
              wrapper: {
                boxShadow: "4px 0 12px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Sidebar
              collapsed={false}
              sidebarItems={sidebarItems}
              onMenuClick={closeSidebar}
              showHeader={false}
            />
          </DrawerAny>
        )}

        <div className="flex flex-col flex-1 overflow-hidden transition-[margin-left] duration-200 ease-in-out">
          <div className="h-16 shrink-0">
            <Header
              collapsed={isDesktop ? collapsed : drawerOpen}
              onToggle={handleToggle}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          </div>

          <main className="flex-1 overflow-auto bg-[var(--color-white)] pt-0 px-[var(--spacing-3)] pb-[var(--spacing-3)] transition-[padding] duration-200 ease-in-out [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="relative bg-[var(--bg-content)] border border-[#E5E7EB] rounded-[20px] p-3 shadow-sm min-h-[calc(100vh-32px)] transition-[padding,border-radius] duration-200 ease-in-out">
              <OutletAny />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
