const links = [
  { id: 1, name: 'Home', href: '#' },
  { id: 2, name: 'About', href: '#' },
];

const RenderLinks = () => {
  return (
    <>
      {links.map((link) => (
        <li>
          <a href={link.href}>{link.name}</a>
        </li>
      ))}
    </>
  );
};
export default RenderLinks;
