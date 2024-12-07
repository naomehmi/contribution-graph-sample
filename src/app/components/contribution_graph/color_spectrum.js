import contributionColors from "@/data/constants/contribution_colors.json";
import ColorBox from "./color_box";

const grayText = (text) => <div className="text-xs lg:text-sm text-gray-400">{ text }</div>;

export default function ColorSpectrum () {
    return (
        <div className="flex gap-3 items-center justify-end">
            { grayText('Less') }
            <div className="flex gap-1">
                {
                    Object.values(contributionColors).map((color, index) => 
                        <ColorBox key={index} color={color} />
                    )
                }
            </div>
            { grayText('More') }
        </div>
    );
}