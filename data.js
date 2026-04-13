// ─── POLITIKON DATA ──────────────────────────────────────────────────────────
// Positions: cx = left/right axis (70=far left, 326=centre, 600=far right)
//            cy = territorial axis (40=unionist, 255=centre, 460=independentist)
// Update positions here — never touch index.html for content changes.
// Last updated: March 2026

var CCAA = [
  {
    id: "nacional",
    name: { fr: "Partis nationaux", es: "Partidos nacionales" },
    subtitle: { fr: "Congrès des Députés — mis à jour mars 2026", es: "Congreso de los Diputados — actualizado marzo 2026" },
    nextElection: {
      fr: { date: "Été 2027 (au plus tard)", note: "Sánchez a confirmé vouloir aller au bout de la législature" },
      es: { date: "Verano 2027 (como máximo)", note: "Sánchez ha confirmado agotar la legislatura" },
    },
        parties: [
      { name:"Podemos",  cx:108, cy:175, r:9,  color:"#6B2B9A", leader:"Ione Belarra", seats:5,
        photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Ione_Belarra_en_el_Congreso_de_los_Diputados_%28cropped%29.jpg?width=120",
        desc:{ fr:"Extrême gauche · fédéraliste-plurinationaliste · 5 sièges (2023)", es:"Extrema izquierda · federalista-plurinacionalista · 5 escaños (2023)" }},
      { name:"Sumar",    cx:152, cy:285, r:10, color:"#C0004E", leader:"Yolanda Díaz", seats:31,
        photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Yolanda_D%C3%ADaz_en_2023_%28cropped%29.jpg?width=120",
        desc:{ fr:"Gauche plurielle · reconnaît le droit à décider · 31 sièges (2023)", es:"Izquierda plural · reconoce el derecho a decidir · 31 escaños (2023)" }},
      { name:"PSOE",     cx:230, cy:190, r:11, color:"#E4003A", leader:"Pedro Sánchez", seats:122,
        photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Pedro_S%C3%A1nchez_2023_%28cropped%29.jpg?width=120",
        desc:{ fr:"Centre-gauche · unioniste fédéraliste · 122 sièges (2023)", es:"Centro-izquierda · unionista federalista · 122 escaños (2023)" }},
      { name:"Cs",       cx:385, cy:130, r:7,  color:"#FA5000", leader:"Patricia Guasp", seats:0,
        photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Patricia_Guasp_Perello_%28cropped%29.jpg?width=120",
        desc:{ fr:"Centre libéral · fort unioniste · 0 siège (2023, en déclin)", es:"Centro liberal · fuertemente unionista · 0 escaños (2023, en declive)" }},
      { name:"PP",       cx:435, cy:160, r:11, color:"#0056A2", leader:"Alberto Núñez Feijóo", seats:137,
        photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Alberto_N%C3%BA%C3%B1ez_Feij%C3%B3o_2023_%28cropped%29.jpg?width=120",
        desc:{ fr:"Centre-droit conservateur · unioniste fort · 137 sièges (2023)", es:"Centro-derecha conservadora · fuertemente unionista · 137 escaños (2023)" }},
      { name:"UPN",      cx:468, cy:138, r:6,  color:"#004A9A", leader:"Sergio Sayas", seats:1,
        photo:"",
        desc:{ fr:"Droite navarraise · unioniste · 1 siège (2023)", es:"Derecha navarra · unionista · 1 escaño (2023)" }},
      { name:"Vox",      cx:532, cy:108, r:10, color:"#63BE21", leader:"Santiago Abascal", seats:33,
        photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Santiago_Abascal_2022_%28cropped%29.jpg?width=120",
        desc:{ fr:"Extrême droite · ultra-centraliste · crise interne (mars 2026): Espinosa, Ortega Smith, Monasterio réclament un congrès extraordinaire contre Abascal", es:"Extrema derecha · ultracentralista · crisis interna (marzo 2026): Espinosa, Ortega Smith, Monasterio exigen congreso extraordinario contra Abascal" }},
      { name:"CC",       cx:418, cy:335, r:7,  color:"#C8960C", leader:"Fernando Clavijo", seats:4,
        photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Fernando_Clavijo_Batlle_%28cropped%29.jpg?width=120",
        desc:{ fr:"Centre-droit · régionalisme canarie (autonomie, pas indépendance) · 4 sièges (2023)", es:"Centro-derecha · regionalismo canario (autonomía, no independencia) · 4 escaños (2023)" }},
    ],
    legend:{
      fr:[ {color:"#E4003A",label:"Gauche / Social-démocratie"},{color:"#6B2B9A",label:"Gauche radicale"},{color:"#FA5000",label:"Centre libéral"},{color:"#0056A2",label:"Droite conservatrice"},{color:"#63BE21",label:"Extrême droite"},{color:"#C8960C",label:"Régionalisme"} ],
      es:[ {color:"#E4003A",label:"Izquierda / Socialdemocracia"},{color:"#6B2B9A",label:"Izquierda radical"},{color:"#FA5000",label:"Centro liberal"},{color:"#0056A2",label:"Derecha conservadora"},{color:"#63BE21",label:"Extrema derecha"},{color:"#C8960C",label:"Regionalismo"} ],
    }
  },
  {
    id: "cataluña",
    name: { fr: "Catalogne", es: "Cataluña" },
    subtitle: { fr: "Parlament de Catalunya — mis à jour mars 2026", es: "Parlament de Catalunya — actualizado marzo 2026" },
    nextElection: {
      fr: { date: "Mai 2028 (cycle normal)", note: "Prochaine élection au terme des 4 ans de la législature Illa" },
      es: { date: "Mayo 2028 (ciclo normal)", note: "Próximas elecciones al término de la legislatura Illa" },
    },
        parties: [
      { name:"PSC",     cx:240, cy:190, r:11, color:"#E4003A", leader:"Salvador Illa", seats:42, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Salvador_Illa_2023_%28cropped%29.jpg?width=120",
        desc:{ fr:"Parti des Socialistes de Catalogne · centre-gauche · unioniste fédéraliste", es:"PSC · centro-izquierda · unionista federalista" }},
      { name:"ERC",     cx:148, cy:355, r:10, color:"#F4A900", leader:"Oriol Junqueras", seats:20, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Oriol_Junqueras_%28cropped%29.jpg?width=120",
        desc:{ fr:"Esquerra Republicana · gauche républicaine · indépendantiste · soutient Illa · négocie financement singulier avec PSOE", es:"ERC · izquierda republicana · independentista · apoya Illa · negocia financiación singular con PSOE" }},
      { name:"Junts",   cx:400, cy:408, r:9,  color:"#00527F", leader:"Carles Puigdemont", seats:35, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Carles_Puigdemont_2017_%28cropped%29.jpg?width=120",
        desc:{ fr:"Junts per Catalunya · droite libérale · indépendantiste dur · rupture PSOE (2025) · réclame concierto économique", es:"Junts · derecha liberal · independentista duro · ruptura PSOE (2025) · exige concierto económico" }},
      { name:"CUP",     cx:95,  cy:420, r:7,  color:"#FFCC00", leader:"Laia Estrada", seats:4, photo:"",
        desc:{ fr:"Candidatura d'Unitat Popular · extrême gauche · indépendantiste radical · anticapitaliste", es:"CUP · extrema izquierda · independentista radical · anticapitalista" }},
      { name:"PP cat.", cx:435, cy:162, r:8,  color:"#0056A2", leader:"Alejandro Fernández", seats:15, photo:"",
        desc:{ fr:"PP Catalogne · droite · unioniste fort", es:"PP Cataluña · derecha · fuertemente unionista" }},
      { name:"Vox cat.",cx:530, cy:108, r:7,  color:"#63BE21", leader:"Ignacio Garriga", seats:11, photo:"",
        desc:{ fr:"Vox Catalogne · extrême droite · ultra-centraliste", es:"Vox Cataluña · extrema derecha · ultracentralista" }},
      { name:"Comuns",  cx:142, cy:262, r:8,  color:"#A8139E", leader:"Jéssica Albiach", seats:8, photo:"",
        desc:{ fr:"Catalunya en Comú · gauche verte · fédéraliste / droit à décider", es:"Catalunya en Comú · izquierda verde · federalista / derecho a decidir" }},
      { name:"Aliança", cx:455, cy:130, r:7,  color:"#0044AA", leader:"Sílvia Orriols", seats:7, photo:"",
        desc:{ fr:"Aliança Catalana · droite identitaire · indépendantiste · en forte croissance, pression sur Junts par la droite", es:"Aliança Catalana · derecha identitaria · independentista · en fuerte crecimiento, presiona a Junts por la derecha" }},
    ],
    legend:{
      fr:[ {color:"#E4003A",label:"Social-démocratie"},{color:"#F4A900",label:"Gauche indépendantiste"},{color:"#FFCC00",label:"Extrême gauche indép."},{color:"#A8139E",label:"Gauche verte / fédéraliste"},{color:"#00527F",label:"Droite indépendantiste"},{color:"#0056A2",label:"Droite unioniste"} ],
      es:[ {color:"#E4003A",label:"Socialdemocracia"},{color:"#F4A900",label:"Izquierda independentista"},{color:"#FFCC00",label:"Extrema izq. independentista"},{color:"#A8139E",label:"Izquierda verde / federalista"},{color:"#00527F",label:"Derecha independentista"},{color:"#0056A2",label:"Derecha unionista"} ],
    }
  },
  {
    id: "euskadi",
    name: { fr: "Pays Basque", es: "País Vasco" },
    subtitle: { fr: "Eusko Legebiltzarra — partis principaux", es: "Eusko Legebiltzarra — principales partidos" },
    nextElection: {
      fr: { date: "Avril 2028 (cycle normal)", note: "Élections prévues après les 4 ans de la législature 2024" },
      es: { date: "Abril 2028 (ciclo normal)", note: "Elecciones previstas tras los 4 años de la legislatura 2024" },
    },
        parties: [
      { name:"EH Bildu", cx:108, cy:400, r:10, color:"#C8D400", leader:"Arnaldo Otegi", seats:27, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Arnaldo_Otegi_%28cropped%29.jpg?width=120",
        desc:{ fr:"Gauche indépendantiste · héritière d'Herri Batasuna · abertzale de gauche", es:"Izquierda independentista · heredera de Herri Batasuna · izquierda abertzale" }},
      { name:"EAJ-PNV", cx:370, cy:340, r:11, color:"#009A44", leader:"Imanol Pradales", seats:27, photo:"",
        desc:{ fr:"Parti nationaliste basque · centre-droit · nationaliste modéré · autonomiste", es:"PNV · centro-derecha · nacionalismo moderado · autonomista" }},
      { name:"PSE-EE",  cx:235, cy:190, r:9,  color:"#E4003A", leader:"Eneko Andueza", seats:12, photo:"",
        desc:{ fr:"Socialistes basques (PSOE) · centre-gauche · unioniste fédéraliste", es:"Socialistas vascos (PSOE) · centro-izquierda · unionista federalista" }},
      { name:"PP Eus.", cx:432, cy:162, r:7,  color:"#0056A2", leader:"Javier de Andrés", seats:6, photo:"",
        desc:{ fr:"PP Pays Basque · droite · unioniste fort", es:"PP País Vasco · derecha · fuertemente unionista" }},
      { name:"Vox Eus.",cx:528, cy:110, r:6,  color:"#63BE21", leader:"Amaia Martínez", seats:0, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste", es:"Vox · extrema derecha · ultracentralista" }},
      { name:"Elkarrekin",cx:148,cy:272,r:7,  color:"#A8139E", leader:"Miren Gorrotxategi", seats:6, photo:"",
        desc:{ fr:"Podemos Pays Basque · gauche · fédéraliste, soutient droit à décider", es:"Podemos País Vasco · izquierda · federalista, apoya el derecho a decidir" }},
    ],
    legend:{
      fr:[ {color:"#009A44",label:"Nationalisme basque modéré (PNV)"},{color:"#C8D400",label:"Gauche indépendantiste abertzale"},{color:"#E4003A",label:"Social-démocratie unioniste"},{color:"#0056A2",label:"Droite unioniste"} ],
      es:[ {color:"#009A44",label:"Nacionalismo vasco moderado (PNV)"},{color:"#C8D400",label:"Izquierda independentista abertzale"},{color:"#E4003A",label:"Socialdemocracia unionista"},{color:"#0056A2",label:"Derecha unionista"} ],
    }
  },
  {
    id: "galicia",
    name: { fr: "Galice", es: "Galicia" },
    subtitle: { fr: "Parlamento de Galicia — partis principaux", es: "Parlamento de Galicia — principales partidos" },
    nextElection: {
      fr: { date: "Fév. 2028 (cycle normal)", note: "Prochaine élection au terme des 4 ans de la législature Rueda" },
      es: { date: "Feb. 2028 (ciclo normal)", note: "Próximas elecciones al término de la legislatura Rueda" },
    },
        parties: [
      { name:"PPdeG",   cx:425, cy:145, r:11, color:"#0056A2", leader:"Alfonso Rueda", seats:40, photo:"",
        desc:{ fr:"PP Galice · droite · hégémonique · unioniste, mais valorise identité galicienne", es:"PP Galicia · derecha · hegemónico · unionista, aunque reivindica la identidad gallega" }},
      { name:"BNG",     cx:132, cy:370, r:9,  color:"#3B8A8A", leader:"Ana Pontón", seats:25, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Ana_Pont%C3%B3n_%28cropped%29.jpg?width=120",
        desc:{ fr:"Bloque Nacionalista Galego · gauche nationaliste · indépendantiste / fédéraliste", es:"BNG · izquierda nacionalista · independentista / federalista" }},
      { name:"PSdeG",   cx:235, cy:185, r:8,  color:"#E4003A", leader:"José Ramón Gómez Besteiro", seats:9, photo:"",
        desc:{ fr:"Socialistes galiciens · centre-gauche · unioniste fédéraliste", es:"Socialistas gallegos (PSOE) · centro-izquierda · unionista federalista" }},
      { name:"Sumar Gal",cx:155,cy:268, r:6,  color:"#C0004E", leader:"Marta Lois", seats:2, photo:"",
        desc:{ fr:"Sumar Galice · gauche · fédéraliste", es:"Sumar Galicia · izquierda · federalista" }},
    ],
    legend:{
      fr:[ {color:"#0056A2",label:"Droite (PP dominant)"},{color:"#3B8A8A",label:"Nationalisme galicien"},{color:"#E4003A",label:"Social-démocratie unioniste"} ],
      es:[ {color:"#0056A2",label:"Derecha (PP dominante)"},{color:"#3B8A8A",label:"Nacionalismo gallego"},{color:"#E4003A",label:"Socialdemocracia unionista"} ],
    }
  },
  {
    id: "comunitat_valenciana",
    name: { fr: "C. Valencienne", es: "C. Valenciana" },
    subtitle: { fr: "Corts Valencianes — partis principaux", es: "Corts Valencianes — principales partidos" },
    nextElection: {
      fr: { date: "Mai 2027", note: "Cycle normal — 4e dimanche de mai" },
      es: { date: "Mayo 2027", note: "Ciclo normal — 4º domingo de mayo" },
    },
        parties: [
      { name:"PSPV",    cx:238, cy:188, r:9,  color:"#E4003A", leader:"Diana Morant", seats:31, photo:"",
        desc:{ fr:"Socialistes valenciens · centre-gauche · unioniste fédéraliste", es:"Socialistas valencianos (PSOE) · centro-izquierda · unionista federalista" }},
      { name:"PPCV",    cx:432, cy:158, r:11, color:"#0056A2", leader:"Carlos Mazón", seats:40, photo:"",
        desc:{ fr:"PP C. Valencienne · droite · unioniste fort · au pouvoir depuis 2023", es:"PP Comunitat Valenciana · derecha · fuertemente unionista · en el poder desde 2023" }},
      { name:"Vox CV",  cx:530, cy:108, r:8,  color:"#63BE21", leader:"José María Llanos", seats:13, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste", es:"Vox · extrema derecha · ultracentralista" }},
      { name:"Compromís",cx:155,cy:320, r:9,  color:"#E8820C", leader:"Joan Baldoví", seats:15, photo:"",
        desc:{ fr:"Coalición valencianiste · gauche verte · nationalisme valencien modéré · fédéraliste", es:"Coalición valencianista · izquierda verde · nacionalismo valenciano moderado · federalista" }},
      { name:"Sumar CV",cx:148, cy:265, r:6,  color:"#C0004E", leader:"Pilar Lima", seats:4, photo:"",
        desc:{ fr:"Sumar C. Valencienne · gauche · fédéraliste", es:"Sumar Comunitat Valenciana · izquierda · federalista" }},
    ],
    legend:{
      fr:[ {color:"#E8820C",label:"Nationalisme valencien (Compromís)"},{color:"#E4003A",label:"Social-démocratie"},{color:"#0056A2",label:"Droite unioniste"} ],
      es:[ {color:"#E8820C",label:"Nacionalismo valenciano (Compromís)"},{color:"#E4003A",label:"Socialdemocracia"},{color:"#0056A2",label:"Derecha unionista"} ],
    }
  },
  {
    id: "andalucia",
    name: { fr: "Andalousie", es: "Andalucía" },
    subtitle: { fr: "Parlamento de Andalucía — partis principaux", es: "Parlamento de Andalucía — principales partidos" },
    nextElection: {
      fr: { date: "Juin 2026", note: "Moreno dissoudra le parlement en avril — date probable : 14 juin" },
      es: { date: "Junio 2026", note: "Moreno disolverá el parlamento en abril — fecha probable: 14 de junio" },
    },
        parties: [
      { name:"PSOE-A",  cx:240, cy:192, r:10, color:"#E4003A", leader:"María Jesús Montero", seats:30, photo:"",
        desc:{ fr:"Socialistes andalous · centre-gauche · unioniste", es:"Socialistas andaluces · centro-izquierda · unionista" }},
      { name:"PP-A",    cx:435, cy:155, r:11, color:"#0056A2", leader:"Juanma Moreno Bonilla", seats:58, photo:"",
        desc:{ fr:"PP Andalousie · droite · unioniste · au pouvoir depuis 2018", es:"PP Andalucía · derecha · unionista · en el poder desde 2018" }},
      { name:"Vox-A",   cx:532, cy:108, r:9,  color:"#63BE21", leader:"Manuel Gavira", seats:14, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste · fort en Andalousie", es:"Vox · extrema derecha · ultracentralista · fuerte en Andalucía" }},
      { name:"Por Andalucía", cx:148, cy:268, r:7, color:"#C0004E", leader:"Inmaculada Nieto", seats:9, photo:"",
        desc:{ fr:"Sumar/IU Andalousie · gauche · fédéraliste", es:"Sumar/IU Andalucía · izquierda · federalista" }},
    ],
    legend:{
      fr:[ {color:"#E4003A",label:"Social-démocratie"},{color:"#0056A2",label:"Droite (PP dominant)"},{color:"#63BE21",label:"Extrême droite"} ],
      es:[ {color:"#E4003A",label:"Socialdemocracia"},{color:"#0056A2",label:"Derecha (PP dominante)"},{color:"#63BE21",label:"Extrema derecha"} ],
    }
  },
  {
    id: "madrid",
    name: { fr: "Madrid", es: "Madrid" },
    subtitle: { fr: "Asamblea de Madrid — partis principaux", es: "Asamblea de Madrid — principales partidos" },
    nextElection: {
      fr: { date: "Mai 2027", note: "Cycle normal — 4e dimanche de mai" },
      es: { date: "Mayo 2027", note: "Ciclo normal — 4º domingo de mayo" },
    },
        parties: [
      { name:"PSOE-M",  cx:240, cy:188, r:9,  color:"#E4003A", leader:"Juan Lobato", seats:27, photo:"",
        desc:{ fr:"Socialistes madrilènes · centre-gauche · unioniste", es:"Socialistas madrileños · centro-izquierda · unionista" }},
      { name:"PP-M",    cx:435, cy:150, r:12, color:"#0056A2", leader:"Isabel Díaz Ayuso", seats:65, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Isabel_D%C3%ADaz_Ayuso_%28cropped%29.jpg?width=120",
        desc:{ fr:"PP Madrid · droite · unioniste fort · hégémonique (Díaz Ayuso)", es:"PP Madrid · derecha · fuertemente unionista · hegemónico (Díaz Ayuso)" }},
      { name:"Vox-M",   cx:532, cy:108, r:9,  color:"#63BE21", leader:"Rocío Monasterio", seats:10, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste", es:"Vox · extrema derecha · ultracentralista" }},
      { name:"Más Madrid", cx:175, cy:210, r:9, color:"#00A86B", leader:"Mónica García", seats:26, photo:"",
        desc:{ fr:"Más Madrid · gauche verte · unioniste progressiste · fort à Madrid capitale", es:"Más Madrid · izquierda verde · unionista progresista · fuerte en la capital" }},
      { name:"Sumar-M", cx:145, cy:265, r:6,  color:"#C0004E", leader:"Alejandra Jacinto", seats:7, photo:"",
        desc:{ fr:"Sumar Madrid · gauche · fédéraliste", es:"Sumar Madrid · izquierda · federalista" }},
    ],
    legend:{
      fr:[ {color:"#00A86B",label:"Gauche verte (Más Madrid)"},{color:"#E4003A",label:"Social-démocratie"},{color:"#0056A2",label:"Droite (PP très dominant)"},{color:"#63BE21",label:"Extrême droite"} ],
      es:[ {color:"#00A86B",label:"Izquierda verde (Más Madrid)"},{color:"#E4003A",label:"Socialdemocracia"},{color:"#0056A2",label:"Derecha (PP muy dominante)"},{color:"#63BE21",label:"Extrema derecha"} ],
    }
  },
  {
    id: "navarra",
    name: { fr: "Navarre", es: "Navarra" },
    subtitle: { fr: "Parlamento de Navarra — partis principaux", es: "Parlamento de Navarra — principales partidos" },
    nextElection: {
      fr: { date: "Mai 2027", note: "Cycle normal — 4e dimanche de mai" },
      es: { date: "Mayo 2027", note: "Ciclo normal — 4º domingo de mayo" },
    },
        parties: [
      { name:"PSN",     cx:235, cy:185, r:8,  color:"#E4003A", leader:"Santos Cerdán", seats:11, photo:"",
        desc:{ fr:"Socialistes navarrais · centre-gauche · unioniste fédéraliste", es:"Socialistas navarros (PSOE) · centro-izquierda · unionista federalista" }},
      { name:"UPN",     cx:462, cy:140, r:9,  color:"#0044AA", leader:"Javier Esparza", seats:10, photo:"",
        desc:{ fr:"Unión del Pueblo Navarro · droite · fort unioniste · anti-réunification avec le Pays Basque", es:"UPN · derecha · fuertemente unionista · contraria a la integración con el País Vasco" }},
      { name:"EH Bildu Nav.", cx:108, cy:395, r:8, color:"#C8D400", leader:"Bakartxo Ruiz", seats:10, photo:"",
        desc:{ fr:"Gauche abertzale · indépendantiste · favorable à la réunification navarro-basque", es:"Izquierda abertzale · independentista · favorable a la integración navarro-vasca" }},
      { name:"Geroa Bai", cx:222, cy:338, r:7, color:"#E8820C", leader:"Uxue Barkos", seats:6, photo:"",
        desc:{ fr:"Centre · nationalisme navarrais modéré · fédéraliste / autonomiste", es:"Centro · nacionalismo navarro moderado · federalista / autonomista" }},
      { name:"PPN",     cx:435, cy:158, r:7,  color:"#0056A2", leader:"Javier García", seats:6, photo:"",
        desc:{ fr:"PP Navarre · droite · unioniste fort", es:"PP Navarra · derecha · fuertemente unionista" }},
      { name:"Vox Nav.",cx:530, cy:110, r:6,  color:"#63BE21", leader:"Maite Nosti", seats:2, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste", es:"Vox · extrema derecha · ultracentralista" }},
    ],
    legend:{
      fr:[ {color:"#0044AA",label:"Droite navarraise unioniste (UPN)"},{color:"#C8D400",label:"Gauche indépendantiste abertzale"},{color:"#E8820C",label:"Nationalisme navarrais modéré"},{color:"#E4003A",label:"Social-démocratie"} ],
      es:[ {color:"#0044AA",label:"Derecha navarra unionista (UPN)"},{color:"#C8D400",label:"Izquierda independentista abertzale"},{color:"#E8820C",label:"Nacionalismo navarro moderado"},{color:"#E4003A",label:"Socialdemocracia"} ],
    }
  },
  {
    id: "aragon",
    name: { fr: "Aragon", es: "Aragón" },
    subtitle: { fr: "Cortes de Aragón — partis principaux", es: "Cortes de Aragón — principales partidos" },
    nextElection: {
      fr: { date: "Élections passées : 8 fév. 2026", note: "PP 26 · PSOE 18 · Vox 14 · CHA 6 · Aragón Existe 2 · IU-Sumar 1" },
      es: { date: "Elecciones celebradas: 8 feb. 2026", note: "PP 26 · PSOE 18 · Vox 14 · CHA 6 · Aragón Existe 2 · IU-Sumar 1" },
    },
        parties: [
      { name:"PSOE-Ar.", cx:238, cy:190, r:9,  color:"#E4003A", leader:"Pilar Alegría", seats:18, photo:"",
        desc:{ fr:"Socialistes aragonais · centre-gauche · unioniste", es:"Socialistas aragoneses · centro-izquierda · unionista" }},
      { name:"PP-Ar.",   cx:432, cy:155, r:10, color:"#0056A2", leader:"Jorge Azcón", seats:26, photo:"",
        desc:{ fr:"PP Aragon · droite · unioniste · au pouvoir depuis 2023", es:"PP Aragón · derecha · unionista · en el poder desde 2023" }},
      { name:"Vox-Ar.",  cx:530, cy:108, r:8,  color:"#63BE21", leader:"Alejandro Nolasco", seats:14, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste", es:"Vox · extrema derecha · ultracentralista" }},
      { name:"CHA",      cx:160, cy:348, r:8,  color:"#AA1111", leader:"Jorge Pueyo", seats:6, photo:"",
        desc:{ fr:"Chunta Aragonesista · gauche · régionalisme aragonais · fédéraliste", es:"Chunta Aragonesista · izquierda · regionalismo aragonés · federalista" }},
      { name:"PAR",      cx:382, cy:335, r:5,  color:"#DDAA00", leader:"Alberto Izquierdo", seats:0, photo:"",
        desc:{ fr:"Partido Aragonés · centre-droit · régionalisme aragonais modéré", es:"Partido Aragonés · centro-derecha · regionalismo aragonés moderado" }},
      { name:"Aragón Existe", cx:300, cy:310, r:5, color:"#5A3E8C", leader:"Tomás Guitarte", seats:2,
        photo:"",
        desc:{ fr:"Aragón-Teruel Existe · régionalisme · défense de Teruel et des zones rurales · centre", es:"Aragón-Teruel Existe · regionalismo · defensa de Teruel y zonas rurales · centro" }},
      { name:"Sumar-Ar.",cx:148, cy:265, r:5,  color:"#C0004E", leader:"Marta Abengochea", seats:1, photo:"",
        desc:{ fr:"Sumar Aragon · gauche · fédéraliste", es:"Sumar Aragón · izquierda · federalista" }},
    ],
    legend:{
      fr:[ {color:"#AA1111",label:"Régionalisme aragonais de gauche"},{color:"#DDAA00",label:"Régionalisme aragonais modéré"},{color:"#E4003A",label:"Social-démocratie"},{color:"#0056A2",label:"Droite unioniste"} ],
      es:[ {color:"#AA1111",label:"Regionalismo aragonés de izquierda"},{color:"#DDAA00",label:"Regionalismo aragonés moderado"},{color:"#E4003A",label:"Socialdemocracia"},{color:"#0056A2",label:"Derecha unionista"} ],
    }
  },
  {
    id: "canarias",
    name: { fr: "Canaries", es: "Canarias" },
    subtitle: { fr: "Parlamento de Canarias — partis principaux", es: "Parlamento de Canarias — principales partidos" },
    nextElection: {
      fr: { date: "Mai 2027", note: "Cycle normal — 4e dimanche de mai" },
      es: { date: "Mayo 2027", note: "Ciclo normal — 4º domingo de mayo" },
    },
        parties: [
      { name:"CC",       cx:415, cy:330, r:9,  color:"#C8960C", leader:"Fernando Clavijo", seats:25, photo:"",
        desc:{ fr:"Coalición Canaria · centre-droit · régionalisme canarie · autonomiste, non indépendantiste", es:"Coalición Canaria · centro-derecha · regionalismo canario · autonomista, no independentista" }},
      { name:"PSOE-C",   cx:238, cy:185, r:9,  color:"#E4003A", leader:"Ángel Víctor Torres", seats:17, photo:"",
        desc:{ fr:"Socialistes canariens · centre-gauche · unioniste fédéraliste", es:"Socialistas canarios · centro-izquierda · unionista federalista" }},
      { name:"PP-C",     cx:432, cy:155, r:9,  color:"#0056A2", leader:"Manuel Domínguez", seats:16, photo:"",
        desc:{ fr:"PP Canaries · droite · unioniste", es:"PP Canarias · derecha · unionista" }},
      { name:"NC-bc",    cx:162, cy:340, r:7,  color:"#009A6E", leader:"Luis Campos", seats:5, photo:"",
        desc:{ fr:"Nueva Canarias · gauche · régionalisme de gauche canarie", es:"Nueva Canarias · izquierda · regionalismo de izquierda canario" }},
      { name:"Vox-C",    cx:530, cy:110, r:6,  color:"#63BE21", leader:"Nicasio Galván", seats:4, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste", es:"Vox · extrema derecha · ultracentralista" }},
      { name:"Sumar-C",  cx:148, cy:268, r:6,  color:"#C0004E", leader:"Noemí Santana", seats:3, photo:"",
        desc:{ fr:"Sumar Canaries · gauche · fédéraliste", es:"Sumar Canarias · izquierda · federalista" }},
    ],
    legend:{
      fr:[ {color:"#C8960C",label:"Régionalisme canarie (CC)"},{color:"#009A6E",label:"Régionalisme de gauche"},{color:"#E4003A",label:"Social-démocratie"},{color:"#0056A2",label:"Droite unioniste"} ],
      es:[ {color:"#C8960C",label:"Regionalismo canario (CC)"},{color:"#009A6E",label:"Regionalismo de izquierda"},{color:"#E4003A",label:"Socialdemocracia"},{color:"#0056A2",label:"Derecha unionista"} ],
    }
  },
  {
    id: "castilla_leon",
    name: { fr: "Castille-León", es: "Castilla y León" },
    subtitle: { fr: "Cortes de Castilla y León — partis principaux", es: "Cortes de Castilla y León — principales partidos" },
    nextElection: {
      fr: { date: "Élections passées : 15 mars 2026", note: "PP 33 · PSOE 30 · Vox 14 · UPL 3 · Soria ¡Ya! 1 · XAV 1" },
      es: { date: "Elecciones celebradas: 15 mar. 2026", note: "PP 33 · PSOE 30 · Vox 14 · UPL 3 · Soria ¡Ya! 1 · XAV 1" },
    },
        parties: [
      { name:"PP-CL",   cx:435, cy:152, r:12, color:"#0056A2", leader:"Alfonso Fernández Mañueco", seats:33, photo:"",
        desc:{ fr:"PP Castille-León · droite · hégémonique · unioniste fort", es:"PP Castilla y León · derecha · hegemónico · fuertemente unionista" }},
      { name:"PSOE-CL", cx:238, cy:188, r:10, color:"#E4003A", leader:"Carlos Martínez", seats:30, photo:"",
        desc:{ fr:"Socialistes · centre-gauche · unioniste", es:"Socialistas · centro-izquierda · unionista" }},
      { name:"Vox-CL",  cx:532, cy:108, r:8,  color:"#63BE21", leader:"Carlos Pollán", seats:14, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste · partenaire de coalition PP", es:"Vox · extrema derecha · ultracentralista · socio de gobierno del PP en CyL" }},
      { name:"UPL",      cx:220, cy:340, r:6, color:"#8B0033", leader:"Luis Mariano Santos", seats:3,
        photo:"",
        desc:{ fr:"Unión del Pueblo Leonés · régionalisme léonais · centre-gauche · défense de l'identité léonaise", es:"Unión del Pueblo Leonés · regionalismo leonés · centroizquierda · defensa de la identidad leonesa" }},
      { name:"Soria ¡Ya!", cx:295, cy:348, r:5, color:"#8B4A00", leader:"Luis Rey", seats:1, photo:"",
        desc:{ fr:"Mouvement régionaliste de Soria · anti-abandon rural · transversal", es:"Movimiento regionalista soriano · contra el despoblamiento rural · transversal" }},
      { name:"Por CL",  cx:148, cy:265, r:5,  color:"#C0004E", leader:"Luis Tudanca", seats:0, photo:"",
        desc:{ fr:"Sumar/IU Castille-León · gauche · fédéraliste", es:"Sumar/IU Castilla y León · izquierda · federalista" }},
    ],
    legend:{
      fr:[ {color:"#0056A2",label:"Droite (PP très dominant)"},{color:"#63BE21",label:"Extrême droite (Vox en coalition)"},{color:"#8B4A00",label:"Régionalisme rural (Soria ¡Ya!)"} ],
      es:[ {color:"#0056A2",label:"Derecha (PP muy dominante)"},{color:"#63BE21",label:"Extrema derecha (Vox en coalición)"},{color:"#8B4A00",label:"Regionalismo rural (Soria ¡Ya!)"} ],
    }
  },
  {
    id: "baleares",
    name: { fr: "Baléares", es: "Baleares" },
    subtitle: { fr: "Parlament de les Illes Balears — partis principaux", es: "Parlament de les Illes Balears — principales partidos" },
    nextElection: {
      fr: { date: "Mai 2027", note: "Cycle normal — 4e dimanche de mai" },
      es: { date: "Mayo 2027", note: "Ciclo normal — 4º domingo de mayo" },
    },
        parties: [
      { name:"PP-IB",   cx:432, cy:155, r:10, color:"#0056A2", leader:"Marga Prohens", seats:25, photo:"",
        desc:{ fr:"PP Baléares · droite · unioniste · au pouvoir depuis 2023", es:"PP Baleares · derecha · unionista · en el poder desde 2023" }},
      { name:"PSOE-IB", cx:238, cy:188, r:8,  color:"#E4003A", leader:"Francina Armengol", seats:14, photo:"",
        desc:{ fr:"Socialistes des Baléares · centre-gauche · unioniste fédéraliste", es:"Socialistas de Baleares · centro-izquierda · unionista federalista" }},
      { name:"Vox-IB",  cx:530, cy:108, r:6,  color:"#63BE21", leader:"Jorge Campos", seats:8, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste", es:"Vox · extrema derecha · ultracentralista" }},
      { name:"MÉS per Mallorca", cx:148, cy:352, r:8, color:"#009A44", leader:"Lluís Apesteguia", seats:5, photo:"",
        desc:{ fr:"Gauche verte · nationalisme des îles · fédéraliste / pro-autodétermination", es:"Izquierda verde · nacionalismo de las islas · federalista / pro-autodeterminación" }},
      { name:"El PI",   cx:380, cy:335, r:6,  color:"#DDAA00", leader:"Llorenç Córdoba", seats:4, photo:"",
        desc:{ fr:"El Pi · centre · régionalisme baléare modéré · autonomiste", es:"El Pi · centro · regionalismo balear moderado · autonomista" }},
    ],
    legend:{
      fr:[ {color:"#009A44",label:"Nationalisme des îles (MÉS)"},{color:"#DDAA00",label:"Régionalisme modéré (El Pi)"},{color:"#E4003A",label:"Social-démocratie"},{color:"#0056A2",label:"Droite unioniste"} ],
      es:[ {color:"#009A44",label:"Nacionalismo insular (MÉS)"},{color:"#DDAA00",label:"Regionalismo moderado (El Pi)"},{color:"#E4003A",label:"Socialdemocracia"},{color:"#0056A2",label:"Derecha unionista"} ],
    }
  },

  // ── 6 NOUVELLES CCAA ──────────────────────────────────────────────────────

  {
    id: "murcia",
    name: { fr: "Murcie", es: "Murcia" },
    subtitle: { fr: "Asamblea Regional de Murcia — partis principaux", es: "Asamblea Regional de Murcia — principales partidos" },
    nextElection: {
      fr: { date: "Mai 2027", note: "Cycle normal — 4e dimanche de mai" },
      es: { date: "Mayo 2027", note: "Ciclo normal — 4º domingo de mayo" },
    },
        parties: [
      { name:"PP-MU",   cx:440, cy:148, r:12, color:"#0056A2", leader:"Fernando López Miras", seats:22, photo:"",
        desc:{ fr:"PP Murcie · droite · hégémonique depuis 1995 · unioniste fort", es:"PP Murcia · derecha · hegemónico desde 1995 · fuertemente unionista" }},
      { name:"PSOE-MU", cx:240, cy:192, r:9,  color:"#E4003A", leader:"José Vélez", seats:12, photo:"",
        desc:{ fr:"Socialistes de Murcie · centre-gauche · unioniste", es:"Socialistas murcianos · centro-izquierda · unionista" }},
      { name:"Vox-MU",  cx:532, cy:108, r:8,  color:"#63BE21", leader:"José Ángel Antelo", seats:10, photo:"",
        desc:{ fr:"Vox Murcie · extrême droite · ultra-centraliste", es:"Vox Murcia · extrema derecha · ultracentralista" }},
      { name:"Cs-MU",   cx:385, cy:132, r:6,  color:"#FA5000", leader:"Ana Martínez Vidal", seats:1, photo:"",
        desc:{ fr:"Ciudadanos Murcie · centre libéral · unioniste (quasi-disparu)", es:"Ciudadanos Murcia · centro liberal · unionista (casi desaparecido)" }},
    ],
    legend:{
      fr:[ {color:"#0056A2",label:"Droite (PP très dominant)"},{color:"#E4003A",label:"Social-démocratie"},{color:"#63BE21",label:"Extrême droite"} ],
      es:[ {color:"#0056A2",label:"Derecha (PP muy dominante)"},{color:"#E4003A",label:"Socialdemocracia"},{color:"#63BE21",label:"Extrema derecha"} ],
    }
  },
  {
    id: "extremadura",
    name: { fr: "Estrémadure", es: "Extremadura" },
    subtitle: { fr: "Asamblea de Extremadura — partis principaux", es: "Asamblea de Extremadura — principales partidos" },
    nextElection: {
      fr: { date: "Mai 2029 (cycle normal)", note: "Élections anticipées en déc. 2025 — prochaines en 2029" },
      es: { date: "Mayo 2029 (ciclo normal)", note: "Elecciones anticipadas en dic. 2025 — próximas en 2029" },
    },
        parties: [
      { name:"PP-EX",   cx:432, cy:152, r:11, color:"#0056A2", leader:"María Guardiola", seats:28, photo:"",
        desc:{ fr:"PP Estrémadure · droite · au pouvoir depuis 2023 · unioniste fort", es:"PP Extremadura · derecha · en el poder desde 2023 · fuertemente unionista" }},
      { name:"PSOE-EX", cx:238, cy:190, r:10, color:"#E4003A", leader:"Miguel Ángel Gallardo", seats:22, photo:"",
        desc:{ fr:"Socialistes d'Estrémadure · centre-gauche · unioniste · longtemps hégémonique", es:"Socialistas extremeños · centro-izquierda · unionista · largo tiempo hegemónicos" }},
      { name:"Vox-EX",  cx:530, cy:110, r:7,  color:"#63BE21", leader:"Ángel Pelayo Gordillo", seats:7, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste", es:"Vox · extrema derecha · ultracentralista" }},
      { name:"Unidas-EX",cx:148,cy:265, r:6,  color:"#C0004E", leader:"Irene de Miguel", seats:2, photo:"",
        desc:{ fr:"Unidas Podemos / Sumar Estrémadure · gauche · fédéraliste", es:"Unidas Podemos / Sumar Extremadura · izquierda · federalista" }},
    ],
    legend:{
      fr:[ {color:"#0056A2",label:"Droite (PP)"},{color:"#E4003A",label:"Social-démocratie (PSOE fort)"},{color:"#63BE21",label:"Extrême droite"} ],
      es:[ {color:"#0056A2",label:"Derecha (PP)"},{color:"#E4003A",label:"Socialdemocracia (PSOE fuerte)"},{color:"#63BE21",label:"Extrema derecha"} ],
    }
  },
  {
    id: "asturias",
    name: { fr: "Asturies", es: "Asturias" },
    subtitle: { fr: "Junta General del Principado de Asturias — partis principaux", es: "Junta General del Principado de Asturias — principales partidos" },
    nextElection: {
      fr: { date: "Mai 2027", note: "Cycle normal — 4e dimanche de mai" },
      es: { date: "Mayo 2027", note: "Ciclo normal — 4º domingo de mayo" },
    },
        parties: [
      { name:"PSOE-AS", cx:235, cy:188, r:10, color:"#E4003A", leader:"Adrián Barbón", seats:19, photo:"",
        desc:{ fr:"Socialistes des Asturies · centre-gauche · unioniste · gouverne avec Podemos", es:"Socialistas asturianos · centro-izquierda · unionista · gobierna con Podemos" }},
      { name:"PP-AS",   cx:432, cy:155, r:9,  color:"#0056A2", leader:"Diego Canga", seats:11, photo:"",
        desc:{ fr:"PP Asturies · droite · unioniste", es:"PP Asturias · derecha · unionista" }},
      { name:"Vox-AS",  cx:530, cy:108, r:6,  color:"#63BE21", leader:"Ignacio Blanco", seats:4, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste", es:"Vox · extrema derecha · ultracentralista" }},
      { name:"Foro",    cx:400, cy:200, r:7,  color:"#8B0000", leader:"Carmen Moriyón", seats:7, photo:"",
        desc:{ fr:"Foro Asturias · droite · régionalisme asturien modéré · unioniste", es:"Foro Asturias · derecha · regionalismo asturiano moderado · unionista" }},
      { name:"Podemos-AS",cx:128,cy:185,r:7,  color:"#6B2B9A", leader:"Covadonga Tomé", seats:9, photo:"",
        desc:{ fr:"Podemos Asturies · gauche radicale · fédéraliste · partenaire du PSOE au gouvernement", es:"Podemos Asturias · izquierda radical · federalista · socio del PSOE en el gobierno" }},
    ],
    legend:{
      fr:[ {color:"#E4003A",label:"Social-démocratie (PSOE dominant)"},{color:"#8B0000",label:"Régionalisme asturien (Foro)"},{color:"#0056A2",label:"Droite unioniste"} ],
      es:[ {color:"#E4003A",label:"Socialdemocracia (PSOE dominante)"},{color:"#8B0000",label:"Regionalismo asturiano (Foro)"},{color:"#0056A2",label:"Derecha unionista"} ],
    }
  },
  {
    id: "cantabria",
    name: { fr: "Cantabrie", es: "Cantabria" },
    subtitle: { fr: "Parlamento de Cantabria — partis principaux", es: "Parlamento de Cantabria — principales partidos" },
    nextElection: {
      fr: { date: "Mai 2027", note: "Cycle normal — 4e dimanche de mai" },
      es: { date: "Mayo 2027", note: "Ciclo normal — 4º domingo de mayo" },
    },
        parties: [
      { name:"PP-CA",   cx:430, cy:152, r:10, color:"#0056A2", leader:"María José Sáenz de Buruaga", seats:17, photo:"",
        desc:{ fr:"PP Cantabrie · droite · unioniste · au pouvoir depuis 2023", es:"PP Cantabria · derecha · unionista · en el poder desde 2023" }},
      { name:"PRC",     cx:350, cy:310, r:9,  color:"#009A6E", leader:"Miguel Ángel Revilla", seats:8, photo:"",
        desc:{ fr:"Partido Regionalista de Cantabria · centre · régionalisme cantabre · longtemps au gouvernement (coalition PSOE+PRC)", es:"PRC · centro · regionalismo cántabro · largo tiempo en el gobierno (coalición PSOE+PRC)" }},
      { name:"PSOE-CA", cx:235, cy:188, r:8,  color:"#E4003A", leader:"Pablo Zuloaga", seats:8, photo:"",
        desc:{ fr:"Socialistes de Cantabrie · centre-gauche · unioniste", es:"Socialistas cántabros · centro-izquierda · unionista" }},
      { name:"Vox-CA",  cx:530, cy:110, r:6,  color:"#63BE21", leader:"Cristina Peredo", seats:5, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste", es:"Vox · extrema derecha · ultracentralista" }},
    ],
    legend:{
      fr:[ {color:"#009A6E",label:"Régionalisme cantabre (PRC)"},{color:"#0056A2",label:"Droite unioniste"},{color:"#E4003A",label:"Social-démocratie"} ],
      es:[ {color:"#009A6E",label:"Regionalismo cántabro (PRC)"},{color:"#0056A2",label:"Derecha unionista"},{color:"#E4003A",label:"Socialdemocracia"} ],
    }
  },
  {
    id: "la_rioja",
    name: { fr: "La Rioja", es: "La Rioja" },
    subtitle: { fr: "Parlamento de La Rioja — partis principaux", es: "Parlamento de La Rioja — principales partidos" },
    nextElection: {
      fr: { date: "Mai 2027", note: "Cycle normal — 4e dimanche de mai" },
      es: { date: "Mayo 2027", note: "Ciclo normal — 4º domingo de mayo" },
    },
        parties: [
      { name:"PP-LR",   cx:435, cy:148, r:11, color:"#0056A2", leader:"González Lobato", seats:17, photo:"",
        desc:{ fr:"PP La Rioja · droite · hégémonique · unioniste fort · au pouvoir depuis 2023", es:"PP La Rioja · derecha · hegemónico · fuertemente unionista · en el poder desde 2023" }},
      { name:"PSOE-LR", cx:238, cy:190, r:8,  color:"#E4003A", leader:"Francisco Ocón", seats:9, photo:"",
        desc:{ fr:"Socialistes de La Rioja · centre-gauche · unioniste", es:"Socialistas riojanos · centro-izquierda · unionista" }},
      { name:"Vox-LR",  cx:530, cy:108, r:6,  color:"#63BE21", leader:"Juan Ramón Gil", seats:6, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste", es:"Vox · extrema derecha · ultracentralista" }},
    ],
    legend:{
      fr:[ {color:"#0056A2",label:"Droite (PP dominant)"},{color:"#E4003A",label:"Social-démocratie"},{color:"#63BE21",label:"Extrême droite"} ],
      es:[ {color:"#0056A2",label:"Derecha (PP dominante)"},{color:"#E4003A",label:"Socialdemocracia"},{color:"#63BE21",label:"Extrema derecha"} ],
    }
  },
  {
    id: "castilla_la_mancha",
    name: { fr: "Castille-La Manche", es: "Castilla-La Mancha" },
    subtitle: { fr: "Cortes de Castilla-La Mancha — partis principaux", es: "Cortes de Castilla-La Mancha — principales partidos" },
    nextElection: {
      fr: { date: "Mai 2027", note: "Cycle normal — 4e dimanche de mai" },
      es: { date: "Mayo 2027", note: "Ciclo normal — 4º domingo de mayo" },
    },
        parties: [
      { name:"PSOE-CLM",cx:240, cy:188, r:11, color:"#E4003A", leader:"Emiliano García-Page", seats:19, photo:"",
        desc:{ fr:"Socialistes de Castille-La Manche · centre-gauche · unioniste · hégémonique, García-Page figure critique du gouvernement Sánchez", es:"Socialistas CLM · centro-izquierda · unionista · hegemónico, García-Page crítico del gobierno Sánchez" }},
      { name:"PP-CLM",  cx:432, cy:155, r:10, color:"#0056A2", leader:"Paco Núñez", seats:15, photo:"",
        desc:{ fr:"PP Castille-La Manche · droite · unioniste", es:"PP Castilla-La Mancha · derecha · unionista" }},
      { name:"Vox-CLM", cx:530, cy:108, r:7,  color:"#63BE21", leader:"Pedro Jesús Rollán", seats:3, photo:"",
        desc:{ fr:"Vox · extrême droite · ultra-centraliste", es:"Vox · extrema derecha · ultracentralista" }},
    ],
    legend:{
      fr:[ {color:"#E4003A",label:"Social-démocratie (PSOE dominant)"},{color:"#0056A2",label:"Droite unioniste"},{color:"#63BE21",label:"Extrême droite"} ],
      es:[ {color:"#E4003A",label:"Socialdemocracia (PSOE dominante)"},{color:"#0056A2",label:"Derecha unionista"},{color:"#63BE21",label:"Extrema derecha"} ],
    }
  },
];
window.CCAA = CCAA;
