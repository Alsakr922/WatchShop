import { CONTACT_FOOTER } from "../../constants";
const Contact = () => {
  return (
    <ul className="contact">
      {CONTACT_FOOTER.map((contact) => (
        <>
          <p>{contact.title}</p>
          {contact.links.map((link) => (
            <a href="">
              <li>{link}</li>
            </a>
          ))}
        </>
      ))}
    </ul>
  );
};

export default Contact;
