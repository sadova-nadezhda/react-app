import React, { useState } from 'react'

import Button from "../Button/Button";

import { services } from "../../utils/services";

export default function ServicesSection() {
  const [contentType, setContentType] = useState(null);
  
  const handleClick = (type) => {
    setContentType(type);
  };

  return (
    <section className="section services">
      <div className="container">
        <div className="services__container">
          <h2 className="services__title title">Услуги</h2>
          <div className="services__tabs">
            <div className="services__nav">
              <Button isActive={contentType=="services1"} onClick={() => handleClick("services1")}>
                Услуга 1
              </Button>
              <Button isActive={contentType=="services2"} onClick={() => handleClick("services2")}>
                Услуга 2
              </Button>
              <Button isActive={contentType=="services3"} onClick={() => handleClick("services3")}>
                Услуга 3
              </Button>
            </div>

            {!contentType && <div>Нажми на таб</div>}
            {contentType && <div className="services__content">{services[contentType]}</div>} 

          </div>
        </div>
      </div>
    </section>
  )
}
