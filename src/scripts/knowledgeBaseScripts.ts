import { IKnowledgeBaseItem } from "@/types";
import { transitionToElement } from "@/scripts/appWrapperScripts";

export const getKnowledgeItemsCollection = (locale: string): IKnowledgeBaseItem[] => {
    if (locale === "en") {
        return ([
            {
                id: 1,
                title: "Phosphine",
                text:
                `
                <span class="span-font-weight-bold">Phosphine</span> (<span class="span-italic">hydrogen phosphorus</span>,
                <span class="span-uppercase">PH<sub>3</sub></span>) is a colorless, toxic gas with a characteristic
                smell of rotten fish or garlic. It is used as an effective <span class="span-color-secondary">fumigant</span> for pest control in closed spaces.
                <br><br>
                <span class="span-font-weight-bold">Phosphine Uses:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                <li>Destruction of collar pests in stored grain, in silos, elevators and chutes</li>
                <li>Mill treatment (gassing)</li>
                </ul>
                <br>
                <span class="span-font-weight-bold">Phosphine advantages:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                <li>High efficiency against a wide range of pests</li>
                <li>Does not leave toxic residues in products</li>
                <li>Penetrates into hard-to-reach places</li>
                </ul>
                `
                },
                {
                id: 2,
                title: "Fumigation",
                text:
                `
                <span class="span-font-weight-bold">Fumigation</span> (from Latin <span class="span-italic">fumigatio</span> — fumigation) —
                a method of combating pests of grain and grain products.
                Fumigation is carried out using toxic gas, which is released by special substances —
                <span class="span-color-secondary">fumigants</span>.
                Fumigation creates a poisonous environment around the object, which contributes to the destruction of pests.<br>
                <br>
                <span class="span-font-weight-bold">Fumigation carry out:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                <li>In warehouses for floor storage - necessarily with film covering</li>
                <li>In silos of elevators (metal and concrete)</li>
                <li>In sleeves for grain storage</li>
                </ul>
                <br>
                <span class="span-font-weight-bold">Fumigation methods:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                <li>Gas fumigants - fill the space, entering the object through special devices</li>
                <li>Smoke fumigation - is carried out by burning fumigants in special devices or using smoke bombs</li>
                </ul>
                <br>
                <span class="span-font-weight-bold">Fumigation is subject to:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                <li>Warehouses, greenhouses, elevators, vehicles</li>
                <li>Plant products (grain, fruits, vegetables, seeds, planting material)</li>
                <li>Vegetating plants (vineyards, citrus trees)</li>
                <li>Soil and rodent burrows</li>
                </ul>
                `
                },
                {
                id: 3,
                title: "Aerosol treatment equipment",
                text:
                `
                <span class="span-font-weight-bold">Aerosol treatment equipment:</span><br>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                <li>Hot and cold fog generators that spray insecticide solutions in the form of an aerosol</li>
                <li>Gas analyzers monitor the concentration of substances in the air</li>
                <li>Hot fog — spraying high-temperature aerosols (<span class="span-italic">5 - 50 microns</span>) using fog generators</li>
                <li>Cold fog — spraying room-temperature aerosols (<span class="span-italic">100 - 150 microns</span>) using fog generators</li>
                </ul>
                `
                },
                {
                id: 4,
                title: "Gasification",
                text:
                `
                <span class="span-font-weight-bold">Gasification</span> is the old name for <span class="span-color-secondary">fumigation</span>
                and aerosol disinfestation.
                `
                },
                {
                id: 5,
                title: "Disinsection",
                text:
                `
                <span class="span-font-weight-bold">Disinsection</span> (from French <span class="span-italic">des</span> — removal and Latin
                <span class="span-italic">insectum</span> — insect) — a set of measures to combat <span class="span-color-secondary">
                harmful insects and mites</span>.<br>
                <br>
                <span class="span-font-weight-bold">Disinsection is carried out to destroy:</span>

                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                <li>Insects that harm grain, food, and fodder stocks</li>
                <li>Parasites in storage facilities</li>
                </ul>
                `
                },
                {
                id: 6,
                title: "Deratation",
                text:
                `
                <span class="span-font-weight-bold">Deratation</span> is a set of measures aimed at
                <span class="span-color-secondary">destruction and prevention</span>
                of rodents using special poisonous substances (rodenticides).<br><br>
                <span class="span-font-weight-bold">Methods of deratization:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                <li>Mechanical - traps, traps, trapping</li>
                <li>Biological - use of natural enemies (cats, predators)</li>
                <li>Chemical - use of rodenticides (poisons)</li>
                <li>Electronic - ultrasonic type repellers</li>
                </ul>
                `
                },
                {
                id: 7,
                title: "Regulations and standards",
                text:
                `
                <span class="span-font-weight-bold">Regulations and standards</span> of fumigation works are regulated by the legislation of
                <span class="span-color-secondary">Ukraine</span> and international standards.<br><br>
                <span class="span-font-weight-bold">Main regulatory documents:</span>
                <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                <li>State sanitary rules and regulations</li>
                <li>International phytosanitary requirements</li>
                <li>Rules for the transportation and storage of chemicals</li>
                </ul>
                `
                },
                {
                id: 8,
                title: "Frequently asked questions",
                text:
                `
                <span class="span-font-weight-bold">❓ Is fumigation safe?</span><br>
                ✅ Yes, provided that all safety rules and regulations are followed.<br><br>
                <span class="span-font-weight-bold">❓ How long does the treatment last?</span><br>
                ✅ Depends on the object and type of fumigation (from several hours to several days).<br><br>
                <span class="span-font-weight-bold">❓ Is it possible to stay indoors after fumigation?</span><br>
                ✅ No, you must withstand the airing time and check the level of residual substances.<br>
                `
                }]);
            } else if (locale === "ru") {
        return ([
            { 
                id: 1, 
                title: "Фосфин", 
                text: 
                `
                <span class="span-font-weight-bold">Фосфин</span> (<span class="span-italic">фосфористый водород</span>, 
                <span class="span-uppercase">РН<sub>3</sub></span>) — это бесцветный, токсичный газ с характерным 
                запахом гнилой рыбы или чеснока. Используется как эффективный <span class="span-color-secondary">фумигант</span> для борьбы с вредителями в закрытых помещениях. 
                <br><br> 
                <span class="span-font-weight-bold">Применение фосфина:</span> 
                <ul style="margin-top: 0.25rem; margin-bottom: 0;"> 
                <li>Уничтожение амбарных вредителей в хранящемся на складах зерне в силосах, элеваторах и рукавах</li> 
                <li>Обработка (газация) мельниц</li> 
                </ul> 
                <br> 
                <span class="span-font-weight-bold">Преимущества фосфина:</span> 
                <ul style="margin-top: 0.25rem; margin-bottom: 0;"> 
                <li>Высокая эффективность против широкого спектра вредителей</li> 
                <li>Не оставляет токсичных остатков в продуктах</li> 
                <li>Проникает в труднодоступные места</li> 
                </ul>
                `
                }, 
                { 
                id: 2, 
                title: "Фумигация", 
                text: 
                `
                <span class="span-font-weight-bold">Фумигация</span> (от лат. <span class="span-italic">fumigatio</span> — окуривание) — 
                способ борьбы с вредителями зерна и зернопродуктов. 
                Фумигация производится с помощью токсичного газа, выделяемого специальными веществами. 
                <span class="span-color-secondary">фумигантами</span>. 
                Фумигация создает вокруг объекта ядовитую среду, способствующую уничтожению вредителей.<br> 
                <br> 
                <span class="span-font-weight-bold">Фумигацию проводят:</span> 
                <ul style="margin-top: 0.25rem; margin-bottom: 0;"> 
                <li>В складах напольного хранения обязательно с накрытием пленкой</li> 
                <li>В силосах элеваторов (металлических и бетонных)</li> 
                <li>В рукавах для хранения зерна</li> 
                </ul> 
                <br> 
                <span class="span-font-weight-bold">Методы фумигации:</span> 
                <ul style="margin-top: 0.25rem; margin-bottom: 0;"> 
                <li>Газовые фумиганты — заполняют пространство, поступая к объекту через специальные устройства</li> 
                <li>Окуривание дымом — осуществляется сжиганием фумигантов в специальных устройствах или с помощью дымовых шашек</li> 
                </ul> 
                <br> 
                <span class="span-font-weight-bold">Фумигации подлежат:</span> 
                <ul style="margin-top: 0.25rem; margin-bottom: 0;"> 
                <li>Складские помещения, теплицы, элеваторы, транспортные средства</li> 
                <li>Растительная продукция (зерно, фрукты, овощи, семена, посадочный материал)</li> 
                <li>Вегетирующие растения (виноградники, цитрусовые деревья)</li> 
                <li>Грунт и норы грызунов</li> 
                </ul> 
                `
                }, 
                { 
                id: 3, 
                title: "Оборудование для аэрозольной обработки", 
                text: 
                `
                <span class="span-font-weight-bold">Оборудование для аэрозольной обработки:</span><br> 
                <ul style="margin-top: 0.25rem; margin-bottom: 0;"> 
                <li>Генераторы горячего и холодного тумана, распыляющие растворы инсектицидов в виде аэрозоля</li> 
                <li>Газоанализаторы контролируют концентрацию веществ в воздухе</li> 
                <li>Горячий туман — распыление высокотемпературных аэрозолей (<span class="span-italic">5 - 50 микрон</span>) с помощью генераторов тумана</li> 
                <li>Холодный туман — распыление аэрозолей комнатной температуры (<span class="span-italic">100 - 150 микрон</span>) с помощью генераторов тумана</li> 
                </ul> 
                `
                }, 
                { 
                id: 4, 
                title: "Газация", 
                text: 
                `
                <span class="span-font-weight-bold">Газация</span> — это старое название <span class="span-color-secondary">фумигации</span> 
                и аэрозольной дезинсекции. 
                `
                },
                { 
                id: 5, 
                title: "Дезинсекция", 
                text: 
                `
                <span class="span-font-weight-bold">Дезинсекция</span> (от франц. <span class="span-italic">des</span> — удаление и лат. 
                <span class="span-italic">insectum</span> — насекомое) — комплекс мер по борьбе с <span class="span-color-secondary"> 
                вредными насекомыми и клещами</span>.<br> 
                <br> 
                <span class="span-font-weight-bold">Дезинсекцию проводят для уничтожения:</span> 
                <ul style="margin-top: 0.25rem; margin-bottom: 0;"> 
                <li>Насекомых, вредящих запасам зерна, пищевых продуктов, фуражных кормов</li> 
                <li>Паразитов в складских помещениях</li> 
                </ul> 
                `
                }, 
                { 
                id: 6, 
                title: "Дератизация", 
                text: 
                `
                <span class="span-font-weight-bold">Дератизация</span> — это комплекс мер, направленных на 
                <span class="span-color-secondary">уничтожение и профилактика</span> 
                грызунов с использованием специальных ядовитых веществ (родентицидов). 
                <span class="span-font-weight-bold">Методы дератизации:</span> 
                <ul style="margin-top: 0.25rem; margin-bottom: 0;"> 
                <li>Механический — ловушки, капканы, отлов</li> 
                <li>Биологический — использование природных врагов (кошки, хищники)</li> 
                <li>Химический — применение родентицидов (ядов)</li> 
                <li>Электронный — отпугиватели ультразвукового типа</li> 
                </ul> 
                `
                }, 
                { 
                id: 7, 
                title: "Регламенты и нормы", 
                text: 
                `
                <span class="span-font-weight-bold">Регламенты и нормы</span> фумигационных работ регулируются законодательством 
                <span class="span-color-secondary">Украины</span> и международными стандартами.<br><br> 
                <span class="span-font-weight-bold">Основные нормативные документы:</span> 
                <ul style="margin-top: 0.25rem; margin-bottom: 0;"> 
                <li>Государственные санитарные правила и нормы</li> 
                <li>Международные фитосанитарные требования</li> 
                <li>Правила транспортировки и хранения химических средств</li> 
                </ul> 
                `
                }, 
                { 
                id: 8, 
                title: "Частые вопросы", 
                text: 
                `
                <span class="span-font-weight-bold">❓ Безопасна ли фумигация?</span><br> 
                ✅ Да, при соблюдении всех правил и норм безопасности.<br><br> 
                <span class="span-font-weight-bold">❓ Сколько времени длится обработка?</span><br> 
                ✅ Зависит от объекта и типа фумигации (от нескольких часов до нескольких дней).<br><br> 
                <span class="span-font-weight-bold">❓ Можно ли находиться в помещении после фумигации?</span><br> 
                ✅ Нет, необходимо выдержать время проветривания и проверку уровня остаточных веществ.<br> 
                `
                }]);
            } else {
                return ([
            {
                id: 1,
                title: "Фосфін",
                text: `
                    <span class="span-font-weight-bold">Фосфін</span> (<span class="span-italic">фосфористий водень</span>, 
                    <span class="span-uppercase">РН<sub>3</sub></span>) — це безбарвний, токсичний газ із характерним 
                    запахом гнилої риби або часнику. Використовується як ефективний <span class="span-color-secondary">фумігант</span> для боротьби зі шкідниками у закритих приміщеннях.
                    <br><br>
                    <span class="span-font-weight-bold">Застосування фосфіну:</span>
                    <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                        <li>Знищення комірних шкідників у зерні, що зберігається на складах, у силосах, елеваторах та рукавах</li>
                        <li>Обробка (газація) млинів</li>
                    </ul> 
                    <br>
                    <span class="span-font-weight-bold">Переваги фосфіну:</span>
                    <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                        <li>Висока ефективність проти широкого спектра шкідників</li>
                        <li>Не залишає токсичних залишків у продуктах</li>
                        <li>Проникає у важкодоступні місця</li>
                    </ul>
                ` 
            },
            {
                id: 2,
                title: "Фумігація",
                text: `
                    <span class="span-font-weight-bold">Фумігація</span> (від лат. <span class="span-italic">fumigatio</span> — окурювання) — 
                    метод боротьби з шкідниками зерна та зернопродуктів.
                    Фумігація проводиться за допомогою токсичного газу, який виділяється спеціальними речовинами — 
                    <span class="span-color-secondary">фумігантами</span>.
                    Фумігація створює навколо об’єкта отруйне середовище, що сприяє знищенню шкідників.<br>
                    <br>
                    <span class="span-font-weight-bold">Фумігацію проводять:</span>
                    <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                        <li>У складах напільного зберігання — обов’язково з накриттям плівкою</li>
                        <li>У силосах елеваторів (металевих та бетонних)</li>
                        <li>У рукавах для зберігання зерна</li>
                    </ul>
                    <br>
                    <span class="span-font-weight-bold">Методи фумігації:</span>
                    <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                        <li>Газові фуміганти — заповнюють простір, поступаючи до об'єкта через спеціальні пристрої</li>
                        <li>Окурювання димом — здійснюється спалюванням фумігантів у спеціальних пристроях або за допомогою димових шашок</li>
                    </ul>
                    <br>
                    <span class="span-font-weight-bold">Фумігації підлягають:</span>
                    <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                        <li>Складські приміщення, теплиці, елеватори, транспортні засоби</li>
                        <li>Рослинна продукція (зерно, фрукти, овочі, насіння, посадковий матеріал)</li>
                        <li>Вегетуючі рослини (виноградники, цитрусові дерева)</li>
                        <li>Ґрунт та нори гризунів</li>
                    </ul>
                ` 
            },
            {
                id: 3,
                title: "Обладнання для аерозольної обробки",
                text: `
                    <span class="span-font-weight-bold">Обладнання для аерозольної обробки:</span><br>
                    <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                        <li>Генератори гарячого та холодного туману, що розпилюють розчини інсектицидів у вигляді аерозолю</li>
                        <li>Газоаналізатори контролюють концентрацію речовин у повітрі</li>
                        <li>Гарячий туман — розпилення високотемпературних аерозолів (<span class="span-italic">5 - 50 мікрон</span>) за допомогою генераторів туману</li>
                        <li>Холодний туман — розпилення аерозолів кімнатної температури (<span class="span-italic">100 - 150 мікрон</span>) за допомогою генераторів туману</li>
                    </ul>
                `
            },
            {
                id: 4,
                title: "Газація",
                text: `
                    <span class="span-font-weight-bold">Газація</span> — це стара назва <span class="span-color-secondary">фумігації</span> 
                    та аерозольної дезінсекції.
                `    
            },
            {
                id: 5,
                title: "Дезінсекція",
                text: `
                    <span class="span-font-weight-bold">Дезінсекція</span> (від франц. <span class="span-italic">des</span> — видалення та лат. 
                    <span class="span-italic">insectum</span> — комаха) — комплекс заходів із боротьби з <span class="span-color-secondary">
                    шкідливими комахами та кліщами</span>.<br>
                    <br>
                    <span class="span-font-weight-bold">Дезінсекцію проводять для знищення:</span>
    
                    <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                        <li>Комах, що шкодять запасам зерна, харчових продуктів, фуражних кормів</li>
                        <li>Паразитів у складських приміщеннях</li>
                    </ul>
                ` 
            },
            {
                id: 6,
                title: "Дератизація",
                text: `
                    <span class="span-font-weight-bold">Дератизація</span> — це комплекс заходів, спрямованих на 
                    <span class="span-color-secondary">знищення та профілактику</span> 
                    гризунів із використанням спеціальних отруйних речовин (родентицидів).<br><br>
                    <span class="span-font-weight-bold">Методи дератизації:</span>
                    <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                        <li>Механічний — пастки, капкани, відловлювання</li>
                        <li>Біологічний — використання природних ворогів (кішки, хижаки)</li>
                        <li>Хімічний — застосування родентицидів (отрут)</li>
                        <li>Електронний — відлякувачі ультразвукового типу</li>
                    </ul>
                `
            },
            {
                id: 7,
                title: "Регламенти та норми",
                text: `
                    <span class="span-font-weight-bold">Регламенти та норми</span> фумігаційних робіт регулюються законодавством 
                    <span class="span-color-secondary">України</span> та міжнародними стандартами.<br><br>
                    <span class="span-font-weight-bold">Основні нормативні документи:</span>
                    <ul style="margin-top: 0.25rem; margin-bottom: 0;">
                        <li>Державні санітарні правила та норми</li>
                        <li>Міжнародні фітосанітарні вимоги</li>
                        <li>Правила транспортування та зберігання хімічних засобів</li>
                    </ul>
                `
            },
            {
                id: 8,
                title: "Часті питання",
                text: `
                    <span class="span-font-weight-bold">❓ Чи безпечна фумігація?</span><br>
                    ✅ Так, за умови дотримання всіх правил та норм безпеки.<br><br>
                    <span class="span-font-weight-bold">❓ Скільки часу триває обробка?</span><br>
                    ✅ Залежить від об'єкта та типу фумігації (від кількох годин до кількох днів).<br><br>
                    <span class="span-font-weight-bold">❓ Чи можна перебувати в приміщенні після фумігації?</span><br>
                    ✅ Ні, необхідно витримати час провітрювання та перевірку рівня залишкових речовин.<br>
                `
            },
            
        ]);
    }
}

export const handleHashChange = () => {
    setTimeout(() => {
        if (typeof window === "undefined") return;

        const hash = window.location.hash;
        
        if (hash) {
            const section = document.getElementById(hash);
            
            if (section) {
                transitionToElement(section, "center");
            }
        }
    }, 250);
};