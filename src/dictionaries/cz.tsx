import { ReactNode } from "react";

const cs = {
      hero: {
          heading: (): ReactNode => (
              <>
                  Frontend <span className={'text-green'}>vývojář</span> & <br/>
                  <span className={'text-green'}>UX/UI</span> designér.
              </>
          ),
          paragraph: (): ReactNode => (
              <>
                  Ahoj! Jmenuji se <span className={'text-green'}>Daniel Kadlec</span>.<br/> <span className={'text-green'}>Student z ČR</span> s vášní pro <span className={'text-green'}>tvorbu webů</span>.
              </>
          ),
          button: "Prohlédněte si moje projekty",

      },
    nav: {
          Home: "Domů",
          Contact: "Kontakt",
          About: "O mně",
          Portfolio: "Portfolio",
    },
    };

export default cs;