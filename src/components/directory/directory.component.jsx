import React from "react";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          id: 1,
          title: "Hats",
          size: "",
          imageUrl:
            "https://m.media-amazon.com/images/I/61S1-U2OuYL._AC_UX679_.jpg",
          linkUrl: "test",
        },

        {
          id: 6,
          title: "Shirts",
          size: "",
          imageUrl:
            "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C718ql28D2EL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX466_.png",
        },

        {
          id: 3,
          title: "Rings",
          size: "",
          imageUrl:
            "https://m.media-amazon.com/images/I/718f9-S2HoL._AC_UL320_.jpg",
        },
        {
          id: 4,
          title: "Men",
          size: "large",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmvCO6J8Fy5R14MHQ8tqdV_YyYzbIqqEYEg&usqp=CAU",
        },
        {
          title: "womens",
          imageUrl:
            "https://i.pinimg.com/474x/cf/5e/db/cf5edb5d119838b35334ac5333adea7b--yemeni-people-ethnic-dress.jpg",
          size: "large",
          id: 7,
          linkUrl: "shop/womens",
        },
      ],
    };
  }

  render() {
    return (
      <div className='flex flex-wrap content-between w-full '>
        {this.state.section.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
