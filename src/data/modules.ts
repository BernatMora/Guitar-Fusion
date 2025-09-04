import { 
  Music, 
  Zap, 
  Target, 
  Headphones, 
  Settings, 
  Mic, 
  TrendingUp, 
  Award,
  Ear,
  BookOpen
} from 'lucide-react';
import { Module } from '../types';

export const modules: Module[] = [
  {
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
  },
  {
    id: 'armonia-avanzada',
    title: 'Armonía Fusion Avanzada',
    icon: Target,
    description: 'Teoría armónica específica del fusion con aplicaciones prácticas',
    sections: [
      {
        id: 'extensiones-alteraciones',
        title: 'Extensiones y Alteraciones: El Sonido Fusion',
        description: 'Dominio completo de extensiones armónicas y sus aplicaciones',
        duration: '60 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Las Extensiones como Lenguaje Básico'
          },
          {
            type: 'paragraph',
            text: 'En fusion, las extensiones no son "adornos" sino el vocabulario fundamental. Un Cmaj7 sin la 9na suena incompleto, un Dm7 sin la 11na carece de color fusion.'
          },
          {
            type: 'subheading',
            text: 'Jerarquía de Extensiones por Función Armónica'
          },
          {
            type: 'highlight',
            text: 'ACORDES MAYORES: 9, #11, 13 son extensiones naturales. Evitar 11 natural (crea disonancia con la 3ra mayor).'
          },
          {
            type: 'code',
            text: `Cmaj7 → Cmaj9 → Cmaj9#11 → Cmaj13#11

Voicing recomendado Cmaj13#11:
E|--12--| (E - 3ra mayor)
B|--13--| (F# - #11)
G|--12--| (E - 3ra mayor)  
D|--14--| (G - 5ta)
A|--15--| (A - 13)
E|------| 

Notas del acorde: C-E-G-B-D-F#-A
Sonido: Característico fusion, usado por Chick Corea constantemente`
          },
          {
            type: 'highlight',
            text: 'ACORDES MENORES: 9, 11, 13 son todas naturales. La 11 natural es especialmente importante.'
          },
          {
            type: 'code',
            text: `Dm7 → Dm9 → Dm11 → Dm13

Voicing Dm11 (sonido Herbie Hancock):
E|--13--| (F - 11)
B|--15--| (G - 11 relativa = 4ta)
G|--14--| (F - 11)
D|--15--| (G - 11 relativa)
A|--15--| (G - 11 relativa)
E|------| 

La 11 natural (F) es el color definitorio del minor fusion`
          },
          {
            type: 'subheading',
            text: 'Dominantes Alterados: El Corazón del Fusion'
          },
          {
            type: 'paragraph',
            text: 'Los dominantes alterados crean la tensión-resolución característica del fusion. G7alt resolviendo a Cmaj7#11 es el movimiento armónico más importante del género.'
          },
          {
            type: 'code',
            text: `G7alt (todas las alteraciones posibles):
G7b9, G7#9, G7#11, G7b13

Voicing G7alt completo:
E|--14--| (Bb - b13)
B|--13--| (Ab - b9)
G|--14--| (Bb - b13)
D|--13--| (Ab - b9)
A|--14--| (Bb - b13)
E|------| 

Escala: G Ab Bb B Db Eb F (alterada/superlocria)
Resolución natural: Cmaj7#11`
          },
          {
            type: 'subheading',
            text: 'Progresión Fusion Fundamental: ii-V-I con Extensiones'
          },
          {
            type: 'code',
            text: `Dm11 - G7alt - Cmaj13#11

Análisis de movimiento de voces:
- F (11 de Dm) → F (7ma de G7alt) → F# (#11 de Cmaj)
- Bb (b13 de G7alt) → B (7ma mayor de Cmaj)
- Movimiento cromático suave entre acordes

Esta progresión aparece en el 90% de los standards fusion`
          },
          {
            type: 'subheading',
            text: 'Ejercicio Práctico: Rearmonización de Standard'
          },
          {
            type: 'paragraph',
            text: 'Toma "Autumn Leaves" y aplica extensiones fusion:'
          },
          {
            type: 'code',
            text: `Original: Cm7 - F7 - BbMaj7
Fusion:   Cm11 - F7#11 - BbMaj13#11

Original: Am7b5 - D7 - Gm7  
Fusion:   Am11b5 - D7alt - Gm13

El resultado: Mismo esquema armónico, sonido completamente fusion`
          },
          {
            type: 'subheading',
            text: 'Rutina de Práctica Armónica'
          },
          {
            type: 'list',
            items: [
              'Día 1-7: Memorizar voicings de extensiones en todas las tonalidades',
              'Día 8-14: Progresiones ii-V-I con extensiones, tempo lento',
              'Día 15-21: Rearmonizar standards conocidos',
              'Día 22-30: Improvisación sobre progresiones rearmonizadas'
            ]
          },
          {
            type: 'highlight',
            text: 'CONCEPTO CLAVE: En fusion, la armonía no es acompañamiento, es parte integral de la melodía. Piensa armónicamente mientras improvises.'
          }
        ]
      },
      {
        id: 'sustituciones-avanzadas',
        title: 'Sustituciones Armónicas: Rearmonización Creativa',
        description: 'Técnicas avanzadas de sustitución para crear progresiones sofisticadas',
        duration: '55 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Sustituciones: Transformando lo Común en Extraordinario'
          },
          {
            type: 'paragraph',
            text: 'Las sustituciones armónicas son el secreto de los grandes arreglistas fusion como Bob James y David Sanborn. Transforman progresiones simples en paisajes armónicos complejos.'
          },
          {
            type: 'subheading',
            text: 'Sustitución Tritonal: La Base de Todo'
          },
          {
            type: 'paragraph',
            text: 'Cualquier dominante puede ser sustituido por otro dominante a distancia de tritono. G7 → Db7, ambos resuelven perfectamente a C.'
          },
          {
            type: 'code',
            text: `Progresión original: Dm7 - G7 - Cmaj7
Sustitución tritonal: Dm7 - Db7 - Cmaj7

Análisis del movimiento de bajo:
D → Db → C (movimiento cromático descendente)
Mucho más sofisticado que D → G → C

Voicing Db7 (sustituto de G7):
E|--9---| (Gb - 5ta de Db7, función de 7ma de G7)
B|--9---| (Gb - misma nota)
G|--10--| (Ab - b13 de Db7, función de b9 de G7)
D|--9---| (Gb - 5ta)
A|--11--| (Bb - 13 de Db7)
E|------| `
          },
          {
            type: 'subheading',
            text: 'Sustitución por Relativos: Expandiendo Opciones'
          },
          {
            type: 'code',
            text: `Cmaj7 puede ser sustituido por:
- Am7 (relativo menor)
- Em7 (iii grado, función de tónica)
- Fmaj7 (IV grado, función subdominante)

Progresión: Cmaj7 - Am7 - Dm7 - G7
Resultado: Movimiento de bajo C-A-D-G (más interesante que C-C-D-G)`
          },
          {
            type: 'subheading',
            text: 'Sustitución por Acordes de Aproximación'
          },
          {
            type: 'paragraph',
            text: 'Insertar acordes que se aproximen cromáticamente al acorde objetivo:'
          },
          {
            type: 'code',
            text: `Objetivo: Cmaj7
Aproximación: Dbmaj7 - Cmaj7 (aproximación cromática descendente)
O: Bmaj7 - Cmaj7 (aproximación cromática ascendente)

En contexto:
Original: Dm7 - G7 - Cmaj7
Con aproximación: Dm7 - G7 - Dbmaj7 - Cmaj7

El Dbmaj7 crea tensión que resuelve bellamente en Cmaj7`
          },
          {
            type: 'subheading',
            text: 'Técnica Avanzada: Sustitución por Acordes de Intercambio Modal'
          },
          {
            type: 'code',
            text: `En tonalidad de C mayor, usar acordes del modo paralelo menor:
- Fm7 (iv menor en lugar de F mayor)
- Abmaj7 (bVI en lugar de Am7)
- Bb7 (bVII en lugar de Bm7b5)

Progresión fusion típica:
Cmaj7 - Fm7 - Bb7 - Cmaj7
(I - iv - bVII - I)

Sonido: Característico de Weather Report y Return to Forever`
          },
          {
            type: 'highlight',
            text: 'CONCEPTO CLAVE: Las sustituciones no son aleatorias. Cada sustitución debe mantener la función armónica original mientras añade color y movimiento.'
          },
          {
            type: 'subheading',
            text: 'Ejercicio Práctico: Rearmonización Completa'
          },
          {
            type: 'paragraph',
            text: 'Toma la progresión más simple: I - vi - ii - V'
          },
          {
            type: 'code',
            text: `Original (C mayor):
Cmaj7 - Am7 - Dm7 - G7

Nivel 1 (sustituciones básicas):
Cmaj7 - F#m7b5 B7 - Dm7 - Db7

Nivel 2 (aproximaciones cromáticas):
Cmaj7 - Dbmaj7 Cmaj7 - F#m7b5 B7 - Dm7 Ebm7 - Db7

Nivel 3 (intercambio modal):
Cmaj7 - Abmaj7 - F#m7b5 B7 - Dm7 Ebm7 - Db7 Gbmaj7

Resultado: 8 acordes en lugar de 4, movimiento de bajo completamente cromático`
          },
          {
            type: 'subheading',
            text: 'Aplicación en Standards Conocidos'
          },
          {
            type: 'list',
            items: [
              '"All The Things You Are": Aplicar sustituciones tritonales en todos los V7',
              '"Giant Steps": Analizar las sustituciones de Coltrane como modelo',
              '"Autumn Leaves": Usar intercambio modal en la sección menor',
              '"Body and Soul": Aproximaciones cromáticas en el puente'
            ]
          },
          {
            type: 'paragraph',
            text: 'La clave está en aplicar las sustituciones gradualmente. Empieza con una por progresión, luego ve añadiendo complejidad.'
          }
        ]
      },
      {
        id: 'modos-aplicados',
        title: 'Modos Aplicados: Más Allá de la Teoría',
        description: 'Uso práctico de modos en improvisación y composición fusion',
        duration: '50 min',
        difficulty: 'Intermedio-Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Modos en Fusion: Sonoridades Específicas'
          },
          {
            type: 'paragraph',
            text: 'Los modos en fusion no son ejercicios teóricos, son sonoridades específicas que definen el carácter de cada sección. Cada modo tiene su personalidad y aplicación práctica.'
          },
          {
            type: 'subheading',
            text: 'Dórico: El Modo Fusion por Excelencia'
          },
          {
            type: 'paragraph',
            text: 'El modo dórico (menor con 6ta mayor) es el sonido definitorio del fusion. "So What" de Miles Davis estableció este sonido como fundamental.'
          },
          {
            type: 'code',
            text: `D Dórico: D E F G A B C D
Sobre Dm7: 1 2 b3 4 5 6 b7 8

Frase característica (tempo 120):
E|--10--12--13--15--13--12--10--8--|
B|--10--11--13--15--13--11--10--8--|
G|---------------------------------|

Análisis: D-E-F-G-F-E-D-C, D-E-F-G-F-E-D-C
La 6ta mayor (B) es la nota que define el sonido dórico`
          },
          {
            type: 'highlight',
            text: 'APLICACIÓN: Usa dórico sobre cualquier acorde m7 que dure más de 2 compases. Es el sonido de "Spain", "Maiden Voyage", "Cantaloupe Island".'
          },
          {
            type: 'subheading',
            text: 'Lidio: Sonoridad Etérea y Suspendida'
          },
          {
            type: 'code',
            text: `C Lidio: C D E F# G A B C
Sobre Cmaj7: 1 2 3 #4 5 6 7 8

Voicing característico:
E|--12--| (E - 3ra mayor)
B|--13--| (F# - #11)
G|--12--| (E - 3ra mayor)
D|--14--| (G - 5ta)
A|--15--| (A - 6ta)
E|------| 

La #11 (F#) crea la suspensión característica del modo lidio`
          },
          {
            type: 'paragraph',
            text: 'Lidio se usa sobre acordes maj7 estáticos, especialmente en secciones de "vamp" o groove extendido. Chick Corea lo usa constantemente.'
          },
          {
            type: 'subheading',
            text: 'Mixolidio: Dominantes Relajados'
          },
          {
            type: 'code',
            text: `G Mixolidio: G A B C D E F G
Sobre G7: 1 2 3 4 5 6 b7 8

Diferencia con G mayor: F natural en lugar de F#
Sonido: Dominante sin urgencia de resolver

Frase típica sobre G7:
E|--15--17--19--17--15--14--12--|
B|--15--16--17--16--15--15--13--|

Análisis: G-A-B-A-G-F#-E, G-A-B-A-G-G-F
La b7 natural (F) relaja la tensión del dominante`
          },
          {
            type: 'subheading',
            text: 'Alterado (Superlocrio): Tensión Máxima'
          },
          {
            type: 'code',
            text: `G Alterado: G Ab Bb B Db Eb F G
Sobre G7alt: 1 b9 #9 3 #11 b13 b7 8

Todas las tensiones posibles están alteradas
Uso: Dominantes que resuelven con fuerza

Lick característico:
E|--14--13--12--11--10--9--8--|
B|------------------------------|

Notas: Bb-Ab-G-Gb-F-Eb-D
Movimiento cromático descendente, máxima tensión`
          },
          {
            type: 'highlight',
            text: 'REGLA DE ORO: Usa alterado solo en dominantes que resuelven. En dominantes estáticos, usa mixolidio o lidio b7.'
          },
          {
            type: 'subheading',
            text: 'Aplicación Práctica: Análisis Modal de "Spain"'
          },
          {
            type: 'code',
            text: `"Spain" - Chick Corea:

Sección A: Gmaj7 (4 compases)
Modo: G Lidio (G A B C# D E F# G)
Sonoridad: Etérea, suspendida

Sección B: Em7 (4 compases)  
Modo: E Dórico (E F# G A B C# D E)
Sonoridad: Melancólica pero no triste

Puente: Am7 - D7 - Gmaj7
Am7: A Dórico
D7: D Mixolidio (o alterado si quieres más tensión)
Gmaj7: G Lidio (vuelta al tema)`
          },
          {
            type: 'subheading',
            text: 'Ejercicio de Desarrollo Modal'
          },
          {
            type: 'list',
            items: [
              'Semana 1: Memorizar digitaciones de cada modo en 3 posiciones',
              'Semana 2: Crear frases características de cada modo',
              'Semana 3: Aplicar modos sobre progresiones simples',
              'Semana 4: Improvisar cambiando de modo según el acorde',
              'Semana 5+: Componer usando diferentes centros modales'
            ]
          },
          {
            type: 'paragraph',
            text: 'El objetivo no es tocar escalas, sino crear música con personalidades modales específicas. Cada modo debe evocar una emoción diferente.'
          }
        ]
      },
      {
        id: 'poliacordes-estructuras',
        title: 'Poliacordes y Estructuras Superiores',
        description: 'Técnicas avanzadas de construcción armónica para sonoridades complejas',
        duration: '45 min',
        difficulty: 'Muy Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Poliacordes: Superposición Armónica Inteligente'
          },
          {
            type: 'paragraph',
            text: 'Los poliacordes son la técnica más sofisticada del fusion moderno. Consisten en superponer dos acordes simples para crear sonoridades complejas imposibles de obtener de otra manera.'
          },
          {
            type: 'subheading',
            text: 'Concepto Fundamental: Triada sobre Bajo'
          },
          {
            type: 'code',
            text: `Ejemplo básico: D/C (triada de D mayor sobre bajo C)

Voicing:
E|--10--| (D - fundamental de la triada superior)
B|--12--| (F# - 3ra de la triada superior)  
G|--11--| (D - fundamental repetida)
D|--12--| (F# - 3ra repetida)
A|--3---| (C - bajo, fundamental del poliacorde)
E|------| 

Resultado sonoro: Cmaj7#11
Análisis: C (bajo) + D-F#-A (triada) = C-D-F#-A = Cmaj7#11`
          },
          {
            type: 'highlight',
            text: 'VENTAJA: Los poliacordes son más fáciles de visualizar que los voicings complejos. Piensas en formas simples superpuestas.'
          },
          {
            type: 'subheading',
            text: 'Poliacordes para Acordes Mayores'
          },
          {
            type: 'code',
            text: `Para Cmaj7 con extensiones:

Cmaj9: D/C (triada de D sobre C)
- Resultado: C-E-G-B-D (maj9)

Cmaj7#11: D/C (igual que maj9, pero enfatizando F#)
- Resultado: C-E-G-B-D-F# (maj7#11)

Cmaj13#11: Em/C (triada de Em sobre C)
- Resultado: C-E-G-B-E-G-B = Cmaj13#11 con duplicaciones`
          },
          {
            type: 'subheading',
            text: 'Poliacordes para Dominantes Alterados'
          },
          {
            type: 'code',
            text: `G7alt usando poliacordes:

Db/G (triada de Db sobre G):
E|--9---| (Db - b13 de G7)
B|--10--| (Eb - b13 relativa)
G|--10--| (Eb - b13)
D|--11--| (F - b7 de G7)
A|--9---| (Db - b13)
E|--3---| (G - fundamental)

Resultado: G7b13 con sonoridad muy densa
Todas las alteraciones están presentes naturalmente`
          },
          {
            type: 'subheading',
            text: 'Estructuras Superiores: Pensamiento Vertical'
          },
          {
            type: 'paragraph',
            text: 'Las estructuras superiores toman las extensiones (9, 11, 13) y las organizan como triadas independientes:'
          },
          {
            type: 'code',
            text: `Cmaj13#11 analizado como estructura superior:

Bajo: C-E-G-B (Cmaj7 básico)
Estructura superior: D-F#-A (triada sobre las extensiones 9-#11-13)

Voicing separado:
Mano izquierda: Cmaj7
Mano derecha: D mayor

Resultado: Sonoridad compleja con digitación simple`
          },
          {
            type: 'subheading',
            text: 'Aplicación en Progresión ii-V-I'
          },
          {
            type: 'code',
            text: `Dm11 - G7alt - Cmaj13#11 usando poliacordes:

Dm11 = F/D (triada de F sobre D)
- F-A-C sobre D = D-F-A-C-F = Dm11

G7alt = Db/G (triada de Db sobre G)  
- Db-F-Ab sobre G = G7b9b13

Cmaj13#11 = D/C (triada de D sobre C)
- D-F#-A sobre C = Cmaj7#11(add9)

Movimiento de triadas superiores: F → Db → D
Movimiento de bajos: D → G → C`
          },
          {
            type: 'highlight',
            text: 'CONCEPTO REVOLUCIONARIO: En lugar de pensar en acordes complejos, piensa en triadas simples moviéndose sobre bajos simples.'
          },
          {
            type: 'subheading',
            text: 'Ejercicio de Desarrollo'
          },
          {
            type: 'list',
            items: [
              'Día 1-5: Memorizar poliacordes básicos (triadas mayores sobre diferentes bajos)',
              'Día 6-10: Poliacordes menores y sus resultados sonoros',
              'Día 11-15: Aplicar poliacordes en progresiones ii-V-I',
              'Día 16-20: Crear voicings propios usando el concepto',
              'Día 21+: Improvisar pensando en estructuras superiores'
            ]
          },
          {
            type: 'subheading',
            text: 'Compositores de Referencia'
          },
          {
            type: 'paragraph',
            text: 'Bill Evans popularizó las estructuras superiores en jazz. Chick Corea las llevó al fusion. Hiromi las usa extensivamente en fusion contemporáneo. Estudia sus voicings para entender la aplicación práctica.'
          }
        ]
      }
    ]
  },
  {
    id: 'improvisacion-avanzada',
    title: 'Improvisación Fusion Avanzada',
    icon: Zap,
    description: 'Desarrollo del lenguaje improvisatorio fusion con ejercicios específicos',
    sections: [
      {
        id: 'desarrollo-fraseo',
        title: 'Desarrollo del Fraseo: Construcción de Ideas Musicales',
        description: 'Técnicas para crear frases coherentes y expresivas en el lenguaje fusion',
        duration: '55 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Fraseo Fusion: Más Allá de las Escalas'
          },
          {
            type: 'paragraph',
            text: 'El fraseo fusion no se basa en correr escalas, sino en construir ideas musicales coherentes con desarrollo lógico. Allan Holdsworth, John Scofield y Mike Stern son maestros de esta aproximación arquitectónica a la improvisación.'
          },
          {
            type: 'subheading',
            text: 'Principio 1: Motivos y Desarrollo'
          },
          {
            type: 'paragraph',
            text: 'Un motivo es una idea musical corta (2-4 notas) que se desarrolla a través de variaciones. Es la base de toda improvisación coherente.'
          },
          {
            type: 'code',
            text: `Motivo básico sobre Cmaj7:
E|--12--15--12--| (C-E-C)

Desarrollo 1 - Transposición:
E|--12--15--12----15--17--15--| (C-E-C, E-G-E)

Desarrollo 2 - Inversión:
E|--15--12--15--| (E-C-E)

Desarrollo 3 - Aumentación rítmica:
E|--12----15----12----| (mismo motivo, notas más largas)

Desarrollo 4 - Secuencia:
E|--12--15--12----10--13--10----8--11--8--|
   (C-E-C,        Bb-D-Bb,      A-C#-A)`
          },
          {
            type: 'highlight',
            text: 'CLAVE: Un solo de 32 compases puede construirse desarrollando un solo motivo de 3 notas. La coherencia es más importante que la complejidad.'
          },
          {
            type: 'subheading',
            text: 'Principio 2: Construcción de Frases por Capas'
          },
          {
            type: 'code',
            text: `Frase completa sobre Dm7 - G7 - Cmaj7:

Capa 1 - Estructura rítmica:
|♩ ♪♪ ♩ ♪♪|♩ ♪♪ ♩ ♪♪|♩ ♪♪ ♩ ♪♪|♩ ♪♪ ♩ ♪♪|

Capa 2 - Contorno melódico:
Dm7: ascendente
G7: pico y descenso  
Cmaj7: resolución suave

Capa 3 - Notas específicas:
E|--10--12--13----15--17--15--13----12--15--12--10--|
B|--------------------------------------------------|

Análisis: F-G-A (Dm7), B-C#-B-A (G7), G-B-G-E (Cmaj7)
Cada acorde tiene su propio carácter melódico`
          },
          {
            type: 'subheading',
            text: 'Principio 3: Uso del Espacio y Silencio'
          },
          {
            type: 'paragraph',
            text: 'Los grandes improvisadores fusion usan el silencio como elemento compositivo. No es ausencia de música, es parte integral de la frase.'
          },
          {
            type: 'code',
            text: `Frase con espacios estratégicos:
Compás 1: |♩ ♪♪ ♩ ♪♪| (frase activa)
Compás 2: |♩ - - -| (silencio, deja que la armonía respire)
Compás 3: |♪♪ ♩ ♪♪ ♩| (respuesta a la frase inicial)
Compás 4: |♩ - ♪♪ ♩| (conclusión con espacio)

El silencio crea expectativa y hace que las notas siguientes tengan más impacto`
          },
          {
            type: 'subheading',
            text: 'Técnica Avanzada: Fraseo Asimétrico'
          },
          {
            type: 'paragraph',
            text: 'El fusion moderno usa frases que no coinciden con las divisiones de compás tradicionales, creando tensión rítmica sofisticada.'
          },
          {
            type: 'code',
            text: `Frase de 5 beats sobre compás de 4/4:
Beat: 1 e + a 2 e + a 3 e + a 4 e + a |1 e + a 2 e + a 3 e + a 4 e + a
Frase: ♩ ♪♪ ♩ ♪♪ ♩ |♪♪ ♩ ♪♪ ♩ ♪♪ ♩ |♪♪ ♩ ♪♪ ♩

La frase se desplaza constantemente, creando polirritmia natural
Técnica usada extensivamente por Allan Holdsworth`
          },
          {
            type: 'subheading',
            text: 'Ejercicio de Desarrollo del Fraseo'
          },
          {
            type: 'list',
            items: [
              'Semana 1: Crear 5 motivos diferentes, desarrollar cada uno por 10 minutos diarios',
              'Semana 2: Combinar motivos en frases de 8 compases',
              'Semana 3: Añadir espacios y silencios estratégicos',
              'Semana 4: Experimentar con frases asimétricas',
              'Semana 5+: Aplicar en improvisación libre sobre standards'
            ]
          },
          {
            type: 'subheading',
            text: 'Análisis de Maestros: John Scofield'
          },
          {
            type: 'paragraph',
            text: 'Scofield construye solos como conversaciones. Cada frase responde a la anterior, creando un diálogo musical interno. Estudia su solo en "A Go Go" para entender esta aproximación narrativa.'
          },
          {
            type: 'highlight',
            text: 'EJERCICIO DIARIO: Graba 8 compases de improvisación. Escúchalo 10 veces. Identifica qué funciona y qué no. Reimprovisa mejorando las debilidades identificadas.'
          }
        ]
      },
      {
        id: 'outside-playing',
        title: 'Outside Playing: Tensión y Resolución Controlada',
        description: 'Técnicas para tocar "fuera" de la armonía de manera musical y controlada',
        duration: '50 min',
        difficulty: 'Muy Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Outside Playing: El Arte de la Tensión Controlada'
          },
          {
            type: 'paragraph',
            text: 'Tocar "outside" no significa tocar notas aleatorias. Es crear tensión armónica intencional que se resuelve de manera satisfactoria. Allan Holdsworth, John Scofield y Kurt Rosenwinkel son maestros de esta técnica.'
          },
          {
            type: 'subheading',
            text: 'Principio Fundamental: Salir y Volver'
          },
          {
            type: 'paragraph',
            text: 'El outside playing solo funciona si hay un "inside" claro al que volver. La tensión sin resolución es ruido, no música.'
          },
          {
            type: 'code',
            text: `Ejemplo básico sobre Cmaj7:
Inside: E|--12--15--17--| (C-E-G - notas del acorde)
Outside: E|--13--16--18--| (C#-F-G# - medio tono arriba)
Resolución: E|--12--15--17--| (vuelta a inside)

Efecto: Tensión → Resolución → Satisfacción auditiva`
          },
          {
            type: 'subheading',
            text: 'Técnica 1: Aproximaciones Cromáticas'
          },
          {
            type: 'code',
            text: `Sobre Cmaj7, aproximar cada nota del acorde:
Target: C (12va traste)
Aproximación: B-C (11-12) o C#-C (13-12)

Target: E (16va traste)  
Aproximación: Eb-E (15-16) o F-E (17-16)

Frase completa:
E|--11--12----15--16----18--17--| 
   B-C,     Eb-E,     F#-F
   
Cada nota "outside" resuelve inmediatamente a una nota "inside"`
          },
          {
            type: 'highlight',
            text: 'REGLA DE ORO: Por cada nota outside, debe haber una resolución inside inmediata. Ratio 1:1 para empezar.'
          },
          {
            type: 'subheading',
            text: 'Técnica 2: Sustitución de Tritonos Melódica'
          },
          {
            type: 'paragraph',
            text: 'Si un acorde funciona armónicamente, su sustituto tritonal también puede funcionar melódicamente.'
          },
          {
            type: 'code',
            text: `Sobre G7 (que resuelve a C):
Inside: G-B-D-F (G7)
Outside: Db-F-Ab-Cb (Db7 - sustituto tritonal)

Frase combinada:
E|--15--14--13--12--| (G-Gb-F-E)
B|--15--16--17--18--| (G-Ab-A-Bb)

Mezcla notas de G7 y Db7, creando línea cromática sofisticada`
          },
          {
            type: 'subheading',
            text: 'Técnica 3: Desplazamiento de Patrones'
          },
          {
            type: 'code',
            text: `Patrón inside sobre Cmaj7:
E|--12--15--17--19--| (C-E-G-B)

Mismo patrón desplazado medio tono:
E|--13--16--18--20--| (C#-F-G#-C)

Combinación (inside-outside-inside):
E|--12--15--17--19----13--16--18--20----12--15--17--19--|
   Inside pattern,    Outside pattern,   Resolución inside

Efecto: Familiar pero sorprendente`
          },
          {
            type: 'subheading',
            text: 'Técnica 4: Superimposición de Centros Tonales'
          },
          {
            type: 'paragraph',
            text: 'Tocar temporalmente en una tonalidad diferente, manteniendo el ritmo armónico original.'
          },
          {
            type: 'code',
            text: `Sobre progresión Dm7 - G7 - Cmaj7:
Normal: D dórico - G mixolidio - C lidio

Outside: Eb dórico - Ab mixolidio - Db lidio (medio tono arriba)
Luego: Resolución a D dórico - G mixolidio - C lidio

Resultado: Toda la progresión se desplaza, luego vuelve
Técnica favorita de John Coltrane en "Giant Steps"`
          },
          {
            type: 'subheading',
            text: 'Aplicación Gradual: Plan de 4 Semanas'
          },
          {
            type: 'list',
            items: [
              'Semana 1: Solo aproximaciones cromáticas, una por frase',
              'Semana 2: Añadir sustituciones tritonales en dominantes',
              'Semana 3: Experimentar con desplazamientos de patrones',
              'Semana 4: Superimposición de centros tonales por períodos cortos'
            ]
          },
          {
            type: 'highlight',
            text: 'ADVERTENCIA: El outside playing puede volverse adictivo. Úsalo como condimento, no como plato principal. La música debe seguir siendo musical.'
          },
          {
            type: 'subheading',
            text: 'Análisis de Referencia: Allan Holdsworth'
          },
          {
            type: 'paragraph',
            text: 'Holdsworth usa outside playing como extensión natural de la armonía, no como contraste. Sus líneas "outside" suenan inevitables, como si fueran la única opción lógica. Estudia "Devil Take the Hindmost" para entender esta aproximación orgánica.'
          },
          {
            type: 'subheading',
            text: 'Ejercicio de Desarrollo del Oído'
          },
          {
            type: 'paragraph',
            text: 'Graba progresiones simples y practica outside playing encima. Escucha inmediatamente si suena musical o forzado. El oído debe guiar la técnica, no al revés.'
          }
        ]
      },
      {
        id: 'ritmo-subdivision',
        title: 'Ritmo y Subdivisión: Complejidad Rítmica Fusion',
        description: 'Dominio de subdivisiones complejas y polirritmias características del fusion',
        duration: '45 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Ritmo Fusion: Más Allá del 4/4 Simple'
          },
          {
            type: 'paragraph',
            text: 'El fusion revolucionó el concepto rítmico del jazz, incorporando subdivisiones complejas, métricas asimétricas y polirritmias. Vinnie Colaiuta, Dennis Chambers y Dave Weckl establecieron el vocabulario rítmico que define el género.'
          },
          {
            type: 'subheading',
            text: 'Subdivisiones Fundamentales: Más Allá de Corcheas'
          },
          {
            type: 'code',
            text: `Compás 4/4 con diferentes subdivisiones:

Corcheas (básico):
|1 + 2 + 3 + 4 +|

Tresillos (fusion clásico):
|1 trip let 2 trip let 3 trip let 4 trip let|

Semicorcheas (fusion moderno):
|1 e + a 2 e + a 3 e + a 4 e + a|

Quintillos (fusion avanzado):
|1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5|
 (5 notas por beat, 20 notas por compás)`
          },
          {
            type: 'subheading',
            text: 'Ejercicio 1: Tresillos Desplazados'
          },
          {
            type: 'paragraph',
            text: 'Los tresillos no siempre empiezan en el beat. El desplazamiento crea tensión rítmica sofisticada.'
          },
          {
            type: 'code',
            text: `Tresillo normal:
|1 trip let 2 trip let|
 ♩  ♩   ♩  ♩  ♩   ♩

Tresillo desplazado (empieza en el "+"):
|1 + trip let 2 + trip|
 -  ♩  ♩   ♩  -  ♩  ♩

Aplicación melódica sobre Cmaj7:
E|--12----15----17----12----15----17--|
   C     E     G     C     E     G
Beat: + trip let 2 + trip let`
          },
          {
            type: 'highlight',
            text: 'CLAVE: Practica con metrónomo. El desplazamiento debe ser preciso, no aproximado. La tensión rítmica requiere exactitud matemática.'
          },
          {
            type: 'subheading',
            text: 'Ejercicio 2: Polirritmia 3 contra 4'
          },
          {
            type: 'paragraph',
            text: 'Tocar grupos de 3 notas sobre un compás de 4 beats crea polirritmia natural.'
          },
          {
            type: 'code',
            text: `Mano derecha (grupos de 3):
|♩ ♩ ♩|♩ ♩ ♩|♩ ♩ ♩|♩ ♩ ♩|
 1 2 3 1 2 3 1 2 3 1 2 3

Pie (compás 4/4):
|♩ - - -|♩ - - -|♩ - - -|♩ - - -|
 1       2       3       4

Las dos líneas se sincronizan cada 12 beats (3x4 = 12)
Efecto: Tensión constante que resuelve periódicamente`
          },
          {
            type: 'subheading',
            text: 'Métricas Asimétricas: 7/8 y 5/4'
          },
          {
            type: 'code',
            text: `7/8 (agrupación 3+2+2):
|1 2 3|1 2|1 2|
 ♩ ♩ ♩ ♩ ♩ ♩ ♩

Frase melódica en 7/8:
E|--12--15--17----19--20----22--24--|
   1  2  3     4  5     6  7
   (3 notas) (2 notas) (2 notas)

5/4 (agrupación 3+2):
|1 2 3|1 2|
 ♩ ♩ ♩ ♩ ♩

Ejemplo: "Take Five" de Dave Brubeck
Frase característica:
E|--12--15--17----19--20--|
   1  2  3     4  5`
          },
          {
            type: 'subheading',
            text: 'Aplicación Avanzada: Modulación Métrica'
          },
          {
            type: 'paragraph',
            text: 'Cambiar la sensación de tempo sin cambiar el tempo real, alterando la subdivisión.'
          },
          {
            type: 'code',
            text: `Tempo base: 120 BPM en 4/4

Sección A: Corcheas (sensación normal)
|♩ ♩ ♩ ♩| = 120 BPM

Sección B: Tresillos (sensación más rápida)  
|♩♩♩ ♩♩♩ ♩♩♩ ♩♩♩| = mismos 120 BPM, pero sensación de 180

Sección C: Negras con puntillo (sensación más lenta)
|♩. ♩. ♩. ♩.| = mismos 120 BPM, pero sensación de 80

El tempo del metrónomo nunca cambia, pero la música se siente diferente`
          },
          {
            type: 'subheading',
            text: 'Rutina de Práctica Rítmica'
          },
          {
            type: 'list',
            items: [
              'Día 1-7: Tresillos desplazados con metrónomo a 80 BPM',
              'Día 8-14: Polirritmia 3 contra 4, aumentar gradualmente el tempo',
              'Día 15-21: Métricas asimétricas (7/8, 5/4) con frases melódicas',
              'Día 22-30: Modulación métrica en improvisación libre'
            ]
          },
          {
            type: 'highlight',
            text: 'CONCEPTO CLAVE: La complejidad rítmica debe servir a la música, no dominarla. Usa estas técnicas para crear interés, no para mostrar virtuosismo.'
          },
          {
            type: 'subheading',
            text: 'Análisis de Referencia: "Spain" - Chick Corea'
          },
          {
            type: 'paragraph',
            text: 'La introducción de "Spain" usa compás de 12/8 que se siente como 4/4 con tresillos. La sección principal cambia a 4/4 straight, creando contraste rítmico dramático. Estudia esta transición para entender la modulación métrica práctica.'
          },
          {
            type: 'subheading',
            text: 'Ejercicio de Aplicación Musical'
          },
          {
            type: 'paragraph',
            text: 'Toma un standard simple como "Autumn Leaves" y reinterpreta rítmicamente: primera vuelta en 4/4 normal, segunda vuelta con tresillos desplazados, tercera vuelta en 7/8. Mantén la armonía, cambia solo el ritmo.'
          }
        ]
      },
      {
        id: 'transcripcion-analisis',
        title: 'Transcripción y Análisis: Aprendiendo de los Maestros',
        description: 'Metodología para transcribir y analizar solos de fusion de manera efectiva',
        duration: '40 min',
        difficulty: 'Intermedio-Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Transcripción: La Herramienta Más Poderosa'
          },
          {
            type: 'paragraph',
            text: 'La transcripción no es copiar notas, es absorber el lenguaje musical de los maestros. Cada solo transcrito añade vocabulario, fraseo y conceptos a tu arsenal improvisatorio. Es la diferencia entre hablar un idioma y balbucearlo.'
          },
          {
            type: 'subheading',
            text: 'Metodología de Transcripción Efectiva'
          },
          {
            type: 'list',
            items: [
              'Paso 1: Escucha completa (10 veces mínimo) sin tocar',
              'Paso 2: Identifica la estructura armónica',
              'Paso 3: Transcribe frase por frase, no nota por nota',
              'Paso 4: Analiza cada frase armónica y rítmicamente',
              'Paso 5: Practica hasta tocarla con el feeling original',
              'Paso 6: Extrae conceptos aplicables a otras situaciones'
            ]
          },
          {
            type: 'subheading',
            text: 'Ejemplo Práctico: Análisis de Frase de Allan Holdsworth'
          },
          {
            type: 'paragraph',
            text: 'Solo de "Devil Take the Hindmost", compases 17-20 sobre Cmaj7:'
          },
          {
            type: 'code',
            text: `Transcripción:
E|--12h15p12h14p12----17h20p17h19p17----|
B|-----------------15----------------20-|
G|--------------------------------------|

Análisis rítmico:
Tresillos de semicorchea, agrupación asimétrica
No coincide con los beats del compás

Análisis armónico:
Notas: C-E-C-D-C, F-A-F-G-F
Concepto: Aproximaciones cromáticas a notas del acorde
C y E son notas del acorde, D y F son aproximaciones

Análisis técnico:
Legato puro, sin púa
Hammer-ons fuertes, pull-offs controlados
Digitación: 1-4-1-2-1, 1-4-1-3-1`
          },
          {
            type: 'highlight',
            text: 'CLAVE: No te limites a copiar las notas. Entiende POR QUÉ Holdsworth eligió esas notas en ese momento armónico específico.'
          },
          {
            type: 'subheading',
            text: 'Conceptos Extraíbles de la Frase'
          },
          {
            type: 'list',
            items: [
              'Aproximaciones cromáticas funcionan sobre cualquier acorde mayor',
              'Los tresillos asimétricos crean tensión rítmica sofisticada',
              'El legato permite velocidad sin sacrificar musicalidad',
              'Las notas del acorde pueden ser "decoradas" con aproximaciones'
            ]
          },
          {
            type: 'subheading',
            text: 'Aplicación del Concepto: Variaciones Propias'
          },
          {
            type: 'code',
            text: `Concepto original aplicado a Fmaj7:
E|--13h17p13h15p13----20h24p20h22p20----|
B|-----------------18----------------24-|

Notas: F-A-F-G-F, Bb-D-Bb-C-Bb
Mismo concepto, diferente acorde

Aplicado a Am7:
E|--12h15p12h14p12----17h20p17h19p17----|
B|-----------------15----------------20-|

Notas: A-C-A-B-A, E-G-E-F#-E
Aproximaciones cromáticas sobre acorde menor`
          },
          {
            type: 'subheading',
            text: 'Lista de Solos Esenciales para Transcribir'
          },
          {
            type: 'paragraph',
            text: 'Nivel Intermedio:'
          },
          {
            type: 'list',
            items: [
              'Larry Carlton - "Room 335" (fraseo blues-fusion)',
              'Robben Ford - "Talk to Your Daughter" (hybrid picking)',
              'Lee Ritenour - "Captain Fingers" (técnica limpia)'
            ]
          },
          {
            type: 'paragraph',
            text: 'Nivel Avanzado:'
          },
          {
            type: 'list',
            items: [
              'Allan Holdsworth - "Devil Take the Hindmost" (legato avanzado)',
              'John Scofield - "A Go Go" (outside playing controlado)',
              'Mike Stern - "Upside Downside" (bending expresivo)'
            ]
          },
          {
            type: 'paragraph',
            text: 'Nivel Experto:'
          },
          {
            type: 'list',
            items: [
              'Scott Henderson - "Tore Down House" (técnica híbrida compleja)',
              'Frank Gambale - "Coming Around" (sweep picking musical)',
              'Brett Garsed - "Sevens" (tapping melódico)'
            ]
          },
          {
            type: 'subheading',
            text: 'Herramientas de Transcripción'
          },
          {
            type: 'list',
            items: [
              'Software: Transcribe!, Amazing Slow Downer, Anytune',
              'Técnica: Reducir velocidad sin cambiar pitch',
              'Método: Loop de 2-4 segundos hasta dominar cada frase',
              'Verificación: Tocar junto con el audio original'
            ]
          },
          {
            type: 'subheading',
            text: 'Plan de Transcripción Anual'
          },
          {
            type: 'list',
            items: [
              'Meses 1-3: Un solo completo de nivel intermedio',
              'Meses 4-6: Dos solos de nivel intermedio-avanzado',
              'Meses 7-9: Un solo de nivel avanzado (puede tomar 3 meses)',
              'Meses 10-12: Frases selectas de múltiples guitarristas'
            ]
          },
          {
            type: 'highlight',
            text: 'OBJETIVO: Al final del año, debes tener internalizados al menos 4 solos completos y 50+ frases de diferentes guitarristas. Este vocabulario transformará tu improvisación.'
          },
          {
            type: 'paragraph',
            text: 'La transcripción es lenta al principio, pero cada solo se vuelve más fácil. Después de transcribir 10 solos, desarrollas un "oído transcriptor" que acelera dramáticamente el proceso.'
          }
        ]
      }
    ]
  },
  {
    id: 'equipamiento-sonido',
    title: 'Equipamiento y Sonido Fusion',
    icon: Settings,
    description: 'Guía completa de equipamiento para obtener el sonido fusion profesional',
    sections: [
      {
        id: 'guitarras-fusion',
        title: 'Guitarras para Fusion: Características Esenciales',
        description: 'Selección y configuración de guitarras específicas para fusion',
        duration: '35 min',
        difficulty: 'Intermedio',
        content: [
          {
            type: 'heading',
            text: 'La Guitarra Fusion: Más Que un Instrumento'
          },
          {
            type: 'paragraph',
            text: 'El fusion demanda características específicas de la guitarra: sustain prolongado, respuesta dinámica precisa, y versatilidad tonal extrema. No cualquier guitarra puede producir el sonido fusion auténtico.'
          },
          {
            type: 'subheading',
            text: 'Características Fundamentales'
          },
          {
            type: 'highlight',
            text: 'SUSTAIN: El fusion requiere notas que se mantengan naturalmente. Sin sustain, las técnicas de legato y bending pierden expresividad.'
          },
          {
            type: 'list',
            items: [
              'Construcción: Neck-through o set-neck (mejor sustain que bolt-on)',
              'Maderas: Caoba, arce, fresno (densas, resonantes)',
              'Puente: Fijo o Floyd Rose (evitar trémolo vintage)',
              'Trastes: Jumbo o extra-jumbo (facilitan bending y vibrato)'
            ]
          },
          {
            type: 'subheading',
            text: 'Pastillas: El Corazón del Sonido'
          },
          {
            type: 'paragraph',
            text: 'Las pastillas definen el 70% del sonido fusion. La elección correcta es crucial:'
          },
          {
            type: 'code',
            text: `CONFIGURACIÓN CLÁSICA (estilo Larry Carlton):
Posición puente: Humbucker de salida media-alta
- Ejemplos: Seymour Duncan JB, DiMarzio Super Distortion
- Sonido: Definición para acordes, sustain para solos

Posición mástil: Humbucker de salida media  
- Ejemplos: Seymour Duncan '59, DiMarzio PAF Pro
- Sonido: Calidez para acordes jazz, suavidad para legato

Posición media (si existe): Single coil o humbucker splitteable
- Función: Sonidos cristalinos, texturas limpias`
          },
          {
            type: 'subheading',
            text: 'Configuración Avanzada: Estilo Allan Holdsworth'
          },
          {
            type: 'code',
            text: `SISTEMA HOLDSWORTH:
- Pastillas: Seymour Duncan SH-2n (mástil) + SH-4 (puente)
- Configuración: Volumen independiente por pastilla
- Técnica: Mezcla continua entre pastillas durante la interpretación
- Resultado: Variaciones tonales sutiles sin cambiar selector

CABLEADO ESPECIAL:
- Sin selector de pastillas tradicional
- Dos potenciómetros de volumen
- Un potenciómetro de tono general
- Permite mezclas infinitas entre pastillas`
          },
          {
            type: 'subheading',
            text: 'Modelos de Referencia por Estilo'
          },
          {
            type: 'paragraph',
            text: 'Fusion Clásico (Larry Carlton, Lee Ritenour):'
          },
          {
            type: 'list',
            items: [
              'Gibson ES-335: Calidez y sustain, versatilidad tonal',
              'Fender Stratocaster: Claridad y definición, pastillas versátiles',
              'Yamaha SA-2200: Diseñada específicamente para fusion'
            ]
          },
          {
            type: 'paragraph',
            text: 'Fusion Moderno (Allan Holdsworth, Brett Garsed):'
          },
          {
            type: 'list',
            items: [
              'Carvin/Kiesel: Construcción neck-through, electrónica personalizable',
              'Ibanez S-Series: Cuerpo delgado, mástil rápido, Floyd Rose',
              'Suhr Modern: Construcción premium, pastillas balanceadas'
            ]
          },
          {
            type: 'subheading',
            text: 'Configuración del Mástil'
          },
          {
            type: 'code',
            text: `ESPECIFICACIONES IDEALES:
Radio del diapasón: 12"-16" compuesto
- Permite acordes cómodos en posiciones bajas
- Facilita bending extremo en posiciones altas

Acción de cuerdas:
- 6ta cuerda (12vo traste): 1.5-2mm
- 1ra cuerda (12vo traste): 1-1.5mm
- Más baja que jazz tradicional, más alta que metal

Calibre de cuerdas recomendado:
- .010-.046 (estándar fusion)
- .009-.042 (para técnicas extremas)
- .011-.049 (para afinaciones bajas)`
          },
          {
            type: 'highlight',
            text: 'MANTENIMIENTO CRÍTICO: El fusion demanda precisión técnica. Ajustes profesionales cada 3-4 meses son esenciales para mantener la respuesta óptima.'
          },
          {
            type: 'subheading',
            text: 'Modificaciones Recomendadas'
          },
          {
            type: 'list',
            items: [
              'Clavijas con bloqueo: Mejoran estabilidad de afinación',
              'Cejuela de hueso o TUSQ: Mejor transmisión de armónicos',
              'Blindaje completo: Elimina ruidos en configuraciones de alta ganancia',
              'Potenciómetros de calidad: Respuesta suave en cambios de volumen'
            ]
          },
          {
            type: 'subheading',
            text: 'Presupuesto por Niveles'
          },
          {
            type: 'code',
            text: `NIVEL ESTUDIANTE ($300-800):
- Yamaha Pacifica 612, Ibanez RG421
- Modificaciones: Cambio de pastillas, ajuste profesional

NIVEL INTERMEDIO ($800-2000):
- Fender Player Stratocaster, Epiphone ES-335
- Modificaciones: Electrónica premium, hardware mejorado

NIVEL PROFESIONAL ($2000+):
- Gibson ES-335, Fender American Professional
- Configuración: Personalizada según estilo específico`
          },
          {
            type: 'paragraph',
            text: 'Recuerda: Una guitarra de $800 bien configurada puede sonar mejor que una de $3000 mal ajustada. La configuración es tan importante como el instrumento.'
          }
        ]
      },
      {
        id: 'amplificadores-efectos',
        title: 'Amplificadores y Efectos: Construyendo el Sonido',
        description: 'Configuración de amplificación y efectos para sonido fusion profesional',
        duration: '50 min',
        difficulty: 'Intermedio-Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Amplificación Fusion: Limpio como Base'
          },
          {
            type: 'paragraph',
            text: 'El fusion se construye sobre un sonido limpio excepcional. A diferencia del rock, donde la distorsión del amplificador es protagonista, en fusion el amplificador debe ser transparente y dinámico.'
          },
          {
            type: 'subheading',
            text: 'Características del Amplificador Ideal'
          },
          {
            type: 'list',
            items: [
              'Headroom abundante: Mínimo 40W para mantener limpieza',
              'Respuesta dinámica: Debe responder al toque, no comprimirlo',
              'EQ flexible: Control preciso de frecuencias medias',
              'Loop de efectos: Esencial para procesamiento profesional'
            ]
          },
          {
            type: 'subheading',
            text: 'Amplificadores de Referencia'
          },
          {
            type: 'code',
            text: `FUSION CLÁSICO:
Fender Twin Reverb (85W)
- Usado por: Larry Carlton, Robben Ford
- Características: Limpio cristalino, reverb natural
- Configuración típica: Volume 4, Treble 6, Middle 5, Bass 4

Roland JC-120 (120W)
- Usado por: Allan Holdsworth, Pat Metheny  
- Características: Limpio estéril, chorus incorporado
- Ventaja: Sonido idéntico a cualquier volumen

FUSION MODERNO:
Mesa Boogie Lonestar (100W)
- Características: Limpio cálido, distorsión musical
- Versatilidad: Múltiples canales, EQ gráfico

Fractal Audio Axe-FX III
- Ventaja: Modelado digital perfecto
- Flexibilidad: Infinitas configuraciones, grabación directa`
          },
          {
            type: 'subheading',
            text: 'Cadena de Efectos Fusion Esencial'
          },
          {
            type: 'paragraph',
            text: 'El orden de los efectos es crucial. Una cadena mal organizada destruye el sonido fusion:'
          },
          {
            type: 'code',
            text: `ORDEN CORRECTO:
Guitarra → Compresor → Overdrive → Chorus → Delay → Reverb → Amplificador

EXPLICACIÓN DE CADA EFECTO:

1. COMPRESOR (Boss CS-3, Keeley Compressor):
   - Función: Iguala dinámicas, sustain controlado
   - Configuración: Ratio 3:1, Attack medio, Release rápido
   - Uso: Siempre activo en fusion

2. OVERDRIVE (Ibanez TS9, Boss Blues Driver):
   - Función: Saturación musical, no distorsión extrema
   - Configuración: Drive bajo, Level alto, Tone al gusto
   - Uso: Solos y pasajes expresivos

3. CHORUS (Boss CE-2, TC Electronic Corona):
   - Función: Amplitud estéreo, textura shimmer
   - Configuración: Rate lento, Depth moderado
   - Uso: Acordes limpios, texturas ambientales

4. DELAY (Boss DD-7, Strymon Timeline):
   - Función: Repeticiones rítmicas, espacialidad
   - Configuración: 1/8 note, Feedback 20-30%, Mix 15-25%
   - Uso: Solos (siempre), acordes (ocasional)

5. REVERB (Strymon BigSky, Boss RV-6):
   - Función: Ambiente, profundidad espacial
   - Configuración: Hall medium, Decay 3-4 segundos
   - Uso: Siempre activo, nivel bajo`
          },
          {
            type: 'highlight',
            text: 'REGLA DE ORO: En fusion, menos es más. Cada efecto debe tener propósito musical específico. El virtuosismo está en la interpretación, no en los efectos.'
          },
          {
            type: 'subheading',
            text: 'Configuraciones por Estilo'
          },
          {
            type: 'paragraph',
            text: 'Larry Carlton (Room 335):'
          },
          {
            type: 'code',
            text: `Amplificador: Fender Twin Reverb
Efectos: Mínimos - solo reverb del amplificador
Guitarra: Gibson ES-335, pastilla humbucker puente
Configuración: Volume 4, Treble 7, Middle 6, Bass 4, Reverb 3

Sonido: Cálido, dinámico, orgánico
Clave: La expresión viene del toque, no de los efectos`
          },
          {
            type: 'paragraph',
            text: 'Allan Holdsworth (Devil Take the Hindmost):'
          },
          {
            type: 'code',
            text: `Amplificador: Yamaha DG1000 (digital)
Efectos: Chorus sutil, delay corto, reverb largo
Guitarra: Carvin neck-through, pastillas custom
Configuración: Limpio con compresión digital

Sonido: Cristalino, sustain infinito, espacial
Clave: Procesamiento digital para sustain sobrenatural`
          },
          {
            type: 'subheading',
            text: 'Configuración de Estudio vs. Directo'
          },
          {
            type: 'code',
            text: `ESTUDIO (grabación):
- Amplificador: Volumen moderado, micrófono de calidad
- Efectos: En el loop, procesamiento post-amplificador
- Monitoreo: Auriculares de referencia
- Objetivo: Sonido perfecto, sin limitaciones de volumen

DIRECTO (concierto):
- Amplificador: Volumen suficiente para la sala
- Efectos: Pedales robustos, configuración simple
- Monitoreo: Retorno de escenario claro
- Objetivo: Consistencia, facilidad de operación`
          },
          {
            type: 'subheading',
            text: 'Presupuesto Escalonado'
          },
          {
            type: 'code',
            text: `NIVEL BÁSICO ($500-1000):
Amplificador: Fender Blues Junior, Boss Katana 100
Efectos: Boss CS-3, TS9, DD-3, RV-6
Total: Sonido fusion competente

NIVEL INTERMEDIO ($1000-3000):
Amplificador: Fender Hot Rod Deluxe, Mesa Express
Efectos: Keeley Compressor, Strymon El Capistan, BigSky
Total: Sonido fusion profesional

NIVEL PROFESIONAL ($3000+):
Amplificador: Fender Twin, Mesa Lonestar, Fractal Axe-FX
Efectos: Eventide TimeFactor, Empress Reverb, Chase Bliss
Total: Sonido fusion de estudio/gira internacional`
          },
          {
            type: 'subheading',
            text: 'Mantenimiento y Cuidado'
          },
          {
            type: 'list',
            items: [
              'Válvulas: Cambio cada 6-12 meses según uso',
              'Efectos: Alimentación estabilizada, cables de calidad',
              'Configuración: Documentar settings exitosos',
              'Backup: Tener repuestos de efectos críticos'
            ]
          },
          {
            type: 'highlight',
            text: 'CONSEJO PROFESIONAL: Invierte más en amplificador que en efectos. Un gran amplificador hace que efectos baratos suenen bien. Un mal amplificador hace que efectos caros suenen mal.'
          }
        ]
      },
      {
        id: 'grabacion-produccion',
        title: 'Grabación y Producción: Capturando el Sonido Fusion',
        description: 'Técnicas de grabación específicas para guitarra fusion',
        duration: '45 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Grabación Fusion: Más Que Poner un Micrófono'
          },
          {
            type: 'paragraph',
            text: 'La grabación de guitarra fusion requiere técnicas específicas para capturar la dinámica, el sustain y la espacialidad características del género. Los grandes álbumes fusion no suenan así por casualidad.'
          },
          {
            type: 'subheading',
            text: 'Microfonía de Amplificador: La Base de Todo'
          },
          {
            type: 'code',
            text: `CONFIGURACIÓN CLÁSICA (estilo Larry Carlton):
Micrófono principal: Shure SM57
- Posición: 2-3 pulgadas del cono, ligeramente off-axis
- Función: Captura definición y presencia media

Micrófono secundario: AKG C414 o Neumann U87
- Posición: 3-4 pies del amplificador, altura del parlante
- Función: Captura ambiente y graves naturales

Mezcla: 70% SM57, 30% condensador
Resultado: Definición + ambiente natural`
          },
          {
            type: 'subheading',
            text: 'Técnica Avanzada: Microfonía Múltiple'
          },
          {
            type: 'code',
            text: `SETUP PROFESIONAL (estilo Allan Holdsworth):
Micrófono 1: Shure SM57 (on-axis, cerca)
- Captura: Ataque y definición

Micrófono 2: Royer R-121 (ribbon, off-axis)  
- Captura: Calidez y suavidad de medios

Micrófono 3: AKG C414 (condensador, lejano)
- Captura: Reverb natural de la sala

Micrófono 4: Coles 4038 (ribbon, muy lejano)
- Captura: Ambiente y espacialidad

Mezcla: Balance según la frase musical
Solos agresivos: Más SM57
Pasajes suaves: Más ribbon y condensador`
          },
          {
            type: 'highlight',
            text: 'CONCEPTO CLAVE: En fusion, el sonido debe cambiar según la intensidad musical. La microfonía múltiple permite esto mediante automatización de mezcla.'
          },
          {
            type: 'subheading',
            text: 'Grabación Directa: Alternativa Moderna'
          },
          {
            type: 'code',
            text: `VENTAJAS DE LA GRABACIÓN DIRECTA:
- Control total sobre el sonido
- Sin problemas de aislamiento acústico  
- Consistencia perfecta entre tomas
- Flexibilidad en la mezcla

EQUIPAMIENTO NECESARIO:
Interface: Universal Audio Apollo, Focusrite Clarett
Plugins: Amplitube, Guitar Rig, Helix Native
Monitores: Yamaha HS8, Adam A7X
Tratamiento: Absorción acústica básica

FLUJO DE TRABAJO:
1. Grabar señal directa limpia (DI)
2. Aplicar amplificación virtual después
3. Experimentar con diferentes amplificadores
4. Automatizar cambios de sonido por sección`
          },
          {
            type: 'subheading',
            text: 'Procesamiento Post-Grabación'
          },
          {
            type: 'code',
            text: `CADENA DE PROCESAMIENTO TÍPICA:
1. EQ correctivo:
   - High-pass: 80-100 Hz (elimina rumble)
   - Notch: Frecuencias problemáticas de la sala
   - Boost sutil: 2-3 kHz (presencia)

2. Compresión:
   - Ratio: 3:1 a 4:1
   - Attack: Medio (preserva transientes)
   - Release: Rápido (mantiene dinámica)
   - Gain reduction: 2-4 dB máximo

3. Efectos temporales:
   - Delay: 1/8 note, feedback 15-25%
   - Reverb: Hall o plate, decay 2-3 segundos
   - Chorus: Sutil, solo en secciones específicas

4. EQ creativo:
   - Shelf suave en agudos: +1-2 dB @ 10 kHz
   - Boost de medios: +1 dB @ 1-2 kHz (calidez)
   - Atenuación: -1 dB @ 400-500 Hz (claridad)`
          },
          {
            type: 'subheading',
            text: 'Técnicas de Doble Grabación'
          },
          {
            type: 'paragraph',
            text: 'El fusion moderno usa frecuentemente guitarras dobladas para crear densidad armónica:'
          },
          {
            type: 'code',
            text: `DOBLE GRABACIÓN ARMÓNICA:
Guitarra 1: Melodía principal (centro)
Guitarra 2: Armonía a 3ra o 6ta (panorama L/R)

Ejemplo sobre Cmaj7:
Guitarra 1: C-E-G-B (melodía)
Guitarra 2: E-G-B-D (armonía a 3ra)

DOBLE GRABACIÓN RÍTMICA:
Guitarra 1: Acordes en negras (centro)
Guitarra 2: Acordes en corcheas off-beat (L/R)

Resultado: Groove más denso, sensación de banda completa`
          },
          {
            type: 'subheading',
            text: 'Configuración de Monitoreo'
          },
          {
            type: 'list',
            items: [
              'Monitores nearfield: Yamaha HS5/HS8, KRK Rokit',
              'Auriculares: Sennheiser HD650, Audio-Technica ATH-M50x',
              'Posicionamiento: Triángulo equilátero, altura de oídos',
              'Tratamiento: Absorción en primeras reflexiones'
            ]
          },
          {
            type: 'subheading',
            text: 'Mezcla Específica para Fusion'
          },
          {
            type: 'code',
            text: `PANORAMA TÍPICO:
Guitarra principal: Centro
Guitarra rítmica: Ligeramente L/R (20-30%)
Efectos: Estéreo amplio (delay, reverb)
Dobles: Hard L/R (80-100%)

FRECUENCIAS CLAVE:
Presencia: 2-5 kHz (inteligibilidad)
Calidez: 200-500 Hz (cuerpo)
Brillo: 8-12 kHz (aire)
Definición: 1-2 kHz (claridad)

DINÁMICA:
Compresión mínima en master bus
Preservar transientes de ataque
Mantener rango dinámico natural`
          },
          {
            type: 'highlight',
            text: 'FILOSOFÍA FUSION: La grabación debe servir a la música, no impresionar técnicamente. Cada decisión debe tener justificación musical clara.'
          },
          {
            type: 'subheading',
            text: 'Referencias de Sonido'
          },
          {
            type: 'list',
            items: [
              'Larry Carlton - "Room 335": Sonido cálido, natural, dinámico',
              'Allan Holdsworth - "Secrets": Sustain sobrenatural, espacialidad',
              'John Scofield - "A Go Go": Definición extrema, presencia',
              'Pat Metheny - "Bright Size Life": Claridad cristalina, ambiente'
            ]
          },
          {
            type: 'paragraph',
            text: 'Estudia estas grabaciones como referencia. Cada una representa una aproximación diferente pero exitosa al sonido fusion grabado.'
          }
        ]
      }
    ]
  },
  {
    id: 'fusion-contemporaneo',
    title: 'Fusion Contemporáneo',
    icon: TrendingUp,
    description: 'Tendencias actuales y evolución del fusion en el siglo XXI',
    sections: [
      {
        id: 'nuevas-tendencias',
        title: 'Nuevas Tendencias: Fusion en el Siglo XXI',
        description: 'Evolución del fusion moderno y sus nuevas direcciones estilísticas',
        duration: '40 min',
        difficulty: 'Intermedio-Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Fusion Contemporáneo: Evolución Constante'
          },
          {
            type: 'paragraph',
            text: 'El fusion del siglo XXI ha evolucionado incorporando elementos de música electrónica, world music, y técnicas de producción modernas. Artistas como Plini, Intervals, y Animals as Leaders han redefinido los límites del género.'
          },
          {
            type: 'subheading',
            text: 'Tendencia 1: Fusion Progresivo (Djent-Fusion)'
          },
          {
            type: 'paragraph',
            text: 'La incorporación de elementos del metal progresivo ha creado un subgénero híbrido con características únicas:'
          },
          {
            type: 'code',
            text: `CARACTERÍSTICAS TÉCNICAS:
Afinaciones: Drop C, Drop B, 7-8 cuerdas
Métricas: 7/8, 9/8, métricas compuestas complejas
Rítmica: Palm muting preciso, acentos desplazados

Ejemplo rítmico en 7/8:
|1 2 3|1 2|1 2| (agrupación 3+2+2)
 ♩ ♩ ♩ ♩ ♩ ♩ ♩

Aplicación armónica:
Em(add9) - F#m7b5 - Gmaj7#11 - Am11
Progresión modal con extensiones fusion sobre base rítmica djent`
          },
          {
            type: 'subheading',
            text: 'Tendencia 2: Fusion Electrónico'
          },
          {
            type: 'paragraph',
            text: 'La integración de elementos electrónicos ha expandido las posibilidades sonoras:'
          },
          {
            type: 'list',
            items: [
              'Síntesis granular aplicada a guitarra',
              'Loops en tiempo real con sincronización MIDI',
              'Procesamiento espectral de acordes',
              'Secuenciadores integrados en la performance'
            ]
          },
          {
            type: 'code',
            text: `SETUP ELECTRÓNICO TÍPICO:
Guitarra → Interface → Ableton Live → Procesamiento en tiempo real

Plugins esenciales:
- FabFilter Pro-Q 3 (EQ dinámico)
- Soundtoys EchoBoy (delays creativos)  
- Eventide Blackhole (reverbs espaciales)
- Native Instruments Reaktor (síntesis modular)

Técnica: Layers en tiempo real
Capa 1: Guitarra directa
Capa 2: Guitarra procesada (octava baja)
Capa 3: Síntesis reactiva a la guitarra
Capa 4: Secuencias rítmicas sincronizadas`
          },
          {
            type: 'subheading',
            text: 'Tendencia 3: World Fusion'
          },
          {
            type: 'paragraph',
            text: 'La incorporación de elementos de músicas del mundo ha enriquecido el vocabulario armónico y rítmico:'
          },
          {
            type: 'code',
            text: `ESCALAS NO-OCCIDENTALES EN FUSION:
Escala Árabe (Hijaz):
C - Db - E - F - G - Ab - B - C
Aplicación: Sobre acordes menores para color exótico

Escala Japonesa (Hirajoshi):
C - Db - F - G - Ab - C  
Aplicación: Pentatónica con intervalos únicos

Escala India (Raga Bhairav):
C - Db - E - F - G - Ab - B - C
Aplicación: Similar a Hijaz, pero con 7ma mayor

Ejemplo de aplicación sobre Cm7:
E|--15--16--19--20--22--23--26--|
B|------------------------------|
Notas: C-Db-E-F-G-Ab-B (Hijaz sobre Cm7)
Sonido: Fusion con color middle-eastern`
          },
          {
            type: 'subheading',
            text: 'Tendencia 4: Micro-Fusion (Composiciones Cortas)'
          },
          {
            type: 'paragraph',
            text: 'Influenciado por las redes sociales, el fusion contemporáneo incluye composiciones de 2-3 minutos con máxima densidad musical:'
          },
          {
            type: 'list',
            items: [
              'Estructura: Intro (8 compases) - Tema (16) - Solo (16) - Outro (8)',
              'Desarrollo: Máximo contenido en mínimo tiempo',
              'Producción: Sonido inmediato, sin introducciones largas',
              'Concepto: "Fusion para la era digital"'
            ]
          },
          {
            type: 'subheading',
            text: 'Artistas de Referencia Contemporáneos'
          },
          {
            type: 'paragraph',
            text: 'Plini (Australia):'
          },
          {
            type: 'list',
            items: [
              'Estilo: Fusion melódico con elementos post-rock',
              'Técnica: Legato expresivo, uso extensivo de delays',
              'Armonía: Extensiones modernas sobre progresiones simples',
              'Producción: Sonido cristalino, espacialidad extrema'
            ]
          },
          {
            type: 'paragraph',
            text: 'Intervals (Canadá):'
          },
          {
            type: 'list',
            items: [
              'Estilo: Fusion progresivo con elementos djent',
              'Técnica: Rítmica compleja, métricas asimétricas',
              'Armonía: Poliacordes modernos, estructuras superiores',
              'Concepto: Fusion instrumental para nueva generación'
            ]
          },
          {
            type: 'subheading',
            text: 'Herramientas de Producción Modernas'
          },
          {
            type: 'code',
            text: `SOFTWARE ESENCIAL:
DAW: Logic Pro X, Ableton Live, Cubase
Plugins: Neural DSP, Positive Grid, IK Multimedia
Samples: Splice, Loopmasters, Native Instruments
Colaboración: BandLab, Soundtrap, Kompoz

FLUJO DE TRABAJO MODERNO:
1. Composición en DAW con samples temporales
2. Grabación de guitarra con modelado digital
3. Programación de batería con samples híbridos
4. Mezcla con plugins de modelado analógico
5. Master con AI-assisted mastering (LANDR, eMastered)`
          },
          {
            type: 'highlight',
            text: 'CONCEPTO CLAVE: El fusion contemporáneo no rechaza la tradición, la expande. Los fundamentos armónicos y técnicos siguen siendo los mismos, pero las herramientas y contextos han evolucionado.'
          },
          {
            type: 'subheading',
            text: 'Ejercicio de Aplicación: Composición Híbrida'
          },
          {
            type: 'paragraph',
            text: 'Crea una composición de 2 minutos que combine:'
          },
          {
            type: 'list',
            items: [
              'Progresión armónica fusion clásica (ii-V-I con extensiones)',
              'Métrica asimétrica moderna (7/8 o 5/4)',
              'Elemento electrónico (loop, pad, o secuencia)',
              'Escala no-occidental en la sección de solo',
              'Producción contemporánea (sonido inmediato, espacial)'
            ]
          },
          {
            type: 'paragraph',
            text: 'Este ejercicio te conectará con la evolución natural del fusion, manteniendo sus raíces pero explorando nuevas posibilidades expresivas.'
          }
        ]
      },
      {
        id: 'tecnologia-fusion',
        title: 'Tecnología y Fusion: Herramientas Digitales',
        description: 'Integración de tecnología moderna en la práctica y composición fusion',
        duration: '35 min',
        difficulty: 'Intermedio',
        content: [
          {
            type: 'heading',
            text: 'Tecnología al Servicio del Fusion'
          },
          {
            type: 'paragraph',
            text: 'La tecnología moderna ha democratizado la creación musical fusion. Herramientas que antes requerían estudios profesionales ahora están disponibles en cualquier computadora, permitiendo a músicos de todo el mundo crear fusion de calidad profesional.'
          },
          {
            type: 'subheading',
            text: 'Modelado Digital de Amplificadores'
          },
          {
            type: 'paragraph',
            text: 'Los modeladores digitales han alcanzado un nivel de realismo que rivaliza con amplificadores reales:'
          },
          {
            type: 'code',
            text: `VENTAJAS DEL MODELADO DIGITAL:
- Consistencia: Mismo sonido siempre
- Versatilidad: Múltiples amplificadores en un dispositivo
- Conveniencia: Sin problemas de volumen o mantenimiento
- Grabación: Salida directa de calidad profesional

MODELADORES RECOMENDADOS:
Line 6 Helix: Procesamiento completo, interface intuitiva
Fractal Audio Axe-FX: Calidad suprema, flexibilidad extrema
Neural DSP Quad Cortex: Captura de amplificadores reales
Boss GT-1000: Relación calidad-precio excelente

CONFIGURACIÓN FUSION TÍPICA EN HELIX:
Path 1A: Compressor → Tube Screamer → Twin Reverb → IR
Path 1B: Chorus → Delay → Hall Reverb
Path 2A: Clean boost → Roland JC-120 → IR  
Path 2B: Modulation → Ambient reverb

Resultado: Dos sonidos completos intercambiables instantáneamente`
          },
          {
            type: 'subheading',
            text: 'Software de Grabación (DAW) para Fusion'
          },
          {
            type: 'code',
            text: `LOGIC PRO X (Mac):
Ventajas: Plugins incluidos de calidad, interface intuitiva
Plugins fusion: Vintage Electric Pianos, ChromaVerb, Tape Delay
Flujo: Ideal para composición y grabación simultáneas

CUBASE (PC/Mac):
Ventajas: MIDI avanzado, edición de audio precisa
Plugins fusion: VST Amp Rack, REVelation, Quadrafuzz
Flujo: Perfecto para producciones complejas

ABLETON LIVE (PC/Mac):
Ventajas: Performance en vivo, loops en tiempo real
Plugins fusion: Operator, Echo, Reverb
Flujo: Ideal para fusion electrónico y performance

REAPER (PC/Mac):
Ventajas: Precio bajo, personalización extrema
Plugins: Requiere plugins externos (ReaPlugs incluidos)
Flujo: Para usuarios técnicos avanzados`
          },
          {
            type: 'subheading',
            text: 'Plugins Esenciales para Fusion'
          },
          {
            type: 'code',
            text: `AMPLIFICACIÓN:
Neural DSP Archetype: Nolly, Plini, Tim Henson
IK Multimedia AmpliTube 5: Colección masiva de amplificadores
Positive Grid BIAS FX 2: Modelado realista, interface moderna

EFECTOS:
Soundtoys EchoBoy: Delays vintage y modernos
Valhalla VintageVerb: Reverbs clásicos digitales
FabFilter Pro-Q 3: EQ dinámico de precisión
Waves CLA-76: Compresión estilo 1176

INSTRUMENTOS VIRTUALES:
Native Instruments Kontakt: Samples de calidad suprema
Spectrasonics Omnisphere: Síntesis avanzada para texturas
Toontrack Superior Drummer: Baterías fusion realistas
Native Instruments Scarbee Vintage Electric Pianos`
          },
          {
            type: 'subheading',
            text: 'Aplicaciones Móviles para Práctica'
          },
          {
            type: 'list',
            items: [
              'iReal Pro: Backing tracks con progresiones personalizables',
              'Anytune: Transcripción con control de velocidad y pitch',
              'Metronome Beats: Metrónomo con subdivisiones complejas',
              'Chord! (Guitar Chord Finder): Diccionario de acordes avanzado',
              'Transcribe!: Transcripción profesional en dispositivo móvil'
            ]
          },
          {
            type: 'subheading',
            text: 'Inteligencia Artificial en Fusion'
          },
          {
            type: 'paragraph',
            text: 'La IA está comenzando a impactar la creación musical fusion:'
          },
          {
            type: 'code',
            text: `APLICACIONES ACTUALES:
AIVA (Artificial Intelligence Virtual Artist):
- Función: Composición automática de progresiones
- Uso fusion: Generar backing tracks complejos
- Limitación: Falta el feeling humano

Amper Music:
- Función: Creación de música adaptativa
- Uso fusion: Bases rítmicas personalizables
- Ventaja: Royalty-free, comercialmente viable

LANDR:
- Función: Mastering automático
- Uso fusion: Finalización rápida de demos
- Calidad: Comparable a mastering humano básico

Band-in-a-Box:
- Función: Acompañamiento automático inteligente
- Uso fusion: Práctica con secciones rítmicas realistas
- Evolución: 30+ años de desarrollo, muy sofisticado`
          },
          {
            type: 'highlight',
            text: 'PERSPECTIVA: La IA es una herramienta, no un reemplazo. Puede acelerar el proceso creativo y educativo, pero la expresión musical sigue siendo fundamentalmente humana.'
          },
          {
            type: 'subheading',
            text: 'Colaboración Online'
          },
          {
            type: 'code',
            text: `PLATAFORMAS DE COLABORACIÓN:
BandLab: DAW gratuito en la nube, colaboración en tiempo real
Splice: Samples + colaboración + distribución
Kompoz: Red social para músicos, proyectos colaborativos
JamKazam: Jam sessions online con latencia ultra-baja

FLUJO DE TRABAJO COLABORATIVO:
1. Compositor crea estructura básica en BandLab
2. Guitarrista añade partes fusion desde su estudio
3. Baterista programa o graba partes rítmicas
4. Bajista completa la sección rítmica
5. Mezcla colaborativa con comentarios en tiempo real
6. Distribución automática en plataformas digitales`
          },
          {
            type: 'subheading',
            text: 'Streaming y Distribución'
          },
          {
            type: 'list',
            items: [
              'DistroKid: Distribución automática a todas las plataformas',
              'Bandcamp: Plataforma ideal para fusion instrumental',
              'SoundCloud: Comunidad activa de fusion contemporáneo',
              'YouTube: Monetización y alcance global',
              'Spotify for Artists: Analytics y promoción dirigida'
            ]
          },
          {
            type: 'subheading',
            text: 'Setup Tecnológico Recomendado por Presupuesto'
          },
          {
            type: 'code',
            text: `NIVEL ESTUDIANTE ($200-500):
Interface: Focusrite Scarlett Solo
DAW: GarageBand (Mac) o Reaper (PC)
Plugins: Amplitube Custom Shop (gratuito)
Monitoreo: Auriculares Audio-Technica ATH-M40x

NIVEL INTERMEDIO ($500-1500):
Interface: Focusrite Scarlett 2i2 3rd Gen
DAW: Logic Pro X o Cubase Elements
Plugins: Neural DSP Archetype, Valhalla Room
Monitoreo: Yamaha HS5 + auriculares Sennheiser HD650

NIVEL PROFESIONAL ($1500+):
Interface: Universal Audio Apollo Twin
DAW: Logic Pro X o Cubase Pro
Plugins: Suite completa UAD, Soundtoys 5
Monitoreo: Adam A7X + Sonarworks Reference 4`
          },
          {
            type: 'paragraph',
            text: 'La tecnología debe facilitar la creatividad, no complicarla. Empieza simple y ve añadiendo herramientas según las necesites para expresar tus ideas musicales.'
          }
        ]
      },
      {
        id: 'fusion-global',
        title: 'Fusion Global: Influencias Mundiales',
        description: 'Exploración de cómo diferentes culturas han influenciado el fusion moderno',
        duration: '45 min',
        difficulty: 'Intermedio-Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Fusion Sin Fronteras: Un Lenguaje Universal'
          },
          {
            type: 'paragraph',
            text: 'El fusion del siglo XXI ha trascendido sus raíces americanas, incorporando elementos musicales de todo el mundo. Esta globalización ha enriquecido enormemente el vocabulario armónico, rítmico y melódico del género.'
          },
          {
            type: 'subheading',
            text: 'Fusion Brasileño: Bossa Nova Meets Jazz Rock'
          },
          {
            type: 'paragraph',
            text: 'Brasil ha contribuido significativamente al fusion con sus ritmos únicos y armonías sofisticadas:'
          },
          {
            type: 'code',
            text: `RITMO BOSSA NOVA EN FUSION:
Patrón básico en 4/4:
|1 + 2 + 3 + 4 +|
 X   X   X   X   (bombo)
   X   X   X   X (snare/cross-stick)

Aplicación en guitarra (fingerstyle):
E|--7-----7-----7-----7-----|
B|----8-----8-----8-----8---|
G|------7-----7-----7-----7-|
D|--------------------------|
A|--5-----5-----5-----5-----|
E|--------------------------|

Acorde: Am7, patrón rítmico bossa nova
Técnica: Pulgar en bajos, dedos en agudos

PROGRESIÓN TÍPICA BOSSA-FUSION:
Am7 - D7 - Gmaj7 - Cmaj7 - F#m7b5 - B7 - Em7 - A7
Análisis: ii-V-I en G mayor, seguido de ii-V-I en E menor
Sonido: Sofisticado, cálido, con movimiento armónico constante`
          },
          {
            type: 'subheading',
            text: 'Fusion Flamenco: Paco de Lucía y la Revolución'
          },
          {
            type: 'paragraph',
            text: 'Paco de Lucía revolucionó tanto el flamenco como el fusion, creando un híbrido único:'
          },
          {
            type: 'code',
            text: `TÉCNICAS FLAMENCAS EN FUSION:
Picado (alternate picking extremo):
E|--12-13-15-17-19-20-22-24-22-20-19-17-15-13-12--|
Velocidad: 16th notes a 140+ BPM
Técnica: Alternancia estricta i-m (índice-medio)

Alzapúa (thumb technique):
A|--5p0--5p0--5p0--5p0--|
E|--0----0----0----0----|
Técnica: Pulgar hacia abajo y arriba, creando percusión

ESCALAS FLAMENCAS EN FUSION:
Escala Frigia Española: E F G# A B C D E
Sobre Em: 1 b2 3 4 5 b6 b7 8
Aplicación: Sobre acordes menores para color español

Ejemplo melódico:
E|--12-13-16-17-19-20-22-24--|
Notas: E-F-G#-A-B-C-D-E
Sonido: Exótico, dramático, muy expresivo`
          },
          {
            type: 'subheading',
            text: 'Fusion Indio: Raga Meets Jazz Harmony'
          },
          {
            type: 'code',
            text: `CONCEPTOS RAGA EN FUSION:
Raga Yaman (equivalente a Lidio):
C D E F# G A B C
Características: 4ta aumentada, muy melódico

Aplicación sobre Cmaj7:
E|--12-14-16-18-19-21-23-24--|
B|---------------------------|
Notas: C-D-E-F#-G-A-B-C
Efecto: Sonoridad etérea, suspendida

TÉCNICAS ORNAMENTALES:
Meend (bending continuo):
E|--12b14b16b17b19--| (bending gradual y continuo)
Concepto: No hay notas fijas, todo es transición

Gamak (vibrato ornamental):
E|--12~~~--| (vibrato amplio y expresivo)
Aplicación: En notas largas, especialmente finales de frase

RITMOS INDIOS EN FUSION:
Tala Rupak (7 beats): 3+2+2
|1 2 3|1 2|1 2|
Aplicación: Métrica asimétrica natural, muy musical`
          },
          {
            type: 'subheading',
            text: 'Fusion Africano: Polirritmia y Groove'
          },
          {
            type: 'paragraph',
            text: 'África ha aportado conceptos rítmicos fundamentales al fusion moderno:'
          },
          {
            type: 'code',
            text: `POLIRRITMIA AFRICANA:
Ritmo base (4/4):
|1 + 2 + 3 + 4 +|

Clave superpuesta (3/2):
|1 + + 2 + + 3 +|

Combinación:
Base:  |X   X   X   X  |
Clave: |X     X     X  |
Resultado: Tensión rítmica constante

APLICACIÓN EN GUITARRA:
Mano derecha (base 4/4):
|♩ ♩ ♩ ♩| (palm muting)

Mano izquierda (clave 3/2):
|♩   ♩   ♩ | (acentos con hammer-ons)

ESCALAS PENTATÓNICAS AFRICANAS:
Escala Kumoi: C D Eb G A C
Aplicación: Sobre acordes menores, sonido ancestral
Ejemplo:
E|--15-17-18-22-24--|
Notas: C-D-Eb-G-A
Sonido: Primitivo pero sofisticado`
          },
          {
            type: 'subheading',
            text: 'Fusion Árabe: Maqam y Microtonalidad'
          },
          {
            type: 'code',
            text: `MAQAM HIJAZ EN FUSION:
C Db E F G Ab B C
Intervalos únicos: 1 b2 3 4 5 b6 7 8

Aplicación melódica:
E|--12-13-16-17-19-20-23-24--|
Sonido: Exótico, dramático, muy expresivo

MICROTONOS EN GUITARRA:
Cuarto de tono (50 cents):
E|--12-12.5-13--| (bending de 1/4 de tono)
Técnica: Bending controlado, muy sutil
Efecto: Sonoridad "entre" las notas occidentales

RITMOS ÁRABES:
Maqsum (4/4 con acentos únicos):
|1 + 2 + 3 + 4 +|
 D   t D   t k t
D = Dum (grave), t = tak (agudo), k = ka (seco)

Aplicación en guitarra:
|♩   ♪ ♩   ♪ ♪ ♪| (palm muting variado)`
          },
          {
            type: 'highlight',
            text: 'CONCEPTO CLAVE: No se trata de imitar estas músicas, sino de absorber sus conceptos únicos y aplicarlos creativamente en contexto fusion.'
          },
          {
            type: 'subheading',
            text: 'Artistas de Referencia Global'
          },
          {
            type: 'list',
            items: [
              'Paco de Lucía (España): Flamenco-jazz, técnica revolucionaria',
              'John McLaughlin (UK/India): Shakti, fusión indo-occidental',
              'Al Di Meola (USA/Latino): Mediterranean Sundance, world fusion',
              'Trilok Gurtu (India): Percusión india en contexto fusion',
              'Nguyên Lê (Vietnam/Francia): Fusion asiático-occidental',
              'Richard Bona (Camerún): Fusion africano contemporáneo'
            ]
          },
          {
            type: 'subheading',
            text: 'Ejercicio de Aplicación: Composición World-Fusion'
          },
          {
            type: 'paragraph',
            text: 'Crea una composición de 3 minutos que incorpore:'
          },
          {
            type: 'list',
            items: [
              'Progresión armónica fusion occidental (base)',
              'Escala no-occidental para melodías (color)',
              'Ritmo asimétrico de otra cultura (groove)',
              'Técnica ornamental específica (expresión)',
              'Instrumentación híbrida (textura)'
            ]
          },
          {
            type: 'subheading',
            text: 'Recursos para Profundizar'
          },
          {
            type: 'list',
            items: [
              'Libros: "The Rest Is Noise" - Alex Ross',
              'Documentales: "Paco de Lucía: A Way of Life"',
              'Álbumes: "Shakti" - John McLaughlin, "Friday Night in San Francisco"',
              'Cursos online: Berklee Global Jazz, Coursera World Music',
              'Apps: Raga (escalas indias), Metronome+ (ritmos mundiales)'
            ]
          },
          {
            type: 'paragraph',
            text: 'El fusion global no es apropiación cultural, es celebración y síntesis respetuosa. Cada tradición musical tiene tesoros únicos que pueden enriquecer tu expresión fusion personal.'
          }
        ]
      }
    ]
  }
];