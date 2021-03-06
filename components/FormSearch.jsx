import React, { useContext } from 'react';
import styles from '../styles/Index.module.css';

// contextos
import { SearchContext } from '../context/SearchContext';
import { UnplashContext } from '../context/UnplashContext';

const FormSearch = () => {
  const { input, saveInput } = useContext(SearchContext);
  const { searchOnUnplash } = useContext(UnplashContext);

  return (
    <div className={styles.section}>
      <form
        className={styles.formsection}
        onSubmit={(e) => { searchOnUnplash(e, input); }}

      >
        <input className={styles.inputSection} type="text" name="imageName" onChange={saveInput} />
        <input type="submit" value="BUSCAR" className={styles.buttonSection} />
      </form>
    </div>
  );
};

export default FormSearch;
