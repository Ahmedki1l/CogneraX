import React, { useState, useEffect, ReactNode } from 'react';

interface RouteProps {
  path: string;
  children: ReactNode;
}

interface RouterProps {
  children: ReactNode;
}

export function Route({ path, children }: RouteProps) {
  return <>{children}</>;
}

export function Router({ children }: RouterProps) {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const routes = React.Children.toArray(children) as React.ReactElement<RouteProps>[];
  const activeRoute = routes.find(route => route.props.path === currentPath);

  return activeRoute ? activeRoute.props.children as React.ReactElement : null;
}

export function navigate(path: string) {
  window.location.hash = path;
}