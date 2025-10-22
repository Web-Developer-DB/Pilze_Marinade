export const recipes = [
  {
    id: "porcini-taiga-dill",
    mushroom: "Boletus edulis",
    tags: ["tradition", "forest", "pantry"],
    acidGoal: 2.7,
    restHours: 48,
    locale: {
      de: {
        name: "Taiga-Steinpilze mit Dillzweigen",
        intro: "Klassisches Einmachrezept aus dem russischen Norden mit ausgewogenem Säureprofil.",
        ingredients: [
          "1 kg geputzte Steinpilze",
          "400 ml Wasser",
          "200 ml 9%-Tafelessig, auf 6 % verdünnt",
          "1 EL Salz, 1 EL Zucker",
          "6 Körner Piment, 4 schwarze Pfefferkörner",
          "3 Lorbeerblätter, 4 Dilldolden",
          "5 Knoblauchzehen in Scheiben"
        ],
        steps: [
          "Pilze zweimal in frischem Wasser 5 Minuten blanchieren, dann abtropfen lassen.",
          "Wasser, Essig, Salz, Zucker und Gewürze 5 Minuten kochen.",
          "Pilze zufügen, weitere 10 Minuten leise köcheln, Dildolden zugeben.",
          "Heiß in Gläser füllen, mit Sud bedecken und 48 Stunden reifen lassen."
        ]
      },
      en: {
        name: "Taiga Porcini with Dill",
        intro: "A northern Russian staple with fragrant dill and balanced acidity.",
        ingredients: [
          "1 kg cleaned porcini",
          "400 ml water",
          "200 ml 9% table vinegar diluted to 6%",
          "1 tbsp salt, 1 tbsp sugar",
          "6 allspice berries, 4 black peppercorns",
          "3 bay leaves, 4 dill umbels",
          "5 cloves garlic, sliced"
        ],
        steps: [
          "Blanch mushrooms twice for 5 minutes, changing the water each time.",
          "Boil water, vinegar, salt, sugar, and spices for 5 minutes.",
          "Add mushrooms, simmer gently 10 minutes, add dill umbels.",
          "Pack hot with brine, seal, and cure 48 hours." 
        ]
      },
      ru: {
        name: "Белые грибы таёжные с укропом",
        intro: "Классический северный маринад по мотивам ГОСТовских заготовок.",
        ingredients: [
          "1 кг очищенных белых грибов",
          "400 мл воды",
          "200 мл 9 %-ного уксуса, разбавленного до 6 %",
          "1 ст. л. соли, 1 ст. л. сахара",
          "6 горошин душистого перца, 4 горошины чёрного",
          "3 лавровых листа, 4 зонтика укропа",
          "5 зубчиков чеснока пластинами"
        ],
        steps: [
          "Дважды бланшируйте грибы по 5 минут в свежей воде и обсушите.",
          "Вскипятите воду с уксусом, солью, сахаром и специями 5 минут.",
          "Добавьте грибы, томите ещё 10 минут, положите укроп.",
          "Разлейте кипящим рассолом по стерильным банкам, выдержите 48 часов."
        ]
      }
    }
  },
  {
    id: "podosinovik-siberian",
    mushroom: "Leccinum aurantiacum",
    tags: ["tradition", "forest", "garlic"],
    acidGoal: 2.65,
    restHours: 36,
    locale: {
      de: {
        name: "Sibirische Rotkappen mit Knoblauch",
        intro: "Beliebtes Rezept aus Archangelsk mit kräftiger Brühe und Johannisbeerblatt.",
        ingredients: [
          "800 g Rotkappen",
          "350 ml Wasser",
          "150 ml 9%-Essig, auf 6 % verdünnt",
          "2 EL Salz, 1 EL Zucker",
          "5 Knoblauchzehen",
          "5 Blätter schwarzer Johannisbeere",
          "1 TL Senfkörner, 6 Pfefferkörner"
        ],
        steps: [
          "Pilze putzen, in Stücke schneiden und 20 Minuten in leicht gesalzenem Wasser garen.",
          "Sud abgießen, Pilze abspülen.",
          "Marinade aus Wasser, Essig, Salz, Zucker und Gewürzen 7 Minuten kochen.",
          "Pilze und Johannisbeerblätter zugeben, weitere 5 Minuten ziehen lassen, einfüllen." 
        ]
      },
      en: {
        name: "Siberian Orange Birch Boletes",
        intro: "Northern-style brine enriched with currant leaves and garlic.",
        ingredients: [
          "800 g orange-cap boletes",
          "350 ml water",
          "150 ml 9% vinegar diluted to 6%",
          "2 tbsp salt, 1 tbsp sugar",
          "5 cloves garlic",
          "5 blackcurrant leaves",
          "1 tsp mustard seeds, 6 peppercorns"
        ],
        steps: [
          "Trim and cut mushrooms, simmer 20 minutes in lightly salted water.",
          "Drain, rinse, and set aside.",
          "Boil water, vinegar, salt, sugar, and spices for 7 minutes.",
          "Add mushrooms and leaves, infuse 5 minutes, jar hot." 
        ]
      },
      ru: {
        name: "Подосиновики по-сибирски",
        intro: "Распространённый рецепт Поморья с листьями смородины и чесноком.",
        ingredients: [
          "800 г подосиновиков",
          "350 мл воды",
          "150 мл 9 %-ного уксуса, доведённого до 6 %",
          "2 ст. л. соли, 1 ст. л. сахара",
          "5 зубчиков чеснока",
          "5 листьев чёрной смородины",
          "1 ч. л. горчицы зерном, 6 горошин перца"
        ],
        steps: [
          "Очистите и нарежьте грибы, варите 20 минут в подсоленной воде.",
          "Откиньте на дуршлаг и промойте.",
          "Маринад из воды, уксуса, соли, сахара и специй кипятите 7 минут.",
          "Всыпьте грибы и листья, прогрейте ещё 5 минут, разлейте горячим." 
        ]
      }
    }
  },
  {
    id: "podberezovik-village",
    mushroom: "Leccinum scabrum",
    tags: ["forest", "herbal", "pantry"],
    acidGoal: 2.6,
    restHours: 36,
    locale: {
      de: {
        name: "Landhaus-Rauhfüße mit Meerrettich",
        intro: "Dörfliche Einmachvariante aus Wologda mit Meerrettichwurzel und укроп.",
        ingredients: [
          "900 g Birkenpilze",
          "450 ml Wasser",
          "180 ml 9%-Essig, auf 5,5 % verdünnt",
          "1,5 EL Salz, 1 EL Zucker",
          "1 EL frisch geriebener Meerrettich",
          "1 Bund Dillgrün",
          "6 Körner schwarzer Pfeffer"
        ],
        steps: [
          "Pilze putzen, halbieren und 15 Minuten blanchieren.",
          "Marinade aus Wasser, Essig, Salz, Zucker, Pfeffer aufkochen.",
          "Meerrettich und Dill zugeben, Pilze einlegen und 7 Minuten ziehen lassen.",
          "Heiß in Gläser verteilen, Dill obenauf." 
        ]
      },
      en: {
        name: "Village Birch Boletes with Horseradish",
        intro: "Traditional Vologda-style preserve with horseradish heat.",
        ingredients: [
          "900 g rough birch boletes",
          "450 ml water",
          "180 ml 9% vinegar diluted to 5.5%",
          "1.5 tbsp salt, 1 tbsp sugar",
          "1 tbsp freshly grated horseradish",
          "1 bunch dill",
          "6 black peppercorns"
        ],
        steps: [
          "Clean and halve mushrooms, blanch 15 minutes.",
          "Boil water, vinegar, salt, sugar, and pepper.",
          "Add horseradish, dill, and mushrooms; steep 7 minutes.",
          "Fill jars while hot, tuck dill on top." 
        ]
      },
      ru: {
        name: "Подберёзовики по-деревенски",
        intro: "Вологодская заготовка с хреном и пучком свежего укропа.",
        ingredients: [
          "900 г подберёзовиков",
          "450 мл воды",
          "180 мл 9 %-ного уксуса, разбавленного до 5,5 %",
          "1,5 ст. л. соли, 1 ст. л. сахара",
          "1 ст. л. свежего тёртого хрена",
          "1 пучок укропа",
          "6 горошин чёрного перца"
        ],
        steps: [
          "Очистите и разрежьте грибы, бланшируйте 15 минут.",
          "Кипятите воду с уксусом, солью, сахаром и перцем.",
          "Добавьте хрен, укроп и грибы, прогрейте 7 минут.",
          "Разлейте по банкам, уложив укроп сверху." 
        ]
      }
    }
  },
  {
    id: "maslyata-quick-brine",
    mushroom: "Suillus luteus",
    tags: ["quick", "forest", "family"],
    acidGoal: 2.55,
    restHours: 12,
    locale: {
      de: {
        name: "Schnelle Maslata im Samowar-Stil",
        intro: "Bevorzugt in Zentralrussland für das erste Wintermenü.",
        ingredients: [
          "700 g Butterpilze, gehäutet",
          "300 ml Wasser",
          "120 ml 9%-Essig, auf 5 % gebracht",
          "1,5 EL Salz, 1 EL Zucker",
          "2 Lorbeerblätter, 4 Nelken",
          "1 TL Dill-Samen",
          "1 Zwiebel in Ringen"
        ],
        steps: [
          "Pilze nach dem Häuten 10 Minuten in leicht gesalzenem Wasser kochen, abgießen.",
          "Marinade aufsetzen, Zwiebel und Gewürze zufügen.",
          "Pilze einlegen, 5 Minuten ziehen lassen.",
          "In Gläser füllen und 12 Stunden kalt stellen." 
        ]
      },
      en: {
        name: "Quick Butter Mushrooms",
        intro: "Central Russian fast marinade ideal for early winter tables.",
        ingredients: [
          "700 g butter mushrooms, peeled",
          "300 ml water",
          "120 ml 9% vinegar adjusted to 5%",
          "1.5 tbsp salt, 1 tbsp sugar",
          "2 bay leaves, 4 cloves",
          "1 tsp dill seeds",
          "1 onion, sliced"
        ],
        steps: [
          "Boil peeled mushrooms 10 minutes in lightly salted water, drain.",
          "Prepare marinade with onion and spices.",
          "Add mushrooms, steep 5 minutes off the heat.",
          "Jar and chill for 12 hours." 
        ]
      },
      ru: {
        name: "Маслята быстрые по-центральному",
        intro: "Популярная заготовка средней полосы для ранней зимы.",
        ingredients: [
          "700 г очищенных маслят",
          "300 мл воды",
          "120 мл 9 %-ного уксуса, разведённого до 5 %",
          "1,5 ст. л. соли, 1 ст. л. сахара",
          "2 лавровых листа, 4 бутона гвоздики",
          "1 ч. л. семян укропа",
          "1 луковица кольцами"
        ],
        steps: [
          "Отварите очищенные маслята 10 минут в подсоленной воде и откиньте.",
          "Сварите маринад с луком и специями.",
          "Добавьте грибы, выдержите 5 минут под крышкой.",
          "Разложите по банкам и охладите 12 часов." 
        ]
      }
    }
  },
  {
    id: "honey-fungus-classic",
    mushroom: "Armillaria mellea",
    tags: ["classic", "garlic", "pantry"],
    acidGoal: 2.7,
    restHours: 72,
    locale: {
      de: {
        name: "Klassische Waldhonigpilze",
        intro: "Bewährte Variante aus dem Russischen Kochbuch von Pokhlebkin.",
        ingredients: [
          "1 kg Waldhonigpilze",
          "500 ml Wasser",
          "200 ml 9%-Essig, auf 6 % reduziert",
          "2 EL Salz, 1,5 EL Zucker",
          "8 Knoblauchzehen",
          "8 Körner Piment, 6 Körner schwarzer Pfeffer",
          "3 Lorbeerblätter"
        ],
        steps: [
          "Pilze zweimal je 5 Minuten blanchieren, dabei das Wasser wechseln.",
          "Marinade kochen, Knoblauch halbiert zugeben.",
          "Pilze 10 Minuten im Sud ziehen lassen.",
          "Heiß abfüllen und 72 Stunden kühl stellen." 
        ]
      },
      en: {
        name: "Classic Forest Honey Mushrooms",
        intro: "Based on Pokhlebkin's authoritative Russian preserving guide.",
        ingredients: [
          "1 kg honey mushrooms",
          "500 ml water",
          "200 ml 9% vinegar reduced to 6%",
          "2 tbsp salt, 1.5 tbsp sugar",
          "8 cloves garlic",
          "8 allspice berries, 6 black peppercorns",
          "3 bay leaves"
        ],
        steps: [
          "Blanch mushrooms twice for 5 minutes each, changing the water.",
          "Boil marinade, add halved garlic cloves.",
          "Simmer mushrooms gently for 10 minutes.",
          "Pack hot and mature 72 hours." 
        ]
      },
      ru: {
        name: "Опята маринованные классические",
        intro: "Рецепт по Похлёбкину — стандарт русской куліны.",
        ingredients: [
          "1 кг лесных опят",
          "500 мл воды",
          "200 мл 9 %-ного уксуса, доведённого до 6 %",
          "2 ст. л. соли, 1,5 ст. л. сахара",
          "8 зубчиков чеснока",
          "8 горошин душистого перца, 6 чёрного",
          "3 лавровых листа"
        ],
        steps: [
          "Дважды бланшируйте опята по 5 минут, воду меняйте.",
          "Сварите маринад, добавьте чеснок половинками.",
          "Проварите опята в рассоле 10 минут.",
          "Разлейте горячими и выдержите 72 часа." 
        ]
      }
    }
  },
  {
    id: "ryzhiki-karelian",
    mushroom: "Lactarius deliciosus",
    tags: ["tradition", "spicy", "forest"],
    acidGoal: 2.55,
    restHours: 24,
    locale: {
      de: {
        name: "Karelische Reizker mit Mor­scher-Würze",
        intro: "Legendärer Karelien-Mix mit Möhren und Zwiebel im Marinadensud.",
        ingredients: [
          "800 g Reizker",
          "350 ml Wasser",
          "150 ml 6%-Essig",
          "1,5 EL Salz, 1 EL Zucker",
          "1 Karotte in Scheiben",
          "1 Zwiebel in Ringen",
          "5 Pfefferkörner, 2 Nelken"
        ],
        steps: [
          "Pilze 15 Minuten in Salzwasser kochen, Karotte und Zwiebel in den Sud geben.",
          "Marinade mit Gewürzen weitere 7 Minuten kochen.",
          "Heiß abfüllen und 24 Stunden ziehen lassen." 
        ]
      },
      en: {
        name: "Karelian Saffron Milk Caps",
        intro: "Carrot and onion spiced marinade popular on Soviet culinary portals.",
        ingredients: [
          "800 g saffron milk caps",
          "350 ml water",
          "150 ml 6% vinegar",
          "1.5 tbsp salt, 1 tbsp sugar",
          "1 carrot sliced",
          "1 onion ringed",
          "5 peppercorns, 2 cloves"
        ],
        steps: [
          "Boil mushrooms 15 minutes with salted water, add carrot and onion.",
          "Cook marinade with spices 7 minutes more.",
          "Fill jars while hot and rest 24 hours." 
        ]
      },
      ru: {
        name: "Рыжики по-карельски",
        intro: "Классика из советских сборников с морковью и луком.",
        ingredients: [
          "800 г рыжиков",
          "350 мл воды",
          "150 мл 6 %-ного уксуса",
          "1,5 ст. л. соли, 1 ст. л. сахара",
          "1 морковь кружками",
          "1 луковица кольцами",
          "5 горошин перца, 2 бутона гвоздики"
        ],
        steps: [
          "Варите грибы 15 минут в подсоленной воде, добавьте морковь и лук.",
          "Пряный маринад доварите ещё 7 минут.",
          "Разлейте кипящим и выдержите 24 часа." 
        ]
      }
    }
  },
  {
    id: "volnushka-northern",
    mushroom: "Lactarius torminosus",
    tags: ["forest", "garlic", "winter"],
    acidGoal: 2.6,
    restHours: 48,
    locale: {
      de: {
        name: "Nordische Violettschleierlinge",
        intro: "Beliebt in Komi: mehrfaches Wässern und kräftiger Knoblauch.",
        ingredients: [
          "700 g Wulstlinge/Violette Milchlinge",
          "500 ml Wasser",
          "160 ml 9%-Essig, auf 5,5 % verdünnt",
          "2 EL Salz, 1 EL Zucker",
          "6 Knoblauchzehen",
          "6 Blätter schwarzer Johannisbeere",
          "1 TL Fenchelsamen"
        ],
        steps: [
          "Pilze 2 Tage wässern, Wasser mehrfach wechseln.",
          "Danach 15 Minuten in frischem Wasser kochen.",
          "Marinade mit Gewürzen 8 Minuten kochen, Pilze zugeben.",
          "Heiß abfüllen und 48 Stunden ausreifen lassen." 
        ]
      },
      en: {
        name: "Northern Woolly Milk Caps",
        intro: "Komi-style savory pickle with garlic and currant leaves.",
        ingredients: [
          "700 g woolly milk caps",
          "500 ml water",
          "160 ml 9% vinegar diluted to 5.5%",
          "2 tbsp salt, 1 tbsp sugar",
          "6 cloves garlic",
          "6 blackcurrant leaves",
          "1 tsp fennel seeds"
        ],
        steps: [
          "Soak mushrooms for 2 days, changing water frequently.",
          "Boil in fresh water 15 minutes.",
          "Cook marinade with spices 8 minutes, add mushrooms.",
          "Jar hot and mature 48 hours." 
        ]
      },
      ru: {
        name: "Волнушки по-северному",
        intro: "Коми рецепт с замачиванием и чесноком.",
        ingredients: [
          "700 г волнушек",
          "500 мл воды",
          "160 мл 9 %-ного уксуса, разведённого до 5,5 %",
          "2 ст. л. соли, 1 ст. л. сахара",
          "6 зубчиков чеснока",
          "6 листьев смородины",
          "1 ч. л. семян фенхеля"
        ],
        steps: [
          "Замочите грибы на 2 суток, меняя воду.",
          "Проварите 15 минут в свежей воде.",
          "Маринад со специями кипятите 8 минут, добавьте грибы.",
          "Разлейте горячим, выдержите 48 часов." 
        ]
      }
    }
  },
  {
    id: "gruzdi-ural",
    mushroom: "Lactarius resimus",
    tags: ["tradition", "dill", "pantry"],
    acidGoal: 2.7,
    restHours: 72,
    locale: {
      de: {
        name: "Ural-Milchpilze mit Dillschirmen",
        intro: "Uralskiy marinat nach offiziellen sowjetischen Normen.",
        ingredients: [
          "900 g Milchlinge",
          "450 ml Wasser",
          "200 ml 9%-Essig, auf 6 % verdünnt",
          "2 EL Salz, 1,5 EL Zucker",
          "2 Dillschirme, 1 TL Senfkörner",
          "5 Knoblauchzehen",
          "5 Pfefferkörner, 2 Lorbeerblätter"
        ],
        steps: [
          "Pilze nach dem Einweichen 20 Minuten kochen.",
          "Marinade 7 Minuten kochen, Dill und Knoblauch zufügen.",
          "Pilze einlegen, heiß auffüllen und 72 Stunden reifen lassen." 
        ]
      },
      en: {
        name: "Ural Milk Mushrooms",
        intro: "Soviet-era reference recipe with dill heads and mustard seeds.",
        ingredients: [
          "900 g milk mushrooms",
          "450 ml water",
          "200 ml 9% vinegar diluted to 6%",
          "2 tbsp salt, 1.5 tbsp sugar",
          "2 dill umbels, 1 tsp mustard seeds",
          "5 cloves garlic",
          "5 peppercorns, 2 bay leaves"
        ],
        steps: [
          "After soaking, boil mushrooms 20 minutes.",
          "Cook marinade 7 minutes, add dill and garlic.",
          "Combine with mushrooms, fill jars hot, age 72 hours." 
        ]
      },
      ru: {
        name: "Грузди по-уральски",
        intro: "ГОСТовский маринад с зонтиками укропа и горчицей.",
        ingredients: [
          "900 г груздей",
          "450 мл воды",
          "200 мл 9 %-ного уксуса, разбавленного до 6 %",
          "2 ст. л. соли, 1,5 ст. л. сахара",
          "2 зонтика укропа, 1 ч. л. горчицы зерном",
          "5 зубчиков чеснока",
          "5 горошин перца, 2 лавровых листа"
        ],
        steps: [
          "После вымачивания отварите грузди 20 минут.",
          "Маринад кипятите 7 минут, добавьте укроп и чеснок.",
          "Смешайте с грибами, разлейте горячим, выдержите 72 часа." 
        ]
      }
    }
  },
  {
    id: "chanterelle-karelian",
    mushroom: "Cantharellus cibarius",
    tags: ["forest", "mild", "snack"],
    acidGoal: 2.5,
    restHours: 18,
    locale: {
      de: {
        name: "Nordische Pfifferlinge mit Sahnebiss",
        intro: "Leichte Marinade aus Petrozavodsk mit Koriander und weißen Pfefferkörnern.",
        ingredients: [
          "700 g Pfifferlinge",
          "320 ml Wasser",
          "130 ml 6%-Essig",
          "1,5 EL Salz, 0,5 EL Zucker",
          "1 TL Koriandersaat",
          "4 Körner weißer Pfeffer",
          "1 kleine Schalotte"
        ],
        steps: [
          "Pilze gründlich waschen, 12 Minuten köcheln.",
          "Marinade mit Gewürzen und Schalotte 5 Minuten kochen.",
          "Pilze einlegen, 18 Stunden kalt reifen lassen." 
        ]
      },
      en: {
        name: "Karelian Chanterelles",
        intro: "Light coriander-spiced pickle popular in Petrozavodsk.",
        ingredients: [
          "700 g chanterelles",
          "320 ml water",
          "130 ml 6% vinegar",
          "1.5 tbsp salt, 0.5 tbsp sugar",
          "1 tsp coriander seed",
          "4 white peppercorns",
          "1 small shallot"
        ],
        steps: [
          "Wash thoroughly, simmer 12 minutes.",
          "Cook marinade with spices and shallot 5 minutes.",
          "Combine with mushrooms, chill 18 hours." 
        ]
      },
      ru: {
        name: "Лисички по-карельски",
        intro: "Лёгкий маринад с кориандром из Петрозаводска.",
        ingredients: [
          "700 г лисичек",
          "320 мл воды",
          "130 мл 6 %-ного уксуса",
          "1,5 ст. л. соли, 0,5 ст. л. сахара",
          "1 ч. л. семян кориандра",
          "4 горошины белого перца",
          "1 небольшая шалот"
        ],
        steps: [
          "Тщательно промойте грибы и варите 12 минут.",
          "Маринад со специями и шалотом кипятите 5 минут.",
          "Смешайте с грибами, охладите 18 часов." 
        ]
      }
    }
  },
  {
    id: "polish-forest",
    mushroom: "Imleria badia",
    tags: ["forest", "holiday", "pantry"],
    acidGoal: 2.65,
    restHours: 48,
    locale: {
      de: {
        name: "Polnische Röhrlinge zur Festtafel",
        intro: "Beliebt für Neujahrsplatten – mit Lorbeer und Schalotten.",
        ingredients: [
          "750 g Maronenröhrlinge",
          "360 ml Wasser",
          "140 ml 6%-Essig",
          "1,5 EL Salz, 1 EL Zucker",
          "2 Schalotten",
          "5 Lorbeerblätter",
          "6 schwarze Pfefferkörner"
        ],
        steps: [
          "Pilze 15 Minuten kochen, abschäumen.",
          "Marinade kochen, Schalotten halbiert zugeben.",
          "Pilze 8 Minuten im Sud ziehen lassen.",
          "In Gläser füllen und 48 Stunden ruhen lassen." 
        ]
      },
      en: {
        name: "Holiday Polish Mushrooms",
        intro: "A New Year's favourite across Russia, with bay leaves and shallots.",
        ingredients: [
          "750 g bay boletes",
          "360 ml water",
          "140 ml 6% vinegar",
          "1.5 tbsp salt, 1 tbsp sugar",
          "2 shallots",
          "5 bay leaves",
          "6 black peppercorns"
        ],
        steps: [
          "Boil mushrooms 15 minutes, skimming foam.",
          "Cook marinade, add halved shallots.",
          "Steep mushrooms 8 minutes in the brine.",
          "Jar and rest 48 hours." 
        ]
      },
      ru: {
        name: "Польский гриб праздничный",
        intro: "Любимая новогодняя закуска с лавром и шалотом.",
        ingredients: [
          "750 г польских грибов",
          "360 мл воды",
          "140 мл 6 %-ного уксуса",
          "1,5 ст. л. соли, 1 ст. л. сахара",
          "2 шалота",
          "5 лавровых листов",
          "6 горошин чёрного перца"
        ],
        steps: [
          "Варите грибы 15 минут, снимая пену.",
          "Маринад кипятите, добавьте шалот половинками.",
          "Настоите грибы в рассоле 8 минут.",
          "Разлейте и выдержите 48 часов." 
        ]
      }
    }
  },
  {
    id: "russula-holiday",
    mushroom: "Russula vesca",
    tags: ["family", "mild", "holiday"],
    acidGoal: 2.5,
    restHours: 24,
    locale: {
      de: {
        name: "Festliche Täublinge mit Zwiebel",
        intro: "Weit verbreitetes Familienrezept aus Jaroslawl.",
        ingredients: [
          "700 g Täublinge",
          "300 ml Wasser",
          "120 ml 6%-Essig",
          "1 EL Salz, 1 EL Zucker",
          "2 Zwiebeln, halbiert",
          "1 TL schwarze Pfefferkörner",
          "1 Bund Petersilie"
        ],
        steps: [
          "Pilze 10 Minuten blanchieren, Zwiebeln separat 2 Minuten kochen.",
          "Marinade 5 Minuten kochen, dann Pilze und Zwiebeln zugeben.",
          "Mit Petersilie abschließen, 24 Stunden ziehen lassen." 
        ]
      },
      en: {
        name: "Yaroslavl Russula Pickle",
        intro: "Family favourite with onion halves and parsley finish.",
        ingredients: [
          "700 g russula",
          "300 ml water",
          "120 ml 6% vinegar",
          "1 tbsp salt, 1 tbsp sugar",
          "2 onions halved",
          "1 tsp black peppercorns",
          "1 bunch parsley"
        ],
        steps: [
          "Blanch mushrooms 10 minutes, boil onions separately 2 minutes.",
          "Cook marinade 5 minutes, add mushrooms and onions.",
          "Top with parsley, rest 24 hours." 
        ]
      },
      ru: {
        name: "Сыроежки праздничные",
        intro: "Популярный ярославский рецепт с половинками лука.",
        ingredients: [
          "700 г сыроежек",
          "300 мл воды",
          "120 мл 6 %-ного уксуса",
          "1 ст. л. соли, 1 ст. л. сахара",
          "2 луковицы половинками",
          "1 ч. л. чёрного перца",
          "1 пучок петрушки"
        ],
        steps: [
          "Бланшируйте грибы 10 минут, лук отварите 2 минуты отдельно.",
          "Маринад кипятите 5 минут, соедините с грибами и луком.",
          "Добавьте петрушку и выдержите 24 часа." 
        ]
      }
    }
  },
  {
    id: "veshanka-apartment",
    mushroom: "Pleurotus ostreatus",
    tags: ["quick", "family", "snack"],
    acidGoal: 2.45,
    restHours: 6,
    locale: {
      de: {
        name: "Wohnungstaugliche Austernseitlinge",
        intro: "Stadtrezept aus Moskau – ohne Vorwässern, in 6 Stunden fertig.",
        ingredients: [
          "600 g Austernseitlinge",
          "250 ml Wasser",
          "120 ml Apfelessig 6 %",
          "1 EL Salz, 1 EL Zucker",
          "3 Knoblauchzehen",
          "1 TL Paprikaflocken",
          "3 Zweige Petersilie"
        ],
        steps: [
          "Pilze in Streifen schneiden, 5 Minuten ohne Fett anschwitzen.",
          "Mit Wasser, Essig und Gewürzen 5 Minuten kochen.",
          "Mit Petersilie heiß abfüllen, 6 Stunden kühlen." 
        ]
      },
      en: {
        name: "City Oyster Mushroom Pickle",
        intro: "Popular Moscow apartment method ready in six hours.",
        ingredients: [
          "600 g oyster mushrooms",
          "250 ml water",
          "120 ml 6% apple vinegar",
          "1 tbsp salt, 1 tbsp sugar",
          "3 cloves garlic",
          "1 tsp paprika flakes",
          "3 sprigs parsley"
        ],
        steps: [
          "Slice mushrooms, sweat 5 minutes without oil.",
          "Cook with water, vinegar, spices for 5 minutes.",
          "Pack hot with parsley, chill 6 hours." 
        ]
      },
      ru: {
        name: "Вешенка городская",
        intro: "Московский скорый маринад – готов за 6 часов.",
        ingredients: [
          "600 г вешенки",
          "250 мл воды",
          "120 мл яблочного уксуса 6 %",
          "1 ст. л. соли, 1 ст. л. сахара",
          "3 зубчика чеснока",
          "1 ч. л. паприки хлопьями",
          "3 веточки петрушки"
        ],
        steps: [
          "Нарежьте грибы и припустите 5 минут без масла.",
          "Проварите с водой, уксусом и специями 5 минут.",
          "Разложите горячими с петрушкой, охладите 6 часов." 
        ]
      }
    }
  },
  {
    id: "champignon-stolichny",
    mushroom: "Agaricus bisporus",
    tags: ["classic", "family", "snack"],
    acidGoal: 2.45,
    restHours: 8,
    locale: {
      de: {
        name: "Stolitschni-Champignons",
        intro: "Gemäß sowjetischer Hausfrauenseite: süß-sauer mit Pflanzenöl.",
        ingredients: [
          "800 g kleine Champignons",
          "300 ml Wasser",
          "120 ml 6%-Essig",
          "1,5 EL Zucker, 1 EL Salz",
          "3 EL Sonnenblumenöl",
          "5 Knoblauchzehen",
          "1 TL schwarzer Pfeffer"
        ],
        steps: [
          "Pilze 5 Minuten blanchieren.",
          "Marinade mit Öl, Knoblauch und Pfeffer 5 Minuten kochen.",
          "Pilze einlegen, heiß in Gläser füllen, 8 Stunden durchziehen lassen." 
        ]
      },
      en: {
        name: "Stolichny Pickled Champignons",
        intro: "Sweet-sour pantry favourite from Soviet magazines.",
        ingredients: [
          "800 g small champignons",
          "300 ml water",
          "120 ml 6% vinegar",
          "1.5 tbsp sugar, 1 tbsp salt",
          "3 tbsp sunflower oil",
          "5 cloves garlic",
          "1 tsp black pepper"
        ],
        steps: [
          "Blanch mushrooms 5 minutes.",
          "Cook marinade with oil, garlic, pepper for 5 minutes.",
          "Combine and jar hot, rest 8 hours." 
        ]
      },
      ru: {
        name: "Шампиньоны столичные",
        intro: "Сладко-кислый рецепт из советских журналов.",
        ingredients: [
          "800 г мелких шампиньонов",
          "300 мл воды",
          "120 мл 6 %-ного уксуса",
          "1,5 ст. л. сахара, 1 ст. л. соли",
          "3 ст. л. подсолнечного масла",
          "5 зубчиков чеснока",
          "1 ч. л. чёрного перца"
        ],
        steps: [
          "Бланшируйте шампиньоны 5 минут.",
          "Маринад с маслом, чесноком и перцем кипятите 5 минут.",
          "Соедините и разлейте горячими, выдержите 8 часов." 
        ]
      }
    }
  },
  {
    id: "winter-honey-leningrad",
    mushroom: "Flammulina velutipes",
    tags: ["winter", "garlic", "snack"],
    acidGoal: 2.5,
    restHours: 12,
    locale: {
      de: {
        name: "Leningrader Winterpilze",
        intro: "Amtliches Rezept für зимние опята с морковью и чесноком.",
        ingredients: [
          "600 g Winterpilze",
          "260 ml Wasser",
          "120 ml 6%-Essig",
          "1 EL Salz, 1 EL Zucker",
          "1 Karotte streifig",
          "3 Knoblauchzehen",
          "1 TL schwarzer Pfeffer"
        ],
        steps: [
          "Pilze 7 Minuten kochen.",
          "Marinade mit Karotten und Knoblauch 6 Minuten köcheln.",
          "Pilze zugeben, heiß füllen, 12 Stunden ruhen lassen." 
        ]
      },
      en: {
        name: "Leningrad Winter Honeyagarics",
        intro: "Official preserving method for winter honey mushrooms with carrot strips.",
        ingredients: [
          "600 g winter honey mushrooms",
          "260 ml water",
          "120 ml 6% vinegar",
          "1 tbsp salt, 1 tbsp sugar",
          "1 carrot julienned",
          "3 cloves garlic",
          "1 tsp black pepper"
        ],
        steps: [
          "Boil mushrooms 7 minutes.",
          "Simmer marinade with carrot and garlic 6 minutes.",
          "Combine, jar hot, rest 12 hours." 
        ]
      },
      ru: {
        name: "Зимние опята ленинградские",
        intro: "Официальный рецепт с морковью и чесноком.",
        ingredients: [
          "600 г зимних опят",
          "260 мл воды",
          "120 мл 6 %-ного уксуса",
          "1 ст. л. соли, 1 ст. л. сахара",
          "1 морковь соломкой",
          "3 зубчика чеснока",
          "1 ч. л. чёрного перца"
        ],
        steps: [
          "Варите грибы 7 минут.",
          "Маринад с морковью и чесноком томите 6 минут.",
          "Соедините и разлейте горячим, выдержите 12 часов." 
        ]
      }
    }
  },
  {
    id: "morel-ural",
    mushroom: "Morchella esculenta",
    tags: ["festive", "forest", "holiday"],
    acidGoal: 2.6,
    restHours: 36,
    locale: {
      de: {
        name: "Uralsche Morcheln im Marinadekrug",
        intro: "Offiziell empfohlen mit обваривание und heller Brühe.",
        ingredients: [
          "400 g Morcheln",
          "300 ml Wasser",
          "130 ml 6%-Essig",
          "1 EL Salz, 1 EL Zucker",
          "4 Nelken",
          "1 TL Zitronensaft",
          "1 kleine Zwiebel"
        ],
        steps: [
          "Morcheln 30 Minuten wässern, danach 15 Minuten kochen.",
          "Marinade mit Gewürzen 5 Minuten kochen, Zwiebel zufügen.",
          "Pilze einlegen, 36 Stunden reifen lassen." 
        ]
      },
      en: {
        name: "Ural-Style Morel Pickle",
        intro: "Recommended in Russian culinary encyclopedias for festive tables.",
        ingredients: [
          "400 g morels",
          "300 ml water",
          "130 ml 6% vinegar",
          "1 tbsp salt, 1 tbsp sugar",
          "4 cloves",
          "1 tsp lemon juice",
          "1 small onion"
        ],
        steps: [
          "Soak morels 30 minutes, boil 15 minutes.",
          "Cook marinade with spices and onion 5 minutes.",
          "Combine and mature 36 hours." 
        ]
      },
      ru: {
        name: "Сморчки по-уральски",
        intro: "Рекомендация к праздничным столам в российских энциклопедиях.",
        ingredients: [
          "400 г сморчков",
          "300 мл воды",
          "130 мл 6 %-ного уксуса",
          "1 ст. л. соли, 1 ст. л. сахара",
          "4 бутона гвоздики",
          "1 ч. л. лимонного сока",
          "1 небольшая луковица"
        ],
        steps: [
          "Замочите сморчки на 30 минут, затем варите 15 минут.",
          "Маринад со специями и луком кипятите 5 минут.",
          "Соедините и выдержите 36 часов." 
        ]
      }
    }
  },
  {
    id: "ryadovka-green",
    mushroom: "Tricholoma equestre",
    tags: ["forest", "winter", "pantry"],
    acidGoal: 2.65,
    restHours: 48,
    locale: {
      de: {
        name: "Grüne Ritterlinge für den Vorrat",
        intro: "Beliebt in Sibirien, mit Meerrettich und укроп.",
        ingredients: [
          "800 g Grünlinge",
          "400 ml Wasser",
          "160 ml 6%-Essig",
          "2 EL Salz, 1 EL Zucker",
          "1 EL geriebener Meerrettich",
          "2 Dillschirme",
          "6 schwarze Pfefferkörner"
        ],
        steps: [
          "Pilze 24 Stunden wässern, dann 20 Minuten kochen.",
          "Marinade 6 Minuten kochen, Meerrettich zuletzt zugeben.",
          "Heiß einfüllen, 48 Stunden kühl stellen." 
        ]
      },
      en: {
        name: "Siberian Green Tricholoma",
        intro: "Horseradish and dill accented pickle for winter cellars.",
        ingredients: [
          "800 g green tricholoma",
          "400 ml water",
          "160 ml 6% vinegar",
          "2 tbsp salt, 1 tbsp sugar",
          "1 tbsp grated horseradish",
          "2 dill umbels",
          "6 black peppercorns"
        ],
        steps: [
          "Soak mushrooms 24 hours, boil 20 minutes.",
          "Cook marinade 6 minutes, stir in horseradish.",
          "Jar hot and chill 48 hours." 
        ]
      },
      ru: {
        name: "Рядовка зелёная впрок",
        intro: "Сибирский вариант с хреном и укропом.",
        ingredients: [
          "800 г зелёных рядовок",
          "400 мл воды",
          "160 мл 6 %-ного уксуса",
          "2 ст. л. соли, 1 ст. л. сахара",
          "1 ст. л. тёртого хрена",
          "2 зонтика укропа",
          "6 горошин чёрного перца"
        ],
        steps: [
          "Замочите грибы на сутки и отварите 20 минут.",
          "Маринад кипятите 6 минут, в конце добавьте хрен.",
          "Разлейте горячим и охладите 48 часов." 
        ]
      }
    }
  },
  {
    id: "chernushka-spiced",
    mushroom: "Lactarius necator",
    tags: ["forest", "spicy", "pantry"],
    acidGoal: 2.7,
    restHours: 72,
    locale: {
      de: {
        name: "Gewürzte Schwarzkappen",
        intro: "Offizieller russischer Leitfaden empfiehlt doppelte Blanchierung.",
        ingredients: [
          "900 g Schwarzkappen",
          "450 ml Wasser",
          "200 ml 6%-Essig",
          "2 EL Salz, 1 EL Zucker",
          "5 Knoblauchzehen",
          "1 TL Chili-Flocken",
          "5 Lorbeerblätter"
        ],
        steps: [
          "Pilze 2 Tage wässern, Wasser wechseln.",
          "Zwei Mal je 5 Minuten blanchieren.",
          "Marinade 8 Minuten kochen, Pilze zugeben.",
          "Gläser füllen, 72 Stunden reifen lassen." 
        ]
      },
      en: {
        name: "Spiced Black Milk Caps",
        intro: "Official Russian preserving guides recommend double blanching.",
        ingredients: [
          "900 g black milk caps",
          "450 ml water",
          "200 ml 6% vinegar",
          "2 tbsp salt, 1 tbsp sugar",
          "5 cloves garlic",
          "1 tsp chili flakes",
          "5 bay leaves"
        ],
        steps: [
          "Soak mushrooms 2 days, changing water.",
          "Blanch twice for 5 minutes each.",
          "Boil marinade 8 minutes, add mushrooms.",
          "Jar and mature 72 hours." 
        ]
      },
      ru: {
        name: "Чернушки пряные",
        intro: "По официальным рекомендациям с двойным бланшированием.",
        ingredients: [
          "900 г чернушек",
          "450 мл воды",
          "200 мл 6 %-ного уксуса",
          "2 ст. л. соли, 1 ст. л. сахара",
          "5 зубчиков чеснока",
          "1 ч. л. хлопьев чили",
          "5 лавровых листов"
        ],
        steps: [
          "Вымачивайте грибы 2 суток, меняя воду.",
          "Дважды бланшируйте по 5 минут.",
          "Маринад кипятите 8 минут, добавьте грибы.",
          "Разлейте и выдержите 72 часа." 
        ]
      }
    }
  },
  {
    id: "lugo-opyonok",
    mushroom: "Marasmius oreades",
    tags: ["mild", "quick", "snack"],
    acidGoal: 2.4,
    restHours: 6,
    locale: {
      de: {
        name: "Marinierte Wiesenrüblinge",
        intro: "Beliebt für Sommerpicknicks – leichter Kräuteraufguss.",
        ingredients: [
          "500 g Wiesenrüblinge",
          "240 ml Wasser",
          "100 ml 6%-Essig",
          "1 EL Salz, 1 EL Zucker",
          "1 TL getrockneter Majoran",
          "3 Zweige Dill",
          "1 kleine rote Zwiebel"
        ],
        steps: [
          "Pilze 7 Minuten kochen.",
          "Marinade mit Majoran und Zwiebel kurz aufkochen.",
          "Pilze zugeben, Dill einlegen, 6 Stunden ziehen lassen." 
        ]
      },
      en: {
        name: "Meadow Honey Pickle",
        intro: "Light herb infusion for Russian summer picnics.",
        ingredients: [
          "500 g fairy ring mushrooms",
          "240 ml water",
          "100 ml 6% vinegar",
          "1 tbsp salt, 1 tbsp sugar",
          "1 tsp dried marjoram",
          "3 dill sprigs",
          "1 small red onion"
        ],
        steps: [
          "Boil mushrooms 7 minutes.",
          "Cook marinade with marjoram and onion briefly.",
          "Add mushrooms, tuck in dill, macerate 6 hours." 
        ]
      },
      ru: {
        name: "Луговые опята маринованные",
        intro: "Лёгкий травяной настой для летних пикников.",
        ingredients: [
          "500 г луговых опят",
          "240 мл воды",
          "100 мл 6 %-ного уксуса",
          "1 ст. л. соли, 1 ст. л. сахара",
          "1 ч. л. сушёного майорана",
          "3 веточки укропа",
          "1 небольшая красная луковица"
        ],
        steps: [
          "Варите грибы 7 минут.",
          "Маринад с майораном и луком прокипятите.",
          "Добавьте грибы, уложите укроп, выдержите 6 часов." 
        ]
      }
    }
  },
  {
    id: "valuy-prep",
    mushroom: "Russula foetens",
    tags: ["tradition", "lenten", "forest"],
    acidGoal: 2.65,
    restHours: 72,
    locale: {
      de: {
        name: "Valui nach Klosterart",
        intro: "Vorblanchiert, dann mit Meerrettich und Blättern der Kirsche.",
        ingredients: [
          "800 g Valui-Russula",
          "420 ml Wasser",
          "160 ml 6%-Essig",
          "2 EL Salz, 1 EL Zucker",
          "5 Blätter Kirsche",
          "1 EL geriebener Meerrettich",
          "5 Knoblauchzehen"
        ],
        steps: [
          "Pilze 48 Stunden wässern.",
          "20 Minuten kochen, Wasser wechseln.",
          "Marinade 7 Minuten kochen, Blätter, Meerrettich, Knoblauch zugeben.",
          "Heiß abfüllen, 72 Stunden ziehen lassen." 
        ]
      },
      en: {
        name: "Monastery-Style Valui",
        intro: "Pre-soaked mushrooms with cherry leaves and horseradish.",
        ingredients: [
          "800 g valui russula",
          "420 ml water",
          "160 ml 6% vinegar",
          "2 tbsp salt, 1 tbsp sugar",
          "5 cherry leaves",
          "1 tbsp grated horseradish",
          "5 cloves garlic"
        ],
        steps: [
          "Soak mushrooms 48 hours.",
          "Boil 20 minutes, changing water.",
          "Cook marinade 7 minutes, add leaves, horseradish, garlic.",
          "Jar hot, mature 72 hours." 
        ]
      },
      ru: {
        name: "Валуи монастырские",
        intro: "Предварительное вымачивание, затем маринад с вишнёвыми листьями.",
        ingredients: [
          "800 г валуев",
          "420 мл воды",
          "160 мл 6 %-ного уксуса",
          "2 ст. л. соли, 1 ст. л. сахара",
          "5 листьев вишни",
          "1 ст. л. тёртого хрена",
          "5 зубчиков чеснока"
        ],
        steps: [
          "Вымачивайте грибы 48 часов.",
          "Варите 20 минут, заменяя воду.",
          "Маринад кипятите 7 минут, добавьте листья, хрен, чеснок.",
          "Разлейте горячим, выдержите 72 часа." 
        ]
      }
    }
  },
  {
    id: "puffball-garlic",
    mushroom: "Lycoperdon perlatum",
    tags: ["garlic", "family", "snack"],
    acidGoal: 2.5,
    restHours: 12,
    locale: {
      de: {
        name: "Riesenboviste in Knoblauchlake",
        intro: "Aus Kursk bekannte Beilage – nur junge Puffbälle verwenden.",
        ingredients: [
          "600 g junge Boviste",
          "260 ml Wasser",
          "120 ml 6%-Essig",
          "1 EL Salz, 1 EL Zucker",
          "6 Knoblauchzehen",
          "1 TL schwarzen Pfeffer",
          "2 EL Sonnenblumenöl"
        ],
        steps: [
          "Pilze schälen und in Stücke schneiden, 5 Minuten blanchieren.",
          "Marinade kochen, Öl und Knoblauch zugeben.",
          "Pilze einlegen, 12 Stunden kühlen." 
        ]
      },
      en: {
        name: "Garlic Puffball Pickle",
        intro: "Kursk-style garnish using only young puffballs.",
        ingredients: [
          "600 g young puffball mushrooms",
          "260 ml water",
          "120 ml 6% vinegar",
          "1 tbsp salt, 1 tbsp sugar",
          "6 cloves garlic",
          "1 tsp black pepper",
          "2 tbsp sunflower oil"
        ],
        steps: [
          "Peel and cube mushrooms, blanch 5 minutes.",
          "Boil marinade, add oil and garlic.",
          "Combine and chill 12 hours." 
        ]
      },
      ru: {
        name: "Дождевики чесночные",
        intro: "Курская закуска только из молодых дождевиков.",
        ingredients: [
          "600 г молодых дождевиков",
          "260 мл воды",
          "120 мл 6 %-ного уксуса",
          "1 ст. л. соли, 1 ст. л. сахара",
          "6 зубчиков чеснока",
          "1 ч. л. чёрного перца",
          "2 ст. л. подсолнечного масла"
        ],
        steps: [
          "Очистите и нарежьте грибы, бланшируйте 5 минут.",
          "Маринад кипятите, добавьте масло и чеснок.",
          "Соедините и охладите 12 часов." 
        ]
      }
    }
  }
];

export function getRecipesForLocale(locale) {
  return recipes.map((recipe) => {
    const fallback = recipe.locale.ru;
    const bundle = recipe.locale[locale] || fallback;
    return {
      ...recipe,
      text: bundle,
    };
  });
}
