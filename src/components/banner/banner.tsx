import React from 'react';
import './banner.scss';
import { CloseIcon } from '../icons/close';
import { Button } from '@mui/material';
export default function Banner() {
    const [showBanner, setShowBannner] = React.useState(true);
    return (
        showBanner && (
            <div className="banner">
                <p>
                    <span>Note:</span> This site is still under constuction
                    while transitioning from the{' '}
                    <a href="https://ndesmara.w3.uvm.edu/portfolio/?id=new-site">
                        original
                    </a>
                    .
                </p>
                <Button onClick={() => setShowBannner(false)}>
                    <CloseIcon color="#FFFFFF" />
                </Button>
            </div>
        )
    );
}
