import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/main/dashboard`} component={lazy(() => import(`./home`))} />
          <Route path={`${APP_PREFIX_PATH}/main/catalog/categories`} component={lazy(() => import(`./catalog/categories`))} />
          <Route path={`${APP_PREFIX_PATH}/main/catalog/collection`} component={lazy(() => import(`./catalog/collection`))} />
          <Route path={`${APP_PREFIX_PATH}/main/catalog/combo`} component={lazy(() => import(`./catalog/combo`))} />
          <Route path={`${APP_PREFIX_PATH}/main/catalog/product-list`} component={lazy(() => import(`./catalog/product-list`))} />
          <Route path={`${APP_PREFIX_PATH}/main/clients/list`} component={lazy(() => import(`./user-list`))} />
          <Route path={`${APP_PREFIX_PATH}/main/clients/edit-profile`} component={lazy(() => import(`views/app-views/user-list/userDetails`))} />
          {/*<Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />*/}
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
