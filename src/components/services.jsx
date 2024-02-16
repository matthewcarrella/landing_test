import React from "react";
import YouTubeEmbed from "./YouTubeEmbed";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Discover</h2>
{/*          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>*/}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <a href={d.link}>
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                  </a>
                </div>
              ))
            : "loading"}

             {/*<YouTubeEmbed embedId="vkwMmMmaWis?si=o5NZrj1g3Z6VFyWb" />*/}
        </div>
      </div>
    </div>
  );
};
