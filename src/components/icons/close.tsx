import { SvgIcon } from '@mui/material';

interface CloseProps {
    color: string;
}
export const CloseIcon = ({ color }: CloseProps) => {
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 30"
            x="0px"
            y="0px"
        >
            <title>close</title>
            <g>
                <path
                    fill={color}
                    d="M7.05,17a1,1,0,0,0,1.41,0L12,13.41,15.54,17A1,1,0,0,0,17,15.54L13.41,12,17,8.46a1,1,0,0,0-1.41-1.41L12,10.59,8.46,7.05A1,1,0,0,0,7.05,8.46L10.59,12,7.05,15.54A1,1,0,0,0,7.05,17Z"
                />
            </g>
        </SvgIcon>
    );
};
