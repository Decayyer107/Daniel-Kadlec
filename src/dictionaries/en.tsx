import { ReactNode } from "react";

const en = {
    hero: {
        heading: (): ReactNode => (
            <>
                Frontend <span className="text-green">developer&nbsp;</span>&<br />
                <span className="text-green">UX/UI</span> designer.
            </>

        ),
        paragraph: (): ReactNode => (
            <>
                Hello! My name is  <span className={'text-green'}>Daniel Kadlec</span>. Student from<br className={'hidden xs:block'}/> the <span className={'text-green'}>Czech Republic</span> with a passion for <span className={'text-green'}>web development</span>.
            </>
        ),
        button: "Take a look at my projects",
    },
    about: {
        heading: (): ReactNode => (
            <>
                About <span className={"text-green"}>me</span>.
            </>
        ),
        subheading: "Learn more",
        paragraph: (): ReactNode => (
            <>
                I was fascinated by the <span className="text-highlighted">world of graphics</span> already in elementary school. I started learning <span className="text-highlighted">Photoshop</span>, got a graphics tablet, and experimented with drawing and photo editing, which guided me toward choosing <span className="text-highlighted">graphics as my future career</span>. <br/> <br/>

                In high school focused on <span className="text-highlighted">IT, web design, and programming</span>, I gradually shifted my attention — <span className="text-highlighted">branding</span> took a back seat, and my main focus became <span className="text-highlighted">UX/UI design and frontend development</span>. <br/> <br/>

                School lessons were not enough, so I dedicate myself to <span className="text-highlighted">self-studying modern technologies and design principles</span>. Currently, I work with <span className="text-highlighted">React, Framer Motion, Next.js</span>, and basic <span className="text-highlighted">backend</span>. My passion is creating <span className="text-highlighted">web applications</span> that are both visually appealing and user-friendly. <br/> <br/>

                In my free time, I enjoy <span className="text-highlighted">music, guitar, and video games</span>.
            </>
        ),
        button: "Download my resume",
    },
    portfolioSection: {
        heading: (): ReactNode => (
            <>
                <span className={"text-green"}>Portfolio</span> in a nutshell.
            </>
        ),
        subheading: "A brief overview of selected projects",
        project_button: "Learn more",
        button: "View all projects",
    },
    skills: {
        heading: (): ReactNode => (
            <>
                Key <span className={"text-green"}>skills</span>.
            </>
        ),
        subheading: "Areas in which I specialize",
        card_1_heading: (): ReactNode => (
            <>
                <span className={'text-green'}>Frontend </span>development
            </>
        ),
        card_1_paragraph:'I build modern, responsive websites with a focus on clean and functional code. I enjoy turning designs into real interfaces where everything works as it should and users have a smooth experience.\n' +
            'I treat each project as a challenge to balance aesthetics with practicality. I prefer sticking to proven techniques rather than experimenting with untested trends, ensuring reliable results every time.',
        card_2_heading: (): ReactNode => (
            <>
                <span className={'text-green'}>UX/UI </span>design
            </>
        ),
        card_2_paragraph:'I design interfaces that are not just visually appealing, but also memorable and enjoyable to use. I believe that the secret to a good website isn’t just colors, fonts, or layout — it’s the way the site communicates with the user, the animations, and the overall feel.\n' +
            'I aim to make every click and interaction intuitive, so users feel naturally guided through the experience.',
        card_3_heading: (): ReactNode => (
            <>
                <span className={'text-green'}>Brand </span>design
            </>
        ),
        card_3_paragraph:'Branding isn’t my main specialty, but I have a foundational understanding of the principles and theoretical knowledge in this area. I understand how to create visual consistency for a brand and work with logos, color palettes, and typography.\n' +
            'My experience is limited, so when branding is involved in a project, I focus on supporting the design rather than leading the full identity process.',

    },
    contact: {
        heading: (): ReactNode => (
            <>
                Contact <span className={"text-green"}>me</span>.
            </>
        ),
        paragraph: (): ReactNode => (
            <>
                Whether you&apos;re looking for a <span className={'text-green'}>developer, designer</span>, or just want to chat — <span className={'text-green'}>I&apos;d love to hear from you</span>.
            </>
        ),
        contact_twitter: "Platform X",

        contact_form_name: "Name & Surname",
        contact_form_email: "E-mail",
        contact_form_subject: "Subject",
        contact_form_message: "Message",
        contact_form_button: "Send",

        toast_invalid_email: "Invalid email format.",
        toast_missing_fields: "Please fill out all required fields.",
        toast_success: "Message sent successfully!",
        toast_error: "Error sending message.",
        toast_unexpected: "Unexpected error occurred.",
    },

    portfolio: {
        heading: (): ReactNode => (
            <>
                Complete <span className={"text-green"}>portfolio</span>.
            </>
        ),
        subheading: "All the projects I worked on",
        filters_heading: "Filters",
        filters_all: "All",
        filters_development: "Development",
        filters_design: "Design",

    },
    project: {
        technical_title: "Technical solution",
        technical_subtitle: "A look behind the scenes",
    },
    nav: {
        Home: "Home",
        Contact: "Contact",
        About: "About",
        Portfolio: "Portfolio",
    },
    error:{
        Description: "The page you’re looking for doesn’t exist or has been moved.",
        Button: "Go back home",
    }
};
export default en;
