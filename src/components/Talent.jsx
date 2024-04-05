import React from "react";

export const Talent = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/talent.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Discovery Talent Movement</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <div className="list-style">
               
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
           
             
              </div>

              <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
               <div className="list-style">
               
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
           
             
              </div>


           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
