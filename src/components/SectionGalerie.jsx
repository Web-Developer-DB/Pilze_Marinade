
import React from 'react'

export default function SectionGalerie(){
  return (
    <section id="galerie" className="card reveal" aria-labelledby="galerie-title">
      <h2 id="galerie-title">Galerie &amp; Bildnachweise</h2>
      <div className="gallery">
        <div className="fig">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/%28Gemeine_Steinpilz%29_Boletus_edulis.jpg/800px-%28Gemeine_Steinpilz%29_Boletus_edulis.jpg"
              srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/%28Gemeine_Steinpilz%29_Boletus_edulis.jpg/800px-%28Gemeine_Steinpilz%29_Boletus_edulis.jpg 800w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/%28Gemeine_Steinpilz%29_Boletus_edulis.jpg/1024px-%28Gemeine_Steinpilz%29_Boletus_edulis.jpg 1024w"
              sizes="(max-width:680px) 100vw, 600px"
              alt="Steinpilz-Boletus edulis im Wald, zwei Fruchtkörper nebeneinander" loading="lazy" decoding="async" />
            <figcaption>
              <strong>Steinpilz (Boletus edulis)</strong> – Foto: Holger Krisp – Lizenz:
              <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer"> CC BY 3.0</a>, Quelle:
              <a href="https://commons.wikimedia.org/wiki/File:(Gemeine_Steinpilz)_Boletus_edulis.jpg" target="_blank" rel="noopener noreferrer"> Wikimedia Commons</a>.
            </figcaption>
          </figure>
        </div>

        <div className="fig">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/2007-07-14_Imleria_badia_2.jpg/800px-2007-07-14_Imleria_badia_2.jpg"
              srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/2007-07-14_Imleria_badia_2.jpg/800px-2007-07-14_Imleria_badia_2.jpg 800w, https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/2007-07-14_Imleria_badia_2.jpg/1011px-2007-07-14_Imleria_badia_2.jpg 1011w"
              sizes="(max-width:680px) 100vw, 600px"
              alt="Maronen-Röhrling, Hut umgedreht mit Poren sichtbar" loading="lazy" decoding="async" />
            <figcaption>
              <strong>Maronen-Röhrling (Imleria badia)</strong> – Foto: Andreas Kunze – Lizenz:
              <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer"> CC BY-SA 3.0</a>, Quelle:
              <a href="https://en.wikipedia.org/wiki/File:2007-07-14_Imleria_badia_2.jpg" target="_blank" rel="noopener noreferrer"> Wikipedia</a>.
            </figcaption>
          </figure>
        </div>

        <div className="fig">
          <figure>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Butterr%C3%B6hrling-1.jpg" alt="Illustration Butterröhrling (Suillus luteus) mit mehreren Stadien" loading="lazy" decoding="async" />
            <figcaption>
              <strong>Butterröhrling (Suillus luteus)</strong> – Illustration: Albin Schmalfuß (1897) – Public Domain, Quelle:
              <a href="https://commons.wikimedia.org/wiki/File:Butterr%C3%B6hrling-1.jpg" target="_blank" rel="noopener noreferrer"> Wikimedia Commons</a>.
            </figcaption>
          </figure>
        </div>

        <div className="fig">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Armillaria_mellea.JPG/800px-Armillaria_mellea.JPG"
              srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Armillaria_mellea.JPG/800px-Armillaria_mellea.JPG 800w, https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Armillaria_mellea.JPG/1024px-Armillaria_mellea.JPG 1024w"
              sizes="(max-width:680px) 100vw, 600px"
              alt="Büscheliger Hallimasch-Fruchtkörper an Holzstumpf" loading="lazy" decoding="async" />
            <figcaption>
              <strong>Hallimasch (Armillaria mellea)</strong> – Foto: Quarma – Lizenz:
              <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer"> CC BY-SA 3.0</a>, Quelle:
              <a href="https://commons.wikimedia.org/wiki/File:Armillaria_mellea.JPG" target="_blank" rel="noopener noreferrer"> Wikimedia Commons</a>.
            </figcaption>
          </figure>
        </div>

        <div className="fig">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Russula_cyanoxantha_01.jpg/800px-Russula_cyanoxantha_01.jpg"
              srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Russula_cyanoxantha_01.jpg/800px-Russula_cyanoxantha_01.jpg 800w, https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Russula_cyanoxantha_01.jpg/1024px-Russula_cyanoxantha_01.jpg 1024w"
              sizes="(max-width:680px) 100vw, 600px"
              alt="Täubling Russula cyanoxantha im Moos, violettgrauer Hut" loading="lazy" decoding="async" />
            <figcaption>
              <strong>Täubling (Russula cyanoxantha)</strong> – Foto: Lucian Clanet – Lizenz:
              <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer"> CC BY 4.0</a>, Quelle:
              <a href="https://commons.wikimedia.org/wiki/File:Russula_cyanoxantha_01.jpg" target="_blank" rel="noopener noreferrer"> Wikimedia Commons</a>.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
