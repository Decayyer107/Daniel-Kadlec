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

    /** Technologies used, by slug (matches your TechName type) */
    technologies: string[];

    /** Path or URL to the main thumbnail image */
    image_preview: string;
    image_main: string;
    image_1: string;
    image_2: string;
    image_3: string;
    image_4: string;



    /** Technical description (used in the technical section) */
    technical_description: string;

    /** Optional link titles and URLs */
    anchorPlaceholder1?: string;
    anchorTitle1?: string;
    anchor1?: string;
    anchorPlaceholder2?: string;
    anchorTitle2?: string;
    anchor2?: string;

    /** Whether the project is featured on the homepage */
    featured?: boolean;

    /** Project categories (e.g., ["design", "development"]) */
    category: string[];
};
