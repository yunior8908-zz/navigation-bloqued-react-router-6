import { useCallback, useEffect, useRef, useState } from "react";
import { useHistory } from "../browser-router";

const ServiceBloquedPage = ({
  disabledNavigation,
  currentPath = "",
  children,
}) => {
  const [showChildren, setShowChildren] = useState(false);
  const history = useHistory();
  const unblock = useRef();
  const transition = useRef();

  const onCancel = useCallback(() => {
    setShowChildren(false);
  }, []);

  const onOk = useCallback(() => {
    if (unblock.current && transition.current) {
      unblock.current();
      transition.current.retry();
    }
  }, []);

  useEffect(() => {
    unblock.current = history.block((tx) => {
      transition.current = tx;

      const url = tx.location.pathname;

      if (url === currentPath) {
        return;
      }

      if (!disabledNavigation) {
        unblock.current();
        tx.retry();
        return;
      } else if (disabledNavigation) {
        setShowChildren(true);
        return;
      }
    });

    return () => {
      if (unblock.current) {
        unblock.current();
      }
    };
  }, [currentPath, disabledNavigation, history]);

  if (showChildren) {
    return children ? children({ onCancel, onOk }) : null;
  }

  return null;
};

export default ServiceBloquedPage;
