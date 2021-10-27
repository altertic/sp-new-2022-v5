<template>
  <form>
    <!-- Name -->
    <div class="field">
      <label class="label is-medium">Nom</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="text" placeholder="Pierre Dupont" />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="user" />
        </span>
      </div>
    </div>
    <!-- Email -->
    <div class="field">
      <label class="label is-medium">Email</label>
      <div class="control has-icons-left">
        <input
          class="input is-medium"
          type="email"
          placeholder="you@email.com"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="envelope" />
        </span>
      </div>
    </div>
    <!-- Subject -->
    <div class="field">
      <label class="label is-medium">Sujet</label>
      <div class="control has-icons-left">
        <input
          class="input is-medium"
          type="text"
          placeholder="Brief Summary"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="briefcase" />
        </span>
      </div>
    </div>
    <!-- Message -->
    <div class="field">
      <label class="label is-medium">Message</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Faites-nous part de vos demandes, questions, suggestions..."
          rows="8"
        ></textarea>
      </div>
    </div>
    <div class="control">
      <button class="button is-primary">
        Contactez-Nous
      </button>
    </div>
  </form>
</template>
