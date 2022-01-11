import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id : 'm1',
        title : 'A first Meetup',
        image : 'https://media.istockphoto.com/photos/rome-sunset-over-tiber-and-st-peters-basilica-vatican-italy-picture-id508540910',
        address:'Some address 5, 167t23,Some City',
        description : 'This is my first meet up',
    },
    {
        id : 'm2',
        title : 'A Second Meetup',
        image : 'https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        address:'Some address 5, 167t23,Some City',
        description : 'This is my second meet up',
    }
]

function HomePage(){{
    return(
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
}}

export default HomePage;