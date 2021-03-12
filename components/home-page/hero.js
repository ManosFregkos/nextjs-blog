import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.jpg"
          alt="myself"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi i am Manos</h1>
      <p>
        I blog about the web dev - especially front end frameworks like React
      </p>
    </section>
  );
}
export default Hero;
