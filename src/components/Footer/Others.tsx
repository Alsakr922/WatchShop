import { OTHER_FOOTER } from '../../constants';

const Others = () => {
  return (
    <ul className="other">
      {OTHER_FOOTER.map((other) => (
        <>
          <p>{other.title}</p>
          {other.links.map((link) => (
            <a href="">
              <li>{link}</li>
            </a>
          ))}
        </>
      ))}
    </ul>
  );
}

export default Others
