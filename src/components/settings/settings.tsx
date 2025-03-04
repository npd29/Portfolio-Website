import { Mode, Settings } from '../../types';
import {
    FormControlLabel,
    Switch,
    IconButton,
    FormControl,
    Radio,
    RadioGroup,
    Button
} from '@mui/material';
import TuneIcon from '@mui/icons-material/TuneRounded';
import './settings.scss';
import { useContext, useEffect, useState } from 'react';
import { defaultSettings } from '../../store';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { SettingsContext } from '../../App';
interface SettingsProps {
    mode: Mode;
    setMode(mode: Mode): void;
    color: number[];
    setClear(clear: boolean): void;
}
export default function AnimationSettings({
    mode,
    setMode,
    color,
    setClear
}: SettingsProps) {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error(
            'SettingsContext must be used within a SettingsProvider'
        );
    }
    const { settings, setSettings } = context;
    const [showSettings, setShowSettings] = useState(false);
    const [rainbowMode, setRainbowMode] = useState(false);
    useEffect(() => {
        setClear(false);
        setSettings({
            ...settings,
            color: color,
            rainbowMode: rainbowMode,
            play: true
        });
    }, [rainbowMode]);
    return (
        <div className="animation-settings">
            {!showSettings && (
                <IconButton
                    aria-label="settings"
                    onClick={() => setShowSettings(!showSettings)}
                >
                    <TuneIcon />
                </IconButton>
            )}

            {showSettings && (
                <div className="settings-popup">
                    <h2>Settings</h2>
                    <IconButton
                        aria-label="close-settings"
                        className="close-settings"
                        onClick={() => setShowSettings(!showSettings)}
                    >
                        <CloseRoundedIcon></CloseRoundedIcon>
                    </IconButton>

                    <form>
                        {/* <FormControlLabel
                            label={'Color Loop'}
                            control={
                                (<></>
                                    // <Switch
                                    //     onClick={() => {
                                    //         setRainbowMode(!rainbowMode);
                                    //     }}
                                    //     checked={rainbowMode}
                                    // ></Switch>
                                ) ?? <></>
                            }
                        ></FormControlLabel> */}
                        <FormControl className="modes">
                            Mode
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={mode}
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
                                        value={key}
                                        control={<Radio className="radio" />}
                                        label={Mode[key as keyof typeof Mode]}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <Button
                            onClick={() => {
                                console.log('pressed');
                                setClear(true);
                            }}
                        >
                            Clear
                        </Button>
                    </form>
                    <p>More controls coming soon...</p>
                </div>
            )}
        </div>
    );
}
