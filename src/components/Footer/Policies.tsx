import { POLICIES_FOOTER } from '../../constants';

const Policies = () => {
  return (
    <ul className="policies">
      {POLICIES_FOOTER.map((policy) => (
        <>
          <p>{policy.title}</p>
          {policy.links.map((link) => (
            <a href="">
              <li>{link}</li>
            </a>
          ))}
        </>
      ))}
    </ul>
  );
}

export default Policies
