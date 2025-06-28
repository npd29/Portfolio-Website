import React, { createContext, useContext, useEffect, useRef } from 'react';
import { IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { cn } from '../../lib/utils';
import './dialog.scss';

interface DialogContextType {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

interface DialogProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}

export function Dialog({ open = false, onOpenChange, children }: DialogProps) {
    return (
        <DialogContext.Provider
            value={{ open, onOpenChange: onOpenChange || (() => {}) }}
        >
            {children}
        </DialogContext.Provider>
    );
}

interface DialogTriggerProps {
    asChild?: boolean;
    children: React.ReactNode;
    className?: string;
}

export function DialogTrigger({ children, className }: DialogTriggerProps) {
    const context = useContext(DialogContext);
    if (!context) throw new Error('DialogTrigger must be used within Dialog');

    const handleClick = () => {
        context.onOpenChange(true);
    };

    return (
        <div onClick={handleClick} className={cn('cursor-pointer', className)}>
            {children}
        </div>
    );
}

interface DialogContentProps {
    children: React.ReactNode;
    className?: string;
}

export function DialogContent({ children, className }: DialogContentProps) {
    const context = useContext(DialogContext);
    if (!context) throw new Error('DialogContent must be used within Dialog');

    const contentRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (context.open) {
            document.body.style.overflow = 'hidden';

            const timer = setTimeout(() => {
                if (contentRef.current) {
                    contentRef.current.classList.add('dialog-visible');
                }
            }, 10);

            return () => clearTimeout(timer);
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [context.open]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        if (context.open) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [context.open]);

    const handleClose = () => {
        if (contentRef.current) {
            contentRef.current.classList.remove('dialog-visible');
            contentRef.current.classList.add('dialog-hiding');

            setTimeout(() => {
                context.onOpenChange(false);
            }, 300);
        }
    };

    const handleOverlayClick = (event: React.MouseEvent) => {
        if (event.target === overlayRef.current) {
            handleClose();
        }
    };

    if (!context.open) return null;

    return (
        <>
            <div
                className="dialog-overlay"
                ref={overlayRef}
                onClick={handleOverlayClick}
            />
            <div className={cn('dialog-content', className)} ref={contentRef}>
                {children}
            </div>
        </>
    );
}

interface DialogHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export function DialogHeader({ children, className }: DialogHeaderProps) {
    return <div className={cn('dialog-header', className)}>{children}</div>;
}

interface DialogTitleProps {
    children: React.ReactNode;
    className?: string;
}

export function DialogTitle({ children, className }: DialogTitleProps) {
    return <h3 className={cn('dialog-title', className)}>{children}</h3>;
}

interface DialogCloseProps {
    className?: string;
}

export function DialogClose({ className }: DialogCloseProps) {
    const context = useContext(DialogContext);
    if (!context) throw new Error('DialogClose must be used within Dialog');

    const handleClose = () => {
        context.onOpenChange(false);
    };

    return (
        <IconButton
            className={cn('dialog-close', className)}
            aria-label="close dialog"
            onClick={handleClose}
        >
            <CloseRoundedIcon />
        </IconButton>
    );
}

interface DialogBodyProps {
    children: React.ReactNode;
    className?: string;
}

export function DialogBody({ children, className }: DialogBodyProps) {
    return <div className={cn('dialog-body', className)}>{children}</div>;
}

interface DialogFooterProps {
    children: React.ReactNode;
    className?: string;
}

export function DialogFooter({ children, className }: DialogFooterProps) {
    return <div className={cn('dialog-footer', className)}>{children}</div>;
}
