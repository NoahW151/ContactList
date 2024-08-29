import {useState, useEffect} from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

export default function ContactList({setSelectedContactId})
{
    useEffect(() => {
        async function fetchContacts() {
          try {
            const res = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users").then(data => data.json());
            setContacts(res);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContacts()
      }, []);
    const [contacts, setContacts] = useState(dummyContacts);
    const getData = async () => {
        const data = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users").then(res => res.json());
        console.log(data)
        return data;
    }
    console.log("Contacts" + contacts)
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={3}>Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {contacts.map(contact => {
                    return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
                })}
            </tbody>
        </table>
    )
}