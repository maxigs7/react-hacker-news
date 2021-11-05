import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, Link, Stack, useDisclosure } from '@chakra-ui/react';

import { ReactComponent as LogoSvg } from '../../logo.svg';
import { noOutline } from '../../shared/chakra-util';
import { Links } from './links';
import { NavLink } from './NavLink';

export const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="hn-orange.500" color="white" px={4}>
      <Flex align="center" h={16} justify="center" m="auto" maxW="container.lg">
        <HStack alignItems="center" spacing={8}>
          <Link {...noOutline} as={ReactLink} to="/">
            <LogoSvg height={50} width={50} />
          </Link>
          <HStack as={'nav'} display={{ base: 'none', md: 'flex' }} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.path} to={link.path}>
                {link.title}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <IconButton
          {...noOutline}
          aria-label="Open Menu"
          colorScheme="hn-orange"
          display={{ md: 'none' }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          ml="auto"
          onClick={isOpen ? onClose : onOpen}
          size="md"
        />
      </Flex>

      {isOpen ? (
        <Box display={{ md: 'none' }} pb={4}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.path} to={link.path}>
                {link.title}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
