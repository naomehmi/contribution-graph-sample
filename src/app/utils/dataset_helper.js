import userContributions from '@/data/datasets/user_contributions.json';

export default class DatasetHelper {
    static find (username, year) {
        const allContributions = userContributions.data;
        const foundQuery       = allContributions.find((contribution) => 
            contribution.user == username && contribution.year == year
        );

        return foundQuery;
    }
}