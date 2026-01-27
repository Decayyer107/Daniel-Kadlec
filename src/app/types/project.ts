export type ProjectType = {
    /** Unique identifier of the project */
    id: string;

    /** URL slug or internal link */
    link: string;

    /** Project title */
    title: string;

    /** Project subtitle (e.g., type of work or role) */
    subtitle: string;

    /** Main project description */
    description: string;

    /** Technologies used */
    technologies: string[];

    /** Images with alt text */
    image_preview: string;
    image_preview_alt: string;

    image_main: string;
    image_main_alt: string;

    image_1?: string;
    image_1_alt?: string;

    image_2?: string;
    image_2_alt?: string;

    image_3?: string;
    image_3_alt?: string;

    image_4?: string;
    image_4_alt?: string;

    /** Technical description */
    technical_description: string;

    /** Optional links */
    anchorPlaceholder1?: string;
    anchorTitle1?: string;
    anchor1?: string;
    anchorPlaceholder2?: string;
    anchorTitle2?: string;
    anchor2?: string;

    /** Homepage feature */
    featured?: boolean;

    /** Project categories */
    category: string[];
};
