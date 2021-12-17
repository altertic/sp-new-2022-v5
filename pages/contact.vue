<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Contacts"
      subtitle="Sport & Collection"
      image="/uploads/contact-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Contactez l'équipe
              </p>
              <p class="subtitle">
                de Sport et Collection
              </p>
              <figure class="image is-1by1 ">
                <opti-image
                  :src="require('~/assets/uploads/contact-person.jpg').src"
                  :srcset="
                    require('~/assets/uploads/contact-person.jpg').srcSet
                  "
                />
              </figure>
              <br />
              <div class="content">
                <p>
                  <strong>
                    Vous pouvez contacter l’équipe de Sport et Collection pour tout renseignement, demande d’informations complémentaires, proposition de partenariat etc.
                  </strong>
                </p>
                <p>
                  Nous recevons de très nombreuses demandes, notamment durant le mois précédent le début de la nouvelle édition de Sport et Collection « 500 Ferrari contre le cancer ». Nous vous prions, par conséquent, de bien vouloir prendre le temps de vérifier que les réponses à vos questions ne se trouvent pas déjà sur notre site. C’est notamment le cas, par exemple, de toutes les informations pratiques relatives aux dates et horaires d’ouverture, aux tarifs, au timing des différents plateaux proposés etc.
                </p>
                <p>
                  Vous trouverez, dans la section "Infos Pratiques" du site, un rappel des principales informations, à jour, relatives à l’édition de Sport & Collection à venir.
                </p>
                <p>
                  Si, après vérification, vous n’avez pas pu trouver de réponses sur le site, n’hésitez pas à nous envoyer un message via le formulaire ci-dessous.
                </p>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <contact-form />
            </article>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Dernières News
        </h3>
        <p>
          Retrouvez-nous au Salon Retromobile : Porte de Versailles à Paris du 2 au 6 février 2022 sur notre stand habituel, Hall 1.
        </p>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import ContactForm from '~/components/ContactForm'
export default {
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  },
  components: { ContactForm }
}
</script>
