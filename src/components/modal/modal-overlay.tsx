import React, { FC } from 'react';
import {
  ModalOverlay as BaseModalOverlay,
  ModalOverlayProps as BaseModalOverlayProps,
} from '@chakra-ui/core';

export { BaseModalOverlayProps as ModalOverlayProps };

export const ModalOverlay: FC<BaseModalOverlayProps> = ({
  children,
  ...props
}) => <BaseModalOverlay {...props}>{children}</BaseModalOverlay>;
