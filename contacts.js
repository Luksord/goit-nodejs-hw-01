import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");

export const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.log("Error reading contacts: ", error.message);
  }
};

export const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contact = contacts.find((contact) => contact.id === contactId);
    if (contact) {
      return contact;
    } else {
      console.log(`There is no contact with the id: ${contactId}`);
    }
  } catch (error) {
    console.error("Error getting contact: ", error.message);
  }
};

export const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    if (contacts.length !== updatedContacts.length) {
      await fs.writeFile(
        contactsPath,
        JSON.stringify(updatedContacts, null, 2)
      );
      console.log(`Contact ${contactId} have been removed`);
      return updatedContacts;
    } else {
      console.log(`There is no contact with the id: ${contactId}`);
    }
  } catch (error) {
    console.error("Error removing contact: ", error.message);
  }
};

export const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    console.log(`${name} has been added to your contacts`);
    return newContact;
  } catch (error) {
    console.error("Error adding contact: ", error.message);
  }
};
