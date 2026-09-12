/* ============================================================================
   CAPÍTULO 2 — Átomos, Iones y Moléculas
   Este archivo SOLO contiene contenido (texto, preguntas, respuestas).
   No hay aquí ni una línea de diseño ni de lógica: todo eso vive en index.html
   (el motor). Si necesitas corregir un dato de química, este es el único
   archivo que hay que tocar; si necesitas cambiar cómo se ve la página,
   nunca es aquí.
   ============================================================================ */
registrarCapitulo({
    materia: 'quimica', // agrupa este capítulo bajo "Química" en el menú lateral
    numero: 2,
    titulo: 'Átomos, Iones y Moléculas',

    /* ---------------- 1. OBJETIVOS DE APRENDIZAJE ---------------- */
    objetivos: [
        'Describir la teoría atómica de Dalton y diferenciar las leyes de proporciones definidas, múltiples proporciones y conservación de la masa. <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 41</span></span>',
        'Comprender la estructura del átomo y evaluar la importancia de los experimentos de Thomson, Millikan, Röntgen y Rutherford. <span class="citation-tag" tabindex="0"><sup>[2]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 43</span></span>',
        'Explicar la naturaleza e importancia de los isótopos y calcular el número másico de un isótopo. <span class="citation-tag" tabindex="0"><sup>[3]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 49</span></span>',
        'Reconocer la organización general de la tabla periódica respecto a metales, metaloides, no metales, grupos y periodos. <span class="citation-tag" tabindex="0"><sup>[4]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 51</span></span>',
        'Diferenciar entre moléculas e iones (cationes y aniones monoatómicos y poliatómicos). <span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 54</span></span>',
        'Clasificar fórmulas químicas como moleculares o empíricas y determinar fórmulas de compuestos iónicos. <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 55-59</span></span>',
        'Utilizar las reglas de nomenclatura para nombrar compuestos iónicos, moleculares, ácidos, bases, oxoácidos e hidratos. <span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 60</span></span>'
    ],

    /* ---------------- 2. CONCEPTOS CLAVE ---------------- */
    conceptos: [
        { titulo: '2.1 Teoría Atómica de Dalton', html:
            '<p>En 1808 John Dalton formuló la teoría atómica moderna. Sus hipótesis principales son:</p>' +
            '<ol>' +
            '<li>Los elementos están formados por partículas extremadamente pequeñas llamadas <strong>átomos</strong>.</li>' +
            '<li>Todos los átomos de un mismo elemento son idénticos en tamaño, masa y propiedades químicas; los átomos de elementos distintos son diferentes.</li>' +
            '<li>Los compuestos están formados por átomos de más de un elemento en una relación fija.</li>' +
            '<li>Una reacción química implica solo la separación, combinación o reordenamiento de átomos; no se crean ni destruyen átomos (ley de conservación de la masa). <span class="citation-tag" tabindex="0"><sup>[1]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 41</span></span></li>' +
            '</ol>' +
            '<p><strong>Ley de proporciones definidas (Proust, 1799):</strong> diferentes muestras de un mismo compuesto siempre contienen sus elementos constituyentes en la misma proporción por masa. <span class="citation-tag" tabindex="0"><sup>[8]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 42</span></span></p>' +
            '<p><strong>Ley de proporciones múltiples:</strong> si dos elementos forman más de un compuesto, las masas de un elemento que se combinan con una masa fija del otro están en relaciones de números enteros pequeños (ej.: CO y CO<sub>2</sub> → relación 1:2 de oxígeno). <span class="citation-tag" tabindex="0"><sup>[8]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 42</span></span></p>'
        },
        { titulo: '2.2 Estructura del Átomo', html:
            '<p>Los experimentos con rayos catódicos (Thomson) demostraron que los electrones son partículas negativas. Millikan midió la carga del electrón (−1,6022 × 10<sup>−19</sup> C) y calculó su masa (~9,10 × 10<sup>−28</sup> g). <span class="citation-tag" tabindex="0"><sup>[9]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 44-45</span></span></p>' +
            '<p>Rutherford (1910) bombardeó láminas de oro con partículas α y descubrió el <strong>núcleo</strong> denso y cargado positivamente. El átomo es mayoritariamente espacio vacío; los protones están concentrados en el núcleo. Chadwick (1932) descubrió el <strong>neutrón</strong> (sin carga, masa ≈ protón). <span class="citation-tag" tabindex="0"><sup>[10]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 46-48</span></span></p>' +
            '<p>Radioactividad: partículas α (positivas), β (electrones) y rayos γ (sin carga). <span class="citation-tag" tabindex="0"><sup>[11]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 46</span></span></p>'
        },
        { titulo: '2.3 Número Atómico, Número Másico e Isótopos', html:
            '<p><strong>Número atómico (Z):</strong> número de protones en el núcleo (define la identidad del elemento).</p>' +
            '<p><strong>Número másico (A):</strong> protones + neutrones = Z + n.</p>' +
            '<p><strong>Isótopos:</strong> átomos del mismo elemento (mismo Z) con diferente A (distinto número de neutrones). Ejemplo: <span class="isotope"><span class="isotope-nums"><span>1</span><span>1</span></span><span class="isotope-symbol">H</span></span>, <span class="isotope"><span class="isotope-nums"><span>2</span><span>1</span></span><span class="isotope-symbol">H</span></span> (deuterio), <span class="isotope"><span class="isotope-nums"><span>3</span><span>1</span></span><span class="isotope-symbol">H</span></span> (tritio). La notación general es <span class="isotope"><span class="isotope-nums"><span>A</span><span>Z</span></span><span class="isotope-symbol">X</span></span>. <span class="citation-tag" tabindex="0"><sup>[3]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 49-50</span></span></p>'
        },
        { titulo: '2.4 Tabla Periódica', html:
            '<p>Elementos ordenados por Z creciente en filas (<strong>periodos</strong>) y columnas (<strong>grupos</strong> 1-18 IUPAC). Clasificación: metales (conductores), no metales (aislantes) y metaloides (intermedios). Grupos especiales: alcalinos (G1), alcalinotérreos (G2), halógenos (G17), gases nobles (G18). <span class="citation-tag" tabindex="0"><sup>[4]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 51-52</span></span></p>'
        },
        { titulo: '2.5 Moléculas e Iones', html:
            '<p><strong>Molécula:</strong> agregado de ≥2 átomos unidos por enlaces químicos (diatómicas: H<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub>, F<sub>2</sub>…; poliatómicas: H<sub>2</sub>O, NH<sub>3</sub>, O<sub>3</sub>).</p>' +
            '<p><strong>Ion:</strong> átomo o grupo de átomos con carga neta. <strong>Catión</strong> (pérdida de e<sup>−</sup>, carga +); <strong>anión</strong> (ganancia de e<sup>−</sup>, carga −). Monoatómicos (Na<sup>+</sup>, Cl<sup>−</sup>) o poliatómicos (OH<sup>−</sup>, NH<sub>4</sub><sup>+</sup>, SO<sub>4</sub><sup>2−</sup>). <span class="citation-tag" tabindex="0"><sup>[5]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 54-55</span></span></p>'
        },
        { titulo: '2.6 Fórmulas Químicas', html:
            '<p><strong>Fórmula molecular:</strong> número exacto de cada átomo (H<sub>2</sub>O<sub>2</sub>).</p>' +
            '<p><strong>Fórmula empírica:</strong> relación más simple de números enteros (HO para peróxido de hidrógeno).</p>' +
            '<p>Compuestos iónicos: fórmula empírica (neutralidad eléctrica). Regla: subíndice del catión = carga del anión y viceversa (reducir a la mínima proporción). <span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 55-59</span></span></p>'
        },
        { titulo: '2.7 Nomenclatura de Compuestos', html:
            '<p>Compuestos binarios iónicos: nombre del catión + nombre del anión con terminación "-uro/-ido" (NaCl = cloruro de sodio). Metales de transición: se indica la carga con números romanos (FeCl<sub>2</sub> = cloruro de hierro(II)). Iones poliatómicos y oxoácidos siguen reglas específicas. <span class="citation-tag" tabindex="0"><sup>[7]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 60-61</span></span></p>'
        },
        { titulo: '2.8 Introducción a los Compuestos Orgánicos', html:
            '<p>Los <strong>hidrocarburos</strong> (solo C e H) son los compuestos orgánicos más simples. Los <strong>alcanos</strong> de cadena recta se nombran con prefijos griegos según el número de carbonos y terminan en "-ano": CH<sub>4</sub> metano, C<sub>2</sub>H<sub>6</sub> etano, C<sub>3</sub>H<sub>8</sub> propano, C<sub>4</sub>H<sub>10</sub> butano, C<sub>5</sub>H<sub>12</sub> pentano, C<sub>6</sub>H<sub>14</sub> hexano, C<sub>7</sub>H<sub>16</sub> heptano, C<sub>8</sub>H<sub>18</sub> octano, C<sub>9</sub>H<sub>20</sub> nonano, C<sub>10</sub>H<sub>22</sub> decano. <span class="citation-tag" tabindex="0"><sup>[13]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 70</span></span></p>' +
            '<p>La química de los compuestos orgánicos depende de sus <strong>grupos funcionales</strong>: hidroxilo (—OH, ej. metanol), amino (—NH<sub>2</sub>, ej. metilamina) y carboxilo (—COOH, ej. ácido acético). <span class="citation-tag" tabindex="0"><sup>[14]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 70-71</span></span></p>'
        }
    ],
    conceptosGlosario: [
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 41 — Hipótesis de Dalton y ley de conservación de la masa.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 43 — Objetivos de aprendizaje de estructura atómica.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 49-50 — Número atómico, másico e isótopos.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 51-52 — Organización de la tabla periódica.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 54-55 — Definición de moléculas e iones.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 55-59 — Fórmulas moleculares, empíricas e iónicas.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 60-61 — Nomenclatura de compuestos iónicos.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 42 — Leyes de proporciones definidas y múltiples.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 44-45 — Experimento de Millikan y carga del electrón.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 46-48 — Experimento de Rutherford y descubrimiento del neutrón.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 46 — Tipos de radiación (α, β, γ).',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 70 — Alcanos de cadena recta.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 70-71 — Grupos funcionales.'
    ],

    /* ---------------- 3. FÓRMULAS Y RELACIONES CLAVE ---------------- */
    formulas: [
        {
            box: 'Número másico A = Z + número de neutrones',
            vars: 'A = número másico · Z = número atómico (protones) · n = A − Z',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[3]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 49</span></span>'
        },
        {
            box: 'masa del electrón = carga / (carga/masa) ≈ 9,10 × 10<sup>−28</sup> g',
            vars: 'Carga e<sup>−</sup> = −1,6022 × 10<sup>−19</sup> C · e/m ≈ −1,76 × 10<sup>8</sup> C/g',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[9]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 45</span></span>'
        },
        {
            box: 'Neutralidad iónica: (carga catión)×x + (carga anión)×y = 0',
            vars: 'Ejemplo: Al<sup>3+</sup> y O<sup>2−</sup> → Al<sub>2</sub>O<sub>3</sub> (2×(+3) + 3×(−2) = 0)',
            fuente: '<span class="citation-tag" tabindex="0"><sup>[6]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 59</span></span>'
        }
    ],
    formulasTabla: {
        titulo: 'Constantes de partículas subatómicas',
        headers: ['Partícula', 'Masa (g)', 'Carga (C)', 'Carga relativa'],
        filas: [
            ['Electrón', '9,10938 × 10<sup>−28</sup>', '−1,6022 × 10<sup>−19</sup>', '−1'],
            ['Protón', '1,67262 × 10<sup>−24</sup>', '+1,6022 × 10<sup>−19</sup>', '+1'],
            ['Neutrón', '1,67493 × 10<sup>−24</sup>', '0', '0']
        ],
        fuente: '<span class="citation-tag" tabindex="0"><sup>[12]</sup><span class="tooltip-text">Chang &amp; Overby, 15ª Ed., Cap. 2, Tabla 2.1, pág. 49</span></span>'
    },
    formulasGlosario: [
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 49 — Relación entre A, Z y neutrones.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 45 — Cálculo de la masa del electrón (Millikan).',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 59 — Neutralidad en compuestos iónicos.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, Tabla 2.1, pág. 49 — Masas y cargas de protones, neutrones y electrones.'
    ],

    /* ---------------- 4. EJEMPLOS RESUELTOS ---------------- */
    ejemplos: [
        {
            titulo: 'Ejemplo 2.1 — Protones, neutrones y electrones',
            problema: 'Determina el número de protones, neutrones y electrones en: (a) <span class="isotope"><span class="isotope-nums"><span>20</span><span>11</span></span><span class="isotope-symbol">Na</span></span>, (b) <span class="isotope"><span class="isotope-nums"><span>22</span><span>11</span></span><span class="isotope-symbol">Na</span></span>, (c) <span class="isotope"><span class="isotope-nums"><span>17</span><span>8</span></span><span class="isotope-symbol">O</span></span>, (d) <sup>14</sup>C.',
            solucionLineas: [
                '(a) Z = 11 → 11 p<sup>+</sup>, A = 20 → n = 20 − 11 = 9, e<sup>−</sup> = 11 (átomo neutro).',
                '(b) Mismo Z = 11 → 11 p<sup>+</sup>, n = 22 − 11 = 11, e<sup>−</sup> = 11.',
                '(c) Z = 8 → 8 p<sup>+</sup>, n = 17 − 8 = 9, e<sup>−</sup> = 8.',
                '(d) Carbono Z = 6 → 6 p<sup>+</sup>, n = 14 − 6 = 8, e<sup>−</sup> = 6.'
            ],
            fuente: 'Chang &amp; Overby, pág. 50.'
        },
        {
            titulo: 'Ejemplo 2.3 — Fórmula empírica',
            problema: 'Escribe la fórmula empírica de: (a) B<sub>2</sub>H<sub>6</sub>, (b) C<sub>8</sub>H<sub>12</sub>O<sub>4</sub>, (c) C<sub>8</sub>H<sub>8</sub>O<sub>3</sub>.',
            solucionLineas: [
                '(a) Dividir subíndices por 2 → BH<sub>3</sub>.',
                '(b) Dividir por 4 → C<sub>2</sub>H<sub>3</sub>O.',
                '(c) Los subíndices ya son los más pequeños → C<sub>8</sub>H<sub>8</sub>O<sub>3</sub>.'
            ],
            fuente: 'Chang &amp; Overby, pág. 57-58.'
        },
        {
            titulo: 'Ejemplo 2.4 — Fórmula de compuesto iónico',
            problema: 'Escribe la fórmula del nitruro de magnesio (Mg<sup>2+</sup> y N<sup>3−</sup>).',
            solucionLineas: [
                '(+2)x + (−3)y = 0 → x/y = 3/2 → Mg<sub>3</sub>N<sub>2</sub>.'
            ],
            fuente: 'Chang &amp; Overby, pág. 59.'
        }
    ],
    ejemplosGlosario: [
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 50 — Ejemplo 2.1: cálculo de protones, neutrones y electrones.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 57-58 — Ejemplo 2.3: obtención de fórmulas empíricas.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 59 — Ejemplo 2.4: fórmula de compuestos iónicos.'
    ],

    /* ---------------- 5. EJERCICIOS INTERACTIVOS ----------------
       tipo 'numero' -> se compara como número (checkExercise)
       tipo 'texto'  -> se compara como texto exacto, sensible a mayúsculas (checkExerciseText) */
    ejercicios: [
        { enunciado: '¿Cuántos neutrones tiene un átomo de <span class="isotope"><span class="isotope-nums"><span>114</span><span>48</span></span><span class="isotope-symbol">Cd</span></span>?', tipo: 'numero', respuesta: 66, placeholder: 'Respuesta' },
        { enunciado: '¿Cuál es el número atómico de un isótopo que tiene 117 neutrones y número másico 195?', tipo: 'numero', respuesta: 78, placeholder: 'Respuesta' },
        { enunciado: 'Escribe la fórmula del óxido de aluminio (Al<sup>3+</sup> + O<sup>2−</sup>). Usa formato Al2O3.', tipo: 'texto', respuesta: 'Al2O3', placeholder: 'Fórmula' },
        { enunciado: '¿Cuántos electrones tiene el ion P<sup>3−</sup>? (Z del P = 15)', tipo: 'numero', respuesta: 18, placeholder: 'Respuesta' },
        { enunciado: 'El Sb (antimonio) se clasifica como metal, metaloide o no metal. Escribe tu respuesta en minúsculas.', tipo: 'texto', respuesta: 'metaloide', placeholder: 'Respuesta' },
        { enunciado: '¿Cuántos átomos de carbono tiene el alcano "heptano"?', tipo: 'numero', respuesta: 7, placeholder: 'Respuesta' },
        { enunciado: '¿Cuántos protones tiene un átomo con número atómico Z = 20?', tipo: 'numero', respuesta: 20, placeholder: 'Respuesta' },
        { enunciado: '¿Cuántos neutrones tiene el isótopo <sup>14</sup>N (Z = 7)?', tipo: 'numero', respuesta: 7, placeholder: 'Respuesta' },
        { enunciado: 'Escribe la fórmula del compuesto formado por K<sup>+</sup> y SO<sub>4</sub><sup>2−</sup>. Usa formato K2SO4.', tipo: 'texto', respuesta: 'K2SO4', placeholder: 'Fórmula' },
        { enunciado: '¿Cuántos átomos de carbono tiene el alcano "pentano"?', tipo: 'numero', respuesta: 5, placeholder: 'Respuesta' }
    ],

    /* ---------------- 6. TEST DE OPCIÓN MÚLTIPLE ----------------
       correcta: 'a' | 'b' | 'c' | 'd' según la posición dentro de "opciones" */
    quiz: [
        { pregunta: 'Según Dalton, una reacción química:', opciones: ['Crea nuevos átomos', 'Destruye átomos', 'Solo reordena átomos', 'Cambia el número atómico'], correcta: 'c' },
        { pregunta: '¿Qué partícula descubrió Chadwick en 1932?', opciones: ['Protón', 'Electrón', 'Neutrón', 'Positrón'], correcta: 'c' },
        { pregunta: 'El ion Cl<sup>−</sup> tiene:', opciones: ['17 protones y 17 electrones', '17 protones y 18 electrones', '18 protones y 17 electrones', '17 protones y 16 electrones'], correcta: 'b' },
        { pregunta: 'La fórmula empírica de H<sub>2</sub>O<sub>2</sub> es:', opciones: ['H<sub>2</sub>O<sub>2</sub>', 'HO', 'H<sub>2</sub>O', 'O<sub>2</sub>'], correcta: 'b' },
        { pregunta: 'Los elementos del Grupo 17 de la tabla periódica se llaman:', opciones: ['Alcalinos', 'Alcalinotérreos', 'Halógenos', 'Gases nobles'], correcta: 'c' },
        { pregunta: '¿Qué grupo funcional está presente en el ácido acético (CH<sub>3</sub>COOH)?', opciones: ['Hidroxilo (—OH)', 'Amino (—NH<sub>2</sub>)', 'Carboxilo (—COOH)', 'Ninguno, es un hidrocarburo puro'], correcta: 'c' },
        { pregunta: '¿Qué carga eléctrica tiene un catión?', opciones: ['Positiva', 'Negativa', 'Neutra', 'Depende del elemento'], correcta: 'a' },
        { pregunta: 'Los isótopos de un mismo elemento siempre tienen el mismo número de:', opciones: ['Neutrones', 'Protones', 'Nucleones', 'Electrones de valencia únicamente'], correcta: 'b' },
        { pregunta: '¿Cuál es la fórmula correcta del compuesto iónico formado por Ca<sup>2+</sup> y Cl<sup>−</sup>?', opciones: ['CaCl', 'CaCl<sub>2</sub>', 'Ca<sub>2</sub>Cl', 'CaCl<sub>3</sub>'], correcta: 'b' },
        { pregunta: 'El Grupo 1 de la tabla periódica (sin contar el hidrógeno) se llama:', opciones: ['Halógenos', 'Gases nobles', 'Alcalinos', 'Alcalinotérreos'], correcta: 'c' },
        { pregunta: '¿Cuál de estas tres partículas subatómicas NO tiene carga eléctrica?', opciones: ['Protón', 'Electrón', 'Neutrón', 'Catión'], correcta: 'c' }
    ],

    /* ---------------- 7. TARJETAS DE MEMORIA ---------------- */
    flashcards: [
        { frente: '¿Qué es el número atómico (Z)?', dorso: 'Número de protones en el núcleo. Define la identidad del elemento.' },
        { frente: 'Ley de proporciones definidas', dorso: 'Muestras del mismo compuesto tienen siempre la misma proporción de masas de elementos (Proust).' },
        { frente: 'Partículas α, β y γ', dorso: 'α: núcleos de He<sup>2+</sup> (positivas)<br>β: electrones (negativas)<br>γ: radiación electromagnética (sin carga)' },
        { frente: 'Fórmula empírica vs molecular', dorso: 'Empírica = relación más simple<br>Molecular = número real de átomos<br>Ej: H<sub>2</sub>O<sub>2</sub> → HO' },
        { frente: 'Grupos especiales de la tabla periódica', dorso: 'Grupo 1: alcalinos<br>Grupo 2: alcalinotérreos<br>Grupo 17: halógenos<br>Grupo 18: gases nobles' },
        { frente: 'Grupos funcionales básicos', dorso: '—OH: hidroxilo (alcoholes)<br>—NH<sub>2</sub>: amino (aminas)<br>—COOH: carboxilo (ácidos)' }
    ],

    /* ---------------- 8. MODO PRÁCTICA (bancos de preguntas por nivel) ---------------- */
    practica: {
        facil: [
            { q: '¿Cuántos protones tiene el oxígeno? (Z=8)', a: '8', tipo: 'texto' },
            { q: '¿Cuántos electrones tiene un átomo neutro de sodio (Z=11)?', a: '11', tipo: 'texto' },
            { q: 'El número másico del carbono-14 es:', a: '14', tipo: 'texto' },
            { q: '¿Cuántos neutrones tiene el deuterio (hidrógeno-2)?', a: '1', tipo: 'texto' },
            { q: '¿Cómo se llaman los elementos del Grupo 18 de la tabla periódica?', a: 'gases nobles', tipo: 'texto' },
            { q: '¿Cuántos átomos de carbono tiene el alcano "propano"?', a: '3', tipo: 'texto' },
            { q: '¿El flúor (F) es un metal, metaloide o no metal?', a: 'no metal', tipo: 'texto' },
            { q: '¿Cuántos electrones tiene un átomo neutro de cloro (Z=17)?', a: '17', tipo: 'texto' },
            { q: '¿Cuántos protones tiene el nitrógeno? (Z=7)', a: '7', tipo: 'texto' },
            { q: '¿El neón (Ne) es un metal, metaloide o no metal?', a: 'no metal', tipo: 'texto' }
        ],
        medio: [
            { q: '¿Cuántos neutrones tiene el isótopo <sup>39</sup>K?', a: '20', tipo: 'texto' },
            { q: 'Fórmula del cloruro de magnesio (Mg<sup>2+</sup>, Cl<sup>−</sup>)', a: 'MgCl2', tipo: 'formula' },
            { q: 'Nombre del compuesto Fe<sub>2</sub>O<sub>3</sub> según Stock', a: 'óxido de hierro(III)', tipo: 'texto' },
            { q: '¿Cuántos electrones tiene el ion S<sup>2−</sup> (Z=16)?', a: '18', tipo: 'texto' },
            { q: '¿Cómo se llaman los elementos del Grupo 1 de la tabla periódica?', a: 'alcalinos', tipo: 'texto' },
            { q: 'Grupo funcional presente en el metanol (CH<sub>3</sub>OH)', a: 'hidroxilo', tipo: 'texto' },
            { q: 'Fórmula empírica de la cafeína, C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>', a: 'C4H5N2O', tipo: 'formula' },
            { q: '¿Cuántos átomos de carbono tiene el alcano "hexano"?', a: '6', tipo: 'texto' },
            { q: '¿Cuántos neutrones tiene el isótopo carbono-13?', a: '7', tipo: 'texto' },
            { q: 'Fórmula del óxido de calcio (Ca<sup>2+</sup>, O<sup>2−</sup>)', a: 'CaO', tipo: 'formula' }
        ],
        dificil: [
            { q: '¿Cuántos neutrones hay en el isótopo <sup>235</sup>U?', a: '143', tipo: 'texto' },
            { q: 'Fórmula del nitrato de mercurio(I) (Hg<sub>2</sub><sup>2+</sup>, NO<sub>3</sub><sup>−</sup>)', a: 'Hg2(NO3)2', tipo: 'formula' },
            { q: 'Nombre del compuesto P<sub>4</sub>O<sub>10</sub> (usando prefijos)', a: 'decaóxido de tetrafósforo', tipo: 'texto' },
            { q: '¿Cuántos electrones tiene el ion Fe<sup>3+</sup> (Z=26)?', a: '23', tipo: 'texto' },
            { q: 'Nombre del ácido HClO<sub>4</sub> (partiendo de HClO<sub>3</sub> = ácido clórico)', a: 'ácido perclórico', tipo: 'texto' },
            { q: 'Fórmula del fosfato de calcio (Ca<sup>2+</sup>, PO<sub>4</sub><sup>3−</sup>)', a: 'Ca3(PO4)2', tipo: 'formula' },
            { q: 'Grupo funcional presente en el ácido acético (CH<sub>3</sub>COOH)', a: 'carboxilo', tipo: 'texto' },
            { q: 'Nombre del compuesto N<sub>2</sub>O<sub>4</sub> (usando prefijos)', a: 'tetróxido de dinitrógeno', tipo: 'texto' },
            { q: '¿Cuántos electrones tiene el ion Al<sup>3+</sup> (Z=13)?', a: '10', tipo: 'texto' },
            { q: 'Fórmula del sulfato de amonio (NH<sub>4</sub><sup>+</sup>, SO<sub>4</sub><sup>2−</sup>)', a: '(NH4)2SO4', tipo: 'formula' }
        ]
    },

    /* ---------------- 9. RESUMEN DEL CAPÍTULO ---------------- */
    resumenPuntos: [
        'La teoría atómica de Dalton establece que la materia está formada por átomos indivisibles que se combinan en relaciones fijas y se conservan en las reacciones.',
        'El átomo tiene un núcleo denso (protones + neutrones) y electrones en el exterior. Z identifica el elemento; A = Z + n.',
        'Los isótopos tienen el mismo Z pero diferente A.',
        'La tabla periódica organiza los elementos por propiedades periódicas (grupos y periodos).',
        'Moléculas son agregados neutros de átomos; iones tienen carga neta.',
        'Fórmula molecular = composición real; empírica = relación más simple. Compuestos iónicos se escriben para neutralidad eléctrica.',
        'La nomenclatura sistemática permite nombrar cualquier compuesto a partir de su fórmula.'
    ],
    resumenErrores: [
        ['Confundir Z con A', 'Z = protones (identidad); A = protones + neutrones'],
        ['Creer que los átomos de un elemento son todos iguales en masa', 'Existen isótopos (mismo Z, distinto A)'],
        ['Escribir fórmula iónica sin neutralizar cargas', 'Aplicar regla de cruce de cargas y simplificar'],
        ['Usar fórmula molecular en lugar de empírica para iónicos', 'Los compuestos iónicos se representan con fórmula empírica'],
        ['Olvidar que e<sup>−</sup> de un ion ≠ Z', 'Catión: e<sup>−</sup> &lt; Z; anión: e<sup>−</sup> &gt; Z'],
        ['Confundir α, β y γ', 'α = He<sup>2+</sup>, β = e<sup>−</sup>, γ = fotones de alta energía']
    ],
    resumenGlosario: [
        'Chang &amp; Overby, Chemistry 15ª Ed., Cap. 2, pág. 41 — Hipótesis de Dalton y conservación de la masa.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 43 — Objetivos de estructura del átomo.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 49-50 — Número atómico, másico e isótopos.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 51-52 — Tabla periódica y clasificación de elementos.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 54-55 — Moléculas e iones.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 55-59 — Fórmulas químicas (molecular, empírica, iónica).',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 60-61 — Nomenclatura de compuestos iónicos.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 42 — Leyes de proporciones definidas y múltiples.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 44-45 — Experimento de Millikan.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 46-48 — Rutherford y Chadwick.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 46 — Radiación α, β y γ.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, Tabla 2.1, pág. 49 — Masas y cargas de partículas subatómicas.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 70 — Alcanos de cadena recta.',
        'Chang &amp; Overby, 15ª Ed., Cap. 2, pág. 70-71 — Grupos funcionales.'
    ]
});
