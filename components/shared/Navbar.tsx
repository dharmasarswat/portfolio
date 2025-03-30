'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { NavItem } from './NavItem';
import { navItems, type NavItem as NavItemType } from '@/config/navigation';

export default function Navbar() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [hovered, setHovered] = useState<number | null>(null);
  const [mouseX, setMouseX] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseX(e.clientX);
  };

  const handleNavLinkClick = (nav: NavItemType) => {
    if (nav.label === 'Theme') {
      setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
      return;
    }

    if (nav.link) {
      if (nav.link.startsWith('https://')) {
        window.open(nav.link, '_blank', 'noopener,noreferrer');
        return;
      }
      router.push(nav.link);
    }
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 md:top-4 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <BackgroundBlur />
      <NavigationContainer>
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.label === 'Theme' && <Divider />}
            <NavItem
              icon={item.icon}
              label={item.label}
              isHovered={hovered === index}
              mouseX={mouseX}
              index={index}
              onClick={() => handleNavLinkClick(item)}
              onHover={setHovered}
              onMouseMove={handleMouseMove}
            />
          </React.Fragment>
        ))}
      </NavigationContainer>
    </div>
  );
}

const BackgroundBlur = () => (
  <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background" />
);

const NavigationContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="w-max p-1 rounded-full border z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-2 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
    {children}
  </div>
);

const Divider = () => (
  <div
    data-orientation="vertical"
    role="none"
    className="shrink-0 bg-border w-[1px] h-full py-1 mx-1"
  />
);
