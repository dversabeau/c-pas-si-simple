// Application Keystatic, construite à partir de keystatic.config.ts (même code que la page fournie par Keystatic).
import { makePage } from '@keystatic/astro/ui';
import config from 'virtual:keystatic-config';

export const Keystatic = makePage(config);
