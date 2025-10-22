import { Settings } from 'lucide-react';
import { Module } from '../../types';

export const equipamientoSonido: Module = {
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
  };
