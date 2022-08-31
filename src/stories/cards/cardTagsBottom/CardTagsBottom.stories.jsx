import React from 'react'

import { CardTagsBottom } from './CardTagsBottom'
export default {
    title: 'Components/Cards',
    component: CardTagsBottom,
   
}
const Template = (args) => <CardTagsBottom {...args} />;
export const Card = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Card.args = {
    data: {
        name: "Card with Tags",
        image: "mern-stack",
        tag: [
            "tag1",
            "tag2",
            "tag3",
            "tag4",
        ],
    },
};