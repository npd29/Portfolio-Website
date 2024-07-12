import { SvgIcon } from '@mui/material';
import React from 'react';
import { SkillIconProps } from '../../../store';

export const TypeScriptIcon: React.FC<SkillIconProps> = ({
    color,
    path,
    ...props
}) => {
    return <SvgIcon {...props}>{path}</SvgIcon>;
};
