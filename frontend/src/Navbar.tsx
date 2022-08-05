import * as React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';
import { Home, LocalMovies, Work } from '@material-ui/icons'
function handleClick() {
    console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
    return (
        <div role="presentation" onClick={handleClick} className={'hello'}>
            <Breadcrumbs aria-label="breadcrumb" className={'breadcrumb'}>
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href=""
                    className={'li'}
                >
                    <Home sx={{ mr: 0.5 }} fontSize="inherit" />
                    MUI
                </Link>
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href=""
                    className={'li'}
                >
                    <LocalMovies sx={{ mr: 0.5 }} fontSize="inherit" />
                    LocalMovies
                </Link>
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                    href="#"
                    className={'li'}
                >
                    <Work sx={{ mr: 0.5 }} fontSize="inherit" />
                    Breadcrumb
                </Link>
            </Breadcrumbs>
        </div>
    );
}
