<template>
  <div class="w-[1200px] h-[800px] bg-green-100">
    <h1>Add contact</h1>
    <div v-if="errors.length">
      <u>
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </u>
    </div>
    <form @submit.prevent="saveContact" novalidate>
      <fieldset>
        <div>
          <label> </label>
          <input type="text" placeholder="name" v-model="contact.name" />
        </div>
        <div>
          <label> </label>
          <input type="text" placeholder="email" v-model="contact.email" />
        </div>
        <label> </label>
        <input
          type="text"
          placeholder="designation"
          v-model="contact.designation"
        />
        <div>
          <label> </label>
          <input
            type="text"
            placeholder="contact no."
            v-model="contact.contact_no"
          />
        </div>

        <button>Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddContact",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        designation: "",
        contact_no: "",
      },
      errors: [],
    };
  },
  methods: {
    async saveContact() {
      this.errors = [];
      if (!this.contact.name) {
        this.errors.push("Name is required");
      }

      if (!this.contact.email) {
        this.errors.push("Email is required");
      }

      if (!this.contact.designation) {
        this.errors.push("Designation is required");
      }

      if (!this.contact.contact_no) {
        this.errors.push("Contact No. is required");
      }

      if (!this.errors.length) {
        // need ang formData to send key-value pairs thru api and to construct a set of key-value pairs

        let formData = new FormData();
        formData.append("name", this.contact.name);
        formData.append("email", this.contact.email);
        formData.append("designation", this.contact.designation);
        formData.append("contact_no", this.contact.contact_no);
        let url = "http://127.0.0.1:8000/api/save_contact";
        await axios.post(url, formData).then((response) => {
          console.log(response);
          if (response.status == 200) {
            alert(response.data.message);
          }
        });
      }
    },
  },
};
</script>
