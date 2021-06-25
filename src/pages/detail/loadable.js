import Loadable from 'react-loadable';
import React from 'react'

const MyLoadingComponent =({ error, pastDelay })=>{
  console.log(error,pastDelay);
  if (error) {
    return <div>Error!</div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null
  }
}

const LoadableAnotherComponent = Loadable({
  loader:() => import('./'),
  loading:MyLoadingComponent,
}
);

export default class App extends React.Component {
  render() {
    return <LoadableAnotherComponent/>;
  }
}