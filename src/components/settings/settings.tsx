import { Mode, Settings } from '../../types';
import {
    FormControlLabel,
    Switch,
    IconButton,
    FormControl,
    FormLabel,
    Radio,
    RadioGroup
} from '@mui/material';
import TuneIcon from '@mui/icons-material/TuneRounded';
import './settings.scss';
import { useEffect, useState } from 'react';
import { defaultSettings } from '../../store';
import { CloseIcon } from '../icons/close';

interface SettingsProps {
    settings: Settings;
    updateSettings(settings: Settings): void;
    mode: Mode;
    setMode(mode: Mode): void;
}
export default function AnimationSettings({
    settings,
    updateSettings,
    mode,
    setMode
}: SettingsProps) {
    const [showSettings, setShowSettings] = useState(false);
    const [rainbowMode, setRainbowMode] = useState(false);
    useEffect(() => {
        updateSettings({
            ...settings,
            rainbowMode: rainbowMode
        });
    }, [rainbowMode]);
    return (
        <div className="animation-settings">
            {!showSettings && (
                <IconButton
                    aria-label="settings"
                    onClick={() => (
                        console.log('clicked', showSettings),
                        setShowSettings(!showSettings)
                    )}
                >
                    <TuneIcon />
                </IconButton>
            )}

            {showSettings && (
                <div className="settings-popup">
                    <div className="top">
                        <h2>Settings</h2>
                        <div
                            className="close-settings"
                            onClick={() => setShowSettings(!showSettings)}
                        >
                            <CloseIcon color="var(--white)"></CloseIcon>
                        </div>
                    </div>

                    <form>
                        <FormControlLabel
                            label={'Color Loop'}
                            control={
                                (
                                    <Switch
                                        onClick={() => {
                                            setRainbowMode(!rainbowMode);
                                        }}
                                        checked={rainbowMode}
                                    ></Switch>
                                ) ?? <></>
                            }
                        ></FormControlLabel>
                        <FormControl className="modes">
                            Mode
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={defaultSettings[Mode.FLOW]}
                                name="radio-buttons-group"
                                onChange={(choice) => {
                                    setMode(
                                        choice.target.value as unknown as Mode
                                    );
                                }}
                            >
                                {Object.keys(defaultSettings).map((key) => (
                                    <FormControlLabel
                                        key={key}
                                        value={Number(key)}
                                        control={<Radio />}
                                        label={Mode[key as keyof typeof Mode]}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </form>
                    <p>More controls coming soon...</p>
                </div>
            )}
        </div>
    );
}
