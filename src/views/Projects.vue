<template>
    <div class="projects">
        <v-card class="projectCard" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4">GitHub</div>
                    <v-list-item-title class="headline mb-1">Vue Calendar App</v-list-item-title>
                    <v-list-item-subtitle>Calendar Application made with Vue.js and Vuetify</v-list-item-subtitle>
                </v-list-item-content>

                <v-icon tile size="60">mdi-dns</v-icon>
            </v-list-item>

            <v-card-actions>
                <v-btn text>
                    <a href="https://github.com/hontercarr/vue-calendar">View Repo</a>
                </v-btn>
                <v-btn text>
                    <a href="https://calendar.hxnter.com">View Demo</a>
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card class="projectCard" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4">GitHub</div>
                    <v-list-item-title class="headline mb-1">Vue Postboard App</v-list-item-title>
                    <v-list-item-subtitle>Postboard Application made with Vue.js</v-list-item-subtitle>
                </v-list-item-content>

                <v-icon tile size="60">mdi-dns</v-icon>
            </v-list-item>

            <v-card-actions>
                <v-btn text>
                    <a href="https://github.com/hontercarr/vue-postboard">View Repo</a>
                </v-btn>
                <v-btn text>
                    <a href="https://posts.hxnter.com">View Demo</a>
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card class="projectCard" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4">GitHub</div>
                    <v-list-item-title class="headline mb-1">Invoice App</v-list-item-title>
                    <v-list-item-subtitle>Invoice System for Mr. Erik Farrar built with Node.js, Express, Handlebars, and MongoDB</v-list-item-subtitle>
                </v-list-item-content>

                <v-icon tile size="60">mdi-dns</v-icon>
            </v-list-item>

            <v-card-actions>
                <v-btn text>
                    <a href="https://github.com/hontercarr/Invoice-System">View Repo</a>
                </v-btn>
                <v-btn text>Demo Unavailable</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style scoped>
.projectCard {
    align-content: center;
    text-align: left;
    margin-top: 5%;
    margin-left: 20%;
    margin-right: 20%;
}

a {
    color: #3b3b3b !important;
    text-decoration: none;
}
</style>