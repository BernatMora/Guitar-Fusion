import { 
  Music, 
  Guitar, 
  Users, 
  Target,
  Zap,
  Brain,
  Headphones,
  TrendingUp
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
          },
          {
            type: 'subheading',
            text: 'Escalas Étnicas en Fusion'
          },
          {
            type: 'list',
            items: [
              'Escala Húngara Menor: 1-2-b3-#4-5-b6-7',
              'Escala Japonesa (Hirajoshi): 1-2-b3-5-b6',
              'Escala Árabe: 1-b2-3-4-5-b6-7',
              'Escala Española: 1-b2-3-4-5-b6-b7'
            ]
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
          },
          {
            type: 'subheading',
            text: 'Fraseo Melódico Sofisticado'
          },
          {
            type: 'paragraph',
            text: 'El fraseo en smooth jazz requiere comprensión profunda del espacio musical y la respiración melódica.'
          },
          {
            type: 'list',
            items: [
              'Uso del silencio: Los espacios son tan importantes como las notas',
              'Dinámicas graduales: Crescendos y diminuendos controlados',
              'Articulación variada: Combinación de legato, staccato y tenuto',
              'Timing expresivo: Slight behind/ahead del beat para crear groove'
            ]
          }
        ]
      },
      {
        id: 'improvisacion-avanzada',
        title: 'Técnicas de Improvisación Avanzadas',
        description: 'Desarrollo de un lenguaje improvisatorio personal y sofisticado',
        duration: '60 min',
        difficulty: 'Experto',
        content: [
          {
            type: 'heading',
            text: 'Desarrollo Motívico Avanzado'
          },
          {
            type: 'paragraph',
            text: 'La improvisación sofisticada se basa en el desarrollo coherente de ideas musicales, no en la mera ejecución de escalas.'
          },
          {
            type: 'subheading',
            text: 'Técnicas de Transformación Motívica'
          },
          {
            type: 'list',
            items: [
              'Inversión: Voltear intervalos hacia arriba/abajo',
              'Retrogradación: Tocar el motivo hacia atrás',
              'Aumentación/Diminución: Cambiar valores rítmicos',
              'Transposición secuencial: Mover el motivo por grados'
            ]
          },
          {
            type: 'highlight',
            text: 'Concepto fundamental: Un solo de 2 minutos puede desarrollarse completamente a partir de un motivo de 3-4 notas, como demuestran los grandes maestros.'
          },
          {
            type: 'subheading',
            text: 'Displacement Rítmico'
          },
          {
            type: 'paragraph',
            text: 'El displacement crea la ilusión de que el compás se ha movido, generando tensión rítmica sofisticada.'
          },
          {
            type: 'list',
            items: [
              'Displacement de corchea: Mover frases una corchea adelante/atrás',
              'Displacement métrico: Tocar en 3/4 sobre 4/4',
              'Displacement de acento: Cambiar acentos sin cambiar notas',
              'Polyrhythm: Superposición de diferentes subdivisiones'
            ]
          },
          {
            type: 'code',
            text: 'Ejercicio de Displacement:\nFrase original: 1-e-+-a-2-e-+-a\nDisplacement +1: e-+-a-2-e-+-a-3\nMantener la frase, cambiar su posición métrica'
          }
        ]
      },
      {
        id: 'vocabulario-melodico',
        title: 'Vocabulario Melódico de Maestros',
        description: 'Licks y frases características de los grandes del fusion',
        duration: '45 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'Licks Característicos de John McLaughlin'
          },
          {
            type: 'paragraph',
            text: 'McLaughlin revolucionó la guitarra fusion con su síntesis única de jazz, rock y música india.'
          },
          {
            type: 'subheading',
            text: 'Frases Signature de McLaughlin'
          },
          {
            type: 'list',
            items: [
              'Scalar runs cromáticos: Combinación de escalas diatónicas con cromatismo',
              'Intervalos de cuarta: Uso melódico de cuartas perfectas y aumentadas',
              'Tremolo picking: Técnica de picking rápido para crear texturas',
              'Bending microtonal: Influencia de la música india en la afinación'
            ]
          },
          {
            type: 'code',
            text: 'Lick McLaughlin en Em:\nE: 12-15-12-14-12\nB: 15-12-15-13-12\nG: 14-12-14-11-12\nTécnica: Alternate picking estricto'
          },
          {
            type: 'subheading',
            text: 'Vocabulario de Al Di Meola'
          },
          {
            type: 'paragraph',
            text: 'Di Meola aporta precisión técnica extrema y influencias mediterráneas al fusion.'
          },
          {
            type: 'list',
            items: [
              'Tremolo mediterráneo: Técnica derivada de la guitarra flamenca',
              'Scalar sequences: Secuencias escalísticas en patrones de 4',
              'Chord melody: Melodía y armonía simultáneas',
              'Speed picking: Alternate picking a velocidades extremas'
            ]
          },
          {
            type: 'highlight',
            text: 'Insight técnico: Di Meola desarrolló una técnica de picking que permite velocidades extremas manteniendo claridad articulatoria absoluta.'
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
          },
          {
            type: 'subheading',
            text: 'Técnicas Características'
          },
          {
            type: 'list',
            items: [
              'Legato fluido: Conexión seamless entre notas',
              'Uso de chorus: Efecto signature que define su sonido',
              'Melodías cantables: Construcción de líneas melódicas memorables',
              'Armonías abiertas: Voicings espaciosos y resonantes'
            ]
          },
          {
            type: 'subheading',
            text: 'Innovación Tecnológica'
          },
          {
            type: 'paragraph',
            text: 'Metheny ha sido pionero en la integración de tecnología musical avanzada.'
          },
          {
            type: 'list',
            items: [
              'Guitarra sintetizador Roland: Expansión de posibilidades sonoras',
              'Orchestrion: Orquesta mecánica controlada por guitarra',
              'Efectos procesados: Delays complejos y reverbs espaciales',
              'MIDI guitar: Control de instrumentos virtuales desde la guitarra'
            ]
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
          },
          {
            type: 'subheading',
            text: 'Técnica Legato Suprema'
          },
          {
            type: 'paragraph',
            text: 'La técnica legato de Holdsworth es considerada la más avanzada en la historia de la guitarra eléctrica.'
          },
          {
            type: 'list',
            items: [
              'Hammer-ons/pull-offs: Velocidad y claridad extremas',
              'String skipping: Saltos de cuerdas en contexto legato',
              'Wide intervals: Intervalos amplios ejecutados con legato',
              'Chromatic approach: Aproximaciones cromáticas fluidas'
            ]
          },
          {
            type: 'code',
            text: 'Ejercicio Legato Holdsworth:\nG: 5h7p5h8p5h7p5\nD: 7h9p7h10p7h9p7\nSolo mano izquierda, sin picking'
          },
          {
            type: 'subheading',
            text: 'Sonido y Equipamiento'
          },
          {
            type: 'list',
            items: [
              'Amplificación: Amplificadores de estado sólido para claridad',
              'Efectos: Chorus, delay y reverb para crear espacialidad',
              'Cuerdas: Calibres pesados para mayor sustain',
              'Técnica de ataque: Toque suave para maximizar legato'
            ]
          }
        ]
      },
      {
        id: 'scott-henderson',
        title: 'Scott Henderson',
        description: 'Síntesis perfecta entre blues y fusion',
        duration: '40 min',
        difficulty: 'Avanzado',
        content: [
          {
            type: 'heading',
            text: 'La Síntesis Blues-Fusion de Scott Henderson'
          },
          {
            type: 'paragraph',
            text: 'Scott Henderson logró la síntesis perfecta entre la expresividad del blues y la sofisticación armónica del fusion, creando un estilo único e influyente.'
          },
          {
            type: 'subheading',
            text: 'Técnica Híbrida Característica'
          },
          {
            type: 'list',
            items: [
              'Hybrid picking: Combinación de púa y dedos para texturas únicas',
              'Blues bends en contexto jazz: Bending expresivo sobre armonías complejas',
              'Chicken picking: Técnica percusiva derivada del country',
              'Muted strings: Uso de cuerdas apagadas para efectos rítmicos'
            ]
          },
          {
            type: 'highlight',
            text: 'Técnica signature: Henderson usa hybrid picking para crear líneas que suenan como si fueran tocadas por múltiples instrumentos simultáneamente.'
          },
          {
            type: 'subheading',
            text: 'Aproximación Armónica Única'
          },
          {
            type: 'paragraph',
            text: 'Henderson aplica conceptos de jazz avanzado manteniendo la esencia emocional del blues.'
          },
          {
            type: 'list',
            items: [
              'Blues scales sobre changes: Pentatónica blues en progresiones jazz',
              'Chord tones como targets: Notas objetivo en improvisación',
              'Outside playing: Salir de la tonalidad de forma controlada',
              'Rhythmic displacement: Desplazamiento rítmico de frases blues'
            ]
          },
          {
            type: 'code',
            text: 'Lick Henderson sobre Dm7-G7-Cmaj7:\nE: 10b12-10-8\nB: 11-8-10\nG: 10-7-9\nCombina blues bending con chord tones'
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
          },
          {
            type: 'subheading',
            text: 'Alternate Picking Extremo'
          },
          {
            type: 'paragraph',
            text: 'El alternate picking preciso es esencial para las velocidades requeridas en el fusion moderno.'
          },
          {
            type: 'list',
            items: [
              'Escalas cromáticas: Picking estricto en todas las posiciones',
              'String skipping: Saltos de cuerdas manteniendo alternancia',
              'Tremolo picking: Picking rápido en una sola nota',
              'Accent patterns: Acentos específicos en secuencias de picking'
            ]
          },
          {
            type: 'highlight',
            text: 'Regla de oro: Nunca sacrifiques la precisión por la velocidad. La velocidad es el resultado natural de la precisión perfeccionada.'
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
          },
          {
            type: 'subheading',
            text: 'Uso Creativo del Metrónomo'
          },
          {
            type: 'paragraph',
            text: 'El metrónomo es mucho más que una herramienta de tempo; puede ser usado creativamente para desarrollar aspectos rítmicos sofisticados.'
          },
          {
            type: 'list',
            items: [
              'Displacement practice: Metrónomo en tiempos débiles',
              'Subdivision training: Diferentes subdivisiones sobre el click',
              'Polyrhythmic practice: Tocar en 3 mientras el metrónomo marca 4',
              'Tempo modulation: Cambios graduales de velocidad'
            ]
          },
          {
            type: 'code',
            text: 'Ejercicio Metrónomo Creativo:\nMetrónomo en 60 BPM en tiempos 2 y 4\nTocar escalas sintiendo 1 y 3 internamente\nDesarrolla independencia rítmica'
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
            type: 'subheading',
            text: 'Evaluación Musical'
          },
          {
            type: 'list',
            items: [
              'Coherencia melódica: Desarrollo lógico de ideas musicales',
              'Variedad rítmica: Diversidad en patrones rítmicos',
              'Uso del espacio: Balance entre notas y silencios',
              'Expresividad dinámica: Rango y control de dinámicas'
            ]
          },
          {
            type: 'highlight',
            text: 'Principio fundamental: La técnica debe servir a la música, no al revés. Evalúa siempre el impacto musical de tus mejoras técnicas.'
          },
          {
            type: 'subheading',
            text: 'Desarrollo del Oído Musical'
          },
          {
            type: 'paragraph',
            text: 'El desarrollo auditivo es tan importante como el técnico para un músico de fusion completo.'
          },
          {
            type: 'list',
            items: [
              'Reconocimiento de intervalos: Identificación precisa de distancias tonales',
              'Análisis armónico auditivo: Reconocer progresiones sin partitura',
              'Transcripción: Escribir música solo por audición',
              'Relative pitch: Desarrollo del oído relativo avanzado'
            ]
          }
        ]
      }
    ]
  }
];