import json

updates = {
    "en": {
        "8": {
            "title": "Tub TYVEK Inspection",
            "studyHeader": "AI-Based Machine Vision System for Tub TYVEK Inspection",
            "description": (
                "Project Overview:\n"
                "An AI-based machine vision system was developed to inspect the placement of Inner and Outer TYVEK sheets in tubs during production. The system checks that each TYVEK sheet is correctly placed, fully seated, and meets client acceptance standards before the tub moves to the next stage.\n\n"
                "System Requirements:\n"
                "Inspect whether the Inner TYVEK is properly centered and fully placed within the defined square area inside the tub.\n"
                "Inspect whether the Outer TYVEK fully covers the outer tub surface with no visible gap on any side.\n"
                "Detect placement defects such as misalignment, folds, wrinkles, or lifted edges.\n"
                "Provide real-time OK/NOK output for immediate feedback on the production line.\n\n"
                "Key Challenges:\n"
                "Subtle defect detection – even a gap as small as 1 mm on the outer tub must be reliably detected and flagged as NOK.\n"
                "Multiple defect types – the system must correctly identify misalignment, folded corners, wrinkles, and lifted edges across both Inner and Outer TYVEK.\n"
                "Real-time inspection – the check must be completed within the production cycle time without slowing the line.\n\n"
                "CVIT AI Solution:\n"
                "The AI vision system inspects the Inner TYVEK to confirm it is correctly centered and fully positioned within the defined square scope area, with all four sides within the allowed boundary.\n"
                "The system inspects the Outer TYVEK to confirm it fully covers the tub surface from edge to edge, flagging any visible tub area as NOK.\n"
                "Defects such as shifted placement, folded corners, wrinkles, and lifted edges are detected and reported in real time.\n"
                "Automated OK/NOK output is provided instantly, allowing the production line to respond to any defective placement without delay."
            )
        },
        "11": {
            "title": "Ladle Hook Inspection",
            "studyHeader": "AI-Based Machine Vision System for Ladle Hook Safety Inspection",
            "description": (
                "Project Overview:\n"
                "An AI-based machine vision safety system was developed for steel plant operations to verify whether the ladle is properly fitted into the crane hook before lifting molten material. The system helps crane operators avoid accidents caused by incorrect ladle-to-hook connection, particularly in conditions where visibility is limited.\n\n"
                "System Requirements:\n"
                "Capture images at the ladle loading point to check the connection between the ladle and the crane hook.\n"
                "Determine whether the hook connection is correct and safe before the lift begins.\n"
                "Provide an immediate visual signal via a tower lamp to guide the crane operator.\n"
                "Operate reliably in the harsh conditions of a steel plant including high heat, dust, and low lighting.\n\n"
                "Key Challenges:\n"
                "Harsh environment – steel plant conditions involve high heat, dust, and steam that can affect camera view and image clarity.\n"
                "Low visibility – crane operators often work in areas where they cannot clearly see the hook connection, making manual checks unreliable.\n"
                "Short inspection window – the check must be completed quickly before the lift begins, leaving very little time to confirm the connection.\n\n"
                "CVIT AI Solution:\n"
                "Machine vision cameras with protective cooling and cleaning enclosures are installed at the ladle loading point to capture clear images even in harsh steel plant conditions.\n"
                "The AI system checks each image to confirm whether the ladle is correctly and securely connected to the crane hook.\n"
                "The result is immediately shown on a tower lamp – Green Light means the ladle is correctly hooked and the lift can proceed, Red Light means the connection is not correct and the operator must fix it before lifting.\n"
                "The system also provides real-time display, inspection history, and automatic report generation for safety records.\n"
                "Automated monitoring removes the need for manual visual checks, improving safety and preventing ladle-dropping accidents."
            )
        }
    },
    "en_IN": {
        "8": {
            "title": "Tub TYVEK Inspection",
            "studyHeader": "AI-Based Machine Vision System for Tub TYVEK Inspection",
            "description": (
                "Project Overview:\n"
                "An AI-based machine vision system was developed to inspect the placement of Inner and Outer TYVEK sheets in tubs during production. The system checks that each TYVEK sheet is correctly placed, fully seated, and meets client acceptance standards before the tub moves to the next stage.\n\n"
                "System Requirements:\n"
                "Inspect whether the Inner TYVEK is properly centered and fully placed within the defined square area inside the tub.\n"
                "Inspect whether the Outer TYVEK fully covers the outer tub surface with no visible gap on any side.\n"
                "Detect placement defects such as misalignment, folds, wrinkles, or lifted edges.\n"
                "Provide real-time OK/NOK output for immediate feedback on the production line.\n\n"
                "Key Challenges:\n"
                "Subtle defect detection – even a gap as small as 1 mm on the outer tub must be reliably detected and flagged as NOK.\n"
                "Multiple defect types – the system must correctly identify misalignment, folded corners, wrinkles, and lifted edges across both Inner and Outer TYVEK.\n"
                "Real-time inspection – the check must be completed within the production cycle time without slowing the line.\n\n"
                "CVIT AI Solution:\n"
                "The AI vision system inspects the Inner TYVEK to confirm it is correctly centered and fully positioned within the defined square scope area, with all four sides within the allowed boundary.\n"
                "The system inspects the Outer TYVEK to confirm it fully covers the tub surface from edge to edge, flagging any visible tub area as NOK.\n"
                "Defects such as shifted placement, folded corners, wrinkles, and lifted edges are detected and reported in real time.\n"
                "Automated OK/NOK output is provided instantly, allowing the production line to respond to any defective placement without delay."
            )
        },
        "11": {
            "title": "Ladle Hook Inspection",
            "studyHeader": "AI-Based Machine Vision System for Ladle Hook Safety Inspection",
            "description": (
                "Project Overview:\n"
                "An AI-based machine vision safety system was developed for steel plant operations to verify whether the ladle is properly fitted into the crane hook before lifting molten material. The system helps crane operators avoid accidents caused by incorrect ladle-to-hook connection, particularly in conditions where visibility is limited.\n\n"
                "System Requirements:\n"
                "Capture images at the ladle loading point to check the connection between the ladle and the crane hook.\n"
                "Determine whether the hook connection is correct and safe before the lift begins.\n"
                "Provide an immediate visual signal via a tower lamp to guide the crane operator.\n"
                "Operate reliably in the harsh conditions of a steel plant including high heat, dust, and low lighting.\n\n"
                "Key Challenges:\n"
                "Harsh environment – steel plant conditions involve high heat, dust, and steam that can affect camera view and image clarity.\n"
                "Low visibility – crane operators often work in areas where they cannot clearly see the hook connection, making manual checks unreliable.\n"
                "Short inspection window – the check must be completed quickly before the lift begins, leaving very little time to confirm the connection.\n\n"
                "CVIT AI Solution:\n"
                "Machine vision cameras with protective cooling and cleaning enclosures are installed at the ladle loading point to capture clear images even in harsh steel plant conditions.\n"
                "The AI system checks each image to confirm whether the ladle is correctly and securely connected to the crane hook.\n"
                "The result is immediately shown on a tower lamp – Green Light means the ladle is correctly hooked and the lift can proceed, Red Light means the connection is not correct and the operator must fix it before lifting.\n"
                "The system also provides real-time display, inspection history, and automatic report generation for safety records.\n"
                "Automated monitoring removes the need for manual visual checks, improving safety and preventing ladle-dropping accidents."
            )
        }
    },
    "de": {
        "8": {
            "title": "Behälter-TYVEK-Inspektion",
            "studyHeader": "KI-basiertes Maschinensehsystem für Behälter-TYVEK-Inspektion",
            "description": (
                "Projektübersicht:\n"
                "Ein KI-basiertes Maschinensehsystem wurde entwickelt, um die Platzierung von inneren und äußeren TYVEK-Folien in Behältern während der Produktion zu prüfen. Das System kontrolliert, ob jede TYVEK-Folie korrekt platziert, vollständig aufgelegt ist und den Abnahmekriterien des Kunden entspricht, bevor der Behälter zur nächsten Station weitergegeben wird.\n\n"
                "Systemanforderungen:\n"
                "Prüfen, ob die innere TYVEK-Folie korrekt zentriert und vollständig im definierten Quadratbereich innerhalb des Behälters platziert ist.\n"
                "Prüfen, ob die äußere TYVEK-Folie die gesamte Außenfläche des Behälters ohne sichtbare Lücke bedeckt.\n"
                "Platzierungsfehler wie Versatz, Falten, Knicke oder angehobene Kanten erkennen.\n"
                "Echtzeit-OK/NOK-Ausgabe für sofortiges Feedback an der Produktionslinie liefern.\n\n"
                "Herausforderungen:\n"
                "Erkennung kleiner Fehler – selbst eine Lücke von nur 1 mm an der Außenseite des Behälters muss zuverlässig erkannt und als NOK markiert werden.\n"
                "Verschiedene Fehlertypen – das System muss Versatz, gefaltete Ecken, Knicke und angehobene Kanten bei beiden TYVEK-Folien korrekt erkennen.\n"
                "Echtzeit-Inspektion – die Prüfung muss innerhalb der Produktionszykluszeit abgeschlossen werden, ohne die Linie zu verlangsamen.\n\n"
                "CVIT KI-Lösung:\n"
                "Das KI-Bildverarbeitungssystem prüft die innere TYVEK-Folie, um sicherzustellen, dass sie korrekt zentriert und vollständig im definierten Quadrat-Scopebereich positioniert ist, mit allen vier Seiten innerhalb der zulässigen Grenze.\n"
                "Das System prüft die äußere TYVEK-Folie, um sicherzustellen, dass sie die Behälteroberfläche von Kante zu Kante vollständig bedeckt, und markiert jeden sichtbaren Behälterbereich als NOK.\n"
                "Fehler wie verschobene Platzierung, gefaltete Ecken, Knicke und angehobene Kanten werden in Echtzeit erkannt und gemeldet.\n"
                "Eine automatische OK/NOK-Ausgabe wird sofort bereitgestellt, sodass die Produktionslinie unverzüglich auf fehlerhafte Platzierungen reagieren kann."
            )
        },
        "11": {
            "title": "Gießpfannen-Haken-Inspektion",
            "studyHeader": "KI-basiertes Maschinensehsystem für Gießpfannen-Haken-Sicherheitsinspektion",
            "description": (
                "Projektübersicht:\n"
                "Ein KI-basiertes Maschinensehen-Sicherheitssystem wurde für Stahlwerksbetriebe entwickelt, um zu überprüfen, ob die Gießpfanne korrekt im Kranhaken sitzt, bevor flüssiges Material gehoben wird. Das System hilft Kranfahrern, Unfälle durch fehlerhafte Gießpfannen-Haken-Verbindung zu vermeiden, insbesondere bei eingeschränkter Sicht.\n\n"
                "Systemanforderungen:\n"
                "Bilder am Gießpfannen-Ladepunkt aufnehmen, um die Verbindung zwischen Gießpfanne und Kranhaken zu prüfen.\n"
                "Feststellen, ob die Hakenverbindung korrekt und sicher ist, bevor der Hebevorgang beginnt.\n"
                "Sofortiges visuelles Signal über eine Turmleuchte zur Führung des Kranfahrers ausgeben.\n"
                "Unter den rauen Bedingungen eines Stahlwerks zuverlässig betrieben werden, einschließlich hoher Hitze, Staub und schlechter Beleuchtung.\n\n"
                "Herausforderungen:\n"
                "Raue Umgebung – Stahlwerksbedingungen umfassen hohe Hitze, Staub und Dampf, die die Kamerasicht und Bildqualität beeinträchtigen können.\n"
                "Schlechte Sichtbarkeit – Kranfahrer arbeiten oft in Bereichen, in denen sie die Hakenverbindung nicht klar sehen können, was manuelle Prüfungen unzuverlässig macht.\n"
                "Kurzes Inspektionsfenster – die Prüfung muss schnell vor dem Hebevorgang abgeschlossen werden, was sehr wenig Zeit zur Bestätigung der Verbindung lässt.\n\n"
                "CVIT KI-Lösung:\n"
                "Maschinensehkameras mit Schutzgehäusen mit Kühl- und Reinigungsfunktion werden am Gießpfannen-Ladepunkt installiert, um auch unter rauen Bedingungen klare Bilder zu erfassen.\n"
                "Das KI-System prüft jedes Bild, um zu bestätigen, ob die Gießpfanne korrekt und sicher mit dem Kranhaken verbunden ist.\n"
                "Das Ergebnis wird sofort auf einer Turmleuchte angezeigt – Grünes Licht bedeutet, dass die Gießpfanne korrekt eingehakt ist und der Hebevorgang durchgeführt werden kann, Rotes Licht bedeutet, dass die Verbindung nicht korrekt ist und der Bediener sie vor dem Heben korrigieren muss.\n"
                "Das System bietet außerdem Echtzeit-Anzeige, Inspektionsverlauf und automatische Berichtserstellung für Sicherheitsnachweise.\n"
                "Die automatisierte Überwachung macht manuelle Sichtprüfungen überflüssig und verbessert die Sicherheit sowie verhindert Gießpfannen-Unfälle."
            )
        }
    },
    "es": {
        "8": {
            "title": "Inspección de TYVEK en Cuba",
            "studyHeader": "Sistema de Visión por Computadora Basado en IA para Inspección de TYVEK en Cuba",
            "description": (
                "Resumen del Proyecto:\n"
                "Se desarrolló un sistema de visión por computadora basado en IA para inspeccionar la colocación de láminas de TYVEK Interior y Exterior en cubas durante la producción. El sistema verifica que cada lámina de TYVEK esté correctamente colocada, completamente asentada y cumpla los estándares de aceptación del cliente antes de que la cuba avance a la siguiente etapa.\n\n"
                "Requisitos del Sistema:\n"
                "Inspeccionar si el TYVEK Interior está correctamente centrado y completamente colocado dentro del área cuadrada definida en el interior de la cuba.\n"
                "Inspeccionar si el TYVEK Exterior cubre completamente la superficie exterior de la cuba sin ninguna brecha visible en ningún lado.\n"
                "Detectar defectos de colocación como desalineación, pliegues, arrugas o bordes levantados.\n"
                "Proporcionar salida OK/NOK en tiempo real para retroalimentación inmediata en la línea de producción.\n\n"
                "Desafíos Clave:\n"
                "Detección de defectos sutiles – incluso una brecha tan pequeña como 1 mm en la cuba exterior debe detectarse de forma confiable y marcarse como NOK.\n"
                "Múltiples tipos de defectos – el sistema debe identificar correctamente desalineación, esquinas dobladas, arrugas y bordes levantados tanto en el TYVEK Interior como en el Exterior.\n"
                "Inspección en tiempo real – la verificación debe completarse dentro del tiempo de ciclo de producción sin ralentizar la línea.\n\n"
                "Solución CVIT:\n"
                "El sistema de visión IA inspecciona el TYVEK Interior para confirmar que está correctamente centrado y completamente posicionado dentro del área de alcance cuadrado definida, con los cuatro lados dentro del límite permitido.\n"
                "El sistema inspecciona el TYVEK Exterior para confirmar que cubre completamente la superficie de la cuba de borde a borde, marcando cualquier área visible de la cuba como NOK.\n"
                "Defectos como colocación desplazada, esquinas dobladas, arrugas y bordes levantados se detectan y reportan en tiempo real.\n"
                "La salida OK/NOK automatizada se proporciona de forma instantánea, permitiendo que la línea de producción responda a cualquier colocación defectuosa sin demora."
            )
        },
        "11": {
            "title": "Inspección de Gancho de Cuchara",
            "studyHeader": "Sistema de Visión por Computadora Basado en IA para Inspección de Seguridad de Gancho de Cuchara",
            "description": (
                "Resumen del Proyecto:\n"
                "Se desarrolló un sistema de seguridad de visión por computadora basado en IA para operaciones de plantas siderúrgicas, con el fin de verificar si la cuchara está correctamente encajada en el gancho de la grúa antes de levantar material fundido. El sistema ayuda a los operadores de grúas a evitar accidentes causados por conexiones incorrectas entre la cuchara y el gancho, especialmente en condiciones de baja visibilidad.\n\n"
                "Requisitos del Sistema:\n"
                "Capturar imágenes en el punto de carga de la cuchara para verificar la conexión entre la cuchara y el gancho de la grúa.\n"
                "Determinar si la conexión del gancho es correcta y segura antes de que comience el levantamiento.\n"
                "Proporcionar una señal visual inmediata a través de una lámpara de torre para guiar al operador de la grúa.\n"
                "Operar de manera confiable en las condiciones adversas de una planta siderúrgica, incluyendo altas temperaturas, polvo y baja iluminación.\n\n"
                "Desafíos Clave:\n"
                "Entorno adverso – las condiciones de la planta siderúrgica incluyen altas temperaturas, polvo y vapor que pueden afectar la vista de la cámara y la claridad de las imágenes.\n"
                "Baja visibilidad – los operadores de grúas trabajan a menudo en zonas donde no pueden ver claramente la conexión del gancho, lo que hace poco confiable la inspección manual.\n"
                "Ventana de inspección corta – la verificación debe completarse rápidamente antes de que comience el levantamiento, dejando muy poco tiempo para confirmar la conexión.\n\n"
                "Solución CVIT:\n"
                "Se instalan cámaras de visión por computadora con carcasas protectoras de enfriamiento y limpieza en el punto de carga de la cuchara para capturar imágenes claras incluso en condiciones adversas.\n"
                "El sistema IA verifica cada imagen para confirmar si la cuchara está correcta y firmemente conectada al gancho de la grúa.\n"
                "El resultado se muestra de inmediato en una lámpara de torre – Luz Verde significa que la cuchara está correctamente enganchada y el levantamiento puede proceder, Luz Roja significa que la conexión no es correcta y el operador debe corregirla antes de levantar.\n"
                "El sistema también proporciona visualización en tiempo real, historial de inspecciones y generación automática de informes para registros de seguridad.\n"
                "El monitoreo automatizado elimina la necesidad de verificaciones visuales manuales, mejorando la seguridad y previniendo accidentes de caída de cucharas."
            )
        }
    },
    "fr": {
        "8": {
            "title": "Inspection TYVEK de la Cuve",
            "studyHeader": "Système de Vision par Ordinateur Basé sur l'IA pour l'Inspection TYVEK de la Cuve",
            "description": (
                "Aperçu du Projet:\n"
                "Un système de vision par ordinateur basé sur l'IA a été développé pour inspecter le placement des feuilles TYVEK intérieure et extérieure dans les cuves pendant la production. Le système vérifie que chaque feuille TYVEK est correctement placée, bien assise et conforme aux critères d'acceptation du client avant que la cuve ne passe à l'étape suivante.\n\n"
                "Exigences du Système:\n"
                "Inspecter si le TYVEK intérieur est correctement centré et entièrement placé dans la zone carrée définie à l'intérieur de la cuve.\n"
                "Inspecter si le TYVEK extérieur couvre entièrement la surface extérieure de la cuve sans aucune ouverture visible d'aucun côté.\n"
                "Détecter les défauts de placement tels que le désalignement, les plis, les froissements ou les bords soulevés.\n"
                "Fournir une sortie OK/NOK en temps réel pour un retour immédiat sur la ligne de production.\n\n"
                "Défis Clés:\n"
                "Détection de défauts subtils – même un espace aussi petit que 1 mm sur la cuve extérieure doit être détecté de manière fiable et signalé comme NOK.\n"
                "Plusieurs types de défauts – le système doit identifier correctement le désalignement, les coins pliés, les froissements et les bords soulevés sur les deux TYVEK intérieur et extérieur.\n"
                "Inspection en temps réel – la vérification doit être effectuée dans le temps de cycle de production sans ralentir la ligne.\n\n"
                "Solution CVIT:\n"
                "Le système de vision IA inspecte le TYVEK intérieur pour confirmer qu'il est correctement centré et entièrement positionné dans la zone de portée carrée définie, avec les quatre côtés dans la limite autorisée.\n"
                "Le système inspecte le TYVEK extérieur pour confirmer qu'il couvre entièrement la surface de la cuve de bord en bord, signalant toute zone de cuve visible comme NOK.\n"
                "Les défauts tels que le placement décalé, les coins pliés, les froissements et les bords soulevés sont détectés et signalés en temps réel.\n"
                "La sortie OK/NOK automatisée est fournie instantanément, permettant à la ligne de production de répondre à tout placement défectueux sans délai."
            )
        },
        "11": {
            "title": "Inspection de Crochet de Louche",
            "studyHeader": "Système de Vision par Ordinateur Basé sur l'IA pour l'Inspection de Sécurité du Crochet de Louche",
            "description": (
                "Aperçu du Projet:\n"
                "Un système de sécurité de vision par ordinateur basé sur l'IA a été développé pour les opérations d'aciérie afin de vérifier si la louche est correctement encadrée dans le crochet de grue avant de soulever du matériau fondu. Le système aide les opérateurs de grue à éviter les accidents causés par des connexions incorrectes entre la louche et le crochet, notamment dans des conditions de faible visibilité.\n\n"
                "Exigences du Système:\n"
                "Capturer des images au point de chargement de la louche pour vérifier la connexion entre la louche et le crochet de grue.\n"
                "Déterminer si la connexion du crochet est correcte et sûre avant le début du levage.\n"
                "Fournir un signal visuel immédiat via une lampe de signalisation pour guider l'opérateur de grue.\n"
                "Fonctionner de manière fiable dans les conditions difficiles d'une aciérie, notamment les hautes températures, la poussière et le faible éclairage.\n\n"
                "Défis Clés:\n"
                "Environnement difficile – les conditions d'aciérie incluent des hautes températures, de la poussière et de la vapeur qui peuvent affecter la vue de la caméra et la clarté des images.\n"
                "Faible visibilité – les opérateurs de grue travaillent souvent dans des zones où ils ne peuvent pas voir clairement la connexion du crochet, rendant les vérifications manuelles peu fiables.\n"
                "Fenêtre d'inspection courte – la vérification doit être effectuée rapidement avant le début du levage, laissant très peu de temps pour confirmer la connexion.\n\n"
                "Solution CVIT:\n"
                "Des caméras de vision par ordinateur avec des boîtiers protecteurs de refroidissement et de nettoyage sont installées au point de chargement de la louche pour capturer des images nettes même dans des conditions difficiles.\n"
                "Le système IA vérifie chaque image pour confirmer si la louche est correctement et solidement connectée au crochet de grue.\n"
                "Le résultat est immédiatement affiché sur une lampe de signalisation – Lumière Verte signifie que la louche est correctement accrochée et que le levage peut se poursuivre, Lumière Rouge signifie que la connexion n'est pas correcte et que l'opérateur doit la corriger avant de lever.\n"
                "Le système fournit également un affichage en temps réel, un historique des inspections et une génération automatique de rapports pour les dossiers de sécurité.\n"
                "La surveillance automatisée supprime le besoin de vérifications visuelles manuelles, améliorant la sécurité et prévenant les accidents de chute de louche."
            )
        }
    },
    "hi": {
        "8": {
            "title": "टब TYVEK निरीक्षण",
            "studyHeader": "टब TYVEK निरीक्षण के लिए AI-आधारित मशीन विजन सिस्टम",
            "description": (
                "परियोजना अवलोकन:\n"
                "उत्पादन के दौरान टब में इनर और आउटर TYVEK शीट की प्लेसमेंट जांचने के लिए एक AI-आधारित मशीन विजन सिस्टम विकसित किया गया। यह सिस्टम सुनिश्चित करता है कि प्रत्येक TYVEK शीट सही तरीके से रखी गई हो, पूरी तरह से बैठी हो और टब के अगले चरण में जाने से पहले ग्राहक के स्वीकृति मानकों को पूरा करती हो।\n\n"
                "सिस्टम आवश्यकताएँ:\n"
                "यह जांचना कि इनर TYVEK टब के अंदर निर्धारित चौकोर क्षेत्र में सही तरह से केंद्रित और पूरी तरह रखी है।\n"
                "यह जांचना कि आउटर TYVEK बिना किसी दृश्य अंतर के टब की बाहरी सतह को पूरी तरह ढकती है।\n"
                "गलत संरेखण, मोड़, झुर्रियां या उठे हुए किनारे जैसे प्लेसमेंट दोषों का पता लगाना।\n"
                "उत्पादन लाइन पर तुरंत फीडबैक के लिए रीयल-टाइम OK/NOK आउटपुट प्रदान करना।\n\n"
                "मुख्य चुनौतियाँ:\n"
                "सूक्ष्म दोष पहचान – बाहरी टब पर मात्र 1 मिमी की दरार को भी विश्वसनीय रूप से पहचाना जाना चाहिए और NOK के रूप में चिह्नित किया जाना चाहिए।\n"
                "अनेक दोष प्रकार – सिस्टम को इनर और आउटर दोनों TYVEK में गलत संरेखण, मुड़े हुए कोने, झुर्रियां और उठे हुए किनारे सही तरह से पहचानने होंगे।\n"
                "रीयल-टाइम निरीक्षण – जांच लाइन को धीमा किए बिना उत्पादन चक्र समय के भीतर पूरी होनी चाहिए।\n\n"
                "CVIT AI समाधान:\n"
                "AI विजन सिस्टम इनर TYVEK की जांच करता है कि वह सही तरह से केंद्रित है और निर्धारित चौकोर स्कोप क्षेत्र में पूरी तरह स्थित है, सभी चारों तरफ अनुमत सीमा के भीतर हैं।\n"
                "सिस्टम आउटर TYVEK की जांच करता है कि वह टब की सतह को किनारे से किनारे तक पूरी तरह ढकती है और किसी भी दृश्य टब क्षेत्र को NOK के रूप में चिह्नित करता है।\n"
                "स्थानांतरित प्लेसमेंट, मुड़े हुए कोने, झुर्रियां और उठे हुए किनारे जैसे दोषों को रीयल-टाइम में पहचाना और रिपोर्ट किया जाता है।\n"
                "स्वचालित OK/NOK आउटपुट तुरंत दिया जाता है जिससे उत्पादन लाइन बिना देरी के किसी भी दोषपूर्ण प्लेसमेंट पर प्रतिक्रिया कर सके।"
            )
        },
        "11": {
            "title": "लेडल हुक निरीक्षण",
            "studyHeader": "लेडल हुक सुरक्षा निरीक्षण के लिए AI-आधारित मशीन विजन सिस्टम",
            "description": (
                "परियोजना अवलोकन:\n"
                "स्टील प्लांट संचालन के लिए एक AI-आधारित मशीन विजन सुरक्षा प्रणाली विकसित की गई, जो पिघले हुए पदार्थ को उठाने से पहले यह सत्यापित करती है कि लेडल क्रेन हुक में सही तरह से फिट है या नहीं। यह सिस्टम क्रेन ऑपरेटरों को लेडल और हुक के गलत कनेक्शन से होने वाली दुर्घटनाओं से बचने में मदद करता है, खासकर जब दृश्यता सीमित हो।\n\n"
                "सिस्टम आवश्यकताएँ:\n"
                "लेडल लोडिंग पॉइंट पर लेडल और क्रेन हुक के बीच के कनेक्शन की जांच के लिए तस्वीरें लेना।\n"
                "उठाने से पहले यह निर्धारित करना कि हुक का कनेक्शन सही और सुरक्षित है या नहीं।\n"
                "क्रेन ऑपरेटर को मार्गदर्शन देने के लिए टावर लैंप के माध्यम से तुरंत दृश्य संकेत देना।\n"
                "स्टील प्लांट की कठिन परिस्थितियों में विश्वसनीय रूप से काम करना जिसमें उच्च तापमान, धूल और कम रोशनी शामिल हैं।\n\n"
                "मुख्य चुनौतियाँ:\n"
                "कठिन वातावरण – स्टील प्लांट की परिस्थितियों में उच्च तापमान, धूल और भाप होती है जो कैमरे की दृश्यता और छवि की स्पष्टता को प्रभावित कर सकती है।\n"
                "कम दृश्यता – क्रेन ऑपरेटर अक्सर ऐसे क्षेत्रों में काम करते हैं जहां वे हुक कनेक्शन को स्पष्ट रूप से नहीं देख सकते, जिससे मैन्युअल जांच अविश्वसनीय हो जाती है।\n"
                "छोटी निरीक्षण अवधि – जांच उठाने से पहले तेजी से पूरी होनी चाहिए, जिससे कनेक्शन की पुष्टि के लिए बहुत कम समय मिलता है।\n\n"
                "CVIT AI समाधान:\n"
                "लेडल लोडिंग पॉइंट पर कूलिंग और क्लीनिंग एनक्लोजर वाले मशीन विजन कैमरे स्थापित किए जाते हैं जो कठिन परिस्थितियों में भी स्पष्ट तस्वीरें लेते हैं।\n"
                "AI सिस्टम प्रत्येक तस्वीर की जांच करता है कि लेडल क्रेन हुक से सही और सुरक्षित रूप से जुड़ी है या नहीं।\n"
                "परिणाम तुरंत टावर लैंप पर दिखाया जाता है – हरी बत्ती का अर्थ है कि लेडल सही तरह से हुक से जुड़ी है और उठाया जा सकता है, लाल बत्ती का अर्थ है कि कनेक्शन सही नहीं है और ऑपरेटर को उठाने से पहले इसे ठीक करना होगा।\n"
                "सिस्टम रीयल-टाइम डिस्प्ले, निरीक्षण इतिहास और सुरक्षा रिकॉर्ड के लिए स्वचालित रिपोर्ट जनरेशन भी प्रदान करता है।\n"
                "स्वचालित निगरानी मैन्युअल दृश्य जांच की जरूरत समाप्त करती है, सुरक्षा में सुधार करती है और लेडल गिरने की दुर्घटनाओं को रोकती है।"
            )
        }
    },
    "zh": {
        "8": {
            "title": "桶体TYVEK检测",
            "studyHeader": "桶体TYVEK检测AI机器视觉系统",
            "description": (
                "项目概述：\n"
                "开发了一套AI机器视觉系统，用于检测生产过程中桶体内外TYVEK膜的放置情况。系统确认每张TYVEK膜放置正确、完全贴合，并在桶体进入下一工序前符合客户验收标准。\n\n"
                "系统要求：\n"
                "检查内层TYVEK是否正确居中并完全放置在桶体内部规定的方形区域内。\n"
                "检查外层TYVEK是否完全覆盖桶体外表面，任何侧面均无可见间隙。\n"
                "检测放置缺陷，如错位、折叠、起皱或边缘翘起。\n"
                "提供实时OK/NOK输出，即时反馈给生产线。\n\n"
                "主要挑战：\n"
                "细微缺陷检测——外层桶体上哪怕仅1毫米的间隙也必须可靠检出并标记为NOK。\n"
                "多种缺陷类型——系统必须正确识别内外层TYVEK上的错位、折角、起皱和边缘翘起。\n"
                "实时检测——检查必须在生产节拍内完成，不能影响生产线速度。\n\n"
                "CVIT解决方案：\n"
                "AI视觉系统检查内层TYVEK，确认其正确居中并完全定位在规定的方形范围内，四边均在允许边界内。\n"
                "系统检查外层TYVEK，确认其从边缘到边缘完全覆盖桶体表面，任何可见的桶体区域均标记为NOK。\n"
                "错位、折角、起皱和边缘翘起等缺陷实时检出并上报。\n"
                "自动OK/NOK输出即时提供，生产线可立即对任何缺陷放置作出响应，无需等待。"
            )
        },
        "11": {
            "title": "钢包挂钩检测",
            "studyHeader": "钢包挂钩安全检测AI机器视觉系统",
            "description": (
                "项目概述：\n"
                "为钢铁厂运营开发了一套AI机器视觉安全系统，用于在吊运熔融物料前验证钢包是否正确安装在起重机吊钩上。系统帮助起重机操作员避免因钢包与吊钩连接不正确而造成的事故，尤其在能见度受限的情况下。\n\n"
                "系统要求：\n"
                "在钢包装载点采集图像，检查钢包与起重机吊钩之间的连接状态。\n"
                "在起吊前判断吊钩连接是否正确安全。\n"
                "通过塔灯提供即时视觉信号，引导起重机操作员。\n"
                "在钢铁厂高温、粉尘、低照明等恶劣条件下可靠运行。\n\n"
                "主要挑战：\n"
                "恶劣环境——钢铁厂存在高温、粉尘和蒸汽，可能影响摄像机视野和图像清晰度。\n"
                "低能见度——起重机操作员常在无法清楚看到吊钩连接状态的区域工作，人工检查不可靠。\n"
                "检测窗口短——必须在起吊前快速完成检查，留给确认连接的时间极短。\n\n"
                "CVIT解决方案：\n"
                "在钢包装载点安装配备冷却和清洁防护外壳的机器视觉摄像机，即使在恶劣条件下也能采集清晰图像。\n"
                "AI系统对每帧图像进行检查，确认钢包是否与起重机吊钩正确、牢固连接。\n"
                "结果即时显示在塔灯上——绿灯表示钢包已正确挂钩，可以起吊；红灯表示连接不正确，操作员须在起吊前进行纠正。\n"
                "系统还提供实时显示、检测历史记录和自动报告生成功能，用于安全存档。\n"
                "自动化监控消除了人工目视检查的需求，提升安全性，防止钢包坠落事故。"
            )
        }
    }
}

langs = ["en", "en_IN", "de", "es", "fr", "hi", "zh"]
base = r"C:\Users\Shree\Documents\CVIT-MAIN\CVIT\public\locales"

for lang in langs:
    path = f"{base}/{lang}/translation.json"
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    lang_updates = updates.get(lang, {})
    for cs_key, cs_data in lang_updates.items():
        data["CaseStudies"][cs_key].update(cs_data)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✓ Updated {lang}")

print("\nAll done!")


