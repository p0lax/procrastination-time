import React from 'react';

export default function App() {
  return (
    <div className="container is-max-desktop">
      <div className="notification is-primary">
        This container has a <code>max-width</code> of{' '}
        <code>$desktop - $container-offset</code> on widescreen and fullhd.
      </div>
    </div>
  );
}
