import { Target } from 'lucide-react';
import { Module } from '../../types';

export const armoniaAvanzada: Module = {
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
  };
