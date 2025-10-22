import { Module } from '../../types';
import { tecnicasFundamentales } from './tecnicas-fundamentales';
import { armoniaAvanzada } from './armonia-avanzada';
import { improvisacionAvanzada } from './improvisacion-avanzada';
import { equipamientoSonido } from './equipamiento-sonido';
import { fusionContemporaneo } from './fusion-contemporaneo';

export const modules: Module[] = [
  tecnicasFundamentales,
  armoniaAvanzada,
  improvisacionAvanzada,
  equipamientoSonido,
  fusionContemporaneo
];
