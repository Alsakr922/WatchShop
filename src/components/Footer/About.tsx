import { ABOUT_FOOTER } from "../../constants";

const About = () => {
  return (
    <ul className="about">
      {ABOUT_FOOTER.map((about) => (
        <>
          <p>{about.title}</p>
          {about.links.map((link) => (
            <a href="">
              <li>{link}</li>
            </a>
          ))}
        </>
      ))}
    </ul>
  );
}

export default About
