import React, { FC } from 'react';
import {
  BreadcrumbLink as BaseBreadcrumbLink,
  BreadcrumbLinkProps as BaseBreadcrumbLinkProps,
} from '@chakra-ui/core';

export { BaseBreadcrumbLinkProps as BreadcrumbLinkProps };

export const BreadcrumbLink: FC<BaseBreadcrumbLinkProps> = ({
  children,
  ...props
}) => <BaseBreadcrumbLink {...props}>{children}</BaseBreadcrumbLink>;
