import { Zap } from 'lucide-react';
import { Module } from '../../types';

export const improvisacionAvanzada: Module = {
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
  };
