import styles from '../Pages.module.css';
import { getPeople } from '../../../services/sw-service';
import { useEffect, useState } from 'react';
import NextBtn from '../../Shared/NextBtn/NextBtn';

const initialState = {
  name: '',
  gender: '',
  birth_year: 0,
  eye_color: '',
};
export const People = () => {
  const [personId, setPersonId] = useState(1);
  const [person, setPerson] = useState(initialState);
  const [image, setImage] = useState(
    'https://starwars-visualguide.com/assets/img/characters/1.jpg'
  );

  useEffect(() => {
    getPeople(personId, setPerson);
    setImage(
      `https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`
    );
  }, [personId]);

  const nextId = () => {
    setPersonId((prev) => prev + 1);
  };

  return (
    <div className={styles.section}>
      <div>
        <img src={image} alt="person" className={styles.image} />
      </div>
      <div className={styles.section__content}>
        <h3 className={styles.title}>{person.name}</h3>
        <ul className={styles.list}>
          <li>
            <span>Gender:</span> {person.gender}
          </li>
          <li>
            <span>Birth year:</span> {person.birth_year}
          </li>
          <li>
            <span>Eye colour:</span> {person.eye_color}
          </li>
        </ul>
        <NextBtn handleClick={nextId} />
      </div>
    </div>
  );
};

export default People;
