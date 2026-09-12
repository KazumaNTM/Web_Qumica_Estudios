/* ============================================================================
   CAPÍTULO 1 — Introducción (Física)
   Este archivo SOLO contiene contenido (texto, preguntas, respuestas).
   No hay aquí ni una línea de diseño ni de lógica: todo eso vive en motor.js
   (el motor). Si necesitas corregir un dato, este es el único archivo que
   hay que tocar; si necesitas cambiar cómo se ve la página, nunca es aquí.
   NOTA: todo el contenido proviene únicamente de Fisica_01.pdf (Capítulo 1,
   "Introducción"). El PDF no incluye ejemplos numéricos resueltos ni tablas
   de datos, así que los ejercicios/quiz/flashcards se construyeron a partir
   de las definiciones y explicaciones que el propio texto ofrece, sin
   agregar cifras ni datos que no aparezcan en él.
   ============================================================================ */
registrarCapitulo({
    materia: 'fisica', // agrupa este capítulo bajo "Física" en el menú
    numero: 1,
    titulo: 'Introducción',

    /* ---------------- 1. OBJETIVOS DE APRENDIZAJE ---------------- */
    // Objetivos redactados a partir de los temas que el propio capítulo desarrolla.
    objetivos: [
        'Definir qué es la física y su objeto de estudio.',
        'Diferenciar las ciencias biológicas de las ciencias físicas.',
        'Reconocer las principales áreas de estudio de la física: mecánica, calor, luz, sonido, electricidad y estructura atómica.',
        'Distinguir entre estática y dinámica dentro de la mecánica.',
        'Comprender por qué las matemáticas son una herramienta indispensable para el científico, el ingeniero o el técnico.',
        'Diferenciar entre hipótesis viable y teoría científica.',
        'Aplicar hábitos de estudio efectivos recomendados para un curso de física.'
    ],

    /* ---------------- 2. CONCEPTOS CLAVE ---------------- */
    // Cada objeto es una tarjeta de contenido; el "html" reproduce las ideas
    // del PDF con las etiquetas <strong>/<em> para resaltar términos clave.
    conceptos: [
        {
            titulo: '¿Qué es la física?',
            html: '<p>Las ciencias pueden dividirse en <strong>biológicas</strong> (se ocupan de los seres vivos) y <strong>físicas</strong> (tienen como objeto de estudio la parte no viva de la naturaleza).</p>' +
                '<p>La <strong>física</strong> puede definirse como la ciencia que investiga los conceptos fundamentales de la <em>materia</em>, la <em>energía</em> y el <em>espacio</em>, así como las relaciones entre ellos.</p>' +
                '<p>De acuerdo con esta amplia definición, no hay fronteras claras entre las ciencias físicas, lo cual resulta evidente en áreas como la biofísica, la fisicoquímica, la astrofísica, la geofísica, la electroquímica y muchas otras especialidades.</p>' +
                '<p>El curso introductorio abarca mecánica, calor, luz, sonido, electricidad y estructura atómica. El tema fundamental de todos ellos, y probablemente el más importante para el alumno principiante, es la <strong>mecánica</strong>.</p>'
        },
        {
            titulo: 'Estática y dinámica',
            html: '<p>La <strong>mecánica</strong> se refiere a la posición (<em>estática</em>) y al movimiento (<em>dinámica</em>) de la materia en el espacio.</p><ul>' +
                '<li><strong>Estática:</strong> estudio de la física aplicado a los cuerpos en reposo.</li>' +
                '<li><strong>Dinámica:</strong> se ocupa de la descripción del movimiento y sus causas.</li>' +
                '</ul><p>En ambos casos, el ingeniero o técnico se encarga de medir y describir las cantidades físicas en términos de <strong>causa y efecto</strong>.</p>'
        },
        {
            titulo: 'Causa y efecto: el ejemplo del puente',
            html: '<p>Un ingeniero aplica los principios de la física para determinar qué tipo de estructura será más eficaz en la construcción de un puente; su interés se centra en el <em>efecto</em> de las fuerzas.</p>' +
                '<p>Si un puente terminado llegara a fallar, la <em>causa</em> de la falla requeriría ser analizada para aplicar ese conocimiento a construcciones futuras. El científico define como <strong>causa</strong> la sucesión de hechos físicos que desembocan en un <strong>efecto</strong>.</p>'
        },
        {
            titulo: 'Importancia de las matemáticas',
            html: '<p>Las matemáticas son a la vez filosofía, arte, metafísica y lógica, pero para el científico, el ingeniero o el técnico su función principal es ser una <strong>herramienta</strong>.</p>' +
                '<p>El texto ilustra esto con el caso de predecir cuánto tarda en detenerse un automóvil: se controlan variables como la rapidez inicial (v<sub>i</sub>), la distancia de frenado (x) y el tiempo (t). A partir de la definición de rapidez como distancia recorrida por unidad de tiempo, se propone que la rapidez media se aproxima a la mitad de la rapidez inicial (v<sub>media</sub> ≈ v<sub>i</sub>/2) y que la distancia de frenado puede escribirse como x = (v<sub>i</sub>/2)·t.</p>' +
                '<p>Esta proposición es una <strong>hipótesis viable</strong>. Cuando una hipótesis se ha aplicado el suficiente número de veces para tener un grado de seguridad razonable de que es verdadera, se le llama <strong>teoría científica</strong>: en otras palabras, cualquier teoría científica no es más que una hipótesis viable que ha resistido la prueba del tiempo.</p>'
        },
        {
            titulo: '¿Cómo estudiar física?',
            html: '<p>La lectura de un texto técnico exige prestar atención al significado específico de las palabras. Se recomienda aprender a reconocer <strong>palabras clave</strong> como <em>trabajo</em>, <em>fuerza</em>, <em>energía</em> y <em>cantidad de movimiento</em> (sinónimos: <em>momento lineal</em> e <em>ímpetu</em>).</p>' +
                '<p>Algunas recomendaciones del texto para tener éxito en un curso de física:</p><ul>' +
                '<li>La <strong>responsabilidad final del aprendizaje</strong> corresponde al estudiante; el maestro es un facilitador.</li>' +
                '<li>El <strong>aprendizaje oportuno</strong> es aprendizaje eficaz: es mejor estudiar una hora cada día que 20 horas el fin de semana. Estudiar todo poco antes del examen <em>no funciona</em>.</li>' +
                '<li>El aprendizaje cabal va <strong>más allá del salón de clases</strong>: hay que resolver problemas por cuenta propia.</li>' +
                '<li>Conviene <strong>repasar las habilidades básicas</strong> de matemáticas y conocer bien el plan de actividades del curso.</li>' +
                '<li>Es útil buscar un <strong>compañero de estudio</strong> y mantener organizado el material del curso.</li>' +
                '<li>Si hay dificultades, hay que <strong>pedir ayuda cuanto antes</strong>.</li>' +
                '</ul>'
        }
    ],
    conceptosGlosario: [
        'Fisica_01.pdf, Cap. 1 — ¿Qué es la física?',
        'Fisica_01.pdf, Cap. 1 — Estática, dinámica y causa-efecto.',
        'Fisica_01.pdf, Cap. 1 — Importancia de las matemáticas; hipótesis y teoría científica.',
        'Fisica_01.pdf, Cap. 1 — ¿Cómo estudiar física?'
    ],

    /* ---------------- 3. FÓRMULAS Y RELACIONES CLAVE ---------------- */
    // El PDF no presenta fórmulas físicas formales en este capítulo; la única
    // relación que aparece es la del ejemplo sobre la distancia de frenado.
    formulas: [
        {
            box: 'v_media ≈ v_i / 2',
            vars: 'v_media = rapidez media · v_i = rapidez inicial (relación válida cuando el frenado es uniforme)',
            fuente: 'Fisica_01.pdf, Cap. 1 — ¿Qué importancia tienen las matemáticas?'
        },
        {
            box: 'x = (v_i / 2) · t',
            vars: 'x = distancia de frenado · v_i = rapidez inicial · t = tiempo de frenado',
            fuente: 'Fisica_01.pdf, Cap. 1 — ¿Qué importancia tienen las matemáticas?'
        }
    ],
    formulasGlosario: [
        'Fisica_01.pdf, Cap. 1 — Relación tentativa (hipótesis) usada como ejemplo del papel de las matemáticas en física.'
    ],

    /* ---------------- 4. EJEMPLOS RESUELTOS ---------------- */
    // El único "ejemplo" del capítulo es conceptual (no trae números), así
    // que se documenta como aparece en el texto, sin inventar datos.
    ejemplos: [
        {
            titulo: 'Ejemplo conceptual — De la hipótesis a la teoría',
            problema: 'Según el texto, ¿cómo se construye la relación tentativa para predecir la distancia de frenado de un automóvil?',
            solucionLineas: [
                'Se registran en pruebas la rapidez inicial (v_i), la distancia de frenado (x) y el tiempo (t), procurando que el frenado sea uniforme.',
                'De la definición de rapidez (distancia entre tiempo) se observa que x puede ser el producto de la velocidad media por el tiempo.',
                'Como la rapidez media se aproxima a v_i/2, la relación tentativa queda x = (v_i/2)·t.',
                'Esta proposición es una hipótesis viable; si se confirma con suficientes pruebas, puede llegar a considerarse una teoría científica.'
            ],
            fuente: 'Fisica_01.pdf, Cap. 1 — ¿Qué importancia tienen las matemáticas?'
        }
    ],
    ejemplosGlosario: [
        'Fisica_01.pdf, Cap. 1 — Ejemplo del automóvil que frena, usado para ilustrar el método científico.'
    ],

    /* ---------------- 5. EJERCICIOS INTERACTIVOS ---------------- */
    // Todos de tipo texto: el capítulo no aporta datos numéricos para calcular.
    ejercicios: [
        { enunciado: 'Las ciencias que se ocupan de la parte no viva de la naturaleza se llaman ciencias:', tipo: 'texto', respuesta: 'fisicas', placeholder: 'Respuesta' },
        { enunciado: 'La rama de la mecánica que estudia los cuerpos en reposo se llama:', tipo: 'texto', respuesta: 'estatica', placeholder: 'Respuesta' },
        { enunciado: 'La rama de la mecánica que se ocupa del movimiento y sus causas se llama:', tipo: 'texto', respuesta: 'dinamica', placeholder: 'Respuesta' },
        { enunciado: 'Según el texto, ¿cuál es el tema fundamental y más importante para el alumno principiante de física?', tipo: 'texto', respuesta: 'mecanica', placeholder: 'Respuesta' },
        { enunciado: 'Una explicación tentativa que aún no se ha comprobado suficientemente se llama:', tipo: 'texto', respuesta: 'hipotesis', placeholder: 'Respuesta' },
        { enunciado: 'Cuando una hipótesis se aplica muchas veces con éxito y resiste la prueba del tiempo, se convierte en:', tipo: 'texto', respuesta: 'teoria', placeholder: 'Respuesta' },
        { enunciado: 'Según el texto, la sucesión de hechos físicos que desemboca en un efecto se llama:', tipo: 'texto', respuesta: 'causa', placeholder: 'Respuesta' },
        { enunciado: 'La especialidad que combina física y química, mencionada como ejemplo de que no hay fronteras claras entre las ciencias físicas, se llama:', tipo: 'texto', respuesta: 'fisicoquimica', placeholder: 'Respuesta' },
        { enunciado: 'En la relación x = (vi/2)·t del ejemplo del automóvil, ¿qué variable representa la letra "t"?', tipo: 'texto', respuesta: 'tiempo', placeholder: 'Respuesta' }
    ],

    /* ---------------- 6. TEST DE OPCIÓN MÚLTIPLE ---------------- */
    quiz: [
        { pregunta: 'La física puede definirse como la ciencia que investiga los conceptos fundamentales de:', opciones: ['La materia, la energía y el espacio', 'Los seres vivos', 'Las leyes de la economía', 'La biología celular'], correcta: 'a' },
        { pregunta: '¿Cuál de estas ciencias se ocupa de los seres vivos?', opciones: ['Física', 'Biológica', 'Astrofísica', 'Geofísica'], correcta: 'b' },
        { pregunta: 'El estudio de la física aplicado a los cuerpos en reposo se llama:', opciones: ['Dinámica', 'Estática', 'Cinemática', 'Termodinámica'], correcta: 'b' },
        { pregunta: 'Para el científico, el ingeniero o el técnico, la función principal de las matemáticas es ser:', opciones: ['Una filosofía', 'Un arte', 'Una herramienta', 'Una ley'], correcta: 'c' },
        { pregunta: 'Una hipótesis que se ha aplicado el suficiente número de veces con éxito se convierte en:', opciones: ['Un dato', 'Una teoría científica', 'Una constante', 'Una unidad'], correcta: 'b' },
        { pregunta: 'Según los consejos del texto, ¿qué método de estudio es más eficaz?', opciones: ['Estudiar 20 horas el fin de semana', 'Estudiar una hora cada día de la semana', 'Estudiar sólo antes del examen', 'No tomar notas en clase'], correcta: 'b' },
        { pregunta: 'Según el texto, que existan especialidades como la biofísica o la fisicoquímica demuestra que:', opciones: ['Las ciencias físicas tienen fronteras muy definidas', 'No hay fronteras claras entre las distintas ciencias físicas', 'Son en realidad ciencias biológicas', 'Solo estudian organismos vivos'], correcta: 'b' },
        { pregunta: '¿Cuáles son los sinónimos de "cantidad de movimiento" que menciona el texto?', opciones: ['Rapidez y aceleración', 'Momento lineal e ímpetu', 'Trabajo y energía', 'Fuerza y causa'], correcta: 'b' },
        { pregunta: 'Según el texto, ¿quién tiene la responsabilidad final del aprendizaje del estudiante?', opciones: ['El maestro, como único responsable', 'El propio estudiante', 'La institución educativa', 'Los compañeros de clase'], correcta: 'b' },
        { pregunta: 'En la relación x = (v<sub>i</sub>/2)·t del ejemplo del automóvil, ¿qué representa la letra "x"?', opciones: ['La rapidez inicial', 'El tiempo transcurrido', 'La distancia de frenado', 'La aceleración'], correcta: 'c' }
    ],

    /* ---------------- 7. TARJETAS DE MEMORIA ---------------- */
    flashcards: [
        { frente: '¿Qué es la física?', dorso: 'La ciencia que investiga los conceptos fundamentales de la materia, la energía y el espacio, así como las relaciones entre ellos.' },
        { frente: 'Estática vs. dinámica', dorso: 'Estática: estudio de los cuerpos en reposo.<br>Dinámica: descripción del movimiento y sus causas.' },
        { frente: '¿Qué es una hipótesis viable?', dorso: 'Una proposición o relación tentativa que se plantea a partir de datos observados y que aún debe ponerse a prueba.' },
        { frente: '¿Qué es una teoría científica?', dorso: 'Una hipótesis viable que se ha aplicado el suficiente número de veces y ha resistido la prueba del tiempo.' },
        { frente: 'Sinónimos de "cantidad de movimiento"', dorso: 'Momento lineal e ímpetu.' },
        { frente: '¿Cómo definen causa y efecto los científicos?', dorso: 'La causa es la sucesión de hechos físicos que desembocan en un efecto.' }
    ],

    /* ---------------- 8. MODO PRÁCTICA (bancos de preguntas por nivel) ---------------- */
    practica: {
        facil: [
            { q: '¿Las ciencias biológicas se ocupan de los seres vivos o de la parte no viva de la naturaleza?', a: 'seres vivos', tipo: 'texto' },
            { q: '¿Qué rama de la física es el tema más importante para el alumno principiante?', a: 'mecanica', tipo: 'texto' },
            { q: '¿La estática estudia cuerpos en reposo o en movimiento?', a: 'reposo', tipo: 'texto' },
            { q: '¿La dinámica estudia cuerpos en reposo o en movimiento?', a: 'movimiento', tipo: 'texto' },
            { q: 'Menciona un sinónimo de "cantidad de movimiento" según el texto.', a: 'momento lineal', tipo: 'texto' },
            { q: '¿La función principal de las matemáticas para el científico es ser una ley o una herramienta?', a: 'herramienta', tipo: 'texto' },
            { q: '¿La cantidad de movimiento tiene como sinónimo "ímpetu"? (si/no)', a: 'si', tipo: 'texto' },
            { q: '¿Qué letra usa el texto para representar la rapidez inicial en el ejemplo del automóvil?', a: 'vi', tipo: 'texto' }
        ],
        medio: [
            { q: 'Según el ejemplo del texto, la rapidez media de un automóvil que frena uniformemente se aproxima a:', a: 'vi/2', tipo: 'texto' },
            { q: 'En la relación x = (vi/2)·t, ¿qué representa la letra x?', a: 'distancia de frenado', tipo: 'texto' },
            { q: '¿Qué palabra usa el texto para describir el resultado de una hipótesis que ha resistido la prueba del tiempo?', a: 'teoria', tipo: 'texto' },
            { q: 'Según el texto, ¿el efecto de las fuerzas interesa principalmente a quién al construir un puente?', a: 'ingeniero', tipo: 'texto' },
            { q: '¿Qué palabra clave, además de trabajo, energía y cantidad de movimiento, recomienda reconocer el texto?', a: 'fuerza', tipo: 'texto' },
            { q: 'Según el texto, ¿es eficaz estudiar todo poco antes del examen? (si/no)', a: 'no', tipo: 'texto' },
            { q: '¿Qué palabra usa el texto para la sucesión de hechos físicos que desembocan en un efecto?', a: 'causa', tipo: 'texto' },
            { q: 'Menciona una especialidad que combina física y química, según el texto.', a: 'fisicoquimica', tipo: 'texto' }
        ],
        dificil: [
            { q: '¿Qué tres variables se registran en las pruebas de frenado descritas en el texto?', a: 'rapidez inicial, distancia y tiempo', tipo: 'texto' },
            { q: 'Según el texto, ¿de quién es la responsabilidad final del aprendizaje?', a: 'del estudiante', tipo: 'texto' },
            { q: '¿Qué recomienda el texto hacer inmediatamente después de la clase de física?', a: 'trabajar con ejemplos', tipo: 'texto' },
            { q: 'Según el texto, ¿qué debe hacerse si un puente terminado llegara a fallar?', a: 'analizar la causa de la falla', tipo: 'texto' },
            { q: '¿Qué palabra usa el texto para la explicación tentativa antes de convertirse en teoría?', a: 'hipotesis', tipo: 'texto' },
            { q: 'Según el texto, ¿qué recurso sugiere establecer con otro estudiante para no perder información de clase?', a: 'sistema de companerismo', tipo: 'texto' },
            { q: 'En la relación x = (vi/2)·t, ¿qué representa la letra "t"?', a: 'tiempo', tipo: 'texto' },
            { q: 'Al elegir la estructura de un puente, ¿al ingeniero le interesa principalmente la causa o el efecto de las fuerzas?', a: 'efecto', tipo: 'texto' }
        ]
    },

    /* ---------------- 9. RESUMEN DEL CAPÍTULO ---------------- */
    resumenPuntos: [
        'La física estudia la materia, la energía y el espacio, y se distingue de las ciencias biológicas, que se ocupan de los seres vivos.',
        'La mecánica —el tema más importante para el principiante— se divide en estática (cuerpos en reposo) y dinámica (movimiento y sus causas).',
        'El científico y el ingeniero describen las cantidades físicas en términos de causa y efecto, como en el ejemplo del análisis de la falla de un puente.',
        'Las matemáticas son la herramienta principal para expresar relaciones físicas con precisión, como en el ejemplo de la distancia de frenado de un automóvil.',
        'Una hipótesis viable es una explicación tentativa; cuando resiste la prueba del tiempo tras aplicarse muchas veces, se convierte en teoría científica.',
        'El aprendizaje eficaz en física requiere responsabilidad del estudiante, estudio diario (no solo antes del examen), resolución activa de problemas y buena organización.'
    ],
    resumenErrores: [
        ['Confundir estática con dinámica', 'Estática = cuerpos en reposo; dinámica = movimiento y sus causas'],
        ['Creer que las ciencias biológicas y físicas no tienen diferencia', 'Las biológicas estudian los seres vivos; las físicas, la parte no viva de la naturaleza'],
        ['Confundir hipótesis con teoría', 'Hipótesis = explicación tentativa; teoría = hipótesis que ha resistido la prueba del tiempo tras aplicarse muchas veces'],
        ['Pensar que estudiar todo poco antes del examen funciona', 'El texto señala explícitamente que "estudiar todo poco antes del examen no funciona"'],
        ['Creer que el maestro es responsable del aprendizaje', 'El texto afirma que la responsabilidad final del aprendizaje corresponde al estudiante']
    ]
});
