import NewMeetupPage from '../../components/meetups/NewMeetupForm';

function NewMeetup() {
    function addMeetupHandler(data){
        console.log(data);
    }

    return <NewMeetupPage onAddMeetup={addMeetupHandler} />
}


export default NewMeetup;