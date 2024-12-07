import monthNames from '@/data/constants/month_names.json';
import contributionColors from "@/data/constants/contribution_colors.json";
import ColorBox from './color_box';

export default function MonthlyCalendar ({ monthName, totalContributions }) {
    const colors = Object.values(contributionColors);
    const month  = monthNames[monthName];
    return (
        <div className='pb-4'>
            <div className='text-center text-xs lg:text-sm text-gray-400 mb-3'>{month}</div>

            <div className="grid grid-cols-5 gap-1">
                {
                    totalContributions.map((contribution, index) => (
                        <div key={index} className="group">
                            <ColorBox color={colors[contribution]} />
                            
                            <div className="w-max text-xs text-white bg-pink-800 bg-opacity-60 p-1 rounded hidden group-hover:block absolute">
                                {contribution} contribution(s) on {month} {index+1}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}