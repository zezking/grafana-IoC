import React from 'react';
import { css } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';
import { container } from 'ioc';
import { useStyles2 } from '@grafana/ui';
import { PluginPage } from '@grafana/runtime';
import { LoginForm } from '../components/LoginForm';
export function PageIOC() {
  const s = useStyles2(getStyles);

  return (
    <PluginPage>
      <div>
        Login
        <div className={s.marginTop}>
          <LoginForm model={container.get('LoginFormModel')} controller={container.get('LoginFormController')} />
        </div>
      </div>
    </PluginPage>
  );
}

const getStyles = (theme: GrafanaTheme2) => ({
  marginTop: css`
    margin-top: ${theme.spacing(2)};
  `,
});
