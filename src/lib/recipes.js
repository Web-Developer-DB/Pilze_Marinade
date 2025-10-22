export const recipes = [
  {
    id: "champignon-white-wine",
    mushroom: "Agaricus bisporus",
    tags: ["mild", "starter", "allround"],
    acidGoal: 2.6,
    restHours: 24,
    locale: {
      de: {
        name: "Champignons in Weißwein-Kräuter-Marinade",
        intro: "Für gemischte Vorspeisenteller mit angenehm milder Säure.",
        ingredients: [
          "600 g kleine Champignons, geputzt",
          "250 ml Weißweinessig (5 %)",
          "350 ml Wasser",
          "2 EL Olivenöl",
          "1 Zweig Thymian, 1 Lorbeerblatt, 6 Pfefferkörner"
        ],
        steps: [
          "Champignons halbieren, in Salzwasser 3 Minuten blanchieren und abtropfen lassen.",
          "Essig, Wasser, Öl und Gewürze aufkochen, Pilze zugeben und 4 Minuten köcheln lassen.",
          "Heiß in sterile Gläser füllen, vollständig mit Sud bedecken und 24 Stunden durchziehen lassen."
        ]
      },
      en: {
        name: "White Wine Herb Champignons",
        intro: "Bright appetizer mushrooms with a gentle herbal lift.",
        ingredients: [
          "600 g button mushrooms, cleaned",
          "250 ml white wine vinegar (5%)",
          "350 ml water",
          "2 tbsp olive oil",
          "1 sprig thyme, 1 bay leaf, 6 peppercorns"
        ],
        steps: [
          "Halve mushrooms, blanch 3 minutes in salted water, drain well.",
          "Bring vinegar, water, oil, and spices to a boil; add mushrooms and simmer 4 minutes.",
          "Pack hot into sterilised jars, cover with brine, and rest 24 hours."
        ]
      },
      ru: {
        name: "Шампиньоны в травяном маринаде на белом вине",
        intro: "Нежная закуска с мягкой кислотностью и ароматом трав.",
        ingredients: [
          "600 г мелких шампиньонов, очищенных",
          "250 мл белого винного уксуса (5 %)",
          "350 мл воды",
          "2 ст. л. оливкового масла",
          "веточка тимьяна, лавровый лист, 6 горошин перца"
        ],
        steps: [
          "Разрежьте шампиньоны пополам, бланшируйте 3 минуты в подсоленной воде и обсушите.",
          "Смешайте уксус, воду, масло и специи, доведите до кипения, добавьте грибы и варите 4 минуты.",
          "Разлейте горячими в стерильные банки, полностью залейте маринадом и выдержите 24 часа."
        ]
      }
    }
  },
  {
    id: "porcini-forest-herb",
    mushroom: "Boletus edulis",
    tags: ["forest", "bold", "pantry"],
    acidGoal: 2.8,
    restHours: 48,
    locale: {
      de: {
        name: "Steinpilze mit Waldkräutern",
        intro: "Herb-würziger Sud für kräftige Waldpilze.",
        ingredients: [
          "500 g Steinpilz-Hüte, in Streifen",
          "280 ml Apfelessig (5 %)",
          "320 ml Wasser",
          "1 EL Honig",
          "Fichtenspitzen, Wacholderbeeren, schwarzer Pfeffer"
        ],
        steps: [
          "Pilze in Pfanne ohne Fett anrösten, bis Flüssigkeit verdampft.",
          "Essig, Wasser, Honig und Gewürze erhitzen, Pilze zugeben und 6 Minuten ziehen lassen.",
          "Heiß einfüllen, Gläser zweimal kurz auf den Kopf stellen und 2 Tage reifen lassen."
        ]
      },
      en: {
        name: "Forest Herb Porcini",
        intro: "Deep woodland flavours balanced with bright apple vinegar.",
        ingredients: [
          "500 g porcini caps, sliced",
          "280 ml apple cider vinegar (5%)",
          "320 ml water",
          "1 tbsp honey",
          "Spruce tips, juniper berries, black pepper"
        ],
        steps: [
          "Dry-sear porcini in a skillet until moisture evaporates.",
          "Heat vinegar, water, honey, and spices; add porcini and steep 6 minutes below a simmer.",
          "Jar while hot, invert twice to distribute herbs, cure for 48 hours."
        ]
      },
      ru: {
        name: "Белые грибы с лесными травами",
        intro: "Насыщенный аромат леса в кисло-сладком маринаде.",
        ingredients: [
          "500 г шляп белых грибов, нарезанных полосками",
          "280 мл яблочного уксуса (5 %)",
          "320 мл воды",
          "1 ст. л. мёда",
          "еловые почки, ягоды можжевельника, чёрный перец"
        ],
        steps: [
          "Обжарьте грибы без масла до испарения влаги.",
          "Подогрейте уксус, воду, мёд и специи, добавьте грибы и выдержите 6 минут.",
          "Горячими разложите по банкам, дважды переверните и дайте настояться 48 часов."
        ]
      }
    }
  },
  {
    id: "chanterelle-citrus",
    mushroom: "Cantharellus cibarius",
    tags: ["fruity", "golden", "grill"],
    acidGoal: 2.5,
    restHours: 12,
    locale: {
      de: {
        name: "Pfifferlinge mit Zitrus und Fenchel",
        intro: "Frischer Grillbegleiter mit feiner Anisnote.",
        ingredients: [
          "400 g Pfifferlinge, geputzt",
          "220 ml Weißweinessig (6 %)",
          "280 ml Wasser",
          "Schale einer Bio-Zitrone",
          "1 TL Fenchelsaat, 1 TL Salz, 1 TL Zucker"
        ],
        steps: [
          "Pfifferlinge gründlich waschen, trocken tupfen.",
          "Essig, Wasser, Zitronenschale und Gewürze aufkochen, Pilze zugeben und 3 Minuten ziehen lassen.",
          "In Gläser füllen, kalt stellen und nach 12 Stunden servieren."
        ]
      },
      en: {
        name: "Citrus Fennel Chanterelles",
        intro: "Bright picnic pickle with subtle anise.",
        ingredients: [
          "400 g chanterelles, cleaned",
          "220 ml white wine vinegar (6%)",
          "280 ml water",
          "Zest of one organic lemon",
          "1 tsp fennel seed, 1 tsp salt, 1 tsp sugar"
        ],
        steps: [
          "Wash chanterelles thoroughly and pat dry.",
          "Boil vinegar, water, zest, and spices; add mushrooms and steep 3 minutes off the heat.",
          "Jar, chill, and enjoy after a 12-hour rest."
        ]
      },
      ru: {
        name: "Лисички с цитрусом и фенхелем",
        intro: "Свежий гарнир с лёгким анисовым оттенком.",
        ingredients: [
          "400 г лисичек, очищенных",
          "220 мл белого винного уксуса (6 %)",
          "280 мл воды",
          "цедра одного лимона",
          "1 ч. л. семян фенхеля, по 1 ч. л. соли и сахара"
        ],
        steps: [
          "Тщательно промойте лисички и обсушите.",
          "Доведите до кипения уксус, воду, цедру и специи, добавьте грибы и выдержите 3 минуты.",
          "Разложите по банкам, охладите и подавайте через 12 часов."
        ]
      }
    }
  },
  {
    id: "shiitake-soy-mirin",
    mushroom: "Lentinula edodes",
    tags: ["umami", "fusion", "bento"],
    acidGoal: 2.7,
    restHours: 18,
    locale: {
      de: {
        name: "Shiitake in Soja-Mirin-Marinade",
        intro: "Perfekt für Bento-Boxen und Reisschalen.",
        ingredients: [
          "450 g frische Shiitake, entstielt",
          "240 ml Reisessig (5 %)",
          "200 ml Wasser",
          "60 ml Mirin, 40 ml helle Sojasauce",
          "Ingwer in Scheiben, Sesam, Chiliflocken"
        ],
        steps: [
          "Shiitake-Köpfe leicht einritzen, kurz dämpfen (2 Minuten).",
          "Essig, Wasser, Mirin, Sojasauce und Gewürze aufkochen, Shiitake einlegen.",
          "15 Minuten leise ziehen lassen, heiß abfüllen und 18 Stunden reifen lassen."
        ]
      },
      en: {
        name: "Soy Mirin Shiitake Pickles",
        intro: "Umami-packed mushrooms for rice bowls or noodles.",
        ingredients: [
          "450 g fresh shiitake caps",
          "240 ml rice vinegar (5%)",
          "200 ml water",
          "60 ml mirin, 40 ml light soy sauce",
          "Sliced ginger, sesame seeds, chile flakes"
        ],
        steps: [
          "Score caps, steam 2 minutes to soften.",
          "Boil vinegar, water, mirin, soy, and aromatics; immerse shiitake.",
          "Let gently simmer 15 minutes, jar hot, rest 18 hours."
        ]
      },
      ru: {
        name: "Шиитаке в соево-мириновой заливке",
        intro: "Умами-маринад для риса и лапши.",
        ingredients: [
          "450 г свежих шиитаке, без ножек",
          "240 мл рисового уксуса (5 %)",
          "200 мл воды",
          "60 мл мирана, 40 мл светлого соевого соуса",
          "ломтики имбиря, кунжут, хлопья перца"
        ],
        steps: [
          "Надрежьте шляпки и припарьте на пару 2 минуты.",
          "Смешайте уксус, воду, мирана, соус и специи, доведите до кипения и залейте грибы.",
          "Томите 15 минут без бурного кипения, разлейте горячими и выдержите 18 часов."
        ]
      }
    }
  },
  {
    id: "oyster-tarragon",
    mushroom: "Pleurotus ostreatus",
    tags: ["tender", "salad", "herbaceous"],
    acidGoal: 2.55,
    restHours: 16,
    locale: {
      de: {
        name: "Austernseitlinge mit Estragon",
        intro: "Samtige Textur, passt zu Kartoffelsalat oder Sandwiches.",
        ingredients: [
          "500 g Austernseitlinge, in Streifen",
          "230 ml Weißweinessig (5 %)",
          "320 ml Wasser",
          "2 EL Rapsöl",
          "Estragonzweige, rosa Pfeffer, Schalotte in Ringen"
        ],
        steps: [
          "Pilze in etwas Öl anbraten, bis sie leicht Farbe nehmen.",
          "Essig, Wasser und Gewürze kurz aufkochen, Pilze und Schalotte zugeben.",
          "5 Minuten sieden, zusammen mit dem Sud abfüllen und 16 Stunden durchziehen."
        ]
      },
      en: {
        name: "Tarragon Oyster Mushrooms",
        intro: "Silky texture ideal for salads and sandwiches.",
        ingredients: [
          "500 g oyster mushrooms, sliced",
          "230 ml white wine vinegar (5%)",
          "320 ml water",
          "2 tbsp canola oil",
          "Tarragon sprigs, pink peppercorns, sliced shallot"
        ],
        steps: [
          "Sauté mushrooms in a little oil until lightly golden.",
          "Boil vinegar, water, and spices; add mushrooms and shallot.",
          "Simmer 5 minutes, jar with brine, rest 16 hours."
        ]
      },
      ru: {
        name: "Вёшенка с эстрагоном",
        intro: "Нежные грибочки для салатов и сэндвичей.",
        ingredients: [
          "500 г вёшенок, нарезанных полосками",
          "230 мл белого винного уксуса (5 %)",
          "320 мл воды",
          "2 ст. л. рапсового масла",
          "веточки эстрагона, розовый перец, кольца шалота"
        ],
        steps: [
          "Обжарьте грибы в масле до лёгкого подрумянивания.",
          "Доведите уксус, воду и специи до кипения, добавьте грибы и шалот.",
          "Проварите 5 минут, разлейте вместе с маринадом и выдержите 16 часов."
        ]
      }
    }
  },
  {
    id: "portobello-balsamic",
    mushroom: "Agaricus bisporus (Portobello)",
    tags: ["burger", "sweet_savory", "mealprep"],
    acidGoal: 2.6,
    restHours: 24,
    locale: {
      de: {
        name: "Portobello mit Balsamico und Rosmarin",
        intro: "Kräftige Steaks für Burger, Sandwich oder Antipasti.",
        ingredients: [
          "4 Portobello-Kappen (ca. 500 g)",
          "260 ml Balsamico bianco (5 %)",
          "260 ml Wasser",
          "1 EL Ahornsirup",
          "Rosmarin, Knoblauchscheiben, schwarze Pfefferkörner"
        ],
        steps: [
          "Portobellos mehrmals einstechen, 5 Minuten vorgaren (Dampf oder Ofen).",
          "Essig, Wasser, Sirup und Gewürze erhitzen, Pilze 10 Minuten ziehen lassen.",
          "Gläser fest verschließen und 24 Stunden kühl durchziehen lassen."
        ]
      },
      en: {
        name: "Balsamic Rosemary Portobello Steaks",
        intro: "Smoky-sweet mushrooms ready for burgers or antipasti.",
        ingredients: [
          "4 portobello caps (about 500 g)",
          "260 ml white balsamic vinegar (5%)",
          "260 ml water",
          "1 tbsp maple syrup",
          "Rosemary sprigs, sliced garlic, black peppercorns"
        ],
        steps: [
          "Prick caps, pre-steam or bake 5 minutes.",
          "Warm vinegar, water, syrup, and spices; steep mushrooms 10 minutes.",
          "Seal in jars and chill 24 hours."
        ]
      },
      ru: {
        name: "Портобелло в бальзамическом маринаде с розмарином",
        intro: "Пикантные «стейки» для бургеров и закусок.",
        ingredients: [
          "4 шляпки портобелло (около 500 г)",
          "260 мл белого бальзамического уксуса (5 %)",
          "260 мл воды",
          "1 ст. л. кленового сиропа",
          "розмарин, ломтики чеснока, чёрный перец"
        ],
        steps: [
          "Наколите шляпки и припеките или припарьте 5 минут.",
          "Смешайте уксус, воду, сироп и специи, прогрейте и выдержите грибы 10 минут.",
          "Плотно закройте банки и охладите на 24 часа."
        ]
      }
    }
  },
  {
    id: "enoki-ginger-sesame",
    mushroom: "Flammulina velutipes",
    tags: ["crunchy", "ramen", "snack"],
    acidGoal: 2.4,
    restHours: 4,
    locale: {
      de: {
        name: "Enoki mit Ingwer und Sesam",
        intro: "Schnelle Pickles für Ramen oder Reisschalen.",
        ingredients: [
          "200 g Enoki-Bündel, Wurzelansatz entfernt",
          "180 ml Reisessig (4,5 %)",
          "120 ml Wasser",
          "1 TL Zucker, 1 TL Salz",
          "1 TL gerösteter Sesam, 1 TL frisch geriebener Ingwer"
        ],
        steps: [
          "Enoki auf 3 cm kürzen, kurz über Dampf blanchieren.",
          "Essig, Wasser, Zucker, Salz erhitzen, Ingwer einrühren.",
          "Enoki in Glas füllen, Sud angießen, Sesam darüberstreuen, 4 Stunden kühlen."
        ]
      },
      en: {
        name: "Ginger Sesame Enoki",
        intro: "Quick pickle with crunch for ramen bowls.",
        ingredients: [
          "200 g enoki mushrooms, trimmed",
          "180 ml rice vinegar (4.5%)",
          "120 ml water",
          "1 tsp sugar, 1 tsp salt",
          "1 tsp toasted sesame seeds, 1 tsp grated ginger"
        ],
        steps: [
          "Cut enoki to 3 cm lengths, steam-blanch briefly.",
          "Heat vinegar, water, sugar, salt; stir in ginger.",
          "Pack enoki, pour brine, sprinkle sesame, chill 4 hours."
        ]
      },
      ru: {
        name: "Эноки с имбирём и кунжутом",
        intro: "Быстрый хрустящий маринад для рамэна.",
        ingredients: [
          "200 г грибов эноки, обрезанных",
          "180 мл рисового уксуса (4,5 %)",
          "120 мл воды",
          "по 1 ч. л. сахара и соли",
          "1 ч. л. жареного кунжута, 1 ч. л. тёртого имбиря"
        ],
        steps: [
          "Обрежьте эноки до 3 см, кратко припарьте.",
          "Подогрейте уксус, воду, сахар, соль и добавьте имбирь.",
          "Разложите грибы, залейте и посыпьте кунжутом, охладите 4 часа."
        ]
      }
    }
  },
  {
    id: "shimeji-sake-citrus",
    mushroom: "Hypsizygus tessellatus",
    tags: ["citrus", "tapas", "light"],
    acidGoal: 2.5,
    restHours: 10,
    locale: {
      de: {
        name: "Shimeji mit Sake und Yuzu",
        intro: "Fruchtiger Snack, passt zu gebratenem Fisch.",
        ingredients: [
          "250 g Shimeji-Pilze, vom Stamm gelöst",
          "210 ml Reisessig (5 %)",
          "190 ml Wasser",
          "40 ml Sake, 1 EL Yuzu-Saft",
          "Kaffirlimettenblatt, 1 TL Zucker, 1 TL Salz"
        ],
        steps: [
          "Shimeji kurz in gesalzenem Wasser blanchieren, abtropfen lassen.",
          "Essig, Wasser, Sake, Yuzu, Zucker und Salz aufkochen, Limettenblatt zugeben.",
          "Pilze einlegen, 2 Minuten ziehen, heiß füllen und 10 Stunden ruhen lassen."
        ]
      },
      en: {
        name: "Sake Yuzu Shimeji",
        intro: "Bright citrus pickle for seafood platters.",
        ingredients: [
          "250 g shimeji mushrooms, separated",
          "210 ml rice vinegar (5%)",
          "190 ml water",
          "40 ml sake, 1 tbsp yuzu juice",
          "Kaffir lime leaf, 1 tsp sugar, 1 tsp salt"
        ],
        steps: [
          "Blanch shimeji briefly in salted water, drain.",
          "Boil vinegar, water, sake, yuzu, sugar, salt, add lime leaf.",
          "Steep mushrooms 2 minutes, jar hot, rest 10 hours."
        ]
      },
      ru: {
        name: "Симентжи в саке с юдзу",
        intro: "Цитрусовый маринад для рыбных блюд.",
        ingredients: [
          "250 г грибов симентжи, разобранных на соцветия",
          "210 мл рисового уксуса (5 %)",
          "190 мл воды",
          "40 мл сакэ, 1 ст. л. сока юдзу",
          "лист кафрского лайма, по 1 ч. л. сахара и соли"
        ],
        steps: [
          "Кратко бланшируйте грибы в подсоленной воде и обсушите.",
          "Доведите до кипения уксус, воду, сакэ, юдзу, сахар и соль, добавьте лист лайма.",
          "Опустите грибы на 2 минуты, разлейте горячими и оставьте на 10 часов."
        ]
      }
    }
  },
  {
    id: "morel-sherry",
    mushroom: "Morchella esculenta",
    tags: ["gourmet", "tapas", "festive"],
    acidGoal: 2.7,
    restHours: 36,
    locale: {
      de: {
        name: "Morcheln in Sherry-Essig",
        intro: "Feine Festtags-Beilage mit nussigem Aroma.",
        ingredients: [
          "300 g frische Morcheln, halbiert",
          "240 ml Sherryessig (7 %)",
          "220 ml Wasser",
          "20 ml trockener Sherry",
          "1 TL brauner Zucker, Muskatblüte, rosa Pfeffer"
        ],
        steps: [
          "Morcheln 10 Minuten wässern, gut ausspülen.",
          "Essig, Wasser, Sherry und Gewürze erhitzen, Morcheln 5 Minuten sanft simmernd garen.",
          "Gläser füllen, restlichen Sud aufteilen, 36 Stunden kühl reifen lassen."
        ]
      },
      en: {
        name: "Sherry-Pickled Morels",
        intro: "Luxurious garnish with nutty depth.",
        ingredients: [
          "300 g fresh morels, halved",
          "240 ml sherry vinegar (7%)",
          "220 ml water",
          "20 ml dry sherry",
          "1 tsp brown sugar, mace, pink peppercorns"
        ],
        steps: [
          "Soak morels 10 minutes, rinse thoroughly.",
          "Heat vinegar, water, sherry, spices; simmer morels gently 5 minutes.",
          "Jar with remaining brine, cure 36 hours chilled."
        ]
      },
      ru: {
        name: "Сморчки в шерри-уксусе",
        intro: "Праздничный деликатес с ореховыми нотами.",
        ingredients: [
          "300 г свежих сморчков, разрезанных пополам",
          "240 мл уксуса из хереса (7 %)",
          "220 мл воды",
          "20 мл сухого хереса",
          "1 ч. л. коричневого сахара, мацис, розовый перец"
        ],
        steps: [
          "Замочите сморчки на 10 минут и хорошо промойте.",
          "Подогрейте уксус, воду, херес и специи, томите грибы 5 минут.",
          "Разложите по банкам, залейте маринадом и выдержите 36 часов в холодильнике."
        ]
      }
    }
  },
  {
    id: "king-oyster-smoked-chili",
    mushroom: "Pleurotus eryngii",
    tags: ["smoky", "grill", "spicy"],
    acidGoal: 2.65,
    restHours: 20,
    locale: {
      de: {
        name: "Kräuterseitlinge mit Rauchpaprika",
        intro: "Herzhafte Beilage zu Grillgemüse oder Pulled Pilz.",
        ingredients: [
          "450 g Kräuterseitlinge, längs in Scheiben",
          "250 ml Rotweinessig (6 %)",
          "280 ml Wasser",
          "1 TL geräuchertes Paprikapulver, 1 TL Salz",
          "Lorbeer, Knoblauch, Chiliflocken"
        ],
        steps: [
          "Scheiben kurz anrösten, bis leichte Röstspuren entstehen.",
          "Essig, Wasser und Gewürze aufkochen, Pilze zugeben und 6 Minuten ziehen lassen.",
          "Heiß einfüllen, 20 Stunden ruhen lassen."
        ]
      },
      en: {
        name: "Smoked Paprika King Oyster",
        intro: "Bold, grill-friendly mushroom steaks.",
        ingredients: [
          "450 g king oyster mushrooms, sliced lengthwise",
          "250 ml red wine vinegar (6%)",
          "280 ml water",
          "1 tsp smoked paprika, 1 tsp salt",
          "Bay leaf, garlic, chile flakes"
        ],
        steps: [
          "Sear slices quickly for light char marks.",
          "Boil vinegar, water, spices; add mushrooms and steep 6 minutes.",
          "Pack hot and rest 20 hours."
        ]
      },
      ru: {
        name: "Эрингии с копчёной паприкой",
        intro: "Пикантная закуска для гриля и бургеров.",
        ingredients: [
          "450 г королевских вёшенок, нарезанных вдоль",
          "250 мл красного винного уксуса (6 %)",
          "280 мл воды",
          "1 ч. л. копчёной паприки, 1 ч. л. соли",
          "лавровый лист, чеснок, хлопья чили"
        ],
        steps: [
          "Быстро подрумяньте ломтики на сковороде.",
          "Доведите до кипения уксус, воду и специи, добавьте грибы и выдержите 6 минут.",
          "Разложите горячими и выдержите 20 часов."
        ]
      }
    }
  },
  {
    id: "lions-mane-chili-lime",
    mushroom: "Hericium erinaceus",
    tags: ["trendy", "piquant", "taco"],
    acidGoal: 2.6,
    restHours: 14,
    locale: {
      de: {
        name: "Igelstachelbart mit Limette und Chili",
        intro: "Fasrige Textur, ideal für Tacos oder Bowls.",
        ingredients: [
          "400 g Igelstachelbart, gezupft",
          "240 ml Weißweinessig (6 %)",
          "260 ml Wasser",
          "Saft von 1 Limette",
          "Chipotle in Adobo, 1 TL Rohrzucker, Koriandersamen"
        ],
        steps: [
          "Pilze trocken anrösten, bis sie sirupartig karamellisieren.",
          "Essig, Wasser, Limettensaft und Gewürze aufkochen, Pilze 4 Minuten garen.",
          "Mit Sud abfüllen und 14 Stunden durchziehen lassen."
        ]
      },
      en: {
        name: "Chile Lime Lion's Mane",
        intro: "Shredded mushroom carnitas with bright heat.",
        ingredients: [
          "400 g lion's mane mushroom, shredded",
          "240 ml white wine vinegar (6%)",
          "260 ml water",
          "Juice of one lime",
          "Chipotle in adobo, 1 tsp raw sugar, coriander seeds"
        ],
        steps: [
          "Dry-sear until lightly caramelised.",
          "Boil vinegar, water, lime, spices; cook mushrooms 4 minutes.",
          "Jar with brine and rest 14 hours."
        ]
      },
      ru: {
        name: "Гребешок ежовик с лаймом и чили",
        intro: "Пряная начинка для тако и боулов.",
        ingredients: [
          "400 г ежовика гребенчатого, разобранного на волокна",
          "240 мл белого винного уксуса (6 %)",
          "260 мл воды",
          "сок 1 лайма",
          "чили чипотле в адобо, 1 ч. л. тростникового сахара, семена кориандра"
        ],
        steps: [
          "Сухо обжарьте грибы до лёгкой карамелизации.",
          "Доведите уксус, воду, лайм и специи до кипения, тушите грибы 4 минуты.",
          "Разложите с маринадом и выдержите 14 часов."
        ]
      }
    }
  },
  {
    id: "maitake-maple-cider",
    mushroom: "Grifola frondosa",
    tags: ["wild", "sweet", "brunch"],
    acidGoal: 2.55,
    restHours: 18,
    locale: {
      de: {
        name: "Maitake mit Ahorn und Apfelcider",
        intro: "Süß-herbe Noten für Brunchplatten und Käseteller.",
        ingredients: [
          "350 g Maitake-Rosetten, in Stücke gezupft",
          "260 ml Apfelcidereessig (5 %)",
          "260 ml Wasser",
          "2 EL Ahornsirup",
          "Nelke, Zimtstange, Senfkörner"
        ],
        steps: [
          "Maitake kurz in der Pfanne anrösten.",
          "Essig, Wasser, Sirup und Gewürze zum Kochen bringen, Pilze 5 Minuten ziehen lassen.",
          "Heiß abfüllen und 18 Stunden ruhen lassen."
        ]
      },
      en: {
        name: "Maple Cider Maitake",
        intro: "Brunch-ready pickle with sweet apple notes.",
        ingredients: [
          "350 g maitake clusters, torn",
          "260 ml apple cider vinegar (5%)",
          "260 ml water",
          "2 tbsp maple syrup",
          "Clove, cinnamon stick, mustard seeds"
        ],
        steps: [
          "Quickly toast maitake pieces in a pan.",
          "Boil vinegar, water, syrup, spices; steep mushrooms 5 minutes.",
          "Jar hot and rest 18 hours."
        ]
      },
      ru: {
        name: "Майтаке в яблочно-кленовом маринаде",
        intro: "Сладко-пряный гарнир к сыру и бранчу.",
        ingredients: [
          "350 г грибов майтаке, разобранных на кусочки",
          "260 мл яблочного сидрового уксуса (5 %)",
          "260 мл воды",
          "2 ст. л. кленового сиропа",
          "гвоздика, палочка корицы, горчица зерном"
        ],
        steps: [
          "Быстро обжарьте грибы в сковороде.",
          "Доведите до кипения уксус, воду, сироп и специи, опустите грибы на 5 минут.",
          "Разлейте горячими и выдержите 18 часов."
        ]
      }
    }
  },
  {
    id: "nameko-miso-garlic",
    mushroom: "Pholiota nameko",
    tags: ["glossy", "noodles", "umami"],
    acidGoal: 2.45,
    restHours: 8,
    locale: {
      de: {
        name: "Nameko mit Knoblauch-Miso",
        intro: "Schleimige Struktur bleibt erhalten, perfekter Topping.",
        ingredients: [
          "300 g Nameko-Pilze, geputzt",
          "200 ml Reisessig (5 %)",
          "120 ml Wasser",
          "1 EL helle Misopaste",
          "Knoblauchzehe, Frühlingszwiebeln, 1 TL Sesamöl"
        ],
        steps: [
          "Nameko kurz blanchieren und abtropfen lassen.",
          "Essig, Wasser und Miso glattrühren, erhitzen, Knoblauch zufügen.",
          "Pilze in Glas geben, Sud angießen, Sesamöl und Frühlingszwiebel zufügen, 8 Stunden ziehen lassen."
        ]
      },
      en: {
        name: "Garlic Miso Nameko",
        intro: "Silky mushrooms for noodle bowls and rice.",
        ingredients: [
          "300 g nameko mushrooms, cleaned",
          "200 ml rice vinegar (5%)",
          "120 ml water",
          "1 tbsp light miso paste",
          "Garlic clove, scallions, 1 tsp sesame oil"
        ],
        steps: [
          "Blanch nameko briefly and drain.",
          "Stir vinegar, water, miso until smooth, heat with garlic.",
          "Pack mushrooms, pour brine, finish with sesame oil and scallions, rest 8 hours."
        ]
      },
      ru: {
        name: "Намэко с чесноком и мисо",
        intro: "Умами-топпинг для лапши и риса.",
        ingredients: [
          "300 г грибов намэко, очищенных",
          "200 мл рисового уксуса (5 %)",
          "120 мл воды",
          "1 ст. л. светлой мисо-пасты",
          "зубчик чеснока, зелёный лук, 1 ч. л. кунжутного масла"
        ],
        steps: [
          "Кратко бланшируйте намэко и обсушите.",
          "Смешайте уксус, воду и мисо до однородности, прогрейте с чесноком.",
          "Разложите грибы, залейте, добавьте масло и зелёный лук, выдержите 8 часов."
        ]
      }
    }
  },
  {
    id: "pioppino-rosemary",
    mushroom: "Agrocybe aegerita",
    tags: ["mediterranean", "pasta", "earthy"],
    acidGoal: 2.6,
    restHours: 24,
    locale: {
      de: {
        name: "Pioppino mit Rosmarin & Weißwein",
        intro: "Mediterrane Note für Pasta, Pizza oder Bruschetta.",
        ingredients: [
          "400 g Pioppino-Bündel, geputzt",
          "240 ml Weißweinessig (6 %)",
          "240 ml Wasser",
          "80 ml trockener Weißwein",
          "Rosmarin, schwarze Oliven, Zitronenzeste"
        ],
        steps: [
          "Pilze ganz lassen, in heißem Öl 2 Minuten schwenken.",
          "Essig, Wasser, Wein und Aromen aufkochen, Pilze zugeben und 5 Minuten ziehen lassen.",
          "Gläser heiß füllen, 24 Stunden reifen lassen."
        ]
      },
      en: {
        name: "Rosemary White Wine Pioppino",
        intro: "Mediterranean accent for pasta or bruschetta.",
        ingredients: [
          "400 g pioppino mushrooms, cleaned",
          "240 ml white wine vinegar (6%)",
          "240 ml water",
          "80 ml dry white wine",
          "Rosemary, black olives, lemon zest"
        ],
        steps: [
          "Keep mushrooms whole, sauté 2 minutes in hot oil.",
          "Boil vinegar, water, wine, aromatics; steep mushrooms 5 minutes.",
          "Jar hot and rest 24 hours."
        ]
      },
      ru: {
        name: "Пиоппино с розмарином и белым вином",
        intro: "Средиземноморский акцент для пасты и брускетты.",
        ingredients: [
          "400 г грибов пиоппино, очищенных",
          "240 мл белого винного уксуса (6 %)",
          "240 мл воды",
          "80 мл сухого белого вина",
          "розмарин, чёрные оливки, цедра лимона"
        ],
        steps: [
          "Оставьте грибы целыми, быстро обжарьте в масле 2 минуты.",
          "Доведите уксус, воду, вино и специи до кипения, опустите грибы на 5 минут.",
          "Разложите горячими и выдержите 24 часа."
        ]
      }
    }
  },
  {
    id: "hedgehog-mustard-dill",
    mushroom: "Hydnum repandum",
    tags: ["nordic", "earthy", "seafood"],
    acidGoal: 2.55,
    restHours: 30,
    locale: {
      de: {
        name: "Igelritterlinge mit Senf & Dill",
        intro: "Skandinavisch inspirierter Pilz für Räucherfischplatten.",
        ingredients: [
          "350 g Igelritterlinge, geputzt",
          "230 ml Weißweinessig (5 %)",
          "270 ml Wasser",
          "1 EL grober Senf",
          "Dillspitzen, Piment, rosa Pfeffer"
        ],
        steps: [
          "Pilze in Salzwasser 4 Minuten blanchieren.",
          "Essig, Wasser, Senf und Gewürze aufkochen, Pilze zugeben und 3 Minuten ziehen lassen.",
          "Heiß abfüllen, 30 Stunden kühl reifen lassen."
        ]
      },
      en: {
        name: "Mustard Dill Hedgehog Mushrooms",
        intro: "Nordic-style pickle for smoked fish boards.",
        ingredients: [
          "350 g hedgehog mushrooms, cleaned",
          "230 ml white wine vinegar (5%)",
          "270 ml water",
          "1 tbsp coarse mustard",
          "Fresh dill, allspice, pink pepper"
        ],
        steps: [
          "Blanch mushrooms 4 minutes in salted water.",
          "Boil vinegar, water, mustard, spices; steep mushrooms 3 minutes.",
          "Jar hot and chill 30 hours."
        ]
      },
      ru: {
        name: "Ежовик с горчицей и укропом",
        intro: "Скандинавский маринад для копчёной рыбы и хлеба.",
        ingredients: [
          "350 г ежа гиднума, очищенного",
          "230 мл белого винного уксуса (5 %)",
          "270 мл воды",
          "1 ст. л. зернистой горчицы",
          "укроп, душистый перец, розовый перец"
        ],
        steps: [
          "Бланшируйте грибы в подсоленной воде 4 минуты.",
          "Доведите до кипения уксус, воду, горчицу и специи, опустите грибы на 3 минуты.",
          "Разлейте горячими и выдержите 30 часов в холодильнике."
        ]
      }
    }
  },
  {
    id: "black-trumpet-vermouth",
    mushroom: "Craterellus cornucopioides",
    tags: ["aromatic", "aperitif", "gourmet"],
    acidGoal: 2.7,
    restHours: 48,
    locale: {
      de: {
        name: "Schwarze Trompeten mit Wermut & Orange",
        intro: "Dunkle, seidige Pilze mit bittersüßem Finish.",
        ingredients: [
          "200 g schwarze Trompeten, gereinigt",
          "220 ml Rotweinessig (6 %)",
          "200 ml Wasser",
          "40 ml trockener Wermut, 2 Streifen Orangenzeste",
          "1 TL Zucker, schwarzer Pfeffer"
        ],
        steps: [
          "Pilze gründlich säubern, kurz in Butter anschwitzen.",
          "Essig, Wasser, Wermut und Gewürze erhitzen, Pilze 3 Minuten ziehen lassen.",
          "Heiß abfüllen und 48 Stunden kühl reifen lassen."
        ]
      },
      en: {
        name: "Vermouth Orange Black Trumpets",
        intro: "Elegant bittersweet mushroom garnish.",
        ingredients: [
          "200 g black trumpet mushrooms, cleaned",
          "220 ml red wine vinegar (6%)",
          "200 ml water",
          "40 ml dry vermouth, 2 strips orange zest",
          "1 tsp sugar, black pepper"
        ],
        steps: [
          "Clean thoroughly, sauté briefly in butter.",
          "Heat vinegar, water, vermouth, spices; steep mushrooms 3 minutes.",
          "Jar hot and cure 48 hours refrigerated."
        ]
      },
      ru: {
        name: "Чёрные лисички с вермутом и апельсином",
        intro: "Благородная закуска с горько-сладким послевкусием.",
        ingredients: [
          "200 г чёрных лисичек, очищенных",
          "220 мл красного винного уксуса (6 %)",
          "200 мл воды",
          "40 мл сухого вермута, полоски апельсиновой цедры",
          "1 ч. л. сахара, чёрный перец"
        ],
        steps: [
          "Тщательно очистите грибы и слегка обжарьте в сливочном масле.",
          "Подогрейте уксус, воду, вермут и специи, опустите грибы на 3 минуты.",
          "Разлейте горячими и выдержите 48 часов в холодильнике."
        ]
      }
    }
  },
  {
    id: "wood-ear-sesame-chile",
    mushroom: "Auricularia auricula-judae",
    tags: ["asian", "salad", "crunchy"],
    acidGoal: 2.4,
    restHours: 6,
    locale: {
      de: {
        name: "Mu-Err mit Sesam & Chiliöl",
        intro: "Knackige Textur für kalte Nudelsalate.",
        ingredients: [
          "40 g getrocknete Mu-Err, eingeweicht (entspricht 400 g frisch)",
          "200 ml Reisessig (5 %)",
          "140 ml Wasser",
          "1 EL Sesamöl, 1 EL Chiliöl",
          "Knoblauch, Frühlingszwiebel, gerösteter Sesam"
        ],
        steps: [
          "Pilze 20 Minuten in heißem Wasser einweichen, in Streifen schneiden.",
          "Essig, Wasser und Knoblauch erhitzen, Pilze 2 Minuten ziehen lassen.",
          "Mit Sesam- und Chiliöl vermengen, 6 Stunden kalt ziehen lassen."
        ]
      },
      en: {
        name: "Sesame Chile Wood Ear",
        intro: "Crunchy addition to cold noodle salads.",
        ingredients: [
          "40 g dried wood ear mushrooms, soaked (about 400 g hydrated)",
          "200 ml rice vinegar (5%)",
          "140 ml water",
          "1 tbsp sesame oil, 1 tbsp chile oil",
          "Garlic, scallions, toasted sesame"
        ],
        steps: [
          "Soak mushrooms 20 minutes in hot water, slice.",
          "Warm vinegar, water, garlic; steep mushrooms 2 minutes.",
          "Toss with sesame and chile oil, chill 6 hours."
        ]
      },
      ru: {
        name: "Древесные ушки с кунжутом и чили",
        intro: "Хрустящий ингредиент для холодных салатов.",
        ingredients: [
          "40 г сушёных древесных грибов, замоченных (около 400 г)",
          "200 мл рисового уксуса (5 %)",
          "140 мл воды",
          "1 ст. л. кунжутного масла, 1 ст. л. масла чили",
          "чеснок, зелёный лук, жареный кунжут"
        ],
        steps: [
          "Замочите грибы на 20 минут и нарежьте.",
          "Подогрейте уксус, воду и чеснок, добавьте грибы на 2 минуты.",
          "Смешайте с маслами и охладите 6 часов."
        ]
      }
    }
  },
  {
    id: "honey-fungus-spice",
    mushroom: "Armillaria mellea",
    tags: ["traditional", "seasoned", "pantry"],
    acidGoal: 2.7,
    restHours: 72,
    locale: {
      de: {
        name: "Hallimasch im Gewürzsud",
        intro: "Klassischer Waldpilz, zwei Mal blanchiert für Sicherheit.",
        ingredients: [
          "600 g Hallimasch, Köpfe und feste Stiele",
          "260 ml Weinessig (6 %)",
          "340 ml Wasser",
          "1 EL Zucker, 1 TL Salz",
          "Zimt, Nelke, Piment, frischer Dill"
        ],
        steps: [
          "Pilze zwei Mal in frischem Wasser 5 Minuten blanchieren, jeweils Wasser wegschütten.",
          "Essig, Wasser, Zucker, Salz und Gewürze 5 Minuten kochen.",
          "Pilze einlegen, weitere 5 Minuten köcheln, heiß einfüllen und 72 Stunden ruhen lassen."
        ]
      },
      en: {
        name: "Spiced Honey Fungus",
        intro: "Traditional forest pickle with double blanch for safety.",
        ingredients: [
          "600 g honey fungus caps and firm stems",
          "260 ml wine vinegar (6%)",
          "340 ml water",
          "1 tbsp sugar, 1 tsp salt",
          "Cinnamon, clove, allspice, fresh dill"
        ],
        steps: [
          "Blanch mushrooms twice in fresh water for 5 minutes each, discard water.",
          "Boil vinegar, water, sugar, salt, spices for 5 minutes.",
          "Add mushrooms, simmer 5 minutes, jar hot and rest 72 hours."
        ]
      },
      ru: {
        name: "Опята в пряном маринаде",
        intro: "Классический лесной рецепт с двойным бланшированием.",
        ingredients: [
          "600 г опят, шляпки и плотные ножки",
          "260 мл винного уксуса (6 %)",
          "340 мл воды",
          "1 ст. л. сахара, 1 ч. л. соли",
          "корица, гвоздика, душистый перец, свежий укроп"
        ],
        steps: [
          "Дважды бланшируйте грибы по 5 минут в свежей воде, каждый раз воду выливайте.",
          "Прокипятите уксус, воду, сахар, соль и специи 5 минут.",
          "Добавьте грибы, тушите ещё 5 минут, разлейте и выдержите 72 часа."
        ]
      }
    }
  },
  {
    id: "saffron-milkcap-dill",
    mushroom: "Lactarius deliciosus",
    tags: ["slaw", "orange", "earthy"],
    acidGoal: 2.6,
    restHours: 24,
    locale: {
      de: {
        name: "Reizker mit Dill & Wacholder",
        intro: "Leuchtend orange, passt zu Wildgerichten.",
        ingredients: [
          "450 g Reizker, geputzt",
          "240 ml Weißweinessig (6 %)",
          "260 ml Wasser",
          "2 EL Dillspitzen",
          "4 Wacholderbeeren, 1 TL Salz, 1 TL Zucker"
        ],
        steps: [
          "Reizker in Scheiben schneiden, 4 Minuten blanchieren.",
          "Essig, Wasser, Gewürze aufkochen, Pilze zugeben und 5 Minuten ziehen lassen.",
          "Abfüllen und 24 Stunden durchziehen lassen."
        ]
      },
      en: {
        name: "Dill Juniper Saffron Milk Caps",
        intro: "Vibrant orange pickle for game platters.",
        ingredients: [
          "450 g saffron milk caps, cleaned",
          "240 ml white wine vinegar (6%)",
          "260 ml water",
          "2 tbsp chopped dill",
          "4 juniper berries, 1 tsp salt, 1 tsp sugar"
        ],
        steps: [
          "Slice mushrooms, blanch 4 minutes.",
          "Boil vinegar, water, spices; add mushrooms and steep 5 minutes.",
          "Jar and rest 24 hours."
        ]
      },
      ru: {
        name: "Рыжики с укропом и можжевельником",
        intro: "Яркая закуска к блюдам из дичи.",
        ingredients: [
          "450 г рыжиков, очищенных",
          "240 мл белого винного уксуса (6 %)",
          "260 мл воды",
          "2 ст. л. укропа",
          "4 ягоды можжевельника, по 1 ч. л. соли и сахара"
        ],
        steps: [
          "Нарежьте грибы и бланшируйте 4 минуты.",
          "Доведите уксус, воду и специи до кипения, опустите грибы на 5 минут.",
          "Разлейте и выдержите 24 часа."
        ]
      }
    }
  },
  {
    id: "straw-mushroom-lemongrass",
    mushroom: "Volvariella volvacea",
    tags: ["thai", "salad", "fresh"],
    acidGoal: 2.4,
    restHours: 6,
    locale: {
      de: {
        name: "Strohpilze mit Zitronengras & Koriander",
        intro: "Leichte Asia-Marinade für Sommerrollen.",
        ingredients: [
          "400 g Strohpilze (aus der Dose abspülen oder frisch)",
          "200 ml Reisessig (4,5 %)",
          "160 ml Wasser",
          "1 Stängel Zitronengras, 1 TL Palmzucker",
          "Koriandergrün, Birds Eye Chili"
        ],
        steps: [
          "Pilze halbieren, 2 Minuten blanchieren.",
          "Essig, Wasser, Zitronengras und Zucker erhitzen, Chili zugeben.",
          "Pilze einlegen, 6 Stunden im Kühlschrank marinieren."
        ]
      },
      en: {
        name: "Lemongrass Straw Mushrooms",
        intro: "Light Thai-inspired pickle for summer rolls.",
        ingredients: [
          "400 g straw mushrooms (rinsed canned or fresh)",
          "200 ml rice vinegar (4.5%)",
          "160 ml water",
          "1 stalk lemongrass, 1 tsp palm sugar",
          "Cilantro, bird's eye chili"
        ],
        steps: [
          "Halve mushrooms, blanch 2 minutes.",
          "Heat vinegar, water, lemongrass, sugar; add chili.",
          "Add mushrooms, chill 6 hours."
        ]
      },
      ru: {
        name: "Соломенные грибы с лемонграссом",
        intro: "Лёгкий тайский маринад для летних роллов.",
        ingredients: [
          "400 г соломенных грибов (консервированные промыть или свежие)",
          "200 мл рисового уксуса (4,5 %)",
          "160 мл воды",
          "стебель лемонграсса, 1 ч. л. пальмового сахара",
          "кинза, острый перец"
        ],
        steps: [
          "Разрежьте грибы пополам и бланшируйте 2 минуты.",
          "Подогрейте уксус, воду, лемонграсс и сахар, добавьте перец.",
          "Залейте грибы и охладите на 6 часов."
        ]
      }
    }
  }
];

export function getRecipesForLocale(locale) {
  return recipes.map((recipe) => {
    const fallback = recipe.locale.de;
    const bundle = recipe.locale[locale] || fallback;
    return {
      ...recipe,
      text: bundle,
    };
  });
}
