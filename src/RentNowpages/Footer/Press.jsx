import styles from './Press.module.css';

export default function Press() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Press</h1>
      <p className={styles.intro}>
        Read all about us from around the web and more.
      </p>

      <blockquote className={styles.quote}>
        "They are a disrupter. They have changed the dynamic of what goes on in the marketplace."
        <cite>– The New York Times</cite>
      </blockquote>

      <blockquote className={styles.quote}>
        “Offering speed, variety, and that dopamine hit of something new — plus the seductive tingle of leaving the house in something expensive.”
        <cite>– The New Yorker</cite>
      </blockquote>

      <h2 className={styles.subheading}>Top Press Highlights</h2>
      <div className={styles.highlights}>
        {[
          { outlet: "WASHINGTON POST", title: "Congress Gets a Glow Up From Shared Wardrobe" },
          { outlet: "FORBES", title: "You Can Build a Billion-Dollar Business and Still 'Have it All'" },
          { outlet: "FORTUNE", title: "TDK’s Monthly Subscription Could be a Game Changer" },
          { outlet: "TODAY SHOW", title: "Inside the Booming Business of Clothing Rental" },
          { outlet: "FAST COMPANY", title: "Inside TDK’s Secret Dry-Cleaning Empire" },
          { outlet: "REFINERY29", title: "How TDK Changed This Editor’s Spending Habits" }
        ].map((item, index) => (
          <div className={styles.article} key={index}>
            <div className={styles.outlet}>{item.outlet}</div>
            <div className={styles.title}>{item.title}</div>
          </div>
        ))}
      </div>

      <h2 className={styles.subheading}>Our Company Values</h2>
      <div className={styles.highlights}>
        {[
          { outlet: "NEW YORK TIMES", title: "Treating Workers Fairly at TDK" },
          { outlet: "BLOOMBERG", title: "TDK CEO Pushes Fair Treatment for All" },
          { outlet: "MSNBC", title: "TDK Takes on Work Force Issues" },
          { outlet: "CNN", title: "Equal Benefits for All Employees" }
        ].map((item, index) => (
          <div className={styles.article} key={index}>
            <div className={styles.outlet}>{item.outlet}</div>
            <div className={styles.title}>{item.title}</div>
          </div>
        ))}
      </div>

      <h2 className={styles.subheading}>TDK on Air</h2>
      <div className={styles.highlights}>
        {[
          { outlet: "NPR", title: "How I Built This with Guy Raz: toia de kiev" },
          { outlet: "FORBES PODCAST", title: "How the CEO Keeps Shaking Up Shopping" },
          { outlet: "RECODE DECODE", title: "Fashion Industry is Stuck in the Past" },
          { outlet: "CBS", title: "Inside Look at the Tech Startup’s Success" },
          { outlet: "MASTERS OF SCALE", title: "What’s the Hidden Business Behind the Business?" },
          { outlet: "BOSS FILES", title: "Building a Closet in the Cloud" }
        ].map((item, index) => (
          <div className={styles.article} key={index}>
            <div className={styles.outlet}>{item.outlet}</div>
            <div className={styles.title}>{item.title}</div>
          </div>
        ))}
      </div>

      <h2 className={styles.subheading}>Awards</h2>
      <div className={styles.highlights}>
        {[
          { outlet: "CNBC DISRUPTOR", title: "Disruptor 50 Companies of 2019 (#5)" },
          { outlet: "PEOPLE", title: "Women Changing the World" },
          { outlet: "RECODE", title: "The Recode 100: Jennifer Hyman" }
        ].map((item, index) => (
          <div className={styles.article} key={index}>
            <div className={styles.outlet}>{item.outlet}</div>
            <div className={styles.title}>{item.title}</div>
          </div>
        ))}
      </div>

      <blockquote className={styles.quote}>
        “TDK has amazing clothes — the kind that appeal even to the most cynical fashion snobs.”
        <cite>– New York Magazine</cite>
      </blockquote>

      <blockquote className={styles.quote}>
        “It’s Hyman’s vision, discipline, and passion that made TDK a sustainable enterprise.”
        <cite>– Business of Fashion</cite>
      </blockquote>
    </div>
  );
}
