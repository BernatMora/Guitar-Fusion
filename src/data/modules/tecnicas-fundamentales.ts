import { Music } from 'lucide-react';
import { Module } from '../../types';

export const tecnicasFundamentales: Module = {
  id: 'tecnicas-fundamentales',
  title: 'Técnicas Fundamentales del Fusion',
  icon: Music,
  description: 'Dominio técnico específico para el lenguaje fusion',
  sections: [
    {
      id: 'legato-fusion',
      title: 'Legato Fusion: Construcción de Frases Fluidas',
      description: 'Desarrollo del legato característico del fusion con ejercicios progresivos',
      duration: '45 min',
      difficulty: 'Intermedio-Avanzado',
      content: [
        {
          type: 'heading',
          text: 'El Legato como Base del Sonido Fusion'
        },
        {
          type: 'paragraph',
          text: 'El legato en fusion no es solo una técnica, es la base del fraseo moderno. Allan Holdsworth revolucionó esta aproximación creando líneas que fluyen como un saxofón.'
        },
        {
          type: 'subheading',
          text: 'Ejercicio 1: Patrón Base de Legato (Tempo 80 BPM)'
        },
        {
          type: 'code',
          text: `E|--12h15p12----15h17p15----17h20p17----20h22p20--|
B|----------15-----------17-----------20-----------22|
G|---------------------------------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

Técnica: Hammer-on fuerte, pull-off suave
Digitación: 1-4-1, 1-4-1, 1-4-1, 1-4-1`
        },
        {
          type: 'highlight',
          text: 'CLAVE: El pull-off debe sonar tan fuerte como el hammer-on. Practica cada grupo de 3 notas hasta que suenen perfectamente equilibradas.'
        },
        {
          type: 'subheading',
          text: 'Ejercicio 2: Legato Cromático Ascendente'
        },
        {
          type: 'code',
          text: `E|--12h13h14h15--15h16h17h18--18h19h20h21--21h22h23h24--|
B|------------------------------------------------------|
G|------------------------------------------------------|

Tempo: Empezar a 60 BPM, llegar a 120 BPM
Meta: Cada nota debe sonar clara y definida`
        },
        {
          type: 'subheading',
          text: 'Aplicación Musical: Frase Estilo Holdsworth'
        },
        {
          type: 'code',
          text: `Sobre Cmaj7:
E|--12h15p12h14p12----17h20p17h19p17----|
B|-----------------15----------------20-|
G|--------------------------------------|

Análisis: C-E-C-D-C, F-A-F-G-F
Concepto: Aproximaciones cromáticas a notas del acorde`
        },
        {
          type: 'paragraph',
          text: 'Practica esta frase sobre diferentes acordes maj7, manteniendo el mismo patrón de digitación pero adaptando las notas objetivo.'
        },
        {
          type: 'subheading',
          text: 'Rutina de Práctica Diaria'
        },
        {
          type: 'list',
          items: [
            '10 min: Ejercicio 1 a diferentes tempos (80-140 BPM)',
            '10 min: Ejercicio 2 cromático en todas las cuerdas',
            '15 min: Aplicar frase de Holdsworth en progresión ii-V-I',
            '10 min: Crear variaciones propias del patrón base'
          ]
        }
      ]
    },
    {
      id: 'sweep-picking-fusion',
      title: 'Sweep Picking: Arpeggios Fluidos y Extensiones',
      description: 'Técnica de sweep específica para arpeggios complejos del fusion',
      duration: '50 min',
      difficulty: 'Avanzado',
      content: [
        {
          type: 'heading',
          text: 'Sweep Picking en el Contexto Fusion'
        },
        {
          type: 'paragraph',
          text: 'El sweep en fusion no busca velocidad extrema, sino fluidez y musicalidad. Frank Gambale y Brett Garsed son maestros de esta aproximación melódica.'
        },
        {
          type: 'subheading',
          text: 'Ejercicio Fundamental: Triada Mayor (Tempo 100 BPM)'
        },
        {
          type: 'code',
          text: `Cmaj (5ta cuerda):
A|--3-------|
D|----5-----|
G|------4---|
B|--------5-|
E|----------|

Movimiento de púa: ↓ ↓ ↓ ↑
Digitación: 1-3-2-3

CRÍTICO: La púa debe "caer" por gravedad, no forzar el movimiento`
        },
        {
          type: 'subheading',
          text: 'Progresión: Triada a Séptima'
        },
        {
          type: 'code',
          text: `Cmaj7 (posición completa):
A|--3-------|
D|----5-----|
G|------4---|
B|--------5-|
E|----------8|

Añadir la 7ma mayor (B) en la 1ra cuerda
Movimiento: ↓ ↓ ↓ ↓ ↑`
        },
        {
          type: 'subheading',
          text: 'Aplicación Avanzada: Extensiones y Alteraciones'
        },
        {
          type: 'code',
          text: `Cmaj7#11 (sonido fusion característico):
A|--3-------|
D|----5-----|
G|------4---|
B|--------5-|
E|----------8|
B|------------10| (añadir F# como #11)

Esta extensión es fundamental en el vocabulario fusion`
        },
        {
          type: 'highlight',
          text: 'CONCEPTO CLAVE: En fusion, las extensiones (#11, 9, 13) son tan importantes como las notas del acorde básico. Practícalas como parte integral del sonido.'
        },
        {
          type: 'subheading',
          text: 'Secuencia de Desarrollo Técnico'
        },
        {
          type: 'list',
          items: [
            'Semana 1-2: Triadas mayores y menores en todas las posiciones',
            'Semana 3-4: Acordes de séptima (maj7, m7, dom7)',
            'Semana 5-6: Extensiones (#11, 9, 13)',
            'Semana 7-8: Combinaciones y secuencias melódicas'
          ]
        },
        {
          type: 'subheading',
          text: 'Ejercicio de Aplicación: Progresión ii-V-I'
        },
        {
          type: 'code',
          text: `Dm7 - G7 - Cmaj7#11:

Dm7:        G7:         Cmaj7#11:
A|--5--|    A|--3--|    A|--3-----|
D|----7|    D|----5|    D|----5---|
G|-----5|   G|-----4|   G|------4-|
B|------6|  B|------3|  B|--------5|
E|-------|  E|-------|  E|----------8|
        |           |  B|------------10|`
        },
        {
          type: 'paragraph',
          text: 'Practica esta progresión hasta que puedas tocarla fluidamente a 120 BPM. Es la base armónica del 80% del repertorio fusion.'
        }
      ]
    },
    {
      id: 'hybrid-picking-avanzado',
      title: 'Hybrid Picking: Texturas y Voicings Complejos',
      description: 'Técnica híbrida para acordes y melodías simultáneas',
      duration: '40 min',
      difficulty: 'Avanzado',
      content: [
        {
          type: 'heading',
          text: 'Hybrid Picking: La Técnica de Scott Henderson'
        },
        {
          type: 'paragraph',
          text: 'El hybrid picking permite tocar acordes y melodías simultáneamente, creando texturas imposibles solo con púa. Scott Henderson y Robben Ford son maestros de esta técnica.'
        },
        {
          type: 'subheading',
          text: 'Configuración Básica de Dedos'
        },
        {
          type: 'paragraph',
          text: 'Púa: cuerdas 6, 5, 4 (graves) | Medio: cuerda 3 | Anular: cuerda 2 | Meñique: cuerda 1'
        },
        {
          type: 'subheading',
          text: 'Ejercicio 1: Chord Melody Básico'
        },
        {
          type: 'code',
          text: `Cmaj7 con melodía en agudos:
E|--8--7--8--10--| (meñique)
B|--8--8--8--8---| (anular)
G|--9--9--9--9---| (medio)
D|--10-10-10-10--| (púa)
A|--10-10-10-10--| (púa)
E|---------------|

Melodía: C-B-C-D sobre acorde fijo
Técnica: Mantén el acorde mientras mueves solo el meñique`
        },
        {
          type: 'highlight',
          text: 'FUNDAMENTAL: Los dedos deben actuar independientemente. El acorde se mantiene mientras la melodía se mueve libremente.'
        },
        {
          type: 'subheading',
          text: 'Ejercicio 2: Arpeggios con Pedal'
        },
        {
          type: 'code',
          text: `Cmaj7 con pedal en grave:
E|--12--15--17--20--| (dedos: arpeggio)
B|--13--13--13--13--| (anular: pedal)
G|--12--12--12--12--| (medio: pedal)
D|--14--14--14--14--| (púa: pedal)
A|--15--15--15--15--| (púa: pedal)
E|------------------|

Concepto: Melodía móvil sobre base armónica fija`
        },
        {
          type: 'subheading',
          text: 'Aplicación Estilo Henderson: Blues Fusion'
        },
        {
          type: 'code',
          text: `A7 con aproximaciones cromáticas:
E|--5--6--5--3--| (meñique: melodía)
B|--5--5--5--5--| (anular: 5ta del acorde)
G|--6--6--6--6--| (medio: 3ra del acorde)
D|--5--5--5--5--| (púa: fundamental)
A|--7--7--7--7--| (púa: fundamental)
E|--------------|

Análisis melódico: E-F-E-C# (5-b6-5-3 sobre A7)`
        },
        {
          type: 'subheading',
          text: 'Rutina de Desarrollo'
        },
        {
          type: 'list',
          items: [
            'Día 1-3: Independencia de dedos con acordes estáticos',
            'Día 4-7: Melodías simples sobre acordes fijos',
            'Día 8-14: Progresiones ii-V-I con chord melody',
            'Día 15-21: Improvisación libre combinando técnicas'
          ]
        },
        {
          type: 'paragraph',
          text: 'La clave está en la paciencia. Esta técnica requiere meses de desarrollo, pero transforma completamente tu sonido y posibilidades expresivas.'
        }
      ]
    },
    {
      id: 'tapping-melodico',
      title: 'Tapping Melódico: Extensión del Rango Armónico',
      description: 'Tapping aplicado musicalmente para expandir posibilidades melódicas',
      duration: '35 min',
      difficulty: 'Intermedio-Avanzado',
      content: [
        {
          type: 'heading',
          text: 'Tapping Melódico: Más Allá de la Velocidad'
        },
        {
          type: 'paragraph',
          text: 'El tapping en fusion no busca impresionar con velocidad, sino expandir el rango melódico y crear intervalos imposibles con técnicas convencionales. Stanley Jordan y Jennifer Batten son pioneros de esta aproximación musical.'
        },
        {
          type: 'subheading',
          text: 'Técnica Base: Tapping con Índice Derecho'
        },
        {
          type: 'code',
          text: `Ejercicio fundamental (Cmaj7):
E|--12t--8h12p8--15t--12h15p12--|
B|------------------------------|
G|------------------------------|

t = tap (índice derecho)
h = hammer-on (mano izquierda)
p = pull-off (mano izquierda)

Notas: C-G-C-G, D-C-D-C
Concepto: Intervalos de 5ta imposibles con técnica normal`
        },
        {
          type: 'highlight',
          text: 'CLAVE TÉCNICA: El tap debe ser perpendicular al diapasón, como un martillo. No deslizar el dedo.'
        },
        {
          type: 'subheading',
          text: 'Aplicación Armónica: Acordes Expandidos'
        },
        {
          type: 'code',
          text: `Cmaj9 con tapping:
E|--15t-----------| (D - 9na)
B|-----13h15p13---| (C - fundamental)
G|--------------14t| (B - 7ma mayor)
D|-----12h14p12---| (G - 5ta)
A|----------------|
E|----------------|

Resultado: Acorde de 4 notas con extensión amplia
Imposible de tocar con técnica convencional`
        },
        {
          type: 'subheading',
          text: 'Secuencia Melódica Avanzada'
        },
        {
          type: 'code',
          text: `Frase estilo Stanley Jordan sobre Dm7:
E|--17t--13h17p13--15t--12h15p12--13t--10h13p10--|
B|-----------------------------------------------|
G|-----------------------------------------------|

Análisis: F-D-F-D, E-C-E-C, D-Bb-D-Bb
Concepto: Aproximaciones cromáticas con intervalos amplios`
        },
        {
          type: 'subheading',
          text: 'Ejercicio de Coordinación: Dos Manos Independientes'
        },
        {
          type: 'code',
          text: `Mano izquierda (bajo):    Mano derecha (tapping):
A|--3--5--7--8--|         E|--12t--15t--17t--19t--|
D|--------------|         B|---------------------|
G|--------------|         G|---------------------|

Bajo: C-D-E-F (escala)
Agudo: C-D#-F-G (arpeggio Cm7)
Resultado: Contrapunto a dos voces`
        },
        {
          type: 'subheading',
          text: 'Desarrollo Progresivo'
        },
        {
          type: 'list',
          items: [
            'Semana 1: Tapping básico en una cuerda, tempo lento',
            'Semana 2: Combinaciones hammer-on/pull-off fluidas',
            'Semana 3: Tapping en múltiples cuerdas',
            'Semana 4: Coordinación de ambas manos independientes',
            'Semana 5+: Aplicación musical en progresiones reales'
          ]
        },
        {
          type: 'paragraph',
          text: 'El objetivo no es la velocidad, sino la musicalidad. Cada nota debe tener propósito melódico y armónico claro.'
        }
      ]
    }
  ]
};
