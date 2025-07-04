import styles from './Designers.module.css';

const designersData = {
  "All": ["All Dresses", "Accessories"],
  "1": ["16ARLINGTON"],
  "3": ["3.1 Phillip Lim", "3.1 Phillip Lim Accessories", "3.1 Phillip Lim x TDK", "3x1"],
  "5": ["525 America"],
  "7": ["7 For All Mankind"],
  "A": [
    "A Bronze Age", "A.L.C.", "A.P.C.", "A.P.C. Accessories", "A.W.A.K.E. Mode", "Acler", 
    "Adam Lippes", "Adam Lippes x TDK", "ADEAM", "Adelyn Rae", "adidas by Stella McCartney",
    "adidas by WALES BONNER", "Adrianna Papell", "AFRM", "AG", "AGOLDE", "Agua by Agua Bendita",
    "Aidan AIDAN MATTOX", "Aidan Mattox", "AIIFOS", "Aijek", "Aisling Camps", "AKNVAS", "ALALA", 
    "Alaïa", "Aldomartins", "ALEXACHUNG", "Alexia Admor", "Alexis", "Alexis Bittar", "alice McCALL",
    "ALIÉTTE", "AllSaints", "Alpha Industries", "Altuzarra", "ALÉMAIS", "Amanda Uprichard", "AMO",
    "AMSALE", "AMUR", "Andamane", "Andrew Marc", "Andrés Otálora", "Anine Bing", "Ann Mashburn",
    "Anna October", "Anna Sui", "Annabel Ingall", "Anni Lu", "Another Tomorrow", "Anya Hindmarch",
    "Apiece Apart", "Apparis", "Area Stars", "ARIAS NEW YORK", "Arthur Apparel", "AS by DF",
    "ASHLEY PARK x TDK", "ASKK NY", "ASTR the Label", "Atlein", "Atlein x TDK", "ATOÍR",
    "ATP Atelier", "Autumn Adeigbo", "Avec Les Filles", "Aya Muse", "Aztech Mountain"
  ],
  // Puedes continuar con "B", "C", ..., "Z"
};

export default function Designers() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Designers</h1>
      {Object.entries(designersData).map(([letter, designers]) => (
        <div key={letter} className={styles.letterGroup}>
          <h2 className={styles.letter}>{letter}</h2>
          <ul className={styles.list}>
            {designers.map((name, idx) => (
              <li key={idx} className={styles.designer}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
