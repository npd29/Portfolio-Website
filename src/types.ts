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

export type ProjectCategory = 'web' | 'cloud' | 'ai' | 'embedded';

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
    categories: ProjectCategory[];
    isFeatured: boolean;
    inDevelopment: boolean;
};
export enum Mode {
    PARTICLE,
    FLOW,
    WAVE
}

export type Settings = {
    /** How quickly the angles shoudl change */
    delta: number; //small decimal

    angleRange: number;

    noiseDetail: number; //int
    /** 0-1 number. Finer detail related to noise */
    falloff: number; //decimal
    followFactor: number; // 0-10 log
    maxspeed: number;
    numParticles: number;
    opacity: number;
    rainbowMode?: boolean;
    color?: number[];
    play?: boolean;
};
export type CaseStudy = {
    name: string;
    client: string;
    overview: string;
    myRole: string;
    impact: string;
    languages: (keyof typeof Skills)[];
    date: string;
    images: string[];
    finishedLink: string;
    caption: string;
    isVisible: boolean;
};
