import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { CloseIcon } from '@assets/icons/CloseIcon';
import { IconButton } from '@components/IconButton';

import * as Styled from './Modal.sc';

export type ModalProps = PropsWithChildren<{
  isOpen?: boolean;
  title?: string;
  actions?: ReactNode[];
  onClose?(): void;
}>;

const overlayVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      duration: 0.3,
      delayChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      duration: 0.3,
      delay: 0.4,
    },
  },
};

export function Modal({
  title,
  isOpen,
  onClose,
  actions,
  children,
}: ModalProps) {
  useEffect(() => {
    window.document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Styled.Overlay
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
        >
          <Styled.Container
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '100vh' }}
            transition={{ duration: 0.5 }}
          >
            <Styled.Header>
              <Styled.Title>{title}</Styled.Title>
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Styled.Header>
            {children}
            <Styled.Footer>{actions}</Styled.Footer>
          </Styled.Container>
        </Styled.Overlay>
      )}
    </AnimatePresence>
  );
}
