'use client';

import MonthlyCalendar from "./contribution_graph/monthly_calendar";
import { useGlobalContext } from "@/app/context/context";
import DatasetHelper from "@/app/utils/dataset_helper";
import ColorSpectrum from "./contribution_graph/color_spectrum";
import ToggleUserYear from "./contribution_graph/toggle_user_year";

export default function ContributionPanel () {
    const { user, year } = useGlobalContext();
    const contribution = DatasetHelper.find(user.username, year);
    return (
        <div className="rounded-2xl bg-white py-3 px-5 drop-shadow-sm z-50">
            <ToggleUserYear />

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-3 pt-5 pb-2 -z-50">
                {
                    Object.entries(contribution.data).map(([monthName, totalContributions]) => 
                        <MonthlyCalendar
                            key={monthName}
                            monthName={monthName}
                            totalContributions={totalContributions}
                        />
                    )
                }
            </div>

            <ColorSpectrum />
        </div>
    );
}