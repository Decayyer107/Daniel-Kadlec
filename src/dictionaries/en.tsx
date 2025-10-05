import { ReactNode } from "react";

const en = {
    hero: {
        heading: (): ReactNode => (
            <>
                Frontend <span className={'text-green'}>developer</span> & <br/>
                <span className={'text-green'}>UX/UI</span> designer.
            </>
        ),
        paragraph: (): ReactNode => (
            <>
                Hello! My name is  <span className={'text-green'}>Daniel Kadlec</span>. Student from<br/> the <span className={'text-green'}>Czech Republic</span> with a passion for <span className={'text-green'}>web development</span>.
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
                I was fascinated by the <span className="text-highlighted">world of graphics</span> already in elementary school. I started learning <span className="text-highlighted">Photoshop</span>, got a <span className="text-highlighted">graphics tablet</span>, and experimented with drawing and photo editing, which guided me toward choosing <span className="text-highlighted">graphics as my future career</span>. <br/> <br/>

                In high school, focused on <span className="text-highlighted">IT</span>, I gradually became more interested in <span className="text-highlighted">web design</span> and <span className="text-highlighted">programming</span>. <span className="text-highlighted">Branding</span> took a back seat, and my main focus became <span className="text-highlighted">UX/UI design</span> and <span className="text-highlighted">frontend development</span>. <br/> <br/>

                School lessons were not enough, so I dedicate myself to <span className="text-highlighted">self-studying modern technologies and design principles</span>. Currently, I work with <span className="text-highlighted">React</span>, <span className="text-highlighted">Framer Motion</span>, and the basics of <span className="text-highlighted">Next.js</span> and <span className="text-highlighted">backend</span>. My passion is creating <span className="text-highlighted">web applications</span> that are visually appealing and user-friendly. <br/> <br/>

                In my free time, I enjoy <span className="text-highlighted">music</span>, playing the <span className="text-highlighted">guitar</span>, and <span className="text-highlighted">video games</span>.
            </>
        ),
        button: "Download Resume",
    },

    nav: {
        Home: "Home",
        Contact: "Contact",
        About: "About",
        Portfolio: "Portfolio",
    },
};
export default en;
