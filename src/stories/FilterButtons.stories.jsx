import React from 'react'

import { FilterButtons } from './FilterButtons'
export default {
    title: 'Components/Buttons',
    component: FilterButtons,
   
}
const Template = (args) => <FilterButtons {...args} />;
export const FilterButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

FilterButton.args = {
    projectCategories: ['Mern stack', 'Mevn Stack', 'Jam Stack'],
    filterCategory: (category) => {
        return;
    }
};