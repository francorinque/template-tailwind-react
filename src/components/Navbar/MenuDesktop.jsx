import RenderLinks from '../ui/RenderLinks';

const MenuDesktop = () => {
  return (
    <ul className='menu menu-vertical lg:menu-horizontal bg-transprent rounded-box'>
      {RenderLinks()}
    </ul>
  );
};
export default MenuDesktop;
