<template>
    <v-navigation-drawer app v-model="drawer" fixed hide-overlay expand-on-hover permanent dark>
        <template v-slot:prepend>
            <v-list>
                <v-list-item>
                    <v-avatar class="aviImg" width="100%" height="100%">
                        <v-hover>
                            <template v-slot:default="{ hover }">
                                <v-card class="mx-auto" shaped>
                                    <v-img
                                        src="https://avatars3.githubusercontent.com/u/35884411?s=460&v=4"
                                    ></v-img>
                                    <v-fade-transition>
                                        <v-overlay v-if="hover" absolute color="#036358">
                                            <div class="gitButton">
                                                <v-btn>GitHub</v-btn>
                                            </div>
                                        </v-overlay>
                                    </v-fade-transition>
                                </v-card>
                            </template>
                        </v-hover>
                    </v-avatar>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="title">Hunter Carr</v-list-item-title>
                        <v-list-item-subtitle>hontercarr@gmail.com</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </template>

        <v-divider></v-divider>

        <v-list nav dense>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-icon>
                    <v-icon class="white--text">{{ link.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { icon: "mdi-folder", text: "Projects", route: "/projects" },
                { icon: "mdi-account-box", text: "About", route: "/about" },
                { icon: "mdi-email", text: "Contact", route: "/contact" }
            ]
        };
    }
};
</script>

<style scoped>
.aviImg {
    margin-bottom: 15px;
}
</style>