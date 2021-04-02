// TODO: Hide the secrets before pushing this to git.
require('dotenv').config();

function mySettings(props) {
    return (
      <Page>
        <Section
          title={<Text bold align="center">Fitbit Account</Text>}>
          <Oauth
            settingsKey="oauth"
            title="Login"
            label="Fitbit"
            status="Login"
            authorizeUrl="https://www.fitbit.com/oauth2/authorize"
            requestTokenUrl="https://api.fitbit.com/oauth2/token"
            clientId={process.env.CLIENT_ID}
            clientSecret={process.env.CLIENT_SECRET}
            scope="activity heartrate nutrition"
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(mySettings);