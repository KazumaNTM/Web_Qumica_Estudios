/* ============================================================================
   CAPÍTULO 3 — Mediciones técnicas y vectores
   Este archivo SOLO contiene contenido (texto, preguntas, respuestas).
   No hay aquí ni una línea de diseño ni de lógica: todo eso vive en index.html
   (el motor). Si necesitas corregir un dato de física, este es el único
   archivo que hay que tocar; si necesitas cambiar cómo se ve la página,
   nunca es aquí.
   ============================================================================ */
registrarCapitulo({
    materia: 'fisica', // agrupa este capítulo bajo "Física" en el menú lateral
    numero: 3,
    titulo: 'Mediciones técnicas y vectores',

    /* ---------------- 1. OBJETIVOS DE APRENDIZAJE ---------------- */
    objetivos: [
        'Escribir las unidades básicas de masa, longitud y tiempo en unidades del SI y del Sistema Usual en Estados Unidos (SUEU). <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 34</span></span>',
        'Definir y aplicar los prefijos del SI que indican múltiplos de las unidades básicas. <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 34</span></span>',
        'Realizar la conversión de una unidad a otra para la misma cantidad, a partir de las definiciones necesarias. <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 34</span></span>',
        'Definir una cantidad vectorial y una cantidad escalar, y dar ejemplos de cada una de ellas. <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 34</span></span>',
        'Determinar las componentes de un vector específico. <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 34</span></span>',
        'Encontrar la resultante de dos o más vectores. <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 34</span></span>'
    ],

    /* ---------------- 2. CONCEPTOS CLAVE ---------------- */
    conceptos: [
        { titulo: '3.1 Cantidades físicas', html:
            '<p>Una <strong>cantidad física</strong> se define describiendo el proceso con el que se mide, y se especifica totalmente con un <strong>número</strong> y una <strong>unidad</strong>; sin excepción de números o fracciones puros, ambos son necesarios porque por sí solos carecen de significado. Un <strong>patrón</strong> es un registro físico permanente, o fácil de determinar, que implica una unidad de medición determinada (por ejemplo, el ohm se define comparando con un resistor patrón). <span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 35</span></span></p>' +
            '<p>Algunas cantidades, como la <strong>rapidez</strong>, se definen en términos de cantidades más elementales (longitud y tiempo); por eso la rapidez es una <strong>cantidad derivada</strong>, mientras que la longitud y el tiempo son <strong>cantidades fundamentales</strong>. Reducir todas las medidas físicas a un número pequeño de cantidades fundamentales con unidades comunes disminuye la confusión en su aplicación. <span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 35-36</span></span></p>'
        },
        { titulo: '3.2 El Sistema Internacional', html:
            '<p>El <strong>Sistema Internacional de Unidades (SI)</strong> —esencialmente el sistema métrico— define siete cantidades básicas con sus unidades oficiales: longitud (metro, m), masa (kilogramo, kg), tiempo (segundo, s), corriente eléctrica (ampere, A), temperatura (kelvin, K), intensidad luminosa (candela, cd) y cantidad de sustancia (mol, mol); además existen dos unidades complementarias: ángulo plano (radián, rad) y ángulo sólido (estereorradián, sr). <span class="citation-tag" tabindex="0"><sup>[3]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, Tabla 3.1, pág. 36</span></span></p>' +
            '<p>De estas unidades básicas, solo el <strong>kilogramo</strong> se define en términos de una muestra física individual, guardada en la Oficina Internacional de Pesas y Medidas en Francia; el resto se define en términos de hechos físicos reproducibles en cualquier parte del mundo. Las combinaciones de dos o más cantidades fundamentales dan lugar a <strong>magnitudes derivadas</strong> (área, volumen, fuerza, presión, etc.), medidas en unidades derivadas. <span class="citation-tag" tabindex="0"><sup>[3]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 36, Tabla 3.2</span></span></p>' +
            '<p>Puesto que Estados Unidos no ha adoptado por completo las unidades del SI, sigue siendo necesario manejar el <strong>Sistema Usual en Estados Unidos (SUEU)</strong>, cuyas unidades para longitud, masa, tiempo, fuerza y temperatura absoluta son el pie, el slug, el segundo, la libra y el grado Rankine, respectivamente; hoy en día estas unidades se han redefinido en términos de los patrones del SI. <span class="citation-tag" tabindex="0"><sup>[3]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, Tabla 3.3, pág. 37-38</span></span></p>'
        },
        { titulo: '3.3 Medición de longitud y tiempo', html:
            '<p>El patrón del <strong>metro (m)</strong> se ha redefinido varias veces a lo largo de la historia (originalmente la diezmillonésima parte de la distancia del Polo Norte al Ecuador, luego una cantidad de longitudes de onda de la luz del kriptón 86) para ganar precisión. Desde 1983, un metro es la longitud de la trayectoria que recorre una onda luminosa en el vacío durante 1/299 792 458 de segundo, con la velocidad de la luz fijada exactamente en c = 2.99792458 × 10⁸ m/s. <span class="citation-tag" tabindex="0"><sup>[4]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 38</span></span></p>' +
            '<p>El patrón original del <strong>segundo</strong> se basaba en el día solar medio (1 s = 1/86 400 del día solar); desde 1967 se define como el tiempo necesario para que el átomo de cesio vibre 9 192 631 770 veces. Los mejores relojes de cesio no se adelantan ni se atrasan más de 1 segundo en 300 000 años. <span class="citation-tag" tabindex="0"><sup>[4]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 38</span></span></p>' +
            '<p>El sistema métrico usa <strong>prefijos</strong> para indicar múltiplos y submúltiplos de la unidad básica (tera-, giga-, mega-, kilo-, centi-, mili-, micro-, nano-, pico-, entre otros). Al registrar datos, se prefiere el prefijo que exprese el número en el intervalo de 0.1 a 1000, eligiendo generalmente múltiplos de mil. <span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, Tabla 3.4, pág. 39</span></span></p>'
        },
        { titulo: '3.4 Cifras significativas', html:
            '<p>Algunos números son exactos (por ejemplo, contar 20 tornillos) y otros son aproximados, como toda medición física, cuyo último dígito se estima y es susceptible de error. Una <strong>cifra significativa</strong> es un dígito realmente conocido; los ceros que solo ubican el punto decimal no son significativos, pero los que no se requieren para esa ubicación sí lo son. <span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 39-40</span></span></p>' +
            '<p><strong>Regla 1</strong> (multiplicación/división): el número de cifras significativas del resultado es igual al del factor de menor precisión (el que tiene menos cifras significativas). <strong>Regla 2</strong> (suma/resta): el número de lugares decimales del resultado debe ser igual al menor número de cifras decimales de cualquier término sumado. En el salón de clases, si no se conocen las limitaciones de cada medida, se supone que todos los datos tienen tres cifras significativas, y conviene acarrear al menos una cifra significativa más en los cálculos intermedios que la que se planea reportar. <span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 40-41</span></span></p>'
        },
        { titulo: '3.5 Instrumentos de medición', html:
            '<p>La elección del instrumento depende de la precisión requerida. La <strong>regla de acero o escalímetro</strong> tiene graduaciones tan pequeñas como 1/32 o 1/64 de pulgada (o milímetros en las reglas métricas), con una precisión máxima del orden de 0.01 in o 0.1 mm. Para diámetros interiores y exteriores se emplean <strong>calibradores</strong> que deben acoplarse a una regla de acero o a un medidor estándar. <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 41</span></span></p>' +
            '<p>El <strong>calibrador micrométrico</strong> permite medir hasta diezmilésimas de pulgada (0.002 mm), y el <strong>calibrador tipo vernier</strong> ofrece una precisión de 0.001 in o 0.02 mm. La profundidad de orificios ciegos, ranuras o huecos se mide con un <strong>micrómetro de profundidad</strong>. <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 42</span></span></p>'
        },
        { titulo: '3.6 Conversión de unidades', html:
            '<p>Un <strong>factor de conversión</strong> es una razón igual a 1 formada a partir de una igualdad entre unidades (por ejemplo, 1 in = 25.4 mm da lugar a las razones 1 in/25.4 mm y 25.4 mm/1 in). Multiplicar una cantidad por el factor de conversión adecuado no cambia su valor real, solo su expresión numérica; el procedimiento consiste en escribir la cantidad a convertir y multiplicarla por los factores que cancelen algebraicamente las unidades no buscadas. <span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 42-43</span></span></p>' +
            '<p>Definiciones útiles de conversión incluyen: 1 in = 25.4 mm, 1 ft = 0.3048 m, 1 yd = 0.914 m y 1 mi = 1.61 km. Cuando aparece una velocidad en una fórmula, siempre debe tener unidades de longitud divididas entre unidades de tiempo (sus <strong>dimensiones</strong>); dos reglas dimensionales clave son que las cantidades que se suman o restan deben tener las mismas dimensiones, y que ambos lados de una igualdad deben expresarse en las mismas dimensiones. <span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 39, 44</span></span></p>'
        },
        { titulo: '3.7 Cantidades vectoriales y escalares', html:
            '<p>Una <strong>cantidad escalar</strong> se especifica totalmente por su magnitud, que consta de un número y una unidad (por ejemplo, rapidez de 15 mi/h, distancia de 12 km, volumen de 200 cm³); las cantidades escalares medidas en las mismas unidades se suman o restan de forma aritmética ordinaria. Una <strong>cantidad vectorial</strong> se especifica totalmente por una magnitud y una dirección, es decir, un número, una unidad y una dirección (por ejemplo, desplazamiento de 20 m al Norte, o velocidad de 40 mi/h a 30° N del O). <span class="citation-tag" tabindex="0"><sup>[8]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 45</span></span></p>' +
            '<p>La dirección de un vector puede indicarse con referencia a las direcciones convencionales (norte, sur, este, oeste), o con un ángulo medido en sentido contrario a las manecillas del reloj a partir del eje x positivo. El <strong>desplazamiento</strong> es un vector independiente de la trayectoria seguida; la <strong>distancia recorrida</strong> es un escalar y puede ser mayor que la magnitud del desplazamiento. Un vector suele especificarse como el par (R, θ); su magnitud R es siempre positiva, y un signo negativo antes del símbolo de un vector solo invierte su dirección, sin afectar su longitud. <span class="citation-tag" tabindex="0"><sup>[8]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 45-47</span></span></p>'
        },
        { titulo: '3.8 Suma o adición de vectores por métodos gráficos', html:
            '<p>El <strong>método del polígono</strong> —el más útil cuando se suman más de dos vectores— consiste en dibujar cada vector a escala, colocando el origen de cada nuevo vector en la punta de flecha del anterior; el vector resultante se traza desde el origen del primer vector hasta la punta del último. El orden en que se suman los vectores no cambia la resultante. <span class="citation-tag" tabindex="0"><sup>[9]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 47-48</span></span></p>' +
            '<p>El <strong>método del paralelogramo</strong> sirve para sumar solo dos vectores a la vez: ambos se dibujan a escala con el mismo origen, formando dos lados adyacentes de un paralelogramo; la resultante es la diagonal trazada desde ese origen común. Los métodos gráficos son útiles para hallar la resultante de desplazamientos y también de fuerzas. <span class="citation-tag" tabindex="0"><sup>[9]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 47-48</span></span></p>'
        },
        { titulo: '3.9 Fuerza y vectores', html:
            '<p>Una <strong>fuerza</strong> es un empujón o tirón que tiende a producir movimiento; se especifica con un número, una unidad y un ángulo, y se suma de la misma manera que los desplazamientos. La unidad de fuerza en el SI es el <strong>newton (N)</strong>, y su relación con la libra es 1 N = 0.225 lb y 1 lb = 4.45 N. <span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 49-50</span></span></p>' +
            '<p>Las fuerzas pueden clasificarse como <strong>fuerza estática</strong> (si no hay desplazamiento resultante del cuerpo, aunque cambien sus dimensiones o forma) o <strong>fuerza dinámica</strong> (si cambia el movimiento del cuerpo). Una fuerza F puede reemplazarse por sus <strong>componentes</strong> horizontal y vertical, F<sub>x</sub> y F<sub>y</sub>, que actuando juntas producen el mismo efecto que la fuerza original. <span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 50</span></span></p>'
        },
        { titulo: '3.10 La fuerza resultante', html:
            '<p>Cuando dos o más fuerzas actúan sobre el mismo punto de un objeto se llaman <strong>fuerzas concurrentes</strong>; su efecto combinado se llama <strong>fuerza resultante</strong>, es decir, la fuerza individual que produce el mismo efecto —en magnitud y dirección— que las fuerzas concurrentes juntas. <span class="citation-tag" tabindex="0"><sup>[11]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 51</span></span></p>' +
            '<p>Si dos fuerzas actúan en la misma dirección, la resultante es la suma de sus magnitudes en esa dirección; si actúan en direcciones opuestas, la resultante es la diferencia de sus magnitudes en la dirección de la fuerza mayor. Si forman un ángulo entre 0° y 180°, la resultante es el vector suma, que puede calcularse con el método del polígono o del paralelogramo. <span class="citation-tag" tabindex="0"><sup>[11]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 52</span></span></p>'
        },
        { titulo: '3.11 Trigonometría y vectores', html:
            '<p>El tratamiento gráfico de vectores es conveniente para visualizar, pero poco preciso; la <strong>trigonometría del triángulo rectángulo</strong> (teorema de Pitágoras y funciones seno, coseno y tangente) permite mayor precisión y rapidez al hallar componentes o resultantes. Usando ejes x y y imaginarios, las componentes de un vector con magnitud F y dirección θ (medida en sentido contrario a las manecillas del reloj desde el eje x positivo) son F<sub>x</sub> = F cos θ y F<sub>y</sub> = F sen θ. <span class="citation-tag" tabindex="0"><sup>[12]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, Ec. 3.1, pág. 52-53</span></span></p>' +
            '<p>El signo de cada componente depende del cuadrante en el que se encuentre el vector: en el primer cuadrante (0°-90°) ambas componentes son positivas; en el segundo (90°-180°) F<sub>x</sub> es negativa y F<sub>y</sub> positiva; en el tercero (180°-270°) ambas son negativas; en el cuarto (270°-360°) F<sub>x</sub> es positiva y F<sub>y</sub> negativa. Cuando dos fuerzas componentes F<sub>x</sub> y F<sub>y</sub> son perpendiculares entre sí, la resultante (R, θ) se obtiene con R = √(F<sub>x</sub>² + F<sub>y</sub>²) y tan θ = F<sub>y</sub>/F<sub>x</sub>. <span class="citation-tag" tabindex="0"><sup>[12]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, Ec. 3.2, pág. 53-55</span></span></p>'
        },
        { titulo: '3.12 El método de las componentes para la suma o adición de vectores', html:
            '<p>Para sumar una serie de desplazamientos o fuerzas con precisión matemática, conviene primero hacer un bosquejo aproximado con el método del polígono. La <strong>componente x de la resultante</strong> es igual a la suma de las componentes x de cada vector, y la <strong>componente y de la resultante</strong> es igual a la suma de las componentes y de cada vector: R<sub>x</sub> = A<sub>x</sub> + B<sub>x</sub> + C<sub>x</sub> + ··· y R<sub>y</sub> = A<sub>y</sub> + B<sub>y</sub> + C<sub>y</sub> + ···. <span class="citation-tag" tabindex="0"><sup>[13]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, Ec. 3.3-3.4, pág. 56</span></span></p>' +
            '<p>Suele ser recomendable elaborar una <strong>tabla de componentes</strong> con la magnitud, el ángulo de referencia y las componentes x y y de cada vector, teniendo cuidado con los signos algebraicos. Una vez obtenidas R<sub>x</sub> y R<sub>y</sub>, la magnitud y dirección de la resultante se calculan igual que para dos vectores perpendiculares: R = √(R<sub>x</sub>² + R<sub>y</sub>²) y tan φ = |R<sub>y</sub>/R<sub>x</sub>|. <span class="citation-tag" tabindex="0"><sup>[13]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 56-59</span></span></p>'
        },
        { titulo: '3.13 Notación de vectores unitarios (opcional)', html:
            '<p>Un <strong>vector unitario</strong> es un vector sin dimensiones cuya magnitud es exactamente 1 y cuya dirección está dada por definición; separa claramente la magnitud de un vector de su dirección. Los símbolos <strong>i, j, k</strong> describen vectores unitarios en las direcciones positivas de x, y y z, respectivamente (por ejemplo, 40 m al Este se expresa como +40i, y 40 m al Oeste como −40i). <span class="citation-tag" tabindex="0"><sup>[14]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 59</span></span></p>' +
            '<p>Cualquier vector A en el plano xy con componentes A<sub>x</sub> y A<sub>y</sub> puede escribirse en notación de vectores unitarios como A = A<sub>x</sub>i + A<sub>y</sub>j. Esta notación es conveniente para el método de las componentes, ya que la resultante puede obtenerse sumando directamente los polinomios de vector unitario de cada vector, sin necesidad de elaborar una tabla. <span class="citation-tag" tabindex="0"><sup>[14]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 59-60</span></span></p>'
        },
        { titulo: '3.14 Resta o sustracción de vectores', html:
            '<p>La <strong>resta de vectores</strong> se logra sumando un vector al negativo del otro: A − B = A + (−B). El negativo de un vector se construye con un vector de igual magnitud pero dirección opuesta (por ejemplo, si A es 40 m al Este, entonces −A es 40 m al Oeste). <span class="citation-tag" tabindex="0"><sup>[15]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 61</span></span></p>' +
            '<p>Gráficamente, la resta se realiza dibujando el vector A y el vector −B (igual magnitud que B pero dirección invertida), y sumándolos con el método del polígono para obtener A − B. Este procedimiento es necesario para encontrar diferencias entre cantidades vectoriales, como en el estudio de la velocidad relativa y la aceleración. <span class="citation-tag" tabindex="0"><sup>[15]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 61</span></span></p>'
        }
    ],
    conceptosGlosario: [
        'Tippens, Física, Cap. 3, pág. 34 — Objetivos del capítulo.',
        'Tippens, Física, Cap. 3, pág. 35-36 — Cantidades físicas, patrones y cantidades fundamentales/derivadas.',
        'Tippens, Física, Cap. 3, pág. 36-38 — El Sistema Internacional (Tablas 3.1, 3.2 y 3.3).',
        'Tippens, Física, Cap. 3, pág. 38 — Medición de longitud y tiempo (patrones del metro y el segundo).',
        'Tippens, Física, Cap. 3, pág. 39 — Prefijos del SI (Tabla 3.4).',
        'Tippens, Física, Cap. 3, pág. 39-41 — Cifras significativas y reglas de redondeo.',
        'Tippens, Física, Cap. 3, pág. 41-42 — Instrumentos de medición.',
        'Tippens, Física, Cap. 3, pág. 42-44 — Conversión de unidades y análisis dimensional.',
        'Tippens, Física, Cap. 3, pág. 45-47 — Cantidades vectoriales y escalares.',
        'Tippens, Física, Cap. 3, pág. 47-48 — Suma de vectores por métodos gráficos (polígono y paralelogramo).',
        'Tippens, Física, Cap. 3, pág. 49-50 — Fuerza y vectores.',
        'Tippens, Física, Cap. 3, pág. 51-52 — La fuerza resultante.',
        'Tippens, Física, Cap. 3, pág. 52-55 — Trigonometría y vectores.',
        'Tippens, Física, Cap. 3, pág. 56-59 — Método de las componentes para sumar vectores.',
        'Tippens, Física, Cap. 3, pág. 59-60 — Notación de vectores unitarios.',
        'Tippens, Física, Cap. 3, pág. 61 — Resta o sustracción de vectores.'
    ],

    /* ---------------- 3. FÓRMULAS Y RELACIONES CLAVE ---------------- */
    formulas: [
        {
            box: 'v = x / t',
            vars: 'v = rapidez · x = distancia recorrida · t = tiempo',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, pág. 44</span></span>'
        },
        {
            box: 'Componentes de un vector: F_x = F cos θ, F_y = F sen θ',
            vars: 'F = magnitud del vector · θ = ángulo medido en contrasentido a las manecillas del reloj desde el eje x positivo',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[12]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, Ec. 3.1, pág. 53</span></span>'
        },
        {
            box: 'Resultante de dos vectores perpendiculares: R = √(F_x² + F_y²), tan θ = F_y / F_x',
            vars: 'R = magnitud de la resultante · θ = dirección de la resultante',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[12]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, Ec. 3.2, pág. 54-55</span></span>'
        },
        {
            box: 'Método de las componentes: R_x = A_x + B_x + C_x + ···, R_y = A_y + B_y + C_y + ···',
            vars: 'R_x, R_y = componentes de la resultante · A, B, C = vectores que se suman',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[13]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, Ec. 3.3-3.4, pág. 56</span></span>'
        }
    ],
    formulasTabla: {
        titulo: 'Múltiplos y submúltiplos de unidades del SI',
        headers: ['Prefijo', 'Símbolo', 'Multiplicador', 'Ejemplo'],
        filas: [
            ['tera', 'T', '1 000 000 000 000 = 10<sup>12</sup>', '1 terametro (Tm)'],
            ['giga', 'G', '1 000 000 000 = 10<sup>9</sup>', '1 gigametro (Gm)'],
            ['mega', 'M', '1 000 000 = 10<sup>6</sup>', '1 megametro (Mm)'],
            ['kilo', 'k', '1 000 = 10<sup>3</sup>', '1 kilómetro (km)'],
            ['centi', 'c', '0.01 = 10<sup>−2</sup>', '1 centímetro (cm)'],
            ['mili', 'm', '0.001 = 10<sup>−3</sup>', '1 milímetro (mm)'],
            ['micro', 'µ', '0.000001 = 10<sup>−6</sup>', '1 micrómetro (µm)'],
            ['nano', 'n', '0.000000001 = 10<sup>−9</sup>', '1 nanómetro (nm)'],
            ['pico', 'p', '0.000000000001 = 10<sup>−12</sup>', '1 picómetro (pm)']
        ],
        fuente: '<span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Tippens, Física, Cap. 3, Tabla 3.4, pág. 39</span></span>'
    },
    formulasGlosario: [
        'Tippens, Física, Cap. 3, pág. 44 — Fórmula de la rapidez.',
        'Tippens, Física, Cap. 3, Ec. 3.1, pág. 53 — Componentes x y y de un vector.',
        'Tippens, Física, Cap. 3, Ec. 3.2, pág. 54-55 — Resultante de dos vectores perpendiculares.',
        'Tippens, Física, Cap. 3, Ec. 3.3-3.4, pág. 56 — Método de las componentes para sumar vectores.',
        'Tippens, Física, Cap. 3, Tabla 3.4, pág. 39 — Prefijos de las unidades del SI.'
    ],

    /* ---------------- 4. EJEMPLOS RESUELTOS ---------------- */
    ejemplos: [
        {
            titulo: 'Ejemplo 3.1 — Conversión de unidades múltiples',
            problema: 'Convierta la rapidez de 60 km/h a unidades de metros por segundo.',
            solucionLineas: [
                'Se cambian los kilómetros a metros (1 km = 1000 m) y las horas a segundos (1 h = 3600 s).',
                '60 (km/h) × (1000 m / 1 km) × (1 h / 3600 s) = 16.7 m/s'
            ],
            fuente: 'Tippens, Física, Cap. 3, pág. 43-44.'
        },
        {
            titulo: 'Ejemplo 3.2 — Análisis dimensional',
            problema: 'Demuestre que la fórmula x = v₀t + ½at² es dimensionalmente correcta, si x está en metros, v₀ en m/s, a en m/s² y t en segundos.',
            solucionLineas: [
                'Se sustituyen las unidades de cada término: m = (m/s)(s) + (m/s²)(s²).',
                'Al simplificar, cada término se reduce a metros: m = m + m.',
                'Ambos lados de la igualdad tienen las mismas dimensiones, por lo que la ecuación es dimensionalmente correcta.'
            ],
            fuente: 'Tippens, Física, Cap. 3, pág. 44-45.'
        },
        {
            titulo: 'Ejemplo 3.3 — Método del polígono',
            problema: 'Un barco recorre 100 km hacia el Norte el primer día, 60 km al noreste el segundo día y 120 km hacia el Este el tercer día. Encuentre el desplazamiento resultante con el método del polígono.',
            solucionLineas: [
                'Se elige una escala (por ejemplo, 20 km = 1 cm) y se dibuja cada vector a escala, uniendo la punta de cada uno con el origen del siguiente.',
                'Al medir con regla y transportador, la flecha resultante mide 10.8 cm, equivalente a 216 km.',
                'El ángulo medido con el transportador es 41°, por lo que R = (216 km, 41°).'
            ],
            fuente: 'Tippens, Física, Cap. 3, pág. 47-48.'
        },
        {
            titulo: 'Ejemplo 3.4 — Método del paralelogramo',
            problema: 'Encuentre la fuerza resultante sobre un burro jalado por dos cuerdas que forman un ángulo de 120° entre sí, con una fuerza de 60 lb en un extremo y 20 lb en el otro.',
            solucionLineas: [
                'Se dibujan a escala las dos fuerzas desde un origen común, formando dos lados de un paralelogramo con un ángulo de 120° entre ellos.',
                'Se completa el paralelogramo y se traza la diagonal (resultante) desde el origen.',
                'Al medir R y θ con regla y transportador: R = (52.9 lb, 19.1°).'
            ],
            fuente: 'Tippens, Física, Cap. 3, pág. 49.'
        },
        {
            titulo: 'Ejemplo 3.5 — Componente de una fuerza por método gráfico',
            problema: 'Una cortadora de césped se empuja hacia abajo por el asa con una fuerza de 160 N, en un ángulo de 30° con respecto a la horizontal. ¿Cuál es la magnitud de la componente horizontal de esta fuerza?',
            solucionLineas: [
                'Se dibuja el vector F a escala (1 cm = 40 N), con una longitud de 4 cm a 30° de la horizontal.',
                'Se mide la componente x (F_x) del vector; la medición revela 3.46 cm.',
                'F_x = 3.46 cm × (40 N / 1 cm) = 138 N.'
            ],
            fuente: 'Tippens, Física, Cap. 3, pág. 51.'
        },
        {
            titulo: 'Ejemplo 3.6 — Componentes x y y por trigonometría',
            problema: '¿Cuáles son las componentes x y y de una fuerza de 200 N, con un ángulo de 60°?',
            solucionLineas: [
                'F_x = F cos θ = (200 N) cos 60° = 100 N.',
                'F_y = F sen θ = (200 N) sen 60° = 173 N.'
            ],
            fuente: 'Tippens, Física, Cap. 3, pág. 53.'
        },
        {
            titulo: 'Ejemplo 3.7 — Componentes con ángulo polar mayor de 90°',
            problema: 'Encuentre las componentes x y y de una fuerza de 400 N a un ángulo polar θ de 220° a partir del eje x positivo.',
            solucionLineas: [
                'El ángulo de referencia es φ = 220° − 180° = 40°.',
                'Como el vector está en el tercer cuadrante, ambas componentes son negativas.',
                'F_x = −(400 N) cos 40° = −306 N; F_y = −(400 N) sen 40° = −257 N.'
            ],
            fuente: 'Tippens, Física, Cap. 3, pág. 54.'
        },
        {
            titulo: 'Ejemplo 3.8 — Resultante de dos vectores perpendiculares',
            problema: '¿Cuál es la resultante de una fuerza de 5 N dirigida horizontalmente a la derecha y una fuerza de 12 N dirigida verticalmente hacia abajo?',
            solucionLineas: [
                'Se toman F_x = 5 N y F_y = −12 N como las componentes de la resultante R.',
                'R = √(F_x² + F_y²) = √((5 N)² + (−12 N)²) = √(169 N²) = 13.0 N.',
                'tan φ = |−12 N / 5 N| = 2.40, por lo que φ = 67.4° S del E; el ángulo polar es θ = 360° − 67.4° = 292.6°.'
            ],
            fuente: 'Tippens, Física, Cap. 3, pág. 55.'
        },
        {
            titulo: 'Ejemplo 3.9 — Método de las componentes con tres fuerzas',
            problema: 'Tres sogas atadas a una estaca reciben las fuerzas A = 20 N, E; B = 30 N, 30° N del O; y C = 40 N, 52° S del O. Determine la fuerza resultante usando el método de las componentes.',
            solucionLineas: [
                'Se elabora una tabla de componentes x y y para cada vector: A_x = +20 N, A_y = 0; B_x = −26.0 N, B_y = +15.0 N; C_x = −24.6 N, C_y = −31.5 N.',
                'Se suman las componentes: R_x = 20.0 − 26.0 − 24.6 = −30.6 N; R_y = 0 + 15.0 − 31.5 = −16.5 N.',
                'R = √((−30.6 N)² + (−16.5 N)²) = 34.8 N; tan φ = |−16.5/−30.6| = 0.539, φ = 28.3° S del O, por lo que R = 34.8 N a 208.3°.'
            ],
            fuente: 'Tippens, Física, Cap. 3, pág. 57-59.'
        }
    ],
    ejemplosGlosario: [
        'Tippens, Física, Cap. 3, pág. 43-44 — Ejemplo 3.1: conversión de km/h a m/s.',
        'Tippens, Física, Cap. 3, pág. 44-45 — Ejemplo 3.2: análisis dimensional de x = v₀t + ½at².',
        'Tippens, Física, Cap. 3, pág. 47-48 — Ejemplo 3.3: método del polígono.',
        'Tippens, Física, Cap. 3, pág. 49 — Ejemplo 3.4: método del paralelogramo.',
        'Tippens, Física, Cap. 3, pág. 51 — Ejemplo 3.5: componente horizontal por método gráfico.',
        'Tippens, Física, Cap. 3, pág. 53 — Ejemplo 3.6: componentes de un vector por trigonometría.',
        'Tippens, Física, Cap. 3, pág. 54 — Ejemplo 3.7: componentes con ángulo polar mayor de 90°.',
        'Tippens, Física, Cap. 3, pág. 55 — Ejemplo 3.8: resultante de dos vectores perpendiculares.',
        'Tippens, Física, Cap. 3, pág. 57-59 — Ejemplo 3.9: método de las componentes con tres fuerzas.'
    ],

    /* ---------------- 5. EJERCICIOS INTERACTIVOS ----------------
       tipo 'numero' -> se compara como número (checkExercise)
       tipo 'texto'  -> se compara como texto exacto, sensible a mayúsculas (checkExerciseText) */
    ejercicios: [
        { enunciado: '¿Cuál es la altura en centímetros de una mujer que mide 5 pies y 6 pulgadas? (Problema 3.1)', tipo: 'numero', respuesta: 168, placeholder: 'Respuesta en cm' },
        { enunciado: 'Un monitor de computadora de 19 in tiene una sección efectiva de imagen que mide 18 in en diagonal. Exprese esta distancia en metros. (Problema 3.5)', tipo: 'numero', respuesta: 0.457, placeholder: 'Respuesta en m' },
        { enunciado: 'Un galón estadounidense equivale a 231 in³. ¿Cuántos galones se necesitan para rellenar un depósito de 18 in de largo, 16 in de ancho y 12 in de alto? (Problema 3.11)', tipo: 'numero', respuesta: 15.0, placeholder: 'Respuesta en gal' },
        { enunciado: 'Una mujer camina 4 km hacia el Este y después 8 km hacia el Norte. ¿Cuál es la magnitud de su desplazamiento resultante, en km? (Problema 3.13)', tipo: 'numero', respuesta: 8.94, placeholder: 'Magnitud en km' },
        { enunciado: 'Un topógrafo registra los desplazamientos A = 600 m, N; B = 400 m, O; C = 200 m, S; y D = 100 m, E. ¿Cuál es la magnitud del desplazamiento neto desde el punto de partida, en m? (Problema 3.15)', tipo: 'numero', respuesta: 500, placeholder: 'Magnitud en m' },
        { enunciado: 'Tres fuerzas actúan simultáneamente sobre el mismo objeto: A = 300 N, 30° N del E; B = 600 N, 270°; y C = 100 N hacia el Este. ¿Cuál es la magnitud de la fuerza resultante, en N? (Problema 3.17)', tipo: 'numero', respuesta: 576, placeholder: 'Magnitud en N' },
        { enunciado: 'Dos cuerdas A y B atadas a un gancho forman un ángulo de 60° entre sí. La tensión sobre A es 80 N y sobre B es 120 N. Con el método del paralelogramo, ¿cuál es la fuerza resultante sobre el gancho, en N? (Problema 3.19)', tipo: 'numero', respuesta: 174, placeholder: 'Respuesta en N' },
        { enunciado: 'Un martillo aplica una fuerza de 260 N en un ángulo de 15° con respecto a la vertical. ¿Cuál es el componente ascendente de la fuerza ejercida sobre el clavo, en N? (Problema 3.23)', tipo: 'numero', respuesta: 251, placeholder: 'Respuesta en N' },
        { enunciado: 'Se necesita un empuje vertical de 80 N para levantar la parte móvil de una ventana usando un mástil. ¿Qué fuerza es necesario ejercer a lo largo del mástil si este forma un ángulo de 34° con la pared, en N? (Problema 3.27)', tipo: 'numero', respuesta: 96.5, placeholder: 'Respuesta en N' },
        { enunciado: 'Halle la magnitud de la resultante de las siguientes fuerzas perpendiculares: 400 N a 0°, 820 N a 270° y 500 N a 90°. (Problema 3.29)', tipo: 'numero', respuesta: 512, placeholder: 'Magnitud en N' },
        { enunciado: 'Un cable está unido al extremo de una viga. ¿Qué tirón se requiere, a un ángulo de 40° con respecto a la horizontal, para producir una fuerza horizontal efectiva de 200 N? (Problema 3.41)', tipo: 'numero', respuesta: 261, placeholder: 'Respuesta en N' },
        { enunciado: 'Un semáforo cuelga a la mitad de una cuerda, de manera que cada segmento forma un ángulo de 10° con la horizontal. La tensión sobre cada segmento es de 200 N y la fuerza resultante en el punto medio es cero. ¿Cuál es el peso del semáforo, en N? (Problema 3.45)', tipo: 'numero', respuesta: 69.5, placeholder: 'Respuesta en N' }
    ],

    /* ---------------- 6. TEST DE OPCIÓN MÚLTIPLE ----------------
       correcta: 'a' | 'b' | 'c' | 'd' según la posición dentro de "opciones" */
    quiz: [
        { pregunta: '¿Cuál de las siguientes es una cantidad vectorial?', opciones: ['Volumen', 'Distancia recorrida', 'Desplazamiento', 'Masa'], correcta: 'c' },
        { pregunta: '¿Cuál es la unidad SI básica de longitud?', opciones: ['Pie', 'Metro', 'Centímetro', 'Yarda'], correcta: 'b' },
        { pregunta: 'De las siete unidades básicas del SI, ¿cuál es la única que se define en términos de una muestra física individual?', opciones: ['El metro', 'El segundo', 'El kilogramo', 'El kelvin'], correcta: 'c' },
        { pregunta: 'Al multiplicar o dividir números aproximados, el número de cifras significativas del resultado debe ser igual a:', opciones: ['El del factor con más cifras significativas', 'El del factor con menos cifras significativas (menor precisión)', 'Siempre tres cifras', 'La suma de las cifras de todos los factores'], correcta: 'b' },
        { pregunta: '¿Qué método para sumar vectores es más práctico cuando se suman más de dos vectores a la vez?', opciones: ['Método del paralelogramo', 'Método del polígono', 'Método de la resta', 'Método del vector unitario'], correcta: 'b' },
        { pregunta: 'Si un vector A tiene una dirección de 230° a partir del eje x positivo, ¿cuáles son los signos de sus componentes x y y?', opciones: ['Ambas positivas', 'A_x positiva, A_y negativa', 'Ambas negativas', 'A_x negativa, A_y positiva'], correcta: 'c' },
        { pregunta: 'La fuerza resultante de dos fuerzas de 10 N y 7 N que actúan sobre el mismo objeto puede tener como máximo una magnitud de:', opciones: ['3 N', '7 N', '10 N', '17 N'], correcta: 'd' },
        { pregunta: 'Un vector unitario se caracteriza porque su magnitud es:', opciones: ['Igual a la del vector original', 'Cero', 'Exactamente 1, sin dimensiones', 'Siempre negativa'], correcta: 'c' },
        { pregunta: 'La resta de vectores A − B se realiza:', opciones: ['Restando aritméticamente las magnitudes', 'Sumando A con el negativo de B', 'Multiplicando A por B', 'No es posible restar vectores'], correcta: 'b' },
        { pregunta: 'Un factor de conversión, como 1 in/25.4 mm, es una razón que siempre equivale a:', opciones: ['0', '1', '10', '100'], correcta: 'b' }
    ],

    /* ---------------- 7. TARJETAS DE MEMORIA ---------------- */
    flashcards: [
        { frente: '¿Qué es una cantidad escalar?', dorso: 'Una cantidad que se especifica totalmente por su magnitud, formada por un número y una unidad (ej. rapidez, distancia, volumen).' },
        { frente: '¿Qué es una cantidad vectorial?', dorso: 'Una cantidad que se especifica totalmente por una magnitud y una dirección: un número, una unidad y una dirección (ej. desplazamiento, velocidad, fuerza).' },
        { frente: '¿Qué es un patrón (en medición)?', dorso: 'Un registro físico permanente, o fácil de determinar, de una cantidad que implica una unidad de medición determinada.' },
        { frente: 'Componentes de un vector', dorso: 'F_x = F cos θ · F_y = F sen θ, donde θ se mide en contrasentido a las manecillas del reloj desde el eje x positivo.' },
        { frente: 'Resultante de dos vectores perpendiculares', dorso: 'R = √(F_x² + F_y²) · tan θ = F_y / F_x' },
        { frente: 'Método del polígono vs. método del paralelogramo', dorso: 'Polígono: útil para sumar más de dos vectores, colocando el origen de cada vector en la punta del anterior.\nParalelogramo: útil solo para sumar dos vectores a la vez, usando la diagonal de un paralelogramo formado por ambos.' },
        { frente: '¿Qué es un vector unitario?', dorso: 'Un vector sin dimensiones, cuya magnitud es exactamente 1 y cuya dirección está dada por definición (símbolos i, j, k para los ejes x, y, z).' }
    ],

    /* ---------------- 8. MODO PRÁCTICA (bancos de preguntas por nivel) ---------------- */
    practica: {
        facil: [
            { q: '¿Cuál es la unidad SI básica de longitud?', a: 'metro', tipo: 'texto' },
            { q: '¿Cuál es la unidad SI básica del tiempo?', a: 'segundo', tipo: 'texto' },
            { q: '¿Cuál es la unidad SI básica de la masa?', a: 'kilogramo', tipo: 'texto' },
            { q: '¿Qué prefijo del SI representa 10⁻³?', a: 'mili', tipo: 'texto' },
            { q: '¿Qué prefijo del SI representa 10³?', a: 'kilo', tipo: 'texto' },
            { q: '¿Cuántos milímetros hay en 1 metro?', a: '1000', tipo: 'texto' },
            { q: '¿Cuántos metros hay en 1 kilómetro?', a: '1000', tipo: 'texto' },
            { q: '¿Cuál es la unidad de fuerza en el SI?', a: 'newton', tipo: 'texto' },
            { q: '¿La masa es una cantidad escalar o vectorial?', a: 'escalar', tipo: 'texto' },
            { q: '¿El desplazamiento es una cantidad escalar o vectorial?', a: 'vectorial', tipo: 'texto' }
        ],
        medio: [
            { q: 'Convierte 1 in a milímetros', a: '25.4', tipo: 'texto' },
            { q: 'Convierte 1 milla a kilómetros', a: '1.61', tipo: 'texto' },
            { q: '¿A cuántos metros equivale 1 pie (ft)?', a: '0.3048', tipo: 'texto' },
            { q: '¿A cuántos newtons equivale 1 libra?', a: '4.45', tipo: 'texto' },
            { q: '¿Cuál es el valor exacto de la velocidad de la luz, en m/s (aproxima a tres cifras significativas × 10⁸)?', a: '3.00', tipo: 'texto' },
            { q: '¿Cuántas cifras significativas tiene la medición 4.003 cm?', a: '4', tipo: 'texto' },
            { q: '¿Cuántas cifras significativas tiene la medición 0.34 cm?', a: '2', tipo: 'texto' },
            { q: '¿Cuántas veces vibra el átomo de cesio en un segundo, según el patrón del SI (en miles de millones, aprox.)?', a: '9192631770', tipo: 'texto' },
            { q: '¿Cuál es la fuerza resultante de dos fuerzas de 15 N y 20 N que actúan en la misma dirección?', a: '35', tipo: 'texto' },
            { q: '¿Cuál es la fuerza resultante de dos fuerzas de 15 N y 20 N que actúan en direcciones opuestas?', a: '5', tipo: 'texto' }
        ],
        dificil: [
            { q: 'Halle las componentes x de una fuerza de 200 N a un ángulo de 60° (usa cos 60° = 0.5)', a: '100', tipo: 'texto' },
            { q: 'Halle la componente y de una fuerza de 200 N a un ángulo de 60° (sen 60° ≈ 0.866)', a: '173', tipo: 'texto' },
            { q: '¿Cuál es la magnitud de la resultante de una fuerza de 5 N horizontal y una fuerza de 12 N vertical (perpendiculares)?', a: '13', tipo: 'texto' },
            { q: 'Convierte una rapidez de 60 km/h a m/s (aproxima a 3 cifras significativas)', a: '16.7', tipo: 'texto' },
            { q: 'Si A = 20 m E, B = 50 m N, C = 40 m O y D = 10 m S, ¿cuál es la componente x neta de la resultante, en m?', a: '-20', tipo: 'texto' },
            { q: 'En el caso anterior, ¿cuál es la componente y neta de la resultante, en m?', a: '40', tipo: 'texto' },
            { q: '¿Cuál es la magnitud de la resultante del ejercicio anterior, en m (redondeado a un decimal)?', a: '44.7', tipo: 'texto' },
            { q: '¿Cuál es el ángulo de referencia φ si tan φ = 2.00?', a: '63.4', tipo: 'texto' }
        ]
    },

    /* ---------------- 9. RESUMEN DEL CAPÍTULO ---------------- */
    resumenPuntos: [
        'La medición técnica es esencial en física; hay siete cantidades fundamentales del SI, cada una con una sola unidad básica oficial, y dos unidades complementarias (radián y estereorradián).',
        'En mecánica, las tres cantidades fundamentales más usadas son longitud, masa y tiempo; las demás cantidades (rapidez, fuerza, volumen, etc.) son derivadas.',
        'Para convertir unidades: se escribe la cantidad a convertir, se recuerdan las definiciones necesarias, se forman dos factores de conversión recíprocos por cada definición, y se multiplica la cantidad por los factores que cancelen las unidades no deseadas.',
        'Las cantidades escalares (magnitud y unidad) se suman o restan aritméticamente; las cantidades vectoriales (magnitud, unidad y dirección) requieren métodos especiales de suma geométrica.',
        'El método del polígono suma vectores dibujando cada uno a escala, uniendo el origen de uno con la punta del anterior; la resultante va del origen del primero a la punta del último.',
        'El método del paralelogramo suma dos vectores a la vez, usando la diagonal del paralelogramo formado por ambos vectores como lados adyacentes.',
        'Las componentes x y y de un vector (R, θ) se calculan con R_x = R cos θ y R_y = R sen θ; la resultante de dos vectores perpendiculares se obtiene con R = √(R_x² + R_y²) y tan φ = |R_y/R_x|.',
        'El método de las componentes suma varios vectores sumando algebraicamente todas las componentes x por un lado y todas las componentes y por otro, para luego calcular la magnitud y dirección de la resultante.',
        'Los vectores unitarios (i, j, k) permiten expresar un vector como A = A_x i + A_y j, separando la magnitud de la dirección y facilitando la suma algebraica de componentes.',
        'La resta de vectores se logra sumando un vector al negativo del otro (A − B = A + (−B)), donde el vector negativo tiene la misma magnitud pero dirección opuesta.'
    ],
    resumenErrores: [
        ['Sumar magnitudes de vectores como si fueran escalares', 'Los vectores solo pueden sumarse aritméticamente si actúan sobre la misma línea y en la misma dirección; en cualquier otro caso se requiere el método del polígono, del paralelogramo o de las componentes'],
        ['Olvidar los signos de las componentes según el cuadrante', 'El signo de F_x y F_y depende del cuadrante en el que se ubique el vector; siempre conviene verificar visualmente la dirección con un diagrama'],
        ['Confundir distancia recorrida con magnitud del desplazamiento', 'La distancia es un escalar que depende de la trayectoria; el desplazamiento es un vector independiente de la trayectoria y su magnitud puede ser menor que la distancia recorrida'],
        ['Reportar más cifras significativas de las que justifica la medición', 'El resultado de una multiplicación o división no puede tener más cifras significativas que el factor de menor precisión'],
        ['Reportar más decimales de los que justifica la medición al sumar o restar', 'El resultado no puede tener más lugares decimales que el término con menos cifras decimales'],
        ['Olvidar elevar al cuadrado o al cubo el factor de conversión al convertir áreas o volúmenes', 'Si la unidad original está elevada a una potencia, el factor de conversión debe elevarse a esa misma potencia'],
        ['Confundir fuerza estática con fuerza dinámica', 'La fuerza estática cambia la forma o dimensiones de un cuerpo sin desplazarlo; la fuerza dinámica cambia el movimiento del cuerpo']
    ],
    resumenGlosario: [
        'Tippens, Física, Cap. 3, pág. 62 — Resumen: cantidades fundamentales, vectores y escalares.',
        'Tippens, Física, Cap. 3, pág. 62 — Prefijos del SI para múltiplos y submúltiplos.',
        'Tippens, Física, Cap. 3, pág. 62 — Procedimiento para convertir unidades.',
        'Tippens, Física, Cap. 3, pág. 62 — Método del polígono para sumar vectores (Figura 3.26).',
        'Tippens, Física, Cap. 3, pág. 62 — Método del paralelogramo para sumar vectores (Figura 3.27).',
        'Tippens, Física, Cap. 3, pág. 62 — Componentes x y y de un vector, y resultante de vectores perpendiculares.',
        'Tippens, Física, Cap. 3, pág. 62 — Método de las componentes para sumar vectores.',
        'Tippens, Física, Cap. 3, pág. 62 — Lista de conceptos clave del capítulo.'
    ]
});
