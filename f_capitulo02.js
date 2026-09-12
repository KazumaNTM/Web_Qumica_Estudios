/* ============================================================================
   CAPÍTULO 2 — Matemáticas técnicas
   Este archivo SOLO contiene contenido (texto, preguntas, respuestas), igual
   que capitulo01.js. No hay aquí ni una línea de diseño ni de lógica: todo
   eso vive en index.html (el motor). Si necesitas corregir un dato de
   matemáticas, este es el único archivo que hay que tocar; si necesitas
   cambiar cómo se ve la página, nunca es aquí.
   Fuente: Tippens, Paul E. — Física, Conceptos y Aplicaciones, Capítulo 2
   "Matemáticas técnicas" (págs. 6-33 del PDF proporcionado).
   ============================================================================ */
registrarCapitulo({
    materia: 'fisica', // agrupa este capítulo bajo "Física" en el menú lateral (independiente de química)
    // Número de capítulo y título tal como aparecen en el PDF (pág. 6)
    numero: 2,
    titulo: 'Matemáticas técnicas',

    /* ---------------- 1. OBJETIVOS DE APRENDIZAJE ----------------
       Copiados/parafraseados de la lista de "Objetivos" del PDF (págs. 6-7) */
    objetivos: [
        'Demostrar la habilidad para sumar, restar, multiplicar y dividir unidades técnicas de medida (números con signo). <span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 6</span></span>',
        'Resolver fórmulas sencillas para cualquier cantidad que aparezca en ellas y realizar evaluaciones por sustitución. <span class="citation-tag" tabindex="0"><sup>[4]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 6</span></span>',
        'Resolver problemas sencillos que impliquen operaciones con exponentes y radicales. <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 7</span></span>',
        'Realizar operaciones matemáticas comunes en notación científica. <span class="citation-tag" tabindex="0"><sup>[8]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 7</span></span>',
        'Trazar una gráfica a partir de datos técnicos específicos e interpretar nueva información con base en ella. <span class="citation-tag" tabindex="0"><sup>[9]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 7</span></span>',
        'Aplicar las reglas elementales de la geometría para calcular ángulos desconocidos en situaciones concretas. <span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 7</span></span>'
    ],

    /* ---------------- 2. CONCEPTOS CLAVE ----------------
       Un bloque por cada sección numerada del capítulo (2.1 a 2.8) */
    conceptos: [
        { titulo: '2.1 Números con signo', html:
            '<p>Los <strong>números con signo</strong> permiten expresar tanto la magnitud como el sentido de una cantidad respecto de un punto de referencia cero (por ejemplo, −10°C está 10 grados "abajo" de 0°C, mientras que 24°C está 24 grados "arriba"). El <strong>valor absoluto</strong> de un número, escrito entre barras verticales (|n|), es su magnitud sin importar el signo. <span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 7</span></span></p>' +
            '<p><strong>Regla de la suma:</strong> para sumar números del mismo signo, se suman sus valores absolutos y se conserva el signo común; para sumar números de signo diferente, se halla la diferencia entre sus valores absolutos y el resultado toma el signo del número de mayor valor absoluto. <strong>Regla de la resta:</strong> para restar un número b de un número a, se cambia el signo de b y luego se aplica la regla de la suma. <span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 8</span></span></p>' +
            '<p><strong>Regla de la multiplicación y la división:</strong> el producto o cociente de dos números del mismo signo es positivo, y de signos diferentes es negativo. Cuando intervienen varios factores, el resultado es positivo si el número de factores negativos es par, y negativo si es impar. <span class="citation-tag" tabindex="0"><sup>[3]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 9-10</span></span></p>'
        },
        { titulo: '2.2 Repaso de álgebra', html:
            '<p>El <strong>álgebra</strong> generaliza la aritmética usando letras para representar números dentro de fórmulas, como el volumen de un sólido rectangular, V = l · b · h (2.1), donde l es el largo, b el ancho y h la altura. Al sustituir valores en una fórmula es indispensable respetar el signo de cada número, recordando que los signos propios de la fórmula no se aplican a los valores sustituidos. <span class="citation-tag" tabindex="0"><sup>[4]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 10</span></span></p>' +
            '<p><strong>Resolver o despejar</strong> una ecuación consiste en aislar la incógnita en un lado de la igualdad realizando la misma operación (sumar, restar, multiplicar, dividir, elevar al cuadrado o extraer raíz) en ambos miembros. El mismo procedimiento permite despejar una fórmula literal, como el volumen de un cono circular recto, V = πr²h / 3 (2.2), para obtener la altura h en función de V y r. <span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 11-12</span></span></p>'
        },
        { titulo: '2.3 Exponentes y radicales (optativo)', html:
            '<p>El <strong>exponente</strong> indica cuántas veces se toma una cantidad (la <strong>base</strong>) como factor de sí misma. Reglas principales: al multiplicar potencias de igual base se suman los exponentes (aᵐ · aⁿ = aᵐ⁺ⁿ); un exponente negativo equivale al recíproco de la potencia positiva (a⁻ⁿ = 1/aⁿ); toda cantidad elevada a la potencia cero es igual a 1 (a⁰ = 1); al dividir potencias de igual base se restan los exponentes (aᵐ/aⁿ = aᵐ⁻ⁿ); y al elevar una potencia a otra potencia, los exponentes se multiplican ((aᵐ)ⁿ = aᵐⁿ). La potencia de un producto o de un cociente se obtiene aplicando el exponente a cada factor. <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 12-14</span></span></p>' +
            '<p>Un <strong>radical</strong> (ⁿ√b) representa la raíz n-ésima de un número y equivale a un exponente fraccionario (b¹ᐟⁿ). La raíz de un producto es igual al producto de las raíces de cada factor (ⁿ√(ab) = ⁿ√a · ⁿ√b), y la raíz de una potencia se calcula aplicando la definición de exponente fraccionario (ⁿ√(aᵐ) = aᵐᐟⁿ). <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 14</span></span></p>'
        },
        { titulo: '2.4 Solución a ecuaciones cuadráticas', html:
            '<p>Una <strong>ecuación cuadrática</strong> tiene la forma ax² + bx + c = 0, con a distinto de cero. Se resuelve con la <strong>fórmula cuadrática</strong>: x = (−b ± √(b² − 4ac)) / 2a, la cual siempre entrega dos soluciones (una con el signo más y otra con el signo menos). En problemas de física, una de las dos soluciones matemáticas puede resultar imposible según las condiciones planteadas, por lo que siempre debe interpretarse el resultado. <span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 15-16</span></span></p>'
        },
        { titulo: '2.5 Notación científica', html:
            '<p>La <strong>notación científica</strong> expresa cualquier cantidad como un número entre 1 y 10 multiplicado por una potencia entera de base 10, lo que evita manejar muchos ceros al trabajar con números muy grandes o muy pequeños (por ejemplo, 130 000 m² se escribe 1.3 × 10⁵ m² y 0.00021 in se escribe 2.1 × 10⁻⁴ in). <span class="citation-tag" tabindex="0"><sup>[8]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 16-17</span></span></p>' +
            '<p>Al multiplicar números en notación científica, los exponentes de base 10 se suman; al dividir, se restan. Para sumar o restar dos números en notación científica primero deben ajustarse para que tengan la misma potencia de 10. <span class="citation-tag" tabindex="0"><sup>[8]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 17-18</span></span></p>'
        },
        { titulo: '2.6 Gráficas', html:
            '<p>Una <strong>gráfica</strong> muestra la relación entre dos cantidades a partir de datos observados. Conviene elegir escalas sencillas (1, 2 o 5 multiplicado por una potencia de 10) que llenen el papel cuadriculado y evitar divisiones incómodas, como "3 divisiones = 100 ft", porque dificultan ubicar los puntos. <span class="citation-tag" tabindex="0"><sup>[9]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 18</span></span></p>' +
            '<p>Cuando la gráfica de una cantidad frente a otra es una línea recta que pasa por el origen, existe una <strong>relación directa</strong>: al duplicarse una cantidad, se duplica la otra. Cuando el aumento de una cantidad produce la disminución proporcional de la otra, existe una <strong>relación inversa</strong>, cuya gráfica es una curva y no una línea recta. <span class="citation-tag" tabindex="0"><sup>[9]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 19</span></span></p>'
        },
        { titulo: '2.7 Geometría', html:
            '<p>Un <strong>ángulo</strong> es la fracción de un círculo comprendida entre dos rectas que se cortan en un punto; se mide en <strong>grados</strong>, donde 1° equivale a 1/360 de una revolución completa (1 rev = 360°, ecuación 2.11). Un <strong>ángulo recto</strong> corresponde a un cuarto de revolución (90°); dos rectas que se cortan formando un ángulo recto son <strong>perpendiculares</strong>, y dos rectas que nunca se intersecan son <strong>paralelas</strong>. <span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 19-20</span></span></p>' +
            '<p>Reglas básicas: (1) cuando dos rectas se intersecan, los ángulos opuestos que forman son iguales; (2) cuando una recta interseca dos rectas paralelas, los ángulos alternos internos son iguales; (3) en cualquier triángulo, la suma de los ángulos internos es 180°, y en un <strong>triángulo rectángulo</strong> la suma de los dos ángulos menores (complementarios) es 90°. <span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 20-21</span></span></p>'
        },
        { titulo: '2.8 Trigonometría del triángulo rectángulo', html:
            '<p>En un triángulo rectángulo, el lado opuesto al ángulo de 90° se llama <strong>hipotenusa</strong>. El <strong>teorema de Pitágoras</strong> establece que el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los otros dos lados: R² = x² + y² (2.12). <span class="citation-tag" tabindex="0"><sup>[11]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 22-23</span></span></p>' +
            '<p>Las tres razones trigonométricas fundamentales para un ángulo θ son: <strong>seno</strong> = op/hip, <strong>coseno</strong> = ady/hip y <strong>tangente</strong> = op/ady (2.16). Para resolver un triángulo rectángulo se identifica el ángulo de referencia, se marcan los lados como opuesto, adyacente e hipotenusa, y se elige la función trigonométrica que relacione el dato conocido con la incógnita, sin que aparezca ninguna otra cantidad desconocida. <span class="citation-tag" tabindex="0"><sup>[11]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 24-25</span></span></p>'
        }
    ],
    conceptosGlosario: [
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 7-8 — Números con signo, valor absoluto y regla de la suma.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 9-10 — Regla de la resta, la multiplicación y la división de números con signo.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 10 — Repaso de álgebra: fórmulas y sustitución con signos.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 11-12 — Resolución y despeje de ecuaciones y fórmulas literales.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 12-14 — Reglas de los exponentes.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 14 — Radicales y exponentes fraccionarios.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 15-16 — Ecuaciones cuadráticas y la fórmula cuadrática.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 16-18 — Notación científica.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 18-19 — Gráficas: relaciones directas e inversas.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 19-21 — Ángulos, rectas paralelas/perpendiculares y reglas de geometría.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 22-25 — Teorema de Pitágoras y trigonometría del triángulo rectángulo.'
    ],

    /* ---------------- 3. FÓRMULAS Y RELACIONES CLAVE ---------------- */
    formulas: [
        {
            box: 'Signos iguales: se suman los valores absolutos y se conserva el signo · Signos diferentes: se resta el valor absoluto menor del mayor y se toma el signo del mayor',
            vars: 'Regla de la suma de números con signo',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 8</span></span>'
        },
        {
            box: 'V = l · b · h',
            vars: 'Volumen de un sólido rectangular: l = largo · b = ancho · h = altura',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[4]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, Ec. 2.1, pág. 10</span></span>'
        },
        {
            box: 'V = πr²h / 3',
            vars: 'Volumen de un cono circular recto: r = radio · h = altura',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, Ec. 2.2, pág. 12</span></span>'
        },
        {
            box: 'x = (−b ± √(b² − 4ac)) / 2a',
            vars: 'Fórmula cuadrática para resolver ax² + bx + c = 0, con a ≠ 0',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 15</span></span>'
        },
        {
            box: '1° = 1/360 rev · 1 rev = 360°',
            vars: 'Definición del grado como unidad de medida angular',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, Ec. 2.11, pág. 19</span></span>'
        },
        {
            box: 'R² = x² + y²',
            vars: 'Teorema de Pitágoras: R = hipotenusa · x, y = catetos',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[11]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, Ec. 2.12, pág. 23</span></span>'
        },
        {
            box: 'sen θ = op/hip · cos θ = ady/hip · tan θ = op/ady',
            vars: 'Funciones trigonométricas del ángulo θ en un triángulo rectángulo',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[11]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, Ec. 2.16, pág. 24</span></span>'
        }
    ],
    formulasTabla: {
        titulo: 'Reglas de los exponentes',
        headers: ['Regla', 'Fórmula', 'Ejemplo'],
        filas: [
            ['Multiplicación', '(aᵐ)(aⁿ) = aᵐ⁺ⁿ', '(2⁴)(2³) = 2⁷'],
            ['Exponente negativo', 'a⁻ⁿ = 1/aⁿ', '3⁻⁴ = 1/3⁴ = 1/81'],
            ['Exponente cero', 'a⁰ = 1', 'x³y⁰ = x³'],
            ['División', 'aᵐ/aⁿ = aᵐ⁻ⁿ', '2³/2 = 2²'],
            ['Potencia de una potencia', '(aᵐ)ⁿ = aᵐⁿ', '(2²)³ = 2⁶'],
            ['Potencia de un producto/cociente', '(ab)ⁿ = aⁿbⁿ · (a/b)ⁿ = aⁿ/bⁿ', '(2 · 3)² = 4 · 9 = 36'],
            ['Raíz de un producto', 'ⁿ√(ab) = ⁿ√a · ⁿ√b', '√(4 · 16) = 2 · 4 = 8'],
            ['Raíz de potencias', 'ⁿ√(aᵐ) = aᵐᐟⁿ', '∛(2⁹) = 2³ = 8']
        ],
        fuente: '<span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 13-14</span></span>'
    },
    formulasGlosario: [
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, Ec. 2.1, pág. 10 — Volumen de un sólido rectangular.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, Ec. 2.2, pág. 12 — Volumen de un cono circular recto.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 13-14 — Reglas de los exponentes.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 15 — Fórmula cuadrática.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, Ec. 2.11, pág. 19 — Definición del grado.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, Ec. 2.12, pág. 23 — Teorema de Pitágoras.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, Ec. 2.16, pág. 24 — Funciones trigonométricas del triángulo rectángulo.'
    ],

    /* ---------------- 4. EJEMPLOS RESUELTOS ---------------- */
    ejemplos: [
        {
            titulo: 'Ejemplo 2.1 — Cambio de velocidad',
            problema: 'La velocidad de un objeto se considera positiva hacia arriba y negativa hacia abajo. ¿Cuál es el cambio de velocidad de una pelota que golpea el piso a 12 m/s y rebota a 7 m/s?',
            solucionLineas: [
                'Velocidad inicial (hacia abajo): −12 m/s. Velocidad final (hacia arriba): +7 m/s.',
                'Cambio en la velocidad = velocidad final − velocidad inicial = (+7 m/s) − (−12 m/s)',
                'Cambio en la velocidad = 7 m/s + 12 m/s = 19 m/s'
            ],
            fuente: 'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 8-9.'
        },
        {
            titulo: 'Ejemplo 2.2 — Volumen de un sólido',
            problema: 'Calcula el volumen de un sólido con largo 6 cm, ancho 4 cm y alto 2 cm.',
            solucionLineas: [
                'Se aplica V = lbh.',
                'V = (6 cm)(4 cm)(2 cm)',
                'V = 48 cm³'
            ],
            fuente: 'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 10.'
        },
        {
            titulo: 'Sustitución en una fórmula con signos',
            problema: 'Evalúa P = c² − ab si c = +2, a = −3 y b = +4.',
            solucionLineas: [
                'P = (+2)² − (−3)(+4)',
                'P = 4 − (−12) = 4 + 12',
                'P = 16'
            ],
            fuente: 'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 10.'
        },
        {
            titulo: 'Ejemplo 2.3 — Resolver una ecuación',
            problema: 'Resuelve para m la ecuación 3m − 5 = m + 3.',
            solucionLineas: [
                'Se suma +5 a ambos lados: 3m = m + 8',
                'Se resta m a ambos lados: 2m = 8',
                'Se divide entre 2: m = 4'
            ],
            fuente: 'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 11.'
        },
        {
            titulo: 'Ejemplo 2.4 — Altura de un cono',
            problema: 'El volumen de un cono circular recto es V = πr²h/3. ¿Cuál es la altura si r = 3 cm y V = 81 cm³? (usa π = 3.14)',
            solucionLineas: [
                'Se despeja h: h = 3V / (πr²)',
                'h = 3(81 cm³) / [(3.14)(3 cm)²] = 243 cm³ / 28.26 cm²',
                'h = 8.60 cm'
            ],
            fuente: 'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 12.'
        },
        {
            titulo: 'Ejemplo 2.5 — Ecuación cuadrática',
            problema: 'Resuelve la ecuación 3x² = 12 + 5x para x.',
            solucionLineas: [
                'Se escribe en forma cuadrática: 3x² − 5x − 12 = 0, con a = 3, b = −5, c = −12',
                'x = [−(−5) ± √((−5)² − 4(3)(−12))] / 2(3) = (5 ± √169) / 6',
                'Primera solución: x = (5+13)/6 = +3. Segunda solución: x = (5−13)/6 = −1.33'
            ],
            fuente: 'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 15-16.'
        },
        {
            titulo: 'Ejemplo 2.6 — Pelota lanzada hacia arriba',
            problema: 'Se lanza una pelota hacia arriba con v₀ = 20 m/s y g = −9.80 m/s². Si y = v₀t + ½gt², determina los dos instantes en que y = 12 m.',
            solucionLineas: [
                'Al sustituir se obtiene la forma cuadrática: 4.9t² − 20t + 12 = 0',
                't = [−(−20) ± √((−20)² − 4(4.9)(12))] / 2(4.9) = (20 ± 12.8) / 9.8',
                'Primera solución: t = 32.8/9.8 = 3.35 s. Segunda solución: t = 7.17/9.8 = 0.732 s'
            ],
            fuente: 'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 16.'
        },
        {
            titulo: 'Ejemplo 2.7 — Ángulo en postes reforzados',
            problema: 'Dos postes de tabique paralelos se refuerzan con un miembro cruzado que forma un ángulo de 60° con uno de ellos. Calcula el ángulo C indicado en la figura.',
            solucionLineas: [
                'El ángulo A mide 60° (regla 1: los ángulos opuestos son iguales).',
                'El ángulo B mide 60° (regla 2: los ángulos alternos internos entre paralelas son iguales).',
                'El ángulo C mide 60° (se aplica de nuevo la regla 1).'
            ],
            fuente: 'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 21.'
        },
        {
            titulo: 'Ejemplo 2.8 — Ángulos desconocidos',
            problema: 'A partir de un ángulo dado de 30°, aplica las reglas de la geometría para hallar los ángulos A, B y D en una figura con varias rectas perpendiculares.',
            solucionLineas: [
                'Como MC ⊥ RQ, se forma un triángulo rectángulo con ángulo menor de 30°; por el corolario de la regla 3: 30° + B = 90°, entonces B = 60°.',
                'Como los ángulos opuestos son iguales, D = 60°.',
                'Como NF ⊥ RP, entonces A + D = 90°, así que A + 60° = 90° y A = 30°.'
            ],
            fuente: 'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 22.'
        },
        {
            titulo: 'Ejemplo 2.9 — Cable de retén (teorema de Pitágoras)',
            problema: '¿Qué longitud de cable de retén se necesita para formar un tirante desde lo alto de un poste de 12 m hasta una estaca clavada en el suelo a 8 m de la base?',
            solucionLineas: [
                'El cable es la hipotenusa de un triángulo rectángulo: R² = (12 m)² + (8 m)² = 144 m² + 64 m² = 208 m²',
                'R = √(208 m²)',
                'R = 14.4 m'
            ],
            fuente: 'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 23.'
        },
        {
            titulo: 'Ejemplo 2.10 — Longitud de un segmento de cuerda',
            problema: '¿Cuál es la longitud del segmento de cuerda x, si la hipotenusa mide 20 m y el ángulo dado es 40°, siendo x el lado opuesto a dicho ángulo?',
            solucionLineas: [
                'Se usa sen 40° = x / 20 m',
                'x = (20 m) sen 40°',
                'x = 12.9 m'
            ],
            fuente: 'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 25-26.'
        },
        {
            titulo: 'Ejemplo 2.11 — Ángulo de inclinación de una rampa',
            problema: 'Un automóvil sube por una rampa cuya base mide 20 m y tiene una altura de 4.3 m. ¿Cuál es el ángulo de inclinación?',
            solucionLineas: [
                'Se usa tan θ = op/ady = 4.3 m / 20 m = 0.215',
                'θ es el ángulo cuya tangente es 0.215',
                'θ = 12.1°'
            ],
            fuente: 'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 26.'
        }
    ],
    ejemplosGlosario: [
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 8-9 — Ejemplo 2.1: cambio de velocidad con números con signo.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 10 — Ejemplo 2.2 y sustitución con signos: volumen y evaluación de P = c² − ab.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 11 — Ejemplo 2.3: resolver una ecuación lineal.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 12 — Ejemplo 2.4: despeje y sustitución en la fórmula del cono.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 15-16 — Ejemplo 2.5: solución de una ecuación cuadrática.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 16 — Ejemplo 2.6: ecuación cuadrática aplicada al movimiento de un proyectil.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 21-22 — Ejemplos 2.7 y 2.8: reglas de la geometría con rectas y ángulos.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 23 — Ejemplo 2.9: teorema de Pitágoras.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 25-26 — Ejemplos 2.10 y 2.11: trigonometría del triángulo rectángulo.'
    ],

    /* ---------------- 5. EJERCICIOS INTERACTIVOS ----------------
       tipo 'numero' -> se compara como número (checkExercise)
       tipo 'texto'  -> se compara como texto exacto, sensible a mayúsculas (checkExerciseText)
       Todos tomados de la sección "Problemas" del PDF, con su "Resp." original. */
    ejercicios: [
        { enunciado: 'Resuelve: (+2) + (+5)', tipo: 'numero', respuesta: 7, placeholder: 'Respuesta' },
        { enunciado: 'Resuelve: (−4) − (−6)', tipo: 'numero', respuesta: 2, placeholder: 'Respuesta' },
        { enunciado: 'Resuelve: (−3) − (+7)', tipo: 'numero', respuesta: -10, placeholder: 'Respuesta' },
        { enunciado: 'Resuelve: (−2)(−3)', tipo: 'numero', respuesta: 6, placeholder: 'Respuesta' },
        { enunciado: 'Resuelve: (−6)(−3)(−2)', tipo: 'numero', respuesta: -36, placeholder: 'Respuesta' },
        { enunciado: 'Resuelve: (−6) ÷ (−3)', tipo: 'numero', respuesta: 2, placeholder: 'Respuesta' },
        { enunciado: 'Si R² = (4)² + (3)², ¿cuánto vale R (positivo)?', tipo: 'numero', respuesta: 5, placeholder: 'Respuesta' },
        { enunciado: 'Calcula 670 / tan 17° (redondea al entero más cercano)', tipo: 'numero', respuesta: 2191, placeholder: 'Respuesta' },
        { enunciado: 'Resuelve: (+8) − (−3)', tipo: 'numero', respuesta: 11, placeholder: 'Respuesta' },
        { enunciado: 'Si a = 3, b = −4, c = 5, ¿cuánto vale a + b + c?', tipo: 'numero', respuesta: 4, placeholder: 'Respuesta' },
        { enunciado: '¿Cuál es el valor de sen 30°?', tipo: 'numero', respuesta: 0.5, placeholder: 'Respuesta' },
        { enunciado: 'Un triángulo rectángulo tiene catetos de 6 cm y 8 cm. ¿Cuál es su hipotenusa, en cm?', tipo: 'numero', respuesta: 10, placeholder: 'Respuesta' }
    ],

    /* ---------------- 6. TEST DE OPCIÓN MÚLTIPLE ----------------
       correcta: 'a' | 'b' | 'c' | 'd' según la posición dentro de "opciones" */
    quiz: [
        { pregunta: '¿Cuál es el resultado de sumar dos números con el mismo signo?', opciones: ['Restar sus valores absolutos', 'Sumar sus valores absolutos y conservar el signo común', 'Multiplicar sus valores absolutos', 'El resultado siempre es cero'], correcta: 'b' },
        { pregunta: 'Si se multiplican varios factores y el número de factores negativos es impar, el producto es:', opciones: ['Positivo', 'Negativo', 'Cero', 'Indefinido'], correcta: 'b' },
        { pregunta: 'En un triángulo rectángulo, la suma de los dos ángulos menores (los complementarios) es igual a:', opciones: ['45°', '60°', '90°', '180°'], correcta: 'c' },
        { pregunta: 'La hipotenusa de un triángulo rectángulo es:', opciones: ['El lado más corto', 'El lado opuesto al ángulo recto', 'Cualquiera de los lados', 'El lado adyacente al ángulo dado'], correcta: 'b' },
        { pregunta: 'Cuando una recta corta dos rectas paralelas, los ángulos alternos internos son:', opciones: ['Siempre diferentes', 'Iguales', 'Complementarios', 'Suplementarios'], correcta: 'b' },
        { pregunta: 'Un grado (°) es una parte de un círculo igual a:', opciones: ['1/100 de una revolución', '1/180 de una revolución', '1/360 de una revolución', '1/720 de una revolución'], correcta: 'c' },
        { pregunta: '¿Cuál es el valor de a elevado a la potencia cero (a ≠ 0)?', opciones: ['0', '1', 'a', 'Indefinido'], correcta: 'b' },
        { pregunta: 'Cuando dos rectas se intersecan, los ángulos opuestos por el vértice son:', opciones: ['Suplementarios', 'Iguales', 'Complementarios', 'Siempre de 90°'], correcta: 'b' },
        { pregunta: 'La fórmula cuadrática x = (−b ± √(b² − 4ac)) / 2a se aplica a ecuaciones de la forma:', opciones: ['ax + b = 0', 'ax² + bx + c = 0', 'ax³ + b = 0', 'a/x = b'], correcta: 'b' },
        { pregunta: 'En un triángulo rectángulo, el coseno de un ángulo se define como:', opciones: ['opuesto/hipotenusa', 'adyacente/hipotenusa', 'opuesto/adyacente', 'hipotenusa/adyacente'], correcta: 'b' },
        { pregunta: 'En una gráfica de relación directa entre dos variables, la línea trazada es:', opciones: ['Una curva que nunca toca los ejes', 'Una línea recta que pasa por el origen', 'Siempre horizontal', 'Siempre vertical'], correcta: 'b' }
    ],

    /* ---------------- 7. TARJETAS DE MEMORIA ---------------- */
    flashcards: [
        { frente: 'Regla de la suma de números con signo', dorso: 'Signos iguales: se suman los valores absolutos y se conserva el signo común.<br>Signos diferentes: se halla la diferencia de los valores absolutos y el resultado toma el signo del número mayor.' },
        { frente: 'Regla de la resta de números con signo', dorso: 'Para restar b de a, se cambia el signo de b y luego se suma este número a a aplicando la regla de la suma.' },
        { frente: 'Regla de la multiplicación con números negativos', dorso: 'El producto es positivo si el número total de factores negativos es par, y negativo si es impar.' },
        { frente: 'Teorema de Pitágoras', dorso: 'R² = x² + y² — el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los otros dos lados.' },
        { frente: 'Fórmula cuadrática', dorso: 'Para ax² + bx + c = 0 (a ≠ 0): x = (−b ± √(b² − 4ac)) / 2a' },
        { frente: 'Funciones trigonométricas del triángulo rectángulo', dorso: 'sen θ = op/hip<br>cos θ = ady/hip<br>tan θ = op/ady' },
        { frente: 'Relación directa vs. relación inversa (gráficas)', dorso: 'Directa: la gráfica es una línea recta que pasa por el origen; ambas cantidades cambian en la misma proporción.<br>Inversa: al aumentar una cantidad, la otra disminuye proporcionalmente; la gráfica es una curva.' }
    ],

    /* ---------------- 8. MODO PRÁCTICA (bancos de preguntas por nivel) ---------------- */
    practica: {
        facil: [
            { q: '¿Cuánto es (+6) + (+2)?', a: '8', tipo: 'texto' },
            { q: '¿Cuánto es (−6) + (−2)?', a: '-8', tipo: 'texto' },
            { q: '¿Cómo se llama el resultado de una multiplicación?', a: 'producto', tipo: 'texto' },
            { q: '¿Cómo se llama el número que va a ser dividido en una división?', a: 'dividendo', tipo: 'texto' },
            { q: '¿Cuántos grados tiene una revolución completa?', a: '360', tipo: 'texto' },
            { q: '¿Cómo se llama el lado opuesto al ángulo recto en un triángulo rectángulo?', a: 'hipotenusa', tipo: 'texto' },
            { q: '¿Cuál es el valor de a elevado a la potencia cero (a ≠ 0)?', a: '1', tipo: 'texto' },
            { q: '¿Cómo se llama un triángulo en el que no hay dos lados ni dos ángulos iguales?', a: 'escaleno', tipo: 'texto' },
            { q: '¿Cuál es el valor de sen 30°?', a: '0.5', tipo: 'texto' },
            { q: '¿Cuántos lados tiene un triángulo?', a: '3', tipo: 'texto' }
        ],
        medio: [
            { q: 'Resuelve para m: 3m − 5 = m + 3', a: '4', tipo: 'texto' },
            { q: '¿Cuál es el valor de sen 22°?', a: '0.375', tipo: 'texto' },
            { q: '¿Cuál es el valor de tan 38°?', a: '0.781', tipo: 'texto' },
            { q: '¿Cuál es la altura de un cono si r = 3 cm y V = 81 cm³?', a: '8.60', tipo: 'texto' },
            { q: 'Resuelve la ecuación 2b + 4 = 3b − 1 para b', a: '5', tipo: 'texto' },
            { q: 'Si a = 2, b = −3, c = −2, ¿cuánto vale x = a + b + c?', a: '-3', tipo: 'texto' },
            { q: 'Si a = 2, b = −3, c = −2, ¿cuánto vale x = b + c − a?', a: '-7', tipo: 'texto' },
            { q: 'Si a = 2, b = −3, c = −2, ¿cuánto vale x = b² − c²?', a: '5', tipo: 'texto' },
            { q: 'Un triángulo rectángulo tiene catetos de 6 cm y 8 cm. ¿Cuál es su hipotenusa, en cm?', a: '10', tipo: 'texto' },
            { q: 'Resuelve: (+8) − (−3)', a: '11', tipo: 'texto' }
        ],
        dificil: [
            { q: 'Resuelve 3x² = 12 + 5x y da la solución positiva', a: '3', tipo: 'texto' },
            { q: 'En el Ejemplo 2.6, ¿cuál es el primer instante t (en s) en que la pelota alcanza y = 12 m?', a: '0.732', tipo: 'texto' },
            { q: '¿Cuál es la longitud del cable de retén del Ejemplo 2.9, en m?', a: '14.4', tipo: 'texto' },
            { q: '¿Cuál es el ángulo de inclinación de la rampa del Ejemplo 2.11?', a: '12.1', tipo: 'texto' },
            { q: '¿Cuál es la longitud del segmento de cuerda x del Ejemplo 2.10, en m?', a: '12.9', tipo: 'texto' },
            { q: 'Si a = 50 y b = 20, ¿cuánto vale c en c² = a² + b²?', a: '53.9', tipo: 'texto' },
            { q: 'Una tabla se corta en 6 piezas de 28 cm perdiendo 1 mm de madera por corte. ¿Cuál era la longitud original de la tabla, en pulgadas?', a: '66.3', tipo: 'texto' },
            { q: '¿Cuánto vale R (en m) para un triángulo con catetos de 400 m y 600 m?', a: '721', tipo: 'texto' },
            { q: 'Resuelve la ecuación cuadrática 2x² − 8 = 0 y da la solución positiva', a: '2', tipo: 'texto' },
            { q: '¿Cuál es el valor de cos 45°?', a: '0.707', tipo: 'texto' }
        ]
    },

    /* ---------------- 9. RESUMEN DEL CAPÍTULO ----------------
       Parafraseado de la sección "Resumen" del PDF (pág. 27) */
    resumenPuntos: [
        'Para sumar números con signos iguales, se suman sus valores absolutos y se asigna a la suma el signo común; para sumar números con signos diferentes, se halla la diferencia entre sus valores absolutos y se asigna al resultado el signo del número mayor.',
        'Para restar un número b de un número a, se cambia el signo de b y después se suma al número a, aplicando la regla de la suma.',
        'Al multiplicar o dividir un grupo de números con signo, el resultado es negativo si la cantidad total de factores negativos es impar; de lo contrario, es positivo.',
        'Las fórmulas pueden reordenarse (despejarse) para resolver una incógnita específica, realizando operaciones equivalentes en ambos miembros de la igualdad.',
        'Existen reglas fijas para trabajar con exponentes y radicales (tema optativo del capítulo): multiplicación y división de potencias de igual base, exponente negativo, exponente cero, potencia de una potencia, potencia de un producto o cociente, y raíces de productos y de potencias.',
        'La notación científica usa potencias positivas o negativas de base 10 para expresar números grandes o pequeños de forma abreviada.',
        'Las gráficas presentan una descripción continua de la relación entre dos variables, a partir de datos observados.',
        'Cuando dos rectas se intersecan, forman ángulos opuestos que son iguales entre sí.',
        'Cuando una recta corta dos rectas paralelas, los ángulos internos alternos son iguales.',
        'En cualquier triángulo, la suma de los ángulos internos es 180°; en un triángulo rectángulo, la suma de los dos ángulos más pequeños es igual a 90°.',
        'La aplicación del teorema de Pitágoras y de las funciones trigonométricas básicas (seno, coseno y tangente) es fundamental para el estudio de la física.'
    ],
    resumenErrores: [
        ['Confundir el signo de la fórmula con el signo del número sustituido', 'Los signos propios de la fórmula y los signos de los valores sustituidos son independientes; deben distinguirse con cuidado al evaluar (ver ejemplo con P = c² − ab, pág. 10)'],
        ['Cancelar términos en lugar de factores al reordenar una fórmula', 'Solo pueden cancelarse factores comunes que multiplican a todo el numerador y a todo el denominador, nunca términos sueltos de una suma o una resta'],
        ['Suponer que se han comprendido los números con signo sin comprobarlo', 'Es necesario practicar todas las reglas de suma, resta, multiplicación y división de números con signo, ya que son una fuente importante de errores en la resolución de problemas de física'],
        ['Confundir −9² con (−9)²', 'No son iguales: en −9² el signo menos no está elevado al cuadrado, mientras que en (−9)² sí lo está'],
        ['Elegir divisiones de escala incómodas al trazar una gráfica', 'Deben evitarse escalas como "3 divisiones = 100 ft"; conviene usar divisiones de 1, 2 o 5 multiplicadas por una potencia de 10'],
        ['Olvidar que las unidades también se multiplican al sustituir en una fórmula', 'Por ejemplo, al calcular un volumen, (cm)(cm)(cm) = cm³; las unidades deben tratarse igual que los números'],
        ['Usar la calculadora sin conocer la secuencia de teclas para funciones trigonométricas inversas', 'El procedimiento para hallar un ángulo a partir de su seno, coseno o tangente varía según la calculadora (INV, ARC o la tecla con exponente −1)']
    ],
    resumenGlosario: [
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 6-7 — Introducción y objetivos del capítulo.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 7-8 — Números con signo y valor absoluto.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 8-10 — Reglas de la suma, la resta, la multiplicación y la división de números con signo.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 10-12 — Repaso de álgebra: fórmulas, sustitución y despeje de ecuaciones.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 12-14 — Exponentes (optativo).',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 14 — Radicales (optativo).',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 15-16 — Solución de ecuaciones cuadráticas.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 16-18 — Notación científica.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 18-19 — Gráficas.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 19-22 — Geometría: ángulos, rectas y triángulos.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 22-26 — Trigonometría del triángulo rectángulo.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 27 — Resumen del capítulo.',
        'Tippens, Física, Conceptos y Aplicaciones, Cap. 2, pág. 28-33 — Preguntas de repaso y problemas del capítulo.'
    ]
});
