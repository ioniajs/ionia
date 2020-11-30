import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const RedirectPage = () => {
	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		//@ts-ignore
		history.replace(location.state);
	}, []);
	return null;
};
