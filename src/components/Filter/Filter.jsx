import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { updateFilter } from '../../redux/filteredUsers/usersSlice';
import { statusFilter } from '../../redux/constants';

export default function Filter() {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClick = e => {
        dispatch(
            updateFilter(statusFilter[e.target.textContent.toLowerCase()])
        );
        setAnchorEl(null);
    };

    return (
        <div
            style={{
                paddingTop: 10,
            }}
        >
            <Button
                variant="contained"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpen}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Filter
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClick}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClick}>All</MenuItem>
                <MenuItem onClick={handleClick}>Follow</MenuItem>
                <MenuItem onClick={handleClick}>Following</MenuItem>
            </Menu>
        </div>
    );
}
