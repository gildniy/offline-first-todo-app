import React from 'react';

const FirebaseContext: any = React.createContext(null);

export const withFirebase = (Component: any) => (props: any) => (
    <FirebaseContext.Consumer>
        {(firebase: any) => <Component {...props} firebase={firebase}/>}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;