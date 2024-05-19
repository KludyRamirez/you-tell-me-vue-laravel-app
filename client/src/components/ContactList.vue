<template>
  <div class="w-[1200px] h-[800px] bg-blue-100">
    <table class="w-[100%]">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Designation</th>
          <th scope="col">Contact No.</th>
        </tr>
      </thead>
      <tbody v-for="contact in contacts" :key="contact.id">
        <tr class="">
          <th scope="row">{{ contact.id }}</th>
          <th scope="row">{{ contact.name }}</th>
          <th scope="row">{{ contact.email }}</th>
          <th scope="row">{{ contact.designation }}</th>
          <th scope="row">{{ contact.contact_no }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactList",
  data() {
    return {
      contacts: Array,
    };
  },
  created() {
    this.getContacts();
  },

  methods: {
    async getContacts() {
      let url = `http://127.0.0.1:8000/api/contacts`;
      await axios
        .get(url)
        .then((res) => {
          this.contacts = res.data.contacts;
          console.log(this.contacts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    console.log("Contact List Component mounted");
  },
};
</script>
