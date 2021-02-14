window.vue = new Vue({
  el: "body",
  data: {
    showProject: false,
    projects: [],
    projectIndex: null,
    ready: false
  },
  methods: {
    switchProject: function (way) {
      if (!event.target.classList.contains("disabled")) this.projectIndex += way;
    },
    logoEffect: function () {
      console.log(event);
      let box = event.target.getBoundingClientRect();
      event.target.style.boxShadow = `${-(event.offsetX - box.width / 2)}px ${-(event.offsetY - box.height / 2)}px 20px 0px black`
    }
  },
  computed: {
    getProjectUrl: function () {
      return `https://turbowarp.org/${this.projects[this.projectIndex].id}/embed`;
    }
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
              url: "/projects.html"
            },
            {
              text: "links",
              url: "/links.html"
            },
            {
              text: "blog",
              url: "/blog.html"
            }
          ]
        };
      },
      template: `
      <nav>
        <ul>
          <li v-for="tab in navtabs">
            <a :href="tab.url">{{ tab.text }}</a>
          </li>
        </ul>
      </nav>`
    }
  }
});
(async () => {
  vue.projects = await (await fetch("https://cors-anywhere.herokuapp.com/https://api.scratch.mit.edu/users/TheColaber/projects/")).json()
  vue.projectIndex = vue.projects.length - 1;
  vue.ready = true;
})();
