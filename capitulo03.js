/* ============================================================================
   CAPÍTULO 3 — Relaciones de Masa en las Reacciones Químicas
   Este archivo SOLO contiene contenido (texto, preguntas, respuestas).
   No hay aquí ni una línea de diseño ni de lógica: todo eso vive en index.html
   (el motor). Si necesitas corregir un dato de química, este es el único
   archivo que hay que tocar; si necesitas cambiar cómo se ve la página,
   nunca es aquí.
   ============================================================================ */
registrarCapitulo({
    numero: 3,
    titulo: 'Relaciones de Masa en las Reacciones Químicas',

    /* ---------------- 1. OBJETIVOS DE APRENDIZAJE ---------------- */
    objetivos: [
        'Explicar la naturaleza de la escala de masa atómica y determinar la masa atómica promedio de un elemento a partir de las masas isotópicas y su abundancia relativa. <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 80</span></span>',
        'Describir y aplicar el concepto de mol. <span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 82</span></span>',
        'Calcular la masa molecular y la masa molar de los compuestos, e interconvertir entre masa, moles y número de átomos o moléculas. <span class="citation-tag" tabindex="0"><sup>[3]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 85</span></span>',
        'Comprender cómo un espectrómetro de masas proporciona información sobre las masas atómicas y moleculares. <span class="citation-tag" tabindex="0"><sup>[4]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 88</span></span>',
        'Deducir la composición porcentual en masa de los elementos en un compuesto. <span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 90</span></span>',
        'Resolver la fórmula empírica de un compuesto a partir de su composición porcentual o de un análisis por combustión. <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 93</span></span>',
        'Balancear ecuaciones químicas utilizando coeficientes estequiométricos. <span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 95</span></span>',
        'Determinar las cantidades de reactivo requeridas o de producto formado utilizando estequiometría. <span class="citation-tag" tabindex="0"><sup>[8]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 100</span></span>',
        'Identificar el reactivo limitante en una reacción química y calcular la cantidad de producto a partir de él. <span class="citation-tag" tabindex="0"><sup>[9]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 104</span></span>',
        'Calcular el rendimiento teórico, el rendimiento real y el rendimiento porcentual de una reacción química, y evaluar la economía atómica de una reacción. <span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 108</span></span>'
    ],

    /* ---------------- 2. CONCEPTOS CLAVE ---------------- */
    conceptos: [
        { titulo: '3.1 Masa Atómica', html:
            '<p>La <strong>masa atómica</strong> (a veces llamada peso atómico) es la masa del átomo en <strong>unidades de masa atómica (amu)</strong>. Una unidad de masa atómica se define como una masa exactamente igual a un doceavo de la masa de un átomo de carbono-12 (también llamada un <em>Dalton</em>). El carbono-12 es el isótopo del carbono con seis protones y seis neutrones; su masa atómica se fija en 12 amu como estándar para medir la de los demás elementos. Por ejemplo, un átomo de hidrógeno es, en promedio, solo 8,400 por ciento tan masivo como el carbono-12, por lo que su masa atómica es 1,008 amu. <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 80</span></span></p>' +
            '<p>La mayoría de los elementos naturales (incluido el carbono) tienen más de un isótopo, por lo que la masa atómica reportada es la <strong>masa promedio</strong> de la mezcla natural de isótopos. Por ejemplo, las abundancias naturales del carbono-12 y carbono-13 son 98,90 por ciento y 1,10 por ciento, respectivamente, y la masa atómica del carbono-13 es 13,00335 amu; así, la masa atómica promedio del carbono es 12,01 amu. Si se examinaran átomos de carbono individualmente, se encontraría uno de masa exactamente 12 amu o uno de 13,00335 amu, pero nunca uno de 12,01 amu. <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 80-81</span></span></p>'
        },
        { titulo: '3.2 El Número de Avogadro y la Masa Molar de un Elemento', html:
            '<p>En el sistema SI, el <strong>mol</strong> es la cantidad de una sustancia que contiene exactamente 6,0221413 × 10<sup>23</sup> entidades elementales (átomos, moléculas u otras partículas); este número se conoce como el <strong>número de Avogadro (N<sub>A</sub>)</strong>, en honor al científico italiano Amedeo Avogadro, y se redondea usualmente a 6,022 × 10<sup>23</sup>. Así como una docena de naranjas contiene 12 naranjas, 1 mol de átomos de hidrógeno contiene 6,022 × 10<sup>23</sup> átomos de H. <span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 82</span></span></p>' +
            '<p>La <strong>masa molar (ℳ)</strong> es la masa (en gramos o kilogramos) de 1 mol de unidades (átomos o moléculas) de una sustancia; la masa molar de un elemento (en gramos) es numéricamente igual a su masa atómica en amu. Conociendo la masa molar y el número de Avogadro, es posible calcular la masa de un solo átomo en gramos: 1 g = 6,022 × 10<sup>23</sup> amu, y 1 amu = 1,6605 × 10<sup>−24</sup> g. Estas relaciones permiten realizar conversiones entre masa, moles y número de átomos de un elemento. <span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 83</span></span></p>'
        },
        { titulo: '3.3 Masa Molecular', html:
            '<p>La <strong>masa molecular</strong> (o peso molecular) es la masa (en unidades de masa atómica) de una molécula, y se determina sumando las masas atómicas de cada átomo presente en la molécula (por ejemplo, la masa molecular del H<sub>2</sub>O es 2(1,008 amu) + 16,00 amu = 18,02 amu). La masa molar de un compuesto (en gramos) es numéricamente igual a su masa molecular (en amu), y 1 mol de un compuesto contiene el número de Avogadro de moléculas. <span class="citation-tag" tabindex="0"><sup>[3]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 85-86</span></span></p>' +
            '<p>Para compuestos iónicos como NaCl y MgO, que no contienen unidades moleculares discretas, se usa el término <strong>masa fórmula</strong> en lugar de masa molecular; corresponde a la masa de una unidad fórmula (por ejemplo, la masa fórmula de NaCl es 22,99 amu + 35,45 amu = 58,44 amu). <span class="citation-tag" tabindex="0"><sup>[3]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 87-88</span></span></p>'
        },
        { titulo: '3.4 El Espectrómetro de Masas', html:
            '<p>El método más directo y exacto para determinar masas atómicas y moleculares es la <strong>espectrometría de masas</strong>. En un tipo de espectrómetro, una muestra gaseosa es bombardeada por electrones de alta energía que producen iones positivos; estos iones son acelerados por placas cargadas y desviados en una trayectoria circular por un imán según su relación masa-carga (m/z). La corriente registrada en el detector es proporcional al número de iones, lo que permite determinar la abundancia relativa de los isótopos. <span class="citation-tag" tabindex="0"><sup>[4]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 88-89</span></span></p>' +
            '<p>El primer espectrómetro de masas, desarrollado en la década de 1920 por F. W. Aston, proporcionó evidencia contundente de la existencia de isótopos: neón-20 (19,9924 amu, 90,92 por ciento) y neón-22 (21,9914 amu, 8,82 por ciento); más tarde se descubrió un tercer isótopo estable, el neón-21 (20,9940 amu, 0,257 por ciento de abundancia). <span class="citation-tag" tabindex="0"><sup>[4]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 89</span></span></p>'
        },
        { titulo: '3.5 Composición Porcentual de los Compuestos', html:
            '<p>La <strong>composición porcentual en masa</strong> es el porcentaje en masa de cada elemento en un compuesto. Se obtiene dividiendo la masa de cada elemento en 1 mol del compuesto entre la masa molar del compuesto y multiplicando por 100 por ciento: %composición = (n × masa molar del elemento / masa molar del compuesto) × 100%, donde n es el número de moles del elemento en 1 mol del compuesto. Tanto la fórmula molecular como la fórmula empírica de un compuesto proporcionan la misma composición porcentual en masa. <span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 90</span></span></p>' +
            '<p>El procedimiento puede invertirse: dada la composición porcentual en masa de un compuesto, se puede determinar su fórmula empírica asumiendo una muestra de exactamente 100 g, convirtiendo cada porcentaje directamente a gramos y luego a moles de cada elemento. <span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 91</span></span></p>'
        },
        { titulo: '3.6 Determinación Experimental de Fórmulas Empíricas', html:
            '<p>Si se conoce la composición porcentual de un compuesto, se puede identificar experimentalmente. El análisis químico indica los gramos de cada elemento presentes en una cantidad dada de compuesto; estas cantidades se convierten a moles, y la relación molar más simple da la <strong>fórmula empírica</strong> (que significa "basada solo en observación y medición"). <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 93</span></span></p>' +
            '<p>En el <strong>análisis por combustión</strong> (por ejemplo, del etanol), la muestra se quema y se mide el CO<sub>2</sub> y el H<sub>2</sub>O producidos para determinar las masas de carbono e hidrógeno; el oxígeno, si está presente, se obtiene por diferencia respecto a la masa total de la muestra. <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 93-94</span></span></p>' +
            '<p>La fórmula calculada a partir de la composición porcentual es siempre la fórmula empírica, ya que los subíndices se reducen siempre a los números enteros más pequeños. Para obtener la <strong>fórmula molecular</strong> real se necesita además la masa molar aproximada del compuesto: la masa molar real debe ser un múltiplo entero de la masa molar de la fórmula empírica. <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 94</span></span></p>'
        },
        { titulo: '3.7 Reacciones Químicas y Ecuaciones Químicas', html:
            '<p>Una <strong>reacción química</strong> es un proceso en el cual una o más sustancias se transforman en una o más sustancias nuevas. Una <strong>ecuación química</strong> usa símbolos químicos para mostrar lo que ocurre durante una reacción, con los <strong>reactivos</strong> (materiales de partida) escritos a la izquierda y los <strong>productos</strong> (sustancias formadas) a la derecha de una flecha. Los estados físicos se indican con las letras g, l, s y aq (gas, líquido, sólido y disolución acuosa, respectivamente). <span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 95-97</span></span></p>' +
            '<p>Para conformarse con la <strong>ley de conservación de la masa</strong>, una ecuación química debe estar <strong>balanceada</strong>: debe haber el mismo número de átomos de cada tipo en ambos lados de la flecha. Esto se logra ajustando los <strong>coeficientes estequiométricos</strong> (nunca los subíndices, ya que cambiarlos altera la identidad de la sustancia). El procedimiento general consiste en identificar reactivos y productos, balancear primero los elementos que aparecen una sola vez en cada lado, y por último los que aparecen en dos o más fórmulas. <span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 97-99</span></span></p>'
        },
        { titulo: '3.8 Cantidades de Reactivos y Productos', html:
            '<p>La <strong>estequiometría</strong> es el estudio cuantitativo de los reactivos y productos en una reacción química. Sea cual sea la unidad dada (moles, gramos, litros, etc.), se usan los moles para calcular la cantidad de producto formado, mediante el <strong>método del mol</strong>: los coeficientes estequiométricos de una ecuación balanceada pueden interpretarse como el número de moles de cada sustancia, lo que permite escribir relaciones de equivalencia molar (por ejemplo, 3 mol H<sub>2</sub> ≏ 2 mol NH<sub>3</sub>). <span class="citation-tag" tabindex="0"><sup>[8]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 100-101</span></span></p>' +
            '<p>El procedimiento general para resolver problemas de estequiometría es: (1) escribir la ecuación balanceada; (2) convertir la cantidad dada del reactivo a moles; (3) usar la relación molar de la ecuación balanceada para calcular los moles del producto; (4) convertir los moles del producto a gramos u otras unidades. <span class="citation-tag" tabindex="0"><sup>[8]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 102</span></span></p>'
        },
        { titulo: '3.9 Reactivos Limitantes', html:
            '<p>En la práctica, los reactivos rara vez están presentes en cantidades estequiométricas exactas. El <strong>reactivo limitante</strong> es el reactivo que se consume primero en una reacción, y determina la cantidad máxima de producto que puede formarse; los <strong>reactivos en exceso</strong> son los que están presentes en cantidades mayores a las necesarias para reaccionar con el reactivo limitante. <span class="citation-tag" tabindex="0"><sup>[9]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 104</span></span></p>' +
            '<p>Para identificar el reactivo limitante, se calcula la cantidad de producto que se obtendría a partir de cada reactivo por separado; el reactivo que produce la menor cantidad de producto es el limitante. En la práctica, los químicos suelen elegir el reactivo más caro como limitante para asegurar que se convierta por completo en producto. <span class="citation-tag" tabindex="0"><sup>[9]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 104-106</span></span></p>'
        },
        { titulo: '3.10 Rendimiento de la Reacción y Economía Atómica', html:
            '<p>El <strong>rendimiento teórico</strong> es la cantidad de producto que resultaría si todo el reactivo limitante reaccionara (el máximo posible según la ecuación balanceada). El <strong>rendimiento real</strong>, la cantidad de producto realmente obtenida, casi siempre es menor al teórico debido a reacciones reversibles, dificultades para recuperar el producto o reacciones secundarias. El <strong>rendimiento porcentual</strong> describe la proporción entre ambos: %rendimiento = (rendimiento real / rendimiento teórico) × 100%. <span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 108</span></span></p>' +
            '<p>La <strong>economía atómica</strong> es una medida de la eficiencia global de convertir reactivos en productos útiles, uno de los objetivos de la química sostenible o "verde", que busca minimizar residuos y subproductos indeseados: economía atómica = (masa de átomos en el producto deseado / masa de átomos en los reactivos) × 100%. Una reacción puede tener un alto rendimiento experimental pero una baja economía atómica si gran parte de los átomos de los reactivos terminan en subproductos no deseados. <span class="citation-tag" tabindex="0"><sup>[11]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 109-111</span></span></p>'
        }
    ],
    conceptosGlosario: [
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 80-81 — Masa atómica, unidad de masa atómica y masa atómica promedio.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 82-83 — Número de Avogadro y masa molar de un elemento.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 85-88 — Masa molecular, masa molar y masa fórmula.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 88-89 — El espectrómetro de masas y el descubrimiento de isótopos.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 90-91 — Composición porcentual de los compuestos.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 93-94 — Determinación experimental de fórmulas empíricas y moleculares.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 95-99 — Reacciones y ecuaciones químicas; balanceo de ecuaciones.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 100-102 — Cantidades de reactivos y productos; método del mol.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 104-106 — Reactivos limitantes y en exceso.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 108 — Rendimiento teórico, real y porcentual.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 109-111 — Economía atómica y química sostenible.'
    ],

    /* ---------------- 3. FÓRMULAS Y RELACIONES CLAVE ---------------- */
    formulas: [
        {
            box: '1 g = 6,022 × 10²³ amu · 1 amu = 1,6605 × 10⁻²⁴ g',
            vars: 'Relación entre unidades de masa atómica y gramos, derivada del número de Avogadro',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 83</span></span>'
        },
        {
            box: '%composición de un elemento = (n × masa molar del elemento / masa molar del compuesto) × 100%',
            vars: 'n = número de moles del elemento en 1 mol del compuesto',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, Ec. 3.1, pág. 90</span></span>'
        },
        {
            box: '%rendimiento = (rendimiento real / rendimiento teórico) × 100%',
            vars: 'El rendimiento teórico lo determina la cantidad de reactivo limitante',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, Ec. 3.4, pág. 108</span></span>'
        },
        {
            box: 'economía atómica = (masa de átomos en el producto deseado / masa de átomos en los reactivos) × 100%',
            vars: 'Mide la eficiencia global de una reacción en convertir reactivos en producto útil',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[11]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, Ec. 3.5, pág. 109</span></span>'
        }
    ],
    formulasTabla: {
        titulo: 'Conversiones fundamentales en estequiometría',
        headers: ['Conversión', 'Relación utilizada', 'Fuente'],
        filas: [
            ['Masa (g) ↔ Moles (n)', 'n = m / ℳ (ℳ = masa molar en g/mol)', 'Figura 3.2, pág. 83'],
            ['Moles (n) ↔ Número de partículas (N)', 'N = n × N<sub>A</sub> (N<sub>A</sub> = 6,022 × 10²³)', 'Figura 3.2, pág. 83'],
            ['Moles de A ↔ Moles de B', 'Se usa la razón molar de los coeficientes de la ecuación balanceada', 'Figura 3.8, pág. 102']
        ],
        fuente: '<span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 3, Figuras 3.2 y 3.8, pág. 83 y 102</span></span>'
    },
    formulasGlosario: [
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 83 — Relación entre amu y gramos; conversiones masa-mol-átomos (Figura 3.2).',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, Ec. 3.1, pág. 90 — Composición porcentual de un elemento en un compuesto.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, Ec. 3.4, pág. 108 — Rendimiento porcentual.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, Ec. 3.5, pág. 109 — Economía atómica.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 102 — Procedimiento del método del mol (Figura 3.8).'
    ],

    /* ---------------- 4. EJEMPLOS RESUELTOS ---------------- */
    ejemplos: [
        {
            titulo: 'Ejemplo 3.1 — Masa atómica promedio',
            problema: 'El boro tiene dos isótopos estables, ¹⁰B (19,80 por ciento, 10,0129 amu) y ¹¹B (80,20 por ciento, 11,0093 amu). Calcula la masa atómica promedio del boro.',
            solucionLineas: [
                'Se convierten los porcentajes a fracciones: 19,80% → 0,1980; 80,20% → 0,8020.',
                'Se multiplica cada masa isotópica por su abundancia fraccionaria y se suman las contribuciones.',
                '(0,1980)(10,0129 amu) + (0,8020)(11,0093 amu) = 10,8129 amu'
            ],
            fuente: 'Chang &amp; Overby, pág. 81.'
        },
        {
            titulo: 'Ejemplo 3.5 — Masa molecular',
            problema: 'Calcula las masas moleculares de: (a) dióxido de azufre (SO₂), y (b) cafeína (C₈H₁₀N₄O₂).',
            solucionLineas: [
                '(a) SO₂ tiene 1 átomo de S y 2 de O: masa molecular = 32,06 amu + 2(16,00 amu) = 64,06 amu.',
                '(b) La cafeína tiene 8 C, 10 H, 4 N y 2 O: 8(12,01) + 10(1,008) + 4(14,01) + 2(16,00) = 194,20 amu.'
            ],
            fuente: 'Chang &amp; Overby, pág. 86.'
        },
        {
            titulo: 'Ejemplo 3.9 — Fórmula empírica a partir de la composición porcentual',
            problema: 'El ácido ascórbico (vitamina C) está compuesto por 40,92% de C, 4,58% de H y 54,50% de O en masa. Determina su fórmula empírica.',
            solucionLineas: [
                'Suponiendo una muestra de 100 g: 40,92 g de C, 4,58 g de H y 54,50 g de O.',
                'Se convierten a moles: n(C) = 3,407 mol, n(H) = 4,54 mol, n(O) = 3,406 mol.',
                'Se dividen todos los subíndices entre el más pequeño (3,406): C ≈ 1, H ≈ 1,33, O ≈ 1, obteniéndose CH₁.₃₃O.',
                'Multiplicando por 3 (para convertir 1,33 en un entero): fórmula empírica C₃H₄O₃.'
            ],
            fuente: 'Chang &amp; Overby, pág. 91.'
        },
        {
            titulo: 'Ejemplo 3.11 — Determinación de la fórmula molecular',
            problema: 'Un compuesto contiene 30,46% de nitrógeno y 69,54% de oxígeno en masa; su masa molar está entre 90 g y 95 g. Determina la fórmula molecular.',
            solucionLineas: [
                'Suponiendo 100 g de compuesto: n(N) = 2,174 mol, n(O) = 4,346 mol.',
                'Dividiendo entre el subíndice menor (2,174): NO₂ es la fórmula empírica (masa molar empírica = 46,01 g).',
                'Razón entre la masa molar real y la empírica: 90 g / 46,01 g ≈ 2.',
                'La fórmula molecular es (NO₂)₂ = N₂O₄, con masa molar real 2(46,01 g) = 92,02 g.'
            ],
            fuente: 'Chang &amp; Overby, pág. 94-95.'
        },
        {
            titulo: 'Ejemplo 3.12 — Balanceo de una ecuación química',
            problema: 'Escribe la ecuación balanceada para la formación de óxido de aluminio (Al₂O₃) a partir de aluminio y oxígeno.',
            solucionLineas: [
                'Ecuación sin balancear: Al + O₂ → Al₂O₃.',
                'Se balancean los átomos de Al colocando un 2 delante de Al: 2Al + O₂ → Al₂O₃.',
                'Se balancean los átomos de O con el coeficiente 3/2: 2Al + (3/2)O₂ → Al₂O₃.',
                'Multiplicando toda la ecuación por 2 para obtener coeficientes enteros: 4Al + 3O₂ → 2Al₂O₃.'
            ],
            fuente: 'Chang &amp; Overby, pág. 99.'
        },
        {
            titulo: 'Ejemplo 3.13 — Estequiometría: masa de CO₂ producido',
            problema: 'La degradación de la glucosa se representa como C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O. Si se consumen 856 g de C₆H₁₂O₆, ¿qué masa de CO₂ se produce?',
            solucionLineas: [
                'Se convierten los gramos de C₆H₁₂O₆ a moles: 856 g × (1 mol / 180,2 g) = 4,75 mol C₆H₁₂O₆.',
                'Con la relación molar 1 mol C₆H₁₂O₆ ≏ 6 mol CO₂: 4,75 mol × 6 = 28,5 mol CO₂.',
                'Se convierten los moles de CO₂ a gramos: 28,5 mol × 44,01 g/mol = 1,25 × 10³ g de CO₂.'
            ],
            fuente: 'Chang &amp; Overby, pág. 102-103.'
        },
        {
            titulo: 'Ejemplo 3.15 — Reactivo limitante en la síntesis de urea',
            problema: 'La urea se produce por 2NH₃(g) + CO₂(g) → (NH₂)₂CO(aq) + H₂O(l). Se tratan 637,2 g de NH₃ con 1142 g de CO₂. (a) ¿Cuál reactivo es el limitante? (b) ¿Qué masa de urea se forma? (c) ¿Cuánto reactivo en exceso queda?',
            solucionLineas: [
                '(a) A partir de 637,2 g de NH₃ se obtendrían 18,71 mol de urea; a partir de 1142 g de CO₂ se obtendrían 25,95 mol. Como el NH₃ produce menos, es el reactivo limitante.',
                '(b) La masa de urea formada es 18,71 mol × 60,06 g/mol = 1124 g de (NH₂)₂CO.',
                '(c) El CO₂ que reaccionó es 18,71 mol × 44,01 g/mol = 823,4 g; el CO₂ que queda en exceso es 1142 g − 823,4 g = 319 g.'
            ],
            fuente: 'Chang &amp; Overby, pág. 105-106.'
        },
        {
            titulo: 'Ejemplo 3.17 — Rendimiento teórico y porcentual',
            problema: 'El titanio se prepara por TiCl₄(g) + 2Mg(l) → Ti(s) + 2MgCl₂(l). Se hacen reaccionar 3,54 × 10⁷ g de TiCl₄ con 1,13 × 10⁷ g de Mg. (a) Calcula el rendimiento teórico de Ti. (b) Calcula el rendimiento porcentual si se obtienen 7,91 × 10⁶ g de Ti.',
            solucionLineas: [
                '(a) A partir del TiCl₄ se obtendrían 1,87 × 10⁵ mol de Ti; a partir del Mg se obtendrían 2,33 × 10⁵ mol de Ti. El TiCl₄ es el reactivo limitante.',
                'Rendimiento teórico: 1,87 × 10⁵ mol × 47,87 g/mol = 8,95 × 10⁶ g de Ti.',
                '(b) %rendimiento = (7,91 × 10⁶ g / 8,95 × 10⁶ g) × 100% = 88,4%.'
            ],
            fuente: 'Chang &amp; Overby, pág. 108-109.'
        }
    ],
    ejemplosGlosario: [
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 81 — Ejemplo 3.1: masa atómica promedio del boro.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 86 — Ejemplo 3.5: cálculo de masas moleculares.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 91 — Ejemplo 3.9: fórmula empírica del ácido ascórbico.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 94-95 — Ejemplo 3.11: determinación de la fórmula molecular.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 99 — Ejemplo 3.12: balanceo de la formación de Al₂O₃.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 102-103 — Ejemplo 3.13: estequiometría de la combustión de glucosa.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 105-106 — Ejemplo 3.15: reactivo limitante en la síntesis de urea.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 108-109 — Ejemplo 3.17: rendimiento teórico y porcentual del titanio.'
    ],

    /* ---------------- 5. EJERCICIOS INTERACTIVOS ----------------
       tipo 'numero' -> se compara como número (checkExercise)
       tipo 'texto'  -> se compara como texto exacto, sensible a mayúsculas (checkExerciseText) */
    ejercicios: [
        { enunciado: 'Las masas atómicas de los dos isótopos estables del cobre, ⁶³Cu (69,17%) y ⁶⁵Cu (30,83%), son 62,9296 amu y 64,9278 amu, respectivamente. Calcula la masa atómica promedio del cobre (en amu).', tipo: 'numero', respuesta: 63.55, placeholder: 'Respuesta' },
        { enunciado: '¿Cuántos moles de magnesio (Mg) hay en 87,3 g de Mg?', tipo: 'numero', respuesta: 3.59, placeholder: 'Respuesta' },
        { enunciado: 'Calcula el número de gramos de plomo (Pb) que hay en 12,4 moles de plomo.', tipo: 'numero', respuesta: 2570, placeholder: 'Respuesta' },
        { enunciado: '¿Cuál es la masa molecular (en amu) del metanol, CH₃OH?', tipo: 'numero', respuesta: 32.04, placeholder: 'Respuesta' },
        { enunciado: 'Calcula el número de moles de cloroformo (CHCl₃) en 198 g de cloroformo.', tipo: 'numero', respuesta: 1.66, placeholder: 'Respuesta' },
        { enunciado: 'Calcula el número de gramos de aluminio (Al) que hay en 371 g de Al₂O₃.', tipo: 'numero', respuesta: 196, placeholder: 'Respuesta' },
        { enunciado: 'En 5Ca + V₂O₅ → 5CaO + 2V, se hacen reaccionar 1,54 × 10³ g de V₂O₅ con 1,96 × 10³ g de Ca. Calcula el rendimiento teórico de V, en gramos.', tipo: 'numero', respuesta: 863, placeholder: 'Respuesta' },
        { enunciado: 'Si el rendimiento real de V del ejercicio anterior es 803 g, calcula el rendimiento porcentual (%).', tipo: 'numero', respuesta: 93.0, placeholder: 'Respuesta' }
    ],

    /* ---------------- 6. TEST DE OPCIÓN MÚLTIPLE ----------------
       correcta: 'a' | 'b' | 'c' | 'd' según la posición dentro de "opciones" */
    quiz: [
        { pregunta: 'Una unidad de masa atómica (amu) se define como:', opciones: ['La masa de un átomo de hidrógeno', 'Un doceavo de la masa de un átomo de carbono-12', 'La masa de un mol de partículas', 'La masa de un protón'], correcta: 'b' },
        { pregunta: 'El número de Avogadro es aproximadamente:', opciones: ['3,1416 × 10²³', '6,022 × 10²³', '9,109 × 10⁻²⁸', '1,6605 × 10⁻²⁴'], correcta: 'b' },
        { pregunta: 'La masa molar de un compuesto (en gramos) es numéricamente igual a:', opciones: ['Su masa molecular en amu', 'Su densidad', 'El número de átomos que contiene', 'Su punto de ebullición'], correcta: 'a' },
        { pregunta: 'En una ecuación química balanceada, los coeficientes estequiométricos pueden interpretarse como:', opciones: ['El número de gramos de cada sustancia', 'El número de moles de cada sustancia', 'La temperatura de la reacción', 'La velocidad de la reacción'], correcta: 'b' },
        { pregunta: 'El reactivo limitante es aquel que:', opciones: ['Está presente en mayor cantidad', 'Se consume por completo primero, limitando la cantidad de producto', 'No participa en la reacción', 'Tiene la masa molar más alta'], correcta: 'b' },
        { pregunta: 'El rendimiento porcentual de una reacción se calcula como:', opciones: ['(rendimiento teórico / rendimiento real) × 100%', '(rendimiento real / rendimiento teórico) × 100%', '(masa de reactivos / masa de productos) × 100%', '(moles del limitante / moles totales) × 100%'], correcta: 'b' }
    ],

    /* ---------------- 7. TARJETAS DE MEMORIA ---------------- */
    flashcards: [
        { frente: '¿Qué es la masa atómica?', dorso: 'La masa de un átomo en unidades de masa atómica (amu), basada en que un átomo de carbono-12 tiene una masa de exactamente 12 amu.' },
        { frente: 'Número de Avogadro (N<sub>A</sub>)', dorso: '6,022 × 10²³; el número de entidades elementales (átomos, moléculas u otras partículas) que hay en 1 mol de una sustancia.' },
        { frente: 'Masa molar', dorso: 'La masa en gramos (o kilogramos) de 1 mol de una sustancia; numéricamente igual a su masa atómica o molecular en amu.' },
        { frente: 'Fórmula empírica vs. fórmula molecular', dorso: 'La empírica da la relación más simple de átomos; la molecular da el número real. La molecular es siempre un múltiplo entero de la empírica.' },
        { frente: 'Reactivo limitante', dorso: 'El reactivo que se consume primero en una reacción, limitando la cantidad máxima de producto que puede formarse.' },
        { frente: 'Rendimiento porcentual', dorso: '%rendimiento = (rendimiento real / rendimiento teórico) × 100%' },
        { frente: 'Economía atómica', dorso: 'Mide la eficiencia de una reacción: (masa de átomos en el producto deseado / masa de átomos en los reactivos) × 100%.' }
    ],

    /* ---------------- 8. MODO PRÁCTICA (bancos de preguntas por nivel) ---------------- */
    practica: {
        facil: [
            { q: '¿Qué isótopo de carbono se usa como estándar para la escala de masa atómica?', a: 'carbono-12', tipo: 'texto' },
            { q: '¿Cuál es el valor redondeado del número de Avogadro?', a: '6.022 x 10^23', tipo: 'texto' },
            { q: '¿Qué unidad se usa para medir la cantidad de sustancia en el SI?', a: 'mol', tipo: 'texto' },
            { q: 'La masa molar de un elemento se expresa comúnmente en unidades de:', a: 'g/mol', tipo: 'texto' },
            { q: '¿Qué instrumento se usa para determinar masas atómicas y moleculares de forma directa y exacta?', a: 'espectrómetro de masas', tipo: 'texto' },
            { q: 'En una ecuación química, el símbolo (s) representa el estado:', a: 'sólido', tipo: 'texto' },
            { q: 'En una ecuación química, el símbolo (aq) representa una disolución:', a: 'acuosa', tipo: 'texto' },
            { q: '¿Cómo se llama el reactivo que se consume por completo primero en una reacción?', a: 'reactivo limitante', tipo: 'texto' }
        ],
        medio: [
            { q: 'El elemento hipotético Q ocurre como 37,50% de ⁴⁷Q (47,054 amu) y 62,50% de ⁵¹Q (50,924 amu). ¿Cuál es su masa atómica promedio (en amu)?', a: '49.473', tipo: 'texto' },
            { q: '¿Cuántos moles de rubidio (Rb) hay en 3,75 × 10²⁴ átomos de Rb?', a: '6.23', tipo: 'texto' },
            { q: '¿Cuál es la masa en gramos de 1,68 moles de vanadio (V)?', a: '85.6', tipo: 'texto' },
            { q: '¿Cuál es la masa molar (en g) del ácido cítrico, H₃C₆H₅O₇?', a: '192.12', tipo: 'texto' },
            { q: 'Determina la fórmula empírica de un compuesto con 43,64% de P y 56,36% de O en masa.', a: 'P2O5', tipo: 'texto' },
            { q: 'La combustión de 1,05 g de un compuesto de C y H produce 3,30 g de CO₂ y 1,35 g de H₂O; su masa molar es cerca de 70 g. ¿Cuál es su fórmula molecular?', a: 'C5H10', tipo: 'texto' },
            { q: 'Si 59,4 g de silicio reaccionan según 3Si + 2Cr₂O₃ → 3SiO₂ + 4Cr, ¿qué masa de SiO₂ se produce (en g)?', a: '127', tipo: 'texto' },
            { q: 'Según 3Mg + N₂ → Mg₃N₂, ¿cuántos gramos de magnesio se necesitan para producir 25,0 g de Mg₃N₂?', a: '18.1', tipo: 'texto' }
        ],
        dificil: [
            { q: 'Si 16,4 g de SO₂ producen 18,1 g de SO₃ en 2SO₂ + O₂ → 2SO₃, ¿cuál es el rendimiento porcentual de la reacción?', a: '88.3', tipo: 'texto' },
            { q: '¿Cuál es la economía atómica (en %) de la reacción Fe₂O₃(s) + 3CO(g) → 2Fe(l) + 3CO₂(g)?', a: '45.83', tipo: 'texto' },
            { q: 'Si se hacen reaccionar 5,00 g de aluminio con 22,2 g de bromo según 2Al + 3Br₂ → 2AlBr₃, ¿qué masa de AlBr₃ se produce (en g)?', a: '24.7', tipo: 'texto' },
            { q: 'En el ejercicio anterior, ¿qué masa del reactivo en exceso (Al) queda sin reaccionar (en g)?', a: '2.50', tipo: 'texto' },
            { q: '¿Cuántos átomos de oxígeno hay en 124 g de fosfato de calcio, Ca₃(PO₄)₂ (masa molar = 310,2 g)?', a: '1.93x10^24', tipo: 'texto' },
            { q: '¿Cuál es la masa en gramos de 0,382 moles de cafeína, C₈H₁₀O₂N₄?', a: '74.2', tipo: 'texto' },
            { q: '¿Cuál de las siguientes muestras contiene más átomos: 7,68 g de He, 112 g de Fe o 389 g de Hg?', a: 'Fe', tipo: 'texto' },
            { q: 'En 4NH₃ + 5O₂ → 4NO + 6H₂O, ¿cuántos moles de NO se producen por cada mol de NH₃ que reacciona?', a: '1', tipo: 'texto' }
        ]
    },

    /* ---------------- 9. RESUMEN DEL CAPÍTULO ---------------- */
    resumenPuntos: [
        'La masa de un átomo se basa en la escala del isótopo carbono-12, al que se asigna una masa de exactamente 12 unidades de masa atómica (amu).',
        'La masa molar de un elemento o compuesto (en gramos) es numéricamente igual a su masa atómica o molecular (en amu) y contiene el número de Avogadro (6,022 × 10²³) de partículas.',
        'La composición porcentual en masa de un compuesto es el porcentaje en masa de cada elemento que lo constituye; se calcula a partir de la fórmula química o se determina experimentalmente.',
        'La fórmula empírica de un compuesto se obtiene a partir de su composición porcentual o de un análisis por combustión; conociendo además la masa molar aproximada, se determina la fórmula molecular.',
        'Una ecuación química debe estar balanceada (mismo número de átomos de cada tipo en reactivos y productos) de acuerdo con la ley de conservación de la masa.',
        'La estequiometría permite predecir la cantidad de producto formado o de reactivo necesario mediante el método del mol, usando la relación molar de la ecuación balanceada.',
        'El reactivo limitante es el que se consume primero y determina la cantidad máxima de producto (rendimiento teórico) que puede obtenerse.',
        'El rendimiento real de una reacción casi siempre es menor que el rendimiento teórico; el rendimiento porcentual expresa la eficiencia de la reacción.',
        'La economía atómica evalúa qué tan bien se incorporan los átomos de los reactivos al producto deseado, y es un concepto clave de la química sostenible o "verde".'
    ],
    resumenErrores: [
        ['Confundir la masa atómica en amu con la masa molar en gramos', 'La masa atómica (amu) describe un átomo individual; la masa molar (g/mol) describe 1 mol de partículas, aunque ambos valores son numéricamente iguales'],
        ['Usar la fórmula molecular para calcular la composición porcentual de un compuesto iónico', 'Para compuestos iónicos se usa la fórmula (o masa) empírica/fórmula, ya que no existen moléculas discretas'],
        ['Olvidar reducir los subíndices a los números enteros más pequeños al determinar una fórmula empírica', 'Los subíndices deben dividirse entre el más pequeño y, si es necesario, multiplicarse por un entero hasta obtener números enteros'],
        ['Cambiar los subíndices en lugar de los coeficientes al balancear una ecuación', 'Solo los coeficientes estequiométricos pueden modificarse; cambiar un subíndice altera la identidad de la sustancia'],
        ['Suponer que el reactivo presente en mayor masa o cantidad es siempre el limitante', 'El reactivo limitante se determina calculando la cantidad de producto que produciría cada reactivo por separado, no por la cantidad inicial'],
        ['Confundir el rendimiento porcentual con la economía atómica', 'El rendimiento porcentual compara el producto obtenido con el teórico; la economía atómica compara la masa de átomos aprovechados frente a la masa total de reactivos']
    ],
    resumenGlosario: [
        'Chang &amp; Overby, Chemistry 15ª Ed., Cap. 3, pág. 80-81 — Masa atómica y masa atómica promedio.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 82-83 — Número de Avogadro y masa molar.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 85-88 — Masa molecular y masa fórmula.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 90-91 — Composición porcentual de los compuestos.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 93-95 — Determinación experimental de fórmulas empíricas y moleculares.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 95-99 — Reacciones y ecuaciones químicas; balanceo.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 100-106 — Estequiometría, método del mol y reactivos limitantes.',
        'Chang &amp; Overby, 15ª Ed., Cap. 3, pág. 108-111 — Rendimiento de la reacción y economía atómica.'
    ]
});
