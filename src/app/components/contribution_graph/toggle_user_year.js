import SelectAccount from "./select_account";
import SelectYear from "./select_year";
import MoreActions from "../../../../public/more_actions.svg";
import { useState, useEffect, useRef } from 'react';

export default function ToggleUserYear() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [mouseDistance, setMouseDistance] = useState(0);
    const componentRef = useRef(null);

    // Function to calculate distance from mouse to the component
    const calculateDistance = (mouseX, mouseY, elementX, elementY) => {
        const dx = mouseX - elementX;
        const dy = mouseY - elementY;
        return Math.sqrt(dx * dx + dy * dy); // Euclidean distance formula
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (componentRef.current) {
                const componentRect = componentRef.current.getBoundingClientRect();
                const mouseX = e.clientX;
                const mouseY = e.clientY;

                // Calculate the distance from the mouse to the center of the component
                const componentCenterX = componentRect.left + componentRect.width / 2;
                const componentCenterY = componentRect.top + componentRect.height / 2;

                const distance = calculateDistance(mouseX, mouseY, componentCenterX, componentCenterY);
                setMouseDistance(distance);

                // Show the component if the mouse is far enough (e.g., 200px away)
                if (distance > 150) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            }
        };

        const handleMouseEnter = () => {
            setIsHovered(true); // Mouse enters the component
            setIsVisible(false); // Hide the component when hovering over it
        };

        const handleMouseLeave = () => {
            setIsHovered(false); // Mouse leaves the component
        };

        // Add mouse move event listener
        window.addEventListener('mousemove', handleMouseMove);
        if (componentRef.current) {
            componentRef.current.addEventListener('mouseenter', handleMouseEnter);
            componentRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        // Cleanup event listeners
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (componentRef.current) {
                componentRef.current.removeEventListener('mouseenter', handleMouseEnter);
                componentRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="flex justify-between items-center bg-gray-50 drop-shadow-sm rounded-lg px-3">
            <div className="flex gap-2 my-2">
                <SelectAccount />
                <SelectYear />
            </div>
            <button ref={componentRef} className="bg-white p-2 drop-shadow-sm rounded-lg hover:border border-pink-500">
                <MoreActions className="size-4 lg:size-5" />
            </button>

            <div className={`${isVisible ? 'block' : 'hidden'} hover:block absolute text-sm right-16 -bottom-3 py-2 px-3 rounded-lg drop-shadow-sm bg-white hover:border-b border-b-pink-500`}>
                <button>export contribution graph</button>
            </div>
        </div>
    );
}