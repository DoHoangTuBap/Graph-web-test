import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const Header = (): JSX.Element => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);
const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center">
        <h1>The Graph</h1>
        <nav>
          <ul className="flex pl-2">
            <li><a href="#Home" className="mr-4">    
            <div>
      <Button onClick={handleClick}
      >
        Products
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <div className='flex flex-col'>
          <span>Graph Explorer</span>
          <span>Explore subgraphs and interact with the protocol.</span>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <div className='flex flex-col'>
          <span>Subgraph Studio</span>
          <span>Create, manage and publish subgraphs and API keys.</span>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <div className='flex flex-col'>
          <span>Hosted Service</span>
          <span>Create and explore subgraphs on the hosted service.</span>
          </div>
        </MenuItem>
      </Menu>
    </div>
    </a></li>
            <li><a href="#Docs" className="mr-4">Blog</a></li>
            <li><a href="#Subgraph" className="mr-4">Jobs</a></li>
            <li><a href="#Explorer" className="mr-4">Ecosystem</a></li>
            <li><a href="#Blog">Docs</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
