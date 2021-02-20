window.vue = new Vue({
  el: "body",
  data: {
    projects: [
      {
        name: "ScratchAddons",
        description: "A browser extension that makes Scratch 100 times better!",
        link: "https://github.com/ScratchAddons/ScratchAddons"
      },
      {
        name: "Text2HTML",
        description: "Parces text and returns it! Done with pure JS to aviod using innerHTML and such.",
        link: "https://github.com/TheColaber/Text2HTML"
      }
    ]
  },
  methods: {
    logoEffect() {
      let box = event.target.getBoundingClientRect();
      event.target.style.boxShadow = `${-(event.offsetX - box.width / 2)}px ${-(event.offsetY - box.height / 2)}px 20px 0px black`
    }
  },
  computed: {

  },
  components: {
    'navbar': {
      data: () => {
        return {
          navtabs: [
            {
              text: "home",
              url: "/"
            },
            {
              text: "projects",
              url: "/projects"
            },
            {
              text: "blog",
              url: "/blog"
            }
          ]
        };
      },
      template: `
      <nav>
        <ul>
          <li v-for="tab of navtabs">
            <a :href="tab.url">{{ tab.text }}</a>
          </li>
        </ul>
      </nav>`
    }
  }
});
