export interface Sideitem {
    name: string;
    active: boolean;
}
export interface Sidemenu { 
    name: string;
    focused: boolean;
    items: Sideitem[];
}

export const MENUS : Sidemenu[] = [
    { name: "group1", 
      focused: false, 
      items: [ { name: "item1",  active: false },
               { name: "item2",  active: false },
               { name: "item2",  active: false } ] 
    },
    { name: "group1", 
      focused: false, 
      items: [ { name: "item4",  active: false },
               { name: "item5",  active: false },
               { name: "item6",  active: false } ] 
    } 
];
