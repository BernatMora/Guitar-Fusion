import { TrendingUp } from 'lucide-react';
import { Module } from '../../types';

export const fusionContemporaneo: Module = {
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
  };
