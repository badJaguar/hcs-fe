import React from "react";

export default function useLocation() {
  const [location, setLocation] = React.useState<Location>();

  React.useEffect(() => {
    if (typeof window !== 'undefined' && !location) {
      setLocation(window.location);
      console.log('window.location', window.location);

    }
  }, [location]);

  return location;
}
