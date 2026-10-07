// components/editorial-magazine/posts.ts

export type EditorialMagazineLanguage = "en" | "ru"

export type EditorialMagazinePostTranslation = {
  title?: string
  subtitle?: string
  description?: string
  category?: string
  issue?: string
  readTime?: string
  author?: string
  region?: string
  tags?: string[]
  featuredQuote?: string
  content?: string[]
}

export type EditorialMagazinePost = {
  slug: string
  title: string
  subtitle: string
  description: string
  date: string
  category: string
  issue: string
  readTime: string
  banner: string
  author: string
  region?: string
  tags: string[]
  featuredQuote?: string
  content: string[]
  translations?: Partial<
    Record<EditorialMagazineLanguage, EditorialMagazinePostTranslation>
  >
}

export const EDITORIAL_MAGAZINE_POSTS: EditorialMagazinePost[] = [
  {
    slug: "from-sicily-to-russia-a-life-cooked-with-love",
    title: "From Sicily to Russia: A Life Cooked with Love",
    subtitle:
      "A chef’s journey through Italian tradition, international kitchens, entrepreneurship and consultancy—guided by one enduring philosophy: ‘You must always cook for someone… otherwise, you are simply cooking.’",
    description:
      "An editorial journey through Chef Gaetano Zambito’s Italian roots, international kitchens, restaurant entrepreneurship, culinary consultancy, and a philosophy centered on cooking with genuine care for the person receiving the plate.",
    date: "2026-10-07",
    category: "Chef Profile & Culinary Journey",
    issue: "Issue 02",
    readTime: "10 min read",
    banner: "/images/gaetanocover.png",
    author: "Gastronomist International Editorial",
    region: "Italy · Russia",
    tags: [
      "Chef Gaetano Zambito",
      "Italian Cuisine",
      "Culinary Journey",
      "Restaurant Entrepreneurship",
      "Chef Consultancy",
      "Sicily",
      "Russia",
      "Gastronomist International",
    ],
    featuredQuote:
      "You must always cook for someone… otherwise, you are simply cooking.",
    content: [
      "For some chefs, cooking begins with technique. For others, it begins with ambition. For this Sicilian chef, it began much earlier—with the smell of Sunday soffritto, the warmth of an enormous family gathering, and the understanding that food acquires its deepest meaning when it is prepared for someone.",
      "His story stretches from Sicily to Friuli, Rimini and the Dolomites; from Spain and Germany to Iran; and eventually to Russia, where he would establish his own restaurant and redefine his professional identity. Yet geography tells only part of the story. At its heart is a career built around curiosity, adaptation and a deceptively simple belief:",
      "“You must always cook for someone… otherwise, you are simply cooking.”",
      "It is a philosophy he has passed on to trainees and students throughout his career. The secret ingredient, he tells them, is love. A guest may never see what happens behind the kitchen doors, but they can perceive whether genuine care has gone into what arrives at the table.",
      "[[heading:Where It Began: Sundays in Sicily]]",
      "His earliest culinary education did not take place in a professional kitchen.",
      "It happened at home in Sicily.",
      "Sunday mornings carried the aroma of soffritto. Family gatherings could bring together around forty relatives, transforming the preparation of lunch into a collective ritual. Cooking was not confined to one person or even to the women of the family. Everyone participated.",
      "His father had a particular responsibility: the fire.",
      "Anything destined for the grill belonged to him.",
      "Those memories established an idea that would remain with the chef throughout his career: food is inseparable from people. Cooking is not merely production; it is an act of hospitality, memory and connection.",
      "After completing his studies, he entered professional cooking through an osteria owned by his aunt. It gave him his first opportunity to get his hands dirty and understand the realities of restaurant work.",
      "But ambition soon demanded something larger.",
      "[[heading:Nine Months of Pots and Pans]]",
      "After approximately a year, he entered an important restaurant under the direction of an Executive Chef.",
      "The brigade numbered around 45 cooks.",
      "He was the newcomer.",
      "The professional kitchen of that period was uncompromising. Young cooks were expected to work, observe and learn. Advancement was earned through patience rather than demanded through ambition.",
      "For nine months, his principal responsibility was cleaning pots and pans.",
      "It was hardly glamorous, but it became part of his education.",
      "Eventually, he earned his opportunity on the seafood appetizer section. The transition represented more than a change of station. It marked the beginning of his development inside a structured professional brigade and strengthened an affinity for seafood that would repeatedly surface throughout his career.",
      "After two years, however, he wanted more.",
      "He headed north.",
      "[[heading:Sicily Meets Friuli]]",
      "His next chapter unfolded in Friuli, where he joined a hotel restaurant as Sous Chef.",
      "Two years later, he took command of the kitchen.",
      "It was here that his personal culinary language began to emerge.",
      "The flavors and memories of Sicily encountered the gastronomic traditions of Friuli and Veneto. Instead of treating these cuisines as separate identities, he began exploring what could happen when they were allowed to interact.",
      "Most importantly, he developed a characteristic that remains visible in his cooking today: the deliberate relationship between sweet and savory.",
      "Rather than sweetness appearing merely as contrast, it became part of the architecture of the dish—a tool capable of balancing salinity, acidity, richness and bitterness.",
      "That philosophy can still be seen clearly in the dishes that represent his cuisine.",
      "[[heading:Cous Cous al Pesto di Basilico · Crema di Gorgonzola · Cioccolato Fondente]]",
      "[[image:/images/couscous.png|Cous Cous al Pesto di Basilico · Crema di Gorgonzola · Cioccolato Fondente]]",
      "A dish that immediately communicates his approach to contrast.",
      "Couscous dressed with the aromatic freshness of basil pesto encounters the unmistakable intensity of Gorgonzola, while dark chocolate introduces bitterness, depth and an unexpected aromatic dimension.",
      "It is unconventional without abandoning Mediterranean references.",
      "The plate reflects the chef's willingness to challenge the traditional separation between savory and sweet while maintaining balance as the governing principle.",
      "[[heading:Rimini, Pizza and Another Education]]",
      "After nine years in northern Italy, the journey continued to Rimini, Emilia-Romagna, where he became involved with the local Italian chefs' association.",
      "There, another professional encounter expanded his understanding of Italian food.",
      "He met a talented pizzaiolo named Paolo.",
      "Already an experienced chef, he nevertheless asked Paolo to teach him pizza from the perspective of a genuine pizzaiolo.",
      "The distinction mattered.",
      "Making pizza as a cook, he discovered, was not the same as understanding it as a specialist. Fermentation, maturation, hydration, temperature and the interaction of different flours opened an entirely new field of study.",
      "It reinforced something his career had already taught him: experience should never become an excuse to stop learning.",
      "Restaurant work, meanwhile, brought him repeatedly back to one of his strongest culinary passions—fish and seafood.",
      "[[heading:Filetto di Tonno Scottato · Salsa allo Zafferano · Fichi Caramellati Salati]]",
      "[[image:/images/filetto.png|Filetto di Tonno Scottato · Salsa allo Zafferano · Fichi Caramellati Salati]]",
      "The tuna dish demonstrates the chef's characteristic balance of restraint and contrast.",
      "The fillet is seared with extra-virgin olive oil and butter, maintaining the integrity of the fish while creating richness on its exterior. Saffron sauce introduces perfume, warmth and Mediterranean identity.",
      "Then come the figs.",
      "Caramelized yet deliberately salted, they bridge sweetness and salinity—the recurring signature of the chef's cuisine.",
      "It is a plate in which technique supports the ingredient rather than competing with it.",
      "[[heading:Capesante Sous Vide · Gamberi · Salsa al Parmigiano · Olio al Basilico]]",
      "[[image:/images/capesante.png|Capesante Sous Vide · Gamberi · Salsa al Parmigiano · Olio al Basilico]]",
      "The same philosophy takes a different form with scallops and prawns.",
      "Here, sous-vide cooking provides precision and control, preserving the delicacy and texture of the scallops. Parmesan sauce brings Italian character and richness, while basil oil contributes freshness and aromatic clarity.",
      "It represents the intersection between classical Italian ingredients and contemporary technique—a cuisine that respects tradition without being restricted by it.",
      "[[heading:Between the Riviera and the Dolomites]]",
      "Professional life became seasonal.",
      "Summers were spent along the Romagna Riviera, winters in the Dolomites.",
      "Twelve seasons followed.",
      "Then economics changed the direction of his career.",
      "Restaurants were increasingly restructuring their labor models in pursuit of lower operating costs, and eventually he lost his position.",
      "By then, he had recently become a father.",
      "What initially appeared to be professional instability ultimately became the beginning of his international career.",
      "He left Italy.",
      "[[heading:Spain, Germany and Iran]]",
      "Contracts took him first to Spain, then Germany, and later Iran.",
      "The assignments were relatively short, but their influence was considerable.",
      "International kitchens revealed differences not only in ingredients and recipes but also in organization, culture, expectations and the way people understand hospitality.",
      "Travel began to broaden the chef beyond the boundaries of regional Italian cuisine.",
      "Yet professional growth came with a personal cost: distance from his family.",
      "Eventually, he decided it was time to return to them.",
      "The destination was Chelyabinsk, Russia.",
      "He arrived without knowing Russian.",
      "Within a week, he was working in one of the city's leading restaurants.",
      "[[heading:Building an Italian Identity in Russia]]",
      "Six months after his arrival, he moved to another restaurant in Chelyabinsk, remaining there for approximately nine months before another opportunity took him to Ekaterinburg.",
      "There, he managed the kitchen of an Italian restaurant with Italian ownership.",
      "Then came the decisive move.",
      "He returned to Chelyabinsk and opened his own trattoria and pizzeria.",
      "What began as a personal project became an established restaurant, celebrating its ninth anniversary on September 23.",
      "Running his own operation added another dimension to his professional identity. The chef was no longer responsible solely for food. Cuisine had to coexist with purchasing, staffing, consistency, costs, guest expectations and commercial sustainability.",
      "His experience subsequently expanded to Magnitogorsk, where he developed another project as a Brand Chef, while his involvement with an international culinary association led to his role as an Ambassador of Taste.",
      "[[heading:The Dishes as a Culinary Autobiography]]",
      "Look closely at the chef's plates and the geography of his career begins to emerge.",
      "Mediterranean ingredients remain present, but they are interpreted through years of movement, experimentation and exposure to different culinary environments.",
      "[[heading:Filetto di Manzo · Salsa ai Mirtilli · Bouquet di Verdure al Vapore]]",
      "[[image:/images/manzo.png|Filetto di Manzo · Salsa ai Mirtilli · Bouquet di Verdure al Vapore]]",
      "The beef fillet presents another expression of the chef's sweet-savory signature.",
      "The richness and depth of beef are contrasted by the fruit acidity and sweetness of a blueberry sauce, while a bouquet of steamed carrots, zucchini and potatoes provides a restrained vegetable accompaniment.",
      "It is a composition based on contrast without excess: meat, fruit, vegetables and sauce, each retaining a recognizable identity.",
      "And the chef's philosophy does not disappear when the menu reaches dessert.",
      "[[heading:Arancia Caramellata · Gelato Plombir · Glassa al Balsamico]]",
      "[[image:/images/arancia.png|Arancia Caramellata · Gelato Plombir · Glassa al Balsamico]]",
      "Caramelized orange provides acidity, bitterness and sweetness. Plombir ice cream, familiar throughout Russia and Eastern Europe, introduces a distinctly different cultural reference, while balsamic glaze reconnects the composition with Italy.",
      "In a few elements, the dessert effectively summarizes the chef's journey: Italy and Russia meeting on the same plate.",
      "[[heading:From Chef to Consultant]]",
      "During the last two years, his work has increasingly moved between Russia and Rome.",
      "In Rome, he worked as a consultant for a restaurateur operating 32 restaurants.",
      "The assignment demanded a different perspective.",
      "Instead of looking only at what happened at the stove, he examined restaurants individually, identified weaknesses and opportunities, and collaborated with their chefs on menu development and profitability.",
      "It was the natural evolution of decades spent observing restaurants from almost every possible position: junior cook, chef, kitchen leader, restaurateur, Brand Chef and consultant.",
      "Today, that accumulated experience is becoming a project of its own.",
      "His ambition is to develop his work as a Consultant Chef, supporting restaurants during both start-up and restructuring, from culinary identity and menu development to operational improvement and profitability.",
      "The vision is international. Russia remains an important part of his professional world, but his attention is increasingly drawn toward opportunities elsewhere—particularly Asia.",
      "[[heading:Cooking for Someone]]",
      "There is an interesting symmetry to the journey.",
      "It began around a crowded family table in Sicily, with approximately forty relatives waiting for Sunday lunch and his father standing over the grill.",
      "Decades later, after professional brigades, seafood stations, hotels, pizzerias, seasonal kitchens, international contracts, restaurant ownership, brand development and consultancy, the essential idea has remained remarkably unchanged.",
      "Technique matters.",
      "Ingredients matter.",
      "Discipline, food cost, organization and profitability matter.",
      "But none of them, in his philosophy, represents the final purpose of cooking.",
      "The purpose is the person on the other side of the plate.",
      "That is why the principle he teaches young cooks may also be the simplest summary of his entire career:",
      "“You must always cook for someone… otherwise, you are simply cooking.”",
    ],
    translations: {
      ru: {
        title: "От Сицилии до России: жизнь, приготовленная с любовью",
        subtitle:
          "Путь шеф-повара через итальянские традиции, международные кухни, предпринимательство и консалтинг — с одной неизменной философией: «Нужно всегда готовить для кого-то… иначе вы просто готовите».",
        description:
          "Редакционная история профессионального пути Chef Gaetano Zambito — от сицилийских корней и международных кухонь до собственного ресторанного бизнеса, кулинарного консалтинга и философии приготовления с искренней заботой о человеке, для которого создаётся блюдо.",
        category: "Профиль шеф-повара и кулинарный путь",
        issue: "Выпуск 02",
        readTime: "10 минут чтения",
        author: "Редакция Gastronomist International",
        region: "Италия · Россия",
        tags: [
          "Chef Gaetano Zambito",
          "Итальянская кухня",
          "Кулинарный путь",
          "Ресторанное предпринимательство",
          "Кулинарный консалтинг",
          "Сицилия",
          "Россия",
          "Gastronomist International",
        ],
        featuredQuote:
          "Нужно всегда готовить для кого-то… иначе вы просто готовите.",
        content: [
          "Для одних шеф-поваров кулинария начинается с техники. Для других — с амбиций. Для этого сицилийского шефа всё началось гораздо раньше: с аромата воскресного софритто, тепла огромных семейных встреч и понимания того, что еда приобретает самый глубокий смысл, когда её готовят для кого-то.",
          "Его путь проходит от Сицилии к Фриули, Римини и Доломитам; от Испании и Германии к Ирану; и в итоге к России, где он открыл собственный ресторан и заново определил свою профессиональную идентичность. Но география рассказывает лишь часть истории. В её центре — карьера, построенная на любознательности, адаптации и обманчиво простой убеждённости:",
          "«Нужно всегда готовить для кого-то… иначе вы просто готовите».",
          "Эту философию он передавал стажёрам и студентам на протяжении всей карьеры. Секретный ингредиент, говорит он им, — любовь. Гость может никогда не увидеть, что происходит за дверями кухни, но способен почувствовать, была ли вложена настоящая забота в то, что оказалось на столе.",
          "[[heading:Где всё началось: воскресенья на Сицилии]]",
          "Его первое кулинарное образование проходило не на профессиональной кухне.",
          "Оно началось дома, на Сицилии.",
          "Воскресные утра были наполнены ароматом софритто. Семейные встречи могли собирать около сорока родственников, превращая приготовление обеда в общий ритуал. Готовка не была обязанностью одного человека и не ограничивалась женщинами семьи. Участвовали все.",
          "У его отца была особая ответственность — огонь.",
          "Всё, что предназначалось для гриля, было его зоной.",
          "Эти воспоминания сформировали идею, которая сопровождала шеф-повара всю карьеру: еда неотделима от людей. Готовка — это не просто производство; это акт гостеприимства, памяти и связи.",
          "После завершения учёбы он вошёл в профессиональную кулинарию через остерию, принадлежавшую его тёте. Там он впервые получил возможность по-настоящему погрузиться в работу и понять реальность ресторанной кухни.",
          "Но амбиции вскоре потребовали большего.",
          "[[heading:Девять месяцев кастрюль и сковород]]",
          "Примерно через год он пришёл в серьёзный ресторан под руководством Executive Chef.",
          "Бригада насчитывала около 45 поваров.",
          "Он был новичком.",
          "Профессиональная кухня того времени была бескомпромиссной. От молодых поваров ожидали работы, наблюдения и обучения. Продвижение нужно было заслужить терпением, а не требовать амбициями.",
          "В течение девяти месяцев его главной обязанностью было мыть кастрюли и сковороды.",
          "В этом было мало гламура, но это стало частью его образования.",
          "Со временем он получил возможность работать на секции рыбных и морских закусок. Этот переход означал больше, чем просто смену станции. Он стал началом развития внутри структурированной профессиональной бригады и укрепил любовь к рыбе и морепродуктам, которая неоднократно проявлялась в его дальнейшей карьере.",
          "Однако спустя два года ему захотелось большего.",
          "Он отправился на север.",
          "[[heading:Сицилия встречает Фриули]]",
          "Следующая глава его пути развернулась во Фриули, где он присоединился к ресторану при отеле в должности Sous Chef.",
          "Через два года он возглавил кухню.",
          "Именно здесь начал формироваться его собственный кулинарный язык.",
          "Вкусы и воспоминания Сицилии встретились с гастрономическими традициями Фриули и Венето. Вместо того чтобы воспринимать эти кухни как отдельные идентичности, он начал исследовать, что происходит, когда они взаимодействуют.",
          "Особенно важной стала характеристика, которая и сегодня заметна в его блюдах: осознанная связь сладкого и солёного.",
          "Сладость перестала быть лишь контрастом и стала частью архитектуры блюда — инструментом, способным балансировать солёность, кислотность, насыщенность и горечь.",
          "Эту философию и сегодня можно ясно увидеть в блюдах, представляющих его кухню.",
          "[[heading:Cous Cous al Pesto di Basilico · Crema di Gorgonzola · Cioccolato Fondente]]",
          "[[image:/images/couscous.png|Cous Cous al Pesto di Basilico · Crema di Gorgonzola · Cioccolato Fondente]]",
          "Блюдо, которое сразу показывает его подход к контрасту.",
          "Кускус с ароматной свежестью базиликового песто встречается с выразительной интенсивностью горгонзолы, а тёмный шоколад добавляет горечь, глубину и неожиданное ароматическое измерение.",
          "Композиция необычна, но не теряет средиземноморских ориентиров.",
          "Тарелка демонстрирует готовность шефа переосмысливать традиционную границу между солёным и сладким, сохраняя баланс главным принципом.",
          "[[heading:Римини, пицца и ещё одно образование]]",
          "После девяти лет на севере Италии путь продолжился в Римини, Эмилия-Романья, где он включился в работу местной ассоциации итальянских шеф-поваров.",
          "Там ещё одна профессиональная встреча расширила его понимание итальянской кухни.",
          "Он познакомился с талантливым пиццайоло по имени Паоло.",
          "Уже будучи опытным шефом, он всё же попросил Паоло обучить его пицце именно с точки зрения настоящего пиццайоло.",
          "Это различие имело значение.",
          "Он понял, что делать пиццу как повар — не то же самое, что понимать её как специалист. Ферментация, созревание теста, гидратация, температура и взаимодействие разных видов муки открыли совершенно новую область изучения.",
          "Это вновь подтвердило урок его карьеры: опыт никогда не должен становиться оправданием для прекращения обучения.",
          "Ресторанная работа тем временем снова и снова возвращала его к одной из главных кулинарных страстей — рыбе и морепродуктам.",
          "[[heading:Filetto di Tonno Scottato · Salsa allo Zafferano · Fichi Caramellati Salati]]",
          "[[image:/images/filetto.png|Filetto di Tonno Scottato · Salsa allo Zafferano · Fichi Caramellati Salati]]",
          "Блюдо из тунца показывает характерный для шефа баланс сдержанности и контраста.",
          "Филе обжаривается с оливковым маслом extra virgin и сливочным маслом, сохраняя структуру рыбы и создавая насыщенность снаружи. Шафрановый соус добавляет аромат, тепло и средиземноморскую идентичность.",
          "Затем появляются инжиры.",
          "Карамелизированные, но намеренно подсоленные, они соединяют сладость и солёность — повторяющуюся подпись его кухни.",
          "Это тарелка, в которой техника поддерживает ингредиент, а не соревнуется с ним.",
          "[[heading:Capesante Sous Vide · Gamberi · Salsa al Parmigiano · Olio al Basilico]]",
          "[[image:/images/capesante.png|Capesante Sous Vide · Gamberi · Salsa al Parmigiano · Olio al Basilico]]",
          "Та же философия принимает другую форму в блюде с морскими гребешками и креветками.",
          "Здесь sous-vide даёт точность и контроль, сохраняя деликатность и текстуру гребешков. Соус из пармезана добавляет итальянский характер и насыщенность, а базиликовое масло — свежесть и ароматическую чистоту.",
          "Это пересечение классических итальянских ингредиентов и современной техники — кухня, которая уважает традицию, но не ограничивается ею.",
          "[[heading:Между Ривьерой и Доломитами]]",
          "Профессиональная жизнь стала сезонной.",
          "Лето проходило на Романской Ривьере, зима — в Доломитах.",
          "Так продолжалось двенадцать сезонов.",
          "Затем экономические обстоятельства изменили направление карьеры.",
          "Рестораны всё чаще перестраивали модели занятости ради снижения операционных расходов, и в итоге он потерял свою позицию.",
          "К тому времени он недавно стал отцом.",
          "То, что сначала выглядело как профессиональная нестабильность, в итоге стало началом его международной карьеры.",
          "Он покинул Италию.",
          "[[heading:Испания, Германия и Иран]]",
          "Контракты привели его сначала в Испанию, затем в Германию, а позже в Иран.",
          "Эти проекты были относительно короткими, но оказали значительное влияние.",
          "Международные кухни показали различия не только в ингредиентах и рецептах, но и в организации, культуре, ожиданиях и понимании гостеприимства.",
          "Путешествия расширили профессиональный взгляд шефа за пределы региональной итальянской кухни.",
          "Но профессиональный рост имел личную цену — расстояние от семьи.",
          "В конце концов он решил, что пора вернуться к ним.",
          "Пунктом назначения стал Челябинск, Россия.",
          "Он приехал, не зная русского языка.",
          "Уже через неделю он работал в одном из ведущих ресторанов города.",
          "[[heading:Создание итальянской идентичности в России]]",
          "Через шесть месяцев после приезда он перешёл в другой ресторан Челябинска и проработал там около девяти месяцев, прежде чем новая возможность привела его в Екатеринбург.",
          "Там он руководил кухней итальянского ресторана с итальянскими владельцами.",
          "Затем последовал решающий шаг.",
          "Он вернулся в Челябинск и открыл собственную тратторию и пиццерию.",
          "То, что начиналось как личный проект, стало стабильным рестораном, отметившим девятую годовщину 23 сентября.",
          "Управление собственным заведением добавило новое измерение его профессиональной идентичности. Шеф отвечал уже не только за еду. Кухня должна была сосуществовать с закупками, персоналом, стабильностью, расходами, ожиданиями гостей и коммерческой устойчивостью.",
          "Позже его опыт расширился до Магнитогорска, где он развивал другой проект как Brand Chef, а участие в международной кулинарной ассоциации привело его к роли Ambassador of Taste.",
          "[[heading:Блюда как кулинарная автобиография]]",
          "Если внимательно посмотреть на тарелки шефа, в них начинает проявляться география его карьеры.",
          "Средиземноморские ингредиенты остаются заметными, но интерпретируются через годы движения, экспериментов и опыта в разных кулинарных средах.",
          "[[heading:Filetto di Manzo · Salsa ai Mirtilli · Bouquet di Verdure al Vapore]]",
          "[[image:/images/manzo.png|Filetto di Manzo · Salsa ai Mirtilli · Bouquet di Verdure al Vapore]]",
          "Филе говядины представляет ещё одно выражение характерного для шефа сочетания сладкого и солёного.",
          "Насыщенность и глубина говядины контрастируют с фруктовой кислотностью и сладостью черничного соуса, а букет из приготовленных на пару моркови, цукини и картофеля создаёт сдержанное овощное сопровождение.",
          "Это композиция, основанная на контрасте без излишеств: мясо, фрукты, овощи и соус сохраняют узнаваемую самостоятельность.",
          "И философия шефа не исчезает, когда меню доходит до десерта.",
          "[[heading:Arancia Caramellata · Gelato Plombir · Glassa al Balsamico]]",
          "[[image:/images/arancia.png|Arancia Caramellata · Gelato Plombir · Glassa al Balsamico]]",
          "Карамелизированный апельсин приносит кислотность, горечь и сладость. Мороженое пломбир, хорошо знакомое в России и Восточной Европе, вводит совершенно другую культурную ассоциацию, а бальзамическая глазурь вновь связывает композицию с Италией.",
          "Всего несколькими элементами десерт фактически суммирует путь шефа: Италия и Россия встречаются на одной тарелке.",
          "[[heading:От шеф-повара к консультанту]]",
          "В течение последних двух лет его работа всё чаще проходит между Россией и Римом.",
          "В Риме он работал консультантом у ресторатора, управляющего 32 ресторанами.",
          "Эта задача потребовала другого взгляда.",
          "Вместо того чтобы смотреть только на происходящее у плиты, он анализировал рестораны по отдельности, выявлял слабые стороны и возможности и сотрудничал с их шеф-поварами по вопросам разработки меню и прибыльности.",
          "Это стало естественным развитием десятилетий, проведённых в ресторанах почти во всех возможных ролях: младший повар, шеф, руководитель кухни, ресторатор, Brand Chef и консультант.",
          "Сегодня накопленный опыт превращается в самостоятельный проект.",
          "Его цель — развивать деятельность как Consultant Chef, поддерживая рестораны как на этапе запуска, так и при реструктуризации: от кулинарной идентичности и разработки меню до операционного улучшения и прибыльности.",
          "Видение международное. Россия остаётся важной частью его профессионального мира, но внимание всё больше направлено на возможности в других регионах — особенно в Азии.",
          "[[heading:Готовить для кого-то]]",
          "В этом пути есть интересная симметрия.",
          "Он начался за переполненным семейным столом на Сицилии, где около сорока родственников ждали воскресного обеда, а его отец стоял у гриля.",
          "Десятилетия спустя — после профессиональных бригад, рыбных станций, отелей, пиццерий, сезонных кухонь, международных контрактов, собственного ресторана, бренд-разработки и консалтинга — главная идея осталась удивительно неизменной.",
          "Техника имеет значение.",
          "Ингредиенты имеют значение.",
          "Дисциплина, food cost, организация и прибыльность имеют значение.",
          "Но ни один из этих факторов, согласно его философии, не является конечной целью приготовления пищи.",
          "Цель — человек по другую сторону тарелки.",
          "Именно поэтому принцип, которому он учит молодых поваров, возможно, является самым простым итогом всей его карьеры:",
          "«Нужно всегда готовить для кого-то… иначе вы просто готовите».",
        ],
      },
    },
  },
  {
    slug: "yulia-antonova-mystic-mask-art-culture-creative-expression",
    title: "Yulia Antonova — Mystic Mask",
    subtitle:
      "Contemporary Abstract Artist · Author · Poet · Cultural Diplomacy Ambassador of Gastronomist International",
    description:
      "An editorial portrait of Yulia Antonova, known creatively as Mystic Mask — a contemporary abstract artist, author, poet, and cultural figure whose journey connects visual art, literature, music, cultural diplomacy, and creative expression.",
    date: "2026-09-23",
    category: "Art & Cultural Diplomacy",
    issue: "Issue 01",
    readTime: "8 min read",
    banner: "/images/mask.png",
    author: "Gastronomist International Editorial",
    region: "Russia · Crimea",
    tags: [
      "Yulia Antonova",
      "Mystic Mask",
      "Contemporary Art",
      "Abstract Art",
      "Cultural Diplomacy",
      "Poetry",
      "Creative Expression",
      "Gastronomist International",
    ],
    featuredQuote: "She creates with love.",
    content: [
      "Yulia Antonova, known by her creative pseudonym Mystic Mask, is a contemporary abstract artist, author, poet, and cultural figure whose life and work bring together visual art, literature, cultural diplomacy, and creative expression.",

      "She serves as Vice President of the Union of Abstract Artists of Russia and heads its branch in the Republic of Crimea. She is also an Honorary Member of the I.K. Aivazovsky Academy of Arts.",

      "Beyond visual art, Yulia is an author and poet and a member of the Russian Union of Writers.",

      "Her international cultural involvement includes her recognition as an Honorary Member and Ambassador of Cultural Diplomacy of Gastronomist International, as well as an Honorary Member of the International Alliance of Professional Chefs.",

      "Early Life and Education",

      "Yulia Antonova was born in 1976 in Crimea.",

      "From 1984 to 1993, she studied at School No. 2 in Alushta. In 1993, she graduated with honors from professional secretarial and typing courses.",

      "From 1996 to 2003, she studied at a university in Simferopol, graduating with a professional qualification in Law. From 1994 to 2011, she worked professionally in her field.",

      "Today, she continues to pursue additional education, reflecting her long-standing commitment to personal and professional development.",

      "A Life Surrounded by Art",

      "Creativity has been an integral part of Yulia's life since childhood.",

      "From 1986 to 1993, she attended and graduated from art school, developing the artistic foundation that would later become central to her identity as a contemporary abstract artist.",

      "Her creative interests, however, have never been limited to painting.",

      "Between 1988 and 1992, she completed the course “Theory of Journalistic Mastery” at the press center of the Alushta Center for Children and Youth Creativity. During this period, she wrote articles for the newspaper Alushtinsky Vestnik.",

      "In 1993, she worked in local television, where she hosted her own program.",

      "Her exploration of the arts continued decades later. From 2020 to 2023, she studied piano at music school, further expanding her relationship with artistic expression through music.",

      "Mystic Mask and the World of Abstraction",

      "As Mystic Mask, Yulia Antonova has dedicated a significant part of her life to abstract art.",

      "Her works are characterized by expressive color, movement, emotion, and predominantly uplifting tonalities. Through combinations of color and abstraction, she seeks to create works that communicate positive emotions and invite viewers into an imaginative visual world.",

      "For Yulia, painting is more than a decorative or technical practice. It is deeply connected with emotion, personal energy, and her understanding of the relationship between art and human well-being.",

      "She has studied aspects of intermodal expressive arts therapy and art therapy, influences that have contributed to her personal artistic philosophy.",

      "Yulia describes her paintings as symbolic talismans created with positive intention. Within her artistic philosophy, they are intended to evoke feelings associated with well-being, love, prosperity, good fortune, happiness, and positive energy.",

      "Each work is conceived as an individual creation with its own character and emotional identity.",

      "At the heart of her practice is a simple principle: She creates with love.",

      "Art, Culture and International Recognition",

      "Yulia Antonova has participated in international exhibitions and has received recognition in international artistic competitions and exhibitions.",

      "Her paintings are held in private collections in Russia, Italy, France, and Germany, extending the presence of her work beyond her home country.",

      "Alongside her artistic practice, her involvement in cultural organizations reflects a broader commitment to strengthening relationships between people through creativity and cultural exchange.",

      "As an Honorary Member and Ambassador of Cultural Diplomacy of Gastronomist International, she represents a connection between the worlds of art, culture, international collaboration, and gastronomy.",

      "Beyond the Canvas",

      "Yulia maintains an active lifestyle, practices Eastern martial arts, and speaks several foreign languages.",

      "She currently lives in Alushta, continuing her artistic, literary, cultural, and educational activities.",

      "Her journey has moved through many forms of expression — painting, journalism, television, literature, poetry, music, and cultural diplomacy — yet creativity remains the common thread connecting them all.",

      "For Yulia Antonova, art is not simply something to observe.",

      "It is a way to communicate emotion, create connections, explore the human experience, and bring positive expression into people's lives.",

      "Through Mystic Mask, she continues to invite audiences into a world where color, imagination, emotion, and abstraction meet — and where every canvas carries its own story.",
    ],
    translations: {
      ru: {
        title: "Юлия Антонова — Mystic Mask",
        subtitle:
          "Современный художник-абстракционист · Автор · Поэт · Посол культурной дипломатии Gastronomist International",
        description:
          "Редакционный портрет Юлии Антоновой, известной под творческим псевдонимом Mystic Mask — современного художника-абстракциониста, автора, поэта и деятеля культуры, чей путь объединяет изобразительное искусство, литературу, музыку, культурную дипломатию и творческое самовыражение.",
        category: "Искусство и культурная дипломатия",
        issue: "Выпуск 01",
        readTime: "8 минут чтения",
        author: "Редакция Gastronomist International",
        region: "Россия · Крым",
        tags: [
          "Юлия Антонова",
          "Mystic Mask",
          "Современное искусство",
          "Абстрактное искусство",
          "Культурная дипломатия",
          "Поэзия",
          "Творческое самовыражение",
          "Gastronomist International",
        ],
        featuredQuote: "Она создаёт с любовью.",
        content: [
          "Юлия Антонова, известная под творческим псевдонимом Mystic Mask, — современный художник-абстракционист, автор, поэт и деятель культуры, чья жизнь и творчество объединяют изобразительное искусство, литературу, культурную дипломатию и творческое самовыражение.",

          "Она занимает должность вице-президента Союза абстракционистов России и руководит его филиалом в Республике Крым. Также она является Почётным членом Академии искусств имени И. К. Айвазовского.",

          "Помимо изобразительного искусства, Юлия является автором и поэтом, а также членом Российского союза писателей.",

          "Её международная культурная деятельность включает признание в качестве Почётного члена и Посла культурной дипломатии Gastronomist International, а также Почётного члена Международного альянса профессиональных кулинаров.",

          "Ранние годы и образование",

          "Юлия Антонова родилась в 1976 году в Крыму.",

          "С 1984 по 1993 год она обучалась в школе № 2 города Алушты. В 1993 году с отличием окончила профессиональные курсы секретарей-машинисток.",

          "С 1996 по 2003 год Юлия обучалась в университете в Симферополе и получила профессиональную квалификацию по специальности «Юриспруденция». С 1994 по 2011 год она работала по специальности.",

          "Сегодня она продолжает получать дополнительное образование, демонстрируя неизменное стремление к личностному и профессиональному развитию.",

          "Жизнь, окружённая искусством",

          "Творчество является неотъемлемой частью жизни Юлии с самого детства.",

          "С 1986 по 1993 год она обучалась в художественной школе и успешно её окончила, сформировав творческую основу, которая впоследствии стала важной частью её идентичности как современного художника-абстракциониста.",

          "Однако её творческие интересы никогда не ограничивались только живописью.",

          "С 1988 по 1992 год она прошла курс «Теория журналистского мастерства» при пресс-центре Алуштинского центра детского и юношеского творчества. В этот период она писала статьи для газеты «Алуштинский вестник».",

          "В 1993 году Юлия работала на местном телевидении, где вела собственную программу.",

          "Спустя десятилетия её исследование различных форм искусства продолжилось. С 2020 по 2023 год она обучалась игре на фортепиано в музыкальной школе, расширяя своё творческое самовыражение через музыку.",

          "Mystic Mask и мир абстракции",

          "Под творческим псевдонимом Mystic Mask Юлия Антонова посвятила значительную часть своей жизни абстрактному искусству.",

          "Её работы отличаются выразительным цветом, движением, эмоциональностью и преимущественно светлой, позитивной тональностью. Через сочетание цвета и абстракции она стремится создавать произведения, передающие положительные эмоции и приглашающие зрителя в мир воображения.",

          "Для Юлии живопись — это не просто декоративная или техническая практика. Она глубоко связана с эмоциями, личной энергией и её пониманием взаимосвязи между искусством и благополучием человека.",

          "Она изучала аспекты интермодальной терапии выразительными искусствами и арт-терапии, что оказало влияние на формирование её собственной художественной философии.",

          "Юлия описывает свои картины как символические талисманы, создаваемые с позитивным намерением. В рамках её художественной философии они призваны вызывать чувства, связанные с благополучием, любовью, достатком, удачей, счастьем и положительной энергией.",

          "Каждая работа задумывается как самостоятельное произведение со своим характером и эмоциональной индивидуальностью.",

          "В основе её творческого подхода лежит простой принцип: она создаёт с любовью.",

          "Искусство, культура и международное признание",

          "Юлия Антонова принимала участие в международных выставках и получала признание на международных художественных конкурсах и выставочных проектах.",

          "Её картины находятся в частных коллекциях в России, Италии, Франции и Германии, расширяя присутствие её творчества за пределами родной страны.",

          "Наряду с художественной практикой её участие в культурных организациях отражает более широкое стремление укреплять связи между людьми посредством творчества и культурного обмена.",

          "В качестве Почётного члена и Посла культурной дипломатии Gastronomist International она представляет связь между мирами искусства, культуры, международного сотрудничества и гастрономии.",

          "За пределами холста",

          "Юлия ведёт активный образ жизни, занимается восточными единоборствами и владеет несколькими иностранными языками.",

          "В настоящее время она живёт в Алуште и продолжает художественную, литературную, культурную и образовательную деятельность.",

          "Её жизненный путь прошёл через множество форм самовыражения — живопись, журналистику, телевидение, литературу, поэзию, музыку и культурную дипломатию, однако творчество остаётся общей нитью, объединяющей все эти направления.",

          "Для Юлии Антоновой искусство — это не просто то, на что смотрят.",

          "Это способ передавать эмоции, создавать связи между людьми, исследовать человеческий опыт и приносить позитивное самовыражение в жизнь окружающих.",

          "Через Mystic Mask она продолжает приглашать зрителей в мир, где встречаются цвет, воображение, эмоции и абстракция — и где каждый холст несёт свою собственную историю.",
        ],
      },
    },
  },
]

export function getLocalizedEditorialMagazinePost(
  post: EditorialMagazinePost,
  language: EditorialMagazineLanguage = "en"
): EditorialMagazinePost {
  if (language === "en") {
    return post
  }

  const translation = post.translations?.[language]

  if (!translation) {
    return post
  }

  return {
    ...post,
    title: translation.title || post.title,
    subtitle: translation.subtitle || post.subtitle,
    description: translation.description || post.description,
    category: translation.category || post.category,
    issue: translation.issue || post.issue,
    readTime: translation.readTime || post.readTime,
    author: translation.author || post.author,
    region: translation.region || post.region,
    tags: translation.tags || post.tags,
    featuredQuote: translation.featuredQuote || post.featuredQuote,
    content: translation.content || post.content,
  }
}

export function getSortedEditorialMagazinePosts(
  language: EditorialMagazineLanguage = "en"
): EditorialMagazinePost[] {
  return [...EDITORIAL_MAGAZINE_POSTS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((post) => getLocalizedEditorialMagazinePost(post, language))
}

export function getLatestEditorialMagazinePost(
  language: EditorialMagazineLanguage = "en"
): EditorialMagazinePost {
  return getSortedEditorialMagazinePosts(language)[0]
}

export function getEditorialMagazinePostBySlug(
  slug: string,
  language: EditorialMagazineLanguage = "en"
): EditorialMagazinePost | undefined {
  const post = EDITORIAL_MAGAZINE_POSTS.find((item) => item.slug === slug)

  if (!post) {
    return undefined
  }

  return getLocalizedEditorialMagazinePost(post, language)
}