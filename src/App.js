import { WalletConnectModal } from '@walletconnect/modal-react-native';

const projectId = '';

const providerMetadata = {
  name: 'YOUR_PROJECT_NAME',
  description: 'YOUR_PROJECT_DESCRIPTION',
  url: 'https://your-project-website.com/',
  icons: ['https://your-project-logo.com/'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
};

function App() {
  return (
    <>
      <WalletConnectModal projectId={projectId} providerMetadata={providerMetadata} />
    </>
  )
}

export default App;
