// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Input } from 'antd';

export const AMapAutoComplete = ({
	position,
	onSelect,
	__map__: map,
	options,
	placeholder,
	style,
	onGetAddress,
}: any) => {
	const [geocoder, setGeocoder] = useState();

	useEffect(() => {
		map.plugin(['AMap.Autocomplete', 'AMap.Geocoder'], () => {
			const auto = new window.AMap.Autocomplete({
				input: 'autoinput',
				...options,
			});
			map.addControl(auto);

			window.AMap.event.addListener(auto, 'select', e => {
				if (!e.poi.location) {
					const poi = e.poi;
					geocoder &&
						geocoder.getLocation(poi.district + poi.address, (status, result) => {
							console.log('getLocation', status, result);
							if (result && result.info === 'OK') {
								e.poi.location = result.geocodes[0].location;
							}
							onSelect && onSelect(e);
						});
					return;
				}

				onSelect && onSelect(e);
			});

			const geoloc = new window.AMap.Geocoder({});
			map.addControl(geoloc);

			setGeocoder(geoloc);
		});
	}, []);

	useEffect(() => {
		geocoder &&
			geocoder.getAddress([position.longitude, position.latitude], (status, result) => {
				if (status === 'complete' && result.regeocode) {
					const address = result.regeocode.formattedAddress;
					document.getElementById('autoinput').value = address;
					console.log(address, '-----------');
					onGetAddress && onGetAddress(address);
				} else {
					console.error('根据经纬度查询地址失败');
				}
			});
	}, [position]);

	return <Input id='autoinput' placeholder={placeholder} style={style} />;
};
