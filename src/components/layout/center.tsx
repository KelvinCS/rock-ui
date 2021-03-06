import React, { FC } from 'react';
import {
  Center as BaseCenter,
  CenterProps as BaseCenterProps,
} from '@chakra-ui/core';

export { BaseCenterProps as CenterProps };

export const Center: FC<BaseCenterProps> = ({ children, ...props }) => (
  <BaseCenter {...props}>{children}</BaseCenter>
);
