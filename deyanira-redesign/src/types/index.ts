import type { LucideIcon } from 'lucide-react';

export interface IService {
    id: string;
    title: string;
    description: string;
    icon?: string;
}

export interface ICertification {
    id: string;
    year: number;
    title: string;
    organization: string;
    location?: string;
    isCurrent?: boolean;
}

export interface IAward {
    id: string;
    year: number;
    title: string;
    description: string;
    imageRef?: string;
}

export interface INavItem {
    label: string;
    href: string;
    icon?: LucideIcon;
}