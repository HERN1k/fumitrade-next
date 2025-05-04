import { useTranslations } from "next-intl";
import { IChartData, IKnowledgeBaseItem, IServiceInMainPageProps } from "@/types";
import Constants from "@/constants";
export type MessageKey = Parameters<ReturnType<typeof useTranslations<never>>>[0];
export type TFunction = ReturnType<typeof useTranslations<never>>;

export const getServicesCollectionForMainPage = (t: TFunction): IServiceInMainPageProps[] => {
    if (typeof window === "undefined") return [];

    return [
        {
            id: Constants.SERVICES_PAGE_SERVICE_1_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_1_IMAGE,
            title: t("servicesWindow.services.service_1.title"),
            description: t("servicesWindow.services.service_1.description")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_2_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_2_IMAGE,
            title: t("servicesWindow.services.service_2.title"),
            description: t("servicesWindow.services.service_2.description")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_4_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_4_IMAGE,
            title: t("servicesWindow.services.service_4.title"),
            description: t("servicesWindow.services.service_4.description")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_5_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_5_IMAGE,
            title: t("servicesWindow.services.service_5.title"),
            description: t("servicesWindow.services.service_5.description")
        }
    ];
}

export const getServicesCollectionForHeader = (t: TFunction): string[] => {
    if (typeof window === "undefined") return [];
    
    return [
        t("servicesWindow.services.service_1.title"),
        t("servicesWindow.services.service_2.title"),
        t("servicesWindow.services.service_3.title"),
        t("servicesWindow.services.service_4.title"),
        t("servicesWindow.services.service_5.title")
    ];
}

export const chartData: IChartData[] = [
    {
        x: 2400,
        y: 2400,
    },
    {
        x: 1398,
        y: 2210,
    },
    {
        x: 5800,
        y: 2290,
    },
    {
        x: 3908,
        y: 2000,
    },
    {
        x: 4800,
        y: 2181,
    },
    {
        x: 3800,
        y: 2500,
    },
    {
        x: 2300,
        y: 4300,
    }
];

export const getKnowledgeItemsCollection = (): IKnowledgeBaseItem[] => {
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