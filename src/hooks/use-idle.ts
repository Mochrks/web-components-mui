import { useIdleTimer } from "react-idle-timer";
export function useIdle({ timeout = 1000 * 60 * 5, onIdle, onActive, onAction } = {}) {
  return useIdleTimer({ timeout, onIdle, onActive, onAction, crossTab: true });
}
