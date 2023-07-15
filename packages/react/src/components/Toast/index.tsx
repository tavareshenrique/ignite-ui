import {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import * as ReactToast from '@radix-ui/react-toast';

import { X } from 'phosphor-react';

import { ToastRoot } from './style';

import { IToastProps, IToastProviderProps } from './@interfaces';

const Provider = ({ children }: IToastProviderProps) => {
  return (
    <ReactToast.Provider swipeDirection="down">{children}</ReactToast.Provider>
  );
};

const Trigger = ({
  children,
  timeoutInSeconds = 5,
  title,
  description,
}: IToastProps) => {
  const [open, setOpen] = useState(false);

  const timerRef = useRef(0);

  const timeInMilliseconds = timeoutInSeconds * 1000;

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleOpenToast = useCallback(() => {
    setOpen(true);

    window.clearTimeout(timerRef.current);

    timerRef.current = window.setTimeout(() => {
      setOpen(false);
    }, timeInMilliseconds);
  }, [timeInMilliseconds]);

  function handleCloseToast() {
    window.clearTimeout(timerRef.current);

    setOpen(false);
  }

  return (
    <>
      {console.log(`open ====>`, open)}
      {Children.map(children, (child: any) => {
        function handleClick() {
          if (child.props.onClick) {
            child.props.onClick();
          }

          handleOpenToast();
        }

        return cloneElement(child as any, {
          onClick: handleClick,
        });
      })}

      <ToastRoot open={open} onOpenChange={handleOpenToast}>
        <ReactToast.Title className="toast__title">{title}</ReactToast.Title>
        <ReactToast.Description className="toast__description">
          {description}
        </ReactToast.Description>

        <button className="toast__close" onClick={handleCloseToast}>
          <X size={20} />
        </button>
      </ToastRoot>

      <ReactToast.Viewport />
    </>
  );
};

export { Trigger, Provider };
