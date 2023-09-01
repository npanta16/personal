import { NavItems } from "@/models/Header"
import { Userobject } from "@/models/User"

export const userInfo: Userobject={
    name: "Narayan",
    picture: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
}
export const headerItems: NavItems = {
    home:{label:'Home', page:'home'},
    about:{label:'About',page:'about'},
    projects:{label:'Projects', page:'projects'}
}