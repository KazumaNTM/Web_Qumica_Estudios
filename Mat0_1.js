/* ============================================================================
   CAPÍTULO 1 — Álgebra en los números reales
   Este archivo SOLO contiene contenido (texto, preguntas, respuestas).
   No hay aquí ni una línea de diseño ni de lógica: todo eso vive en index.html
   (el motor). Si necesitas corregir un dato de matemática, este es el único
   archivo que hay que tocar; si necesitas cambiar cómo se ve la página,
   nunca es aquí.
   ============================================================================ */
registrarCapitulo({
    materia: 'matematica', // agrupa este capítulo bajo "Matemática" en el menú lateral
    numero: 1,
    titulo: 'Álgebra en los números reales',

    /* ---------------- 1. OBJETIVOS DE APRENDIZAJE ---------------- */
    objetivos: [
        'Expresar enunciados verbales en lenguaje algebraico, asignando variables cuando el término no esté determinado. <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 7</span></span>',
        'Reconocer el factor numérico, el factor literal y el grado de un término algebraico, y clasificar expresiones algebraicas en binomios, trinomios o polinomios. <span class="citation-tag" tabindex="0"><sup>[4]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 11</span></span>',
        'Valorizar expresiones algebraicas reemplazando las letras por los valores numéricos asignados. <span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 12</span></span>',
        'Reducir términos semejantes y eliminar paréntesis aplicando correctamente las reglas de los signos. <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 14</span></span>',
        'Efectuar multiplicaciones algebraicas: de potencias, de monomios, de un monomio por un polinomio y de dos polinomios. <span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 19</span></span>',
        'Desarrollar productos notables (cuadrado de binomio, suma por diferencia, producto de binomios con término común y cubo de binomio) y usar el triángulo de Pascal para otras potencias de un binomio. <span class="citation-tag" tabindex="0"><sup>[8]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 24</span></span>',
        'Factorizar expresiones algebraicas mediante factor común, factor común compuesto, diferencia de cuadrados, trinomios ordenados y sumas o diferencias de cubos. <span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 29</span></span>',
        'Simplificar, multiplicar, dividir, sumar y restar fracciones algebraicas. <span class="citation-tag" tabindex="0"><sup>[15]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 43</span></span>'
    ],

    /* ---------------- 2. CONCEPTOS CLAVE ---------------- */
    conceptos: [
        { titulo: '1.1 Lenguaje algebraico', html:
            '<p>El <strong>lenguaje algebraico</strong> se basa en el uso de letras y relaciones matemáticas para generalizar diferentes situaciones. Ejemplos: el perímetro P de un cuadrado de lado a es P = 4a; el área A de un cuadrado de lado a es A = a²; el área A de un triángulo de base b y altura h es A = (b·h)/2. Cada una de las letras involucradas en estas fórmulas es una <strong>variable</strong>; en general, una variable es cualquier letra involucrada en una expresión algebraica. <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 7</span></span></p>' +
            '<p>Algunas expresiones básicas: el doble de un número es 2a, 2x, 2m…; el triple de un número es 3x, 3y, 3b…; la mitad de un número es p/2, q/2, z/2…; el cuadrado de p es p²; a aumentado en b es a+b; a disminuido en b es a−b; el producto entre a y b es a·b. Si en alguna expresión no está especificado el término, se puede asignar cualquier variable para representarlo. <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 7</span></span></p>' +
            '<p>En general: son múltiplos de a el doble (2a), el triple (3a), el cuádruple (4a), el quíntuplo (5a); son fracciones de a un medio (a/2), un tercio (a/3), un cuarto (a/4), un quinto (a/5); son potencias de a el cuadrado (a²), el cubo (a³), la cuarta potencia (a⁴), la quinta potencia (a⁵). Otras expresiones algebraicas: un número par es 2n y un número impar es 2n − 1. <span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 8</span></span></p>'
        },
        { titulo: 'Término algebraico y expresión algebraica', html:
            '<p>Se llama <strong>término (algebraico)</strong> a un conjunto de números y letras que se relacionan entre sí por medio de la multiplicación y/o división. Ejemplo: 2a²b, 3a/p, −(5/7)x²y²z. El término algebraico consta de un <strong>factor numérico</strong>, un <strong>factor literal</strong> y un <strong>grado</strong>; el grado es la suma de los exponentes de las letras que aparecen en el término. Por ejemplo, en el término −(12/17)a⁶b⁴c² el coeficiente numérico es −12/17, el factor literal es a⁶b⁴c² y el grado es 12 (6+4+2).</p>' +
            '<p><strong>Observación 1:</strong> si el coeficiente numérico no está escrito, entonces es 1. <strong>Observación 2:</strong> si el grado no está escrito, entonces es 1.</p>' +
            '<p>Se llama <strong>expresión algebraica</strong> a cualquier suma o resta de términos algebraicos. Si la expresión tiene dos términos, es un <strong>binomio</strong>; si tiene tres, se llama <strong>trinomio</strong>; si tiene cuatro o más, se habla de <strong>polinomios</strong> (el término polinomio también puede usarse en forma general para cualquier expresión algebraica). <span class="citation-tag" tabindex="0"><sup>[4]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 11</span></span></p>'
        },
        { titulo: '1.2 Valorización de expresiones algebraicas', html:
            '<p>Las expresiones algebraicas no representan valores en sí, sino que pueden ser evaluadas para distintos valores que se les asignen a las letras que las componen. Se reemplazan directamente las letras por los valores asignados y se realizan las operaciones indicadas. <span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 12</span></span></p>'
        },
        { titulo: '1.3 Reducción de términos semejantes y uso de paréntesis', html:
            '<p>Se llaman <strong>términos semejantes</strong> aquellos que tienen el mismo factor literal (y por consiguiente el mismo grado); sólo pueden diferir en el coeficiente numérico. Por ejemplo, a², 2a², −3a², 0,5a² y a²/4 son términos semejantes, porque el factor literal de todos ellos es a².</p>' +
            '<p>En una expresión algebraica sólo se pueden reducir los términos que son semejantes, sumando (o restando) los coeficientes numéricos y manteniendo el factor literal.</p>' +
            '<p>El uso de paréntesis es frecuente en álgebra y se elimina según estas reglas: 1) si está precedido de un signo + o no tiene signo escrito, se elimina sin hacer ningún cambio; 2) si está precedido de un signo −, se elimina después de cambiar TODOS los signos de los términos del interior del paréntesis (también se elimina el signo − que lo antecede). Si en una expresión hay paréntesis dentro de otros paréntesis, se eliminan desde dentro hacia afuera atendiendo a la misma regla. <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 14-15</span></span></p>'
        },
        { titulo: '1.4 Multiplicación algebraica', html:
            '<p><strong>Multiplicación de potencias:</strong> la expresión aⁿ se llama potencia de base "a" y exponente "n". Se cumple: aⁿ · aᵐ = a^(n+m); (aⁿ)ᵐ = a^(n·m); a⁰ = 1 (con a≠0); (ab)ⁿ = aⁿ · bⁿ.</p>' +
            '<p><strong>Multiplicación de dos o más monomios:</strong> se multiplican los coeficientes numéricos y los factores literales entre sí (usando las propiedades asociativa y conmutativa de la multiplicación).</p>' +
            '<p><strong>Multiplicación de un monomio por un polinomio:</strong> se multiplica el monomio por cada término del polinomio (propiedad distributiva de la multiplicación respecto de la adición).</p>' +
            '<p><strong>Multiplicación de dos polinomios:</strong> se multiplica cada término del primer polinomio por cada término del segundo. Siempre que sea posible, es necesario reducir términos semejantes. <span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 19</span></span></p>'
        },
        { titulo: '1.5 Productos notables', html:
            '<p>Dentro de la multiplicación algebraica existen algunos productos que pueden ser desarrollados en forma directa, sin multiplicar término a término y luego reducir. <strong>Cuadrado de un binomio:</strong> corresponde al cuadrado del primer término, más (o menos) el doble del producto del primer término por el segundo, más el cuadrado del segundo: (a ± b)² = a² ± 2ab + b².</p>' +
            '<p><strong>Suma por diferencia:</strong> es igual a la diferencia de los cuadrados de los términos: (a+b)(a−b) = a² − b².</p>' +
            '<p><strong>Producto de binomios con un término común:</strong> es el cuadrado del término común más el producto del término común por la suma de los términos no comunes, y más el producto de los términos no comunes: (x+a)(x+b) = x² + x·(a+b) + ab.</p>' +
            '<p><strong>Cubo de un binomio:</strong> corresponde al cubo del primer término, más (o menos) el triple del cuadrado del primer término multiplicado por el segundo, más el triple del primer término multiplicado por el cuadrado del segundo, y más (o menos) el cubo del segundo: (a ± b)³ = a³ ± 3a²b + 3ab² ± b³.</p>' +
            '<p>Para obtener otras potencias de un binomio se pueden determinar los coeficientes mediante el <strong>triángulo de Pascal</strong>: comienza y termina con 1, y cada coeficiente se obtiene sumando los dos correspondientes según el orden en la fila anterior. En (a+b)ⁿ debe haber (n+1) términos: el primer factor literal es aⁿ, el segundo es aⁿ⁻¹·b¹, el tercero es aⁿ⁻²·b², y así sucesivamente; el grado de "a" decrece a medida que el grado de "b" aumenta, hasta terminar en bⁿ. <span class="citation-tag" tabindex="0"><sup>[8]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 24</span></span></p>' +
            '<p><strong>Representación geométrica de expresiones algebraicas:</strong> la expresión a·b representa el área de un rectángulo de lados a y b; el cuadrado del binomio (a+b)² se representa como la suma de las áreas a², a·b, a·b y b²; y el producto de una suma por su diferencia (a+b)(a−b) se representa geométricamente como la diferencia de áreas a² − b². <span class="citation-tag" tabindex="0"><sup>[9]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 25</span></span></p>'
        },
        { titulo: '1.6 Factorización', html:
            '<p><strong>Factorizar</strong> una expresión algebraica (o suma de términos algebraicos) consiste en escribirla en forma de multiplicación.</p>' +
            '<p><strong>1.6.1 Factor común (monomio y polinomio):</strong> todos los términos de la expresión presentan un factor común, que puede ser un monomio o un polinomio, por el cual se factoriza; el otro factor se determina aplicando la multiplicación algebraica. <span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 29-30</span></span></p>' +
            '<p><strong>1.6.2 Factor común compuesto:</strong> muchas veces no todos los términos de una expresión algebraica contienen un factor común, pero haciendo una adecuada agrupación de ellos se pueden encontrar factores comunes de cada grupo. La forma de asociar no es única, pero la factorización sí lo es. <span class="citation-tag" tabindex="0"><sup>[11]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 32</span></span></p>' +
            '<p><strong>1.6.3 Diferencia de cuadrados:</strong> como el producto de una suma de dos términos por su diferencia es igual a la diferencia de los cuadrados de ambos términos, se tiene a² − b² = (a+b)(a−b). <span class="citation-tag" tabindex="0"><sup>[12]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 34</span></span></p>' +
            '<p><strong>1.6.4 Trinomios ordenados:</strong> se llama trinomio ordenado (según el grado) a una expresión de la forma ax² + bx + c, donde a, b, c y x representan números reales. En general, los trinomios pueden proceder de la multiplicación de un binomio por sí mismo (cuadrado de binomio), de la multiplicación de dos binomios con un término común, o de la multiplicación de dos binomios de términos semejantes. <span class="citation-tag" tabindex="0"><sup>[13]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 37</span></span></p>' +
            '<p><strong>1.6.5 Sumas o diferencias de cubos:</strong> los factores de una diferencia de cubos son x³ − y³ = (x−y)(x² + xy + y²); los factores de una suma de cubos son x³ + y³ = (x+y)(x² − xy + y²). <span class="citation-tag" tabindex="0"><sup>[14]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 41</span></span></p>'
        },
        { titulo: '1.7 Fracciones algebraicas', html:
            '<p><strong>1.7.1 Simplificación:</strong> para simplificar una fracción es necesario y suficiente que el numerador y el denominador tengan un factor común. En el caso de monomios la simplificación se hace en forma directa; si el numerador o el denominador tienen dos o más términos, es necesario factorizar primero y luego simplificar. <span class="citation-tag" tabindex="0"><sup>[15]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 43</span></span></p>' +
            '<p><strong>1.7.2 Multiplicación y división de fracciones algebraicas:</strong> se multiplican los numeradores y los denominadores entre sí y se hacen todas las simplificaciones posibles. En el caso de los monomios las simplificaciones pueden hacerse antes o después de multiplicar; en el caso de los polinomios conviene hacer todas las simplificaciones primero (factorizando) y luego las multiplicaciones. Para dividir fracciones, se multiplica la primera por el recíproco de la segunda. <span class="citation-tag" tabindex="0"><sup>[16]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 45</span></span></p>' +
            '<p><strong>1.7.3 Adición y sustracción de fracciones algebraicas:</strong> si las fracciones tienen el mismo denominador, se suman (o restan) los numeradores y se conserva el denominador. Si los denominadores son diferentes, se debe buscar el <strong>mínimo común múltiplo (m.c.m.)</strong> entre ellos y amplificar cada fracción por el factor necesario, de modo que todas queden reducidas a un denominador común. El m.c.m. de expresiones algebraicas es aquella que las contiene, como factores, a todas. <span class="citation-tag" tabindex="0"><sup>[17]</sup><span class="tooltip-text">Álgebra en los números reales, Cap. 1, pág. 50</span></span></p>'
        }
    ],
    conceptosGlosario: [
        'Álgebra en los números reales, Cap. 1, pág. 7 — Lenguaje algebraico: definición de variable y ejemplos.',
        'Álgebra en los números reales, Cap. 1, pág. 8 — Múltiplos, fracciones y potencias de una variable; otras expresiones algebraicas.',
        'Álgebra en los números reales, Cap. 1, pág. 9-10 — Ejercicios resueltos y propuestos de lenguaje algebraico.',
        'Álgebra en los números reales, Cap. 1, pág. 11 — Definición de término algebraico, coeficiente, factor literal, grado; expresión algebraica, binomio, trinomio, polinomio.',
        'Álgebra en los números reales, Cap. 1, pág. 12 — Valorización de expresiones algebraicas.',
        'Álgebra en los números reales, Cap. 1, pág. 14-15 — Términos semejantes y reglas de eliminación de paréntesis.',
        'Álgebra en los números reales, Cap. 1, pág. 19 — Multiplicación de potencias y multiplicación algebraica.',
        'Álgebra en los números reales, Cap. 1, pág. 24 — Productos notables y triángulo de Pascal.',
        'Álgebra en los números reales, Cap. 1, pág. 25 — Representación geométrica de expresiones algebraicas.',
        'Álgebra en los números reales, Cap. 1, pág. 29-30 — Factorización: factor común (monomio y polinomio).',
        'Álgebra en los números reales, Cap. 1, pág. 32 — Factor común compuesto.',
        'Álgebra en los números reales, Cap. 1, pág. 34 — Diferencia de cuadrados.',
        'Álgebra en los números reales, Cap. 1, pág. 37 — Trinomios ordenados.',
        'Álgebra en los números reales, Cap. 1, pág. 41 — Sumas o diferencias de cubos.',
        'Álgebra en los números reales, Cap. 1, pág. 43 — Simplificación de fracciones algebraicas.',
        'Álgebra en los números reales, Cap. 1, pág. 45 — Multiplicación y división de fracciones algebraicas.',
        'Álgebra en los números reales, Cap. 1, pág. 50 — Mínimo común múltiplo, adición y sustracción de fracciones algebraicas.'
    ],

    /* ---------------- 3. FÓRMULAS Y RELACIONES CLAVE ---------------- */
    formulas: [
        {
            box: 'aⁿ · aᵐ = a^(n+m)　　(aⁿ)ᵐ = a^(n·m)　　a⁰ = 1 (a≠0)　　(ab)ⁿ = aⁿ · bⁿ',
            vars: 'Reglas de multiplicación de potencias de igual base',
            fuente: 'Álgebra en los números reales, Cap. 1, pág. 19'
        },
        {
            box: '(a ± b)² = a² ± 2ab + b²',
            vars: 'Cuadrado de un binomio',
            fuente: 'Álgebra en los números reales, Cap. 1, pág. 24'
        },
        {
            box: '(a + b)(a − b) = a² − b²',
            vars: 'Suma por diferencia',
            fuente: 'Álgebra en los números reales, Cap. 1, pág. 24'
        },
        {
            box: '(x + a)(x + b) = x² + x · (a+b) + ab',
            vars: 'Producto de binomios con un término común',
            fuente: 'Álgebra en los números reales, Cap. 1, pág. 24'
        },
        {
            box: '(a ± b)³ = a³ ± 3a²b + 3ab² ± b³',
            vars: 'Cubo de un binomio',
            fuente: 'Álgebra en los números reales, Cap. 1, pág. 24'
        },
        {
            box: 'x³ − y³ = (x − y)(x² + xy + y²)',
            vars: 'Diferencia de cubos',
            fuente: 'Álgebra en los números reales, Cap. 1, pág. 41'
        },
        {
            box: 'x³ + y³ = (x + y)(x² − xy + y²)',
            vars: 'Suma de cubos',
            fuente: 'Álgebra en los números reales, Cap. 1, pág. 41'
        }
    ],
    formulasTabla: {
        titulo: 'Triángulo de Pascal — coeficientes de (a+b)ⁿ',
        headers: ['(a+b)ⁿ', 'Coeficientes'],
        filas: [
            ['(a+b)⁰', '1'],
            ['(a+b)¹', '1  1'],
            ['(a+b)²', '1  2  1'],
            ['(a+b)³', '1  3  3  1'],
            ['(a+b)⁴', '1  4  6  4  1'],
            ['(a+b)⁵', '1  5  10  10  5  1'],
            ['(a+b)⁶', '1  6  15  20  15  6  1']
        ],
        fuente: 'Álgebra en los números reales, Cap. 1, pág. 24'
    },
    formulasGlosario: [
        'Álgebra en los números reales, Cap. 1, pág. 19 — Multiplicación de potencias.',
        'Álgebra en los números reales, Cap. 1, pág. 24 — Productos notables y triángulo de Pascal.',
        'Álgebra en los números reales, Cap. 1, pág. 41 — Sumas y diferencias de cubos.'
    ],

    /* ---------------- 4. EJEMPLOS RESUELTOS ---------------- */
    ejemplos: [
        {
            titulo: 'Ejemplo 1 — Lenguaje algebraico',
            problema: 'Expresemos en lenguaje algebraico: el doble de un número, aumentado en la mitad del mismo número.',
            solucionLineas: [
                'Aquí el "número" no está determinado; se le asigna la variable x.',
                'Resultado: 2x + x/2'
            ],
            fuente: 'Álgebra en los números reales, pág. 8.'
        },
        {
            titulo: 'Ejemplo 2 — Lenguaje algebraico',
            problema: 'Expresemos en lenguaje algebraico: la mitad de a más el triple de b.',
            solucionLineas: [
                'Aquí ya están asignadas las variables, son a y b.',
                'Resultado: a/2 + 3b'
            ],
            fuente: 'Álgebra en los números reales, pág. 9.'
        },
        {
            titulo: 'Ejemplo 3 — Lenguaje algebraico',
            problema: 'Expresemos en lenguaje algebraico: la suma de tres números pares consecutivos.',
            solucionLineas: [
                '(2n) + (2n+2) + (2n+4)',
                'o bien: (2n−2) + (2n) + (2n+2)'
            ],
            fuente: 'Álgebra en los números reales, pág. 9.'
        },
        {
            titulo: 'Ejemplo 4 — Valorización de expresiones algebraicas',
            problema: 'Determinemos el valor del monomio a²b cuando a=2 y b=5.',
            solucionLineas: [
                'Se reemplazan directamente las letras por los valores asignados.',
                '2² · 5 = 4 · 5 = 20'
            ],
            fuente: 'Álgebra en los números reales, pág. 12.'
        },
        {
            titulo: 'Ejemplo 5 — Valorización de expresiones algebraicas',
            problema: 'Si x=−2, y=5 y z=4, determinemos el valor de 2x + 3y − z.',
            solucionLineas: [
                '2·(−2) + 3·5 − 4',
                '= −4 + 15 − 4 = 7'
            ],
            fuente: 'Álgebra en los números reales, pág. 12.'
        },
        {
            titulo: 'Ejemplo 6 — Reducción de términos semejantes',
            problema: 'Reduzcamos la expresión 2a + 3b − 5a + 6b.',
            solucionLineas: [
                'Los términos 2a y −5a son semejantes entre sí, y lo mismo ocurre con 3b y 6b.',
                '(2a − 5a) + (3b + 6b) = −3a + 9b'
            ],
            fuente: 'Álgebra en los números reales, pág. 15.'
        },
        {
            titulo: 'Ejemplo 7 — Uso de paréntesis',
            problema: 'Reduzcamos la expresión 3x²y − (x²y − 2xy²) + 3x²y.',
            solucionLineas: [
                'Al eliminar el paréntesis precedido de signo −, se cambian todos los signos del interior:',
                '3x²y − x²y + 2xy² + 3x²y',
                '(3x²y − x²y + 3x²y) + 2xy² = 5x²y + 2xy²'
            ],
            fuente: 'Álgebra en los números reales, pág. 15.'
        },
        {
            titulo: 'Ejemplo 8 — Multiplicación de monomio por polinomio',
            problema: 'Efectuemos la multiplicación −4a²b(a² + ab − b).',
            solucionLineas: [
                'Se multiplica el monomio por cada término del polinomio:',
                '−4a²b · a² − 4a²b · ab − 4a²b · (−b)',
                '= −4a⁴b − 4a³b² + 4a²b²'
            ],
            fuente: 'Álgebra en los números reales, pág. 20.'
        },
        {
            titulo: 'Ejemplo 9 — Multiplicación de dos polinomios',
            problema: 'Efectuemos el producto (2x + y)(3x + 2y).',
            solucionLineas: [
                '2x(3x+2y) + y(3x+2y) = 6x² + 4xy + 3yx + 2y²',
                'Los términos 4xy y 3yx son semejantes y deben reducirse:',
                '= 6x² + 7xy + 2y²'
            ],
            fuente: 'Álgebra en los números reales, pág. 20.'
        },
        {
            titulo: 'Ejemplo 10 — Cuadrado de un binomio',
            problema: 'Desarrollemos (3a − 5b)².',
            solucionLineas: [
                '(3a)² − 2 · 3a · 5b + (5b)²',
                '= 9a² − 30ab + 25b²'
            ],
            fuente: 'Álgebra en los números reales, pág. 25.'
        },
        {
            titulo: 'Ejemplo 11 — Cubo de un binomio',
            problema: 'Desarrollemos (p + 2)³.',
            solucionLineas: [
                'p³ + 3 · p² · 2 + 3 · p · 2² + 2³',
                '= p³ + 6p² + 12p + 8'
            ],
            fuente: 'Álgebra en los números reales, pág. 25.'
        },
        {
            titulo: 'Ejemplo 12 — Factor común',
            problema: 'Factoricemos la expresión 6xy² − 15x²y + 21x²y².',
            solucionLineas: [
                'El coeficiente numérico contenido en los tres términos es el 3 y el factor literal es xy; el factor común es 3xy.',
                '6xy² − 15x²y + 21x²y² = 3xy (2y − 5x + 7xy)'
            ],
            fuente: 'Álgebra en los números reales, pág. 30.'
        },
        {
            titulo: 'Ejemplo 13 — Factor común compuesto',
            problema: 'Factoricemos la expresión ax + bx + cx − ay − by − cy.',
            solucionLineas: [
                'Se asocian el primero y el cuarto, el segundo y el quinto, el tercero y el sexto:',
                '(ax − ay) + (bx − by) + (cx − cy) = a(x−y) + b(x−y) + c(x−y)',
                '= (a + b + c)(x − y)'
            ],
            fuente: 'Álgebra en los números reales, pág. 32.'
        },
        {
            titulo: 'Ejemplo 14 — Diferencia de cuadrados',
            problema: 'Factoricemos 9m² − 16p².',
            solucionLineas: [
                '9m² es el cuadrado de 3m y 16p² es el cuadrado de 4p.',
                '9m² − 16p² = (3m + 4p)(3m − 4p)'
            ],
            fuente: 'Álgebra en los números reales, pág. 35.'
        },
        {
            titulo: 'Ejemplo 15 — Trinomios ordenados',
            problema: 'Factoricemos x² − 5x + 6.',
            solucionLineas: [
                'No es cuadrado de binomio, porque +6 no es cuadrado de un número entero; corresponde al producto de dos binomios con término común x.',
                'Se buscan dos números cuyo producto sea +6 y cuya suma sea −5: son −2 y −3.',
                'x² − 5x + 6 = (x − 2)(x − 3)'
            ],
            fuente: 'Álgebra en los números reales, pág. 38.'
        },
        {
            titulo: 'Ejemplo 16 — Diferencia de cubos',
            problema: 'Factoricemos a³ − 8.',
            solucionLineas: [
                'a³ es el cubo de a y 8 es el cubo de 2; se trata de una diferencia de cubos.',
                'a³ − 8 = (a − 2)(a² + 2a + 4)'
            ],
            fuente: 'Álgebra en los números reales, pág. 41.'
        },
        {
            titulo: 'Ejemplo 17 — Simplificación de fracciones algebraicas',
            problema: 'Simplifiquemos la fracción (x² + 5x + 6) / (x² + 3x + 2).',
            solucionLineas: [
                'Se factorizan numerador y denominador: (x+2)(x+3) / (x+2)(x+1)',
                'Se simplifica el factor común (x+2):',
                '= (x + 3) / (x + 1)'
            ],
            fuente: 'Álgebra en los números reales, pág. 43.'
        },
        {
            titulo: 'Ejemplo 18 — División de fracciones algebraicas',
            problema: 'Efectuemos la división (2ab)/(3x) : (2a)/(3xy).',
            solucionLineas: [
                'Se cambia el signo de división por el de multiplicación e invirtiendo la segunda fracción:',
                '(2ab)/(3x) · (3xy)/(2a)',
                'Se simplifica y se obtiene: by'
            ],
            fuente: 'Álgebra en los números reales, pág. 46-47.'
        },
        {
            titulo: 'Ejemplo 19 — Adición y sustracción de fracciones algebraicas',
            problema: 'Efectuemos la operación 4/x + 5/(2x) − 3/(5x²).',
            solucionLineas: [
                'Los denominadores son diferentes; el m.c.m. entre ellos es 10x².',
                '= (4 · 10x + 5 · 5x − 3 · 2) / 10x²',
                '= (40x + 25x − 6) / 10x² = (65x − 6) / 10x²'
            ],
            fuente: 'Álgebra en los números reales, pág. 50.'
        }
    ],
    ejemplosGlosario: [
        'Álgebra en los números reales, Cap. 1, pág. 8 — Ejemplo de lenguaje algebraico (doble aumentado en la mitad).',
        'Álgebra en los números reales, Cap. 1, pág. 9 — Ejemplos de lenguaje algebraico (mitad más triple; suma de pares consecutivos).',
        'Álgebra en los números reales, Cap. 1, pág. 12 — Ejemplos de valorización de expresiones algebraicas.',
        'Álgebra en los números reales, Cap. 1, pág. 15 — Ejemplos de reducción de términos semejantes y uso de paréntesis.',
        'Álgebra en los números reales, Cap. 1, pág. 20 — Ejemplos de multiplicación algebraica.',
        'Álgebra en los números reales, Cap. 1, pág. 25 — Ejemplos de productos notables.',
        'Álgebra en los números reales, Cap. 1, pág. 30 — Ejemplo de factor común.',
        'Álgebra en los números reales, Cap. 1, pág. 32 — Ejemplo de factor común compuesto.',
        'Álgebra en los números reales, Cap. 1, pág. 35 — Ejemplo de diferencia de cuadrados.',
        'Álgebra en los números reales, Cap. 1, pág. 38 — Ejemplo de trinomios ordenados.',
        'Álgebra en los números reales, Cap. 1, pág. 41 — Ejemplo de diferencia de cubos.',
        'Álgebra en los números reales, Cap. 1, pág. 43 — Ejemplo de simplificación de fracciones algebraicas.',
        'Álgebra en los números reales, Cap. 1, pág. 46-47 — Ejemplo de división de fracciones algebraicas.',
        'Álgebra en los números reales, Cap. 1, pág. 50 — Ejemplo de adición y sustracción de fracciones algebraicas.'
    ],

    /* ---------------- 5. EJERCICIOS INTERACTIVOS ----------------
       tipo 'numero' -> se compara como número (checkExercise)
       tipo 'texto'  -> se compara como texto exacto, sensible a mayúsculas (checkExerciseText) */
    ejercicios: [
        { enunciado: 'Si a=3 y b=2, determina el valor de 2ab.', tipo: 'numero', respuesta: 12, placeholder: 'Respuesta' },
        { enunciado: 'Si a=3 y b=2, determina el valor de a² − b².', tipo: 'numero', respuesta: 5, placeholder: 'Respuesta' },
        { enunciado: 'Si a=3 y b=2, determina el valor de b² − a².', tipo: 'numero', respuesta: -5, placeholder: 'Respuesta' },
        { enunciado: 'Si a=3 y b=2, determina el valor de a² + ab + b².', tipo: 'numero', respuesta: 19, placeholder: 'Respuesta' },
        { enunciado: 'Si a=3 y b=2, determina el valor de −2ab.', tipo: 'numero', respuesta: -12, placeholder: 'Respuesta' },
        { enunciado: 'Si a=3 y b=2, determina el valor de a³ − b³.', tipo: 'numero', respuesta: 19, placeholder: 'Respuesta' },
        { enunciado: 'Si a=3 y b=2, determina el valor de −b⁵.', tipo: 'numero', respuesta: -32, placeholder: 'Respuesta' },
        { enunciado: 'Si a=3 y b=2, determina el valor de 1 + a + b + ab.', tipo: 'numero', respuesta: 12, placeholder: 'Respuesta' },
        { enunciado: 'Si a=3 y b=2, determina el valor de a² + b² − a − b.', tipo: 'numero', respuesta: 8, placeholder: 'Respuesta' },
        { enunciado: 'Si a=3 y b=2, determina el valor de a − b³/4 − 6.', tipo: 'numero', respuesta: -5, placeholder: 'Respuesta' }
    ],

    /* ---------------- 6. TEST DE OPCIÓN MÚLTIPLE ----------------
       correcta: 'a' | 'b' | 'c' | 'd' | 'e' según la posición dentro de "opciones" */
    quiz: [
        { pregunta: 'Si a = −1 y b = −2, el valor de a − ab es:', opciones: ['−1', '−2', '1', '−3', '2'], correcta: 'd' },
        { pregunta: 'Al reducir la expresión a/2 − a se obtiene:', opciones: ['a/2', '−a/2', '−a', '0', '−1/2'], correcta: 'b' },
        { pregunta: 'Si m=2 y p=3 entonces m² − p² es:', opciones: ['5', '−5', '13', '−13', '−2'], correcta: 'b' },
        { pregunta: 'La expresión "el cuadrado de la diferencia entre a y b" es:', opciones: ['(a−b)²', 'a²−b²', 'a−b²', '2(a−b)', '(a−b)/2'], correcta: 'a' },
        { pregunta: 'Al factorizar m² − mn se obtiene:', opciones: ['mn(m−1)', 'm²(m−n)', 'm(m−n)', 'm(1−n)', 'm²(1−n)'], correcta: 'c' },
        { pregunta: 'Al factorizar 4 − p² se obtiene:', opciones: ['(2−p)²', '(2−p)(2+p)', '(p−2)(p+2)', '(4−p)²', '2p(2−p)'], correcta: 'b' },
        { pregunta: '(m² − n²) / (m − n) =', opciones: ['m − n', '1/(m−n)', 'm + n', '1/(m+n)', '(m+n)/(m−n)'], correcta: 'c' },
        { pregunta: '(x² − 11x + 28) / (x − 7) =', opciones: ['(x−4)/(x−7)', 'x−7', 'x−4', 'x+4', 'x+7'], correcta: 'c' },
        { pregunta: '(x³ + y³) / (x² − xy + y²) =', opciones: ['x+y', '1/(x+y)', 'x−y', '1/(x−y)', '(x+y)/xy'], correcta: 'a' },
        { pregunta: '5⁶ + 5⁶ + 5⁶ + 5⁶ + 5⁶ =', opciones: ['5³⁰', '5⁷', '25⁶', '25³⁰'], correcta: 'b' }
    ],

    /* ---------------- 7. TARJETAS DE MEMORIA ---------------- */
    flashcards: [
        { frente: '¿Qué es un término algebraico?', dorso: 'Un conjunto de números y letras que se relacionan entre sí por medio de la multiplicación y/o división; consta de un factor numérico, un factor literal y un grado.' },
        { frente: '¿Qué son términos semejantes?', dorso: 'Términos que tienen el mismo factor literal (y por lo tanto el mismo grado); sólo pueden diferir en el coeficiente numérico.' },
        { frente: 'Regla del paréntesis precedido de signo −', dorso: 'Se elimina cambiando TODOS los signos de los términos del interior (y también se elimina el signo − que lo antecede).' },
        { frente: 'Cuadrado de un binomio', dorso: '(a ± b)² = a² ± 2ab + b²' },
        { frente: 'Suma por diferencia', dorso: '(a + b)(a − b) = a² − b²' },
        { frente: 'Cubo de un binomio', dorso: '(a ± b)³ = a³ ± 3a²b + 3ab² ± b³' },
        { frente: 'Diferencia y suma de cubos', dorso: 'x³ − y³ = (x−y)(x²+xy+y²)<br>x³ + y³ = (x+y)(x²−xy+y²)' },
        { frente: '¿Qué es el mínimo común múltiplo (m.c.m.) de expresiones algebraicas?', dorso: 'Es aquella expresión que las contiene, como factores, a todas.' },
        { frente: '¿Qué es un trinomio ordenado?', dorso: 'Una expresión de la forma ax² + bx + c, donde a, b, c y x representan números reales.' }
    ],

    /* ---------------- 8. MODO PRÁCTICA (bancos de preguntas por nivel) ---------------- */
    practica: {
        facil: [
            { q: 'Reduce: m + 2m', a: '3m', tipo: 'texto' },
            { q: 'Reduce: a + 2a + 9a', a: '12a', tipo: 'texto' },
            { q: 'Reduce: 3a − 2b − 5b + 9a', a: '12a-7b', tipo: 'texto' },
            { q: 'Reduce: 2x − 6y − 2x − 3y − 5y', a: '-14y', tipo: 'texto' },
            { q: 'Elimina paréntesis y reduce: (a+b) + (a−b)', a: '2a', tipo: 'texto' },
            { q: 'Elimina paréntesis y reduce: (a+b) + (b−a)', a: '2b', tipo: 'texto' },
            { q: 'Elimina paréntesis y reduce: (a−b) + (a+b)', a: '2a', tipo: 'texto' },
            { q: 'Elimina paréntesis y reduce: (a−b) − (a+b)', a: '-2b', tipo: 'texto' },
            { q: 'Elimina paréntesis y reduce: 2a − (2a−3b) − b', a: '2b', tipo: 'texto' },
            { q: 'Elimina paréntesis y reduce: 3x + 2y − [x − (x−y)]', a: '3x+y', tipo: 'texto' }
        ],
        medio: [
            { q: 'Si x=4, y=−2 y z=5, determina 2x + y + z', a: '11', tipo: 'texto' },
            { q: 'Si x=4, y=−2 y z=5, determina x − y − 2z', a: '-4', tipo: 'texto' },
            { q: 'Si x=4, y=−2 y z=5, determina (x+y) − (x+z)', a: '-7', tipo: 'texto' },
            { q: 'Si x=4, y=−2 y z=5, determina x(x²+y²+z²)', a: '180', tipo: 'texto' },
            { q: 'Si x=4, y=−2 y z=5, determina 1/x − 1/y', a: '0.75', tipo: 'texto' },
            { q: 'Si x=4, y=−2 y z=5, determina 2x²y − 2xz²', a: '-264', tipo: 'texto' },
            { q: 'Si x=4, y=−2 y z=5, determina x² − 1', a: '15', tipo: 'texto' },
            { q: 'Si x=4, y=−2 y z=5, determina (z²−2) + (z²−3)', a: '45', tipo: 'texto' },
            { q: 'Si x=4, y=−2 y z=5, determina (3−xyz) + (2−xyz)', a: '85', tipo: 'texto' },
            { q: 'Si x=4, y=−2 y z=5, determina x² − y⁴ + z/5', a: '1', tipo: 'texto' }
        ],
        dificil: [
            { q: 'Si m+n=3 y n=−1, determina el valor de m.', a: '4', tipo: 'texto' },
            { q: 'Si m−3=2p y p=−2, determina el valor de m.', a: '-1', tipo: 'texto' },
            { q: 'Si p+q−r=12 y r−q=5, determina el valor de p.', a: '17', tipo: 'texto' },
            { q: 'Si 2a−9=b y a=−3, determina el valor de b.', a: '-15', tipo: 'texto' },
            { q: 'Si 1+2a=b−2 y a=−2, determina el valor de b.', a: '-1', tipo: 'texto' },
            { q: 'Si m es la cuarta parte de p y p es el cuadrado de 2, determina el valor de m.', a: '1', tipo: 'texto' },
            { q: 'La mitad de a es 1. ¿Cuál es el valor de a?', a: '2', tipo: 'texto' },
            { q: 'La tercera parte del doble de m es 4. ¿Cuál es el valor de m?', a: '6', tipo: 'texto' },
            { q: 'Si p+q=2r, q es el triple de p y p=5, determina el valor de r.', a: '10', tipo: 'texto' },
            { q: 'Si m=−2 y n=3, determina el valor de 2m − 3n.', a: '-13', tipo: 'texto' }
        ]
    },

    /* ---------------- 9. RESUMEN DEL CAPÍTULO ---------------- */
    resumenPuntos: [
        'El lenguaje algebraico usa letras (variables) y relaciones matemáticas para generalizar situaciones; toda letra involucrada en una expresión algebraica es una variable.',
        'Un término algebraico consta de un factor numérico (coeficiente), un factor literal y un grado (suma de los exponentes de las letras); una expresión algebraica es una suma o resta de términos y se llama binomio, trinomio o polinomio según su número de términos.',
        'Las expresiones algebraicas se valorizan reemplazando las letras por los valores numéricos asignados y realizando las operaciones indicadas.',
        'Sólo se pueden reducir términos semejantes (mismo factor literal), sumando o restando sus coeficientes; los paréntesis se eliminan sin cambios si están precedidos de +, y cambiando todos los signos interiores si están precedidos de −.',
        'La multiplicación algebraica sigue las reglas de las potencias (aⁿ·aᵐ = a^(n+m), (aⁿ)ᵐ = a^(n·m), a⁰=1, (ab)ⁿ = aⁿ·bⁿ) y la propiedad distributiva para multiplicar monomios, monomio por polinomio y polinomio por polinomio.',
        'Los productos notables (cuadrado de binomio, suma por diferencia, producto de binomios con término común y cubo de binomio) permiten desarrollar ciertos productos sin multiplicar término a término; el triángulo de Pascal entrega los coeficientes de (a+b)ⁿ para potencias mayores.',
        'Factorizar consiste en escribir una expresión algebraica como una multiplicación; los casos vistos son factor común (monomio o polinomio), factor común compuesto (agrupando términos), diferencia de cuadrados, trinomios ordenados (ax²+bx+c) y sumas o diferencias de cubos.',
        'Para simplificar una fracción algebraica, el numerador y el denominador deben tener un factor común; si tienen dos o más términos, primero se factoriza y luego se simplifica.',
        'Para multiplicar fracciones algebraicas se multiplican numeradores y denominadores entre sí; para dividir, se multiplica por el recíproco de la segunda fracción.',
        'Para sumar o restar fracciones algebraicas con igual denominador se operan los numeradores conservando el denominador; con denominadores distintos se debe encontrar el mínimo común múltiplo (m.c.m.) y amplificar cada fracción al denominador común.'
    ],
    resumenErrores: [
        ['Confundir "el doble de a, aumentado en b" con "el doble de a aumentado en b"', 'El primero corresponde a 2a + b; el segundo, cuando el aumento afecta a toda la suma, corresponde a 2(a+b)'],
        ['Confundir "el doble del cuadrado de a" con "el cuadrado del doble de a"', 'El primero es 2a²; el segundo es (2a)²'],
        ['Eliminar un paréntesis precedido de signo − sin cambiar los signos interiores', 'Si el paréntesis está precedido de un signo −, deben cambiarse TODOS los signos de los términos del interior antes de eliminarlo'],
        ['Simplificar términos que se están sumando o restando dentro de una fracción sin factorizar primero', 'Si el numerador o el denominador tiene dos o más términos, es necesario factorizar antes de simplificar'],
        ['No verificar que un trinomio corresponda efectivamente a un cuadrado de binomio', 'El término central del trinomio debe ser exactamente el doble del producto de las raíces cuadradas del primer y tercer término; si no coincide, puede tratarse de un producto de binomios con término común en lugar de un cuadrado de binomio']
    ],
    resumenGlosario: [
        'Álgebra en los números reales, Cap. 1, pág. 7 — Lenguaje algebraico.',
        'Álgebra en los números reales, Cap. 1, pág. 8-10 — Ejercicios de lenguaje algebraico.',
        'Álgebra en los números reales, Cap. 1, pág. 11 — Término algebraico y expresión algebraica.',
        'Álgebra en los números reales, Cap. 1, pág. 12-14 — Valorización de expresiones algebraicas.',
        'Álgebra en los números reales, Cap. 1, pág. 14-18 — Reducción de términos semejantes y uso de paréntesis.',
        'Álgebra en los números reales, Cap. 1, pág. 19-23 — Multiplicación algebraica.',
        'Álgebra en los números reales, Cap. 1, pág. 24-28 — Productos notables.',
        'Álgebra en los números reales, Cap. 1, pág. 29-42 — Factorización: factor común, factor común compuesto, diferencia de cuadrados, trinomios ordenados y sumas o diferencias de cubos.',
        'Álgebra en los números reales, Cap. 1, pág. 43-55 — Fracciones algebraicas: simplificación, multiplicación, división, adición y sustracción.',
        'Álgebra en los números reales, Cap. 1, pág. 56-59 — Prueba de selección múltiple.'
    ]
});
