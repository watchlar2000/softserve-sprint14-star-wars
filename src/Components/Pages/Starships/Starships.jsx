import styles from '../Pages.module.css';
import { useEffect, useState } from 'react';
import {
  getStarship,
  testStarshipImageLink,
  defaultStarshipInfo,
  defaultStarshipImage,
} from '../../../services/sw-service';
import NextBtn from '../../Shared/NextBtn/NextBtn';

export const Starships = () => {
  const [starshipId, setStarshipId] = useState(1);
  const [starship, setStarship] = useState(defaultStarshipInfo);
  const [image, setImage] = useState(defaultStarshipImage);
  const [isContentFound, setIsContentFound] = useState(true);

  useEffect(() => {
    getStarship(starshipId, setStarship, setIsContentFound);
    testStarshipImageLink(starshipId, setImage);
  }, [starshipId]);

  const nextId = () => {
    setStarshipId((prevStarshipId) => prevStarshipId + 1);
    setIsContentFound(true);
  };

  return (
    <div className={styles.section}>
      <div>
        <img src={image} alt="starship" className={styles.image} />
      </div>
      <div className={styles.section__content}>
        {isContentFound ? (
          <div>
            <h3 className={styles.title}>{starship.name}</h3>
            <ul className={styles.list}>
              <li>
                <span>Model:</span> {starship.model}
              </li>
              <li>
                <span>Starship class:</span> {starship.starship_class}
              </li>
              <li>
                <span>Max atmospheric speed:</span>
                {starship.max_atmosphering_speed}
              </li>
            </ul>
          </div>
        ) : (
          <div>Starship does not exist</div>
        )}
        <NextBtn handleClick={nextId} />
      </div>
    </div>
  );
};
