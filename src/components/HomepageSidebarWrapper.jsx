import React from 'react';
import { DocsSidebarProvider } from '@docusaurus/plugin-content-docs/client';
import HomepageSidebar from './HomepageSidebar';

export function HomepageSidebarWrapper() {
  return (
    <DocsSidebarProvider>
      <HomepageSidebar />
    </DocsSidebarProvider>
  );
}

// This function will be used in the MDX file
export function RenderHomepageSidebar() {
  return <HomepageSidebarWrapper />;
}