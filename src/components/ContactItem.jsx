function ContactItem({ data: { name, lastName, email, phone } }) {
  return (
    <li>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📬</span>
        {email}
      </p>
      <p>
        <span>📞</span>
        {phone}
      </p>
      <button>🗑</button>
    </li>
  );
}

export default ContactItem;