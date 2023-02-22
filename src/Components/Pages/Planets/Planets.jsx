import { useEffect, useState } from 'react';
import { getPlanet, getPlanetImg } from '../../../services/sw-service';
import NextBtn from '../../Shared/NextBtn/NextBtn';
import styles from '../Pages.module.css';

const Planets = () => {
  const [id, setId] = useState(2);
  const [planet, setPlanet] = useState(null);
  const [planetImg, setPlanetImg] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchPlanet() {
      try {
        const data = await getPlanet(id, setPlanet);
        const img = await getPlanetImg(id);
        setPlanet(data);
        setPlanetImg(img);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
        setIsError(error.message);
      }
    }
    fetchPlanet();
  }, [id]);

  const handleClick = () => {
    setId((prev) => prev + 1);
  };

  return (
    <div className={styles.section}>
      {isLoading ? (
        <h2>{isError ? `${isError}` : `Loading...`}</h2>
      ) : (
        <>
          <div>
            <img src={planetImg} alt={planet.name} className={styles.image} />
          </div>
          <div className={styles.section__content}>
            <h3 className={styles.title}>{planet.name}</h3>
            <ul className={styles.list}>
              <li>
                <span>Dia:</span> {planet.diameter}
              </li>
              <li>
                <span>Terrain:</span> {planet.terrain}
              </li>
              <li>
                <span>Population:</span> {planet.population}
              </li>
            </ul>
            <NextBtn handleClick={handleClick} />
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
