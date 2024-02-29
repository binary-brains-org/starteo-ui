import React, { SyntheticEvent, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Stylesheet } from '@/utils';
import { Favorite, Home, Payment, ShapeLine } from '@mui/icons-material';
import pageRoutes from '@/pageRoutes';
import { ButtonLogout } from '@/components';

const availableInNavs: string[] = [
  pageRoutes.home,
  pageRoutes.project,
  pageRoutes.funding,
  pageRoutes.payments,
];

export const Aside = () => {
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(availableInNavs.indexOf(pathname));

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setCurrent(newValue);
  };

  return (
    <Box
      top="4rem"
      display="flex"
      className="p-3"
      position="sticky"
      height="calc(100vh - 4rem)"
    >
      <div className="py-3 flex flex-col justify-between bg-white shadow-2xl rounded-lg px-5">
        <Tabs
          value={current}
          role="navigation"
          textColor="secondary"
          orientation="vertical"
          onChange={handleChange}
          TabIndicatorProps={{
            sx: styles.indicator,
            children: <CustomIndicator />,
          }}
        >
          <LinkTab label="Home" href={pageRoutes.home} icon={<Home />} />
          <LinkTab
            label="Project"
            href={pageRoutes.project}
            icon={<ShapeLine />}
          />
          <LinkTab
            label="Donations"
            href={pageRoutes.funding}
            icon={<Favorite />}
          />
          <LinkTab
            label="Payment"
            href={pageRoutes.payments}
            icon={<Payment />}
          />
        </Tabs>

        <div className="p-3 center-flex">
          <ButtonLogout />
        </div>
      </div>
    </Box>
  );
};

interface LinkTabProps {
  label: string;
  icon:
    | string
    | React.ReactElement<
        unknown,
        string | React.JSXElementConstructor<unknown>
      >;
  href: string;
}

const LinkTab = ({ icon, href, label, ...restProps }: LinkTabProps) => {
  return (
    <Tab
      sx={styles.linkTab}
      to={href}
      draggable={false}
      icon={
        <span className="w-[2rem] flex items-center justify-start">{icon}</span>
      }
      component={Link}
      label={
        <div className="min-w-[4.5rem] w-full text-start whitespace-nowrap">
          {label}
        </div>
      }
      iconPosition="start"
      {...restProps}
    />
  );
};

const CustomIndicator = () => {
  return (
    <div className="h-[1.2rem] w-[.3rem] flex-shrink-0 bg-maize rounded-[2rem]" />
  );
};

const styles = Stylesheet({
  indicator: {
    left: 0,
    display: 'flex',
    background: 'none',
    alignItems: 'center',
  },
  linkTab: {
    minHeight: 0,
    padding: '.6rem 1rem',
  },
  buttonAddPlaylist: {
    minWidth: 0,
  },
});
