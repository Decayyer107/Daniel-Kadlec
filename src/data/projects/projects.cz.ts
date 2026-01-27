import type { ProjectType } from "@/app/types/project";

export const projectsCz: ProjectType[] = [
    {
        id: "1",
        link: "zahrada-smutku",
        title: "Zahrada smutku",
        subtitle: "UX/UI design webové stránky",
        description: "Zahrada smutku je pohřební služba působící v mém rodném městě. Na tvorbě tohoto webu jsem pracoval během své měsíční brigády v Technických službách města Most, které městské webové stránky spravují. Hlavním cílem bylo vytvořit přehledný, moderní a důstojný web, který se odliší od ostatních zastaralých městských stránek. Soustředil jsem se na jednoduchost, přístupnost a poskytnutí pouze těch nejdůležitějších informací, aby návštěvník našel vše potřebné snadno a bez zbytečností - obzvlášť v tak náročné životní situaci. Po dokončení návrhu i samotného vývoje byla správa webu předána zpět Technickým službám města Most pro další úpravy a aktualizace. To znamená, že nad stránkou již nemám přímou kontrolu.",
        technologies: ["figma", "css", "html"],

        image_preview: "/projects/zahrada-smutku/Preview.webp",
        image_preview_alt: "Úvodní stránka",

        image_main: "/projects/zahrada-smutku/Main.webp",
        image_main_alt: "Úvodní stránka",

        image_1: "/projects/zahrada-smutku/1.webp",
        image_1_alt: "Sekce, co dělat při úmrtí blízkého",

        image_2: "/projects/zahrada-smutku/2.webp",
        image_2_alt: "CTA a pokyny",

        image_3: "/projects/zahrada-smutku/3.webp",
        image_3_alt: "Legislativní stránka",

        image_4: "/projects/zahrada-smutku/4.webp",
        image_4_alt: "Kontakt sekce",

        technical_description: "Původně mi bylo zadáno vytvořit celý web s využitím Bootstrap šablony, aby bylo možné stránku v budoucnu snadno rozšiřovat. Po několika hodinách plánování a zkoumání, jak Bootstrap v rámci šablony funguje, jsem však dospěl k závěru, že tento přístup pro mě není vhodný. Měl jsem jasnou představu o tom, jak má výsledná stránka vypadat a fungovat, a potřeboval jsem naprostou kontrolu nad každým detailem.\n\nNakonec jsem použil pouze menší množství základních komponent a několik drobných animací z Bootstrapu, ale většinu kódu jsem vytvořil ručně od základů. Díky tomu jsem mohl web přizpůsobit přesně své vizi a zaměřit se na čistý, přehledný a technicky kvalitní výsledek.\n\nCelý web je plně responzivní a optimalizovaný pro různá zařízení i rozlišení obrazovek. Tento projekt mě přinutil vystoupit ze své komfortní zóny, opustit moderní frameworky a vrátit se zpět k čistému HTML a CSS.",

        anchorPlaceholder1: "zahradasmutku.cz",
        anchorTitle1: "Produkční stránka",
        anchor1: "https://zahradasmutku.cz",
        anchorPlaceholder2: "figma.com/design/zahrada-smutku",
        anchorTitle2: "Figma projekt",
        anchor2: "https://www.figma.com/design/GhnoCIPiUBwQ7e5r999HPE/Zahrada-smutkut---public?m=auto&t=gTyzgWSGHMGDxbyi-1",

        featured: false,
        category: ["design"],
    },
    {
        id: "2",
        link: "el-toro",
        title: "El Toro",
        subtitle: "Nezávislý redesign webu",
        description:
            "Na web restaurace El Toro jsem narazil při hledání inspirace a potenciálních zakázek. Jelikož se jedná o podnik, který osobně považuji za velmi kvalitní, okamžitě jsem si všiml prostoru, kde by web mohl lépe vizuálně reflektovat charakter a atmosféru samotné restaurace.\n\n" +
            "Redesign jsem vytvořil jako nezávislý, nekomerční návrh určený výhradně pro mé portfolio. Mým cílem bylo prohloubit dovednosti v oblasti UX/UI designu, práce s vizuální hierarchií, atmosférou značky a celkovým uživatelským zážitkem. Projekt jsem bral jako příležitost nejen zlepšit existující řešení, ale také si vyzkoušet nové přístupy a designová rozhodnutí.\n\n" +
            "Celý návrh vznikl bez jakékoliv spolupráce s restaurací El Toro a slouží výhradně jako ukázka mého designového přístupu a způsobu uvažování nad webem prémiové restaurace.",
        technologies: ["figma"],

        image_preview: "/projects/el-toro/1.png",
        image_preview_alt: "Úvodní sekce",

        image_main: "/projects/el-toro/1.png",
        image_main_alt: "Úvodní sekce",

        image_1: "/projects/el-toro/2.png",
        image_1_alt: "Sekce o nás",

        image_2: "/projects/el-toro/3.png",
        image_2_alt: "Menu CTA",

        image_3: "/projects/el-toro/4.png",
        image_3_alt: "Kontakt sekce",

        image_4: "/projects/el-toro/5.png",
        image_4_alt: "Menu stránka",

        technical_description: "Cílem bylo propojit výrazný, masitý charakter steakhouse restaurace s elegantním zážitkem, který El Toro nabízí. Proto jsem se záměrně posunul od původního chladného barevného ladění směrem k teplejším béžovým tónům, které působí přívětivěji a lépe podporují prémiovou atmosféru.\n\nTypografie je postavená na kombinaci patkového písma pro nadpisy a bezpatkového písma pro delší texty. Tato kombinace pomáhá vyvážit eleganci a sílu značky, zároveň ale zůstává dobře čitelná. Do pozadí jsem navíc přidal jemnou papírovou texturu, která vizuál změkčuje a dodává webu víc charakteru, aniž by působila rušivě. Celý redesign jsem uskutečnil v programu Figma.",

        anchorPlaceholder1: "figma.com/design/el-toro",
        anchorTitle1: "Figma projekt",
        anchor1: "https://www.figma.com/design/UWdnUn0FXxskeUzsYloTCX/El-Toro---public?node-id=0-1&t=02RugkSJglkrRER0-1",
        anchorPlaceholder2: "eltoromost.cz",
        anchorTitle2: "Originální web",
        anchor2: "https://eltoromost.cz",

        featured: true,
        category: ["design"],
    },
    {
        id: "3",
        link: "echos",
        title: "Echos",
        subtitle: "UX/UI koncept",
        description: "ECHOS je fiktivní digitální studio. Vytvořil jsem ho jako koncept, na kterém jsem si chtěl vyzkoušet, jak přemýšlím nad UX a UI jako celkem, ne jen nad vizuálem. Hlavní myšlenka je jednoduchá. Dobrý digitální design podle mě začíná rozhodnutími. Co má být vidět první, co je důležité, co může počkat a jak spolu jednotlivé části mluví. Součástí konceptu je i Signál. Je to fiktivní e-mailový zpravodaj, který jsem použil jako způsob, jak dát webu jasný směr a charakter. Není to marketingový prvek, ale spíš obsahová vrstva, kolem které se dá postavit struktura, navigace i tón textů. Celý projekt je ukázkou toho, jak přistupuju k UX a UI od rozvržení až po detaily v obsahu.",
        technologies: ["figma"],

        image_preview: "/projects/echos/main.png",
        image_preview_alt: "Náhled UX/UI konceptu ECHOS",

        image_main: "/projects/echos/main.png",
        image_main_alt: "Hlavní design",

        technical_description: "Na začátku jsem si vybral open source název a logo a rozhodl se, že se jich budu držet. Všechno ostatní jsem stavěl kolem nich, místo toho, abych si identitu upravoval podle sebe.\n\nChtěl jsem navrhnout jednoduchou navigaci a footer, které nebudou působit genericky. Proto jsem si vymyslel vlastní službu Signál a použil ji jako hlavní prvek, kolem kterého se celý layout točí. Díky tomu šlo pracovat s hierarchií jinak než jen pomocí barvy nebo velikosti textu.\n\nNávrh je záměrně klidný a jednoduchý. Soustředil jsem se hlavně na to, aby bylo jasné, co je důležité, kam se uživatel dívá a proč. Celý redesign jsem uskutečnil v programu Figma.",

        anchorPlaceholder1: "figma.com/design/echos",
        anchorTitle1: "Figma projekt",
        anchor1: "https://www.figma.com/design/XfeYhCpLsHZz1ztseC3NFv/Echos---Public?node-id=0-1&t=we1QIqi4gQttjtdv-1",
        anchorPlaceholder2: "",
        anchorTitle2: "",
        anchor2: "",

        featured: true,
        category: ["design"],
    },
];
