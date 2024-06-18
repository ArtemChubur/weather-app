import { useState, useEffect } from 'react';

interface Position {
    latitude: number;
    longitude: number;
}

const usePosition = (): { position: Position; } => {
    const [position, setPosition] = useState<Position>({ latitude: 0, longitude: 0 });

    useEffect(() => {
        const handleSuccess = (position: GeolocationPosition) => {
            setPosition({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        };

        navigator.geolocation.getCurrentPosition(handleSuccess);
    }, []);

    return { position};
};

export default usePosition;
