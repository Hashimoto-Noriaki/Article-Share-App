import { TextEncoder, TextDecoder } from 'util';

require('@testing-library/jest-dom');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
