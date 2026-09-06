
/* ============================================================================
   MOTOR GENÉRICO DE CAPÍTULOS
   Este archivo NO contiene contenido de ningún capítulo: solo sabe cómo
   DIBUJAR los datos que cada capituloXX.js registra llamando a
   registrarCapitulo({...}). Para agregar un capítulo nuevo, nunca se toca
   este archivo: solo se agrega <script src="capituloXX.js"> antes del
   cierre de </body> (ver el final de este archivo).
   ============================================================================ */

// Arreglo global donde se acumulan todos los capítulos cargados (uno por cada
// archivo capituloXX.js que se incluya con <script src="...">).
window.CAPITULOS = window.CAPITULOS || [];

// Cada capituloXX.js llama a esta función una sola vez con todo su contenido.
// AHORA cada capítulo pertenece a una "materia" (ej. 'quimica', 'fisica').
// El "numero" que pongas en cada archivo solo necesita ser único DENTRO de
// su propia materia: química puede tener su capítulo 4 y física su propio
// capítulo 4 al mismo tiempo, sin que choquen entre sí. Internamente el
// motor arma un identificador único real (_id) combinando ambos datos.
function registrarCapitulo(datos) {
    datos.materia = datos.materia || 'general'; // si no se especifica materia, se agrupan bajo "general"
    datos._id = datos.materia + '_' + datos.numero; // identificador único real (nunca choca entre materias distintas)
    window.CAPITULOS.push(datos);
}

// Nombres e iconos de cada materia para el menú y el encabezado.
// Para agregar una materia nueva (ej. 'biologia'), solo hay que sumar una
// línea aquí; si no está en esta lista, se muestra con un icono genérico.
var MATERIA_INFO = {
    quimica: { icono: '🧪', nombre: 'Química' },
    fisica: { icono: '🧲', nombre: 'Física' }
};
function materiaInfo(materia) {
    return MATERIA_INFO[materia] || { icono: '📘', nombre: materia.charAt(0).toUpperCase() + materia.slice(1) };
}

// Identificador del capítulo actualmente mostrado en pantalla (ej. "quimica_2").
// Antes era solo un número; ahora es el "_id" combinado (null = ninguno aún).
var capituloActivo = null;

/* ==================== COLOR AUTOMÁTICO POR CAPÍTULO ====================
   En vez de definir docenas de paletas de color a mano, calculamos un matiz
   (hue) distinto para cada capítulo usando el "ángulo dorado" (137.5°), la
   forma matemática estándar de repartir colores lo más distintos posible
   entre sí aunque haya muchos. Antes se calculaba a partir del "numero" del
   capítulo; ahora se calcula a partir de su "_id" completo (materia+numero)
   para que, por ejemplo, el capítulo 2 de química y el capítulo 2 de física
   NO terminen con exactamente el mismo color. */
function hashTexto(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) { h = (h * 31 + str.charCodeAt(i)) >>> 0; } // hash simple y estable
    return h;
}
function matizDeCapitulo(id) {
    return (hashTexto(id) * 137.508) % 360; // grados de 0 a 360 en la rueda de color
}
function coloresDeCapitulo(id) {
    var h = matizDeCapitulo(id);
    return {
        primary: 'hsl(' + h + ', 45%, 32%)',
        primaryDark: 'hsl(' + h + ', 55%, 22%)',
        accent: 'hsl(' + ((h + 40) % 360) + ', 80%, 48%)',
        dot: 'hsl(' + h + ', 65%, 45%)'
    };
}
// Aplica los colores calculados como variables CSS globales (--primary, etc.)
// para que TODO el CSS de arriba (que ya usa var(--primary)) cambie de tono
// automáticamente sin tener que duplicar ni una sola regla de estilo.
function aplicarAcento(id) {
    var c = coloresDeCapitulo(id);
    document.documentElement.style.setProperty('--primary', c.primary);
    document.documentElement.style.setProperty('--primary-dark', c.primaryDark);
    document.documentElement.style.setProperty('--accent', c.accent);
}

/* ==================== ALTURA REAL DE LA BARRA SUPERIOR ====================
   Mide en píxeles cuánto mide de alto el bloque header+nav (#topbar) y lo
   guarda en la variable CSS --topbar-h. Así el sidebar siempre sabe
   exactamente dónde termina la barra superior, sin importar si el header
   ocupa una o dos líneas (por ejemplo en pantallas angostas). */
function ajustarAlturaTopbar() {
    var topbar = document.getElementById('topbar');
    document.documentElement.style.setProperty('--topbar-h', topbar.offsetHeight + 'px');
}
window.addEventListener('resize', ajustarAlturaTopbar);

/* ==================== RENDER DEL MENÚ LATERAL ====================
   Ahora agrupa los capítulos por materia (Química, Física, ...), con un
   encabezado de materia arriba de su propio bloque de capítulos. El orden
   de las materias respeta el orden en que se registró la PRIMERA vez cada
   una (así Química, que ya tenías, sigue apareciendo arriba). Dentro de
   cada materia, los capítulos se ordenan por su "numero" (1, 2, 3...). */
function renderSidebar() {
    var materiasOrden = [];
    window.CAPITULOS.forEach(function(cap) {
        if (materiasOrden.indexOf(cap.materia) === -1) materiasOrden.push(cap.materia);
    });

    var html = '';
    materiasOrden.forEach(function(materia) {
        var capsDeEstaMateria = window.CAPITULOS
            .filter(function(c) { return c.materia === materia; })
            .sort(function(a, b) { return a.numero - b.numero; });

        var info = materiaInfo(materia);
        html += '<div class="materia-header" style="font-weight:700; font-size:0.78rem; letter-spacing:0.04em; ' +
            'text-transform:uppercase; color:var(--muted); margin:0.9rem 0 0.35rem 0.2rem;">' +
            info.icono + ' ' + info.nombre + '</div>';

        capsDeEstaMateria.forEach(function(cap) {
            var color = coloresDeCapitulo(cap._id).dot;
            var claseActiva = (cap._id === capituloActivo) ? ' active-chap' : '';
            html += '<button class="chap-item' + claseActiva + '" style="--chap-color:' + color + '" ' +
                    'onclick="cargarCapitulo(\'' + cap._id + '\')">' +
                    '<span class="chap-dot"></span>' +
                    '<span><span class="chap-num">Cap. ' + cap.numero + '.</span> ' + cap.titulo + '</span>' +
                    '</button>';
        });
    });
    document.getElementById('listaCapitulos').innerHTML = html;
}

/* ==================== CONSTRUCCIÓN DE CADA SECCIÓN ====================
   Cada función recibe el objeto "cap" (los datos de un capítulo) y devuelve
   el HTML de una sola pestaña. Los ids generados siempre llevan el prefijo
   "c{numero}_" para que, aunque en el futuro se muestren dos capítulos a la
   vez (hoy no pasa), nunca choquen dos ids iguales. */

function idc(cap, sufijo) { return 'c' + cap._id + '_' + sufijo; }

function seccionObjetivos(cap) {
    var items = cap.objetivos.map(function(o) { return '<li>' + o + '</li>'; }).join('');
    return '<section id="objetivos" class="active-page">' +
        '<h2>🎯 Objetivos de Aprendizaje</h2>' +
        '<p>' + (cap.objetivosIntro || 'Al finalizar este capítulo serás capaz de:') + '</p>' +
        '<ul>' + items + '</ul>' +
        '</section>';
}

function seccionConceptos(cap) {
    var subtemas = cap.conceptos.map(function(c) {
        return '<h3>' + c.titulo + '</h3>' + c.html;
    }).join('');
    var glosario = renderGlosario('Glosario de Fuentes y Citas (Conceptos)', cap.conceptosGlosario);
    return '<section id="conceptos"><h2>🧪 Conceptos Clave</h2>' + subtemas + glosario + '</section>';
}

function seccionFormulas(cap) {
    var cajas = cap.formulas.map(function(f) {
        return '<div class="formula-box">' + f.box + '<div class="vars">' + f.vars + '</div></div>' +
            '<p class="fuente-nota">Fuente: ' + f.fuente + '</p>';
    }).join('');
    var tablaHtml = '';
    if (cap.formulasTabla) {
        var t = cap.formulasTabla;
        var thead = '<tr>' + t.headers.map(function(h) { return '<th>' + h + '</th>'; }).join('') + '</tr>';
        var tbody = t.filas.map(function(fila) {
            return '<tr>' + fila.map(function(celda) { return '<td>' + celda + '</td>'; }).join('') + '</tr>';
        }).join('');
        tablaHtml = '<h3>' + t.titulo + '</h3><table><thead>' + thead + '</thead><tbody>' + tbody + '</tbody></table>' +
            '<p class="fuente-nota">Fuente: ' + t.fuente + '</p>';
    }
    var glosario = renderGlosario('Glosario de Fuentes (Fórmulas)', cap.formulasGlosario);
    return '<section id="formulas"><h2>📐 Fórmulas y Relaciones Clave</h2>' + cajas + tablaHtml + glosario + '</section>';
}

function seccionEjemplos(cap) {
    var cajas = cap.ejemplos.map(function(e) {
        var lineas = e.solucionLineas.map(function(l) { return '<p>' + l + '</p>'; }).join('');
        return '<div class="example-box"><h4>' + e.titulo + '</h4>' +
            '<p><strong>Problema:</strong> ' + e.problema + '</p>' +
            '<p><strong>Solución:</strong></p>' + lineas +
            '<p class="fuente-nota">Fuente: ' + e.fuente + '</p></div>';
    }).join('');
    var glosario = renderGlosario('Glosario de Fuentes (Ejemplos)', cap.ejemplosGlosario);
    return '<section id="ejemplos"><h2>✏️ Ejemplos Resueltos</h2>' + cajas + glosario + '</section>';
}

function seccionEjercicios(cap) {
    var items = cap.ejercicios.map(function(ej, i) {
        var inputId = idc(cap, 'ex' + i);
        var fbId = idc(cap, 'fb' + i);
        var tipoInput = (ej.tipo === 'numero') ? 'number' : 'text';
        var funcion = (ej.tipo === 'numero') ? 'checkExercise' : 'checkExerciseText';
        var respuestaJs = (ej.tipo === 'numero') ? ej.respuesta : "'" + ej.respuesta.replace(/'/g, "\\'") + "'";
        return '<div class="exercise-item">' +
            '<p><strong>' + (i + 1) + '.</strong> ' + ej.enunciado + '</p>' +
            '<input type="' + tipoInput + '" id="' + inputId + '" placeholder="' + (ej.placeholder || 'Respuesta') + '">' +
            '<button onclick="' + funcion + '(\'' + inputId + '\', ' + respuestaJs + ', \'' + fbId + '\')">Comprobar</button>' +
            '<div id="' + fbId + '" class="feedback" aria-live="polite"></div>' +
            '</div>';
    }).join('');
    return '<section id="ejercicios"><h2>📝 Ejercicios Interactivos</h2>' +
        '<p>Responde y haz clic en "Comprobar" para verificar tu respuesta.</p>' + items + '</section>';
}

function seccionTest(cap) {
    var items = cap.quiz.map(function(q, i) {
        var qId = i + 1;
        var contId = idc(cap, 'tq' + qId);
        var fbId = idc(cap, 'tf' + qId);
        var nombreRadio = idc(cap, 'q' + qId);
        var letras = ['a', 'b', 'c', 'd', 'e'];
        var opciones = q.opciones.map(function(op, idx) {
            return '<label><input type="radio" name="' + nombreRadio + '" value="' + letras[idx] + '"> ' + op + '</label>';
        }).join('');
        return '<div class="test-q" id="' + contId + '">' +
            '<p><strong>' + qId + '.</strong> ' + q.pregunta + '</p>' + opciones +
            '<button onclick="checkQuiz(\'' + contId + '\', \'' + nombreRadio + '\', \'' + q.correcta + '\', \'' + fbId + '\')">Verificar</button>' +
            '<div class="feedback" id="' + fbId + '" aria-live="polite"></div>' +
            '</div>';
    }).join('');
    return '<section id="test"><h2>🧠 Test de Opción Múltiple</h2>' +
        '<p>Selecciona una opción y haz clic en "Verificar".</p>' + items + '</section>';
}

function seccionTarjetas(cap) {
    var cajas = cap.flashcards.map(function(f) {
        return '<div class="flashcard-container"><div class="flashcard" onclick="this.classList.toggle(\'flipped\'); registrarFlip()">' +
            '<div class="flashcard-front"><div class="fc-content">' + f.frente + '</div></div>' +
            '<div class="flashcard-back"><div class="fc-content">' + f.dorso + '</div></div></div></div>';
    }).join('');
    return '<section id="tarjetas"><h2>🃏 Tarjetas de Memoria</h2>' +
        '<div class="cards-grid">' + cajas + '</div></section>';
}

function seccionPractica(cap) {
    return '<section id="practica"><h2>⚡ Modo Práctica — Niveles Progresivos</h2>' +
        '<p>Selecciona un nivel y responde las preguntas que se generan aleatoriamente. ¡Acumula puntos!</p>' +
        '<div class="practice-controls">' +
        '<button class="btn" onclick="setPracticeLevel(\'facil\')" style="background:var(--success);">Fácil</button>' +
        '<button class="btn" onclick="setPracticeLevel(\'medio\')" style="background:var(--accent);">Medio</button>' +
        '<button class="btn" onclick="setPracticeLevel(\'dificil\')" style="background:var(--danger);">Difícil</button>' +
        '</div>' +
        '<div class="exercise-item" style="background:var(--bg-soft);">' +
        '<span id="practiceLevelBadge" class="level-badge level-1">Nivel Fácil</span>' +
        '<p><strong>Pregunta:</strong> <span id="practiceQuestion">Selecciona un nivel para comenzar.</span></p>' +
        '<div class="practice-answer-area">' +
        '<input type="text" id="practiceAnswer" placeholder="Tu respuesta" style="width:180px;">' +
        '<button onclick="checkPractice()">Responder</button>' +
        '<span id="practiceFeedback" class="feedback" style="margin-left:0.5rem;" aria-live="polite"></span>' +
        '</div>' +
        '<p style="margin-top:0.5rem; font-size:0.9rem;">Puntuación: <span id="practiceScore">0</span> aciertos</p>' +
        '</div></section>';
}

function seccionResumen(cap) {
    var puntos = cap.resumenPuntos.map(function(p) { return '<li>' + p + '</li>'; }).join('');
    var filasErrores = cap.resumenErrores.map(function(par) {
        return '<tr><td>' + par[0] + '</td><td>' + par[1] + '</td></tr>';
    }).join('');
    var glosario = renderGlosario('Glosario Completo de Fuentes y Citas', cap.resumenGlosario);
    return '<section id="resumen"><h2>📌 Resumen del Capítulo</h2>' +
        '<ul>' + puntos + '</ul>' +
        '<h3>Tabla de Errores Frecuentes</h3>' +
        '<table><thead><tr><th>Error común</th><th>Corrección</th></tr></thead><tbody>' + filasErrores + '</tbody></table>' +
        glosario + '</section>';
}

// Función compartida para dibujar cualquier glosario (lista numerada de fuentes).
function renderGlosario(titulo, items) {
    if (!items || !items.length) return '';
    var lis = items.map(function(i) { return '<li>' + i + '</li>'; }).join('');
    return '<div class="glossary"><h4>📚 ' + titulo + '</h4><ol>' + lis + '</ol></div>';
}

/* ==================== CARGA DE UN CAPÍTULO EN PANTALLA ====================
   "id" es el identificador único combinado (ej. "quimica_2" o "fisica_4"),
   NO el número suelto del capítulo (que puede repetirse entre materias). */
function cargarCapitulo(id) {
    var cap = window.CAPITULOS.filter(function(c) { return c._id === id; })[0];
    if (!cap) return;

    capituloActivo = id;
    aplicarAcento(id);
    document.getElementById('tituloCapituloActivo').textContent =
        materiaInfo(cap.materia).nombre + ' · Cap. ' + cap.numero + ' — ' + cap.titulo;
    ajustarAlturaTopbar(); // el título puede cambiar de largo y afectar la altura del header

    // Construye las 9 secciones y las inserta todas juntas en <main>.
    var html = seccionObjetivos(cap) + seccionConceptos(cap) + seccionFormulas(cap) +
        seccionEjemplos(cap) + seccionEjercicios(cap) + seccionTest(cap) +
        seccionTarjetas(cap) + seccionPractica(cap) + seccionResumen(cap);
    document.getElementById('main-content').innerHTML = html;

    renderSidebar(); // vuelve a pintar el menú para marcar el capítulo activo
    cerrarMenuMovil();

    // Recuerda cuál fue la última pestaña vista DENTRO de este capítulo (o "objetivos" si es la primera vez)
    var ultimaPestana = localStorage.getItem('ultimaPestana_cap' + id) || 'objetivos';
    mostrarPestana(ultimaPestana);

    localStorage.setItem('ultimoCapitulo', id);

    // Prepara el Modo Práctica de este capítulo con su propio banco de preguntas.
    practicaBanco = cap.practica;
    practicaScore = 0;
    setPracticeLevel('facil');

    // Registra la visita para el sistema de logros y reinicia el conteo de
    // aciertos del Test (cada capítulo lleva su propio conteo de "perfecto").
    registrarCapituloVisitado(cap);
    testProgress[id] = { correctas: {}, total: cap.quiz.length };
}

/* ==================== NAVEGACIÓN ENTRE PESTAÑAS ==================== */
function mostrarPestana(pageId) {
    document.querySelectorAll('main > section').forEach(function(sec) { sec.classList.remove('active-page'); });
    var target = document.getElementById(pageId);
    if (target) target.classList.add('active-page');

    document.querySelectorAll('#main-nav button').forEach(function(btn) {
        btn.classList.remove('active-nav');
        if (btn.getAttribute('data-page') === pageId) btn.classList.add('active-nav');
    });
    if (capituloActivo) localStorage.setItem('ultimaPestana_cap' + capituloActivo, pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('#main-nav button').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var pageId = this.getAttribute('data-page');
        if (pageId) mostrarPestana(pageId);
    });
});

/* ==================== MENÚ LATERAL EN MÓVIL (abrir/cerrar) ==================== */
function abrirMenuMovil() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('open');
}
function cerrarMenuMovil() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
}
document.getElementById('btnMenu').addEventListener('click', abrirMenuMovil);
document.getElementById('overlay').addEventListener('click', cerrarMenuMovil);

/* ==================== MODAL "ESTUDIAR EN EL CELULAR" (QR) ====================
   Usa un servicio gratuito (api.qrserver.com) que genera la imagen del QR
   a partir de una URL, sin necesidad de instalar ninguna librería. La URL
   que el usuario pega se guarda en localStorage para no tener que
   volver a escribirla cada vez que abra el archivo. */
function generarQR() {
    var url = document.getElementById('qrUrlInput').value.trim();
    var resultado = document.getElementById('qrResultado');
    if (!url) { resultado.innerHTML = '<p style="color:var(--danger); font-size:0.85rem;">⚠️ Pega primero la URL pública de tu página.</p>'; return; }
    localStorage.setItem('qrUrlGuardada', url);
    var qrSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=' + encodeURIComponent(url);
    resultado.innerHTML = '<img src="' + qrSrc + '" alt="Código QR" width="220" height="220">' +
        '<p style="font-size:0.78rem; margin-top:0.5rem;">Escanéalo con la cámara de tu iPhone.</p>';
}
function abrirModalQR() {
    var guardada = localStorage.getItem('qrUrlGuardada');
    if (guardada) {
        document.getElementById('qrUrlInput').value = guardada;
        generarQR();
    }
    document.getElementById('qrModal').classList.add('open');
}
function cerrarModalQR() {
    document.getElementById('qrModal').classList.remove('open');
}
document.getElementById('btnQR').addEventListener('click', abrirModalQR);
document.getElementById('btnCerrarQR').addEventListener('click', cerrarModalQR);
document.getElementById('btnGenerarQR').addEventListener('click', generarQR);
document.getElementById('qrModal').addEventListener('click', function(e) {
    if (e.target.id === 'qrModal') cerrarModalQR(); // clic fuera de la caja cierra el modal
});

/* ============================================================================
   MODO OSCURO
   Guarda la preferencia en localStorage con la clave 'temaOscuro' (mismo
   estilo de nombres que 'ultimoCapitulo' y 'qrUrlGuardada' que ya usa este
   archivo). Si el usuario nunca lo tocó, respeta el tema del sistema
   operativo/navegador (prefers-color-scheme).
   ============================================================================ */
function aplicarTema(esOscuro) {
    document.documentElement.setAttribute('data-theme', esOscuro ? 'dark' : 'light');
    var btn = document.getElementById('btnTema');
    btn.textContent = esOscuro ? '☀️' : '🌙';
    btn.setAttribute('aria-label', esOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}
function toggleTema() {
    var esOscuroAhora = document.documentElement.getAttribute('data-theme') === 'dark';
    var nuevoEsOscuro = !esOscuroAhora;
    aplicarTema(nuevoEsOscuro);
    localStorage.setItem('temaOscuro', nuevoEsOscuro ? '1' : '0');
}
function initTema() {
    var guardado = localStorage.getItem('temaOscuro');
    var esOscuro;
    if (guardado !== null) esOscuro = (guardado === '1');
    else esOscuro = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    aplicarTema(esOscuro);
}
document.getElementById('btnTema').addEventListener('click', toggleTema);

/* ============================================================================
   SISTEMA DE LOGROS
   Se activan por acciones del usuario (primer ejercicio, capítulos vistos,
   test perfecto, uso del buscador, flashcards volteadas, acierto en modo
   difícil). Todo se guarda en localStorage bajo 'quimicaLogros' /
   'quimicaEstadisticas', igual que ya hace el resto del motor con sus
   propias claves ('ultimoCapitulo', etc.), así que conviven sin chocar.
   ============================================================================ */
var LOGROS_DEF = [
    { id: 'primer_ejercicio', icono: '🎯', nombre: 'Primer Paso', desc: 'Resuelve tu primer ejercicio' },
    { id: 'test_perfecto', icono: '💯', nombre: 'Perfeccionista', desc: '100% en un Test de un capítulo' },
    { id: 'cap_1', icono: '📖', nombre: 'Iniciado', desc: 'Visita el Capítulo 1' },
    { id: 'cap_2', icono: '⚛️', nombre: 'Atómico', desc: 'Visita el Capítulo 2' },
    { id: 'buscador', icono: '🔍', nombre: 'Explorador', desc: 'Usa la búsqueda global' },
    { id: 'flash_5', icono: '🃏', nombre: 'Memorista', desc: 'Voltea 5 tarjetas de memoria' },
    { id: 'practica_dificil', icono: '🔥', nombre: 'Desafiante', desc: 'Acierta una pregunta en Nivel Difícil' }
];
var logrosDesbloqueados = JSON.parse(localStorage.getItem('quimicaLogros') || '[]');
var estadisticas = JSON.parse(localStorage.getItem('quimicaEstadisticas') || '{"ejercicios":0,"capitulosVistos":[],"flips":0}');
// Guarda, por capítulo, qué preguntas del Test ya se contestaron bien (para saber cuándo es "perfecto").
var testProgress = {};

function guardarEstadisticas() {
    localStorage.setItem('quimicaEstadisticas', JSON.stringify(estadisticas));
}
function unlock(id) {
    if (logrosDesbloqueados.indexOf(id) !== -1) return; // ya estaba desbloqueado, no repetir el aviso
    logrosDesbloqueados.push(id);
    localStorage.setItem('quimicaLogros', JSON.stringify(logrosDesbloqueados));
    var def = LOGROS_DEF.filter(function(l) { return l.id === id; })[0];
    if (def) mostrarToast('🏆 ¡Logro desbloqueado: ' + def.nombre + '!');
}
function mostrarToast(mensaje) {
    var toast = document.getElementById('toast');
    toast.textContent = mensaje;
    toast.classList.add('show');
    setTimeout(function() { toast.classList.remove('show'); }, 3500);
}
function registrarEjercicioCorrecto() {
    estadisticas.ejercicios++;
    if (estadisticas.ejercicios === 1) unlock('primer_ejercicio');
    guardarEstadisticas();
}
function registrarCapituloVisitado(cap) {
    if (estadisticas.capitulosVistos.indexOf(cap._id) === -1) {
        estadisticas.capitulosVistos.push(cap._id);
        guardarEstadisticas();
    }
    // Estos dos logros están atados específicamente a los capítulos 1 y 2 de
    // Química (con los que arrancó la app), no a "cualquier" capítulo 1 o 2.
    if (cap.materia === 'quimica' && cap.numero === 1) unlock('cap_1');
    if (cap.materia === 'quimica' && cap.numero === 2) unlock('cap_2');
}
function registrarFlip() {
    estadisticas.flips++;
    guardarEstadisticas();
    if (estadisticas.flips >= 5) unlock('flash_5');
}
// contId tiene el formato "c{materia}_{numeroCapitulo}_tq{numeroPregunta}" (ver idc()).
function registrarAciertoTest(contId) {
    var match = contId.match(/^c([a-z0-9]+)_(\d+)_tq(\d+)$/);
    if (!match) return;
    var capId = match[1] + '_' + match[2]; // reconstruye el mismo _id que usa el capítulo (ej. "quimica_2")
    var numPregunta = match[3];
    if (!testProgress[capId]) return;
    testProgress[capId].correctas[numPregunta] = true;
    var totalCorrectas = Object.keys(testProgress[capId].correctas).length;
    if (totalCorrectas >= testProgress[capId].total && testProgress[capId].total > 0) {
        unlock('test_perfecto');
    }
}

function abrirModalLogros() {
    document.getElementById('logrosContador').textContent =
        logrosDesbloqueados.length + ' / ' + LOGROS_DEF.length + ' desbloqueados';
    var html = LOGROS_DEF.map(function(l) {
        var desbloqueado = logrosDesbloqueados.indexOf(l.id) !== -1;
        return '<div class="logro-item' + (desbloqueado ? ' desbloqueado' : '') + '">' +
            '<div class="li-icono">' + l.icono + '</div>' +
            '<div class="li-nombre">' + l.nombre + '</div>' +
            '<div class="li-desc">' + l.desc + '</div></div>';
    }).join('');
    document.getElementById('logrosGrid').innerHTML = html;
    document.getElementById('logrosModal').classList.add('open');
}
function cerrarModalLogros() {
    document.getElementById('logrosModal').classList.remove('open');
}
document.getElementById('btnLogros').addEventListener('click', abrirModalLogros);
document.getElementById('btnCerrarLogros').addEventListener('click', cerrarModalLogros);
document.getElementById('logrosModal').addEventListener('click', function(e) {
    if (e.target.id === 'logrosModal') cerrarModalLogros();
});

/* ============================================================================
   BÚSQUEDA GLOBAL (Ctrl+K)
   Recorre window.CAPITULOS (el mismo arreglo que ya llena registrarCapitulo())
   leyendo SOLO los campos que index01 ya usaba antes de este cambio
   (conceptos, formulas, ejemplos, ejercicios, quiz, flashcards,
   resumenPuntos). No depende de que capituloXX.js agregue ningún campo
   nuevo, así que es compatible con los archivos de capítulos que ya tengas.
   Al hacer clic en un resultado, carga el capítulo Y salta directo a la
   pestaña correspondiente (mejora sobre el buscador original, que solo
   abría el capítulo sin ubicar la pestaña exacta). */
function quitarEtiquetas(html) {
    return (html || '').replace(/<[^>]+>/g, '');
}
function buscarEnCapitulos(consulta) {
    var q = consulta.toLowerCase().trim();
    if (q.length < 2) return [];
    var resultados = [];
    window.CAPITULOS.forEach(function(cap) {
        // "cap" (r.cap) guarda el _id para poder navegar; "capNumero"/"materia"
        // son solo para mostrarlos en el resultado (ej. "Física · Cap. 4").
        var base = { cap: cap._id, capNumero: cap.numero, materia: cap.materia };
        (cap.conceptos || []).forEach(function(c) {
            var texto = quitarEtiquetas(c.titulo + ' ' + c.html);
            if (texto.toLowerCase().indexOf(q) !== -1) {
                resultados.push(Object.assign({}, base, { pagina: 'conceptos', tipo: 'Concepto', titulo: quitarEtiquetas(c.titulo), extracto: texto.substring(0, 90) }));
            }
        });
        (cap.formulas || []).forEach(function(f) {
            var texto = quitarEtiquetas(f.box + ' ' + f.vars);
            if (texto.toLowerCase().indexOf(q) !== -1) {
                resultados.push(Object.assign({}, base, { pagina: 'formulas', tipo: 'Fórmula', titulo: texto.substring(0, 50), extracto: texto.substring(0, 90) }));
            }
        });
        (cap.ejemplos || []).forEach(function(e) {
            var texto = quitarEtiquetas(e.titulo + ' ' + e.problema);
            if (texto.toLowerCase().indexOf(q) !== -1) {
                resultados.push(Object.assign({}, base, { pagina: 'ejemplos', tipo: 'Ejemplo', titulo: quitarEtiquetas(e.titulo), extracto: quitarEtiquetas(e.problema).substring(0, 90) }));
            }
        });
        (cap.ejercicios || []).forEach(function(ej) {
            var texto = quitarEtiquetas(ej.enunciado);
            if (texto.toLowerCase().indexOf(q) !== -1) {
                resultados.push(Object.assign({}, base, { pagina: 'ejercicios', tipo: 'Ejercicio', titulo: texto.substring(0, 60), extracto: texto.substring(0, 90) }));
            }
        });
        (cap.quiz || []).forEach(function(pr) {
            var texto = quitarEtiquetas(pr.pregunta);
            if (texto.toLowerCase().indexOf(q) !== -1) {
                resultados.push(Object.assign({}, base, { pagina: 'test', tipo: 'Test', titulo: texto.substring(0, 60), extracto: texto.substring(0, 90) }));
            }
        });
        (cap.flashcards || []).forEach(function(f) {
            var texto = quitarEtiquetas(f.frente + ' ' + f.dorso);
            if (texto.toLowerCase().indexOf(q) !== -1) {
                resultados.push(Object.assign({}, base, { pagina: 'tarjetas', tipo: 'Tarjeta', titulo: quitarEtiquetas(f.frente), extracto: quitarEtiquetas(f.dorso).substring(0, 90) }));
            }
        });
        (cap.resumenPuntos || []).forEach(function(p) {
            var texto = quitarEtiquetas(p);
            if (texto.toLowerCase().indexOf(q) !== -1) {
                resultados.push(Object.assign({}, base, { pagina: 'resumen', tipo: 'Resumen', titulo: texto.substring(0, 60), extracto: texto.substring(0, 90) }));
            }
        });
    });
    return resultados;
}
function ejecutarBusqueda() {
    var q = document.getElementById('buscarInput').value;
    var contenedor = document.getElementById('buscarResultados');
    if (q.trim().length < 2) { contenedor.innerHTML = ''; return; }
    var resultados = buscarEnCapitulos(q).slice(0, 20);
    if (!resultados.length) {
        contenedor.innerHTML = '<div class="search-vacio">Sin resultados. Prueba con otra palabra.</div>';
        return;
    }
    contenedor.innerHTML = resultados.map(function(r, idx) {
        return '<div class="search-result" onclick="irAResultado(' + idx + ')">' +
            '<div class="sr-meta">' + materiaInfo(r.materia).nombre + ' · Cap. ' + r.capNumero + ' · ' + r.tipo + '</div>' +
            '<div class="sr-titulo">' + r.titulo + '</div>' +
            (r.extracto ? '<div class="sr-extracto">' + r.extracto + '…</div>' : '') +
            '</div>';
    }).join('');
    window._ultimaBusqueda = resultados; // guardado temporal para poder navegar al hacer clic
}
function irAResultado(idx) {
    var r = window._ultimaBusqueda[idx];
    if (!r) return;
    cargarCapitulo(r.cap);
    mostrarPestana(r.pagina);
    cerrarBuscador();
}
function abrirBuscador() {
    document.getElementById('buscarModal').classList.add('open');
    document.getElementById('buscarInput').value = '';
    document.getElementById('buscarResultados').innerHTML = '';
    setTimeout(function() { document.getElementById('buscarInput').focus(); }, 50);
    unlock('buscador'); // el logro se otorga por abrir el buscador, no hace falta encontrar algo
}
function cerrarBuscador() {
    document.getElementById('buscarModal').classList.remove('open');
}
document.getElementById('btnBuscar').addEventListener('click', abrirBuscador);
document.getElementById('buscarInput').addEventListener('input', ejecutarBusqueda);
document.getElementById('buscarModal').addEventListener('click', function(e) {
    if (e.target.id === 'buscarModal') cerrarBuscador();
});
// Atajo de teclado Ctrl+K (o Cmd+K en Mac) para abrir el buscador desde cualquier pestaña,
// y Escape para cerrar cualquiera de los tres modales (QR, buscador, logros).
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); abrirBuscador(); }
    if (e.key === 'Escape') { cerrarModalQR(); cerrarBuscador(); cerrarModalLogros(); }
});

/* ==================== CITAS TÁCTILES (tocar para ver la fuente en celular) ====================
   Se usa "delegación de eventos" sobre document en vez de enganchar cada cita
   una por una: así funciona también para el HTML que se genera dinámicamente
   al cambiar de capítulo, sin tener que reconectar nada cada vez. */
document.addEventListener('click', function(e) {
    var tag = e.target.closest('.citation-tag');
    document.querySelectorAll('.citation-tag.tooltip-active').forEach(function(t) {
        if (t !== tag) t.classList.remove('tooltip-active');
    });
    if (tag) {
        e.stopPropagation();
        tag.classList.toggle('tooltip-active');
    }
});

/* ==================== EJERCICIOS NUMÉRICOS Y DE TEXTO (genéricos) ==================== */
function checkExercise(inputId, correct, feedbackId) {
    var input = document.getElementById(inputId);
    var fb = document.getElementById(feedbackId);
    var val = parseFloat(input.value);
    if (isNaN(val)) { fb.textContent = '⚠️ Introduce un número válido.'; fb.className = 'feedback err'; return; }
    if (val === correct) { fb.textContent = '✅ ¡Correcto!'; fb.className = 'feedback ok'; registrarEjercicioCorrecto(); }
    else { fb.textContent = '❌ Incorrecto. La respuesta correcta es ' + correct + '.'; fb.className = 'feedback err'; }
}
function checkExerciseText(inputId, correct, feedbackId) {
    var input = document.getElementById(inputId);
    var fb = document.getElementById(feedbackId);
    var userVal = (input.value || '').trim().replace(/\s+/g, '');
    var correctVal = correct.replace(/\s+/g, '');
    if (userVal === '') { fb.textContent = '⚠️ Introduce una respuesta.'; fb.className = 'feedback err'; return; }
    if (userVal === correctVal) { fb.textContent = '✅ ¡Correcto!'; fb.className = 'feedback ok'; registrarEjercicioCorrecto(); }
    else { fb.textContent = '❌ Incorrecto. Revisa mayúsculas/minúsculas y subíndices (esperado: ' + correct + ').'; fb.className = 'feedback err'; }
}

/* ==================== TEST DE OPCIÓN MÚLTIPLE (genérico) ==================== */
function checkQuiz(contId, nombreRadio, correcta, fbId) {
    var container = document.getElementById(contId);
    var labels = container.querySelectorAll('label');
    var radios = container.querySelectorAll('input[name="' + nombreRadio + '"]');
    var selected = null, selectedLabel = null;
    radios.forEach(function(r, index) { if (r.checked) { selected = r.value; selectedLabel = labels[index]; } });
    var fb = document.getElementById(fbId);
    if (!selected) { fb.textContent = '⚠️ Selecciona una opción.'; fb.className = 'feedback err'; return; }
    labels.forEach(function(l) { l.classList.remove('correct-opt', 'wrong-opt', 'selected-opt'); });
    if (selectedLabel) selectedLabel.classList.add('selected-opt');
    if (selected === correcta) {
        if (selectedLabel) selectedLabel.classList.add('correct-opt');
        fb.textContent = '✅ ¡Correcto! Buena comprensión.'; fb.className = 'feedback ok';
        registrarAciertoTest(contId); // contId trae el número de capítulo y de pregunta codificados (ver idc())
    } else {
        if (selectedLabel) selectedLabel.classList.add('wrong-opt');
        labels.forEach(function(l, idx) { if (radios[idx].value === correcta) l.classList.add('correct-opt'); });
        fb.textContent = '❌ Incorrecto. La opción correcta está resaltada en verde.'; fb.className = 'feedback err';
    }
}
// Marca visualmente la opción elegida apenas se hace clic (antes de "Verificar")
document.addEventListener('change', function(e) {
    if (e.target.matches('.test-q input[type="radio"]')) {
        var container = e.target.closest('.test-q');
        container.querySelectorAll('label').forEach(function(l) { l.classList.remove('selected-opt'); });
        var parentLabel = e.target.closest('label');
        if (parentLabel) parentLabel.classList.add('selected-opt');
        var fb = container.querySelector('.feedback');
        if (fb) { fb.textContent = ''; fb.className = 'feedback'; }
    }
});

/* ==================== MODO PRÁCTICA (genérico, usa el banco del capítulo activo) ==================== */
var practicaBanco = null;
var practiceLevel = 'facil';
var practicaScore = 0;
var currentPracticeAnswer = '';
var currentPracticeTipo = 'texto';

function setPracticeLevel(level) {
    practiceLevel = level;
    var badge = document.getElementById('practiceLevelBadge');
    if (!badge) return; // por si esta sección todavía no se pintó
    var labels = {
        facil: { text: 'Nivel Fácil', clase: 'level-1' },
        medio: { text: 'Nivel Medio', clase: 'level-2' },
        dificil: { text: 'Nivel Difícil', clase: 'level-3' }
    };
    badge.textContent = labels[level].text;
    badge.className = 'level-badge ' + labels[level].clase;
    generatePracticeQuestion();
    document.getElementById('practiceFeedback').textContent = '';
    document.getElementById('practiceFeedback').className = 'feedback';
    document.getElementById('practiceAnswer').value = '';
}

function generatePracticeQuestion() {
    if (!practicaBanco) return;
    var pool = practicaBanco[practiceLevel] || practicaBanco.facil;
    var item = pool[Math.floor(Math.random() * pool.length)];
    document.getElementById('practiceQuestion').innerHTML = item.q; // puede traer <sup>/<sub>
    currentPracticeAnswer = item.a;
    currentPracticeTipo = item.tipo || 'texto';
    document.getElementById('practiceFeedback').textContent = '';
    document.getElementById('practiceFeedback').className = 'feedback';
    document.getElementById('practiceAnswer').value = '';
}

// Ignora tildes y mayúsculas al comparar texto (nunca se usa con fórmulas químicas).
function normalizarTexto(str) {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '');
}

function checkPractice() {
    var input = document.getElementById('practiceAnswer');
    var feedback = document.getElementById('practiceFeedback');
    var userValCrudo = input.value || '';
    if (userValCrudo.trim() === '') { feedback.textContent = '⚠️ Introduce tu respuesta.'; feedback.className = 'feedback err'; return; }

    var isCorrect;
    if (currentPracticeTipo === 'formula') {
        var userFormula = userValCrudo.trim().replace(/\s+/g, '');
        var correctFormula = currentPracticeAnswer.trim().replace(/\s+/g, '');
        isCorrect = (userFormula === correctFormula);
    } else {
        isCorrect = (normalizarTexto(userValCrudo) === normalizarTexto(currentPracticeAnswer));
    }

    if (isCorrect) {
        feedback.textContent = '✅ ¡Correcto! +1 punto'; feedback.className = 'feedback ok'; practicaScore++;
        if (practiceLevel === 'dificil') unlock('practica_dificil');
    } else {
        feedback.textContent = '❌ Incorrecto. La respuesta correcta era: ' + currentPracticeAnswer; feedback.className = 'feedback err';
    }
    document.getElementById('practiceScore').textContent = practicaScore;
    setTimeout(generatePracticeQuestion, 1200);
}
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.id === 'practiceAnswer') checkPractice();
});

/* ==================== ARRANQUE DE LA APLICACIÓN ==================== */
document.addEventListener('DOMContentLoaded', function() {
    initTema();
    ajustarAlturaTopbar();
    renderSidebar();
    // Reabre el último capítulo visto, o el primero disponible si es la primera vez.
    // "ultimo" ahora es el _id combinado (ej. "quimica_1"), no un número suelto.
    var ultimo = localStorage.getItem('ultimoCapitulo');
    var existeUltimo = window.CAPITULOS.some(function(c) { return c._id === ultimo; });
    var primerCapitulo = window.CAPITULOS[0]; // el primero según el orden de los <script> en index.html
    if (existeUltimo) cargarCapitulo(ultimo);
    else if (primerCapitulo) cargarCapitulo(primerCapitulo._id);

    // ==================== RENDERIZADO DE FÓRMULAS MATEMÁTICAS (KaTeX) ====================
    // Si la librería KaTeX ya se cargó (viene incluida como <script> en index.html),
    // "envolvemos" la función cargarCapitulo para que, cada vez que se cambie de
    // capítulo, además de dibujar el HTML normal, se busquen fórmulas escritas
    // entre $...$ o $$...$$ dentro del contenido y se conviertan en notación
    // matemática bien formateada.
    if (typeof renderMathInElement === 'function') {
        var cargarCapituloOriginal = cargarCapitulo; // guardamos la función original antes de reemplazarla
        cargarCapitulo = function(n) { // nueva versión "aumentada" de cargarCapitulo
            cargarCapituloOriginal(n); // primero hace lo de siempre: dibujar el capítulo n
            renderMathInElement(document.getElementById('main-content'), { // luego busca fórmulas en lo recién dibujado
                delimiters: [
                    { left: '$$', right: '$$', display: true },  // fórmulas en bloque, propia línea
                    { left: '$', right: '$', display: false }    // fórmulas dentro del texto
                ],
                throwOnError: false // si una fórmula está mal escrita, no rompe la página
            });
        };
    }
});
