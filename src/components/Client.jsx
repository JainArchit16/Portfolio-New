import React, { useEffect, useRef } from "react";
import stripeLogo from "../assets/images/trusted-by/stripe.svg";
import datastaxLogo from "../assets/images/trusted-by/datastax.svg";
import cokeLogo from "../assets/images/trusted-by/coke.svg";
import gmLogo from "../assets/images/trusted-by/gm.svg";
import sharesLogo from "../assets/images/trusted-by/shares.svg";
import shopifyLogo from "../assets/images/trusted-by/shopify.svg";
import agencyElevationLogo from "../assets/images/trusted-by/agency-elevation.svg";
import gitlabLogo from "../assets/images/trusted-by/gitlab.svg";
import duolingoLogo from "../assets/images/trusted-by/duolingo.svg";
import coyoteLogo from "../assets/images/trusted-by/coyote.svg";
import astratoLogo from "../assets/images/trusted-by/astrato.svg";
import mercadoLogo from "../assets/images/trusted-by/mercado.svg";

function Client() {
  const logosWrappersRef = useRef([]);

  useEffect(() => {
    // const logosWrappers = document.querySelectorAll(".logo-group");
    const logosWrappers = logosWrappersRef.current;

    const sleep = (number) => new Promise((res) => setTimeout(res, number));

    logosWrappers.forEach(async (logoWrapper, i) => {
      const logos = Array.from(logoWrapper.children);
      await sleep(1400 * i);
      setInterval(() => {
        let temp = logos[0];
        logos[0] = logos[1];
        logos[1] = logos[2];
        logos[2] = temp;
        logos[0].classList.add("hide", "to-top");
        logos[1].classList.remove("hide", "to-top", "to-bottom");
        logos[2].classList.add("hide", "to-bottom");
      }, 5600);
    });
  }, []);

  return (
    <section className="client">
      <div className="container">
        <h2 className="h2">Trusted by</h2>
        <div className="logos">
          <div
            className="logo-group"
            ref={(el) => logosWrappersRef.current.push(el)}
          >
            <img
              loading="lazy"
              src={stripeLogo}
              alt="Ideacraft"
              className="logo hide to-top"
            />
            <img
              loading="lazy"
              src={datastaxLogo}
              alt="Golden grid"
              className="logo"
            />
            <img
              loading="lazy"
              src={cokeLogo}
              alt="Theia"
              className="logo hide to-bottom"
            />
          </div>
          <div
            className="logo-group"
            ref={(el) => logosWrappersRef.current.push(el)}
          >
            <img
              loading="lazy"
              src={gmLogo}
              alt="General motors"
              className="logo hide to-top"
            />
            <img
              loading="lazy"
              src={sharesLogo}
              alt="Chippy"
              className="logo"
            />
            <img
              loading="lazy"
              src={shopifyLogo}
              alt="Shopify"
              className="logo hide to-bottom"
            />
          </div>
          <div
            className="logo-group"
            ref={(el) => logosWrappersRef.current.push(el)}
          >
            <img
              loading="lazy"
              src={agencyElevationLogo}
              alt="Agency elevation"
              className="logo hide to-top"
            />
            <img
              loading="lazy"
              src={gitlabLogo}
              alt="Ron jones"
              className="logo"
            />
            <img
              loading="lazy"
              src={duolingoLogo}
              alt="Mighty furniture's"
              className="logo hide to-bottom"
            />
          </div>
          <div
            className="logo-group"
            ref={(el) => logosWrappersRef.current.push(el)}
          >
            <img
              loading="lazy"
              src={coyoteLogo}
              alt="Bulls eye"
              className="logo hide to-top"
            />
            <img
              loading="lazy"
              src={astratoLogo}
              alt="Chippy"
              className="logo"
            />
            <img
              loading="lazy"
              src={mercadoLogo}
              alt="Fastlane"
              className="logo hide to-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
