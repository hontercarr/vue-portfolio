<template>
    <div class="about">
        <v-row class="expansionPanels" justify="center">
            <v-expansion-panels inset>
                <v-expansion-panel>
                    <v-expansion-panel-header class="panelHeader">
                        Experience
                        <v-divider class="divider" vertical light></v-divider>
                        <v-icon class="panelIcon">fab fa-node-js</v-icon>
                        <v-icon class="panelIcon">fab fa-react</v-icon>
                        <v-icon class="panelIcon">fab fa-vuejs</v-icon>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        In terms of web development I've had experience working
                        and building projects with Javascript, Node.js, React.js,
                        Redux, Vue, and Vuetify. I've also had experience working with
                        languages such as C++, C#, and Python.
                        <br />
                        <br />Projects related to my
                        experience with these aforementioned technologies can be found
                        on my
                        <a
                            href="https://github.com/hontercarr"
                        >GitHub</a> page.
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>

        <v-row class="expansionPanels" justify="center">
            <v-expansion-panels inset>
                <v-expansion-panel>
                    <v-expansion-panel-header class="panelHeader">
                        Education
                        <v-divider class="divider" vertical light></v-divider>
                        <v-icon class="panelIcon">fab fa-sistrix</v-icon>
                        <v-icon class="panelIcon">fab fa-medapps</v-icon>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        During the beginning of high school I worked on small projects related
                        mostly to HTML, CSS, and a little Javascript. By my final year of my
                        secondary education I was building fullstack applications with my friends
                        for teachers to use and just for fun. Currently I am attending college at
                        Madison College, soon to transfer to a four year university to get my
                        degree in computer science.
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>

        <v-row class="expansionPanels" justify="center">
            <v-expansion-panels inset>
                <v-expansion-panel>
                    <v-expansion-panel-header class="panelHeader">
                        Resume
                        <v-divider class="divider" vertical light></v-divider>
                        <v-icon class="panelIcon">fab fa-linkedin</v-icon>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        As of right now I do not have a resume available for viewing. Due to
                        this fact I am not currently seeking employment. If you have any questions
                        please refer to the Contact section.
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>

        <v-card class="test">
            <v-app-bar dark color="blue darken-2">
                <v-toolbar-title>Web Presence</v-toolbar-title>

                <v-spacer></v-spacer>
            </v-app-bar>

            <v-container>
                <v-row dense>
                    <v-col cols="12">
                        <v-card color="blue darken-4" dark>
                            <v-card-title class="headline">Discord</v-card-title>

                            <v-card-subtitle>You can message me anytime on Discord either by adding hxnter#7824 or joining my public Discord server by clicking the button below.</v-card-subtitle>

                            <v-card-actions>
                                <v-btn text>
                                    <a href="https://discord.gg/7SvtzwS">Join my Discord server</a>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12">
                        <v-card dark>
                            <v-card-title class="headline">Steam</v-card-title>

                            <v-card-subtitle>
                                I'm often online on steam so if I'm unavailable on Discord this is a good second option. If I'm unavailable on both please view my
                                <router-link to="/contact">
                                    <p class="contactLink">Contact section.</p>
                                </router-link>
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn text>
                                    <a
                                        href="https://steamcommunity.com/id/hontingwabbits/"
                                    >Add me on Steam</a>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({})
};
</script>

<style scoped>
.expansionPanels {
    margin-left: 20%;
    margin-right: 20%;
}
.divider {
    margin-left: 25%;
    margin-right: 25%;
    color: black;
    border-color: white;
}

a {
    color: #1c8cc0 !important;
    text-decoration: none;
    font-weight: bold;
}

.test {
    margin-top: 5%;
    margin-left: 20%;
    margin-right: 20%;
}

.contactLink {
    color: white;
    font-weight: bold;
}
</style>
