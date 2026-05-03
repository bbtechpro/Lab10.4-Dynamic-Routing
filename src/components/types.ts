import { useState } from 'react';

export type UseStateType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export function useCustomState<T>(initialValue: T): UseStateType<T> {
    const [state, setState] = useState<T>(initialValue);
    return [state, setState];
}

export interface Post {
    id: number;
    title: string;
    content: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Comment {
    id: number;
    postId: number;
    content: string;
}

export type ComponentProps = {
    title: string;
    description?: string;
    onClick: () => void;
};

export type ComponentState = {
    isLoading: boolean;
    error: string | null;
};

export type ApiResponse<T> = {
    data: T;
    status: number;
    message: string;
};

export type FetchDataFunction<T> = () => Promise<ApiResponse<T>>;

export type EventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

export type FormInput = {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
};

export type TableColumn<T> = {
    header: string;
    accessor: keyof T;
};

export type TableProps<T> = {
    columns: TableColumn<T>[];
    data: T[];
    onRowClick?: (row: T) => void;
};

export type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export type NotificationProps = {
    message: string;
    type: 'success' | 'error' | 'info';
    onClose: () => void;
};

export type TooltipProps = {
    content: string;
    position: 'top' | 'bottom' | 'left' | 'right';
    children: React.ReactNode;
};

export type DropdownProps = {
    options: string[];
    onSelect: (option: string) => void;
    label: string;
};

export type AccordionProps = {
    title: string;
    content: string;
    isOpen: boolean;
    onToggle: () => void;
};

export type TabsProps = {
    tabs: { label: string; content: React.ReactNode }[];
    activeTab: number;
    onTabChange: (index: number) => void;
};

export type CarouselProps = {
    items: React.ReactNode[];
    autoPlay?: boolean;
    interval?: number;
};
