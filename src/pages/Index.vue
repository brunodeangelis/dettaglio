<template>
  <Layout class="container mx-auto px-5 md:px-0">
    <header>
      <div class="flex justify-center">
        <g-image src="@/assets/logo.png" alt="logo Dettaglio" />
      </div>
      <div class="text-center mt-8">
        <h1 class="text-4xl text-primary">We create digital products</h1>
      </div>
    </header>
    <main class="mt-16">
      <div class="flex flex-col md:flex-row md:justify-center">
        <article
          v-for="(user, i) in users"
          :key="i"
          class="mb-12 mx-auto md:mb-0 md:px-6 lg:px-8 xl:px-16"
        >
          <figure>
            <g-image
              :src="`/img/${user.pic}`"
              :alt="`profile photo of ${user.name}`"
              class="rounded-lg mb-4"
            />
            <figcaption>
              <h2 class="text-4xl text-primary font-bold">{{ user.name }}</h2>
              <h3 class="tracking-wide uppercase text-xl text-gray-600">{{ user.role }}</h3>
            </figcaption>
          </figure>
          <div class="flex mt-4">
            <div v-for="(method, index) in user.contactMethods" :key="index" class="mr-2">
              <a v-if="method.name == 'mail'" :href="`mailto:${method.address}`" target="_blank">
                <img src="@/assets/mail.svg" alt="mail icon" />
              </a>
              <a v-if="method.name == 'github'" :href="method.address" target="_blank">
                <img src="@/assets/github.svg" alt="github icon" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Inicio"
  },
  data() {
    return {
      users: [
        {
          name: "Bruno De Angelis",
          role: "Multimedia Designer",
          pic: "bruno.png",
          contactMethods: [
            { name: "mail", address: "brunordeangelis@gmail.com" },
            { name: "github", address: "https://github.com/brunodeangelis" }
          ]
        },
        {
          name: "Franco Tarelli",
          role: "Multimedia Designer",
          pic: "franco.png",
          contactMethods: [{ name: "mail", address: "tarelli39@gmail.com" }]
        }
      ]
    };
  }
};
</script>

<style>
figure img {
  transition: filter 200ms ease;
  filter: grayscale(1);
}

article:hover figure img {
  filter: grayscale(0);
}
</style>
