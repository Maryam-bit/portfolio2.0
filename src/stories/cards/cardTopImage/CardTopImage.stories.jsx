import React from 'react'

import { CardTopImage } from './CardTopImage.jsx'
export default {
    title: 'Components/Cards',
    component: CardTopImage,
   
}
const Template = (args) => <CardTopImage {...args} />;
export const card_top_image = Template.bind({});

card_top_image.args = {
    data: {
        name: "Card with Image on Top",
        image: "expense-tracker",
        previewLink: 'https://localhost:3001',
        codeLink: 'https://localhost:3001'
    },
};