// import {  } from "./actions";

import { UPDATE_LIST_ITEMS } from "../actions";

const initState = {
    currency: "USD",
    currenciesList: ["USD", "EUR"],
    sizes: ["Small", "Medium", "Big", "Familiar"],
    pizzasList: [],
    carouselItems: [
        {
            id: 1,
            title: "Pichinolli Especial",
            content:
                "Anim id proident sit ullamco laboris minim ipsum ullamco enim cillum. Laborum ut magna fugiat veniam cupidatat tempor qui consectetur. Veniam excepteur elit enim amet reprehenderit nostrud laboris elit mollit velit cupidatat aliqua incididunt. Velit ullamco officia dolore esse ad enim sunt eiusmod labore minim. Ullamco reprehenderit pariatur veniam cillum ipsum labore magna est.",
            linkURL: "#",
            linkCaption: "¡LO QUIERO YA!",
            image: "/images/starredPosts/pizzaBg1.jpg",
        },
        {
            id: 2,
            title: "Title 2",
            content:
                "Duis magna et irure proident ea aliqua aliqua culpa proident est velit laboris laboris velit. Sunt excepteur in incididunt ullamco cillum aute ut. Incididunt nulla eu sit Lorem incididunt.",
            linkURL: "#",
            linkCaption: "¡LO QUIERO YA!",
            image: "/images/starredPosts/pizzaBg2.jpg",
        },
    ],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_LIST_ITEMS:
            return {
                ...state,
                pizzasList: [...action.listItems],
            };

        default:
            return {
                ...state,
            };
    }
};

export default reducer;
