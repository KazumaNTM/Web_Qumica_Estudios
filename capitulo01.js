/* ============================================================================
   CAPÍTULO 1 — Medición y las Propiedades de la Materia
   Este archivo SOLO contiene contenido (texto, preguntas, respuestas).
   No hay aquí ni una línea de diseño ni de lógica: todo eso vive en index.html
   (el motor). Si necesitas corregir un dato de química, este es el único
   archivo que hay que tocar; si necesitas cambiar cómo se ve la página,
   nunca es aquí.
   ============================================================================ */
registrarCapitulo({
    numero: 1,
    titulo: 'Medición y las Propiedades de la Materia',

    /* ---------------- 1. OBJETIVOS DE APRENDIZAJE ---------------- */
    objetivos: [
        'Resumir los pasos del método científico y distinguir entre datos cualitativos y cuantitativos. <span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 4</span></span>',
        'Usar los prefijos de las unidades SI; emplear mediciones como masa, volumen y densidad en cálculos; realizar conversiones entre las distintas escalas de temperatura. <span class="citation-tag" tabindex="0"><sup>[3]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 6</span></span>',
        'Emplear la notación científica al manejar números muy grandes o muy pequeños; aplicar las reglas de cifras significativas en los cálculos; discriminar entre exactitud y precisión; diferenciar entre errores sistemáticos y errores aleatorios. <span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 13</span></span>',
        'Manipular factores de conversión en problemas de análisis dimensional y resolver problemas utilizando este método. <span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 20</span></span>',
        'Estimar respuestas aproximadas a problemas que no tienen una solución numérica exacta. <span class="citation-tag" tabindex="0"><sup>[11]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 24</span></span>',
        'Clasificar la materia como sustancias o mezclas; diferenciar entre mezclas homogéneas y heterogéneas; categorizar las sustancias como elementos o compuestos. <span class="citation-tag" tabindex="0"><sup>[12]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 25</span></span>',
        'Comparar y contrastar los tres estados comunes de la materia. <span class="citation-tag" tabindex="0"><sup>[14]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 28</span></span>',
        'Evaluar las propiedades de la materia como químicas o físicas; identificar las propiedades de la materia como extensivas o intensivas. <span class="citation-tag" tabindex="0"><sup>[15]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 30</span></span>'
    ],

    /* ---------------- 2. CONCEPTOS CLAVE ---------------- */
    conceptos: [
        { titulo: '1.1 La Química: El Estudio de una Ciencia para el Siglo XXI', html:
            '<p>La <strong>química</strong> es el estudio de la materia y los cambios que esta experimenta. Es llamada la "ciencia central" porque es esencial para estudiantes de biología, física, geología, ecología y muchas otras disciplinas. <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 2</span></span></p>' +
            '<p>Los químicos suelen alternar entre el <strong>mundo macroscópico</strong> (lo que podemos ver, tocar y medir directamente) y el <strong>mundo microscópico</strong> (átomos y moléculas que no podemos experimentar sin tecnología moderna e imaginación). Por ejemplo, al observar clavos oxidados (macroscópico), un químico piensa en los átomos de hierro y las moléculas de oxígeno que reaccionan para formar Fe<sub>2</sub>O<sub>3</sub> (microscópico). <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 2-3</span></span></p>'
        },
        { titulo: '1.2 El Método Científico', html:
            '<p>El <strong>método científico</strong> es un enfoque sistemático de investigación. Sus pasos son: definir el problema, realizar experimentos y recopilar <strong>datos</strong> (que pueden ser <strong>cualitativos</strong>, observaciones generales, o <strong>cuantitativos</strong>, números obtenidos por medición), interpretar los datos formulando una <strong>hipótesis</strong> (explicación tentativa), y diseñar nuevos experimentos para probarla. <span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 4</span></span></p>' +
            '<p>Una <strong>ley</strong> es un enunciado verbal o matemático conciso de una relación entre fenómenos que es siempre la misma bajo las mismas condiciones (ej.: F = ma). Una <strong>teoría</strong> es un principio unificador que explica un conjunto de hechos y/o las leyes basadas en ellos; las hipótesis que sobreviven muchas pruebas experimentales pueden evolucionar hacia teorías. La ciencia rara vez avanza de manera rígida y escalonada. <span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 4-6</span></span></p>'
        },
        { titulo: '1.3 Medición', html:
            '<p>El <strong>Sistema Internacional de Unidades (SI)</strong> define siete unidades base: metro (longitud), kilogramo (masa), segundo (tiempo), amperio (corriente eléctrica), kelvin (temperatura), mol (cantidad de sustancia) y candela (intensidad luminosa). Las unidades SI se modifican con prefijos decimales (kilo- = 10<sup>3</sup>, centi- = 10<sup>−2</sup>, mili- = 10<sup>−3</sup>, micro- = 10<sup>−6</sup>, nano- = 10<sup>−9</sup>, entre otros). <span class="citation-tag" tabindex="0"><sup>[3]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 7</span></span></p>' +
            '<p><strong>Masa</strong> vs. <strong>peso</strong>: la masa es una medida de la cantidad de materia en un objeto y es constante; el peso es la fuerza que la gravedad ejerce sobre un objeto y varía según la ubicación (una manzana pesa un sexto en la Luna). El proceso de medir la masa se llama <em>pesar</em>. <span class="citation-tag" tabindex="0"><sup>[4]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 8</span></span></p>' +
            '<p><strong>Volumen:</strong> la unidad derivada del SI es el metro cúbico (m<sup>3</sup>); el <strong>litro (L)</strong> —no una unidad SI— equivale a 1 dm<sup>3</sup> = 1000 mL, y 1 mL = 1 cm<sup>3</sup>. <strong>Densidad:</strong> d = m/V; comúnmente se expresa en g/cm<sup>3</sup> o g/mL para sólidos y líquidos, y en g/L para gases. <span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 9</span></span></p>' +
            '<p><strong>Escalas de temperatura:</strong> Fahrenheit (°F), Celsius (°C) y Kelvin (K, sin el símbolo de grado). El kelvin es la escala absoluta del SI: 0 K es la temperatura más baja teóricamente alcanzable y nunca puede ser negativa. El agua se congela a 0°C/32°F y hierve a 100°C/212°F. <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 11</span></span></p>'
        },
        { titulo: '1.4 Manejo de Números', html:
            '<p><strong>Notación científica:</strong> los números se expresan como N × 10<sup>n</sup>, donde N está entre 1 y 10 y n es un entero positivo o negativo, para manejar cifras muy grandes o muy pequeñas sin errores de escritura. <span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 13-14</span></span></p>' +
            '<p><strong>Cifras significativas:</strong> son los dígitos con significado en una medición o cálculo, e indican el margen de error. Reglas clave: los dígitos distintos de cero siempre son significativos; los ceros entre dígitos distintos de cero son significativos; los ceros a la izquierda del primer dígito distinto de cero no son significativos; si el número es mayor que 1, todos los ceros a la derecha del punto decimal cuentan; en números sin punto decimal, los ceros finales pueden o no ser significativos (ambigüedad que se resuelve con notación científica). En suma/resta, el resultado no puede tener más decimales que el dato con menos decimales; en multiplicación/división, el resultado se redondea al número con menos cifras significativas. Los números exactos (por definición o por conteo) tienen un número infinito de cifras significativas. <span class="citation-tag" tabindex="0"><sup>[8]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 15-17</span></span></p>' +
            '<p><strong>Exactitud</strong> indica qué tan cerca está una medición del valor verdadero; <strong>precisión</strong> indica qué tan cerca concuerdan entre sí varias mediciones de la misma cantidad. Los <strong>errores sistemáticos</strong> ocurren de manera predecible y desplazan constantemente el valor medido del valor verdadero (baja exactitud); los <strong>errores aleatorios</strong> no son predecibles y varían en cada medición (baja precisión). Es posible tener mediciones precisas pero inexactas. <span class="citation-tag" tabindex="0"><sup>[9]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 18-19</span></span></p>'
        },
        { titulo: '1.5 Análisis Dimensional para la Resolución de Problemas', html:
            '<p>El <strong>análisis dimensional</strong> (o método del factor-etiqueta) usa la relación entre distintas unidades que expresan la misma magnitud física para convertir entre ellas. Un <strong>factor de conversión</strong> es una fracción igual a 1 (ej.: 1 in/2,54 cm). La relación general es: cantidad dada × factor de conversión = cantidad deseada, donde las unidades no deseadas se cancelan. Cuando la conversión involucra un cambio de volumen o área, el factor de conversión de longitud debe elevarse al cubo o al cuadrado, respectivamente. <span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 20-21</span></span></p>'
        },
        { titulo: '1.6 Resolución de Problemas del Mundo Real: Información, Suposiciones y Simplificaciones', html:
            '<p>No siempre es posible resolver un problema numérico de forma exacta; a veces se deben hacer "estimaciones aproximadas" (cálculos rápidos y sencillos, órdenes de magnitud). Resolver problemas reales (medicina, energía, agricultura) exige determinar qué información se necesita y dónde encontrarla, formular un plan y hacer suposiciones. Estas suposiciones tienen un costo: la exactitud de la respuesta se reduce a medida que se simplifica más el problema. <span class="citation-tag" tabindex="0"><sup>[11]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 24</span></span></p>'
        },
        { titulo: '1.7 Clasificaciones de la Materia', html:
            '<p>La <strong>materia</strong> es todo lo que ocupa espacio y tiene masa. Una <strong>sustancia</strong> es una forma de materia con composición definida y propiedades distintivas (agua, oro, oxígeno). Una <strong>mezcla</strong> es una combinación de dos o más sustancias que conservan su identidad y no tiene composición constante; puede ser <strong>homogénea</strong> (composición uniforme en toda la muestra, ej. azúcar disuelta en agua) o <strong>heterogénea</strong> (composición no uniforme, ej. arena mezclada con limaduras de hierro). Cualquier mezcla puede separarse por <strong>medios físicos</strong> sin cambiar la identidad de sus componentes. <span class="citation-tag" tabindex="0"><sup>[12]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 25-26</span></span></p>' +
            '<p>Un <strong>elemento</strong> es una sustancia que no puede separarse en sustancias más simples por métodos químicos (118 elementos identificados). Un <strong>compuesto</strong> es una sustancia formada por átomos de dos o más elementos químicamente unidos en proporciones fijas (ej. agua = 2 partes de hidrógeno y 1 de oxígeno); a diferencia de las mezclas, los compuestos solo pueden separarse por <strong>medios químicos</strong>. <span class="citation-tag" tabindex="0"><sup>[13]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 26-27</span></span></p>'
        },
        { titulo: '1.8 Los Tres Estados Comunes de la Materia', html:
            '<p>Toda sustancia puede existir, en principio, en tres estados: <strong>sólido</strong> (átomos/moléculas muy juntos y ordenados, con poca libertad de movimiento), <strong>líquido</strong> (átomos/moléculas juntos pero pueden desplazarse unos sobre otros) y <strong>gas</strong> (átomos/moléculas separados por distancias grandes en comparación con su tamaño). Estos estados se interconvierten sin cambiar la composición de la sustancia mediante calentamiento (fusión en el <em>punto de fusión</em>, luego ebullición en el <em>punto de ebullición</em>) o enfriamiento (condensación y luego congelación). <span class="citation-tag" tabindex="0"><sup>[14]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 28-29</span></span></p>' +
            '<p>Existen además otras formas de materia, como el <strong>plasma</strong> (partículas de alta energía, neutras e iones; muy común en el universo, como en las estrellas) y el <strong>condensado de Bose-Einstein (BEC)</strong>, predicho en 1924 por Bose y Einstein y confirmado en 1995 al enfriar átomos de rubidio a casi el cero absoluto. <span class="citation-tag" tabindex="0"><sup>[14]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 29</span></span></p>'
        },
        { titulo: '1.9 Propiedades Físicas y Químicas de la Materia', html:
            '<p>Una <strong>propiedad física</strong> puede medirse y observarse sin cambiar la composición o identidad de una sustancia (color, punto de fusión, punto de ebullición). Una <strong>propiedad química</strong> solo puede observarse llevando a cabo un <strong>cambio químico</strong> (ej. "el hidrógeno gaseoso arde en oxígeno para formar agua"); tras el cambio, la sustancia original desaparece y queda una sustancia distinta que no puede recuperarse por medios físicos. <span class="citation-tag" tabindex="0"><sup>[15]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 30</span></span></p>' +
            '<p>Toda propiedad medible es <strong>extensiva</strong> (su valor depende de la cantidad de materia presente y es aditiva, como la masa o el volumen) o <strong>intensiva</strong> (su valor no depende de la cantidad de materia, como la densidad o la temperatura, y no es aditiva). <span class="citation-tag" tabindex="0"><sup>[16]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 30-31</span></span></p>'
        }
    ],
    conceptosGlosario: [
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 2-3 — La química como ciencia; mundo macroscópico y microscópico.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 4-6 — El método científico: hipótesis, ley y teoría.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 7 — Unidades base y prefijos del SI.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 8 — Masa y peso.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 9 — Volumen y densidad.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 11 — Escalas de temperatura (Fahrenheit, Celsius, Kelvin).',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 13-14 — Notación científica.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 15-17 — Reglas de cifras significativas.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 18-19 — Exactitud, precisión y tipos de error.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 20-21 — Análisis dimensional.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 24 — Resolución de problemas del mundo real.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 25-26 — Sustancias y mezclas.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 26-27 — Elementos y compuestos.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 28-29 — Los tres estados comunes de la materia, plasma y BEC.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 30 — Propiedades físicas y químicas.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 30-31 — Propiedades extensivas e intensivas.'
    ],

    /* ---------------- 3. FÓRMULAS Y RELACIONES CLAVE ---------------- */
    formulas: [
        {
            box: 'Densidad: d = m / V',
            vars: 'd = densidad · m = masa · V = volumen',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, Ec. 1.1, pág. 9</span></span>'
        },
        {
            box: '°C = (°F − 32°F) × (5°C / 9°F)',
            vars: 'Conversión de grados Fahrenheit a grados Celsius',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, Ec. 1.2, pág. 11</span></span>'
        },
        {
            box: '°F = (9°F / 5°C) × (°C) + 32°F',
            vars: 'Conversión de grados Celsius a grados Fahrenheit',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, Ec. 1.3, pág. 11</span></span>'
        },
        {
            box: 'K = (°C + 273,15°C) × (1 K / 1°C)',
            vars: 'Conversión de grados Celsius a kelvin; 0 K es el cero absoluto',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, Ec. 1.4, pág. 11</span></span>'
        }
    ],
    formulasTabla: {
        titulo: 'Prefijos usados con las unidades SI',
        headers: ['Prefijo', 'Símbolo', 'Significado', 'Ejemplo'],
        filas: [
            ['kilo-', 'k', '1000, o 10<sup>3</sup>', '1 kilómetro (km) = 1 × 10<sup>3</sup> m'],
            ['deci-', 'd', '1/10, o 10<sup>−1</sup>', '1 decímetro (dm) = 0,1 m'],
            ['centi-', 'c', '1/100, o 10<sup>−2</sup>', '1 centímetro (cm) = 0,01 m'],
            ['mili-', 'm', '1/1000, o 10<sup>−3</sup>', '1 milímetro (mm) = 0,001 m'],
            ['micro-', 'µ', '1/1.000.000, o 10<sup>−6</sup>', '1 micrómetro (µm) = 1 × 10<sup>−6</sup> m'],
            ['nano-', 'n', '1/1.000.000.000, o 10<sup>−9</sup>', '1 nanómetro (nm) = 1 × 10<sup>−9</sup> m']
        ],
        fuente: '<span class="citation-tag" tabindex="0"><sup>[3]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 1, Tabla 1.2, pág. 8</span></span>'
    },
    formulasGlosario: [
        'Chang &amp; Overby, 15ª Ed., Cap. 1, Ec. 1.1, pág. 9 — Ecuación de la densidad.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, Ec. 1.2-1.4, pág. 11 — Conversiones entre escalas de temperatura.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, Tabla 1.2, pág. 8 — Prefijos de las unidades SI.'
    ],

    /* ---------------- 4. EJEMPLOS RESUELTOS ---------------- */
    ejemplos: [
        {
            titulo: 'Ejemplo 1.1 — Cálculo de densidad',
            problema: 'Un lingote de oro tiene una masa de 301 g y un volumen de 15,6 cm³. Calcula la densidad del oro.',
            solucionLineas: [
                'Se usa d = m/V.',
                'd = 301 g / 15,6 cm³',
                'd = 19,3 g/cm³'
            ],
            fuente: 'Chang &amp; Overby, pág. 10.'
        },
        {
            titulo: 'Ejemplo 1.2 — Masa a partir de la densidad',
            problema: 'La densidad del mercurio, el único metal líquido a temperatura ambiente, es 13,6 g/mL. Calcula la masa de 5,50 mL del líquido.',
            solucionLineas: [
                'Se despeja m de d = m/V: m = d × V.',
                'm = 13,6 g/mL × 5,50 mL',
                'm = 74,8 g'
            ],
            fuente: 'Chang &amp; Overby, pág. 10.'
        },
        {
            titulo: 'Ejemplo 1.3 — Conversiones de temperatura',
            problema: 'Convierte: (a) −141°C (transición a superconductor) a grados Fahrenheit; (b) −452°F (punto de ebullición del helio) a grados Celsius; (c) −38,9°C (punto de fusión del mercurio) a kelvin.',
            solucionLineas: [
                '(a) (9°F/5°C) × (−141°C) + 32°F = −222°F.',
                '(b) (−452°F − 32°F) × (5°C/9°F) = −269°C.',
                '(c) (−38,9°C + 273,15°C) × (1 K/1°C) = 234,3 K.'
            ],
            fuente: 'Chang &amp; Overby, pág. 12-13.'
        },
        {
            titulo: 'Ejemplo 1.4 — Cifras significativas',
            problema: 'Determina el número de cifras significativas en: (a) 394 cm, (b) 5,03 g, (c) 0,714 m, (d) 0,052 kg, (e) 2,720 × 10²² átomos, (f) 3000 mL.',
            solucionLineas: [
                '(a) Tres, cada dígito es distinto de cero.',
                '(b) Tres, los ceros entre dígitos distintos de cero son significativos.',
                '(c) Tres, los ceros a la izquierda del primer dígito distinto de cero no cuentan.',
                '(d) Dos, misma razón que en (c).',
                '(e) Cuatro, el número es mayor que uno, así que todos los ceros a la derecha del punto decimal cuentan.',
                '(f) Caso ambiguo: puede tener cuatro, tres, dos o una cifra significativa; se necesita notación científica para precisar.'
            ],
            fuente: 'Chang &amp; Overby, pág. 16.'
        },
        {
            titulo: 'Ejemplo 1.5 — Cifras significativas en operaciones aritméticas',
            problema: 'Realiza las siguientes operaciones con el número correcto de cifras significativas: (a) 12.343,2 g + 0,1893 g; (b) 55,67 L − 2,386 L.',
            solucionLineas: [
                '(a) 12.343,2 g + 0,1893 g = 12.343,3893 g → se redondea a 12.343,4 g.',
                '(b) 55,67 L − 2,386 L = 53,284 L → se redondea a 53,28 L.'
            ],
            fuente: 'Chang &amp; Overby, pág. 17-18.'
        },
        {
            titulo: 'Ejemplo 1.6 — Análisis dimensional',
            problema: 'La ingesta diaria promedio de glucosa de una persona es 0,0833 libras (lb). ¿Cuál es esta masa en miligramos (mg)? (1 lb = 453,6 g.)',
            solucionLineas: [
                'Secuencia de conversión: libras → gramos → miligramos.',
                '? mg = 0,0833 lb × (453,6 g / 1 lb) × (1 mg / 1 × 10⁻³ g)',
                '? mg = 3,78 × 10⁴ mg'
            ],
            fuente: 'Chang &amp; Overby, pág. 21-22.'
        },
        {
            titulo: 'Ejemplo 1.9 — Estimación en el mundo real',
            problema: 'Un lápiz "de grafito" moderno está compuesto principalmente de grafito. Estima la masa del núcleo de grafito en un lápiz No. 2 estándar sin sacar punta.',
            solucionLineas: [
                'Se aproxima el núcleo del lápiz como un cilindro de longitud ≈18 cm y diámetro ≈2 mm (0,2 cm).',
                'V = π(0,2 cm/2)² × 18 cm = 0,57 cm³.',
                'Usando la densidad del grafito (2,2 g/cm³, Tabla 1.3): m = d × V = 2,2 g/cm³ × 0,57 cm³ ≈ 1 g.'
            ],
            fuente: 'Chang &amp; Overby, pág. 24-25.'
        }
    ],
    ejemplosGlosario: [
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 10 — Ejemplos 1.1 y 1.2: cálculos de densidad.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 12-13 — Ejemplo 1.3: conversiones entre escalas de temperatura.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 16 — Ejemplo 1.4: identificación de cifras significativas.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 17-18 — Ejemplo 1.5: cifras significativas en operaciones aritméticas.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 21-22 — Ejemplo 1.6: análisis dimensional (libras a miligramos).',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 24-25 — Ejemplo 1.9: estimación del mundo real (masa de un lápiz).'
    ],

    /* ---------------- 5. EJERCICIOS INTERACTIVOS ----------------
       tipo 'numero' -> se compara como número (checkExercise)
       tipo 'texto'  -> se compara como texto exacto, sensible a mayúsculas (checkExerciseText) */
    ejercicios: [
        { enunciado: 'Un lingote de oro tiene una masa de 301 g y un volumen de 15,6 cm³. ¿Cuál es su densidad, en g/cm³?', tipo: 'numero', respuesta: 19.3, placeholder: 'Respuesta' },
        { enunciado: 'Una pieza de platino con densidad 21,5 g/cm³ tiene un volumen de 4,49 cm³. ¿Cuál es su masa, en g?', tipo: 'numero', respuesta: 96.5, placeholder: 'Respuesta' },
        { enunciado: 'La densidad del ácido sulfúrico en cierta batería de auto es 1,41 g/mL. ¿Cuál es la masa, en g, de 242 mL del líquido?', tipo: 'numero', respuesta: 341, placeholder: 'Respuesta' },
        { enunciado: 'Un rollo de papel aluminio tiene una masa de 1,07 kg. ¿Cuál es su masa en libras (lb)? (1 lb = 453,6 g)', tipo: 'numero', respuesta: 2.36, placeholder: 'Respuesta' },
        { enunciado: 'La densidad del litio, el metal menos denso conocido, es 5,34 × 10² kg/m³. ¿Cuál es esta densidad en g/cm³?', tipo: 'numero', respuesta: 0.534, placeholder: 'Respuesta' },
        { enunciado: 'El punto de fusión del adamantano es 518°F. ¿Cuál es este punto de fusión en kelvin?', tipo: 'numero', respuesta: 543, placeholder: 'Respuesta' },
        { enunciado: '¿Cuántas cifras significativas tiene la medición 2,720 × 10²² átomos?', tipo: 'numero', respuesta: 4, placeholder: 'Respuesta' },
        { enunciado: 'El volumen de un cuarto es 1,08 × 10⁸ dm³. ¿Cuál es este volumen en m³? (responde en notación normal, sin potencias)', tipo: 'texto', respuesta: '108000', placeholder: 'Respuesta' }
    ],

    /* ---------------- 6. TEST DE OPCIÓN MÚLTIPLE ----------------
       correcta: 'a' | 'b' | 'c' | 'd' según la posición dentro de "opciones" */
    quiz: [
        { pregunta: '¿Cuál de las siguientes afirmaciones sobre una muestra de líquido es una observación cualitativa?', opciones: ['El volumen es 15,4 mL', 'La muestra es un líquido amarillo claro', 'La masa es 13,2 g', 'La densidad es 1,00 g/mL'], correcta: 'b' },
        { pregunta: '¿Cuál es la unidad SI base de la masa?', opciones: ['Gramo', 'Libra', 'Kilogramo', 'Onza'], correcta: 'c' },
        { pregunta: 'La escala Kelvin es la escala de temperatura absoluta porque:', opciones: ['Usa el símbolo de grado (°)', '0 K es la temperatura más baja teóricamente alcanzable y nunca es negativa', 'Se basa en el comportamiento del agua', 'Es igual a la escala Fahrenheit'], correcta: 'b' },
        { pregunta: 'El número 400 cm, escrito sin notación científica, tiene un número de cifras significativas que es:', opciones: ['Siempre una', 'Siempre dos', 'Siempre tres', 'Ambiguo; se necesita notación científica para saberlo'], correcta: 'd' },
        { pregunta: '¿Cuál de los siguientes es un ejemplo de cambio químico?', opciones: ['Hervir agua', 'El hierro se oxida y forma óxido (Fe₂O₃)', 'Fundir un cubo de hielo', 'Disolver azúcar en agua'], correcta: 'b' },
        { pregunta: 'La densidad es una propiedad:', opciones: ['Extensiva', 'Intensiva', 'Cualitativa', 'Química'], correcta: 'b' }
    ],

    /* ---------------- 7. TARJETAS DE MEMORIA ---------------- */
    flashcards: [
        { frente: '¿Qué es una propiedad física?', dorso: 'Una propiedad que puede medirse y observarse sin cambiar la composición o identidad de una sustancia (ej. color, punto de fusión).' },
        { frente: '¿Qué es una propiedad química?', dorso: 'Una propiedad que solo puede observarse llevando a cabo un cambio químico, en el cual la sustancia original se transforma en otra distinta (ej. la combustión del hidrógeno).' },
        { frente: 'Exactitud vs. Precisión', dorso: 'Exactitud: qué tan cerca está una medición del valor verdadero.<br>Precisión: qué tan cerca concuerdan entre sí varias mediciones repetidas.' },
        { frente: 'Fórmula de la densidad', dorso: 'd = m / V (densidad = masa / volumen)' },
        { frente: 'Conversión de Celsius a Kelvin', dorso: 'K = °C + 273,15 (0 K es el cero absoluto, la temperatura más baja teóricamente alcanzable)' },
        { frente: 'Mezcla homogénea vs. heterogénea', dorso: 'Homogénea: composición uniforme en toda la muestra (ej. azúcar disuelta en agua).<br>Heterogénea: composición no uniforme (ej. arena con limaduras de hierro).' },
        { frente: 'Propiedad extensiva vs. intensiva', dorso: 'Extensiva: depende de la cantidad de materia y es aditiva (masa, volumen).<br>Intensiva: no depende de la cantidad de materia y no es aditiva (densidad, temperatura).' }
    ],

    /* ---------------- 8. MODO PRÁCTICA (bancos de preguntas por nivel) ---------------- */
    practica: {
        facil: [
            { q: '¿Cuál es la unidad SI base de longitud?', a: 'metro', tipo: 'texto' },
            { q: '¿Cuál es la unidad SI base de la masa?', a: 'kilogramo', tipo: 'texto' },
            { q: '¿Cuántos mililitros hay en 1 litro?', a: '1000', tipo: 'texto' },
            { q: '¿Qué escala de temperatura no usa el símbolo de grado (°)?', a: 'kelvin', tipo: 'texto' },
            { q: '¿Cuál es el punto de congelación del agua en grados Celsius?', a: '0', tipo: 'texto' },
            { q: '¿Cómo se llama el proceso de medir la masa con una balanza?', a: 'pesar', tipo: 'texto' },
            { q: '¿Cuántas cifras significativas tiene la medición 845 cm?', a: '3', tipo: 'texto' },
            { q: '¿Qué prefijo SI representa 10⁻³?', a: 'mili', tipo: 'texto' }
        ],
        medio: [
            { q: 'Convierte 25°C a grados Fahrenheit', a: '77', tipo: 'texto' },
            { q: '¿Cuántos gramos hay en 1 kilogramo?', a: '1000', tipo: 'texto' },
            { q: 'Según la Tabla 1.3, la densidad del agua a 25°C es (en g/cm³):', a: '1.00', tipo: 'texto' },
            { q: 'Según la Tabla 1.3, ¿cuál es la densidad del oro, en g/cm³?', a: '19.3', tipo: 'texto' },
            { q: '¿Cuál es el elemento más denso conocido?', a: 'osmio', tipo: 'texto' },
            { q: 'Convierte 0°C a kelvin', a: '273.15', tipo: 'texto' },
            { q: '¿Cuántas cifras significativas tiene 40.501 kg?', a: '5', tipo: 'texto' },
            { q: '¿Qué tipo de mezcla es el aire, homogénea o heterogénea?', a: 'homogénea', tipo: 'texto' }
        ],
        dificil: [
            { q: 'Convierte −452°F (punto de ebullición del helio) a grados Celsius', a: '-269', tipo: 'texto' },
            { q: 'Convierte −38,9°C (punto de fusión del mercurio) a kelvin', a: '234.3', tipo: 'texto' },
            { q: 'Calcula 12.343,2 g + 0,1893 g con las cifras significativas correctas', a: '12343.4', tipo: 'texto' },
            { q: 'Calcula 55,67 L − 2,386 L con las cifras significativas correctas', a: '53.28', tipo: 'texto' },
            { q: 'Convierte 275 L a m³', a: '0.275', tipo: 'texto' },
            { q: 'Convierte la densidad 0,808 g/cm³ a kg/m³', a: '808', tipo: 'texto' },
            { q: 'Una persona ingiere 0,0833 lb de glucosa al día (1 lb = 453,6 g). ¿Cuántos mg son?', a: '37800', tipo: 'texto' },
            { q: 'Calcula la masa, en g, de 5,50 mL de mercurio (densidad = 13,6 g/mL)', a: '74.8', tipo: 'texto' }
        ]
    },

    /* ---------------- 9. RESUMEN DEL CAPÍTULO ---------------- */
    resumenPuntos: [
        'La química es el estudio de la materia y los cambios que experimenta; los químicos alternan entre observación (mundo macroscópico), representación (símbolos y ecuaciones) e interpretación (mundo microscópico de átomos y moléculas).',
        'El método científico es un proceso sistemático de observación, recopilación de datos (cualitativos y cuantitativos), formulación de hipótesis, y desarrollo de leyes y teorías.',
        'Las mediciones científicas usan las unidades base del Sistema Internacional (SI): metro, kilogramo, segundo, ampere, kelvin, mol y candela, modificadas por prefijos decimales.',
        'La densidad (d = m/V) es una magnitud derivada; las escalas de temperatura Fahrenheit, Celsius y Kelvin se relacionan mediante ecuaciones de conversión específicas.',
        'La notación científica y las cifras significativas permiten manejar números muy grandes o pequeños y expresar la incertidumbre de una medición.',
        'La exactitud indica qué tan cerca está una medición del valor verdadero; la precisión indica qué tan reproducibles son las mediciones entre sí; los errores pueden ser sistemáticos o aleatorios.',
        'El análisis dimensional (método del factor-etiqueta) permite convertir unidades cancelando las unidades no deseadas mediante factores de conversión.',
        'Resolver problemas del mundo real a menudo exige hacer suposiciones y simplificaciones, lo que reduce la exactitud de la respuesta obtenida.',
        'La materia se clasifica en sustancias (elementos y compuestos, separables solo por medios químicos) y mezclas (homogéneas y heterogéneas, separables por medios físicos).',
        'La materia existe en tres estados comunes —sólido, líquido y gas— interconvertibles mediante cambios de temperatura; también existen otros estados como el plasma y el condensado de Bose-Einstein.',
        'Las propiedades físicas se observan sin cambiar la identidad de una sustancia; las propiedades químicas solo se demuestran mediante un cambio químico. Las propiedades pueden ser extensivas (dependen de la cantidad de materia) o intensivas (no dependen de ella).'
    ],
    resumenErrores: [
        ['Confundir masa con peso', 'La masa es constante y no depende de la ubicación; el peso es la fuerza de la gravedad sobre un objeto y sí varía'],
        ['Reportar cifras significativas incorrectas al sumar o restar', 'El resultado no puede tener más decimales que el dato con menos decimales'],
        ['Reportar cifras significativas incorrectas al multiplicar o dividir', 'El resultado se redondea al número con menos cifras significativas de los datos originales'],
        ['Confundir exactitud con precisión', 'Exactitud = cercanía al valor verdadero; precisión = concordancia entre mediciones repetidas entre sí'],
        ['Usar la fórmula de conversión de temperatura equivocada', 'Recordar: °C = (°F − 32) × 5/9 y K = °C + 273,15'],
        ['Creer que un compuesto es lo mismo que una mezcla', 'Un compuesto tiene composición fija y solo se separa por medios químicos; una mezcla no tiene composición constante y se separa por medios físicos'],
        ['Olvidar elevar al cuadrado o al cubo el factor de conversión al convertir áreas o volúmenes', 'Si la unidad original está elevada a una potencia, el factor de conversión debe elevarse a esa misma potencia']
    ],
    resumenGlosario: [
        'Chang &amp; Overby, Chemistry 15ª Ed., Cap. 1, pág. 2-3 — La química y los mundos macroscópico y microscópico.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 4-6 — El método científico, hipótesis, leyes y teorías.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 7-9 — Unidades SI, masa, peso, volumen y densidad.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 11 — Escalas de temperatura y sus conversiones.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 13-14 — Notación científica.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 15-19 — Cifras significativas, exactitud y precisión.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 20-23 — Análisis dimensional.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 24-25 — Resolución de problemas del mundo real: suposiciones y simplificaciones.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 25-27 — Sustancias, mezclas, elementos y compuestos.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 28-30 — Los tres estados comunes de la materia.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, pág. 30-31 — Propiedades físicas, químicas, extensivas e intensivas.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, Tabla 1.1, pág. 8 — Unidades base del SI.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, Tabla 1.2, pág. 8 — Prefijos usados con las unidades SI.',
        'Chang &amp; Overby, 15ª Ed., Cap. 1, Tabla 1.3, pág. 10 — Densidades de algunas sustancias a 25°C.'
    ]
});
