import React from 'react';
import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';

function renderSidebarItems(items, level = 1) {
  return (
    <ul className={`menu__list ${level > 1 ? 'menu__list--nested' : ''}`}>
      {items.map((item, index) => {
        if (item.type === 'category') {
          return (
            <li key={index} className="menu__list-item">
              <Link to={item.href} className="menu__link menu__link--sublist">
                {item.label}
              </Link>
              {renderSidebarItems(item.items, level + 1)}
            </li>
          );
        } else if (item.type === 'link') {
          return (
            <li key={index} className="menu__list-item">
              <Link to={item.href} className="menu__link">
                {item.label}
              </Link>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}

export default function RenderHomepageSidebar() {
  const sidebar = useDocsSidebar();
  const location = useLocation();

  if (!sidebar) {
    return <div>Sidebar data is not available.</div>;
  }

  return (
    <nav className="menu thin-scrollbar">
      {renderSidebarItems(sidebar.items)}
    </nav>
  );
}