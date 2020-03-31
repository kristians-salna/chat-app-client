import { ALL_PAGES } from '../constants/pages';

export default function () {
    const _routes = [];
    ALL_PAGES.forEach(routeData => {
        _routes.push({ exact: true, ...routeData });
    });

    return _routes;
};
