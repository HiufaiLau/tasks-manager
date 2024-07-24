import React from 'react';
import { IDisabled } from './IDisabled';

export interface ITextChange extends IDisabled {
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}