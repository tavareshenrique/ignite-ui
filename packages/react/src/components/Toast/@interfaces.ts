import { ReactNode } from 'react';

export interface IToastProps {
  children: ReactNode;
  timeoutInSeconds?: number;
  title: string;
  description: string;
}

export interface IToastProviderProps {
  children: ReactNode;
}
