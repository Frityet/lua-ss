import React, { useState, useEffect } from 'react';
import slides from '../data/slides';

function SlideManager()
{
    const [currentIndex, setCurrentIndex] = useState(0);
    const CurrentSlide = slides[currentIndex];

    useEffect(() =>
    {
        function handleKeyDown(event: KeyboardEvent)
        {
            if (event.key === 'ArrowRight') {
                goToNextSlide();
            } else if (event.key === 'ArrowLeft') {
                goToPreviousSlide();
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    function goToNextSlide()
    {
        setCurrentIndex((prevIndex) =>
            prevIndex < slides.length - 1 ? prevIndex + 1 : prevIndex
        );
    }

    function goToPreviousSlide()
    {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    }

    return (
        <div className="h-full w-full flex items-center justify-center">
            <CurrentSlide />
        </div>
    );
}

export default SlideManager;
