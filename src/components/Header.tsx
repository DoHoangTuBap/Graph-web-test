import Fade from '@mui/material/Fade';
import FormControl from '@mui/material/FormControl';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type List_Menu = {
  name: string,
  details: string,
}

const Header = (): JSX.Element => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [lang, setLang] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const List_Product: List_Menu[] = [
    {
      name: "Graph Explorer",
      details: "Explore subgraphs and interact with the protocol."
    },
    {
      name: "Subgraph Studio",
      details: "Create, manage and publish subgraphs and API keys.",
    },
    {
      name: "Hosted Service",
      details: "Create and explore subgraphs on the hosted service.",
    }

  ]

  const List_EcoSystems: List_Menu[] = [
    {
      name: "Advocates",
      details: "Become a Graph Advocate."
    },
    {
      name: "Governance",
      details: "Participate in The Graph Governance.",
    },
    {
      name: "Grants",
      details: "Learn about Grants & Open RFPs.",
    },
    {
      name: "Learn",
      details: "Learn about The Graph."
    },
    {
      name: "Roadmap",
      details: "Explore The New Era of The Graph."
    },
    {
      name: "Supported Networks",
      details: "Learn about which networks The Graph supports."
    },

  ]

  return (
    <header className=" text-white p-4">
      <div className="container mx-auto flex items-center">
        <h1>The Graph</h1>
        <div className='flex flex-row justify-between'>
          <ul className="flex pl-2">
            <div className="mr-4">
              <div className='flex flex-row' onClick={handleClick}
              >
                <span>Products</span>
                <div><ArrowDropDownIcon/></div>
              </div>
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
                  <div>
                    {
                      List_Product.map((item) =>
                        <div className='flex !flex-col'>
                          <span>{item.name}</span>
                          <span>{item.details}</span>
                        </div>
                      )
                    }
                  </div>
                </MenuItem>
              </Menu>
            </div>
            <span className="mr-4">Blog</span>
            <span className="mr-4">Jobs</span>
            <div className="mr-4">
            <div className='flex flex-row' onClick={handleClick}
              >
                <span>EcoSystems</span>
                <div><ArrowDropDownIcon/></div>
              </div>
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
                    {
                      List_EcoSystems.map((item) =>
                        <div>
                          <span>{item.name}</span>
                          <span>{item.details}</span>
                        </div>
                      )
                    }
                  </div>
                </MenuItem>
              </Menu>
            </div>
            <span>Docs</span>
          </ul>
        </div>
        {/* <div className='flex flex-row justify-end'> */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={lang}
          onChange={handleChange}
          className='!text-inherit justify-end'
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>English</em>
          </MenuItem>
          <MenuItem value={"vn"}>Vietnamese</MenuItem>
          <MenuItem value={"chi"}>China</MenuItem>
          <MenuItem value={"fr"}>France</MenuItem>
        </Select>
      </FormControl>
      {/* </div> */}
      </div>
    </header>
  );
}

export default Header;
