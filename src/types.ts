import { FC, LazyExoticComponent, ReactElement } from 'react';
import { Skills } from './store';
export interface SkillIconProps {
    color?: string;
    path: ReactElement;
}
export interface SkillProps {
    light1: string;
    light2?: string;
    dark1: string;
    dark2?: string;
    background: string;
    hovering: boolean;
}
export type Skill = {
    name: string;
    importance: number;
    visible: boolean;
};
export type Project = {
    name: string;
    description: string;
    languages: (keyof typeof Skills)[];
    tools?: string[];
    date?: string;
    githubLink?: string;
    imageAddress?: string;
    finishedLink?: string;
    caption: string;
    isVisible: boolean;
};
