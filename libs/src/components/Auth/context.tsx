import React from 'react';

const initialState = {
	isLoaded: false,
	permissions: {},
	resources: {},
	define: (values: any) => {},
};

const AccessContext = React.createContext(initialState);

export const AccessConsumer = AccessContext.Consumer;

export const AccessProvider = ({ children }: any) => {
	const [state, setState] = React.useState(initialState);

	const define = (values: any) =>
		setState(prevState => ({ ...prevState, ...values, isLoaded: true }));

	const providerValue: any = { ...state, define };

	return <AccessContext.Provider value={providerValue}>{children}</AccessContext.Provider>;
};

export default AccessContext;
