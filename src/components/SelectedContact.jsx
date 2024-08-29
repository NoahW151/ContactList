import {useEffect, useState} from "react";

export default function SelectedContact({setSelectedContactId, selectedContactId})
{
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
          try {
            const res = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/" + selectedContactId).then(data => data.json());
            setContact(res.name);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContact()
      }, []);

      return(
        <div>{contact}</div>
      );
}