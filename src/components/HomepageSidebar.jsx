import React from 'react';
import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import DocSidebar from '@theme/DocSidebar';
import { useLocation } from '@docusaurus/router';

function HomepageSidebar() {
  const sidebar = useDocsSidebar();
  const location = useLocation();

  if (!sidebar) {
    return <div>Sidebar data is not available.</div>;
  }

  return <DocSidebar sidebar={sidebar.items} path={location.pathname} />;
}

export default HomepageSidebar;
