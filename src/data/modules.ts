import { 
  Music, 
  Guitar, 
  Users, 
  Target,
  Zap,
  Brain,
  Headphones,
  TrendingUp,
  Mic,
  Settings,
  BookOpen,
  Layers
} from 'lucide-react';
import { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'teoria-musical',
    title: 'Teoría Musical Avanzada',
    icon: Music,
    description: 'Fundamentos teóricos profundos para la guitarra de fusión',
    sections: [
      {
        id: 'analisis-armonico',
        title: 'Análisis Armónico de Progresiones Complejas',
        description: 'Decodificación de progresiones armónicas sofisticadas en el jazz fusion',
        duration: '45 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Análisis de "Spain" de Chick Corea'
          },
          {
            type: 'paragraph',
            text: 'Esta composición icónica del jazz fusion presenta una progresión armónica que combina elementos del flamenco español con la sofisticación armónica del jazz moderno.'
          },
          {
            type: 'subheading',
            text: 'Estructura Armónica Principal'
          },
          {
            type: 'list',
            items: [
              'Gmaj7 - C#ø7 - F#7alt - Bmaj7: Progresión ii-V-I en B mayor',
              'Em7 - A7 - Dmaj7: ii-V-I secundario hacia D mayor',
              'Gmaj7 - F#7alt - Bmaj7: Resolución cromática descendente',
              'Em7 - Ebdim7 - Dmaj7: Sustitución tritonal con acorde disminuido'
            ]
          },
          {
            type: 'highlight',
            text: 'Punto clave: La progresión utiliza acordes alterados (F#7alt) que crean tensión armónica antes de resolver, característica fundamental del jazz fusion.'
          },
          {
            type: 'subheading',
            text: 'Coltrane Changes - Análisis Profundo'
          },
          {
            type: 'paragraph',
            text: 'Los "Coltrane Changes" representan una de las progresiones más desafiantes del jazz, basadas en la división de la octava en terceras mayores.'
          },
          {
            type: 'code',
            text: 'Cmaj7 | E7 | Amaj7 | C#7 |\nF#maj7 | Bb7 | Ebmaj7 | G7 |\nCmaj7 (resolución)'
          },
          {
            type: 'list',
            items: [
              'Cada acorde mayor se conecta mediante un dominante que resuelve una tercera mayor arriba',
              'Crea un ciclo armónico que divide la octava en tres partes iguales',
              'Permite modulaciones rápidas entre centros tonales distantes',
              'Requiere pensamiento melódico no-diatónico para la improvisación'
            ]
          }
        ]
      },
      {
        id: 'acordes-extendidos',
        title: 'Acordes Extendidos y Alterados',
        description: 'Construcción y aplicación de acordes complejos en contextos de fusión',
        duration: '50 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Construcción Sistemática de Acordes Extendidos'
          },
          {
            type: 'paragraph',
            text: 'Los acordes extendidos son la base del sonido sofisticado del jazz fusion. Su construcción requiere comprensión profunda de las tensiones disponibles y sus resoluciones.'
          },
          {
            type: 'subheading',
            text: 'Acordes de Novena (9th chords)'
          },
          {
            type: 'list',
            items: [
              'Cmaj9: C-E-G-B-D (1-3-5-7-9)',
              'C9: C-E-G-Bb-D (dominante con novena)',
              'Cm9: C-Eb-G-Bb-D (menor con novena)',
              'C9sus4: C-F-G-Bb-D (suspendido con novena)'
            ]
          },
          {
            type: 'subheading',
            text: 'Voicings Específicos para Guitarra'
          },
          {
            type: 'code',
            text: 'Cmaj9 (Drop 2):\nE: 7º traste (B)\nB: 8º traste (G)\nG: 9º traste (E)\nD: 10º traste (D)\nA: 8º traste (C)\nE: ---'
          },
          {
            type: 'highlight',
            text: 'Técnica esencial: Los voicings "drop 2" son fundamentales para obtener sonoridades modernas y facilitar el voice leading entre acordes.'
          },
          {
            type: 'subheading',
            text: 'Acordes Alterados Avanzados'
          },
          {
            type: 'paragraph',
            text: 'Los acordes alterados crean tensión armónica específica que caracteriza el sonido del fusion moderno.'
          },
          {
            type: 'list',
            items: [
              'G7alt: Puede incluir b9, #9, #11, b13 simultáneamente',
              'G7#11: Sonido lydio dominante, muy usado en fusion',
              'G7b13: Crea tensión hacia acordes menores',
              'G7#9: El "acorde Hendrix", fusiona blues con jazz'
            ]
          }
        ]
      },
      {
        id: 'escalas-modales',
        title: 'Escalas Modales y Exóticas',
        description: 'Exploración de escalas avanzadas para improvisación creativa',
        duration: '40 min',
        difficulty: 'Intermedio-Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Modos Griegos en Contexto de Fusión'
          },
          {
            type: 'paragraph',
            text: 'Los modos griegos proporcionan colores tonales específicos que definen el carácter melódico del jazz fusion.'
          },
          {
            type: 'subheading',
            text: 'Modo Lidio - El Sonido del Fusion'
          },
          {
            type: 'list',
            items: [
              'F Lidio sobre Cmaj7: F-G-A-B-C-D-E',
              'Característica: #11 (B natural) crea el sonido "flotante"',
              'Aplicación: Acordes maj7#11, sonoridades etéreas',
              'Artistas: Joe Satriani, Steve Vai lo usan extensivamente'
            ]
          },
          {
            type: 'code',
            text: 'Patrón F Lidio (posición VII):\nE: 12-13-15\nB: 10-12-13-15\nG: 9-11-12-14\nD: 9-11-12\nA: 12-13-15\nE: 12-13-15'
          },
          {
            type: 'subheading',
            text: 'Escalas Sintéticas Avanzadas'
          },
          {
            type: 'paragraph',
            text: 'Las escalas sintéticas ofrecen sonoridades únicas que van más allá del sistema tonal tradicional.'
          },
          {
            type: 'list',
            items: [
              'Escala Whole Tone: C-D-E-F#-G#-Bb (solo tonos enteros)',
              'Escala Diminuida: C-D-Eb-F-Gb-Ab-A-B (tono-semitono)',
              'Escala Cromática: Uso melódico de los 12 semitonos',
              'Escalas Pentatónicas Alteradas: Variaciones de la pentatónica tradicional'
            ]
          },
          {
            type: 'highlight',
            text: 'Aplicación práctica: La escala whole tone sobre acordes dominantes alterados crea un sonido característico del fusion moderno.'
          }
        ]
      },
      {
        id: 'rearmonia-avanzada',
        title: 'Rearmonización Avanzada',
        description: 'Técnicas de rearmonización para crear nuevas sonoridades',
        duration: '55 min',
        difficulty: 'Experto',
        content: [
          {
            type: 'heading',
            text: 'Sustituciones Armónicas Complejas'
          },
          {
            type: 'paragraph',
            text: 'La rearmonización permite transformar progresiones simples en secuencias armónicas sofisticadas que mantienen la estructura melódica original.'
          },
          {
            type: 'subheading',
            text: 'Sustitución Tritonal Extendida'
          },
          {
            type: 'list',
            items: [
              'Sustitución básica: G7 → Db7 (tritono de distancia)',
              'Cadenas de tritonos: G7-Db7-F7-B7-E7-Bb7',
              'Tritonos con extensiones: Db13#11 en lugar de G7alt',
              'Resolución cromática: Movimiento de bajos por semitonos'
            ]
          },
          {
            type: 'code',
            text: 'Progresión Original: Dm7 - G7 - Cmaj7\nRearmonizada: Dm7 - Db13#11 - Cmaj7\nBajo cromático: D - Db - C'
          },
          {
            type: 'highlight',
            text: 'Técnica avanzada: Bill Evans popularizó el uso de acordes de aproximación para crear voice leading suave y sofisticado.'
          }
        ]
      }
    ]
  },
  {
    id: 'tecnicas-guitarra',
    title: 'Técnicas de Guitarra',
    icon: Guitar,
    description: 'Técnicas instrumentales específicas para el estilo fusion',
    sections: [
      {
        id: 'progressive-fusion',
        title: 'Progressive Fusion',
        description: 'Técnicas avanzadas del fusion progresivo',
        duration: '55 min',
        difficulty: 'Experto',
        content: [
          {
            type: 'heading',
            text: 'Métricas Complejas y Polirritmos'
          },
          {
            type: 'paragraph',
            text: 'El progressive fusion se caracteriza por el uso de métricas asimétricas y polirritmos que desafían la percepción rítmica tradicional.'
          },
          {
            type: 'subheading',
            text: 'Métricas Asimétricas Fundamentales'
          },
          {
            type: 'list',
            items: [
              '7/8: Agrupaciones 3+4 o 4+3, común en Mahavishnu Orchestra',
              '5/4: Feeling de "Take Five", pero con intensidad fusion',
              '9/8: Agrupaciones 4+5 o 3+3+3, crea sensación de "cojera"',
              '15/16: Métricas extremadamente complejas, estilo King Crimson'
            ]
          },
          {
            type: 'highlight',
            text: 'Técnica clave: Practica con metrónomo en subdivisiones para internalizar el feeling de cada métrica antes de aplicarla musicalmente.'
          },
          {
            type: 'subheading',
            text: 'Tapping Melódico Avanzado'
          },
          {
            type: 'paragraph',
            text: 'El tapping melódico va más allá de la técnica básica, incorporando elementos armónicos y contrapuntísticos.'
          },
          {
            type: 'list',
            items: [
              'Tapping de acordes: Construcción de voicings completos',
              'Contrapunto a dos voces: Melodías independientes simultáneas',
              'Tapping híbrido: Combinación con picking y legato',
              'Tapping percusivo: Incorporación de elementos rítmicos'
            ]
          },
          {
            type: 'code',
            text: 'Ejercicio de Tapping Melódico:\nMano derecha (tap): 12-15-17\nMano izquierda: 5-7-8\nCrear melodías independientes en cada mano'
          }
        ]
      },
      {
        id: 'smooth-jazz',
        title: 'Smooth Jazz',
        description: 'Técnicas expresivas del smooth jazz contemporáneo',
        duration: '35 min',
        difficulty: 'Intermedio',
        content: [
          {
            type: 'heading',
            text: 'Bending Expresivo y Control de Vibrato'
          },
          {
            type: 'paragraph',
            text: 'El smooth jazz requiere un control exquisito de la expresión, donde cada nota debe comunicar emoción y sofisticación.'
          },
          {
            type: 'subheading',
            text: 'Técnicas de Bending Avanzadas'
          },
          {
            type: 'list',
            items: [
              'Pre-bending: Doblar antes de atacar para efectos únicos',
              'Bending gradual: Control milimétrico de la afinación',
              'Bending de acordes: Doblar múltiples cuerdas simultáneamente',
              'Release bending: Técnica de liberación controlada'
            ]
          },
          {
            type: 'highlight',
            text: 'Secreto profesional: El vibrato debe ser una extensión natural de tu expresión musical, no un efecto añadido. Practica diferentes velocidades y amplitudes.'
          }
        ]
      },
      {
        id: 'tecnicas-extendidas',
        title: 'Técnicas Extendidas',
        description: 'Técnicas no convencionales para sonoridades únicas',
        duration: '40 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Técnicas Percusivas en la Guitarra'
          },
          {
            type: 'paragraph',
            text: 'Las técnicas percusivas expanden las posibilidades sonoras de la guitarra, incorporando elementos rítmicos que tradicionalmente pertenecían a la percusión.'
          },
          {
            type: 'subheading',
            text: 'Slap Guitar Technique'
          },
          {
            type: 'list',
            items: [
              'Thumb slap: Golpe con el pulgar para graves percusivos',
              'Finger pop: Pellizco con dedos para agudos percusivos',
              'Muted slap: Slap en cuerdas apagadas para efectos rítmicos',
              'Combinaciones: Slap + picking tradicional'
            ]
          },
          {
            type: 'code',
            text: 'Patrón Slap Básico:\nT = Thumb slap, P = Pop\nT - - P - T - P -\nCuerdas: E(6) - - G(3) - E(6) - B(2) -'
          }
        ]
      },
      {
        id: 'sweep-picking',
        title: 'Sweep Picking Avanzado',
        description: 'Dominio de la técnica de barrido para arpeggios veloces',
        duration: '50 min',
        difficulty: 'Experto',
        content: [
          {
            type: 'heading',
            text: 'Fundamentos del Sweep Picking'
          },
          {
            type: 'paragraph',
            text: 'El sweep picking permite ejecutar arpeggios a velocidades extremas manteniendo claridad articulatoria, técnica esencial en el fusion moderno.'
          },
          {
            type: 'subheading',
            text: 'Mecánica Básica del Sweep'
          },
          {
            type: 'list',
            items: [
              'Movimiento fluido de la púa: Un solo movimiento por dirección',
              'Sincronización mano izquierda: Dedos presionan justo cuando la púa llega',
              'Muting selectivo: Apagar cuerdas que no suenan',
              'Economía de movimiento: Mínimo esfuerzo, máximo resultado'
            ]
          },
          {
            type: 'code',
            text: 'Arpeggio Am (3 cuerdas):\nG: 5 (C)\nB: 5 (E)\nE: 8 (A)\nPúa: Downstroke continuo\nTiming: Triplets a 120 BPM'
          }
        ]
      },
      {
        id: 'legato-extremo',
        title: 'Legato Extremo',
        description: 'Técnicas de legato para fluidez melódica suprema',
        duration: '45 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Legato Multi-String'
          },
          {
            type: 'paragraph',
            text: 'El legato extremo permite crear líneas melódicas que fluyen sin interrupciones entre cuerdas, creando un sonido casi vocal.'
          },
          {
            type: 'subheading',
            text: 'Técnicas de Conexión'
          },
          {
            type: 'list',
            items: [
              'Hammer-on desde aire: Atacar cuerda sin picking previo',
              'Pull-off a cuerda abierta: Transiciones suaves',
              'Slide entre cuerdas: Conectar notas en cuerdas diferentes',
              'Legato cromático: Secuencias cromáticas fluidas'
            ]
          },
          {
            type: 'code',
            text: 'Ejercicio Legato Cromático:\nE: 12h13h14h15p14p13p12\nB: 12h13h14h15p14p13p12\nSolo mano izquierda, tempo 80 BPM'
          }
        ]
      }
    ]
  },
  {
    id: 'musicos-influyentes',
    title: 'Músicos Influyentes',
    icon: Users,
    description: 'Estudio profundo de los pioneros del jazz fusion',
    sections: [
      {
        id: 'pat-metheny',
        title: 'Pat Metheny',
        description: 'Análisis de la evolución estilística y contribuciones innovadoras',
        duration: '50 min',
        difficulty: 'Intermedio',
        content: [
          {
            type: 'heading',
            text: 'Evolución Estilística de Pat Metheny'
          },
          {
            type: 'paragraph',
            text: 'Pat Metheny ha definido el sonido del jazz contemporáneo durante más de cuatro décadas, evolucionando constantemente mientras mantiene una identidad musical única.'
          },
          {
            type: 'subheading',
            text: 'Períodos Creativos Principales'
          },
          {
            type: 'list',
            items: [
              'Período Inicial (1975-1980): Influencia country-jazz, sonido limpio',
              'Pat Metheny Group (1980-1990): Síntesis pop-jazz, uso de sintetizadores',
              'Exploración Libre (1990-2000): Colaboraciones experimentales',
              'Período Maduro (2000-presente): Síntesis de toda su experiencia'
            ]
          },
          {
            type: 'highlight',
            text: 'Innovación clave: Metheny fue pionero en el uso de la guitarra sintetizador y efectos electrónicos para expandir la paleta sonora del jazz.'
          }
        ]
      },
      {
        id: 'allan-holdsworth',
        title: 'Allan Holdsworth',
        description: 'Revolución armónica y técnica legato suprema',
        duration: '55 min',
        difficulty: 'Experto',
        content: [
          {
            type: 'heading',
            text: 'La Revolución Armónica de Holdsworth'
          },
          {
            type: 'paragraph',
            text: 'Allan Holdsworth redefinió completamente la aproximación armónica a la guitarra, creando un lenguaje musical que influenció a generaciones de guitarristas.'
          },
          {
            type: 'subheading',
            text: 'Conceptos Armónicos Revolucionarios'
          },
          {
            type: 'list',
            items: [
              'Chord scales: Cada acorde genera su propia escala específica',
              'Superimposición armónica: Tocar en una tonalidad sobre otra',
              'Voicings no-convencionales: Acordes que desafían la teoría tradicional',
              'Modulación cromática: Cambios tonales por movimiento cromático'
            ]
          },
          {
            type: 'highlight',
            text: 'Concepto revolucionario: Holdsworth pensaba en "chord scales" donde cada acorde sugiere una escala específica, no en escalas que funcionan sobre progresiones.'
          }
        ]
      },
      {
        id: 'frank-gambale',
        title: 'Frank Gambale',
        description: 'Maestro del sweep picking y la técnica economy',
        duration: '45 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Economy Picking Revolution'
          },
          {
            type: 'paragraph',
            text: 'Frank Gambale revolucionó la técnica de guitarra con su sistema de economy picking, que maximiza la eficiencia del movimiento de la púa.'
          },
          {
            type: 'subheading',
            text: 'Principios del Economy Picking'
          },
          {
            type: 'list',
            items: [
              'Dirección natural: Seguir la dirección natural de la púa',
              'Sweep en cambios de cuerda: Barrido cuando es eficiente',
              'Alternate cuando es necesario: Combinación inteligente',
              'Minimizar movimientos: Máxima eficiencia técnica'
            ]
          },
          {
            type: 'code',
            text: 'Patrón Economy Picking:\nE: 5-8 (down-up)\nB: 5-8 (down-up sweep)\nG: 5-7 (down-up)\nCombina alternate y sweep'
          }
        ]
      },
      {
        id: 'greg-howe',
        title: 'Greg Howe',
        description: 'Fusión perfecta entre rock y jazz con técnica impecable',
        duration: '40 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'La Síntesis Rock-Jazz de Greg Howe'
          },
          {
            type: 'paragraph',
            text: 'Greg Howe logró la fusión perfecta entre la agresividad del rock y la sofisticación del jazz, creando un estilo que influyó profundamente en el fusion moderno.'
          },
          {
            type: 'subheading',
            text: 'Técnicas Características'
          },
          {
            type: 'list',
            items: [
              'Legato-picking híbrido: Combinación fluida de técnicas',
              'Wide interval leaps: Saltos melódicos amplios',
              'Chromatic approach notes: Aproximaciones cromáticas sofisticadas',
              'Rhythmic displacement: Desplazamiento rítmico avanzado'
            ]
          },
          {
            type: 'highlight',
            text: 'Innovación técnica: Howe desarrolló un enfoque híbrido que combina la precisión del alternate picking con la fluidez del legato.'
          }
        ]
      },
      {
        id: 'shawn-lane',
        title: 'Shawn Lane',
        description: 'Velocidad extrema y precisión técnica absoluta',
        duration: '50 min',
        difficulty: 'Experto',
        content: [
          {
            type: 'heading',
            text: 'La Técnica Extrema de Shawn Lane'
          },
          {
            type: 'paragraph',
            text: 'Shawn Lane llevó la técnica de guitarra a límites nunca antes explorados, combinando velocidad extrema con precisión absoluta y musicalidad sofisticada.'
          },
          {
            type: 'subheading',
            text: 'Desarrollo Técnico Sistemático'
          },
          {
            type: 'list',
            items: [
              'Práctica metronómica extrema: Incrementos de 1 BPM',
              'Ejercicios de independencia: Cada dedo desarrollado individualmente',
              'Coordinación perfecta: Sincronización milimétrica entre manos',
              'Resistencia muscular: Entrenamiento para sesiones largas'
            ]
          },
          {
            type: 'code',
            text: 'Ejercicio Lane (Chromatic):\nE: 1-2-3-4-5-6-7-8-9-10-11-12\nTempo inicial: 60 BPM\nIncremento: +5 BPM cada día\nObjetivo: 200+ BPM'
          }
        ]
      },
      {
        id: 'brett-garsed',
        title: 'Brett Garsed',
        description: 'Hybrid picking y técnicas australianas únicas',
        duration: '35 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Hybrid Picking Avanzado'
          },
          {
            type: 'paragraph',
            text: 'Brett Garsed perfeccionó el hybrid picking hasta convertirlo en una técnica expresiva que permite texturas imposibles con picking tradicional.'
          },
          {
            type: 'subheading',
            text: 'Técnicas Signature'
          },
          {
            type: 'list',
            items: [
              'Banjo rolls: Patrones derivados del banjo bluegrass',
              'Chicken picking: Técnica percusiva con hybrid picking',
              'String skipping extremo: Saltos de cuerdas complejos',
              'Pedal tones: Notas pedal con melodías superpuestas'
            ]
          },
          {
            type: 'code',
            text: 'Patrón Banjo Roll:\nPúa: E(6) - Dedo medio: B(2) - Anular: E(1)\nRepetir en diferentes posiciones\nTempo: 140 BPM en tresillos'
          }
        ]
      }
    ]
  },
  {
    id: 'equipamiento-sonido',
    title: 'Equipamiento y Sonido',
    icon: Settings,
    description: 'Configuración profesional de equipamiento para fusion',
    sections: [
      {
        id: 'amplificacion-fusion',
        title: 'Amplificación para Fusion',
        description: 'Selección y configuración de amplificadores para sonido fusion',
        duration: '40 min',
        difficulty: 'Intermedio',
        content: [
          {
            type: 'heading',
            text: 'Amplificadores Clásicos del Fusion'
          },
          {
            type: 'paragraph',
            text: 'La elección del amplificador define fundamentalmente el carácter sonoro del fusion. Cada amplificador aporta características únicas que han definido épocas del género.'
          },
          {
            type: 'subheading',
            text: 'Amplificadores de Estado Sólido'
          },
          {
            type: 'list',
            items: [
              'Roland JC-120: Chorus integrado, sonido cristalino',
              'Polytone Mini-Brute: Favorito del jazz, respuesta plana',
              'Yamaha G100: Versatilidad y confiabilidad',
              'Lab Series L5: Usado por Allan Holdsworth, sonido único'
            ]
          },
          {
            type: 'highlight',
            text: 'Ventaja clave: Los amplificadores de estado sólido ofrecen headroom limpio y respuesta consistente, ideales para efectos complejos.'
          },
          {
            type: 'subheading',
            text: 'Configuración de Sonido Limpio'
          },
          {
            type: 'list',
            items: [
              'EQ plano como punto de partida',
              'Ligero boost en medios-agudos para claridad',
              'Compresión sutil para sustain uniforme',
              'Reverb espacial para profundidad'
            ]
          }
        ]
      },
      {
        id: 'efectos-fusion',
        title: 'Efectos Esenciales del Fusion',
        description: 'Cadena de efectos profesional para guitarra fusion',
        duration: '45 min',
        difficulty: 'Intermedio',
        content: [
          {
            type: 'heading',
            text: 'Cadena de Efectos Profesional'
          },
          {
            type: 'paragraph',
            text: 'La cadena de efectos en el fusion debe ser transparente y musical, realzando las cualidades naturales del instrumento sin dominar el sonido.'
          },
          {
            type: 'subheading',
            text: 'Orden de Efectos Recomendado'
          },
          {
            type: 'list',
            items: [
              '1. Compressor: TC Electronic Hypergravity o Empress',
              '2. Overdrive: Ibanez TS808 para boost transparente',
              '3. Chorus: Boss CE-2 o TC Corona para espacialidad',
              '4. Delay: TC Flashback o Strymon Timeline',
              '5. Reverb: Strymon BigSky o TC Hall of Fame'
            ]
          },
          {
            type: 'code',
            text: 'Configuración Chorus (Boss CE-2):\nRate: 10 o\'clock\nDepth: 12 o\'clock\nLevel: Unity gain\nResultado: Espacialidad sutil'
          },
          {
            type: 'highlight',
            text: 'Principio fundamental: Menos es más. Cada efecto debe tener un propósito musical específico, no ser decorativo.'
          }
        ]
      },
      {
        id: 'guitarras-fusion',
        title: 'Guitarras Ideales para Fusion',
        description: 'Características y modelos recomendados para fusion',
        duration: '35 min',
        difficulty: 'Principiante',
        content: [
          {
            type: 'heading',
            text: 'Características Esenciales'
          },
          {
            type: 'paragraph',
            text: 'Una guitarra para fusion debe ofrecer versatilidad tonal, comodidad para técnicas avanzadas y construcción que permita expresión musical completa.'
          },
          {
            type: 'subheading',
            text: 'Especificaciones Técnicas'
          },
          {
            type: 'list',
            items: [
              'Pastillas: Humbuckers para potencia, singles para claridad',
              'Mástil: Perfil delgado para técnicas rápidas',
              'Escala: 25.5" para tensión óptima',
              'Puente: Floyd Rose o fijo según preferencia'
            ]
          },
          {
            type: 'subheading',
            text: 'Modelos Recomendados'
          },
          {
            type: 'list',
            items: [
              'Ibanez RG/S Series: Versatilidad y comodidad',
              'Fender Stratocaster: Sonido clásico, muy versátil',
              'Gibson ES-335: Calidez y sustain natural',
              'PRS Custom 24: Balance perfecto de características'
            ]
          }
        ]
      },
      {
        id: 'grabacion-fusion',
        title: 'Técnicas de Grabación',
        description: 'Captura profesional del sonido de guitarra fusion',
        duration: '50 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Microfonía de Amplificadores'
          },
          {
            type: 'paragraph',
            text: 'La captura del sonido de amplificador requiere técnicas específicas para preservar las características tonales del fusion.'
          },
          {
            type: 'subheading',
            text: 'Técnicas de Microfonía'
          },
          {
            type: 'list',
            items: [
              'Close miking: Shure SM57 a 2-3 cm del parlante',
              'Room miking: Micrófono condensador para ambiente',
              'Combinación: Mezcla de close y room para profundidad',
              'Posicionamiento: Off-axis para reducir agudos duros'
            ]
          },
          {
            type: 'code',
            text: 'Setup de Grabación:\nSM57: Close, on-axis\nAKG C414: Room, 1 metro\nMezcla: 70% close, 30% room\nEQ: High-pass a 80Hz'
          }
        ]
      }
    ]
  },
  {
    id: 'composicion-arreglos',
    title: 'Composición y Arreglos',
    icon: BookOpen,
    description: 'Creación de música fusion original y arreglos sofisticados',
    sections: [
      {
        id: 'forma-musical',
        title: 'Forma Musical en el Fusion',
        description: 'Estructuras compositivas características del género',
        duration: '45 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Estructuras Formales del Fusion'
          },
          {
            type: 'paragraph',
            text: 'El fusion desarrolló formas musicales únicas que combinan la libertad del jazz con la estructura del rock, creando formatos que sirven tanto para composición como para improvisación.'
          },
          {
            type: 'subheading',
            text: 'Forma AABA Expandida'
          },
          {
            type: 'list',
            items: [
              'A: Tema principal (8-16 compases)',
              'A: Repetición con variaciones sutiles',
              'B: Puente contrastante (modulación o cambio modal)',
              'A: Retorno del tema con desarrollo'
            ]
          },
          {
            type: 'code',
            text: 'Estructura "Birdland":\nIntro (8) - A (16) - A (16) - B (16) - A (16)\nSolo Section (32) - A (16) - Outro (8)\nTotal: 128 compases'
          }
        ]
      },
      {
        id: 'arreglos-ensemble',
        title: 'Arreglos para Ensemble',
        description: 'Escritura para grupos de fusion de diferentes formaciones',
        duration: '55 min',
        difficulty: 'Experto',
        content: [
          {
            type: 'heading',
            text: 'Orquestación en el Fusion'
          },
          {
            type: 'paragraph',
            text: 'Los arreglos de fusion requieren comprensión profunda de las características de cada instrumento y cómo interactúan para crear texturas musicales complejas.'
          },
          {
            type: 'subheading',
            text: 'Roles Instrumentales'
          },
          {
            type: 'list',
            items: [
              'Guitarra: Melodía, armonía, texturas',
              'Teclados: Pads, solos, efectos sonoros',
              'Bajo: Fundamento armónico, líneas melódicas',
              'Batería: Groove, dinámicas, colores tímbricos'
            ]
          },
          {
            type: 'highlight',
            text: 'Principio clave: Cada instrumento debe tener momentos para brillar individualmente mientras contribuye al sonido conjunto.'
          }
        ]
      },
      {
        id: 'composicion-modal',
        title: 'Composición Modal',
        description: 'Creación de música basada en modos y centros tonales',
        duration: '40 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Composición Basada en Modos'
          },
          {
            type: 'paragraph',
            text: 'La composición modal permite crear música que escapa de las limitaciones del sistema tonal mayor-menor, ofreciendo colores armónicos únicos.'
          },
          {
            type: 'subheading',
            text: 'Establecimiento de Centros Modales'
          },
          {
            type: 'list',
            items: [
              'Pedal tones: Notas sostenidas que establecen el centro',
              'Cadencias modales: Resoluciones que refuerzan el modo',
              'Melodías características: Frases que definen el color modal',
              'Armonías de apoyo: Acordes que sostienen la modalidad'
            ]
          },
          {
            type: 'code',
            text: 'Progresión Dórica:\nDm7 - Em7b5 - Fmaj7 - Gm7\nCentro: D dórico\nCaracterística: 6ta mayor (B natural)'
          }
        ]
      }
    ]
  },
  {
    id: 'practica-estructurada',
    title: 'Práctica Estructurada',
    icon: Target,
    description: 'Metodologías científicas para el desarrollo técnico',
    sections: [
      {
        id: 'ejercicios-especificos',
        title: 'Ejercicios Específicos',
        description: 'Rutinas de práctica para desarrollo técnico avanzado',
        duration: '40 min',
        difficulty: 'Todos los niveles',
        content: [
          {
            type: 'heading',
            text: 'Ejercicios de Coordinación Avanzada'
          },
          {
            type: 'paragraph',
            text: 'La coordinación entre ambas manos es fundamental para ejecutar técnicas complejas de fusion con precisión y musicalidad.'
          },
          {
            type: 'subheading',
            text: 'Ejercicios de Independencia de Dedos'
          },
          {
            type: 'list',
            items: [
              'Ejercicio 1-2-3-4: Cada dedo en un traste, todas las combinaciones',
              'Spider walk: Movimiento cromático manteniendo posición',
              'Finger independence: Un dedo presiona mientras otros se mueven',
              'Stretch exercises: Extensión gradual del alcance de la mano'
            ]
          },
          {
            type: 'code',
            text: 'Ejercicio Spider (tempo 60 BPM):\nE: 5-6-7-8\nB: 5-6-7-8\nG: 5-6-7-8\nD: 5-6-7-8\nSubir un traste cada repetición'
          }
        ]
      },
      {
        id: 'metodologias-practica',
        title: 'Metodologías de Práctica',
        description: 'Enfoques científicos para maximizar el progreso',
        duration: '35 min',
        difficulty: 'Todos los niveles',
        content: [
          {
            type: 'heading',
            text: 'Práctica Mental y Visualización'
          },
          {
            type: 'paragraph',
            text: 'La práctica mental es una herramienta poderosa utilizada por músicos profesionales para acelerar el aprendizaje y perfeccionar la ejecución.'
          },
          {
            type: 'subheading',
            text: 'Técnicas de Práctica Mental'
          },
          {
            type: 'list',
            items: [
              'Visualización del diapasón: Ver mentalmente posiciones y patrones',
              'Audición interna: Escuchar la música antes de tocarla',
              'Simulación de movimientos: Practicar digitaciones sin guitarra',
              'Análisis mental: Estudiar partituras sin instrumento'
            ]
          },
          {
            type: 'highlight',
            text: 'Investigación científica: Estudios demuestran que la práctica mental puede ser hasta 70% tan efectiva como la práctica física para ciertos aspectos del aprendizaje musical.'
          }
        ]
      },
      {
        id: 'rutinas-calentamiento',
        title: 'Rutinas de Calentamiento',
        description: 'Preparación física y mental para sesiones de práctica',
        duration: '25 min',
        difficulty: 'Todos los niveles',
        content: [
          {
            type: 'heading',
            text: 'Calentamiento Físico Progresivo'
          },
          {
            type: 'paragraph',
            text: 'Un calentamiento adecuado previene lesiones y optimiza el rendimiento durante la práctica intensiva.'
          },
          {
            type: 'subheading',
            text: 'Secuencia de Calentamiento'
          },
          {
            type: 'list',
            items: [
              'Estiramientos de muñeca y dedos (5 min)',
              'Ejercicios cromáticos lentos (5 min)',
              'Escalas en tempo moderado (5 min)',
              'Técnicas específicas gradualmente (10 min)'
            ]
          },
          {
            type: 'code',
            text: 'Ejercicio Cromático de Calentamiento:\nTempo: 60 BPM\nE: 1-2-3-4 (repetir en todas las cuerdas)\nIncremento: +10 BPM cada 2 minutos\nMáximo: 120 BPM'
          }
        ]
      },
      {
        id: 'evaluacion-progreso',
        title: 'Evaluación y Progreso',
        description: 'Métricas objetivas para medir el desarrollo musical',
        duration: '30 min',
        difficulty: 'Todos los niveles',
        content: [
          {
            type: 'heading',
            text: 'Métricas Objetivas de Progreso'
          },
          {
            type: 'paragraph',
            text: 'El progreso musical debe medirse de forma objetiva para asegurar desarrollo consistente y identificar áreas que requieren atención específica.'
          },
          {
            type: 'subheading',
            text: 'Evaluación Técnica'
          },
          {
            type: 'list',
            items: [
              'Velocidad máxima: BPM máximo manteniendo precisión 100%',
              'Duración de sustain: Tiempo de notas sostenidas sin decay',
              'Precisión rítmica: Desviación en milisegundos del tempo',
              'Limpieza articulatoria: Ausencia de ruidos parásitos'
            ]
          },
          {
            type: 'highlight',
            text: 'Principio fundamental: La técnica debe servir a la música, no al revés. Evalúa siempre el impacto musical de tus mejoras técnicas.'
          }
        ]
      }
    ]
  },
  {
    id: 'produccion-grabacion',
    title: 'Producción y Grabación',
    icon: Mic,
    description: 'Técnicas profesionales de grabación y producción musical',
    sections: [
      {
        id: 'home-studio',
        title: 'Configuración de Home Studio',
        description: 'Montaje de estudio casero para grabaciones profesionales',
        duration: '45 min',
        difficulty: 'Intermedio',
        content: [
          {
            type: 'heading',
            text: 'Equipamiento Esencial del Home Studio'
          },
          {
            type: 'paragraph',
            text: 'Un home studio bien configurado permite obtener grabaciones de calidad profesional con inversión moderada y conocimiento técnico adecuado.'
          },
          {
            type: 'subheading',
            text: 'Componentes Fundamentales'
          },
          {
            type: 'list',
            items: [
              'Audio Interface: Focusrite Scarlett o RME Babyface',
              'Monitores: Yamaha HS8 o KRK Rokit para referencia',
              'DAW: Pro Tools, Logic Pro o Reaper',
              'Microfonos: SM57 para amplificador, condensador para ambiente'
            ]
          },
          {
            type: 'code',
            text: 'Configuración Audio Interface:\nSample Rate: 48kHz\nBuffer Size: 128 samples (baja latencia)\nBit Depth: 24-bit\nMonitoreo: Direct monitoring ON'
          }
        ]
      },
      {
        id: 'mezcla-fusion',
        title: 'Mezcla de Guitarra Fusion',
        description: 'Técnicas de mezcla específicas para el género fusion',
        duration: '50 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'EQ para Guitarra Fusion'
          },
          {
            type: 'paragraph',
            text: 'La ecualización de guitarra fusion debe realzar la claridad y definición mientras mantiene la calidez y musicalidad características del género.'
          },
          {
            type: 'subheading',
            text: 'Frecuencias Clave'
          },
          {
            type: 'list',
            items: [
              '80-120 Hz: High-pass para limpiar graves innecesarios',
              '200-400 Hz: Calidez controlada, evitar acumulación',
              '1-3 kHz: Presencia y claridad de notas',
              '8-12 kHz: Brillo y definición de armónicos'
            ]
          },
          {
            type: 'highlight',
            text: 'Técnica profesional: Usa EQ sustractivo antes que aditivo. Quita frecuencias problemáticas antes de realzar las deseadas.'
          }
        ]
      },
      {
        id: 'mastering-fusion',
        title: 'Mastering para Fusion',
        description: 'Finalización profesional de grabaciones fusion',
        duration: '40 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Objetivos del Mastering Fusion'
          },
          {
            type: 'paragraph',
            text: 'El mastering de fusion debe preservar la dinámica natural del género mientras asegura competitividad comercial y traducción en diferentes sistemas de reproducción.'
          },
          {
            type: 'subheading',
            text: 'Cadena de Mastering'
          },
          {
            type: 'list',
            items: [
              'EQ correctivo: Ajustes sutiles de balance tonal',
              'Compresión multibanda: Control dinámico por rangos',
              'Exciter armónico: Realce sutil de armónicos',
              'Limitador: Control de picos manteniendo dinámica'
            ]
          },
          {
            type: 'code',
            text: 'Parámetros Mastering Fusion:\nLUFS: -14 a -16 (preservar dinámica)\nPeak: -1 dBFS máximo\nRango dinámico: 8-12 dB mínimo'
          }
        ]
      }
    ]
  },
  {
    id: 'desarrollo-auditivo',
    title: 'Desarrollo Auditivo',
    icon: Headphones,
    description: 'Entrenamiento del oído musical para fusion avanzado',
    sections: [
      {
        id: 'transcripcion-avanzada',
        title: 'Transcripción Avanzada',
        description: 'Técnicas para transcribir música fusion compleja',
        duration: '50 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Metodología de Transcripción Profesional'
          },
          {
            type: 'paragraph',
            text: 'La transcripción es la herramienta más poderosa para desarrollar el oído musical y absorber el lenguaje de los maestros del fusion.'
          },
          {
            type: 'subheading',
            text: 'Proceso Sistemático'
          },
          {
            type: 'list',
            items: [
              'Primera escucha: Estructura general y forma',
              'Segunda escucha: Armonía y progresiones',
              'Tercera escucha: Melodía y líneas principales',
              'Cuarta escucha: Detalles rítmicos y articulación'
            ]
          },
          {
            type: 'code',
            text: 'Herramientas de Transcripción:\nSoftware: Transcribe! o Amazing Slow Downer\nVelocidad: 50% para pasajes complejos\nLoop: Secciones de 2-4 compases\nNotación: Sibelius o MuseScore'
          }
        ]
      },
      {
        id: 'reconocimiento-acordes',
        title: 'Reconocimiento de Acordes Complejos',
        description: 'Identificación auditiva de armonías sofisticadas',
        duration: '35 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Identificación de Extensiones y Alteraciones'
          },
          {
            type: 'paragraph',
            text: 'El reconocimiento de acordes complejos requiere entrenamiento sistemático para distinguir las sutilezas armónicas del fusion.'
          },
          {
            type: 'subheading',
            text: 'Metodología de Reconocimiento'
          },
          {
            type: 'list',
            items: [
              'Bajo: Identificar la fundamental primero',
              'Calidad: Mayor, menor, dominante, disminuido',
              'Extensiones: 7ma, 9na, 11va, 13va',
              'Alteraciones: b5, #5, b9, #9, #11, b13'
            ]
          },
          {
            type: 'highlight',
            text: 'Técnica de entrenamiento: Practica con acordes conocidos antes de intentar identificar acordes en contexto musical complejo.'
          }
        ]
      },
      {
        id: 'analisis-ritmico',
        title: 'Análisis Rítmico Avanzado',
        description: 'Comprensión profunda de estructuras rítmicas complejas',
        duration: '40 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Polirritmos y Métricas Complejas'
          },
          {
            type: 'paragraph',
            text: 'El análisis rítmico avanzado permite comprender y ejecutar las estructuras rítmicas sofisticadas que caracterizan el fusion progresivo.'
          },
          {
            type: 'subheading',
            text: 'Técnicas de Análisis'
          },
          {
            type: 'list',
            items: [
              'Identificación de pulso: Encontrar el beat fundamental',
              'Agrupaciones: Cómo se organizan las subdivisiones',
              'Acentos: Patrones de énfasis rítmico',
              'Superposiciones: Múltiples niveles rítmicos simultáneos'
            ]
          },
          {
            type: 'code',
            text: 'Análisis de 7/8:\nAgrupación 1: 3+4 (ONE-two-three-FOUR-five-six-seven)\nAgrupación 2: 4+3 (ONE-two-three-four-FIVE-six-seven)\nCada agrupación crea feeling diferente'
          }
        ]
      }
    ]
  },
  {
    id: 'fusion-contemporaneo',
    title: 'Fusion Contemporáneo',
    icon: TrendingUp,
    description: 'Tendencias actuales y evolución del género',
    sections: [
      {
        id: 'fusion-electronico',
        title: 'Fusion Electrónico',
        description: 'Integración de elementos electrónicos en el fusion moderno',
        duration: '45 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Síntesis Analógica en el Fusion'
          },
          {
            type: 'paragraph',
            text: 'La integración de sintetizadores y elementos electrónicos ha creado nuevas posibilidades sonoras que definen el fusion contemporáneo.'
          },
          {
            type: 'subheading',
            text: 'Sintetizadores Clásicos'
          },
          {
            type: 'list',
            items: [
              'Minimoog: Bajos potentes y leads expresivos',
              'Rhodes: Piano eléctrico icónico del fusion',
              'Oberheim: Pads y texturas atmosféricas',
              'Prophet-5: Versatilidad y calidez analógica'
            ]
          },
          {
            type: 'highlight',
            text: 'Evolución moderna: Los plugins VST actuales recrean fielmente estos sonidos clásicos, democratizando el acceso a estas sonoridades.'
          }
        ]
      },
      {
        id: 'world-fusion',
        title: 'World Fusion',
        description: 'Incorporación de elementos musicales de diferentes culturas',
        duration: '40 min',
        difficulty: 'Intermedio',
        content: [
          {
            type: 'heading',
            text: 'Elementos Musicales Globales'
          },
          {
            type: 'paragraph',
            text: 'El world fusion incorpora elementos de músicas tradicionales de todo el mundo, creando un lenguaje musical verdaderamente global.'
          },
          {
            type: 'subheading',
            text: 'Influencias Principales'
          },
          {
            type: 'list',
            items: [
              'Música India: Ragas, microtonalidad, ornamentación',
              'Flamenco: Técnicas percusivas, escalas españolas',
              'Música Brasileña: Ritmos complejos, armonías sofisticadas',
              'Música Africana: Polirritmos, call-and-response'
            ]
          },
          {
            type: 'code',
            text: 'Raga Yaman (Lidio):\nC-D-E-F#-G-A-B-C\nOrnamentación: Meend (bending)\nFraseo: Alap (libre) → Jor (rítmico)'
          }
        ]
      },
      {
        id: 'fusion-metal',
        title: 'Progressive Metal Fusion',
        description: 'Fusión entre metal progresivo y jazz fusion',
        duration: '50 min',
        difficulty: 'Experto',
        content: [
          {
            type: 'heading',
            text: 'La Síntesis Metal-Jazz'
          },
          {
            type: 'paragraph',
            text: 'El progressive metal fusion combina la agresividad y potencia del metal con la sofisticación armónica del jazz, creando un género híbrido único.'
          },
          {
            type: 'subheading',
            text: 'Características Técnicas'
          },
          {
            type: 'list',
            items: [
              'Distorsión controlada: Ganancia alta manteniendo claridad',
              'Técnicas híbridas: Sweep + alternate picking',
              'Armonías complejas: Jazz harmony con potencia metal',
              'Métricas extremas: 23/16, 17/8, progresiones asimétricas'
            ]
          },
          {
            type: 'highlight',
            text: 'Bandas referencia: Animals as Leaders, Plini, Intervals han definido este subgénero con aproximaciones únicas.'
          }
        ]
      }
    ]
  },
  {
    id: 'masterclasses',
    title: 'Masterclasses Especializadas',
    icon: Brain,
    description: 'Lecciones magistrales de técnicas específicas',
    sections: [
      {
        id: 'chord-melody',
        title: 'Chord Melody Avanzado',
        description: 'Técnicas para tocar melodía y armonía simultáneamente',
        duration: '60 min',
        difficulty: 'Experto',
        content: [
          {
            type: 'heading',
            text: 'Fundamentos del Chord Melody'
          },
          {
            type: 'paragraph',
            text: 'El chord melody permite a un solo guitarrista crear arreglos completos que incluyen melodía, armonía y bajo, técnica esencial para el jazz fusion solista.'
          },
          {
            type: 'subheading',
            text: 'Técnicas de Voicing'
          },
          {
            type: 'list',
            items: [
              'Melodía en la voz superior: Nota melódica como cuerda más aguda',
              'Armonización por cuartas: Voicings modernos y abiertos',
              'Bass lines independientes: Bajo que se mueve independientemente',
              'Voice leading suave: Movimiento mínimo entre acordes'
            ]
          },
          {
            type: 'code',
            text: 'Chord Melody "Autumn Leaves":\nCmaj7 (melodía G): x-3-5-4-5-x\nAm7 (melodía F): x-0-2-0-1-x\nVoice leading: Movimiento mínimo'
          }
        ]
      },
      {
        id: 'composicion-instantanea',
        title: 'Composición Instantánea',
        description: 'Técnicas para crear música en tiempo real',
        duration: '45 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Improvisación Compositiva'
          },
          {
            type: 'paragraph',
            text: 'La composición instantánea combina improvisación con estructura compositiva, permitiendo crear música coherente y sofisticada en tiempo real.'
          },
          {
            type: 'subheading',
            text: 'Herramientas Compositivas'
          },
          {
            type: 'list',
            items: [
              'Motivos semilla: Ideas básicas para desarrollo',
              'Variación sistemática: Transformaciones predecibles',
              'Forma emergente: Estructura que surge naturalmente',
              'Interacción grupal: Composición colaborativa en tiempo real'
            ]
          },
          {
            type: 'highlight',
            text: 'Concepto avanzado: Keith Jarrett demostró que la composición instantánea puede crear obras maestras comparables a composiciones escritas.'
          }
        ]
      },
      {
        id: 'fusion-pedagogia',
        title: 'Pedagogía del Fusion',
        description: 'Métodos de enseñanza específicos para el género',
        duration: '35 min',
        difficulty: 'Intermedio',
        content: [
          {
            type: 'heading',
            text: 'Metodologías de Enseñanza Efectivas'
          },
          {
            type: 'paragraph',
            text: 'La enseñanza del fusion requiere enfoques pedagógicos específicos que respeten la complejidad del género mientras mantienen la accesibilidad para el estudiante.'
          },
          {
            type: 'subheading',
            text: 'Progresión Curricular'
          },
          {
            type: 'list',
            items: [
              'Fundamentos sólidos: Jazz tradicional como base',
              'Introducción gradual: Elementos fusion progresivamente',
              'Práctica contextual: Siempre en contexto musical',
              'Creatividad personal: Desarrollo de voz propia'
            ]
          },
          {
            type: 'code',
            text: 'Secuencia de Aprendizaje:\nMes 1-3: Jazz standards básicos\nMes 4-6: Introducción a acordes extendidos\nMes 7-9: Escalas modales\nMes 10-12: Técnicas fusion específicas'
          }
        ]
      }
    ]
  }
];