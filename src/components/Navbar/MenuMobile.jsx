import Hamburguer from '../ui/Hamburguer';
import RenderLinks from '../ui/RenderLinks';

const MenuMobile = () => {
  return (
    <div className='dropdown'>
      <div className='dropdown dropdown-end'>
        <Hamburguer />
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          {RenderLinks()}
        </ul>
      </div>
    </div>
  );
};
export default MenuMobile;
